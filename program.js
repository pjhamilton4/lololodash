const _ = require('lodash');
const { toArray } = require('lodash');

const worker = function (item) {
    let chainedWords = _.chain(item).map(function(word){
        word = word + "chained"; 
        return word.toUpperCase();
    }).sortBy();
    return chainedWords;
};



module.exports = worker;