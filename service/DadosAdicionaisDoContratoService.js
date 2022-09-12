'use strict';


/**
 * Remove um CBO do cadastro.
 *
 * cbo_id String 
 * returns inline_response_200_1
 **/
exports.cboCbo_idDELETE = function(cbo_id) {
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
 * Busca os dados de CBO.
 *
 * cbo_id String 
 * returns inline_response_201_3
 **/
exports.cboCbo_idGET = function(cbo_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cbo_id" : "sucesso",
  "ocupacao" : "ocupacao",
  "subgrupo" : "subgrupo",
  "grande_grupo" : "grande_grupo",
  "subgrupo_principal" : "subgrupo_principal",
  "familia" : "familia"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona um novo CBO.
 *
 * returns inline_response_200_1
 **/
exports.cboPOST = function() {
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
 * Remove uma função.
 *
 * func_id BigDecimal 
 * returns inline_response_200_1
 **/
exports.funcaoFunc_idDELETE = function(func_id) {
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
 * Altera uma função.
 *
 * func_id BigDecimal 
 * func_nome String  (optional)
 * cbo_id BigDecimal  (optional)
 * returns inline_response_200_1
 **/
exports.funcaoFunc_idPATCH = function(func_id,func_nome,cbo_id) {
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
 * Busca as funções disponiveis para a empresa.
 *
 * cdempresa BigDecimal 
 * returns inline_response_201_2
 **/
exports.funcaoGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cbo_id" : 0,
  "func_nome" : "func_nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona uma função.
 *
 * func_nome String 
 * cbo_id BigDecimal 
 * returns inline_response_200_1
 **/
exports.funcaoPOST = function(func_nome,cbo_id) {
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
 * Busca os dados de horário.
 *
 * cdempresa BigDecimal 
 * returns hour_response_200
 **/
exports.horariosGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "descricao" : "SEGUNDA A SÁBADO DAS 13:00 ÀS 22:00",
  "seg_entrada" : "13:00",
  "seg_almoco_saida" : "17:00",
  "seg_amoco_retorno" : "18:00",
  "seg_saida" : "22:00",
  "ter_entrada" : "13:00",
  "ter_almoco_saida" : "17:00",
  "ter_amoco_retorno" : "18:00",
  "ter_saida" : "22:00",
  "quar_entrada" : "13:00",
  "quar_almoco_saida" : "17:00",
  "quar_amoco_retorno" : "18:00",
  "quar_saida" : "22:00",
  "quin_entrada" : "13:00",
  "quin_almoco_saida" : "17:00",
  "quin_amoco_retorno" : "18:00",
  "quin_saida" : "22:00",
  "sex_entrada" : "13:00",
  "sex_almoco_saida" : "17:00",
  "sex_amoco_retorno" : "18:00",
  "sex_saida" : "22:00",
  "sab_entrada" : "08:00",
  "sab_saida" : "12:00",
  "sab_intervalo" : "00:15"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove um horário cadastrado.
 *
 * hora_id BigDecimal 
 * returns inline_response_200_1
 **/
exports.horariosHora_idDELETE = function(hora_id) {
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
 * Altera um horário de trabalho já cadastrado.
 *
 * hora_id BigDecimal 
 * returns inline_response_201
 **/
exports.horariosHora_idPATCH = function(hora_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contratacao_id" : 0,
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
 * Cadastra um horário.
 *
 * returns inline_response_201
 **/
exports.horariosPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contratacao_id" : 0,
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

