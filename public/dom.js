const input = document.getElementById("search-box");
// const searchHeader = document.getElementById("search-header");
const dataList = document.getElementById("dogbreeds-json");
const submitButton = document.getElementById("submit-button");
const sectionResults = document.getElementById("section-results");

const xhr = function(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    if (xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      return callback(null, response);
    } else {
      callback("Server error" + xhr.status);
    }
  });
  xhr.addEventListener("error", function() {
    callback("Server did not respond");
  });
  xhr.open("GET", url);
  xhr.send();
};

const search = function() {
  const inputTerms = input.value.toLowerCase();
  // const resultObj = logicFunctions.searchJson(inputTerms, testJson);
  // console.log(resultObj);
  //   searchHeader.innerHTML = inputTerms;
  const url = `/api/search?q=${inputTerms}`;
  xhr(url, function(error, response) {
    if (error) {
      console.error(error);
    } else {
      clearContents(dataList);
      dataListPopulate(response);
    }
  });
};
const clearContents = function(container) {
  input.setAttribute("autocomplete", "off");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
const onSubmitDogChoice = function(e) {
  clearContents(sectionResults);
  e.preventDefault();
  let dogValue = input.value;
  if (dogValue.includes("(")) {
    handleSubbreed(dogValue);
  } else {
    handleBreedOnly(dogValue);
  }
};
const handleBreedOnly = function(dogValue) {
  let url = `https://dog.ceo/api/breed/${dogValue}/images/random`;
  xhr(url, function(error, response) {
    if (error) {
      console.error(error);
    }
    displayResults(response);
  });
};
const handleSubbreed = function(dogValue) {
  let breedSubbreed = dogValue
    .replace(")", "")
    .replace("(", "")
    .split(" ");
  let url = `https://dog.ceo/api/breed/${breedSubbreed[0]}/${
    breedSubbreed[1]
  }/images/random`;
  console.log(url);
  xhr(url, function(error, response) {
    if (error) {
      console.error(error);
    }
    displayResults(response);
  });
};

const displayResults = function(res) {
  let dogFrame = document.createElement("div");
  let dogPic = document.createElement("img");
  dogFrame.classList.add("image__container");
  sectionResults.appendChild(dogFrame).appendChild(dogPic);
  dogPic.src = res.message;
  dogPic.alt = 'picture of the dog';
};

const dataListPopulate = function(dogsObject) {
    const arrayOfDogs = Object.keys(dogsObject); 
    if (arrayOfDogs === []) {
    handleNoDog();
  } else {
    arrayOfDogs.forEach(function(dog) {
      if (dogsObject[dog].length > 0) {
        dogsObject[dog].forEach(function(item) {
          let optionText = `${dog} (${item})`;
          let option = document.createElement("option");
          option.value = optionText;
          dataList.appendChild(option);
        });
      } else {
        let option = document.createElement("option");
        option.value = dog;
        dataList.appendChild(option);
      }
    });
  }
};

const handleNoDog = function() {
  let noDog = document.createElement("h2");
  noDog.textContent = "Not a Dog!";
  clearContents(sectionResults);
  sectionResults.appendChild(noDog);
};

const headerShrink = function() {
  const header = document.querySelector(".header");
  const headerTitle = document.querySelector(".header__title");
  const headerDes = document.querySelector(".header__description");
  const headerInput = document.querySelector(".header__input");
  const form = document.getElementById("form");

  if (header.classList.contains("header")) {
    header.classList.remove("header");
    header.classList.add("header--small");
    headerTitle.classList.remove("header__title");
    headerTitle.classList.add("header__title--small");
    headerDes.classList.remove("header__description");
    headerDes.classList.add("header__description--small");
    form.style.display = "flex";
  }
};

input.addEventListener("keyup", search, false);
submitButton.addEventListener("click", onSubmitDogChoice);
submitButton.addEventListener("click", headerShrink);
