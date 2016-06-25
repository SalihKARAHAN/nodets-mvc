import HtmlResult = require('./Result/HtmlResult');
import JsonResult = require('./Result/JsonResult');

/**
 *
 */
abstract class Controller {

    /**
     * [Html description]
     * @return {HtmlResult} [description]
     */
    Html(): HtmlResult {
        let html: HtmlResult = new HtmlResult();
        return html;
    }

    /**
     * [Json description]
     * @param  {any}        data [description]
     * @return {JsonResult}      [description]
     */
    Json(data: any): JsonResult {
        let json: JsonResult = new JsonResult();
        return json;
    }
}

export = Controller;
