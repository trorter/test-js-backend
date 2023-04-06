const http = require('http')

let requestCounter = 0;

const server = http.createServer((request, response) => {

    if (request.url.includes('/favicon.ico')) {
        response.end();
        return;
    }

    requestCounter += 1;

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/':
        case '/courses':
            response.write('COURSES')
            break;
        default:
            response.write('404, not found')
    }

    response.write('counter = ' + requestCounter)
    response.end()
})

server.listen(30031);
