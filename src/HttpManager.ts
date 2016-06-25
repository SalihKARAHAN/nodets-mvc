import Router = require('../src/Router');
import RouteData = require('./RouteData');
import ControllerManager = require('./ControllerManager');
import IResult = require('./Result/IResult');

import UrlHelper = require('url');
import HttpHelper = require('http');

class HttpManager {

    constructor(router: Router) {
        global.Router = router;
    }

    Dispatch(request: HttpHelper.IncomingMessage, response: HttpHelper.ServerResponse): void {
        console.log('dispatcher runned');
        console.log(global.Router);
        let url: string = request.url;
        let methodType: string = request.method;
        console.log(`REQUEST=> : ${methodType} -> ${url}`);
        // find method
        let routeData: RouteData = global.Router.GetRouteData(url);
        let controllerManager: ControllerManager = new ControllerManager();
        let result: IResult = controllerManager.InvokeActionByRouteData(routeData);
        // authentication & authorization
        // before decorators
        // invoke action
        // after decorators
    }
}

export = HttpManager;
