---
id: "tutorial-tutorial-240206-zh"
concept_id: "tutorial-240206"
type: "tutorial"
slug: "tutorial-240206"
title: "發！实验编程红包封面来了，附制作方法"
lang: "zh"
tags:
  - "tutorial"
status: "canonical"
created: "2024-02-06"
updated: "2024-02-06"
version: 1
summary: "👆点击领取红包封面，新春快樂！恭喜發財！"
coverUrl: "/uploads/tutorial-240206/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-02-06"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491206&idx=1&sn=b1c5295579c14494ec66caa3e395dfc8&chksm=e9f52c17de82a501745a097a7f3e2fa2426a41ff0bdf977ba9b585fe95cc50cd31cd55584dc5"
useDocUrl: false
---

👆点击领取红包封面，新春快樂！恭喜發財！

**制作思路：**

* 使用Stable Diffusion ControlNet设计 **發 + 龍** 的效果。
* 使用Runway制作动态影像。
* 设计过程中遵循微信红包封面的设计规范。

**先上效果：**

**發 + 龍 平面生成：**

AI生成。用一张 **發** 字图，配合跟中国龙相关的提示词。利用發字作为基本形状，生成龙的造型，再加一些跟春节有关的元素。

<img src="/uploads/tutorial-240206/img_001.webp" alt="" loading="lazy" />

模型使用Stable Diffusion，配合ControlNet。Stable Diffusion工具可以用WebUI、ComfyUI，或者其他支持ControlNet的第三方平台均可。

<img src="/uploads/tutorial-240206/img_002.webp" alt="" loading="lazy" />

如果抛开Stable Diffusion上手环节，做这个效果本身还是简单的。ControlNet选择最基本的Canny模式，参数默认就行。

<img src="/uploads/tutorial-240206/img_003.webp" alt="" loading="lazy" />

大模型和LoRA可以任选你喜欢的风格模型。我的例子是基于Stable Diffusion XL。

AI训练营3期也专门有两节课讲了字体效果设计，一种是用Canny，一种是用前段时间流行的“光影”模式。

**其中涉及到本红包封面的知识点，是免费公开课。**

* [公开课 | 训练营3期第7课AI文字怼一切](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489570&idx=1&sn=04790c4a3d98c6cbefdbbc54c3b42c37&chksm=e9f52ab3de82a3a535110206506775d47195253847b99211d4b18b9048bcabf5d92ae965b9cc&scene=21#wechat_redirect)
* [课程更新 | 训练营3期第8课AI文字光影效果](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489703&idx=1&sn=c239149386b62798f6ab66f2f454ef73&chksm=e9f52a36de82a320cd9e6295dc0e64b7a15e5cac9380ead2d03c2450166f8365f5f296628abb&scene=21#wechat_redirect)

<img src="/uploads/tutorial-240206/img_004.webp" alt="" loading="lazy" />

**用Runway制作动态影像：**

这块也很简单，在 Runway Gen-2 里上传设计好的图片，稍微调一下动态幅度相关的参数，直接生成即可。

<img src="/uploads/tutorial-240206/img_005.webp" alt="" loading="lazy" />

https://runwayml.com/

**微信红包设计规范：**

见微信红包封面开放平台的帮助文档

https://cover.weixin.qq.com/

<img src="/uploads/tutorial-240206/img_006.webp" alt="" loading="lazy" />

****实验编程社群**更多优秀教程：**

* [【15000个红包封面免费领】挑战用AI做一个全网最复杂的红包封面（挂件+动态）](http://mp.weixin.qq.com/s?__biz=MzIxOTczNjQ2OQ==&mid=2247485835&idx=1&sn=dc8e8d7d4e50726329c0f163ea6a5f7a&chksm=97d7f971a0a0706720a3f8fa68e0f2cafed3b74f8f627290bb5e9627b864f8c5ab7eace048ff&scene=21#wechat_redirect)
* [零基础 15 分钟搞定龙年微信红包封面｜AIGC教程｜图零学院福利第二弹送 1000 个](http://mp.weixin.qq.com/s?__biz=MzAxNDE2NzAxOQ==&mid=2667164804&idx=1&sn=25262a8f9330cccd4bb02d31b15d6b08&chksm=809a6a00b7ede31675158abebd3f74e94b8811ab3095d20a5a5a1d932cffbd6d1c564eaadb13&scene=21#wechat_redirect)

再次祝您龙年大吉，身体健康！

---

**📣实验编程2024会员报名中🔥**

[👉 实验编程2024报名指引](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490806&idx=1&sn=3c1f0cd8edf5d7b9a99767cb016895ad&chksm=e9f52e67de82a771257b231dcf06dfe89b513b9482e0177a57f75a01d2debd5d47fff5ee59ac&scene=21#wechat_redirect)

* [实验编程2023教学活动回顾](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490760&idx=1&sn=85a25f61c951eb389c2610689527f390&chksm=e9f52e59de82a74fbfdb1daa3ff346c6efaee039a19f07291ec35bdccb284a3cf77c8a35e183&scene=21#wechat_redirect)
* [AI陷阱2024与实验编程教学计划](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490620&idx=1&sn=fea8a2d04f8029d1fe40998f790742e1&chksm=e9f52eadde82a7bb394f93f889729e25048414099f804ef9a6ab957feec7f7a82c835ed4be18&scene=21#wechat_redirect)
* [实验编程往期教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=4&sn=baf830a3b1b0fc6347e9f5c7d1829304&chksm=e9f526dbde82afcd903b91a5884d1da27f9f1b62c483a5ee92a0974b6930859ea2686678cb68&scene=21#wechat_redirect)

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**

**试听课、公开课入口：**

实验编程社群资源，类似XX星球的免费圈子，公开课、公开案例源文件、社群资源、知识沉淀。

一杯咖啡过滤噪声，10年有效。

<img src="/uploads/tutorial-240206/img_007.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/tutorial-240206/img_008.webp" alt="" loading="lazy" />

您的鼓励，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
