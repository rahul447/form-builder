import { requiredRule, minLengthRule, maxLengthRule, validNumberRule } from './utils/inputValidationRules';

const formData = {
    fields: [
        {
            label: 'Name',
            id: 'name',
            type: 'input',
            placeholder: 'Enter name',
            dataType: 'text',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Name',
            validationRules: [
                requiredRule("name"),
                minLengthRule("name", 3),
                maxLengthRule("name", 20)
            ]
        },
        {
            label: 'Address',
            id: 'address',
            type: 'textarea',
            placeholder: 'Enter Address',
            dataType: 'text',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Address',
            validationRules: [
                requiredRule("address"),
                minLengthRule("address", 3),
            ]
        },
        {
            label: 'Zipcode',
            id: 'zipCode',
            type: 'input',
            placeholder: 'Enter zipcode',
            dataType: 'number',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Zipcode',
            validationRules: [
                requiredRule("zipCode"),
                validNumberRule("zipCode")
            ]
        },
        {
            label: 'Country',
            id: 'country',
            type: 'select',
            placeholder: 'Enter country',
            dataType: 'text',
            options: [
                {
                    value: 'IN',
                    displayValue: 'India'
                },
                {
                    value: 'US',
                    displayValue: 'USA'
                },
                {
                    value: 'CA',
                    displayValue: 'Canada'
                },
                {
                    value: 'PAK',
                    displayValue: 'Pakistan'
                },

            ],
            value: '',
            valid: false,
            errorMessage: '',
            validationRules: [
                requiredRule("country"),
            ]
        },
        {
            label: 'Email',
            id: 'email',
            type: 'input',
            placeholder: 'Enter email',
            dataType: 'email',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Email',
            validationRules: [
                requiredRule("email"),
                validEmail('email')
            ]
        },
        {
            label: 'Password',
            id: 'password',
            type: 'input',
            placeholder: 'Enter Password',
            dataType: 'password',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Password',
            validationRules: [
                requiredRule("password"),
                minLengthRule("password", 3),
                maxLengthRule("password", 20)
            ]
        },
        {
            label: 'Confirm Password',
            id: 'confirm-password',
            type: 'input',
            placeholder: 'Confirm Password',
            dataType: 'confirm-password',
            value: '',
            valid: false,
            errorMessage: 'Please Confirm Password',
            validationRules: [
                requiredRule("confirm-password"),
                minLengthRule("confirm-password", 3),
                maxLengthRule("confirm-password", 20)
            ]
        },
        {
            id: 'gender',
            label: 'Gender',
            type: 'radio',
            dataType: 'radio',
            value: '',
            options: [
                {
                    value: 'male',
                    displayValue: 'Male'
                },
                {
                    value: 'female',
                    displayValue: 'Female'
                },
            ],
            validationRules: [
                requiredRule("gender"),
            ],
            valid: false,
            errorMessage: 'Please select Gender',
            male: {
                fields: [
                    {
                        id: 'sport',
                        type: 'input',
                        placeholder: 'Enter your favorite sport',
                        dataType: 'text',
                        value: '',
                        valid: false,
                        errorMessage: '',
                    },
                ]
            },
            female: {
                fields: [
                    {
                        id: 'color',
                        type: 'input',
                        placeholder: 'Enter your favourite color',
                        dataType: 'text',
                        value: '',
                        valid: false,
                        errorMessage: '',
                    }
                ]
            }
        },
    ]
}

export const getFormData = () => {
    return formData;
}