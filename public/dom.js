const input = document.getElementById('search-box');
const searchHeader = document.getElementById('search-header');

const search = function(){
    const inputTerms = input.value.toLowerCase();
    // const resultObj = logicFunctions.searchJson(inputTerms, testJson);
    // console.log(resultObj);
    searchHeader.innerHTML = inputTerms;
    const url = `/api/search?q=${inputTerms}`;
    xhr(url, function(error, response){
        if (error){
            console.error(error);
        }else{
            console.log("response is ", response);
        }
    })
}

const xhr = function (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            return callback(null, response);
        }else{
            callback('Server error'+xhr.status);
        }

    })
    xhr.addEventListener('error', function(){
        callback('Server did not respond');
    })
    xhr.open("GET", url);
    xhr.send();
}

input.addEventListener("keyup", search, false);

