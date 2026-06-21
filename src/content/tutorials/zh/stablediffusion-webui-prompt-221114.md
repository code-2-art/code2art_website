---
id: "tutorial-stablediffusion-webui-prompt-221114-zh"
concept_id: "stablediffusion-webui-prompt-221114"
type: "tutorial"
slug: "stablediffusion-webui-prompt-221114"
title: "关键词保护！如何从StableDiffusion(webui)生成图片中抹去prompt信息"
lang: "zh"
tags:
  - "stablediffusion"
  - "webui"
  - "prompt"
status: "canonical"
created: "2022-11-14"
updated: "2022-11-14"
version: 1
summary: "以往AI作画工具的常规做法，如Disco Diffusion、Stable Diffusion colab版等，会把生成的参数存在settings.txt文件里，里面除了参数，还包含关键词（promp"
coverUrl: "/uploads/stablediffusion-webui-prompt-221114/img_001.webp"
author: "Contra的后院"
publishedAt: "2022-11-14"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487916&idx=1&sn=834d422aea9f475f3d242c59aa73c8bd&chksm=e9f5233dde82aa2b178ac0af03bb574fbf30f7d01bb05cedb17694214726dd7a09ce5859f9f3"
useDocUrl: false
---

<img src="/uploads/stablediffusion-webui-prompt-221114/img_001.webp" alt="" loading="lazy" />

以往AI作画工具的常规做法，如Disco Diffusion、Stable Diffusion colab版等，会把生成的参数存在**settings.txt**文件里，里面除了参数，还包含关键词（prompts）：

<img src="/uploads/stablediffusion-webui-prompt-221114/img_002.webp" alt="" loading="lazy" />

而Stable Diffusion webui版，会直接把上述信息存在生成的图片文件之中。并且提供了查看功能**“PNG Info”**，也就是说可以查看任意一张由SD webui生成图片的关键词信息：

<img src="/uploads/stablediffusion-webui-prompt-221114/img_003.webp" alt="" loading="lazy" />

SD webui是把这些信息存在了PNG文件的chunk里，可以简单理解：PNG文件里某个数据块，是可以存储额外的文本信息的。

而这些信息，除了webui自己的“PNG Info”可以读取，很多通用的图像软件都可以查看，例如**XnView**，在其自带的**Exif Tools**里就可以看：

<img src="/uploads/stablediffusion-webui-prompt-221114/img_004.webp" alt="" loading="lazy" />

这在查看某张图的参数时非常方便。当然，任何人看都很方便。

那么如何在对外公开或交付的时候，抹去这些信息呢？

XnView自己有**清除“元数据”**的功能，但是或许是因为不兼容SD webui PNG Info的存储格式，“清除”是灰色禁用状态。【更正】在工具/批量转换下面可以清除。

<img src="/uploads/stablediffusion-webui-prompt-221114/img_005.webp" alt="" loading="lazy" />

好在此类工具很多，我目前手头用的这个：**ExifCleaner**

<img src="/uploads/stablediffusion-webui-prompt-221114/img_006.webp" alt="" loading="lazy" />

<img src="/uploads/stablediffusion-webui-prompt-221114/img_007.webp" alt="" loading="lazy" />

没有多余功能，批量去除，开源且免费。  
唯一**提醒**：它简单粗暴，图片批量拖进去就直接清除了Exif信息，**并且覆盖原始文件，没有二次确认，所以建议提前保存一份副本。**

https://exifcleaner.com/  
https://github.com/szTheory/exifcleaner

SD webui的issues里也有相关讨论和feature请求，或许不久也会自带清除功能。

<img src="/uploads/stablediffusion-webui-prompt-221114/img_008.webp" alt="" loading="lazy" />

相关阅读：

* https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#png-info
* https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/2374

---

