---
id: "project-project-210812-zh"
concept_id: "project-210812"
type: "project"
slug: "project-210812"
title: "你有线程撕裂者，我有虚幻元气弹"
lang: "zh"
tags:
  - "project"
status: "canonical"
created: "2021-08-12"
updated: "2021-08-12"
version: 1
summary: "Unreal（虚幻引擎）的编译动辄数个小时，往往是鱼都摸完了，编译才一半不到。"
coverUrl: "/uploads/project-210812/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-08-12"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485135&idx=1&sn=b1948d9771a96c6c65ff5240fad4b605&chksm=e9f5345ede82bd48ad6be8ea6050b9cf332f7a81318ff49ce5c523498502becf590026569bd2"
useDocUrl: false
---

Unreal（虚幻引擎）的编译动辄数个小时，往往是鱼都摸完了，编译才一半不到。

提高编译速度最需要的是多核CPU，核心越多越好。

先看了AMD的线程撕裂者，单颗就能64核128线程，口水横流，价格劝退。

<img src="/uploads/project-210812/img_001.webp" alt="" loading="lazy" />

退一步看看洋垃圾，掏宝上卖的老至强双路CPU服务器，大概也能凑个24核。  
随便开几十个游戏或微信或抖音，日进斗金是不是梦。

<img src="/uploads/project-210812/img_002.webp" alt="" loading="lazy" />

再回头看看家里一堆老电脑，动动心思，不如试试元气弹：

<img src="/uploads/project-210812/img_003.webp" alt="" loading="lazy" />

啊不是，试试分布式编译，也就是把所有电脑的CPU算力，都借过来用在工作机上。

<img src="/uploads/project-210812/img_004.webp" alt="" loading="lazy" />

在团队办公时，效果会更显著，把edith lulu moona们的机器都偷偷利用起来。

<img src="/uploads/project-210812/img_005.webp" alt="" loading="lazy" />

---

关于分布式/多机编译，UE官方支持incredibuild和fastbuild。

<img src="/uploads/project-210812/img_006.webp" alt="" loading="lazy" />

**incredibuild**是成熟商软，2007年就用过了，那个时候由于单机性能还弱，所以效果非常显著，印象深刻。  
基本没什么特别的，注册、下载、多电脑安装就行。UE官方默认支持，Visual Studio里自动集成。  
注册免费license后，30天免费，会有专人跟进购买事宜。  
试了一下，还是老样子，UI似乎也没怎么变，挺好用。

---

<img src="/uploads/project-210812/img_007.webp" alt="" loading="lazy" />

个人长期使用，比较适合的是**fastbuild**。  
可以视为开源版的incredibuild，配置相对复杂一些。

具体细节，我主要参考了官方文档和下面这两篇文章：  
https://fastbuild.org/  
https://zhuanlan.zhihu.com/p/158400394  
https://blog.csdn.net/cjw\_soledad/article/details/117362397

上边两篇教程，都有点复杂。实测后，发现当前的**UE4.26版，引擎文件夹里自带了配置好的fastbuild**，基本是开箱即用状态。  
如果你根据上述教程配通了fastbuild基本款，恭喜，在UE + fastbuild这一步，并不需要复杂的配置，甚至不需要你在基本款环节编译好的fastbuild执行文件，直接用UE自带的就行……  
但仍然建议根据上边教程过一遍，利于出错时调试。

记录**几个要点**：

* 填对软件版本、windows sdk版本、visual studio版本。
* 保证所有电脑在同一个局域网内。
* 需要设置一到两个共享文件夹，所有电脑都有读写访问权限。可以在某台电脑上，也可以是局域网内的NAS等，注意防火墙。

如果配置成功，在Dashboard里（非必要软件，官网可下载）能看到效果：  
<img src="/uploads/project-210812/img_008.webp" alt="" loading="lazy" />

图中上边的local，是我开发机，8核16线程。  
下边的DESKTOP-XXX，是一台NUC小主机，豆子峡谷，4核8线程。  
所以四舍五入也算是一个24县城撕裂者了。

实际效果，比起原来的单机编译，大约能减少三分之一的时间。这个时长没什么参考性，要看电脑配置和数量，总之电脑多一点，效果自然越好。

### 遇到的几个问题

##### 1. 超时问题

这中间遇到一个坑，在配置好fastbuild编译UE的时候，有时远程机会无响应，本地机一直在等啊等啊等啊等，类似下面的情况：

<img src="/uploads/project-210812/img_003.webp" alt="" loading="lazy" />

<img src="/uploads/project-210812/img_009.webp" alt="" loading="lazy" />

在这篇文章里提到了解决办法：  
https://blog.csdn.net/cjw\_soledad/article/details/117362397

* 降低本地编译所使用的核数
* 修改缓存配置

但是这两个办法可能看脸，我的主机一直卡在内存占用100% + 磁盘读写占用100%的状况。  
猜测是16g内存满了后，又在SSD上要虚拟内存，然后双卡双待。  
解决办法：我把内存升到了64g……

64g其实也不大，UE官方推荐128g，看看知乎上“虚幻引擎”官方的贴子，人言否……

<img src="/uploads/project-210812/img_010.webp" alt="" loading="lazy" />

##### 2. 编译器警告等级问题

在用fastbuild编译的时候，还遇到了这个问题：  
"XXX" 的声明隐藏了全局声明

<img src="/uploads/project-210812/img_011.webp" alt="" loading="lazy" />

这是一个Warning，在单机编译时没有报错，而在使用fastbuild编的时候这个Warning被当作了Error。

解决办法：  
尽量先不动源代码逻辑，仅在出错的源文件里设置一下Warning的等级（也可以在编译环境里设置，更体面一些）：  
`ShadowVariableWarningLevel = WarningLevel.Warning;`

<img src="/uploads/project-210812/img_012.webp" alt="" loading="lazy" />

于是继续会有Warning，但不再是Error，从而不影响整体编译生成：

<img src="/uploads/project-210812/img_013.webp" alt="" loading="lazy" />

解决掉上述的问题后，元气弹就完成了：

<img src="/uploads/project-210812/img_014.webp" alt="" loading="lazy" />

<img src="/uploads/project-210812/img_015.webp" alt="" loading="lazy" />

榨干他！

---

**关于实验编程**

见公众号菜单：【关于教学 - 关于实验编程】

**知识星球**

**已对新用户关闭**，详见公众号菜单：【关于教学 - 情报中心】

**情报中心**

* 一个基于语雀yuque.com的半开放空间，是实验编程的知识内核
* 汇总了公众号和知识星球所有内部资源，源文件、代码、笔记等，并且长期更新
* 公众号文章汇总，修订，更新
* 日常技巧快速分享
* 支持无限次图文答疑
* 付费学员的教学专区
* 实验编程周刊，社区知识沉淀（近期无精力维护周刊，暂停）

详见公众号菜单：【关于教学 - 情报中心】

**开源**

如【H5如何收发OSC】大合集（附MaxMSP，p5js，processing，unity等代码示例）

https://github.com/avantcontra/osc-websocket-example

**关于教学**

提供**单次付费咨询**和**长期辅导教学**，

详情请至公众号菜单：【关于教学-付费教学】

**实验编程视频号**

<img src="/uploads/project-210812/img_016.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请搜索微信号：floatbug

<img src="/uploads/project-210812/img_017.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

微信公众号/视频号/知乎专栏/B站：  
**实验编程**
