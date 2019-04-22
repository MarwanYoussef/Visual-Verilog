Blockly.Verilog['one'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = ''+1;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Verilog.ORDER_NONE];
  };


  Blockly.Verilog['zero'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = ''+0;
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

  Blockly.Verilog['always_blk'] = function(block) {
    var value_condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
    var statements_body = Blockly.Verilog.statementToCode(block, 'body');
    // TODO: Assemble Verilog into code variable.
    var code = 'always @ (' + value_condition + ')' + 'begin\n' + statements_body + '\n'+ 'end';
    return code;
  }

  Blockly.Verilog['decimal_number'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    console.log(value_name)
    // TODO: Assemble Verilog into code variable.
    var length = value_name.length;
    console.log(length)
    var number = value_name.toString(2);
    console.log(number)
    var code = length + 'b' + number + '\n';
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
  
  Blockly.Verilog['module_dec'] = function(block) {
    var text_modname = block.getFieldValue('modName');
    var text_varnames = block.getFieldValue('varNames');
    // TODO: Assemble Verilog into code variable.
    var code = 'module ' + text_modname + ' ('+ text_varnames+ ')' + ';\n';
    return code;
  };
  
  Blockly.Verilog['end_module'] = function(block) {
    // TODO: Assemble Verilog into code variable.
    var code = 'endmodule\n';
    return code;
  };

  Blockly.Verilog['pos_edge'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'posedge ' + value_name;
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['neg_edge'] = function(block) {
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'negedge ' + value_name;
    return [code, Blockly.Verilog.ORDER_NONE];
  };

  Blockly.Verilog['input_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_size = Blockly.Verilog.valueToCode(block, 'size', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code;
    if(value_size == 0 || value_size == 1){
      code = 'INPUT ' + text_name + ';\n';
    }else{
      code = 'INPUT ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['output_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_size = Blockly.Verilog.valueToCode(block, 'size', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code;
    if(value_size == 0 || value_size == 1){
      code = 'OUTPUT ' + text_name + ';\n';
    }else{
      code = 'OUTPUT ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['wire_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_size = Blockly.Verilog.valueToCode(block, 'size', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code;
    if(value_size == 0 || value_size == 1){
      code = 'WIRE ' + text_name + ';\n';
    }else{
      code = 'WIRE ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['and_block'] = function(block) {
    var value_name1 = Blockly.Verilog.valueToCode(block, 'NAME1', Blockly.Verilog.ORDER_ATOMIC);
    var value_name2 = Blockly.Verilog.valueToCode(block, 'NAME2', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = value_name1 + '&' + value_name2 + ';\n'
    return code;
  };
  
  Blockly.Verilog['or_block'] = function(block) {
    var value_name1 = Blockly.Verilog.valueToCode(block, 'NAME1', Blockly.Verilog.ORDER_ATOMIC);
    var value_name2 = Blockly.Verilog.valueToCode(block, 'NAME2', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = value_name1 + '|' + value_name2 + ';\n';
    return code;
  };

  Blockly.Verilog['not_block'] = function(block) {
    var value_value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = '~'+value_value+';\n';
    return code;
  };

  Blockly.Verilog['assign_block'] = function(block) {
    var variable_var = Blockly.Verilog.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'assign ' + variable_var + ' =' + value_name+ ';\n';
    return code;
  };

  
