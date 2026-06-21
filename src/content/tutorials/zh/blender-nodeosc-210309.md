---
id: "tutorial-blender-nodeosc-210309-zh"
concept_id: "blender-nodeosc-210309"
type: "tutorial"
slug: "blender-nodeosc-210309"
title: "[答疑] Blender的NodeOSC插件无法接收数据"
lang: "zh"
tags:
  - "blender"
  - "nodeosc"
status: "canonical"
created: "2021-03-09"
updated: "2021-03-09"
version: 1
summary: "之前较受欢迎的这一篇："
coverUrl: "/uploads/blender-nodeosc-210309/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-03-09"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484992&idx=1&sn=0eaaae280f1f424f2bc6b2367ebac596&chksm=e9f534d1de82bdc75cdc979ca39883155eafd635ce961db86af320a080a306aab81c5812c8dc"
useDocUrl: false
---

之前较受欢迎的这一篇：

[超简单！5分钟就能做出来的MaxMSP和Blender实时音画交互](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484059&idx=1&sn=3a3d57a20660d76dd47feb73fc68bdc4&chksm=e9f5300ade82b91cec5abdad86b3510eedf7d5ace1ee3c193ae9dec22f37d24043bdffe7a1fd&scene=21#wechat_redirect)

近期在油管和知识星球上都有人提问：

**在Blender的NodeOSC插件面板里，找不到****property****输入栏**，造成demo调试不通。

**油管提问：**

<img src="/uploads/blender-nodeosc-210309/img_001.webp" alt="" loading="lazy" />

**知识星球提问：**

<img src="/uploads/blender-nodeosc-210309/img_002.webp" alt="" loading="lazy" />

**Contra答：**

原因是**NodeOSC插件新版本的字段变了，已经没有“property”**。

现在可以**直接将完整数据访问路径写在“datapath”输入栏里**，如下图红框中的：bpy.data.materials["Head"].node\_tree.nodes["Emission"].inputs[1].default\_value

全写在“**datapath**”里。

<img src="/uploads/blender-nodeosc-210309/img_003.webp" alt="" loading="lazy" />

而**以前的版本，最后的“default\_value”要拿出来填在“****property****”里：**

<img src="/uploads/blender-nodeosc-210309/img_004.webp" alt="" loading="lazy" />

如上修改后，亲测成功，MaxMSP音频数据通过OSC，与Blender联动：

<img src="/uploads/blender-nodeosc-210309/img_005.webp" alt="" loading="lazy" />

---

**关于实验编程**

**[点击查看：关于实验编程 - 2021壹月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484808&idx=3&sn=ff316c1c579987dc326a10e6023c0010&chksm=e9f53719de82be0fea45ca82ea690050450c3acee2cafec870b28c0ae8dddb1a0518cda69ca9&scene=21#wechat_redirect)**

**知识星球**

知识星球是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

<img src="/uploads/blender-nodeosc-210309/img_006.webp" alt="" loading="lazy" />

**情报中心（**语雀**）**

* 一个基于语雀的半开放社区
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料

**开源**

https://github.com/avantcontra

如：

【H5如何收发OSC】大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://github.com/avantcontra/osc-websocket-example

**实验编程视频号**

<img src="/uploads/blender-nodeosc-210309/img_007.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
