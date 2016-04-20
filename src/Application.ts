import http = require('http');

export class Application {
    Start(url, port): void {
        http.listen(url,port);
    }
}
