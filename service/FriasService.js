'use strict';


/**
 * Retorna o último período aquisitivo de férias do funcionário.
 *
 * funcId String 
 * returns inline_response_200_4
 **/
exports.feriasGET = function(funcId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idfuncionario" : "a11h6dk1y5u9811kg6k8hg3",
  "dtperiodoaquisinicial" : "2010-11-30T00:00:00.000Z",
  "dtperiodoaquisfinal" : "2011-12-01T00:00:00.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

