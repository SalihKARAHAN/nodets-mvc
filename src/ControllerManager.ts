import RouteData = require('./RouteData');
import IResult = require('./Result/IResult');
import Controller = require('./Controller');
import Protector = require('./Protector');
import ControllerNotExistException = require('./Exceptions/ControllerNotExistException');
import NotValidParameterException = require('./Exceptions/NotValidParameterException');

class ControllerManager {
    InvokeActionByRouteData(routeData: RouteData): IResult {
        let result: IResult = null;
        let controllerName: string = routeData.GetControllerName();
        let controller: Controller = this.FindControllerByName(controllerName);
        let actionName: string = routeData.GetActionName();
        let action: any = this.FindActionOfControllerByName(actionName, controller);
        result = this.InvokeActionByRouteData(action);
        return result;
    }

    private FindControllerByName(name: string): Controller {
        if (!Protector.IsValid<string>(name)) {
            throw new NotValidParameterException('Name parameter is not valid!');
        }

        let controllerName = name;
        let path: string = `../wwwroot/Controllers/${controllerName}Controller`;
        let controllerType = require(path);
        let controllerInstance: Controller = new controllerType();

        if (!Protector.IsValid<Controller>(controllerInstance)) {
            throw new ControllerNotExistException('');
        }

        return controllerInstance;
    }

    private FindActionOfControllerByName(name: string, instance: Controller): any {
        if (!Protector.IsValid<string>(name)) {
            throw new NotValidParameterException('Name parameter is not valid!');
        }

        let actionName = name;
        let action = instance[actionName];

        if (!action) {
            throw 'Action is not exist in controller';
        }

        return action;
    }

    private InvokeAction(action: any): IResult {
        let result: IResult = null;
        try {
            const result = action();
        } catch (exception) {
            throw exception;
        } finally {
            return result;
        }
    }
}

export = ControllerManager;
