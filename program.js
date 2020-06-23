const _ = require('lodash');
const { result, over } = require('lodash');
require('lodash');

const worker = function (data) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(data);
};


module.exports = worker;