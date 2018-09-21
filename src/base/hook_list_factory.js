import {CallbackHandler} from "sethFormBuilder/base/callback_handler";

const DEFAULT_PRIORITY = 10;

class HookList {
	constructor() {
		this._listHook = [];
  	}

  	reset(){
  		this._listHook = [];
  	}

	_getFunctions(){
		return _.pluck(_.sortBy(this._listHook, 'priority'), 'fn');	// asc
	}


	_pushHook(hookItem){
		// {
 		//		priority: 10,
 		//		fn: function
		// }
		this._listHook.push(hookItem);
	}


	_pushItem(item){
		var hookItem = {
			priority: DEFAULT_PRIORITY,
			fn: null,
		}

		if(_.isFunction(item)) {
			hookItem.fn = item;
		}
		if(_.isObject(item)) {
			var attrs = _.pick(item, ['priority', 'fn']);
			_.extend(hookItem, attrs);
		}

	    if(hookItem.fn === null) {
	      	return false;
	    }

		return this._pushHook(hookItem);
	}

	push(func, priority = DEFAULT_PRIORITY){
	    if(_.isObject(func) ) {
	      	return this._pushItem(func);
	    }

	    if(_.isFunction(func)) {
	      	var item = {
	        	priority: priority,
	        	fn: func
	      	};
	      	return this._pushItem(item);
	    }

		if(_.isArray(func)) {
		    _.each(func, function(fn){
	          	var item = {
		        	priority: priority,
		        	fn: fn,
		      	};
		    	this._pushItem(item);
	       	});
		}
	}

	// run all function
	run(){
		var args = [];
		if(arguments.length > 0) {
			args = _.toArray(arguments);
		}
		return CallbackHandler.run(this._getFunctions(), args);
	}


	// run until a function return false
	runSequence() {
		var args = [];
		if(arguments.length > 0) {
			args = _.toArray(arguments);
		}
		return CallbackHandler.runSequence(this._getFunctions(), args);
	}

}

var HookListFactory = {};
HookListFactory.create = function () {
	return new HookList();
}

export {HookListFactory};
