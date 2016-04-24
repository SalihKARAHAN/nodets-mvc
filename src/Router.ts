// import {Method}  from './Enums/Http.Method';
import RouteTable = require('./RouteTable');

abstract class Router {

     private _routes:RouteTable = null;

    abstract Route(routeInfo:RouteTable):void;

    // public HasRouteData():boolean{
    //     var routeCount:number = Object.keys(this.routeInfo).length;
    //     if (routeCount === 0) {
    //         return false;
    //     }
    //     return true;
    // }

    AddRoute():void{
        
    }
}

export = Router;
