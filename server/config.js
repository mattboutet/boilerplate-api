'use strict';

const Path = require('path');

module.exports = {

    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    },

    api: {},

    dogwater: {
        connections: {
            diskDb: {
                adapter: 'disk'
            }
        },
        adapters: {
            disk: require('sails-disk')
        },
        models: Path.normalize(`${__dirname}/../lib/models`)
    },

    poop: {
        logPath: Path.normalize(`${__dirname}/../poop.log`)
    }

};
