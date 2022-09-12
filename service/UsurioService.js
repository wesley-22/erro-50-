'use strict';


/**
 * Permite alterar a senha do login.
 *
 * returns inline_response_200_7
 **/
exports.usuarioCredenciaisPATCH = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove um usuário.
 *
 * id BigDecimal ID única do usuário.
 * returns response_200
 **/
exports.usuarioIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna os dados de usuário.
 *
 * id BigDecimal ID do funcionario.
 * returns inline_response_200
 **/
exports.usuarioIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 0,
  "nome" : "Nome do Usuário"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Altera um usuário.
 *
 * body Usuario_body  (optional)
 * id BigDecimal ID do funcionário.
 * email String E-mail do usuário. (optional)
 * telefone BigDecimal Telefone do usuário. (optional)
 * whatsapp Boolean Caso o telefone seja do whatsapp. (optional)
 * oauthgoogle String Oauth do usuário. (optional)
 * oauthhotmail String Oauth do usuário. (optional)
 * nome String Nome do usuário. (optional)
 * returns response_200
 **/
exports.usuarioIdPATCH = function(body,id,email,telefone,whatsapp,oauthgoogle,oauthhotmail,nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cadastra um novo usuário.
 *
 * returns response_200
 **/
exports.usuarioPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

