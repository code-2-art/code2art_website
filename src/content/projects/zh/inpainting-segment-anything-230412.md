---
id: "project-inpainting-segment-anything-230412-zh"
concept_id: "inpainting-segment-anything-230412"
type: "project"
slug: "inpainting-segment-anything-230412"
title: "当 Inpainting 遇上 Segment Anything"
lang: "zh"
tags:
  - "inpainting"
  - "segment"
  - "anything"
status: "canonical"
created: "2023-04-12"
updated: "2023-04-12"
version: 1
summary: "~~文末彩蛋~~"
coverUrl: "/uploads/inpainting-segment-anything-230412/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-04-12"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489032&idx=1&sn=0cb98becf9907c188b55ca821ce6c818&chksm=e9f52499de82ad8feeaa0bea5814cc5ee264ee36dee2f38b06d541a0bf040c720fdcc86b395f"
useDocUrl: false
---

*~~文末彩蛋~~*

Inpainting是个妙招，最近常搭配ControlNet、LoRA一起来做人物换装，一个典型应用是卖家秀：

<img src="/uploads/inpainting-segment-anything-230412/img_001.webp" alt="" loading="lazy" />  
图及模型定制作者：海辛  
[【荐】控制名为 AI 的魔法，关于将 AI 绘画融合于工作流的案例和经验](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488930&idx=1&sn=3e885e458a51918d1145be5e88ae6e55&chksm=e9f52733de82ae2546b8fcde8d42de233c8614b4cc7b5174f71e23da556cd5874c4a3fa6ea59&scene=21#wechat_redirect)

据传杭州有数百小工作室用这套流程来服务淘宝：

<img src="/uploads/inpainting-segment-anything-230412/img_002.webp" alt="" loading="lazy" />

我在2022年10月份的大帅课里，就讲过如何利用 Inpainting，给人物戴上墨镜：

<img src="/uploads/inpainting-segment-anything-230412/img_003.webp" alt="" loading="lazy" />

给猴子戴上耳环：

<img src="/uploads/inpainting-segment-anything-230412/img_004.webp" alt="" loading="lazy" />[AI模型与图像内容定制 | 大帅课第11期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487864&idx=3&sn=3445ccc4aa73e46cbb5d1eb45201f8f9&chksm=e9f523e9de82aaffdcdf0db0087e39a990346096df867d781a98693839c77262d096739e18a6&scene=21#wechat_redirect)

Inpainting效果的基础，是有一个尽量严丝合缝的遮罩（Mask）：

<img src="/uploads/inpainting-segment-anything-230412/img_005.webp" alt="" loading="lazy" />

有了遮罩后，Inpainting大放异彩:

<img src="/uploads/inpainting-segment-anything-230412/img_006.webp" alt="" loading="lazy" />

遮罩可以手动绘制，也可以用 segment 技术自动分割。

最近 Meta（Facebook）出的 **Segment Anything**，将 segment 技术再推上高潮。（见：[Segment Anything](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488995&idx=1&sn=585293e276a146e99ecfc4e7f8ebd004&chksm=e9f52772de82ae64c33f3397d152ab4cd26b525ee60b6c7bcb9148a4e1073f3b1c48075c407a&scene=21#wechat_redirect)）

<img src="/uploads/inpainting-segment-anything-230412/img_007.webp" alt="" loading="lazy" />

铺垫完毕，今天要推荐的是：  
**Segment Anything + Inpainting**

一图便知：

<img src="/uploads/inpainting-segment-anything-230412/img_008.webp" alt="" loading="lazy" />

再来一图：

<img src="/uploads/inpainting-segment-anything-230412/img_009.webp" alt="" loading="lazy" />

图中二次绘制的效果Low了点，但demo的重点是自动分割出遮罩。至于绘制，ControlNet、LoRA只管用起来吧。

**Colab开箱即用**：  
https://colab.research.google.com/github/camenduru/grounded-segment-anything-colab/blob/main/grounded-segment-anything-colab.ipynb

**Github**：  
https://github.com/camenduru/grounded-segment-anything-colab

**视频教程：**

好了，再加颗 **彩蛋🚀🚀🚀**

**Segment Anything + Stable Diffusion Webui**

https://github.com/continue-revolution/sd-webui-segment-anything

🤫**实验编程AI艺术研究组**里已经用上了，下面盗自**康托耶夫**的试用报告：

<img src="/uploads/inpainting-segment-anything-230412/img_010.webp" alt="" loading="lazy" />

<img src="/uploads/inpainting-segment-anything-230412/img_011.webp" alt="" loading="lazy" />

<img src="/uploads/inpainting-segment-anything-230412/img_012.webp" alt="" loading="lazy" />

<img src="/uploads/inpainting-segment-anything-230412/img_013.webp" alt="" loading="lazy" />

---

**近期课程动态**

* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)
* [【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)
* [课程动态|AI流体动画2-山水与正弦](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488602&idx=1&sn=55dfd96d687e7be1e24a4df5c1c9842b&chksm=e9f526cbde82afdd41f0b7b91df6c707e2cded7e03f778dfd576d1f131fe077fed6fe7dc956f&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

**关于实验编程**

* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)
* [实验编程教学资源汇总 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488514&idx=1&sn=8d4c4dd3a60a284ab72722dd7d39e1b8&chksm=e9f52693de82af85642389db878a309390dec9ae12a6b5c4e03f532f6753a989347efe9501e7&scene=21#wechat_redirect)
* [教学指引 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488506&idx=1&sn=513917f199d4ba157f7f3b76647e31c9&chksm=e9f5216bde82a87d3087140fbd1f9ee3726a5738543403c18250ce52655ac11d8a8e7b1d0074&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/inpainting-segment-anything-230412/img_014.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/inpainting-segment-anything-230412/img_015.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
