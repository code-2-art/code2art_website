---
id: "project-max-cycling-74-200903-2-zh"
concept_id: "max-cycling-74-200903-2"
type: "project"
slug: "max-cycling-74-200903-2"
title: "Max(Cycling '74)与其他软件的三种连接方式"
lang: "zh"
tags:
  - "max"
  - "cycling"
status: "canonical"
created: "2020-09-03"
updated: "2020-09-03"
version: 1
summary: "旧文重发，给文章加原创，消除强迫症。"
coverUrl: "/uploads/max-cycling-74-200903-2/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-09-03"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484613&idx=2&sn=55a3e26247a42e867ad8ae12b2b41cab&chksm=e9f53654de82bf42c6cc228ac9a83b55435419e8b83481ca7a81d03b731271634cec1fbdb85b"
useDocUrl: false
---

旧文重发，给文章加原创，消除强迫症。

原文始发于2017-03-16。曾于2018、2019做过更新。  
那个时候公众号还叫：浮想示波间。。  
  
其实当Node for Max出现后，MaxMSP跟其他软件的连接方式就非常灵活了，现在再用“三种”来概括略有不妥，以后关于此文的更新修订我将直接记录在实验编程情报中心（语雀）。

*以前真实在，写半天，全干货，不带插一张图的...  
为了好看，这回插两张广告吧。*

以下是原文：

---

在知乎看到了一个问题：Cycling ’74 的Max7如何与Flash连接？

里面问到了flosc，说资料不好找。  
这真是个勾起回忆的话题，很久很久以前，when I was young ……

就以Flash为引子，介绍Max的三种通信（连接）方式。从通信协议角度可以分为：OSC(UDP)，TCP，HTTP。

*关于一些术语的解释，摇摆后决定：能google到的根本轮不到我啰嗦。*  
  
**1. OSC(UDP)**

----*2019年5月，更新分割线，开始*----

OSC是creative编程工具最基本必备功能，最常规的是基于UDP的OSC，用Max自带的[udpreceive]就可以，官方文档：

https://docs.cycling74.com/max7/tutorials/communicationschapter03

另，还有基于websocket的OSC，可用于网页、手机网页、甚至微信小程序来与Max通信，可以见我的例子：

