---
id: "tutorial-tutorial-170318-zh"
concept_id: "tutorial-170318"
type: "tutorial"
slug: "tutorial-170318"
title: "猪跑上码头"
lang: "zh"
tags:
  - "tutorial"
status: "canonical"
created: "2017-03-18"
updated: "2017-03-18"
version: 1
summary: "本文讲述如何搭建docker上的drupal开发环境，让猪跑上码头。"
coverUrl: "/uploads/tutorial-170318/img_001.webp"
author: "Contra"
publishedAt: "2017-03-18"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483747&idx=1&sn=43f01e9d0e288127ed239378e68a3f88&chksm=e9f533f2de82bae49d0a62b24d0e8a4a3d2ae1d05af7385c166b81367ef89512225ec69d3d58"
useDocUrl: false
---

本文讲述如何搭建**docker**上的**drupal**开发环境，让猪跑上码头。

1. **安装ubuntu 16.04 64位，本文使用 qcloud**
2. **按官方指引安装docker**Example: Install Docker on Ubuntu Linux  
   https://docs.docker.com/engine/getstarted/linux\_install\_help/

* 用sudo权限的user登入
* 检查一下是否安装了curl

  ```
  $ which curl
  ```
* \*如果没有安装：

  ```
  $ sudo apt-get update
  ```

  ```
  $ sudo apt-get install curl
  ```
* 获取最新的docker包

  ```
  $ curl -fsSL https://get.docker.com/ | sh
  ```

  鉴于跨国网速，大约需要一二十分钟不等。
* 将当前系统用户加入docker用户组

  > 只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。  
  > https://yeasy.gitbooks.io/docker\_practice/content/install/ubuntu.html

  ```
  $ sudo groupadd docker
  ```

  ```
  $ sudo usermod -aG docker $USER
  ```

3. **安装docker-compose**

   Install Docker Compose （Define and run multi-container applications with Docker.）  
   https://docs.docker.com/compose/install/#install-as-a-container

   ```
   $ curl -L https://github.com/docker/compose/releases/download/1.11.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
   ```

   然后设置执行权限：

   ```
   $ chmod +x /usr/local/bin/docker-compose
   ```

   如果遇到curl权限问题，可先 sudo -i 切换root，装完后再 exit 切回。
4. **配置docker国内镜像**

   *鉴于跨国网速。*

   如何使用Docker官方镜像加速器 - 容器服务 - 产品文档 - 帮助与文档 - 腾讯云  
   https://www.qcloud.com/document/product/457/7207

   对于系统是 ubuntu 15.04 16.04，Docker 1.9 以上：

   ```
   sudo mkdir -p /etc/systemd/system/docker.service.d
   sudo tee /etc/systemd/system/docker.service.d/mirror.conf <<-'EOF'
   [Service]
   ExecStart=
   ExecStart=/usr/bin/docker daemon -H fd:// --registry-mirror=https://mirror.ccs.tencentyun.com
   EOF

   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```
5. **安装docker4drupal容器组**

   docker4drupal  http://docs.docker4drupal.org/en/latest/  
   是一组专为drupal而优化的容器，包含：

   <img src="/uploads/tutorial-170318/img_001.webp" alt="" loading="lazy" />

* 下载**docker4drupal**的docker-compose文件，https://github.com/wodby/docker4drupal  
  **放入drupal工程根目录里（包含index.php的目录）**：

  ```
  $ cd ~
  $ git clone XXXX/drupal_project
  $ cd drupal_project/
  $ wget https://raw.githubusercontent.com/wodby/docker4drupal/master/docker-compose.yml
  ```
