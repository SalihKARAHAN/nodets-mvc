declare namespace NodeTS {
    export interface Method {

    }
    export interface RouteData {

    }
    export interface Router {
        GetRouteData(url: string): RouteData;
    }
    export interface RouteTable {
        Add(targetUrl: string, nameOfController: string, nameOfAction: string, method: Method): void;
    }
}

declare namespace NodeJS {
    export interface Global {
        Router: NodeTS.Router;
    }
}
