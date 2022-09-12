'use strict';

var utils = require('../utils/writer.js');
var Contrataes = require('../service/ContrataesService');

module.exports.contratacoesContratacao_candidato_idGET = function contratacoesContratacao_candidato_idGET (req, res, next, contratacao_id) {
  Contrataes.contratacoesContratacao_candidato_idGET(contratacao_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contratacoesContratacao_idGET = function contratacoesContratacao_idGET (req, res, next, contratacao_id) {
  Contrataes.contratacoesContratacao_idGET(contratacao_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contratacoesContratacao_idPATCH = function contratacoesContratacao_idPATCH (req, res, next, contratacao_id, status) {
  Contrataes.contratacoesContratacao_idPATCH(contratacao_id, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contratacoesContratacao_idPOST = function contratacoesContratacao_idPOST (req, res, next, contratacao_id) {
  Contrataes.contratacoesContratacao_idPOST(contratacao_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contratacoesGET = function contratacoesGET (req, res, next, cdempresa) {
  Contrataes.contratacoesGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contratacoesPOST = function contratacoesPOST (req, res, next) {
  Contrataes.contratacoesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
