
var CallbackHandler = function(){
    var instance = {};

    instance.runSequence = function(funcs, args) {
        if (_.isFunction(funcs)) {
            return funcs.apply(null, args);
        }

        if(_.isArray(funcs)) {
            for (var i = 0, len = funcs.length; i < len; ++i) {
                var func = funcs[i];
                if(!_.isFunction(func)) {
                    continue;
                }
                var res = func.apply(null, args);
                if(res === false) {
                    return false;
                }
            }
        }
    }

    instance.run = function(funcs, args){
        if (_.isFunction(funcs)) {
            return funcs.apply(null, args);
        }
        if(_.isArray(funcs)) {
            _.each(funcs, function(func){
                if(_.isFunction(func)) {
                    // func();
                    return func.apply(null, args);
                }
            });
        }
    }

    instance.runPromiseAll = function(funcs, args){
        var promises = [];
        _.each(funcs, function(func){
            if(_.isFunction(func)) {
                var p = func.apply(null, args);
                promises.push(p);
            }
        });
        return promiseAll(promises);
    }

    instance.runEach = function(listItem, func, args) {
        if(_.isUndefined(args) || _.isEmpty(args)) {
            args = [];
        }

        var promises = [];
        _.each(listItem, function(item){
            // add more argument
            args.unshift(item);
            // end added

            var p = func.apply(null, args);
            promises.push(p);
        })
        return promiseAll(promises);
    }

    return instance;
}();

export {
    CallbackHandler
}
