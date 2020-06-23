const _ = require('lodash');
const { result, over } = require('lodash');
require('lodash');

const worker = function (freelancers) {
    let average = _.meanBy(freelancers, (f) => f.income);

    let underperform = [];
    let overperform = [];

    _.filter(freelancers, (f) => (f.income <= average ? underperform.push(f): overperform.push(f)));

    underperform = _.sortBy(underperform, (f)=>f.income);
    overperform = _.sortBy(overperform, (f)=>f.income);

    return {average, underperform, overperform};
};


module.exports = worker;