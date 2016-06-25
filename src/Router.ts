import {Method}  from './Enums/Http.Method';
import RouteTable = require('./RouteTable');

/**
 *
 */
abstract class Router {

    private _routeTable: RouteTable = null;

    constructor(){
        this._routeTable = new RouteTable();
        this.RegisterCustomRoutes(this._routeTable);
    }

    /**
     * This method save user defined route informations to application route records.
     * @param {RouteTable} routeTable is RouteTable
     */
    abstract RegisterCustomRoutes(routeTable: RouteTable):void;
    
}

export = Router;
