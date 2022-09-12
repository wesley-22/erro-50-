'use strict';


/**
 * Busca os dados da contratação do candidato a contratação.
 *
 * contratacao_id BigDecimal 
 * returns inline_response_201_1
 **/
exports.contratacoesContratacao_candidato_idGET = function(contratacao_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : "Minas Gerais",
  "cidade" : "Belo Horizonte",
  "nome_pai" : "JOSE SILVA",
  "bairro" : "Santa Tereza",
  "dt_ctps" : "1970-01-01",
  "cidade_nasc" : "Belo Horizonte",
  "estado_nasc" : "Minas Gerais",
  "emitente_rg" : "SPTC",
  "n_cpf" : 11582496080,
  "dt_rg" : "1970-01-01",
  "n_rg" : 123456,
  "n_rua" : "Rua Formosa",
  "nome_mae" : "JOSEFINA SILVA",
  "contratacao_id" : "contratacao_id",
  "n_ctps" : 645321,
  "dt_nasc" : "1952-12-31"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca os dados da contratação.
 *
 * contratacao_id BigDecimal 
 * returns contratacoes_contrato_response_200
 **/
exports.contratacoesContratacao_idGET = function(contratacao_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cdempresa" : 10000,
  "nome" : "JOAO DA SILVA",
  "data" : "2020-01-31",
  "func_id" : 1,
  "descricao_atividades" : "Execução de processos seletivos.",
  "hora_id" : 1,
  "salario" : 5000,
  "tipo_contrato" : "indeterminado",
  "email" : "joao@email.com",
  "telefone" : 2833990123,
  "whatsapp" : true,
  "dt_contratacao" : "2020-01-31",
  "status" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza o status da contratação
 *
 * contratacao_id BigDecimal 
 * status Boolean 
 * returns inline_response_201
 **/
exports.contratacoesContratacao_idPATCH = function(contratacao_id,status) {
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
 * Permite o envio dos dados do candidato a ser contratado.
 *
 * contratacao_id String 
 * returns inline_response_200_1
 **/
exports.contratacoesContratacao_idPOST = function(contratacao_id) {
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
 * Busca lista de contratações de uma empresa.
 *
 * cdempresa BigDecimal 
 * returns inline_response_200_6
 **/
exports.contratacoesGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "0001", "0002", "0003" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona uma nova contratação.
 *
 * returns inline_response_200_1
 **/
exports.contratacoesPOST = function() {
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

