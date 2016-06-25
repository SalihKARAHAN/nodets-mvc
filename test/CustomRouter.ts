import Router = require('../src/Router');
import RouteTable = require('../src/RouteTable');
import Method = require('../src/Enums/Http.Method');

class CustomRouter extends Router {
    RegisterCustomRoutes(routes: RouteTable): void {
        routes.Add('/', 'Home', 'Index', Method.GET)
    }
}

export = CustomRouter;
