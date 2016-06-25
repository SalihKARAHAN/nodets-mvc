import {Method}  from './Enums/Http.Method';

namespace NodeTS {
    export class RouteData {
        private _url: string;
        private _controllerName: string;
        private _actionName: string;
        private _method: Method;

        /**
         * Create new route info
         * @param  {string} url            Address of the route. It is unique
         * @param  {string} controllerName Name of controller class
         * @param  {string} actionName     Name of controller's action. The action invoke in call the route
         * @param  {Method} method         Http methot enumeration
         * @return {RouteData}             Return a new route data instance
         */
        constructor(url: string, controllerName: string, actionName: string, method: Method) {
            this._url = url;
            this._controllerName = controllerName;
            this._actionName = actionName;
            this._method = method;
        }

        /**
         * Get url of this route!
         * @return {string} Url of this route
         */
        public GetUrl(): string {
            return this._url;
        }

        /**
         * Get controller's name of the this route!
         * @return {string} Name of controller
         */
        public GetControllerName(): string {
            return this._controllerName;
        }

        /**
         * Get name of controller's action defined in this route!
         * @return {string} [description]
         */
        public GetActionName(): string {
            return this._actionName;
        }

        /**
         * Get kind of http method defined in this route!
         * @return {Method} [description]
         */
        public GetMethodType(): Method {
            return this._method;
        }
    }
}

export = NodeTS;
