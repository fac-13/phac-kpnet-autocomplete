const fs = require("fs");
const path = require("path");
const searchJson = require("./logic");

const serverLanding = (request, response) => {
  fs.readFile(path.join(__dirname, "..", "public", "index.html"), function(
    err,
    file
  ) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(`<h1> Sorry! There was an error. </h1>`);
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const serverPublic = (request, response) => {
  fs.readFile(path.join(__dirname, "..", request.url), function(
    err,
    file
  ) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(`<h1> Sorry! There was an error. </h1>`);
    }
    const extension = request.url.split(".")[1];
    
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpg",
      json: "application/json"
    };
    response.writeHead(200, { "Content-Type": extensionType[extension] });
    response.end(file);
  });
};
const serverSearchApi = (request, response) => {
  const [path, query] = request.url.split('?');
  response.writeHead(200, {"Content-Type": "text/html"});
  if(!query){
    response.write(JSON.stringify({}));
    response.end();
    return;
  } 
  const [key, value] = query.split('=');
  const returnedDogs = searchJson(value);
  response.write(JSON.stringify(returnedDogs));
  response.end();
}

const pageNotFound = (request, response) => {
  response.writeHead(404, { "Content-Type": "text/html" });
  response.write("<h1>404 Page Requested Cannot be Found</h1>");
  response.end();
};

module.exports = { serverLanding, serverPublic, serverSearchApi, pageNotFound };
