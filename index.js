const http = require('http');
const fs = require('fs/promises');
const express = require('express');

const app = express(); // app - екземпляр маршрутизатора

const server = http.createServer(app); // створюємо сервер, який реагує на запити та передаємо функцію-обробник запитів

server.listen(5000);

/*


Express - фреймворк
Додаток (application) (app) - екземпляр классу Express, який здійснює маршрутизацію
Маршрут (end-point, "ручка") - комбінація з url та методу запиту

*/



app.get('/', (req, res) => {  // функція-обробник запиту на метод GET, url /
    res.status(200).send('Hello, world')
});

app.get('/about', (req, res) => {
    return fs.readFile('./staticView/index.html', 'utf-8')
    .then(data => {
        res.status(200).send(data);
    })
})

app.post('/users', () => {  // функція-обробник запиту на метод POST, url /users

})

app.put('/about', () => { //функція-обробник запиту на метод PUT, url /about

})




/*



function requestListener(request, response) {
    console.log(request.url, request.method);
    if(request.method === 'GET') {
        if(request.url === '/') {
            // відповісти "хеллоу ворлд"
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.end('Hello, world');
        } else if (request.url === '/about') {
            // відповісти "сторінка про наш чудовий сайт"
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.end('<html><body>This is a page about our super site</body></html>')
        } else if (request.url === '/users') {
            // відповісти на запит списком вже зареєстрованих юзерів
            response.statusCode = 200;
            response.statusMessage = 'OK';
            const usersList = readUsersFromFile()
                .then(usersList => {
                    response.end(JSON.stringify(usersList))
                })
          
           
        } else {
            response.statusCode = 404;
            response.statusMessage = 'Not Found';
            response.end('this page not found');
        }
    }

    if (request.method === 'POST') {
        if (request.url === '/') {
            response.statusCode = 400;
            response.statusMessage = 'Forbidden';
            response.end('This page has not support this operation');
        } else if (request.url === '/users') {
            // Задача - прийняти з запиту дані юзера і відповісти успіхом
            // Зчитуємо дані і зклеюємо їх докупи
            let string = '';
            request.on('data', (chunk) => {
                string += chunk
            });
            request.on('end', () => {
                // отут всі дані вже завантажено і сталася фінальна подія, яка сигналізує про завершення завантаження інфи
                // можемо щось робити з тим, що вже лежить в глобальній змінній string
                const userObj = JSON.parse(string);
                console.log(userObj);
                signIn(userObj)
                // таска: відповісти: John Doe, ви зареєстровані в системі
                const resString = `${userObj.username} ${userObj.lastName} - you have successfully sign in`;
                response.statusCode = 201;
                response.statusMessage = 'Created';
                response.end(resString);
            })
        } else {
            response.statusCode = 404;
            response.statusMessage = 'Not Found';
            response.end('this page not found');
        }
    }
   
}




const users = new Map();

function signIn(userObj) {
    users.set(userObj.email, userObj);
    writeMapToFile();
}

function getListUsers() {
    return [...users.values()]
}


function writeMapToFile() {
    fs.writeFile('users.json', JSON.stringify(getListUsers()), 'utf-8');
}

function readUsersFromFile() {
    return fs.readFile('./users.json', 'utf-8')
    .then(data => {
      // юзери - це стрінгіфайнутий json
      return JSON.parse(data);
    })
}


*/