---
id: "tutorial-patch-a-dirty-011-201101-zh"
concept_id: "patch-a-dirty-011-201101"
type: "tutorial"
slug: "patch-a-dirty-011-201101"
title: "水中倒影效果 [Patch a Dirty 011]"
lang: "zh"
tags:
  - "patch"
  - "dirty"
status: "canonical"
created: "2020-11-01"
updated: "2020-11-01"
version: 1
summary: "此视频片段出自我司2018年的一个商业项目，一面生成艺术交互墙。"
coverUrl: "/uploads/patch-a-dirty-011-201101/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-11-01"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484677&idx=1&sn=b050c0e88909cf52c71d2d16dce1c0fe&chksm=e9f53794de82be82d9ded808099ae6caac68d0f791c7faba1687c25752df44fa6a92013c4cf7"
useDocUrl: false
---

此视频片段出自我司2018年的一个商业项目，一面生成艺术交互墙。

视觉、音效（除了水声）、交互逻辑（触摸+人体位置追踪）、传感器数据通信等**全部使用MaxMSP Jitter制作**。

而本篇参考了上述视频里的水中倒影效果，单独水一篇文章全新重构一遍：

<img src="/uploads/patch-a-dirty-011-201101/img_001.webp" alt="" loading="lazy" />

👆这是个gif，会动的

重点要素有两个：

* 利用[jit.gl.videoplane]做镜像倒影；
* 写一个简单的shader即[jit.gl.pix]给倒影加上噪声抖动，模拟水面水纹。

<img src="/uploads/patch-a-dirty-011-201101/img_002.webp" alt="" loading="lazy" />

最近一直在外遛娃或者被娃遛，视频就不录了，源文件截图如上。

**源文件可在知识星球或语雀下载**，详情及更多实验编程资源请至：

[**关于实验编程 - 2020 八月**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484512&idx=2&sn=f3ff9bbd8de4ccbe06210e0d98d7e6b5&chksm=e9f536f1de82bfe70147424c875e3dc716df4fdf0dde3790fe151496aacecd93a82026832879&scene=21#wechat_redirect)

祝大家秋安~

<img src="/uploads/patch-a-dirty-011-201101/img_003.webp" alt="" loading="lazy" />

耐克打钱！

您的**鼓励，在看，点赞，转发**，是我乱码的动力。 

---

**开源**

如【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：https://github.com/avantcontra/coding-druid

又如【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://github.com/avantcontra/osc-websocket-example

**语雀情报中心**

**[回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)**

**付费教学**

公众号菜单：“关于教学”

**知识星球**

<img src="/uploads/patch-a-dirty-011-201101/img_004.webp" alt="" loading="lazy" />

**实验编程视频号**

<img src="/uploads/patch-a-dirty-011-201101/img_005.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

<img src="/uploads/patch-a-dirty-011-201101/img_006.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

网站: floatbug.com 

英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/

知乎专栏/B站： 

**实验编程**
