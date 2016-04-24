import {Method}  from './Enums/Http.Method';

class RouteData {
    private _name: string;
    private _url: string;
    private _controllerName: string;
    private _actionName: string;
    private _method: Method;

    constructor(name: string, url: string, controllerName: string, actionName: string, method: Method) {
        this._name = name;
        this._url = url;
        this._controllerName = controllerName;
        this._actionName = actionName;
        this._method = method;
    }
}

class RouteTable {
    private _route: {} = {};

    public Add(name: string, targetUrl: string, nameOfController: string, nameOfAction: string, method: Method): void {
        let url: string = this._route[targetUrl];

        if (!url) {
            this._route[targetUrl] = new RouteData(name, targetUrl, nameOfController, nameOfAction, method);
        }
    }

    public Change(): void {

    }
}

export = RouteTable;
