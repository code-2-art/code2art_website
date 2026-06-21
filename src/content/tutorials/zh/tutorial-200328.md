---
id: "tutorial-tutorial-200328-zh"
concept_id: "tutorial-200328"
type: "tutorial"
slug: "tutorial-200328"
title: "【教程来了】“我要打十个!” 小程序与PC装置交互全过程"
lang: "zh"
tags:
  - "pc"
status: "canonical"
created: "2020-03-28"
updated: "2020-03-28"
version: 1
summary: "最近实验编程土特产【BugOSC】出镜率较高，主要原因是方便演示“任意设备与PC装置的交互过程”，手到擒来。"
coverUrl: "/uploads/tutorial-200328/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-03-28"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484081&idx=1&sn=8980820743c08e35e48369fdce2a0c05&chksm=e9f53020de82b9366a266fa79028a2068ad4879152f55122a45065e5c802b0f516d1f5be71cc"
useDocUrl: false
---

最近实验编程土特产【BugOSC】出镜率较高，主要原因是方便演示“任意设备与PC装置的交互过程”，手到擒来。

手机控制Blender材质：

<img src="/uploads/tutorial-200328/img_001.webp" alt="" loading="lazy" />

控制Blender动画：

<img src="/uploads/tutorial-200328/img_002.webp" alt="" loading="lazy" />

控制Shader视觉：

<img src="/uploads/tutorial-200328/img_003.webp" alt="" loading="lazy" />

以及最新升级的v0.4版，AI智能语音识别加持：

<img src="/uploads/tutorial-200328/img_004.webp" alt="" loading="lazy" />

除了英文，中文普通话也支持，再复习一遍，“我要打十个！”：

下面会有教你**如何打十个的99%完整手把手视频。**

*还剩的1%是什么？文末告诉你！*

介于刚拿起剪辑手术刀不久，经常剪个稀碎，视频包含的知识点，有必要先提醒（补充）一下：

* **数据流：BugOSC --> MaxMSP --> Web页面**
* **BugOSC使用介绍**
* **MaxMSP如何接收OSC数据**
* **MaxMSP扩展："Node for Max"基本功能**
* **"Node for Max"当作服务器托管网页（其实托管“网站”也可以）**
* **从"hello world"开始，手写一个含有交互动画功能的网页**网页要素涵盖了：  
  CSS样式表、JavaScript交互事件监听、老字号动画库GreenSock
* **"Node for Max"/Nodejs服务器与前端网页通信**

知识点分解出来，真想每个点拆开单独发一篇……

至于这些知识点该怎么用，不妨从实用角度列一些问题：

如何用手机操控现场演出？  
如何用手机操控互动装置？  
手机换成midi控制器，试试VJ的基本操作？  
激光测距雷达信号如何控制大屏画面？  
人体捕捉数据如何可视化？

所以根据举一反三股四定理，加起来是在演示：

* 问题分析
* 数据流设计
* 环节拆解
* 输入端-人机交互
* 数据传输 - 不同的环节对应不同的传输格式或协议
* 业务逻辑 - 数据中转处理
* 输出端 - 前端视觉呈现

这些串起来，就是一个**完整的项目制作闭环过程**。

当然，前后可能还有拿刀砍价，以及拿刀讨薪的过程……

原计划还要把视频过程以及前边列的知识点逐个图文展开，就如这一篇：  
[超简单！5分钟就能做出来的MaxMSP和Blender实时音画交互](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484059&idx=1&sn=3a3d57a20660d76dd47feb73fc68bdc4&chksm=e9f5300ade82b91cec5abdad86b3510eedf7d5ace1ee3c193ae9dec22f37d24043bdffe7a1fd&scene=21#wechat_redirect)

但是把握文章深度和广度有点困难（写 不 动 了）。

所以还是先看视频吧，若有兴趣继续往下交流，欢迎留言互动。

**如何打十个的99%完整手把手视频：**

还剩的1%，是中文语音识别后得到的中文字符，进行OSC传输时需要编解码，否则会显示为乱码。因为OSC1.0的协议，只包含了最基本的ASCII，不支持中文、日文等字符。

上一篇打十个的演示视频里，已经做了编解码，所以**BugOSC小程序本身是支持中文的**，只是这篇教程视频，忘了录了……让我们先难忘今宵，编解码下次再约。

---

#### 参考资源

* Nodejs及前端页面用到的库：  
  直连通信：https://socket.io/  
  静态页面托管：https://expressjs.com/  
  变形动画：https://greensock.com/
* BugOSC  
  制作过程文章：[用这款小程序就能操控现场演出和交互装置](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)  
  微信搜一搜：BugOSC
* 宝藏康老师！！  
  GIF动画作者：康托耶夫  
  公众号：康师傅炖一切

---

#### **Talk is cheap. Show me the code!**

本文视频已涵盖数据接收、转发、视觉互动全过程。

**源文件（MaxMSP patch + Node/HTML代码）**，惯例提供给知识星球的赞助商老板们，**感谢支持。**

另外编程德鲁伊系列绝大部分开源，可刨**公众号菜单。**

在知识星球里你将持续获得实验代码和无限次答疑。

详情请刨公众号菜单：**关于问答-**内部知识星球****。

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

网站: floatbug.com

**微信公众号/知乎专栏/知识星球/B站：****实验编程**

<img src="/uploads/tutorial-200328/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-200328/img_006.webp" alt="" loading="lazy" />
