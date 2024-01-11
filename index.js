const http = require('http');


const server = http.createServer(requestListener); // створюємо сервер, який реагує на запити та передаємо функцію-обробник запитів


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
        } else {
            response.statusCode = 404;
            response.statusMessage = 'Not Found';
            response.end('this page not found');
        }
    }

    if (request.method === 'POST') {
        if (request.url = '/') {
            response.statusCode = 400;
            response.statusMessage = 'Forbidden';
            response.end('This page has not support this operation');
        }
    }
   
}

server.listen(5000);