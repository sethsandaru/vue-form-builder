import {HookListFactory} from 'sethFormBuilder/base/hook_list_factory';

var Hooks = {};

// late hook
Hooks.Form = {
    beforeValidation: HookListFactory.create(),
    afterValidation: HookListFactory.create()
};

Hooks.Section = {
    beforeRegister: HookListFactory.create(),
    afterRegister: HookListFactory.create()
};

Hooks.Control = {
    beforeRegister: HookListFactory.create(),
    afterRegister: HookListFactory.create(),
    afterInit: HookListFactory.create()
};

Hooks.DynamicSection = {
    beforeInitClone: HookListFactory.create(),

    beforeAddInstance: HookListFactory.create(),
    afterAddInstance: HookListFactory.create(),

    beforeRemoveInstance: HookListFactory.create(),
    afterRemoveInstance: HookListFactory.create(),

    beforeSetValue: HookListFactory.create(),
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
