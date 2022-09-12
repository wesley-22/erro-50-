'use strict';

var utils = require('../utils/writer.js');
var Mdulos = require('../service/MdulosService');

module.exports.modulosGET = function modulosGET (req, res, next) {
  Mdulos.modulosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modulosMod_idDELETE = function modulosMod_idDELETE (req, res, next, mod_id) {
  Mdulos.modulosMod_idDELETE(mod_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modulosPOST = function modulosPOST (req, res, next, mod_nome, mod_nivel) {
  Mdulos.modulosPOST(mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modulosPUT = function modulosPUT (req, res, next, mod_id, mod_nome, mod_nivel) {
  Mdulos.modulosPUT(mod_id, mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
