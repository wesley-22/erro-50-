'use strict';

var utils = require('../utils/writer.js');
var DadosAdicionaisDoContrato = require('../service/DadosAdicionaisDoContratoService');

module.exports.cboCbo_idDELETE = function cboCbo_idDELETE (req, res, next, cbo_id) {
  DadosAdicionaisDoContrato.cboCbo_idDELETE(cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cboCbo_idGET = function cboCbo_idGET (req, res, next, cbo_id) {
  DadosAdicionaisDoContrato.cboCbo_idGET(cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cboPOST = function cboPOST (req, res, next) {
  DadosAdicionaisDoContrato.cboPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.funcaoFunc_idDELETE = function funcaoFunc_idDELETE (req, res, next, func_id) {
  DadosAdicionaisDoContrato.funcaoFunc_idDELETE(func_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.funcaoFunc_idPATCH = function funcaoFunc_idPATCH (req, res, next, func_id, func_nome, cbo_id) {
  DadosAdicionaisDoContrato.funcaoFunc_idPATCH(func_id, func_nome, cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.funcaoGET = function funcaoGET (req, res, next, cdempresa) {
  DadosAdicionaisDoContrato.funcaoGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.funcaoPOST = function funcaoPOST (req, res, next, func_nome, cbo_id) {
  DadosAdicionaisDoContrato.funcaoPOST(func_nome, cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosGET = function horariosGET (req, res, next, cdempresa) {
  DadosAdicionaisDoContrato.horariosGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosHora_idDELETE = function horariosHora_idDELETE (req, res, next, hora_id) {
  DadosAdicionaisDoContrato.horariosHora_idDELETE(hora_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosHora_idPATCH = function horariosHora_idPATCH (req, res, next, hora_id) {
  DadosAdicionaisDoContrato.horariosHora_idPATCH(hora_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.horariosPOST = function horariosPOST (req, res, next) {
  DadosAdicionaisDoContrato.horariosPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
