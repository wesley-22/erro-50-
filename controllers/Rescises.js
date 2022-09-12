'use strict';

var utils = require('../utils/writer.js');
var Rescises = require('../service/RescisesService');

module.exports.rescisoesGET = function rescisoesGET (req, res, next, cdempresa) {
  Rescises.rescisoesGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rescisoesPATCH = function rescisoesPATCH (req, res, next) {
  Rescises.rescisoesPATCH()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rescisoesPOST = function rescisoesPOST (req, res, next, body) {
  Rescises.rescisoesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rescisoesPOST = function rescisoesPOST (req, res, next, body) {
  Rescises.rescisoesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rescisoesResc_idDELETE = function rescisoesResc_idDELETE (req, res, next, resc_id) {
  Rescises.rescisoesResc_idDELETE(resc_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rescisoesResc_idGET = function rescisoesResc_idGET (req, res, next, resc_id) {
  Rescises.rescisoesResc_idGET(resc_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
