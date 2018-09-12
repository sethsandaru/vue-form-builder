var ControlHandler = {};

ControlHandler.clearSelect = function () {
    $(".controlItem").removeClass('onSelect');
};

ControlHandler.setSelect = function (controlID) {
    $("#" + controlID).addClass('onSelect');
};

ControlHandler.getSelectedItem = function () {
    return $(".onSelect").attr('id');
};

ControlHandler.isControlNameExisted = function (rowID, controlName) {
    var controls = $(`#${rowID}`).parents(".sectionBody").find(`[name='${controlName}']`);
    return controls.length >= 1;
};

export {
    ControlHandler
}
