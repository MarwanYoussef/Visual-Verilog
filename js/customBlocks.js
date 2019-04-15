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

Blockly.Blocks['logic_gates'] = {
  init: function() {
    this.appendValueInput("args1")
        .setCheck(["Boolean", "Number"]);
    this.appendValueInput("args2")
        .setCheck(["Boolean", "Number"])
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"], ["XOR","xor"], ["NAND","nand"], ["NOR","nor"]]), "gate");
    this.setInputsInline(true);
    this.setOutput(true, ["Boolean", "Number"]);
    this.setColour(290);
 this.setTooltip("ar");
 this.setHelpUrl("https://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR");
  }
};

Blockly.Blocks['neg_edge_clk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Falling edge of the clock");
    this.setOutput(true, "custom");
    this.setColour(0);
 this.setTooltip("https://stackoverflow.com/questions/46170535/verilog-falling-edge-detection");
 this.setHelpUrl("https://stackoverflow.com/questions/46170535/verilog-falling-edge-detection");
  }
};


Blockly.Blocks['pos_edge_clk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rising edge of Clock");
    this.setOutput(true, "custom");
    this.setColour(160);
 this.setTooltip("https://www.chipverify.com/verilog/verilog-positive-edge-detector");
 this.setHelpUrl("https://www.chipverify.com/verilog/verilog-positive-edge-detector");
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