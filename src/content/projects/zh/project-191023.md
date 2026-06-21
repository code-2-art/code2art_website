---
id: "project-project-191023-zh"
concept_id: "project-191023"
type: "project"
slug: "project-191023"
title: "用这款小程序就能操控现场演出和交互装置"
lang: "zh"
tags:
  - "project"
status: "canonical"
created: "2019-10-23"
updated: "2019-10-23"
version: 1
summary: "OSC 是各软件和设备之间互传数据时常用的数据协议，最常见的使用场景就是手机端装一个 OSC 发送软件，电脑端装一个接收模块，然后就可以开始你的表演，用手里的设备去控制天控制地："
coverUrl: "/uploads/project-191023/img_001.webp"
author: "Contra的后院"
publishedAt: "2019-10-23"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f"
useDocUrl: false
---

OSC 是各软件和设备之间互传数据时常用的数据协议，最常见的使用场景就是手机端装一个 OSC 发送软件，电脑端装一个接收模块，然后就可以开始你的表演，用手里的设备去控制天控制地：

<img src="/uploads/project-191023/img_001.webp" alt="" loading="lazy" />

用手持设备与头戴设备，控制身后投影

<img src="/uploads/project-191023/img_002.webp" alt="" loading="lazy" />  
叶师父用手机调试超大屏的人机互动特效

<img src="/uploads/project-191023/img_003.webp" alt="" loading="lazy" />  
用 Keyboard 控制小机器人

<img src="/uploads/project-191023/img_004.webp" alt="" loading="lazy" />  
手（爪）势控制也经常用到 OSC

以往手机上使用 OSC，必须专门安装 App（如 TouchOSC）。  
本文重点来了， **BugOSC**， 是一款**微信小程序版**的 OSC 控制器，可向局域网内的设备发送标准 OSC 数据。  
实物演示如下：

<img src="/uploads/project-191023/img_005.webp" alt="" loading="lazy" />

获取 BugOSC 小程序：

<img src="/uploads/project-191023/img_006.webp" alt="" loading="lazy" />

立下Flag，会陆续增加更多功能。

---

关于小程序和 OSC，曾经写过一篇[用H5和小程序发送OSC](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483831&idx=1&sn=7a3f9ccfb6cac739efc06dd457b3808d&chksm=e9f53326de82ba30b556d8b6772d5a923a0904627e282cbd88d54039c3eb4db85746fcbd1657&scene=21#wechat_redirect)，主要讲解如何基于 WebSocket 协议来传输 OSC 数据。

WebSocket 和 UDP 是两种网络传输协议，通常用来传输 OSC 数据的是 UDP 协议，例如常见的App TouchOSC、Processing 库 oscP5 等。

而微信小程序在今年上半年以前，都只支持 WebSocket，所以 BugOSC 0.1版本是基于 WebSocket 的。  
此版本需要接收端也使用 WebSocket，因此还制作了 Processing、P5js、MaxMSP、Unity3D 等版本的接收模块，这些模块相应的介绍和源代码可见[用H5和小程序发送OSC](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483831&idx=1&sn=7a3f9ccfb6cac739efc06dd457b3808d&chksm=e9f53326de82ba30b556d8b6772d5a923a0904627e282cbd88d54039c3eb4db85746fcbd1657&scene=21#wechat_redirect)。

微信小程序官方在2019年5月起增加了对 UDP 的支持，BugOSC v0.2 版起，已将传输协议由 WebSocket 改为 UDP，所以现在的版本就是 **“最通用的那个 OSC”**。  
相应的接收模块，不再需要专门定制，各大音乐VJ演出软件及开发平台通常都自带，或以插件形式存在，**都 通 用**。

###### 参考资源

* 前文 BugOSC 演示中的视觉效果，来自 The Art of Code。

---

**Talk is cheap. Show me the code!**

BugOSC 0.1版对应的 WebSocket OSC 接收模块（Processing、P5js、MaxMSP、Unity3D等等），都开源在这里：  
github.com/avantcontra/osc-websocket-example

请猛戳下方赞赏或喜欢作者，buy me a coffee！  
您的金钱鼓励是我前进的动力。

欢迎在Patreon上订阅英文版内容，获取更多会员特供的高级内容。  
您也可以直接在Gumroad商店下载免费的demo和源代码。  
  
patreon.com/avantcontra  
gumroad.com/avantcontra  
网站: floatbug.com  
**微信公众号/知乎专栏：****实验编程**

Cheers~

Contra
