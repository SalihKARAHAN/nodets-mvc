import {Method}  from './Enums/Http.Method';
import RouteData = require('./RouteData');
import KeyValueCollection = require('./Collections/Generic/KeyValueCollection');
import KeyIsAlreadyExistException = require('./Exceptions/KeyIsAlreadyExistException');

class RouteTable {
    private _collection: KeyValueCollection<string, RouteData>;

    constructor() {
        this._collection = new KeyValueCollection<string, RouteData>();
    }

    /**
     * The method add new route declaration to this route table instance.
     * @param {string} targetUrl        [description]
     * @param {string} nameOfController [description]
     * @param {string} nameOfAction     [description]
     * @param {Method} method           [description]
     */
    Add(targetUrl: string, nameOfController: string, nameOfAction: string, method: Method): void {
        if (this._collection.ContainsKey(targetUrl)) {
            throw new KeyIsAlreadyExistException('This url is already in the route table!');
        }

        this._collection[targetUrl] = new RouteData(targetUrl, nameOfController, nameOfAction, method);
    }

    /**
     * [GetRouteData description]
     * @param  {string}    url        [description]
     * @param  {Method}    methodType [description]
     * @return {RouteData}            [description]
     */
    GetRouteData(url:string, methodType:Method):RouteData{
        let routeData:RouteData = this._collection[url];
        return routeData;
    }
}

export = RouteTable;
