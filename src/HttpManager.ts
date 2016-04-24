import Router = require('./Router');

class HttpManager {
    private _routerInfo:Router=null;
    constructor(){
    }

    Dispatch(request:any, response:any):void{
        console.log('dispatcher runned');
        // find method
        
        // authentication & authorization
        // before decorators
        // invoke action
        // after decorators
    }
}

export = HttpManager;
