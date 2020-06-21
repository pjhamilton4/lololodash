const _ = require('lodash');
const { toArray } = require('lodash');

const worker = function(list){
  return _.forEach(list, function(element) {
    if (element.population > 1) {
      element.size = "big";
    } else if(element.population > 0.5) {
      element.size = "med";
    } else {
      element.size = "small";
    }
  });
};

module.exports = worker;