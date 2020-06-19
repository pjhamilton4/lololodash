const _ = require('lodash');

const worker = function(list){
    return _.filter(list, (element)=> element.active === true);
};

module.exports = worker;