---
id: "tutorial-ai-sd-04-streamdiffusion-touchdesigner-240601-zh"
concept_id: "ai-sd-04-streamdiffusion-touchdesigner-240601"
type: "tutorial"
slug: "ai-sd-04-streamdiffusion-touchdesigner-240601"
title: "AI交互SD版04 - 试用StreamDiffusion + TouchDesigner"
lang: "zh"
tags:
  - "ai"
  - "sd"
  - "streamdiffusion"
  - "touchdesigner"
status: "canonical"
created: "2024-06-01"
updated: "2024-06-01"
version: 1
summary: "<img src=\"/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img001.webp\" alt=\"\" loading=\"lazy\" "
coverUrl: "/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-06-01"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491893&idx=1&sn=c69e06e1a4bbee2d0658c5ca02977ecf&chksm=e9f6d3a4de815ab218ba90a745f0517acf35322cdf0e215abd418762b0048e5984cdf94b45f9"
useDocUrl: false
---

**<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_001.webp" alt="" loading="lazy" />**

**前文提要**

* [AI实时交互之Stable Diffusion开坑](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491632&idx=1&sn=5155042f245352f46a3c0dec5637e7b8&chksm=e9f6d2a1de815bb7d0dbe262a5ef9aaede6967cd70607c9af0c560b9713dd4ec8f7f0ee256a3&scene=21#wechat_redirect)
* [AI交互SD版02](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)[ComfyUI摄像头实时风格化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)
* [AI交互SD版03 摄像头实时风格化StreamDiffusion版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491687&idx=1&sn=1fedfded5634f587e0f24e8b5946d0d0&chksm=e9f6d2f6de815be0e03a240cb6084eecce7da9a89134d95120223da69477938bf25268af0608&scene=21#wechat_redirect)

**本篇介绍**

试跑**TouchDesigner + StreamDiffusion**。

当前可能大部分教程或案例都是Dotsimulate出的***StreamDiffusionTD***。

我这次也只是花了一小时安装加试跑他的教程，毕竟TouchDesigner忘差不多了，这回只能简单改俩参数和提示词。

先上效果，能跑在16帧左右，比ComfyUI或Web版还是要快的。

**资源获取**

**StreamDiffusionTD教程**

https://www.youtube.com/watch?v=X4rlC6y1ahw

**StreamDiffusionTD组件获取**

https://www.patreon.com/dotsimulate/

**StreamDiffusion**

https://github.com/cumulo-autumn/StreamDiffusion

**要点提示**

在上一篇里我已经安装过了StreamDiffusion，所以在TouchDesigner的StreamDiffusionTD组件里：

1. 在Base Folder里填之前git clone StreamDiffusion的路径。
2. 忽略Download StreamDiffusion。
3. Install（venv + all req）。

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_002.webp" alt="" loading="lazy" />

对于第3步多说两句。

第3步是在装StreamDiffusion运行所需的环境，其实之前也是装过了。

但上一次装环境我用的是conda方式：

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_003.webp" alt="" loading="lazy" />

而StreamDiffusionTD这个组件，看起来似乎只支持用python venv的方式来装StreamDiffusion。

这里有两个选择，要么在StreamDiffusion里（最好新git clone一份）用python venv方式装好环境，然后在StreamDiffusionTD里填好路径即可。

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_004.webp" alt="" loading="lazy" />

要么在StreamDiffusionTD里点击上边第3步Install（venv + all req）去安装。我这回测试的是这个方法。

安装非常顺利（因为提前开好了全局代理）：

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_005.webp" alt="" loading="lazy" />

安装完毕后，在终端中发现它还装了python-osc，说明这个插件作者是一路人嘛。当时就把下一篇题目想好了：

BugOSC小程序撩Stable Diffusion。

**更多关于SD的实时交互**

[AI实时交互之Stable Diffusion开坑](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491632&idx=1&sn=5155042f245352f46a3c0dec5637e7b8&chksm=e9f6d2a1de815bb7d0dbe262a5ef9aaede6967cd70607c9af0c560b9713dd4ec8f7f0ee256a3&scene=21#wechat_redirect)

[AI交互SD版02](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)[ComfyUI摄像头实时风格化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491638&idx=1&sn=2f1b041d4fe92a1ce9b2bde12a5411ed&chksm=e9f6d2a7de815bb1560c90309e941c13778f7d625978b90db26e602dd2b8c825f2aa249b2755&scene=21#wechat_redirect)

[AI交互SD版03 摄像头实时风格化StreamDiffusion版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491687&idx=1&sn=1fedfded5634f587e0f24e8b5946d0d0&chksm=e9f6d2f6de815be0e03a240cb6084eecce7da9a89134d95120223da69477938bf25268af0608&scene=21#wechat_redirect)

**📣实验编程2024会员报名中🔥**

* [实验编程会员报名指引2024](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491763&idx=1&sn=3eb0a20587f5a655d03666b31855267c&chksm=e9f6d222de815b342a897e11ba47867c9cda935678e4e3b0ff6bfbc517420d3200202604c0fa&scene=21#wechat_redirect)
* [实验编程教学与活动汇总2024](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491770&idx=1&sn=1f3002d9c2882d4511463b32e3488426&chksm=e9f6d22bde815b3d95ff8b7744abaa4de0571a865e0cb34953fbb0388ae2a5b820019607635d&scene=21#wechat_redirect)[上](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491770&idx=1&sn=1f3002d9c2882d4511463b32e3488426&chksm=e9f6d22bde815b3d95ff8b7744abaa4de0571a865e0cb34953fbb0388ae2a5b820019607635d&scene=21#wechat_redirect)

* [实验编程2023教学活动回顾](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490760&idx=1&sn=85a25f61c951eb389c2610689527f390&chksm=e9f52e59de82a74fbfdb1daa3ff346c6efaee039a19f07291ec35bdccb284a3cf77c8a35e183&scene=21#wechat_redirect)
* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=4&sn=baf830a3b1b0fc6347e9f5c7d1829304&chksm=e9f526dbde82afcd903b91a5884d1da27f9f1b62c483a5ee92a0974b6930859ea2686678cb68&scene=21#wechat_redirect)

**咨询及微信群**

欢迎加微，烦请注明：

来源（公B抖小知）、学校单位、专业行业、作品集、社交媒体等，高效交流。

实验编程没有水群，以上信息缺一不可，感谢理解。

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_006.webp" alt="" loading="lazy" />

**试听课、公开课入口**

**实验编程社群资源圈子**，类似XX星球。公开课、公开案例源文件、社群资源、知识沉淀。捐赠一杯咖啡10年有效（过滤营销号）。

<img src="/uploads/ai-sd-04-streamdiffusion-touchdesigner-240601/img_007.webp" alt="" loading="lazy" />

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
