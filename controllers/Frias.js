'use strict';

var utils = require('../utils/writer.js');
var Frias = require('../service/FriasService');

module.exports.feriasGET = function feriasGET (req, res, next, funcId) {
  Frias.feriasGET(funcId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
