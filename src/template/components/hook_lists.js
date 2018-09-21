import {HookListFactory} from 'sethFormBuilder/base/hook_list_factory';

var Hooks = {};

Hooks.Section = {
    beforeAdd: HookListFactory.create(),
    afterAdd: HookListFactory.create(),

    beforeRemove: HookListFactory.create(),
    afterRemove: HookListFactory.create(),
};

Hooks.Row = {
    beforeAdd: HookListFactory.create(),
    afterAdd: HookListFactory.create(),

    beforeRemove: HookListFactory.create(),
    afterRemove: HookListFactory.create(),
};

Hooks.Control = {
    beforeAdd: HookListFactory.create(),
    afterAdd: HookListFactory.create(),

    beforeRemove: HookListFactory.create(),
    afterRemove: HookListFactory.create(),
};

Hooks.Sidebar = {
    beforeOpenConfig: HookListFactory.create(),
    afterOpenConfig: HookListFactory.create(),

    beforeApplyConfig: HookListFactory.create(),
    afterApplyConfig: HookListFactory.create(),
};

Hooks.push = function (path, func) {
    var listHook = _.accessStr(Hooks, path);
    if(listHook == null) {
        console.warn('Not found path: ' + path + ' in Hooks!');
        return false;
    }
    listHook.push(func);
};

Hooks.register = function(customHooks) {
    if(!_.isObject(customHooks)) {
        return false;
    }
    _.each(customHooks, function(customHook, path){
        Hooks.push(path, customHook);
    });
};

export {
    Hooks
}
