---
id: "project-ai-runway-240119-zh"
concept_id: "ai-runway-240119"
type: "project"
slug: "ai-runway-240119"
title: "AI视频可控性里程碑更新：Runway上线多重运动笔刷"
lang: "zh"
tags:
  - "ai"
  - "runway"
status: "canonical"
created: "2024-01-19"
updated: "2024-01-19"
version: 1
summary: "今年真的是AI视频的争霸赛了，昨晚Runway上线了它的新功能：多重运动笔刷，这个功能可以单独控制最多五个笔刷选定的区域。这个功能看起来平平无奇，只是针对之前的运动笔刷做了个升级，但是经常玩AI视频的"
coverUrl: "/uploads/ai-runway-240119/img_001.webp"
author: "实验编程"
publishedAt: "2024-01-19"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490919&idx=1&sn=222ed3b6d1789257bd82b989ff312413&chksm=e9f52ff6de82a6e0b433187ccec71da56ea967a374b96f99de1e31f8620b68141238b8b5d977"
useDocUrl: false
---

<img src="/uploads/ai-runway-240119/img_001.webp" alt="" loading="lazy" />

今年真的是AI视频的争霸赛了，昨晚Runway上线了它的新功能：多重运动笔刷，这个功能可以单独控制最多五个笔刷选定的区域。这个功能看起来平平无奇，只是针对之前的运动笔刷做了个升级，但是经常玩AI视频的其实都知道，这个是个超级大痛点，几乎等同于AI绘画里的controlnet！之前的运动笔刷虽然好，但是大家都知道，真实的场景是不会只有一个运动方向的，这样做出来的视频僵硬且假。但是运动笔刷是基于图片生成视频的，无法针对生成的视频再次进行局部运动调整。这次的更新解决了很大的一部分需求。

有哪些玩法呢？大概有如下几种：

* **场景空间运镜**
* **人物表情控制**
* **人物动作控制**
* **多个人物控制**

我们先来看一下他们的官方宣传视频：

**新的运动笔刷操作界面**

在这个新的操作界面五个笔刷用五种不同的颜色表示，每个笔刷都可以单独调整运动的方向和性质。在定向运动里我发现还有个小功能之前没有的，就是加了个环境噪音，应该就是添加一些随机的运动。

<img src="/uploads/ai-runway-240119/img_002.webp" alt="" loading="lazy" />

**应用案例**

多重运动笔刷应该怎么用？我找了下面这些案例。

**场景空间运镜**

**有人通过分别控制物体的运动方向来实现更加逼真的子弹时间。**

<img src="/uploads/ai-runway-240119/img_003.webp" alt="" loading="lazy" />

https://twitter.com/oFaleco/status/1747998254787068081

**控制水流的方向来实现逼真的溺水效果。**

<img src="/uploads/ai-runway-240119/img_004.webp" alt="" loading="lazy" />

https://twitter.com/cfryant/status/1747418764738806132

**控制区域运动来实现镜头空间效果。**

https://twitter.com/JesusPlazaX/status/1747617545652183179

**人物表情控制**

**甚至可以通过分别控制面部的运动方向来实现一些表情动画。**

这个真的太棒了，在此之前有人用 prompt-travel 来控制人物表情动作但是效果远没有这个好。

https://twitter.com/JeffSynthesized/status/1747496539889836345

****人物动作控制****

**不仅可以控制面部运动，还可以控制肢体运动。**

<img src="/uploads/ai-runway-240119/img_005.webp" alt="" loading="lazy" />

https://twitter.com/thibaudz/status/1747532015660884006

**轻松的实现一只快乐的草原小狗动画。**

https://twitter.com/IXITimmyIXI/status/1747437834414235872

**多人物控制**

**当人物大于两个的时候，就可以摁头啦。来欣赏这位作者的作品：**

https://twitter.com/Uncanny\_Harry/status/1747803905663148069

**当有多个动物需要动的时候，可以轻松实现热闹的场景。**

https://twitter.com/anukaakash/status/1747454548589838779

应该还有更多玩法有待解锁，欢迎大家在评论区指出。
