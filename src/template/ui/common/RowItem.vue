<template>
    <div class="col-md-12 mb-2 rowItem row" :id="row.name">
        <div class="tools">
            <font-awesome-icon icon="times" class="clickable" @click="removeRow(row.name)"></font-awesome-icon>
        </div>

        <component v-for="(control, index) in row.controls"
                   :is="CONTROL_TYPES[control.type].source.template"
                   :key="control.name"
                   :control="control"
                   @dblclick.native="openConfig(control)"
                   :ref="control.name"
                   :label-position="labelPosition">
        </component>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";
    import {CONTROL_TYPES} from "sethFormBuilder/config/control_constant";
    //import ControlItem from "./ControlItem";
    import {eventBus, EventHandlerConstant} from 'sethFormBuilder/template/handler/event_handler';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {Hooks} from 'sethFormBuilder/template/components/hook_lists';
    import {ControlHandler} from 'sethFormBuilder/template/handler/control_handler';

    export default {
        components: {FontAwesomeIcon},
        name: "row-item",
        props: {
            row: {
                type: Object,
                default: {}
            },
            labelPosition: null
        },
        data: () => ({
            CONTROL_TYPES,
            editing_control: null,
        }),
        methods: {
            addControl(controlType) {
                var controlInfo = _.cloneDeep(FORM_CONSTANTS.Control);
                controlInfo.type = controlType;
                // generate id
                controlInfo.name = _.domUniqueID(`control_${controlType}_`);
                controlInfo.label = FORM_CONSTANTS.Type[controlType].label;
                controlInfo.fieldName = controlInfo.name; // same for both

                // check if there's any more special fields?
                if(CONTROL_TYPES[controlType].other_properties) {
                    _.each(CONTROL_TYPES[controlType].other_properties, (value, key) => {
                        controlInfo[key] = value;
                    });
                }

                // before hook
                let b4Run = Hooks.Control.beforeAdd.runSequence(controlInfo, this.row);
                if (b4Run === false) {
                    return;
                }

                // add to row
                this.row.controls.push(controlInfo);

                // after hook
                Hooks.Control.afterAdd.run(controlInfo, this.row);
            },
            traverseControl() {
                let self = this;

                // prepare data
                var items = $(this.$el).find('.controlItem');
                var finalItems = [];

                // sort
                _.each(items, (item, index) => {
                    var id = $(item).attr('id');
                    var controlItem = _.find(self.row.controls, {name: id});
                    controlItem.order = index;
                    finalItems.push(controlItem);
                });

                // reset the current sections
                this.row.controls = finalItems;
            },
            removeRow(rowName) {
                this.$emit('removeRow', rowName);
            },

            // control
            openConfig(controlInfo) {
                ControlHandler.clearSelect();
                ControlHandler.setSelect(controlInfo.name);
                this.editing_control = controlInfo;
                eventBus.$emit(EventHandlerConstant.ACTIVATE_EDITOR_SIDEBAR, _.cloneDeep(controlInfo));
            }
        },
        created() {
            let self = this;

            // remove control bus
            eventBus.$on(EventHandlerConstant.REMOVE_CONTROL, ui => {
                // prepare data
                var id = ui.helper.attr('data-control-name');
                var controlIndex = _.findIndex(this.row.controls, {name: id});

                if (controlIndex < 0) {
                    return;
                }

                // before hook
                var controlInfo = this.row.controls[controlIndex];
                let beforeRun = Hooks.Control.beforeRemove.runSequence(controlInfo);
                if (beforeRun === false) {
                    return;
                }

                // remove control
                this.row.controls.splice(controlIndex, 1);

                // after hook
                Hooks.Control.afterRemove.run(controlInfo);
            });

            // update control bus
            eventBus.$on(EventHandlerConstant.ON_APPLY_EDITOR_SIDEBAR, control => {
                //var oldControl = _.find(this.row.controls, {name: control.name});
                let controlIndex = _.findIndex(self.row.controls, {name: control.name});
                if (controlIndex <= -1 || self.row.controls[controlIndex].name !== self.editing_control.name) {
                    return;
                }

                let oldControl = self.row.controls[controlIndex];
                // check if existed name in this section
                if (control.fieldName !== oldControl.fieldName && ControlHandler.isControlNameExisted(self.row.name, control.fieldName)) {
                    SethPhatToaster.error("This field Name is already existed in the current section.");
                    return;
                }

                // replace value
                var controlInfo = _.cloneDeep(control);
                _.each(controlInfo, (value, key) => {
                    self.row.controls[controlIndex][key] = value;
                });

                // update gui for specific control
                if (self.$refs[controlInfo.name]) {
                    if (_.isFunction(self.$refs[controlInfo.name].configUpdated)) {
                        self.$refs[controlInfo.name].configUpdated();
                    }
                }

                // replace
                this.$nextTick(() => {
                    ControlHandler.setSelect(oldControl.name);
                });
            });
        },
        mounted() {
            let self = this;
            $(this.$el).droppable({
                accept: ".control-wrapper",
                drop: function (event, ui){
                    self.addControl($(ui.draggable[0]).attr('data-control-type'));
                },
                over: function( event, ui ) {
                    ui.helper.css('border', '1px solid green');
                },
            });

            $(this.$el).sortable({
                cursor: "move",
                delay: 100,
                helper: 'clone',
                placeholder: "ui-state-highlight",
                update: function (event, ui) {
                    self.traverseControl();
                },
                start: function(e, ui){
                    ui.placeholder.height(ui.item.height());
                    ui.placeholder.width(ui.item.width());
                    ui.placeholder.css("border", "");
                    ui.placeholder.css("background-color", "#e74c3c");
                }
            }).disableSelection();
        }
    }
</script>

<style scoped>
    .rowItem {
        border-radius: 10px;
        background-color:rgba(0,0,0,.03);
        padding: 30px 10px;
        margin: 0;
        position: relative;
    }

    .rowItem .tools {
        position: absolute;
        top: 3px;
        right: 12px;
    }

    .clickable {
        cursor: pointer;
    }

    .ui-state-highlight { height: 1.5em; line-height: 1.2em; }
</style>
