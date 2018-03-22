var handlers = require("./handler");

//    urls we want: 
//      /api/search
//      /api/search?q=d
//      /api/search?q=dog

//      /index.html
//      /public/*

module.exports = function(request, response) {
  var url = request.url;
  if (url === "/") {
    handlers.serverLanding(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.serverPublic(request, response);
  } else if (url.startsWith("/api/search")) {
    handlers.serverSearchApi(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
}