* 配置docker-compose.yml文件

  ```
  $ sudo vim docker-compose.yml
  ```

  这里使用默认配置，即 mariadb 10.1，php 7.0，drupal 8，nginx 1.10，redis 3.2 等。

  默认把当前目录 **./** 分别映射到php和nginx两个容器的 **/var/www/html** ：

  ```
  php:
  ··image: wodby/drupal-php:7.0-2.0.0
  ··environment:
  ······PHP_SENDMAIL_PATH: /usr/sbin/sendmail -t -i -S mailhog:1025
  ··volumes:
  ······- ./:/var/www/html

  nginx:
  ··image: wodby/drupal-nginx:8-1.10-2.0.0
  ··environment:
  ······NGINX_BACKEND_HOST: php
  ······NGINX_SERVER_ROOT: /var/www/html/
  ··volumes:
  ······- ./:/var/www/html
  ```
* \*如果是全新创建drupal工程，可以先创建一个目录如**drupal\_docker**，放入docker-compose.yml，使用默认配置。
* 安装并启动各个容器

  ```
  $ docker-compose up -d
  ```

  安装过程中有时会出现无响应的情况，可能是网络失去连接，可确认设置了国内镜像，再重新执行up命令。

  安装完成后会自动启动各容器，浏览器访问http://xxx.xxx.xxx.xxx:8000 ，会看到drupal页面。

  如果尚未创建drupal工程，则会得到 404 page not found 页面。下一步接着安装drupal。

6. **全新安装drupal**

   进入php容器里，使用 drupal composer 来安装。（安装在php容器中的同步volumes里。）  
   https://github.com/drupal-composer/drupal-project

* 进入php容器

  ```
  $ docker-compose exec php sh
  ```
* 设置composer国内镜像

  ```
  $ composer config -g repo.packagist composer https://packagist.phpcomposer.com
  ```
* 安装drupal

  在 **/var/www/html/** 下执行：

  ```
  $ composer create-project drupal-composer/drupal-project:8.x-dev d8 --verbose --stability dev --no-interaction
  ```

  装好后，**$ exit** 退出php容器，在原始系统里可以看到之前建的目录 **drupal\_docker** 下，有了 **d8** 目录，**因为 drupal\_docker与php容器里的 /var/www/html 同步**。
* 重新调整**docker4drupal**的 docker-compose.yml 文件

  上文把drupal装在了与 docker-compose.yml 同级的目录 **d8** 里；并且 drupal-composer 安装后的drupal工程，含有 index.php 的网站部分不是在工程根目录，而是放在 **web** 目录下。

  所以，需要把nginx的doc目录由 **/var/www/html** 改为**/var/www/html/d8/web**。

  **对新版docker4drupal(2.0)，设置 NGINX\_SERVER\_ROOT**

  ```
  nginx:
  ··image: wodby/drupal-nginx:8-1.10-2.0.0
  ··environment:
  ····NGINX_BACKEND_HOST: php
  ····NGINX_SERVER_ROOT: /var/www/html/d8/web
  ```

  *我使用2.0版一直未能serve成功，改用1.0版可以，20170317*

  **对旧版docker4drupal(1.0)，设置 NGINX\_DOCROOT**

  ```
  nginx:
  ··image: wodby/drupal-nginx:1.10-1.1.0
  ··environment:
  ····NGINX_SERVER_NAME: drupal
  ····NGINX_UPSTREAM_NAME: php
  ····NGINX_DOCROOT: d8/web # 相对路径
  ```

  **1.0版的完整 docker-compose.yml 文件，参见****这里 https://gist.github.com/avantcontra/3be1af7c193592d2e0569ae197bd9fa7 。**

  设置好 docker-compose.yml 后，执行 **docker-compose up -d** 启动各容器服务。

  在浏览器里访问时，看到久违的猪跑安装页面：

  <img src="/uploads/tutorial-170318/img_002.webp" alt="" loading="lazy" />

**至此，猪终于跑上码头了。**

谢谢阅读。

<img src="/uploads/tutorial-170318/img_003.webp" alt="" loading="lazy" />

## 猪跑配图由 花婶 倾情原创。

----------------  
不要慌，真猪跑在码头上是不会慌的。
