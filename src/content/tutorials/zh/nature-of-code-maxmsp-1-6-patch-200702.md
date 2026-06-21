---
id: "tutorial-nature-of-code-maxmsp-1-6-patch-200702-zh"
concept_id: "nature-of-code-maxmsp-1-6-patch-200702"
type: "tutorial"
slug: "nature-of-code-maxmsp-1-6-patch-200702"
title: "Nature of Code MaxMSP实现-1.6加速度向量 [Patch a Dirty 010]"
lang: "zh"
tags:
  - "nature"
  - "of"
  - "code"
  - "maxmsp"
status: "canonical"
created: "2020-07-02"
updated: "2020-07-02"
version: 1
summary: "【Patch a Dirty 010】"
coverUrl: "/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-07-02"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484427&idx=1&sn=051e8c193ea01db1a196de92811ce970&chksm=e9f5369ade82bf8cd5e1e270c1c2b699a3a440bd4d0e0e319cf52c2251800bd416265f7a7b67"
useDocUrl: false
---

**【Patch a Dirty #010】**

* **Nature of Code - MaxMSP Jitter**

+ **1.6 Acceleration Vector**

**背景介绍**

本篇是实现NoC1.6，Acceleration Vector，即加速度效果。

**这篇其实还涵盖其他常用技巧在里面，如何在MaxMSP里实现p5js/processing的成员变量、以及坐标变换等。**

**<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_001.webp" alt="" loading="lazy" />**

点击查看背景介绍及过往：

[Nature of Code MaxMSP实现- 第1.1节 [Patch a dirty 006]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484280&idx=1&sn=c14dd9ac7b1fce57164789a61f45f721&chksm=e9f531e9de82b8ff8992bc63481048d5e79aa9422962c809454a3729e5e95a25f74c945e146d&scene=21#wechat_redirect)

[Nature of Code MaxMSP实现- 第1.2节 [Patch a Dirty 007]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484312&idx=1&sn=14d7105b45c3664260bcd123adf12b17&chksm=e9f53109de82b81f9e40766e64eec0995a1b529f30d3a3f10e576ab88d5eaee50093f9ba6fbe&scene=21#wechat_redirect)

[Nature of Code MaxMSP实现-1.3向量乘法和随机 [Patch a Dirty 008]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484345&idx=1&sn=65e53d6b046b50c04e90fa8b333cd242&chksm=e9f53128de82b83ec6199d0a64c5dfc16d46b1aafbc74c57547c4f7abb852484c5780b98a1ef&scene=21#wechat_redirect)

[Nature of Code MaxMSP实现-1.5单位向量 [Patch a Dirty 009]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484400&idx=1&sn=c0ed4cc696d474c2fb13a356d7b00dc6&chksm=e9f53161de82b877bf02d151660eef2da9c19366fa89e871663dacb52f261e82dda4a7e4b865&scene=21#wechat_redirect)

<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_002.webp" alt="" loading="lazy" />

NoC1.6 p5js 原版

<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_003.webp" alt="" loading="lazy" />

本文MaxMSP Jitter版

【Patch a Dirty】是本号MaxMSP下的一个系列，以局部算法、效果片段的快速实现为主，完整的实现过程我一般会录屏，所以源代码实际已经涵盖在视频之中，暂停播放即可。

如果你有进一步的答疑需求，可以参考后文。

---

**干货来了**：

**完整制作过程****视频**

---

**参考**

* Nature of Code 本节网址：

  https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html

---

#### **Talk is cheap. Show me the code!**

本文制作全过程在视频里已包含。

若仍需源文件，以下方式均可：

方式1. 在**知识星球**获取。

方式2. 参考后文**付费教学**部分。

**知识星球**是我感谢各位赞赏的地方，在知识星球你将持续获取大部分系列的源代码以及无限次图文答疑。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_004.webp" alt="" loading="lazy" />

另【编程德鲁伊】系列大部分代码都开源在全球最大🐒🐵交友网站：  
https://**github.com/avantcontra**/coding-druid

---

**实验编程视频号**

视频号里放一些未在公众号公开的视频demo、制作花絮等。

<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_005.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/nature-of-code-maxmsp-1-6-patch-200702/img_006.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

**付费教学**

目前试推付费咨询和VIP会员服务，一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

后续也会推出课程和工作坊。

详情请至：

* 公众号菜单：“关于教学 -> 付费教学”
* 或者公众号发送关键字：付费咨询
* 或者**点击文末「阅读原文」**

**答疑优先顺序：**

1. 付费咨询或VIP会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
