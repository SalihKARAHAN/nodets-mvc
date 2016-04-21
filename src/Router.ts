import {Method}  from './Enums/Http.Method';

abstract class Router {
    private routeInfo = {};
    public AddUrl(targetUrl: string, nameOfController: string, nameOfAction: string, method: Method): void {
        var url: string = this.routeInfo[targetUrl];
        if (!url) {
            this.routeInfo[targetUrl] = { url: targetUrl, controller: nameOfController, action: nameOfAction, method: method };
        }
    }
}

export = Router;
