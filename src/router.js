const handlers = require("./handler");

module.exports = (request, response) => {
  const url = request.url;
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

