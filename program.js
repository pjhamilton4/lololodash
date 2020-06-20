const _ = require('lodash');

const worker = function(list){
    return _.sortBy(list, 'quantity').reverse();
};

module.exports = worker;