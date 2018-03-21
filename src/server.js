var http = require('http');
var port = process.env.PORT || 5000;
var router = require('./router.js');
var server = http.createServer(router);
server.listen(port);
console.log(`server is running on local host ${port}`)