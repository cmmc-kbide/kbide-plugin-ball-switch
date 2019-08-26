Blockly.Blocks["ky_020_tilt_switch_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-020 TILT SWITCH");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_020_TILT_SWITCH_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_020_TILT_SWITCH_VALUE"),
          "KY_020_TILT_SWITCH_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };