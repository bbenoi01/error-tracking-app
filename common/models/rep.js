'use strict';

module.exports = function(Rep) {
    Rep.disableRemoteMethod('delete', true);
};
