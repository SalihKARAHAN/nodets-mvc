import Router = require('./Router');
import UrlHelper = require('url');

class HttpManager {

    constructor(router:Router) {
        global.Router = router;
    }

    Dispatch(request: any, response: any): void {
        console.log('dispatcher runned');
        let url:string = request.url;
        let methodType: string = request.method;
        console.log(`REQUEST=> : ${methodType} -> ${url}`);
        // find method

        // authentication & authorization
        // before decorators
        // invoke action
        // after decorators
    }
}

export = HttpManager;
