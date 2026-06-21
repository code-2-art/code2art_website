---
id: "project-ai-sd-03-streamdiffusion-240427-zh"
concept_id: "ai-sd-03-streamdiffusion-240427"
type: "project"
slug: "ai-sd-03-streamdiffusion-240427"
title: "AI交互之SD 03 - 摄像头实时风格化StreamDiffusion版"
lang: "zh"
tags:
  - "ai"
  - "sd"
  - "streamdiffusion"
status: "canonical"
created: "2024-04-27"
updated: "2024-04-27"
version: 1
summary: "上两篇是在ComfyUI里进行摄像头实时风格化，优点是画面效果调节方便，缺点是LCM速率差一些。"
coverUrl: "/uploads/ai-sd-03-streamdiffusion-240427/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-04-27"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491687&idx=1&sn=1fedfded5634f587e0f24e8b5946d0d0&chksm=e9f6d2f6de815be0e03a240cb6084eecce7da9a89134d95120223da69477938bf25268af0608"
useDocUrl: false
---

上两篇是在ComfyUI里进行摄像头实时风格化，优点是画面效果调节方便，缺点是LCM速率差一些。

[**AI实时交互之Stable Diffusion开坑**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491632&idx=1&sn=5155042f245352f46a3c0dec5637e7b8&chksm=e9f6d2a1de815bb7d0dbe262a5ef9aaede6967cd70607c9af0c560b9713dd4ec8f7f0ee256a3&scene=21#wechat_redirect)：

[**AI交互之SD 02 - 摄像头实时风格化**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)：

本篇测试StreamDiffusion。

<img src="/uploads/ai-sd-03-streamdiffusion-240427/img_001.webp" alt="" loading="lazy" />

用的是StreamDiffusion原版，安装过程follow它Github上的指引即可。

https://github.com/cumulo-autumn/StreamDiffusion

<img src="/uploads/ai-sd-03-streamdiffusion-240427/img_002.webp" alt="" loading="lazy" />

<img src="/uploads/ai-sd-03-streamdiffusion-240427/img_003.webp" alt="" loading="lazy" />

市面上也有几个集成入ComfyUI的版本：

* https://github.com/jesenzhang/ComfyUI\_StreamDiffusion
* https://github.com/Limitex/ComfyUI-Diffusers

**本篇要点：**

* **StreamDiffusion原版**

  安装过程需要耐心。

  模型、参数的设置，原版用的是Diffusers接口。
* **模型使用SD Turbo**

  https://huggingface.co/stabilityai/sd-turbo

**效果：**

StreamDiffusion（SD Turbo）的方案，明显比之前LCM的更要高效，看起来实时性已经堪用了。

后续可以做的：

* 把文件存取的方式，换成直接读取视频流。
* ComfyUI搭建好工作流后，启用API模式。
* 改用StreamDiffusion。
* 尝试StreamDiffusion方案下的模型参数优化。
* 改用Spout等方式，脱离ComfyUI环境。

更多关于SD的实时交互：

* [AI交互之SD 02 - 摄像头实时风格化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)
* [AI实时交互之Stable Diffusion开坑](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491632&idx=1&sn=5155042f245352f46a3c0dec5637e7b8&chksm=e9f6d2a1de815bb7d0dbe262a5ef9aaede6967cd70607c9af0c560b9713dd4ec8f7f0ee256a3&scene=21#wechat_redirect)

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**

---

**📣实验编程2024会员报名中🔥**

**[👉 实验编程2024报名指引](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490806&idx=1&sn=3c1f0cd8edf5d7b9a99767cb016895ad&chksm=e9f52e67de82a771257b231dcf06dfe89b513b9482e0177a57f75a01d2debd5d47fff5ee59ac&scene=21#wechat_redirect)**

* [**实验编程2023教学活动回顾**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490760&idx=1&sn=85a25f61c951eb389c2610689527f390&chksm=e9f52e59de82a74fbfdb1daa3ff346c6efaee039a19f07291ec35bdccb284a3cf77c8a35e183&scene=21#wechat_redirect)
* [AI陷阱2024与实验编程教学计划](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490620&idx=1&sn=fea8a2d04f8029d1fe40998f790742e1&chksm=e9f52eadde82a7bb394f93f889729e25048414099f804ef9a6ab957feec7f7a82c835ed4be18&scene=21#wechat_redirect)
* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=4&sn=baf830a3b1b0fc6347e9f5c7d1829304&chksm=e9f526dbde82afcd903b91a5884d1da27f9f1b62c483a5ee92a0974b6930859ea2686678cb68&scene=21#wechat_redirect)

**AI Craft系列（业界大咖课）**

* [02 多款VR项目真题全流程 | 康托耶夫](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491566&idx=1&sn=f996572a242f085f795cb7b8ea74bee0&chksm=e9f52d7fde82a46986916479978c7cb22fd112645ae0114506224a9da714ef10c63e07400d41&scene=21#wechat_redirect)
* [01 AI单刷爱死机AI与三维综合生产管线 | 康托耶夫](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)

**大帅课系列（咖啡赞助小范围分享）**

* [16 Stable Diffusion模型训练答疑交流会](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491518&idx=1&sn=0f2e3e8c7b7608a2683ec48998607019&chksm=e9f52d2fde82a439b1c5c576c6738b872fa25cb3a6903c3bb8ba65e07998868615d9ca4cb9b1&scene=21#wechat_redirect)
* [15 AI音画交互、小程序交互（StyleGAN版）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491048&idx=2&sn=2fd2c81759ef67b6fb5b4326ae38c55f&chksm=e9f52f79de82a66ff678ccacba181031b49ad9c2bf7408e5f6763ebdcf633fbc9669105920c2&scene=21#wechat_redirect)
* [14 湮灭吧，NeRF!](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489984&idx=1&sn=09c07beffeda89e4814b30f0e4449e3b&chksm=e9f52b51de82a247d926d085d7c4e567085ad6401c53e3988041e8a93b2ea5cc198b0c96d915&scene=21#wechat_redirect)
* [13 AI动画视频制作](https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488745&idx=1&sn=8c6c5bdac3369ea9952e97d8432b385c&scene=21#wechat_redirect)
* 12 [StableDiffusion webui 基础介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487889&idx=1&sn=68bae5291859fff1456f30fc255931c9&chksm=e9f52300de82aa1613a5a730970567a91588fd4aac0c30004123f328bb9f92e48faa182702d7&scene=21#wechat_redirect)
* 11 [AI模型与图像内容定制](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487864&idx=3&sn=3445ccc4aa73e46cbb5d1eb45201f8f9&chksm=e9f523e9de82aaffdcdf0db0087e39a990346096df867d781a98693839c77262d096739e18a6&scene=21#wechat_redirect)
* 10 [天下第一AI异术分享](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487467&idx=1&sn=aaf2dfcb3714f06345ed87ecc6491a65&chksm=e9f53d7ade82b46c85f651487581c5ea8a245bd325ea3873cf478b55b03eb5ea1934f4cd4358&scene=21#wechat_redirect)会
* [09 点云的艺术化使用](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487304&idx=1&sn=3dd5c39cfc2370af5156d7b3c70604ed&chksm=e9f53dd9de82b4cf573fa561d970673eea1e5142b3d3c9996b34d6f92b8171ef852e9cf22205&scene=21#wechat_redirect)
* [基于OSC的Blender实时交互-案例解析课“非精华”回放！](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485327&idx=1&sn=255acf0e3de808374fae67c57dfdcc83&chksm=e9f5351ede82bc087811a85b4a49af5a674852943f2bd23f1d5060786967d0a0c19fe0a27c49&scene=21#wechat_redirect)
* [雷达追踪音画互动墙-案例解析课精华回放！](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485297&idx=3&sn=4c8de0307052718e1f31937410d91a6b&chksm=e9f535e0de82bcf6bfb275f10f184dfc3ce7791c64a62d9c273d100da321d39a598232829026&scene=21#wechat_redirect)

**近期动态**

* [直播: 非人类主体AI交互装置14天极限制作揭秘 | 实验编程社群分享会第6期能他](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491457&idx=1&sn=94e15aecb51c16c6b274ff940893aa91&chksm=e9f52d10de82a40649b585041d1c963c4965ed6c507362110958cb281758c6e888f9651413ba&scene=21#wechat_redirect)
* [讲义下载 | Code2Art北京站Contra讲义(算法生成艺术与AI)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491427&idx=1&sn=5e16da65fe670a21493593423f305afd&chksm=e9f52df2de82a4e4461d5e1f6b79e4742cee8070fa76b8a18bcbd43b9b657519ba65475862f5&scene=21#wechat_redirect)
* [Web3上的生成艺术与AI | 实验编程Code2Art线下交流会北京站！](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491401&idx=1&sn=d0847be60cc2e884ebc61c6437d566d6&chksm=e9f52dd8de82a4ce6f3ec9b8acefde911c78b806a4c2430b15340afa4f12369795a0e2b7bfe8&scene=21#wechat_redirect)
* [大学中学进行AI教学的设备问题](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491324&idx=1&sn=387bde916d70b9c8b149623730667431&chksm=e9f52c6dde82a57bcaa945ab0d92c905ad93dfb4293fae2944fca4604fd9e720595657b9c651&scene=21#wechat_redirect)
* [更新ComfyUI AnimateDiff | 一台电脑装多套Stable Diffusion时共享模型文件的方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491317&idx=1&sn=fae40ae9b126ba1b6b29bb2abd5c885f&chksm=e9f52c64de82a572845657bb0dc7a2be281b72dec04ed7b034318c7a6f0993d98937976a78fb&scene=21#wechat_redirect)
* [课程更新 | AI动画折纸风](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491306&idx=1&sn=6c3aaf7a9cee0eb9c9f35469045169d2&chksm=e9f52c7bde82a56da15fab140115d510ce3f13bd558c4b4d018b938aa200103c6284cfa6c1bf&scene=21#wechat_redirect)
* [發！实验编程红包封面来了，附制作方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491206&idx=1&sn=b1c5295579c14494ec66caa3e395dfc8&chksm=e9f52c17de82a501745a097a7f3e2fa2426a41ff0bdf977ba9b585fe95cc50cd31cd55584dc5&scene=21#wechat_redirect)
* [艺术学研究 | 2023生成式AI图像模型年报](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491174&idx=1&sn=b3b82d5bdf954d96b098408d80714aa6&chksm=e9f52cf7de82a5e1d44a0aec412abe405a3a5572591ce0ca692090cbf7fc4a2ed8c52dd1fc60&scene=21#wechat_redirect)

**试听课、公开课入口**

**实验编程社群资源**，类似XX星球的免费圈子，公开课、公开案例源文件、社群资源、知识沉淀。

一杯咖啡过滤噪声，10年有效。

Discord入口见微信群公告，或者圈子置顶贴。

<img src="/uploads/ai-sd-03-streamdiffusion-240427/img_004.webp" alt="" loading="lazy" />

**实验编程微****信群**

**新开3群，纯邀请制**，可联系已经在实验编程社群中的朋友邀请加入。

**课程咨询与合作**

加V烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/ai-sd-03-streamdiffusion-240427/img_005.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
