---
id: "project-max-cycling-74-170316-zh"
concept_id: "max-cycling-74-170316"
type: "project"
slug: "max-cycling-74-170316"
title: "Max(Cycling '74)与其他软件的三种连接方式"
lang: "zh"
tags:
  - "max"
  - "cycling"
status: "canonical"
created: "2017-03-16"
updated: "2017-03-16"
version: 1
summary: "在知乎看到了一个问题：Cycling ’74 的Max7如何与Flash连接？"
author: "Contra"
publishedAt: "2017-03-16"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483744&idx=1&sn=08936651957513593c8ca6296f7bc12f&chksm=e9f533f1de82bae7026066b66f308c0444c3aefbb478425cd0d6e8745addf138be48d0005775"
useDocUrl: false
---

在知乎看到了一个问题：Cycling ’74 的Max7如何与Flash连接？  
里面问到了flosc，说资料不好找。  
这真是个勾起回忆的话题，很久很久以前，when I was young ……

就以Flash为引子，介绍Max的三种通信（连接）方式。从通信协议角度可以分为：OSC(UDP)，TCP，HTTP。

*关于一些术语的解释，摇摆后决定：能google到的根本轮不到我啰嗦。*  
  
**1. OSC(UDP)**  
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
