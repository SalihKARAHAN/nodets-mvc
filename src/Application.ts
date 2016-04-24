import http = require('http');
import httpManager = require('./HttpManager');
import Router = require('./Router');

class Application {
    public Start(port:number, callback:any): void {
        let manager = new httpManager();
        let server = http.createServer(manager.Dispatch);
        server.listen(port,callback);
    }

    public RegisterRouter(router:Router):void{

    }
}

export = Application;
