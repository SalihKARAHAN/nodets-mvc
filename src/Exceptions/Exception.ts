abstract class Exception{
    protected _message:string = null;
    protected _description:string = null;

    constructor(message:string, description?:string){
        this._message = message;
        this._description = description;
    }
}

export = Exception;
