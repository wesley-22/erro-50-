'use strict';

var utils = require('../utils/writer.js');
var Empresas = require('../service/EmpresasService');

module.exports.empresasEmpresaIdFuncionariosGET = function empresasEmpresaIdFuncionariosGET (req, res, next, empresaId) {
  Empresas.empresasEmpresaIdFuncionariosGET(empresaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.empresasGET = function empresasGET (req, res, next) {
  Empresas.empresasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
