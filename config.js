// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config,
    mysql = {
        host: process.env.MYSQL_PORT_3306_TCP_ADDR,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_INSTANCE_NAME
    };

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: process.env.SITE_URL || 'http://my-ghost-blog.com',
        mail: {},

        // 配置MySQL 数据库
        database: {
            client: 'mysql',
            connection: mysql,
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '80'
        },

        //Storage.Now,we can support `qiniu`,`upyun`, `aliyun oss`, `aliyun ace-storage` and `local-file-store`
        storage: {
            provider: 'local-file-store'
        }
    }
};

module.exports = config;
