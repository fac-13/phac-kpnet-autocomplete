var dummyDogs = {
    "affenpinscher": [ ],
    "african": [ ],
    "airedale": [ ],
    "akita": [ ],
    "appenzeller": [ ],
    "basenji": [ ],
    "beagle": [ ],
    "bluetick": [ ],
    "borzoi": [ ],
    "bouvier": [ ],
    "boxer": [ ],
}

var input = document.getElementById('search-box');
var searchHeader = document.getElementById('search-header');

var search = function(){
    var inputTerms = input.value.toLowerCase();
    console.log(inputTerms);
    searchHeader.innerHTML = inputTerms;
    var results = []

}

input.addEventListener("keyup", search, false);