[用H5和小程序发送OSC](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483831&idx=1&sn=7a3f9ccfb6cac739efc06dd457b3808d&chksm=e9f53326de82ba30b556d8b6772d5a923a0904627e282cbd88d54039c3eb4db85746fcbd1657&scene=21#wechat_redirect)

----*2019年5月，更新分割线，结束*----

Flash因为对UDP支持不太好，所以早年间无法直接通过OSC将Flash与Max相连接。于是有了flosc。  
flosc其实是一个第三方网关，说起来也有十几岁了。。  
Flash通过TCP连到flosc，flosc通过OSC与Max相连，间接实现Flash与Max通信。  
  
这里的flosc还可以下载，一般只有老司机才能找到:  
http://transmote.com/flosc/  
*"last updated december 6, 2003"*向作者致敬，站还开着呢 Orz

但是如果你用Flash做AIR开发，AIR其实是支持UDP的，这样理论上可以跳过flosc。  
AIR UDP 文档：DatagramSocket  
http://help.adobe.com/en\_US/FlashPlatform/reference/actionscript/3/flash/net/DatagramSocket.html

关于AIR的UDP，这真是个勾起回忆的话题，很久很久以前，有个戴红领巾的少年，胸中有一团火焰……

下边这段AIR UDP的介绍发于2010年的豆瓣：

> 【互动青年醒目】flash player 10.1 与 air 2.0新特性  
> https://www.douban.com/group/topic/8704747/
>
> ……
>
> Advanced networking capabilities like secure sockets, UDP support, and the ability to listen on sockets.（Air Only）  
> 网络功能增强，注意里面的“UDP support”，这是很振奋人心的消息（至少我被小振了一下）。简单的并形象的说，“OSC”是互动青年们常会遇到的词，尤其是把processing、Arduino、msp、pd、vvvv等等进行互联的时候，通信标准往往是OSC。而OSC是基于UDP协议的，而flash一直是不支持UDP的（除了视频流方面略微支持）。。。所以以前想把Arduino或processing等与flash连接，如果要使用OSC模式，就必须通过flosc等网关或代理模块，先让Arduino与flosc以OSC（UDP）方式连接，flosc再与flash以TCP方式连接。总之现在可以抛掉flosc，让Arduino与flash赤裸相见了。
>
> 网络功能增强，注意里面的“UDP support”，这是很振奋人心的消息（至少我被小振了一下）。简单的并形象的说，“OSC”是互动青年们常会遇到的词，尤其是把processing、Arduino、msp、pd、vvvv等等进行互联的时候，通信标准往往是OSC。而OSC是基于UDP协议的，而flash一直是不支持UDP的（除了视频流方面略微支持）。。。所以以前想把Arduino或processing等与flash连接，如果要使用OSC模式，就必须通过flosc等网关或代理模块，先让Arduino与flosc以OSC（UDP）方式连接，flosc再与flash以TCP方式连接。总之现在可以抛掉flosc，让Arduino与flash赤裸相见了。

不过UDP是OSC的底层协议，要直接用OSC格式传数据，还需要一系列协议封装工作。  
  
**2. 直接用TCP协议连接**  
Flash支持TCP，或通常意义上的Socket：  
Socket - Adobe ActionScript® 3 (AS3 ) API Reference  
http://help.adobe.com/en\_US/FlashPlatform/reference/actionscript/3/flash/net/Socket.html

Max也有: C74 Toolbox: tcpClient  
https://cycling74.com/toolbox/tcpclient/

但是TCP连接方式，必须一个当server，另一个当client。  
Flash一般只能做client，而上边这个Max Object也是client……

*---*2018年1月，更新分割线，开始*---*

用"mxj net.tcp.recv"，可以单向接收其他client发来的消息；  
再使用"mxj net.tcp.send"来单向发送。

*---*20**18年1月**，更新分割线，结束*----*

可以再找个第三方做server，然后两头Flash client与Max client都与该server相连，与flosc的方式类似。Java、nodejs等，都可以做server，processing应该也可以。

如果是Flash的AIR项目，那就可以直接当server了: ServerSocket  
http://help.adobe.com/en\_US/FlashPlatform/reference/actionscript/3/flash/net/ServerSocket.html

3. 用HTTP连接

HTTP也分为server与client。  
下边这个Max扩展，可以让Max化身HTTP server:  
Embedded websocket/http webserver external for Cycling74's Max  
https://github.com/olilarkin/wsserver

Max化身server后，能干很多事，可以从PC/手机浏览器或任意设备上通过HTTP访问Max，某些场合下，这比使用Max MIRA iPad App方便多了。另外Max MIRA也于2016年底终于推出web版：GitHub - Cycling74/miraweb  
https://github.com/Cycling74/miraweb

有了Max的HTTP server，Flash就可以作为client去访问它。

还有个小问题，HTTP一般是单向的，就是只能从Flash client发起请求，去向Max server要数据，而Max不能主动推送数据给Flash（当然改造一下也可以，超本文范围）。

怎么办呢？轮询，用普通话说就是Flash不停的去问Max：有没有东西给我啊，有没有东西给我啊。  
  
简单介绍到这里，这真是个勾起回忆的问题，Flash就够久了，还出现了flosc……

谢谢阅读。

----------------  
不要慌，真青年是不会慌的。

---

原文结束，老朋友不如……**stO**

<img src="/uploads/max-cycling-74-200903-2/img_001.webp" alt="" loading="lazy" />

---

**关于实验编程完整详情**

[关于实验编程 - 2020 八月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484512&idx=2&sn=f3ff9bbd8de4ccbe06210e0d98d7e6b5&chksm=e9f536f1de82bfe70147424c875e3dc716df4fdf0dde3790fe151496aacecd93a82026832879&scene=21#wechat_redirect)

---

**语雀情报中心**

* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料

详情请看：

[回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)

---

**付费教学**

情报中心还有付费教学和VIP会员专属的小组。

在这里会放付费课程、教学资料、作业点评、问题解答等内容。

**目前试推付费咨询和VIP会员，付费课程也在更新上架中。**

一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

详情请至：

* 公众号菜单：“关于教学 -> 付费教学”
* 或者公众号发送关键字：付费咨询
* 或者扫码直接进入商店：

<img src="/uploads/max-cycling-74-200903-2/img_002.webp" alt="" loading="lazy" />

**答疑优先顺序：**

1. 付费咨询、课程学员、VIP会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

---

**知识星球**

**知识星球**是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。  
还可以直接在情报中心的知识星球专属下载区获取资源。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/max-cycling-74-200903-2/img_003.webp" alt="" loading="lazy" />

---

**开源**

如【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：

https://**github.com/avantcontra**/coding-druid

又如【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://**github.com/avantcontra**/osc-websocket-example

---

**实验编程视频号**

视频号与公众号内容不尽相同，有一些未在公众号公开的视频、制作花絮等。

<img src="/uploads/max-cycling-74-200903-2/img_004.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/max-cycling-74-200903-2/img_005.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励**，**在看**，**点赞，****收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
