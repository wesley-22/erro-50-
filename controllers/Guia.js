'use strict';

var utils = require('../utils/writer.js');
var Guia = require('../service/GuiaService');

module.exports.guiasGET = function guiasGET (req, res, next, guia_id) {
  Guia.guiasGET(guia_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasListaGET = function guiasListaGET (req, res, next, mes, ano) {
  Guia.guiasListaGET(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasPOST = function guiasPOST (req, res, next, body, name, tipoGuia) {
  Guia.guiasPOST(body, name, tipoGuia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
