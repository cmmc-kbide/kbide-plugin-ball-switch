Blockly.Blocks['ky_020_tilt_switch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-020 TILT SWITCH");
    this.appendValueInput("KY_020_TILT_SWITCH_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};