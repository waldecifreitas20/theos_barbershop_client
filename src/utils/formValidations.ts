function multiCheck(value: string, rules: {
  minLength?: number,
  exactLength?: number,
  maxLength?: number,
  letters?: boolean,
  number?: boolean,
}) {


  if (rules.exactLength && value.length !== rules.exactLength) {
    return false;
  } else {
    if (rules.minLength && !hasMinLength(value, rules.minLength)) {
      return false;
    }

    if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
      return false;
    }
  }


  let hasLetters = true;
  let hasNumbers = true;
  let numbers = value.split("").filter(item => !isNaN(Number(item)));

  if (rules.number && numbers.length === 0) {
    hasNumbers = false;
  }

  if (rules.letters && numbers.length === value.length) {
    hasLetters = false;
  }


  return hasLetters && hasNumbers;
}

function hasMinLength(value: string, minlength: number) {
  return value.trim().length >= minlength;
}

function hasMaxLength(value: string, maxlength: number) {
  return value.trim().length <= maxlength;
}

// ==============================================================
function isEmpty(value: string) {
  return value.trim() === "";
}

function isEmail(value: string) {
  let email = value.trim();

  if (email === "") {
    return false;
  }

  const hasAtSign = email.indexOf("@") !== -1;
  const hasDot = email.indexOf(".com") !== -1;
  const [owner, host] = email.split("@");

  const hasOwner = owner.length > 1;
  const hasHost = host.split(".")[0].length > 1;

  return hasAtSign && hasDot && hasOwner && hasHost;
}

function isValidPassword(value: string) {
  return multiCheck(value, {
    minLength: 8,
    maxLength: 16,
    letters: true,
    number: true,
  });
}

function isCpf(cpf: string) {

  return multiCheck(cpf, { exactLength: 11,  });
}

function isPhoneNumber(number: string) {
  return multiCheck(number, { exactLength: 11 });
}

export const formValidations = {
  isPhoneNumber,
  isCpf,
  isEmpty,
  isValidPassword,
  isEmail
}