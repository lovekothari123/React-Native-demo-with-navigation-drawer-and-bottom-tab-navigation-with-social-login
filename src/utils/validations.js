export const isValidEmail = email => {
  let expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase());
};

export const isValidContact = contact => {
  let expression = /^[0]?[789]\d{9}$/;
  return expression.test(String(contact));
};

export const isValidName = name => {
  console.log("Name property would be ==>",name)
  if (name == ''||name == undefined || name == null)  return false;
  let expression = /^[a-zA-Z]+$/;
  return expression.test(name);
};
export const isValidPassword = password => {
  if (password == ''||password == undefined || password == null) return false;
  let expression = /^(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*])(.{8,15})$/;
  return expression.test(password);
};

export const getCheckPromise = object => {
  var promise = new Promise((resolve, reject) => {
   // resolve('Success');
    reject('Fail');
  });
  return promise;
};

export const isEmptyOrNull = input => {
  return (input===null||input === undefined||input === '') ;
};

