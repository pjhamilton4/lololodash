const _ = require('lodash');
const { result } = require('lodash');
require('lodash');

const worker = function (articles) {

    return _.chain(articles).groupBy('article')
        .map((element, key) => {
            return { article: parseInt(key), total_orders: _.reduce(element, (result, value) => result += value.quantity, 0) }
        }).sortBy(element => -element.total_orders);
};



module.exports = worker;