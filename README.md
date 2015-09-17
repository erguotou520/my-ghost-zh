# My Ghost Blog(zh)
基于Docker的Ghost博客搭建，使用的是GhostChina提供的中文版本，搭建在[DaoCloud](https://www.daocloud.io/)上。
## 部署
1. Fork一份到自己的Github仓库
2. 参考[代码构建](http://help.daocloud.io/features/build-flows.html)构建`my-ghost-zh`镜像
3. 参考[服务集成](http://help.daocloud.io/features/services.html)创建一个Mysql服务，然后点击管理Mysql，在Phpmyadmin里面讲数据库的排序改为`utf8-general-ci`（此处有坑）
4. 参考[应用部署](http://help.daocloud.io/features/deployment.html)利用刚才构建的`my-ghost-zh`部署，
并绑定刚刚创建的Mysql服务，服务的别名一定要是默认的`MYSQL`，最好再添加一个环境变量`SITE_URL=your_daocloud_site_url.daoapp.io`。
最后点击启动就可以了。

![](http://static.erguotou.me/docker-ghost-zh.png)
