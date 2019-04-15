Blockly.Verilog['one'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 1;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };


  Blockly.Verilog['zero'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 0;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };


  Blockly.Verilog['high_impedence'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 'Z';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['dont_care'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 'X';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['logic_gates'] = function(block) {
    var value_args1 = Blockly.Verilog.valueToCode(block, 'args1', Blockly.Verilog.ORDER_ATOMIC);
    var dropdown_gate = block.getFieldValue('gate');
    var value_args2 = Blockly.Verilog.valueToCode(block, 'args2', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['pos_edge_clk'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 'posedge';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['neg_edge_clk'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 'negedge';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['always_blk'] = function(block) {
    var value_condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
    var statements_body = Blockly.Verilog.statementToCode(block, 'body');
    // TODO: Assemble Verilog into code variable.
    var code = 'always @ (' + value_condition + ')' + '\nBegin\n' + statements_body + '\n'+ 'End';
    return code;
  }

  Blockly.Verilog['decimal_number'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var length = value_name.length;
    var value = parseFloat(value_name)
    var binary = value.toString(2);
    var code = length + 'b' + binary + '\n';
    return code;
  };

  Blockly.Verilog['binary_number'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var length = value_name.length;
    var code = length + 'b' + value_name;
    return code + '\n';
  };

  Blockly.Verilog['hexa_number'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var length = value_name.length;
    var hexa = value_name.toString(16);
    var binary = hexa.toString(2);
    var code = length + 'b' + binary;
    return code + '\n';
  };

  Blockly.Verilog['octa_number'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var length = value_name.length;
    var octal = value_name.toString(8);
    var binary = octal.toString(2);
    var code = length + 'b' + binary;
    return code + '\n';
  };

  Blockly.Verilog['math_number'] = function(block) {
    var code = parseFloat(block.getFieldValue('NUM'));
    var order = code >= 0 ? Blockly.Verilog.ORDER_ATOMIC :
      Blockly.Verilog.ORDER_NEG;
    return [code, order];
  };


  
Blockly.Blocks['init_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Code sequence to be attached below");
    this.appendStatementInput("module")
        .setCheck(null)
        .appendField("Start by listing inputs and outputs");
    this.setColour(180);
 this.setTooltip("Module Declaration");
 this.setHelpUrl("http://www.asicguru.com/verilog/tutorial/modules/59/");
  }
};

Blockly.Verilog['init_module'] = function(block) {
  var statements_module = Blockly.Verilog.statementToCode(block, 'module');
  // TODO: Assemble Verilog into code variable.
  var code = '...;\n';
  return code;
}

Blockly.Blocks['input_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Declare variable");
    this.appendValueInput("var_name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("as Input");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Initialize a new input with a name to be inserted");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
};


Blockly.Verilog['input_block'] = function(block) {
  var value_var_name = Blockly.Verilog.valueToCode(block, 'var_name', Blockly.Verilog.ORDER_ATOMIC);
  // TODO: Assemble Verilog into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['output_block'] = {
  init: function() {
    this.appendValueInput("output")
        .setCheck("String")
        .appendField("Declare variable ");
    this.appendDummyInput()
        .appendField("as Output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Initialize an output with any name");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
}


Blockly.Verilog['output_block'] = function(block) {
  var value_output = Blockly.Verilog.valueToCode(block, 'output', Blockly.Verilog.ORDER_ATOMIC);
  // TODO: Assemble Verilog into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Blocks['wire_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Declare variable");
    this.appendDummyInput()
        .appendField("as Wire");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Initialize a new wire with any name.");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
};


Blockly.Verilog['wire_block'] = function(block) {
  var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  // TODO: Assemble Verilog into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Blocks['neg_edge_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Falling edge of reset pin");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("https://electronics.stackexchange.com/questions/163018/asynchronous-reset-in-verilog");
  }
};


Blockly.Verilog['neg_edge_reset'] = function(block) {
  // TODO: Assemble Verilog into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Verilog.ORDER_NONE];
};


Blockly.Blocks['pos_edge_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rising edge of reset");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("https://electronics.stackexchange.com/questions/163018/asynchronous-reset-in-verilog");
  }
};


Blockly.Verilog['pos_edge_reset'] = function(block) {
  // TODO: Assemble Verilog into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Verilog.ORDER_NONE];
};
