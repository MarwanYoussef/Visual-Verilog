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

  Blockly.Verilog['decimal_binary'] = function(block) {
    var value_val = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var value = parseFloat(value_val);
    var stringV = value.toString(2).length;
    var code = stringV + "'b" + value.toString(2) +';\n';
    return code;
  };

  Blockly.Verilog['decimal_hexa'] = function(block) {
    var value_val = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var value = parseFloat(value_val);
    var stringV = value.toString(16).length;
    var code = stringV + "'h" + value.toString(16) +';\n';
    return code;
  };

  Blockly.Verilog['decimal_octa'] = function(block) {
    var value_val = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var value = parseFloat(value_val);
    var stringV = value.toString(8).length;
    var code = stringV + "'o" + value.toString(8) +';\n';
    return code;
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
      code = 'input ' + text_name + ';\n';
    }else{
      code = 'input ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['output_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_size = Blockly.Verilog.valueToCode(block, 'size', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code;
    if(value_size == 0 || value_size == 1){
      code = 'output ' + text_name + ';\n';
    }else{
      code = 'output ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['wire_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_size = Blockly.Verilog.valueToCode(block, 'size', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code;
    if(value_size == 0 || value_size == 1){
      code = 'wire ' + text_name + ';\n';
    }else{
      code = 'wire ' + '['+ (parseInt(value_size)-1)+':'+'0] '+ text_name + ';\n';
    }
    return code;
  };

  Blockly.Verilog['and_block'] = function(block) {
    var text_gname = block.getFieldValue('gName');
    var text_oname = block.getFieldValue('oName');
    var value_arg1 = Blockly.Verilog.valueToCode(block, 'arg1', Blockly.Verilog.ORDER_ATOMIC);
    var value_arg2 = Blockly.Verilog.valueToCode(block, 'arg2', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'and ' + text_gname + ' (' + text_oname + ', ' + value_arg1 + ', ' + value_arg2
    + ' )' +';\n';
    return code;
  };
  
  Blockly.Verilog['or_block'] = function(block) {
    var text_gname = block.getFieldValue('gName');
    var text_oname = block.getFieldValue('oName');
    var value_arg1 = Blockly.Verilog.valueToCode(block, 'arg1', Blockly.Verilog.ORDER_ATOMIC);
    var value_arg2 = Blockly.Verilog.valueToCode(block, 'arg2', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'or ' + text_gname + ' (' + text_oname + ', ' + value_arg1 + ', ' + value_arg2
    + ' )' +';\n';
    return code;
  };

  Blockly.Verilog['not_gate'] = function(block) {
    var text_out = block.getFieldValue('out');
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'not ' + ' (' + text_out + ', ' + value_name + ' )'+ ';\n';
    return code;
  };

  Blockly.Verilog['assign_block'] = function(block) {
    var variable_var = Blockly.Verilog.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
    // TODO: Assemble Verilog into code variable.
    var code = 'assign ' + variable_var + ' = ' + value_name+ ';\n';
    return code;
  };

  
