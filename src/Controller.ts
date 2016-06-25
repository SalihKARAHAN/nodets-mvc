import HtmlResult = require('./Result/HtmlResult');

class Controller{

    Html(): HtmlResult {
        let html:HtmlResult = new HtmlResult();
        return html;
    }

    Json():any{

    }
}

export = Controller;
