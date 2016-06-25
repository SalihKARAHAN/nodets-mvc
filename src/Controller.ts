import HtmlResult = require('./Result/HtmlResult');
import JsonResult = require('./Result/JsonResult');

abstract class Controller {

    Html(): HtmlResult {
        let html: HtmlResult = new HtmlResult();
        return html;
    }

    Json(data: any): JsonResult {
        let json: JsonResult = new JsonResult();
        return json;
    }
}

export = Controller;
