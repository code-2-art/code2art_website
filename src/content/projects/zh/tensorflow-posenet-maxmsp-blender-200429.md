---
id: "project-tensorflow-posenet-maxmsp-blender-200429-zh"
concept_id: "tensorflow-posenet-maxmsp-blender-200429"
type: "project"
slug: "tensorflow-posenet-maxmsp-blender-200429"
title: "我们丐帮玩动作捕捉，只需一个网络摄像头 ｜ TensorFlow PoseNet 和 MaxMSP 和 Blender"
lang: "zh"
tags:
  - "tensorflow"
  - "posenet"
  - "maxmsp"
  - "blender"
status: "canonical"
created: "2020-04-29"
updated: "2020-04-29"
version: 1
summary: "今天的标题很长，明人不做暗事，标题后面的那一串关键词，是为了提高在“微信搜一搜”里的曝光率。"
coverUrl: "/uploads/tensorflow-posenet-maxmsp-blender-200429/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-04-29"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484146&idx=1&sn=3fbfaad69a4823cd822c9ff4bfe105bc&chksm=e9f53063de82b975780b30b0ce86cf75d2c463cab1dee87cfb1dff0bb02e9c649ff3b527adaf"
useDocUrl: false
---

今天的标题很长，明人不做暗事，标题后面的那一串关键词，是为了提高在“微信搜一搜”里的曝光率。

上边这个视频的原理步骤：

1. 用基于网页的人工智能的TensorFlow的PoseNet的来做动作捕捉；
2. 把这个网页用MaxMSP提供的Node for Max模块联动到MaxMSP里；
3. PoseNet捕捉到的人体动作数据通过Socket.IO发回给MaxMSP；
4. MaxMSP把收到的数据通过OSC发送给Blender；
5. Blender用收到的数据来实时控制变形动画。

还是要划一下重点，我往往发的都是组合拳，这一套至少三个要点：

* 演示PoseNet动作捕捉；
* MaxMSP的Node for Max与网页间的数据收发（其实之前好几个例子都用了这个环节，包括视频教程，可惜播放量就……算了我也假装不在意这个）。
* Blender的Eevee实时渲染，即OSC数据的接收。

---

**PoseNet**

<img src="/uploads/tensorflow-posenet-maxmsp-blender-200429/img_001.webp" alt="" loading="lazy" />

从前Google有个山，啊不是，Google有个机器学习框架TensorFlow，

TensorFlow有个JavaScript版TensorFlow.js，

TensorFlow.js里面有一个PoseNet模型，

PoseNet是一个可以在网页里运行的实时动作捕捉模型。

我把它进行了微调，并且把模型下载到本地来加载，为你省去一些加载不成功引起的调试苦恼。

---

**MaxMSP的Node for Max**

它看上去是把网页跟MaxMSP联动起来，实际上是借助强大的Web前端和NodeJS力量，大大扩展MaxMSP的功能。

<img src="/uploads/tensorflow-posenet-maxmsp-blender-200429/img_002.webp" alt="" loading="lazy" />

注意：需要Max8

以前的文章里用过多次了，上一篇我要打十个的详细视频教程，就有完整的MaxMSP + Node for Max + 网页 + Socket.IO + OSC的实现过程。

[【教程来了】“我要打十个!” 小程序与PC装置交互全过程](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484081&idx=1&sn=8980820743c08e35e48369fdce2a0c05&chksm=e9f53020de82b9366a266fa79028a2068ad4879152f55122a45065e5c802b0f516d1f5be71cc&scene=21#wechat_redirect)

要实现本期这个例子，其实不用Max这个环节也行（纳尼？！）。

直接用NodeJS做一个本地服务器，托管PoseNet的页面，并且使用OSC库把数据发给Blender就可以了。

我用Max的目的，是因为Max的UDP Object实在太好用了。

当然也是为了强行水一贴Max，不然变成纯前端编程，影响收视率。

---

**Blender**

Blender端之前演示过了，模型、NodeOSC插件、Eevee渲染，都是老配方，没有变化。

这个车模型不是我做的，之前给过引用链接。

被我引用了多次，之前那个BugOSC小程序和车模互动的视频，在Twitter上浏览量还超了**十万加**，车模作者开心的点赞互粉。

<img src="/uploads/tensorflow-posenet-maxmsp-blender-200429/img_003.webp" alt="" loading="lazy" />

---

**参考资源**

**PoseNet**

https://github.com/tensorflow/tfjs-models/tree/master/posenet

**Blender汽车模型**

我在这里买的，请支持作者：

https://gumroad.com/bluefoxcreation#RclL

---

#### **Talk is cheap. Show me the code!**

本文中列出的之前的视频教程，实际上已经涵盖了Max与页面JavaScript数据通信、以及Max与Blender OSC互动的完整过程。  
而Web页面端的js代码，PoseNet 微调，也都一并打包。

**源文件（MaxMSP patch + Node/HTML代码）开源，**放在实验编程情报中心 - 语雀知识库里。

实验编程情报中心（语雀）免费加入，目前在内测，可以加入微信群获取内部邀请链接。

详情点击：[实验编程情报中心](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484139&idx=2&sn=56259747fe71e8fb19274c3a7c9657ea&chksm=e9f5307ade82b96cbf8a9fe51be07ebca7592c9ae8417a14ccaa71e3fd825daac4b4f124eef4&scene=21#wechat_redirect)

另外编程德鲁伊系列绝大部分开源，可刨**公众号菜单。**

---

**实验编程微信群****：**  
创意编程和交互技术等领域一直有很多优质群，关于专项技术优先推荐去这些群学习。

实验编程微信群倾向于：

* 讨论本公众号内容。尤其计算艺术Computational Art，生成艺术Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如直播答疑、线上workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/tensorflow-posenet-maxmsp-blender-200429/img_004.webp" alt="" loading="lazy" />

---

在**实验编程****知识星球**里，你将持续获取大部分系列的源代码以及无限次答疑。  
更多内容，请刨公众号菜单：**关于问答-知识星球**。

<img src="/uploads/tensorflow-posenet-maxmsp-blender-200429/img_005.webp" alt="" loading="lazy" />

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/  
知乎专栏/B站/知识星球：  
**实验编程**

语雀知识库：  
**实验编程情报中心**（微信群获取邀请链接）
