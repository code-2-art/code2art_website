---
id: "tutorial-tutorial-201230-zh"
concept_id: "tutorial-201230"
type: "tutorial"
slug: "tutorial-201230"
title: "如何在头顶绿树后用AI扫描线检测脑子"
lang: "zh"
tags:
  - "ai"
status: "canonical"
created: "2020-12-30"
updated: "2020-12-30"
version: 1
summary: "既上一篇头戴绿色圣诞树深获好评之后，今天打算用绿色扫描线检测一下脑子。"
coverUrl: "/uploads/tutorial-201230/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-12-30"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484758&idx=1&sn=273f7871def472e723bdd98fdef37ac4&chksm=e9f537c7de82bed16d9670944bcad046b69ecf0e6a9ecb401d19567256a50b7aba131ec337bd"
useDocUrl: false
---

既上一篇头戴**绿色**圣诞树深获好评之后，今天打算用绿色扫描线检测一下脑子。

效果推荐看视频号：

（然后视频号求点赞+关注！😭😭😭）

<img src="/uploads/tutorial-201230/img_001.webp" alt="" loading="lazy" />

**先上技术总结：**

1. 准备一张帅气的照片，没有的同学可以拿我的头像代替。
2. 通过机器学习来计算照片中场景的深度值，得到一张depth texture。
3. 写shader实现绿色扫描线效果。

**提取照片场景深度**

小明同学问了，为什么要提取照片的场景深度呢？

因为照片是二维的，如果直接用二维图片的色彩或灰度去模拟生成三维效果，往往与真实世界的场景不太符合：

<img src="/uploads/tutorial-201230/img_002.webp" alt="" loading="lazy" />

https://airtightinteractive.com/demos/js/webcammesh/

小明又问，那照片怎么按照实际的照片内容来提取深度呢，这好像只有人类根据生活体验才可以做到。

小明说得对，所以：

**通过机器学习计算照片的场景深度**

看到机器学习了，不要慌，有一个AI玩具叫Runway，可以做一些简单的机器学习工作，如AI模型训练、或者直接使用别人训练好的模型（有可能付费）。

*关于Runway及其他常用AI类上手工具，以后我会专门开主题来讲。*

<img src="/uploads/tutorial-201230/img_003.webp" alt="" loading="lazy" />

上图是Runway上一个付费的“图片深度”的计算模型，一张图0.5美金，也可以计算视频。

https://app.runwayml.com/models/anastasis/MiDaS

对照一下我的：

<img src="/uploads/tutorial-201230/img_004.webp" alt="" loading="lazy" />

左侧是二维照片。

右侧是根据实际照片内容，提取到的深度图片，用灰度来代表深度信息。

可以看到，背后黑色的，就对应我身后的墙壁。而前景偏白色的，就是人脸位置。

**写shader实现绿色扫描线效果**

有了深度信息，接下来就是制作扫描线效果。

这个我用shader来写，可以直接跑在网页上。

写作工具用的是KodeLife，它是一个热更新的编程环境，边写边看实时的效果，比较方便，也不像用threejs、pixijs等还得先要写一个跑shader的环境。

<img src="/uploads/tutorial-201230/img_005.webp" alt="" loading="lazy" />

具体写代码的时候用的是shadertoy版，所以如果你参照我这个，并且不想用KodeLife的话，可以在shadertoy.com里来写。（shadertoy可能不支持上传自定义的图片）

参考：

https://airtightinteractive.com/demos/js/webcammesh/

https://app.runwayml.com/models/anastasis/MiDaS

https://twitter.com/ggsimm/status/1329819822373408769

让我们一起拥有绿色的大脑。

---

**Talk is cheap，Show me the Code！**

**本次代码直接看下图**即可：

<img src="/uploads/tutorial-201230/img_006.webp" alt="" loading="lazy" />

另外仍在**知识星球和语雀**提供源代码下载。

**并且本次代码，向语雀全员开放（即语雀情报中心里有一些不在知识星球的朋友，也可以获取）。**

---

**实验编程**

[点击：关于实验编程 - 2020 八月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484512&idx=2&sn=f3ff9bbd8de4ccbe06210e0d98d7e6b5&chksm=e9f536f1de82bfe70147424c875e3dc716df4fdf0dde3790fe151496aacecd93a82026832879&scene=21#wechat_redirect)

<img src="/uploads/tutorial-201230/img_007.webp" alt="" loading="lazy" />

**开源**

【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：  
https://github.com/avantcontra/coding-druid

【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）：  
https://github.com/avantcontra/osc-websocket-example

**情报中心（**语雀**）**

* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料

[点击：回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)

**知识星球**

知识星球是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。  
还可以直接在情报中心的知识星球专属下载区获取资源。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨**公众号菜单：关于-知识星球**。

<img src="/uploads/tutorial-201230/img_008.webp" alt="" loading="lazy" />

**付费教学**

提供付费咨询、付费课程和VIP长期教学服务。

这一块目前试运行中，一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

详情请至：

* 公众号菜单：关于教学 -> 付费教学
* 或者公众号发送关键字：付费咨询

**答疑优先顺序：**

1. 付费咨询、VIP/课程会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

**实验编程视频号**

<img src="/uploads/tutorial-201230/img_009.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

<img src="/uploads/tutorial-201230/img_010.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
