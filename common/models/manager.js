'use strict';

module.exports = function(Manager) {
    Manager.disableRemoteMethod('delete', true);
};
