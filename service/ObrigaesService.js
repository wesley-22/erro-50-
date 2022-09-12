'use strict';


/**
 * Faz o envio dos dados para o cadastro de obrigações da empresa.
 *
 * cdempresa Integer Código da empresa.
 * returns inline_response_200_2
 **/
exports.obrigacoesGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo_doc" : "DARF - IRRF",
  "cdempresa" : 10000,
  "status" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza os dados para o cadastro de obrigações da empresa.
 *
 * returns response_200
 **/
exports.obrigacoesPATCH = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o envio dos dados para o cadastro de obrigações da empresa.
 *
 * returns response_200
 **/
exports.obrigacoesPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

