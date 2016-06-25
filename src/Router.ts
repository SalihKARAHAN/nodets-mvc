import {Method}  from './Enums/Http.Method';
import {RouteData} from './RouteData';
import {RouteTable} from './RouteTable';

namespace NodeTS {

    /**
     *
     */
    export abstract class Router {

        private _routeTable: RouteTable;

        constructor() {
            this._routeTable = new RouteTable();
            this.RegisterCustomRoutes(this._routeTable);
        }

        /**
         * This method save user defined route informations to application route records.
         * @param {RouteTable} routeTable is RouteTable
         */
        abstract RegisterCustomRoutes(routeTable: RouteTable): void;

        GetRouteData(url: string): RouteData {
            let routeData: RouteData = this._routeTable.GetRouteData(url);
            return routeData;
        }

    }
}

export = NodeTS
