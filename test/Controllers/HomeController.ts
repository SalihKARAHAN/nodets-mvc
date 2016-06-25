import Controller = require('../../src/Controller');
import HtmlResult = require('../../src/Result/HtmlResult');
import JsonResult = require('../../src/Result/JsonResult');

class HomeController extends Controller {

    Index():HtmlResult{
        return super.Html();
    }

}
