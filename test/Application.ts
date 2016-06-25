import Application = require('../src/Application');
import CustomRouter = require('./CustomRouter');

const MyMVCWebApplication:Application  = new Application();
let port:number = 1991;
let domain:string = 'localhost';
MyMVCWebApplication.RegisterRouter(new CustomRouter());
MyMVCWebApplication.Start(port, domain, function () {
    console.log(`My Application start on ${domain} : ${port}`);
});
