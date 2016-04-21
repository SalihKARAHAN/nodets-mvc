import http = require('http');

class Application {
    Start(port:number, callback:any): void {
        var server = http.createServer(function (request, response) {
            console.log(request.url);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write('<b>Hello NodeTS!</b>');
            response.end();
        })
        server.listen(port,callback);
    }
}

export = Application;
