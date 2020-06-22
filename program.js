const _ = require('lodash');
const { toArray } = require('lodash');

const worker = function (item) {
    let result = {
        warm: [],
        hot: []
    }

    const check_temp = (item) => item > 19;

    _.forEach(item, function (town, townname) {
        if (_.every(town, check_temp)) {
            result.hot.push(townname);
        } else if (_.some(town, check_temp)) {
            result.warm.push(townname);
        }

    });
    return result;
};



module.exports = worker;