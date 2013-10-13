module.exports = function () {
    var manifest = require('package.json'),
        setupCli = require('./lib/cli'),
        gateway = require('./lib/gateway.js')();

    setupCli(process, manifest, gateway.startRunner);
};