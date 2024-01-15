const yup = require('yup');


const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required() ,
    password: yup.string().min(1).max(30).required(),
    isSubscribed: yup.boolean()
});


module.exports = SIGN_UP_SCHEMA;