const input = document.getElementById('search-box');
const searchHeader = document.getElementById('search-header');
const dataList = document.getElementById('dogbreeds-json');
const submitButton = document.getElementById('submit-button');

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
            clearContents(dataList);
            dataListPopulate(response);
        }
    })
}
const clearContents = function(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const onSubmitDogChoice = function(e){
    e.preventDefault();
    console.log(e.target);
}
const dataListPopulate = function(dogsObject){
    const arrayOfDogs = Object.keys(dogsObject);
    arrayOfDogs.forEach(function(dog){
        var option = document.createElement("option");
        option.value = dog;
        dataList.appendChild(option);
    });
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
submitButton.addEventListener("click", onSubmitDogChoice);

