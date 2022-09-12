'use strict';

var utils = require('../utils/writer.js');
var Obrigaes = require('../service/ObrigaesService');

module.exports.obrigacoesGET = function obrigacoesGET (req, res, next, cdempresa) {
  Obrigaes.obrigacoesGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obrigacoesPATCH = function obrigacoesPATCH (req, res, next) {
  Obrigaes.obrigacoesPATCH()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obrigacoesPOST = function obrigacoesPOST (req, res, next) {
  Obrigaes.obrigacoesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
