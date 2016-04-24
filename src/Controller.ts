import ViewResult = require('./Result/ViewResult');

class Controller{
    
    View(): ViewResult {
        let result:ViewResult = new ViewResult();
        return result;
    }

    Json():any{

    }
}

export = Controller;
