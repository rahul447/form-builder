
const createValidationRule = (ruleName, errorMessage, validateFunc) => {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc
    };
}
  
export const requiredRule = (inputName) => {
    return createValidationRule(
        "required",
        `${inputName} required`,
        (inputValue, _formObj) => inputValue.length !== 0
    );
}
  
export const minLengthRule = (inputName, minCharacters) => {
    return createValidationRule(
        "minLength",
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue, _formObj) => inputValue.length >= minCharacters
    );
}
  
export const maxLengthRule = (inputName, maxCharacters) => {
    return createValidationRule(
        "minLength",
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue, _formObj) => inputValue.length <= maxCharacters
    );
}
  
export const passwordMatchRule = () => {
    return createValidationRule(
        "passwordMatch",
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
}

export const validNumberRule = () => {
    return createValidationRule(
        "validNumber",
        `not a valid number`,
        (inputValue, _formObj) => !isNaN(inputValue)
    );
}

export const validEmail = () => {
    return createValidationRule(
        "validEmail",
        `not a valid email`,
        (inputValue, _formObj) => inputValue.test(/\S+@\S+\.\S+/)
    );
}
  