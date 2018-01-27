'use strict';

module.exports = function(Error) {
    Error.disableRemoteMethod('delete', true);
};
