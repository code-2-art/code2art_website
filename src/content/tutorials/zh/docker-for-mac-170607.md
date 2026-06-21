---
id: "tutorial-docker-for-mac-170607-zh"
concept_id: "docker-for-mac-170607"
type: "tutorial"
slug: "docker-for-mac-170607"
title: "如何提升Docker for Mac性能"
lang: "zh"
tags:
  - "docker"
  - "for"
  - "mac"
status: "canonical"
created: "2017-06-07"
updated: "2017-06-07"
version: 1
summary: "Docker For Mac 在mount本地文件时，有很大的性能问题，本文介绍两种实测有效的性能提升方法。"
coverUrl: "/uploads/docker-for-mac-170607/img_001.webp"
author: "Contra"
publishedAt: "2017-06-07"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483800&idx=1&sn=eafbb3159bc3f970d9d03d7e5975a652&chksm=e9f53309de82ba1f0e090e3dca6f89e2b7a526a50bec7dc81115d2aacb6f80d2099ea9dd4a21"
useDocUrl: false
---

Docker For Mac 在mount本地文件时，有很大的性能问题，本文介绍两种实测有效的性能提升方法。

> 什么是Docker for Mac：  
> Docker for Mac is an easy-to-install desktop app for building, debugging and testing Dockerized apps on a Mac. Docker for Mac is a complete development environment deeply integrated with the MacOS Hypervisor framework, networking and filesystem. Docker for Mac is the fastest and most reliable way to run Docker on a Mac.

关于D4M性能问题的详细讨论，见这里：  
github.com/docker/for-mac/issues/77  
  
里边提到了几种解决方案：  
**- docker-machine-nfs**

github.com/adlogix/docker-machine-nfs

**- d4m-nfs**

github.com/IFSight/d4m-nfs  
**- docker-sync**

github.com/EugenMayer/docker-sync/

**- 使用edge版的Docker for Mac**  
  
实测了以下两种:  
1. docker-sync  
使用docker-sync后，性能确有明显提升。

但我在具体开发中遇到一个问题：

用了docker-sync后，从Docker容器里建一个目录xfolder，在容器外本地往该目录xfolder里添加几个文件，这些文件无法同步到Docker容器里。  
反之则可以，即先从本地创建目录，再从Docker容器里往该目录里添加文件，则这些文件会正常同步到本地。

猜测可能跟用户权限有关。

该问题在官方issues里也有讨论，暂未解决：  
github.com/EugenMayer/docker-sync/issues/410  
  
2. 使用edge版的Docker for Mac  
实测性能提升效果也不错，与docker-sync接近。（目测稍慢一点，没有跑分。）

安装时，会提示先卸载stable版的Docker，再安装edge版。

安装后Docker的logo上多了edge字样：

<img src="/uploads/docker-for-mac-170607/img_001.webp" alt="" loading="lazy" />

安装完毕，在docker-compose.yml文件中的mount volumes处，增加cached标记即可：

<img src="/uploads/docker-for-mac-170607/img_002.webp" alt="" loading="lazy" />

更多有关Docker for Mac性能问题的讨论，可以直接参见：  
github.com/docker/for-mac/issues/77

谢谢阅读  
*题图引自**http://whalesunderwater.com*

-----------

不要慌，300字够了，撤。

HUDO.IT on Slack: hudoit.herokuapp.com
