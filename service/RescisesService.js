'use strict';


/**
 * Efetua a consulta da lista de requisições no servidor.
 *
 * cdempresa Integer Código da empresa.
 * returns List
 **/
exports.rescisoesGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "resc_id" : 10000,
  "status" : "concluido"
}, {
  "resc_id" : 10000,
  "status" : "concluido"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o envio de documento para a plataforma.
 *
 * returns response_200
 **/
exports.rescisoesPATCH = function() {
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
 * Faz o envio de documento para a plataforma.
 *
 * body Object  (optional)
 * returns response_200
 **/
exports.rescisoesPOST = function(body) {
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
 * Faz o envio de documento para a plataforma.
 *
 * body Object  (optional)
 * returns response_200
 **/
exports.rescisoesPOST = function(body) {
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
 * Efetua remoção da requisição de rescisão no servidor.
 *
 * resc_id Integer Código identificador da rescisão.
 * returns response_200
 **/
exports.rescisoesResc_idDELETE = function(resc_id) {
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
 * Efetua a consulta da requisição no servidor.
 *
 * resc_id Integer Código identificador da rescisão.
 * returns inline_response_200_10
 **/
exports.rescisoesResc_idGET = function(resc_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idfuncionario" : "a11h6dk1y5u9811kg6k8hg3",
  "iniciativa" : "EMPREGADOR",
  "resc_id" : 1,
  "dt_rescisao" : "2000-01-23",
  "cdempresa" : 10000,
  "aviso" : "INDENIZADO",
  "tipo_resc" : "SEM JUSTA CAUSA"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

