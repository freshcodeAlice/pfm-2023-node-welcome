const User = require('../models/User');

module.exports.createUser = async (req, res) => {   // контроллер - фінальний обробник запиту, який виконує основну логічну роботу по обробці запиту
    // створюємо модель юзера і зберігаємо його в базі даних
    const newUser = new User(req.body);
   const user = newUser.addUser();
    // якщо це вдалось - кажемо, що все ок, юзера створено
    res.status(201).send(user);
    // якщо не вдалось - відповідаємо помилкою
}


module.exports.getAllUsers = async (req, res) => {
    const allUsers = User.findAll();
    res.status(200).send(allUsers)
}


module.exports.getOne = async(req, res) => {
 //   req.params.userId
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user) {
       return res.status(200).send(user);
    } 
        res.status(404).send('There is no such user');
}

module.exports.deleteOne = async (req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user){ 
        const result = user.deleteUser();
        return res.status(200).send(result)
    }
    res.status(404).send('There is no such user')
}


module.exports.updateOne = async(req, res) => {
    const {body, params: {userId}} = req;
    const result = User.updateUser(Number(userId), body);
    res.status(200).send(result);
}