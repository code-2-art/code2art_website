---
id: "tutorial-nature-of-code-maxmsp-1-3-patch-200613-zh"
concept_id: "nature-of-code-maxmsp-1-3-patch-200613"
type: "tutorial"
slug: "nature-of-code-maxmsp-1-3-patch-200613"
title: "Nature of Code MaxMSP实现-1.3向量乘法和随机 [Patch a Dirty 008]"
lang: "zh"
tags:
  - "nature"
  - "of"
  - "code"
  - "maxmsp"
status: "canonical"
created: "2020-06-13"
updated: "2020-06-13"
version: 1
summary: "【Patch a Dirty 008】"
coverUrl: "/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-06-13"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484345&idx=1&sn=65e53d6b046b50c04e90fa8b333cd242&chksm=e9f53128de82b83ec6199d0a64c5dfc16d46b1aafbc74c57547c4f7abb852484c5780b98a1ef"
useDocUrl: false
---

**【Patch a Dirty #008】**

* **Nature of Code - MaxMSP Jitter**

+ **1.3 Vector Multiply**

**背景介绍**

点击查看背景介绍及过往：

[Nature of Code MaxMSP实现- 第1.1节 [Patch a dirty 006]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484280&idx=1&sn=c14dd9ac7b1fce57164789a61f45f721&chksm=e9f531e9de82b8ff8992bc63481048d5e79aa9422962c809454a3729e5e95a25f74c945e146d&scene=21#wechat_redirect)

[Nature of Code MaxMSP实现- 第1.2节 [Patch a Dirty 007]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484312&idx=1&sn=14d7105b45c3664260bcd123adf12b17&chksm=e9f53109de82b81f9e40766e64eec0995a1b529f30d3a3f10e576ab88d5eaee50093f9ba6fbe&scene=21#wechat_redirect)

本篇是实现NoC1.3，Vector Multiply，实际上先讲的是向量和标量的相乘，另外还讲了p5js的一个Random2D语法糖。

Nature of Code 本节网址：

https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_001.webp" alt="" loading="lazy" />

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_002.webp" alt="" loading="lazy" />

NoC1.3 p5js 原版

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_003.webp" alt="" loading="lazy" />

本文MaxMSP Jitter版

【Patch a Dirty】是MaxMSP的一个快速练手系列，以局部算法、效果片段的快速实现为主，完整的实现过程我一般会录屏，所以源代码实际已经涵盖在视频之中，暂停播放即可。

如果你有进一步的答疑需求，可以参考后文。

---

**干货来了**：

**完整制作过程****视频**

---

#### **Talk is cheap. Show me the code!**

本文制作全过程在视频里已包含。

若仍需源文件，以下方式均可：

1. 在**知识星球**获取。

2. 参考后文付费教学部分。

**知识星球**是我感谢各位赞赏的地方，在知识星球你将持续获取大部分系列的源代码以及无限次图文答疑。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_004.webp" alt="" loading="lazy" />

另【编程德鲁伊】系列大部分代码都开源在全球最大🐒🐵交友网站：  
https://**github.com/avantcontra**/coding-druid

---

**实验编程视频号**

视频号里放一些未在公众号公开的视频demo、制作花絮等。

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_005.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/nature-of-code-maxmsp-1-3-patch-200613/img_006.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

**付费教学**

目前试推付费咨询，一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

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
