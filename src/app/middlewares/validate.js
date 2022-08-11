const Joi = require('joi');

const signupSchema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeatPassword: Joi.ref('password'),

    email: Joi.string()
        .email()
        .required()
})

const uploadSchema = Joi.object({
    bookName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    content: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    author: Joi.string()
    .alphanum()
})
    module.exports = {
        signupSchema, uploadSchema
    }