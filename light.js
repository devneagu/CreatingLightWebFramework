const http = require('http');
const mixin = require('merge-descriptors');
const events  = require('events');
const eventEmitter = new events();
const layer = require('./layer');
exports = module.exports = start;

function start(){
    var app = function(req,res,next){
        app.handle(erq,res,next);
    }
    console.log(app);

    // we append all the methods from eventEmitter to our application
    mixin(app,events.EventEmitter.prototype,false);
    // we append custom methods that we created in the layer.js
    mixin(app,layer,false);
    
    console.log(app);
    console.log('endstart');
    return app;
}
