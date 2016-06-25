import HttpHelper = require('http');
import HttpManager = require('./HttpManager');
import Router = require('./Router');

class Application {
    private _router:Router = null;

    constructor(){

    }

    /**
     * [Start description]
     * @param {number} port     [description]
     * @param {string} domain   [description]
     * @param {any}    callback [description]
     */
    public Start(port:number, domain:string, callback:any): void {
        let manager = new HttpManager(this._router);
        let server = HttpHelper.createServer(manager.Dispatch);
        server.listen(port, domain, callback);
    }

    /**
     * [RegisterRouter description]
     * @param {Router} router [description]
     */
    public RegisterRouter(router:Router):void{
        this._router = router;
    }
}

export = Application;
