'use strict';


/**
 * Retorna o arquivo PDF da guia com a ID especificada.
 *
 * guia_id BigDecimal ID do arquivo PDF.
 * returns byte[]
 **/
exports.guiasGET = function(guia_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna lista de todas as guias de uma competência.
 *
 * mes BigDecimal 
 * ano String 
 * returns inline_response_200_8
 **/
exports.guiasListaGET = function(mes,ano) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guia_id" : 1,
  "competencia" : "012022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202201 VENC 20_02_2022.pdf"
}, {
  "guia_id" : 2,
  "competencia" : "022022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202202 VENC 20_03_2022.pdf"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o envio de uma guia para armazenamento.
 *
 * body Object  (optional)
 * name String 
 * tipoGuia String 
 * returns inline_response_200_1
 **/
exports.guiasPOST = function(body,name,tipoGuia) {
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

