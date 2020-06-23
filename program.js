const _ = require('lodash');
require('lodash');

const worker = function(comms) {
    let counted = [];

    // Group by username
    comms = _.groupBy(comms, "username");

    _.forEach(comms, function (item, name) {
        counted.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(counted, "comment_count").reverse();
};



module.exports = worker;