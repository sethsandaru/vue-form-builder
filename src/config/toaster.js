var SethPhatToaster = function () {
    var instance = {};

    var defaultVal = {
        ttl: 3000,
    };

    function buildOption(msg, type, afterClose, customOpts) {
        var option = {
            text: msg,
            type: type,
            timeout: defaultVal.ttl,
            progressBar: true,
        }
        if (_.isFunction(afterClose)) {
            option.callback = {
                afterClose: afterClose
            }
        }
        if (_.isObject(customOpts)) {
            for (var key in customOpts) {
                option[key] = customOpts[key];
            }
        }
        return option;
    };

    instance.hideModal = function () {
        $('#myModal').modal('hide');
    };
    instance.showModal = function () {
        $('#myModal').modal('show');
    };
    instance.isModal = function () {
        return $('#myModal').is(':visible');
    };

    var buildConfirmOption = function (msg, onYes, onNo, hasCancel, onCancel) {
        var option = {
            text: msg,
            type: 'information',
            closeWith: 'button',
            buttons: [
                {
                    addClass: 'btn btn-primary', text: "Có", onClick: function ($noty) {
                        if (_.isFunction(onYes)) {
                            onYes($noty)
                        }
                        // $('#myModal').modal('hide');
                        $noty.close();
                    },
                },
                {
                    addClass: 'btn btn-danger', text: "Không", onClick: function ($noty) {
                        if (_.isFunction(onNo)) {
                            onNo($noty)
                        }
                        if (!hasCancel) {
                            $('#myModal').modal('hide');
                        }
                        $noty.close();
                    },
                }
            ]
        };

        if (hasCancel) {
            option.buttons.push({
                addClass: 'btn btn-default', text: "Hủy bỏ", onClick: function ($noty) {
                    if (_.isFunction(onCancel)) {
                        onCancel($noty)
                    }
                    $('#myModal').modal('hide');
                    $noty.close();
                }
            })
        }
        return option;
    };

    instance.confirmWithCancel = function (msg, onYes, onNo, onCancel) {
        $('#myModal').modal('show');
        if (!msg) {
            msg = globalLang.are_you_sure;
        }
        var option = buildConfirmOption(msg, onYes, onNo, true, onCancel);
        noty(option);
    };

    instance.confirm = function (msg, onOk, onNo) {
        if (!msg) {
            msg = "Bạn chắc chắn muốn thực hiện điều này?";
        }

        $('#myModal').modal('show');
        var option = buildConfirmOption(msg, onOk, onNo, false);
        noty(option);
    };

    instance.serverNoty = function (response, afterClose, customOpts) {
        if (_.isObject(response) && _.has(response, 'noty')) {
            var message = response['noty']['title'] + ": " + response['noty']['message'];
            if (_.accessStr(response, 'noty.append_msg')) {
                message += ' ' + _.accessStr(response, 'noty.append_msg');
            }
            SethPhatToaster.show(message, response['noty']['priority'], afterClose, customOpts);
        }
    };

    instance.show = function (msg, type, afterClose, customOpts) {
        var option = buildOption(msg, type, afterClose, customOpts);
        noty(option);
    };

    instance.success = function (msg, afterClose, customOpts) {
        if (_.isEmpty(msg)) {
            msg = "Thực hiện tác vụ thành công!";
        }

        instance.show(msg, 'success', afterClose, customOpts);
    };

    instance.info = function (msg, afterClose, customOpts) {
        instance.show(msg, 'information', afterClose, customOpts);
    };
    instance.warning = function (msg, afterClose, customOpts) {
        instance.show(msg, 'warning', afterClose, customOpts);
    };

    instance.error = function (msg, afterClose, customOpts) {
        if (!_.isFunction(afterClose)) {
            afterClose = function () {
                SethPhatToaster.hideModal();
            };
        }
        instance.show(msg, 'error', afterClose, customOpts);
    };

    instance.server_error = function (afterClose, customOpts) {
        instance.error("Lỗi từ phía server, xin hãy thử lại sau!", afterClose, customOpts);
    };

    instance.form_error = function (postMessage, afterClose, customOpts) {
        var preMessage = global_lang['Error'] + ': ' + global_lang['form_error'];
        var message = preMessage;
        if (!_.isEmpty(postMessage)) {
            message += ' ' + postMessage;
        }
        instance.error(message, afterClose, customOpts);
    };

    instance.page_error = function (afterClose, customOpts) {
        instance.error("Có lỗi trên form của bạn, xin hãy kiểm tra lại!", afterClose, customOpts);
    };

    instance.action_success = function (afterClose, customOpts) {
        instance.success('', afterClose, customOpts);
    };

    instance.noty = function (response) {
        var deferred = $.Deferred();
        var res = !_.isObject(response) ? parseJSON(response) : response;
        if (_.isObject(res) && _.has(res, 'noty')) {
            if (res['noty']['priority'] == 'bypass') {
                deferred.resolve(res);
                return deferred;
            }

            var append_msg = !_.isUndefined(res['noty']['append_msg']) ? res['noty']['append_msg'] : '';
            SethPhatToaster.show(res['noty']['title'] + ": " + res['noty']['message'] + ' ' + append_msg, res['noty']['priority'], function () {
                if (res['noty']['priority'] == 'success') {
                    deferred.resolve(res);
                } else {
                    deferred.reject(res);
                }
            });
        } else {
            deferred.reject(res);
        }
        return deferred;
    };

    return instance;
}();

export {
    SethPhatToaster
}