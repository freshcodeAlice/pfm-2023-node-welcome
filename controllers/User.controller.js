const User = require('../models/User');

module.exports.createUser = async (req, res, next) => {   // контроллер - фінальний обробник запиту, який виконує основну логічну роботу по обробці запиту
    // створюємо модель юзера і зберігаємо його в базі даних
    const newUser = new User(req.body);
   const user = newUser.addUser();
    // якщо це вдалось - кажемо, що все ок, юзера створено
    res.status(201).send(user);
    // якщо не вдалось - відповідаємо помилкою
}