(function(document) {
var input = document.getElementById('search-box');
var searchHeader = document.getElementById('search-header');

var search = function(){
    var inputTerms = input.value.toLowerCase();
    // var resultObj = logicFunctions.searchJson(inputTerms, testJson);
    // console.log(resultObj);
    searchHeader.innerHTML = inputTerms;
    var results = [];

}

var xhr = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
    if (xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        return callback(response);
    }else{
        try {
             callback('Your search generated no results'); // generates an exception
            }
        catch (e) {
                          // statements to handle any exceptions
                          console.log(e); // pass exception object to error handler
                        }
                  }
              });
          xhr.open("GET", url);
          xhr.send();
          }
}
input.addEventListener("keyup", search, false);

})(document);