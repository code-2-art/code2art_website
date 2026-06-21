---
id: "tutorial-ar-sparkar-shadertoy-210228-zh"
concept_id: "ar-sparkar-shadertoy-210228"
type: "tutorial"
slug: "ar-sparkar-shadertoy-210228"
title: "【接着AR接着舞】如何在SparkAR里使用Shadertoy的效果"
lang: "zh"
tags:
  - "ar"
  - "sparkar"
  - "shadertoy"
status: "canonical"
created: "2021-02-28"
updated: "2021-02-28"
version: 1
summary: "接着AR，接着舞："
coverUrl: "/uploads/ar-sparkar-shadertoy-210228/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-02-28"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484972&idx=1&sn=ed8070aad26ec61f7d4f3cfef72237f0&chksm=e9f534bdde82bdab2ac77cefd36420555d63f475738e3fe64943faaa2c2b41dbeb6ba65ac958"
useDocUrl: false
---

接着AR，接着舞：

以上效果在Spark AR Studio里制作，类似AR特效工具的介绍见:  
[如何用快手玩癫子异术](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484938&idx=1&sn=848b602e88a26f6dd911d242055b554c&chksm=e9f5349bde82bd8d20203dd22e57ba82a4c2b643b6159b63218c21aed743e21332a50bc8cf39&scene=21#wechat_redirect)

本文简介如何在**Spark AR Studio**里引入/移植/借鉴/抄袭**Shadertoy**上的效果。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_001.webp" alt="" loading="lazy" />

Spark AR Studio推出已经有几年了，功能相对成熟。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_002.webp" alt="" loading="lazy" />

界面如上图，有熟悉的三维场景编辑器，以及现在越来越多见的可视化节点式编程。

这种AR特效软件，一般是平台绑定（即只能在各自平台发布效果，例如Instagram、抖音等），它为了鼓励用户积极创建内容，或者说为了反向薅羊毛，通常核心技术如AR、人脸识别等模块，都是现成的，即拖即用。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_003.webp" alt="" loading="lazy" />

👆拖一个**Face Tracker**出来，OK，人脸识别就完成了。

Face Tracker下自带一块**Face Mesh**，所以接下来只需把关注点放在这块Mesh的**Material**上。

新建一个Material，将其**Shader Type**设置为**Shader Asset**。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_004.webp" alt="" loading="lazy" />

在Asset里添加一个Shader，本例文件名为**shaderCode**。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_005.webp" alt="" loading="lazy" />

如果Shader用到Texture，将Texture图片拖入Assets即可，如图中的letters和noise。

接下来编写Shader，这里直接介绍移植Shadertoy的关键步骤。

Shadertoy里有一系列独有的变量和函数：  
`iTime, iResolution, fragCoord, iChannel, texture()`等。

以及main函数入口：

<img src="/uploads/ar-sparkar-shadertoy-210228/img_006.webp" alt="" loading="lazy" />

在Spark AR的Shader里，可以这样写：

<img src="/uploads/ar-sparkar-shadertoy-210228/img_007.webp" alt="" loading="lazy" />

核心的转换就是上图这么多，剩余绝大部分特效实现，都是通用的Shader代码。

其中iChannel0、iChannel1我们使用参数传入。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_001.webp" alt="" loading="lazy" />

本例中使用了两套效果，并且通过**张嘴闭嘴**动作进行切换。

Shader里`main`函数的`float open`就是用来切换两种效果。

张嘴动作的识别，同样已经由Spark AR内置实现，只需添加在Patch Editor里：

<img src="/uploads/ar-sparkar-shadertoy-210228/img_008.webp" alt="" loading="lazy" />

逻辑很清晰，**Mouth Open**的时候，发送`1`给到`material1`的`open`参数。

（需要在Material设置里把open参数设置为Patch Editor可用。）

至此，人脸识别、Shader特效、张嘴动作逻辑三部分，就合成了本篇效果。

**当发布到手机上时，视频源就是手机摄像头了。**

<img src="/uploads/ar-sparkar-shadertoy-210228/img_009.webp" alt="" loading="lazy" />

**参考：**

* https://sparkar.facebook.com/
* https://www.shadertoy.com/view/ldccW4
* https://www.shadertoy.com/view/MdsSRl

---

**Talk is cheap. Show me the code!**

本文讲述了原理和关键实现流程，其他入门级问题可直接参考软件官方文档。有一定编程能力即可直接动手重现文中效果。

如果仍需本文源文件和源代码，可在【知识星球】或【情报中心】获取。

---

**关于实验编程**

<img src="/uploads/ar-sparkar-shadertoy-210228/img_010.webp" alt="" loading="lazy" />

**[点击查看：关于实验编程 - 2021壹月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484808&idx=3&sn=ff316c1c579987dc326a10e6023c0010&chksm=e9f53719de82be0fea45ca82ea690050450c3acee2cafec870b28c0ae8dddb1a0518cda69ca9&scene=21#wechat_redirect)**

**知识星球**

知识星球是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨**公众号菜单：关于-知识星球**。

<img src="/uploads/ar-sparkar-shadertoy-210228/img_011.webp" alt="" loading="lazy" />

**情报中心（**语雀**）**

* 一个基于语雀yuque.com的半开放社区
* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料
* 投稿，社区知识沉淀

**开源**

https://github.com/avantcontra

如：

【H5如何收发OSC】大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://github.com/avantcontra/osc-websocket-example

**付费教学**

详情请至：公众号菜单：关于教学 -> 付费教学

<img src="/uploads/ar-sparkar-shadertoy-210228/img_012.webp" alt="" loading="lazy" />

**实验编程视频号**

<img src="/uploads/ar-sparkar-shadertoy-210228/img_013.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

<img src="/uploads/ar-sparkar-shadertoy-210228/img_014.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
