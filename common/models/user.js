'use strict';

module.exports = function(user) {
    User.disableRemoteMethod('delete', true);
};