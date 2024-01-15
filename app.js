const express = require('express');
const fs = require('fs/promises');

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

app.post('/users', (req, res, next) => { // middleware - проміжний обробник запиту
    console.log('перший обробник запиту');
    req.abracadabra = 'Hello';
    next();
}, (req, res, next) => {
    console.log('другий обробник запиту');
    next()
}, (req, res, next) => {
    console.log('третій обробник запиту');
    if(Math.random() > 0.5) {
        return res.status(404).send('Not found')
    }
    next()
}, (req, res, next) => {
    console.log('четвертий обробник запиту');
    res.send('OK');
})

module.exports = app;

// Middleware - проміжний обробник запиту

/* Може:
- виконувати будь-який код (робити дії у відповідь на запит)
- мутувати об'єкти req, res (оскільки вони передаються за посиланням).
НЕ ЗЛОВЖИВАЙТЕ ЦІЄЮ МОЖЛИВІСТЮ.
- обірвати ланцюжок обробки
- викликати наступний обробник в ланцюжку (за допомогою next())

*/
