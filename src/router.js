var handlers = require("./handler");

module.exports = function(request, response) {
  var url = request.url;
  if (url === "/") {
    handlers.serveLanding(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.servePublic(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
}

