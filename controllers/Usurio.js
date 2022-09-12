'use strict';

var utils = require('../utils/writer.js');
var Usurio = require('../service/UsurioService');

module.exports.usuarioCredenciaisPATCH = function usuarioCredenciaisPATCH (req, res, next) {
  Usurio.usuarioCredenciaisPATCH()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioIdDELETE = function usuarioIdDELETE (req, res, next, id) {
  Usurio.usuarioIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioIdGET = function usuarioIdGET (req, res, next, id) {
  Usurio.usuarioIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioIdPATCH = function usuarioIdPATCH (req, res, next, body, id, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome) {
  Usurio.usuarioIdPATCH(body, id, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioPOST = function usuarioPOST (req, res, next) {
  Usurio.usuarioPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
