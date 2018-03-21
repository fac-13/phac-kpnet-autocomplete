var logicFunctions = {
  searchJson: function(inputItem, json) {
    let keys = Object.keys(json);
    let result = keys.reduce(function(acc, item) {
      if (item.startsWith(inputItem)) {
        acc[item] = json[item];
      }
      return acc;
    }, {});
    return result;
  }
};

if (typeof module !== "undefined") {
  module.exports = logicFunctions;
}
