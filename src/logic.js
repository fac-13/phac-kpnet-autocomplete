const json = require("./dogbreeds.json");


const searchJson = inputItem => {
  return Object.keys(json).reduce((acc, item) => {
    if (item.startsWith(inputItem)) {
      acc[item] = json[item];
    }
    return acc;
  }, {});
};


module.exports = searchJson;

