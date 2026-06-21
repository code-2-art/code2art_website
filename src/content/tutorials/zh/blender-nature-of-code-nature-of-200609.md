---
id: "tutorial-blender-nature-of-code-nature-of-200609-zh"
concept_id: "blender-nature-of-code-nature-of-200609"
type: "tutorial"
slug: "blender-nature-of-code-nature-of-200609"
title: "如何【不写代码】用Blender实现Nature of Code - [Nature of Node 001]"
lang: "zh"
tags:
  - "blender"
  - "nature"
  - "of"
  - "code"
status: "canonical"
created: "2020-06-09"
updated: "2020-06-09"
version: 1
summary: "【Nature of Node 001】"
coverUrl: "/uploads/blender-nature-of-code-nature-of-200609/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-06-09"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484296&idx=1&sn=5d326035c8659c67afb72af8a17ae473&chksm=e9f53119de82b80f6bb2c5f013855bdc7404b71869d05787980adc67e22f4a9fcd665faf8695"
useDocUrl: false
---

**【Nature of Node #001】**

* **Nature of Code的Blender实现**

+ ****第1.1节 Vector Walker demo****

**背景介绍**

上一个系列是用MaxMSP实现Nature of Code：

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_001.webp" alt="" loading="lazy" />

Nature of Code 原版，P5js

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_002.webp" alt="" loading="lazy" />

Nature of Code，MaxMSP版

点击这里查看完整MaxMSP视频：

[Nature of Code MaxMSP实现- 第1.1节 [Patch a dirty 006]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484280&idx=1&sn=c14dd9ac7b1fce57164789a61f45f721&chksm=e9f531e9de82b8ff8992bc63481048d5e79aa9422962c809454a3729e5e95a25f74c945e146d&scene=21#wechat_redirect)

这个系列“**Nature of** **Node**”，是专门用Blender的Node（节点）方式来实现**Nature of Code**。

（Node、Code，顺便练练绕口令）

我会用到一个Blender插件：**sverchok**

http://nikitron.cc.ua/sverchok\_en.html

这是一个很强大的节点式编程插件，不需要写Python代码，像MaxMSP、Touch Designer那样“连连看”就能实现程序逻辑。

工作界面如图：

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_003.webp" alt="" loading="lazy" />

Nature of Code，Blender sverchok版

---

**干货来了**：

**完整制作过程****视频**

插件下载：

https://github.com/nortikin/sverchok

插件详细文档：

https://sverchok.readthedocs.io/en/latest/installation.html

---

#### **Talk is cheap. Show me the code!**

本文制作全过程在视频里已包含。

若仍需源文件，以下方式均可：

1. 在**知识星球**获取。

2. 参考后文付费教学部分。

**知识星球**是我感谢各位赞赏的地方，在知识星球你将持续获取大部分系列的源代码以及无限次图文答疑。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_004.webp" alt="" loading="lazy" />

另【编程德鲁伊】系列大部分代码都开源在全球最大🐒🐵交友网站：  
https://**github.com/avantcontra**/coding-druid

---

**实验编程视频号**

视频号里放一些未在公众号公开的视频demo、制作花絮等。

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_005.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/blender-nature-of-code-nature-of-200609/img_006.webp" alt="" loading="lazy" />

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
