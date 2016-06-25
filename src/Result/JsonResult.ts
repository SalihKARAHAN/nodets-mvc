import Constants = require('../Constants');
import IResult = require('./IResult');

class JsonResult implements IResult{
    Name:string = null;
    Content:string = null;

    constructor(){
        this.Name = Constants.Results.HTML;
    }
}

export = JsonResult;
