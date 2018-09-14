<template>
    <div class="col-md-12 mb-2 rowItem row" :id="row.name">
        <div class="tools">
            <font-awesome-icon icon="times" class="clickable" @click="removeRow(row.name)"></font-awesome-icon>
        </div>

        <control-item v-for="(control, index) in row.controls"
                      :control="control"
                      :key="control.name">
        </control-item>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";
    import ControlItem from "./ControlItem";
    import {eventBus, EventHandlerConstant} from 'sethFormBuilder/template/handler/event_handler';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default {
        components: {ControlItem, FontAwesomeIcon},
        name: "row-item",
        props: {
            row: {
                type: Object,
                default: {}
            }
        },
        methods: {
            addControl(controlType) {
                var controlInfo = _.cloneDeep(FORM_CONSTANTS.Control);
                controlInfo.type = controlType;
                // generate id
                controlInfo.name = _.uniqueId(`control_${controlType}_`);
                controlInfo.label = FORM_CONSTANTS.Type[controlType].label;
                controlInfo.fieldName = controlInfo.name; // same for both

                // add to row
                this.row.controls.push(controlInfo);
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
            }
        },
        created() {
            eventBus.$on(EventHandlerConstant.REMOVE_CONTROL, ui => {
                // prepare data
                var id = $(ui.draggable[0]).attr('id');
                var controlIndex = _.findIndex(this.row.controls, {name: id});

                if (controlIndex < 0) {
                    return;
                }

                // remove control
                this.row.controls.splice(controlIndex, 1);
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
                update: function (event, ui) {
                    self.traverseControl();
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
</style>
