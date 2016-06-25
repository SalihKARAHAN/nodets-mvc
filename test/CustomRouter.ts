import {Router} from '../src/Router';
import RouteTable = require('../src/RouteTable');
import {Method} from '../src/Enums/Http.Method';

class CustomRouter extends Router {
    RegisterCustomRoutes(routes: NodeTS.RouteTable): void {
        routes.Add('/', 'Home', 'Index', Method.GET)
    }
}

export = CustomRouter;
