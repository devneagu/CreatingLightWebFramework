const http = require('http');

var app = exports = module.exports = {};

app.listen = function(){
    var server = http.createServer(this);
    return server.listen.apply(server, arguments);
}
