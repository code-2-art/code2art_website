---
id: "tutorial-blender-nature-of-code1-5-nature-of-200906-zh"
concept_id: "blender-nature-of-code1-5-nature-of-200906"
type: "tutorial"
slug: "blender-nature-of-code1-5-nature-of-200906"
title: "用Blender实现Nature of Code1.5单位向量效果 - [Nature of Node 004]"
lang: "zh"
tags:
  - "blender"
  - "nature"
  - "of"
  - "code1.5"
status: "canonical"
created: "2020-09-06"
updated: "2020-09-06"
version: 1
summary: "Blender创意编程进阶应用：实现Nature of Code"
coverUrl: "/uploads/blender-nature-of-code1-5-nature-of-200906/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-09-06"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484641&idx=1&sn=ec9d9aa96c461c807cfb4ed057707535&chksm=e9f53670de82bf66947f499169f72e1abc6b82f11e30e7dc17e6800fe135964e89034d52e27d"
useDocUrl: false
---

**Blender创意编程进阶应用：实现Nature of Code**

* **#004** Nature of Code 1.5, Unit Vector (Normalize)

完整制作过程视频见后文。

**背景介绍**

这个系列“**Nature of****Node**”，是专门用Blender的Node（节点）方式来实现**Nature of Code**。

用到一个Blender插件：**Sverchok**

这是一个很强大的节点式插件，不需要写Python代码，像MaxMSP、Touch Designer那样“连连看”就能实现程序逻辑。

* [【不写代码】用Blender实现Nature of Code1.3向量随机效果 - [Nature of Node 003]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484372&idx=1&sn=c6c862bbcd7a0e01bf74945782d5a5b7&chksm=e9f53145de82b85396546744787e194f45b3cba5ba1ed7175fe127cfb717efdc55ce7e605ba7&scene=21#wechat_redirect)
* [【不写代码】用Blender实现Nature of Code的向量相加效果 - [Nature of Node 002]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484330&idx=1&sn=6ace686a1ab3b388940ef022f63af6b3&chksm=e9f5313bde82b82db313c57d7327a817ed10b77b9df7a46f61732a2b5eedad45fea92515db8f&scene=21#wechat_redirect)
* [如何【不写代码】用Blender实现Nature of Code - [Nature of Node 001]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484296&idx=1&sn=5d326035c8659c67afb72af8a17ae473&chksm=e9f53119de82b80f6bb2c5f013855bdc7404b71869d05787980adc67e22f4a9fcd665faf8695&scene=21#wechat_redirect)

本篇是实现NoC1.5，Unit Vector (Normalize)，单位向量/归一化。

【醒目】：用了上一篇Blender文章里的鼠标跟随效果Python脚本，来配合Sverchok插件，实现最终效果。

[本来只是个鼠标跟随效果，干脆以后把Blender搞成交互软件吧！](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484583&idx=1&sn=820ac14be5b1ec662c68f16d107494a1&chksm=e9f53636de82bf20519c73e23941fb13aea502c70624f73f3934a184b97bc7db02251b837cc9&scene=21#wechat_redirect)

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_001.webp" alt="" loading="lazy" />

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_002.webp" alt="" loading="lazy" />

NoC1.5 p5js 原版

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_003.webp" alt="" loading="lazy" />

MaxMSP Jitter版

[Nature of Code MaxMSP实现-1.5单位向量 [Patch a Dirty 009]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484400&idx=1&sn=c0ed4cc696d474c2fb13a356d7b00dc6&chksm=e9f53161de82b877bf02d151660eef2da9c19366fa89e871663dacb52f261e82dda4a7e4b865&scene=21#wechat_redirect)

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_004.webp" alt="" loading="lazy" />

NoC1.5，**本文Blender版**

---

**干货来了**：

**完整制作过程****视频**

**提示：**

1. 打开源文件，运行Python脚本；
2. 设置旋转中心（Line的起点）位置，默认在（0，0）；
3. "F3"，搜索“Simple Modal View3D Operator”并回车；
4. 正交变换后的Line，随鼠标转动。

本文制作全过程在视频里已包含，结合另一篇鼠标跟随的文章，耐心照做即可以实现。

若仍需源文件，以下方式均可：

* 在**知识星球**获取。
* 本文已编入**实验编程课程：《Blender创意编程进阶应用：实现Nature of Code》**，详见后文付费教学部分。  
  “Nature of Node”这个系列将继续在公众号免费连载，付费课程以增值内容为主。

---

**参考**

* Nature of Code 本节网址：

  https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html
* Blender Python 脚本实现鼠标跟随效果  
  [本来只是个鼠标跟随效果，干脆以后把Blender搞成交互软件吧！](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484583&idx=1&sn=820ac14be5b1ec662c68f16d107494a1&chksm=e9f53636de82bf20519c73e23941fb13aea502c70624f73f3934a184b97bc7db02251b837cc9&scene=21#wechat_redirect)
* 鼠标跟随参考文章  
  https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator

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

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_005.webp" alt="" loading="lazy" />

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

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_006.webp" alt="" loading="lazy" />

---

**开源**

如【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：

https://**github.com/avantcontra**/coding-druid

又如【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://**github.com/avantcontra**/osc-websocket-example

---

**实验编程视频号**

视频号与公众号内容不尽相同，有一些未在公众号公开的视频、制作花絮等。

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_007.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/blender-nature-of-code1-5-nature-of-200906/img_008.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励**，**在看**，**点赞，****收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
