'use strict';


/**
 * Retorna a lista de módulos disponiveis.
 *
 * returns inline_response_200_5
 **/
exports.modulosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mod_nome" : "mod_nome",
  "mod_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove um determinado módulo.
 *
 * mod_id BigDecimal 
 * returns inline_response_200_1
 **/
exports.modulosMod_idDELETE = function(mod_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona um novo módulo.
 *
 * mod_nome String 
 * mod_nivel Integer Define o nivel de acesso ao módulo: Administrador (1), Responsável da Empresa (2) ou Outorgado (3). 
 * returns inline_response_200_1
 **/
exports.modulosPOST = function(mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Altera um determinado módulo.
 *
 * mod_id BigDecimal 
 * mod_nome String  (optional)
 * mod_nivel BigDecimal Define o nivel de acesso ao módulo: Administrador (1), Responsável da Empresa (2) ou Outorgado (3).  (optional)
 * returns inline_response_200_1
 **/
exports.modulosPUT = function(mod_id,mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

