const express = require('express');
const fs = require('fs/promises');

const UserController = require('./controllers/User.controller');
const {validationUser} = require('./middleware/validateUser');

const bodyParser = express.json(); // проміжний обробник запиту, який вбудовано в Експресс, який зчитує тіло (body) http-запиту ТІЛЬКИ ЗА НАЯВНОСТІ заголовка Content-Type: application/json
// якщо все ок, то bodyParser дописує до об'єкта req нове поле body

const app = express(); // Маршрутизатор

// Endpoint/Route(маршрут) = method + url

app.get('/', (req, res) => {
   // Написати відповідь з сервера сторінкою html, яка лежить в папці staticView
   // Прочитати сторінку і віддати її у відповідь на запит
    fs.readFile('./staticView/index.html', 'utf-8')
    .then(data => {
        res.status(200).send(data);
    })
});

app.post('/users', bodyParser, validationUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);

app.get('/users/:userId', UserController.getOne);
app.delete('/users/:userId', UserController.deleteOne);

//app.get('/users/2')
//http://localhost/path?key=value&key2=value2    ---- query-string (запит)

// Задача: отримати інфу одного юзера за його id

module.exports = app;

// Middleware - проміжний обробник запиту

/* Може:
- виконувати будь-який код (робити дії у відповідь на запит)
- мутувати об'єкти req, res (оскільки вони передаються за посиланням).
НЕ ЗЛОВЖИВАЙТЕ ЦІЄЮ МОЖЛИВІСТЮ.
- обірвати ланцюжок обробки
- викликати наступний обробник в ланцюжку (за допомогою next())

*/
