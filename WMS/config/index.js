'use strict';

const config = {
  development: {
    storage: {
      main: {
        username: 'root',
        password: 'Password@1',
        database: 'wms',
        host: 'localhost',
        dialect: 'mysql',
        timezone: '+05:30',
        collate: 'utf8_general_ci',
        port: 3306
      }
    }
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];