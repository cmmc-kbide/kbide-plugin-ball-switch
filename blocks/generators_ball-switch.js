Blockly.JavaScript["ky_020_tilt_switch_block"] = function(block) {
    var text_ky_020_tilt_switch_pin = block.getFieldValue(
      "KY_020_TILT_SWITCH_PIN"
    );
    var variable_ky_020_tilt_switch_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_020_TILT_SWITCH_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int KY_020_TILT_SWITCH_PIN = ${text_ky_020_tilt_switch_pin};      // pin number for tilt switch signal
	int KY_020_TILT_SWITCH_STATE = 0;    // variable for reading the tilt switch status
	#END

	#SETUP
	  pinMode(KY_020_TILT_SWITCH_PIN, INPUT);  // set the tilt switch pin as input
	#END

	  // get the tilt switch state
	  KY_020_TILT_SWITCH_STATE = digitalRead(KY_020_TILT_SWITCH_PIN);
    `;
    return code;
  };