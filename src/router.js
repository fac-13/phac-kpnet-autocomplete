const { serverLanding, serverPublic, serverSearchApi, pageNotFound } = require('./handler');

module.exports = (request, response) => {
  const url = request.url;
  if (url === "/") {
    serverLanding(request, response);
  } else if (url.indexOf("public") !== -1) {
    serverPublic(request, response);
  } else if (url.startsWith("/api/search")) {
    serverSearchApi(request, response);
  } else {
    pageNotFound(request, response);
  }
}

