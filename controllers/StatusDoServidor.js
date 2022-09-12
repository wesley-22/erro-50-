'use strict';

var utils = require('../utils/writer.js');
var StatusDoServidor = require('../service/StatusDoServidorService');

module.exports.statusGET = function statusGET (req, res, next) {
  StatusDoServidor.statusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