**AI艺术专题课：****[【AI艺术课】详解- 2022.10](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487824&idx=2&sn=d66ee08ebbce7ed8c498b1866d74b3eb&chksm=e9f523c1de82aad78f6295efb49a6a5afce6c197f502f92c00d352abdf4d17cedaa382697377&scene=21#wechat_redirect)**

---

**关于实验编程**

* [关于实验编程 - 2022.6](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486912&idx=1&sn=48e563ca348988268d123cf52049b96e&chksm=e9f53f51de82b647b90e0855b0934abb65d1452b546d2d1da3e43a23232fa01150eef75f1978&scene=21#wechat_redirect)
* [实验编程教学资源汇总 2022.9](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487467&idx=2&sn=f5b790bd3c5d580d6960226dfa24a9f4&chksm=e9f53d7ade82b46cf49a91fecb3c6be2dcddafa26a4f53f19f581604bf6fa53ca93772ad85a0&scene=21#wechat_redirect)
* [教学指引 - 2022.6](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486908&idx=1&sn=a7175b28d3d20fc1cc43504fb5036f05&chksm=e9f53f2dde82b63b189d6e0fe435e886d2f451575f36d20c7e0a1ab8a0221c74d40e9654701d&scene=21#wechat_redirect)

**部分AI艺术作品：**

* [CyberFish - 十二生肖 | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487378&idx=1&sn=002f791f623330efd71991d3d9c2a56c&chksm=e9f53d03de82b415b6ee70fd513fb275e240e0aad5d910a9b2d9ed7614ebe6743444f7367f52&scene=21#wechat_redirect)
* [放肆·十二生肖 | AI附魔平面设计、字体设计、动态海报](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487634&idx=2&sn=6ecf14dfd3767fe7051e761a55e1fe37&chksm=e9f52203de82ab15e397092f5685ddf855b9fb9f15ea03cc3d29d133e9d8fc32b9caf21de4b5&scene=21#wechat_redirect)
* [放肆·空间 | AI附魔装置艺术、平面、字体、动态海报](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487596&idx=1&sn=d6a987dc8a6de4aba9dcfa23cb016e9a&chksm=e9f522fdde82abeb43610993e47b8a0cdf369fe273a4bdde7206995b68e56cade3bbcf0ad4a6&scene=21#wechat_redirect)
* [Floating Punk 浮世朋克 | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487101&idx=1&sn=bd1a81f3f14dfc8e8f4574841ce3f05e&chksm=e9f53cecde82b5fa2f5224631de8a499e3f6c2a4ccea2e129e220b427255f19a7add00bef6b8&scene=21#wechat_redirect)
* [海滩 | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487065&idx=1&sn=dff03827d434d5f15a0e1b8babbf4e74&chksm=e9f53cc8de82b5de7935b3a88e050048ca02d49eb493d3517f79d59a6dc420a54d125af914fc&scene=21#wechat_redirect)
* [“CyberFish Portrait Bot” | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487125&idx=1&sn=e1590906325946508493c752bec5bd96&chksm=e9f53c04de82b512e012c9e77eee887a8f794c157b5f85707fc72ad69f80460bf21f71353876&scene=21#wechat_redirect)
* [CyberFish 如何刚正面？Midjourney + StyleGAN工作流](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487033&idx=1&sn=4a7ac6b7f832b16bffc091f7281dc8d5&chksm=e9f53ca8de82b5be6c8ad14b7084c9ce23d6df7003ce013afd7ba006dd2509260649a758eef6&scene=21#wechat_redirect)
* [Cyber Fish | AI艺术藏品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486009&idx=1&sn=f92b4a1cd3c4a0f7476cf03cce1964c8&chksm=e9f538a8de82b1be7db40f6d7beef75b42f1da59df81b092ce9388bde7963b08852b6c10ad06&scene=21#wechat_redirect)
* [Ukiyo-e Portrait Diffusion，自训练一套Diffusion模型](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487039&idx=1&sn=ff27260432e2286707fc13330b65232b&chksm=e9f53caede82b5b8e981cc6d562903e3ca1062698f7740d7cd754aa37ea5f2395fed72a4c260&scene=21#wechat_redirect)
* [不可名状·克苏鲁 | AI艺术藏品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486074&idx=1&sn=bebd3c14cab5c566b618552c013fac0e&chksm=e9f538ebde82b1fdcbc0fc26fd59d05acd6ca994522eb6ffa266fd30ef9c4405eef46fce1200&scene=21#wechat_redirect)

**部分AI艺术教学相关内容：**

* [天下第一AI异术分享会【就在今晚!】- 大帅课第10期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487467&idx=1&sn=aaf2dfcb3714f06345ed87ecc6491a65&chksm=e9f53d7ade82b46c85f651487581c5ea8a245bd325ea3873cf478b55b03eb5ea1934f4cd4358&scene=21#wechat_redirect)
* [“鱼宙”创作指南 - 生成式AI艺术讲座8.25](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487263&idx=1&sn=426f4bcfc5963255675d87c8bfdff316&chksm=e9f53d8ede82b4984a161778d330aa6993640c166d4cd6b16787dd99fe600b53714016e823fb&scene=21#wechat_redirect)
* [StableDiffusion、DiscoDiffusion等AI模型本地环境搭建教程](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487259&idx=1&sn=7e80b3c577b3c869d7d944923efdb76a&chksm=e9f53d8ade82b49c7e54bde7ca56679924ef459c28eaca8fff42d25e3d80752ae8458c9c1c6a&scene=21#wechat_redirect)
* [AI艺术训练营第2期已开始，继续接受报名。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487039&idx=2&sn=164944280b26cb4a908c95d0587cfe86&chksm=e9f53caede82b5b888696d2e9e8cbe2205e5438fec79a4ac5e45cefcb244f449d707d477f2e3&scene=21#wechat_redirect)
* [「人工合成废托邦」AI艺术社群作品分享10 & Artiverse公开课预告](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486796&idx=1&sn=db0702138608fbe6308e6c8baa95b00a&chksm=e9f53fddde82b6cb65354e338a77f82f72ef7504911cf6f3f39219a7cd714464a90f2416844d&scene=21#wechat_redirect)
* [「“壮锦”非遗AI艺术设计」AI艺术训练营社群作品分享9](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486776&idx=1&sn=ff39f5c9a143d7a54098f3f7f4f3a1e3&chksm=e9f53fa9de82b6bf90f849e6b34b2ec06a730aa18736fde54452057cf671a13ede205fdcb17e&scene=21#wechat_redirect)
* [AI艺术训练营作业第二波](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486579&idx=1&sn=be43a450fb17ddd6402c7b2ae424eb27&chksm=e9f53ee2de82b7f41c7e8ffd033474f3e650ab86f6c5dfa2175d554fd16a1e8706309bc4a43a&scene=21#wechat_redirect)
* [AI艺术训练营作业第一波](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486560&idx=1&sn=2749a036037208c8efbb8257faccf8ac&chksm=e9f53ef1de82b7e7986abb1ddaa3274fb8963e7e1685a2b61e06c6e925291f8ae3b9d419437a&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

**教学内容与模式**

* 开放教程 - 公众号文章、视频教程
* 大帅课讲座 - 多主题干硬货讲座
* 系统课程 - 深入精讲，AI艺术课
* 训练营 - 直播互动集中教学，AI艺术训练营
* 年度学员 - 1对1长期辅导
* 情报中心会员 - 源代码、课件资源、内部群答疑，适合自学型
* 单次付费咨询 - 1对1咨询，1小时视频会议

**课程咨询及微信群：******floatbug****

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/stablediffusion-webui-prompt-221114/img_009.webp" alt="" loading="lazy" />

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

微信公众号/视频号/知乎专栏/抖音/B站：  
**实验编程**
