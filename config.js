// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config,
    mysql = {
        host: process.env['3306/tcp'],
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.INSTANCE_NAME
    };

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://my-ghost-blog.com',
        mail: {},

        // 配置MySQL 数据库
        database: {
            client: 'mysql',
            connection: mysql,
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        },

        //Storage.Now,we can support `qiniu`,`upyun`, `aliyun oss`, `aliyun ace-storage` and `local-file-store`
        storage: {
            provider: 'local-file-store'
        }
    }
};

module.exports = config;
