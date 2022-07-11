import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule
} from "./utils/inputValidationRules";
import {FIELD} from './utils/utils';
import {createFormFieldConfig} from './utils/utils'

// object representation of the form
export const userForm = {
  name: {
    ...createFormFieldConfig(FIELD.INPUT, "Full Name", "name", {type: "text"}),
    validationRules: [
      requiredRule("name"),
      minLengthRule("name", 3),
      maxLengthRule("name", 25)
    ]
  },
  gender: {
    ...createFormFieldConfig(FIELD.RADIO, "Gender", "gender", {type: "radio", 
    options: [{value: 'MALE', displayValue: 'Male'}, {value: 'FEMALE', displayValue: 'Female'}]}), 
    validationRules: [
        requiredRule("gender"),
    ]
  },
  city: {
    ...createFormFieldConfig(FIELD.SELECT, "City", "city", {options: [{value: "", label: "Select"}, {value: "gurgaon", label: "Gurgaon"}, {value: "delhi", label: "Delhi"}, 
    {value: "noida", label: "Noida"}, {value: "jaipur", label: "Jaipur"}]}), 
    validationRules: [
        requiredRule("city"),
    ]
  },
  address: {
    ...createFormFieldConfig(FIELD.TEXTAREA, "Address", "address", {rows: 4, cols: 50}), 
    validationRules: [
        requiredRule("address"),
        minLengthRule("address", 3),
        maxLengthRule("address", 200)
    ]
  },
  email: {
    ...createFormFieldConfig(FIELD.INPUT, "Email", "email", {type: "email"}), 
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 10),
      maxLengthRule("email", 25)
    ]
  },
  password: {
    ...createFormFieldConfig(FIELD.INPUT, "Password", "password", {type: "password"}),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 8),
      maxLengthRule("password", 20)
    ]
  },
  confirmPassword: {
    ...createFormFieldConfig(FIELD.INPUT, "Confirm Password", "confirmPassword", {type: "password"}),
    validationRules: [passwordMatchRule()]
  },
  
};
