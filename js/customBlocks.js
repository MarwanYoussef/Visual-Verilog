Blockly.Blocks['one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Input Value of One");
 this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['zero'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Input Value of Zero");
 this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['high_impedence'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Z");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("High Impedence");
 this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['dont_care'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("X");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Don't care");
 this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['always_blk'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("Always at");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Always Block to keep looping forever");
 this.setHelpUrl("http://referencedesigner.com/tutorials/verilog/verilog_16.php");
  }
};

Blockly.Blocks['decimal_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Decimal value");
    this.appendValueInput("val")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Enter a value in Decimal");
 this.setHelpUrl("https://verilogams.com/refman/basics/numbers.html");
  }
};

Blockly.Blocks['binary_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Binary value");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Enter a value in Binary");
 this.setHelpUrl("https://verilogams.com/refman/basics/numbers.html");
  }
};

Blockly.Blocks['hexa_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hexadecimal value");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Enter a value in Hexadecimal");
 this.setHelpUrl("https://verilogams.com/refman/basics/numbers.html");
  }
};

Blockly.Blocks['octa_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Octal Value");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Enter a value in Octal");
 this.setHelpUrl("https://verilogams.com/refman/basics/numbers.html");
  }
};

Blockly.Blocks['end_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("End");
  }
};

Blockly.Blocks['module_dec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create new module with name")
        .appendField(new Blockly.FieldTextInput("ModuleName"), "modName");
    this.appendDummyInput()
        .appendField("Write variables you'll use in the program")
        .appendField(new Blockly.FieldTextInput("varNames"), "varNames");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pos_edge'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Rising edge of");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("Rising edge");
 this.setHelpUrl("https://electronics.stackexchange.com/questions/326662/posedge-in-verilog");
  }
};

Blockly.Blocks['neg_edge'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Falling edge of");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(100);
 this.setTooltip("Rising edge");
 this.setHelpUrl("https://electronics.stackexchange.com/questions/326662/posedge-in-verilog");
  }
};

Blockly.Blocks['input_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Declare new variable")
        .appendField(new Blockly.FieldTextInput("VarName"), "NAME")
        .appendField("as Input");
    this.appendValueInput("size")
        .setCheck("Number")
        .appendField("This input consists of these number of bits");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Create a new Input variable");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
};

Blockly.Blocks['output_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Declare new variable")
        .appendField(new Blockly.FieldTextInput("VarName"), "NAME")
        .appendField("as Output");
    this.appendValueInput("size")
        .setCheck("Number")
        .appendField("This output consists of these number of bits");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("Create a new Output variable");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
};

Blockly.Blocks['wire_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Declare new variable")
        .appendField(new Blockly.FieldTextInput("VarName"), "NAME")
        .appendField("as Wire");
    this.appendValueInput("size")
        .setCheck("Number")
        .appendField("This wire could hold up to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("Create a new variable with wire type");
 this.setHelpUrl("http://www.asic-world.com/verilog/syntax3.html");
  }
};

Blockly.Blocks['and_block'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("AND");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
this.setTooltip("AND operator between two values");
this.setHelpUrl("https://en.wikipedia.org/wiki/Logical_conjunction");
  }
};

Blockly.Blocks['or_block'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("OR");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
this.setTooltip("OR operator between two values");
this.setHelpUrl("https://en.wikipedia.org/wiki/Logical_conjunction");
  }
};

Blockly.Blocks['not_block'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("Not");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Negate the operand");
 this.setHelpUrl("https://en.wikipedia.org/wiki/Negation");
  }
};

Blockly.Blocks['assign_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Assign")
        .appendField(new Blockly.FieldVariable("default"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Assign a variable a value");
 this.setHelpUrl("https://stackoverflow.com/questions/28751979/difference-between-behavioral-and-dataflow-in-verilog");
  }
};
