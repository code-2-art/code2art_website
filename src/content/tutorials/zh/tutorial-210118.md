---
id: "tutorial-tutorial-210118-zh"
concept_id: "tutorial-210118"
type: "tutorial"
slug: "tutorial-210118"
title: "[答疑]给上一篇“基于网络摄像头的丐帮动作捕捉”增加完整数据输出"
lang: "zh"
tags:
  - "tutorial"
status: "canonical"
created: "2021-01-18"
updated: "2021-01-18"
version: 1
summary: "之前发过一篇这个："
coverUrl: "/uploads/tutorial-210118/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-01-18"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484808&idx=1&sn=b2c8d22e8a154a8ce465b70d79ff4977&chksm=e9f53719de82be0ff141e10d56c9c6a64228253b755df55f6b827ece1367daf5d4642a2f7615"
useDocUrl: false
---

之前发过一篇这个：

[我们丐帮玩动作捕捉，只需一个网络摄像头 ｜ TensorFlow PoseNet 和 MaxMSP 和 Blender](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484146&idx=1&sn=3fbfaad69a4823cd822c9ff4bfe105bc&chksm=e9f53063de82b975780b30b0ce86cf75d2c463cab1dee87cfb1dff0bb02e9c649ff3b527adaf&scene=21#wechat_redirect)

这个例子里，我用MaxMSP包装PoseNet后，把捕捉数据通过OSC，发送给Blender端去驱动模型动画。

因为只需要做平移，例子里我只把nose（鼻）位置的x坐标发送出去。

油管上有人问，能否让MaxMSP端发送完整的全身捕捉数据，因为他是TouchDesigner + Python党，不熟悉Web和MaxMSP如何改造。

<img src="/uploads/tutorial-210118/img_001.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-210118/img_002.webp" alt="" loading="lazy" />

随后我在MaxMSP端和PoseNet前端页面（通过MaxMSP的Node for Max封装到MaxMSP工程里）增加了全数据发送，log截图：

<img src="/uploads/tutorial-210118/img_003.webp" alt="" loading="lazy" />

这次暂时没有做Blender接收端的演示，卖个关子，后续补充。

大方向仍是用Blender的OSC插件NodeOSC接收MaxMSP发出的OSC动捕数据，再去驱动模型动画。

模型可以考虑使用Blender官网免费下载的Rain v2.0：

<img src="/uploads/tutorial-210118/img_004.webp" alt="" loading="lazy" />

再讲一下整体流程原理：

1. 用基于网页的人工智能的TensorFlow的PoseNet的来做动作捕捉；
2. 把这个网页用MaxMSP提供的Node for Max模块联动到MaxMSP里；
3. PoseNet捕捉到的人体动作数据通过Socket.IO发回给MaxMSP；
4. MaxMSP把收到的数据通过OSC发送给Blender；
5. Blender用收到的数据来实时控制变形动画。

理解整个交互流程后，发送端不限于MaxMSP，接收演示端也不限于Blender。

领会精神，抛砖引玉，高射炮除了打飞机还能打蚊子打苍蝇，这是实验编程特色。

如果你做过相关Showcase，非常欢迎投稿交流，我邀请你加入实验编程情报中心（语雀）。

---

**Talk is cheap. Show me the code!**

实验编程一向是在文章或视频中讲述原理和完整实现流程，如果你有一定编程能力就可直接动手重现文中效果。

如果仍需本文源代码，可在【情报中心】**免费**获取。

详情请看今天第二篇推送：《如何在情报中心免费获取实验编程源代码》。

---

**实验编程**

<img src="/uploads/tutorial-210118/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-210118/img_006.webp" alt="" loading="lazy" />

**开源**

【编程德鲁伊】系列：  
https://github.com/avantcontra/coding-druid

【H5如何收发OSC】大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://github.com/avantcontra/osc-websocket-example

**情报中心（**语雀**）**

* 一个基于语雀yuque.com的社区空间
* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料
* 周刊投稿，社区知识沉淀

详情请至**公众号菜单：关于教学 - 情报中心**

<img src="/uploads/tutorial-210118/img_007.webp" alt="" loading="lazy" />

**知识星球**

知识星球是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨**公众号菜单：关于-知识星球**。

<img src="/uploads/tutorial-210118/img_008.webp" alt="" loading="lazy" />

**付费教学**

详情请至：

* 公众号菜单：关于教学 -> 付费教学
* 或者公众号发送关键字：付费咨询

<img src="/uploads/tutorial-210118/img_009.webp" alt="" loading="lazy" />

**答疑优先顺序：**

1. 付费咨询、VIP/课程会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

**实验编程视频号**

<img src="/uploads/tutorial-210118/img_010.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

<img src="/uploads/tutorial-210118/img_011.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
