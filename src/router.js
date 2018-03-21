var handlers = require("./handler");

module.exports = function(request, response) {
  var url = request.url;
  if (url === "/") {
    handlers.serverLanding(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.serverPublic(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
}

