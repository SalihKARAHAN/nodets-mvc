import {Router} from '../src/Router';
import RouteData = require('./RouteData');

import UrlHelper = require('url');
import HttpHelper = require('http');

class HttpManager {

    constructor(router: NodeTS.Router) {
        global.Router = router;
    }

    Dispatch(request: HttpHelper.IncomingMessage, response: HttpHelper.ServerResponse): void {
        console.log('dispatcher runned');
        console.log(global.Router);
        let url: string = request.url;
        let methodType: string = request.method;
        console.log(`REQUEST=> : ${methodType} -> ${url}`);
        // find method
        let routeData: NodeTS.RouteData = global.Router.GetRouteData(url);

        // authentication & authorization
        // before decorators
        // invoke action
        // after decorators
    }
}

export = HttpManager;
