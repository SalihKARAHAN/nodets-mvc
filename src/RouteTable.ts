import Method = require('./Enums/Http.Method');
import RouteData = require('./RouteData');
import KeyValueCollection = require('./Collections/Generic/KeyValueCollection');
import KeyIsAlreadyExistException = require('./Exceptions/KeyIsAlreadyExistException');

class RouteTable {
    private _routeTable: KeyValueCollection<string, RouteData>;

    constructor() {
        this._routeTable = new KeyValueCollection<string, RouteData>();
    }

    /**
     * The method add new route declaration to this route table instance.
     * @param {string} targetUrl        [description]
     * @param {string} nameOfController [description]
     * @param {string} nameOfAction     [description]
     * @param {Method} method           [description]
     */
    Add(targetUrl: string, nameOfController: string, nameOfAction: string, method: Method): void {
        if (this._routeTable.ContainsKey(targetUrl)) {
            throw new KeyIsAlreadyExistException('This url is already in the route table!');
        }

        this._routeTable[targetUrl] = new RouteData(targetUrl, nameOfController, nameOfAction, method);
    }

    /**
     * [GetRouteData description]
     * @param  {string}    url        [description]
     * @param  {Method}    methodType [description]
     * @return {RouteData}            [description]
     */
    GetRouteData(url: string): RouteData {
        let routeData: RouteData = this._routeTable[url];
        return routeData;
    }
}

export = RouteTable;
