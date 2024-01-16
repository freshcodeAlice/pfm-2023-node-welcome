const SIGN_UP_SCHEMA = require('../validations/signUpSchema');

module.exports.validationUser = async (req, res, next) => {

    console.log(req.body); // якщо bodyParser відпрацював вірно то тут лежить інфа з тіла http-запиту
    if (req.body) {
    // валідація даних
    try {
        const result = await SIGN_UP_SCHEMA.validate(req.body)
    } catch (error) {
       // якщо валідація неуспішна - одразу закриваємо обробку запиту і відповідаємо помилкою
//      return res.status(400).send(error.message); // NEED REFACTOR error handling   
        return next(error) 
    }

    // якщо валідація успішна - передаємо запит далі ланцюжком
    next()
 
    }


}