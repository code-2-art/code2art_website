---
id: "tutorial-bug-infinite-stable-diffusion-230416-zh"
concept_id: "bug-infinite-stable-diffusion-230416"
type: "tutorial"
slug: "bug-infinite-stable-diffusion-230416"
title: "Bug Infinite | Stable Diffusion 无限缩放视效插件使用教程"
lang: "zh"
tags:
  - "bug"
  - "infinite"
  - "stable"
  - "diffusion"
status: "canonical"
created: "2023-04-16"
updated: "2023-04-16"
version: 1
summary: "【Bug Infinite】是我新做的一款 Stable Diffusion Webui 插件，可以用它制作无限缩放的镜头效果："
coverUrl: "/uploads/bug-infinite-stable-diffusion-230416/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-04-16"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489119&idx=1&sn=ae2619ce1d7e13766bd06bf16c5a4a50&chksm=e9f524cede82add89f871dff6efc393aacf575cb611a6648cb2b8901bba8e96b7f026c997fa7"
useDocUrl: false
---

【Bug Infinite】是我新做的一款 Stable Diffusion Webui 插件，可以用它制作无限缩放的镜头效果：

可以配合 LoRA 生成多种风格：

可以借助这个效果，配合关键词，实现“一镜到底”：

同时支持多分辨率：

支持正向和反向：

**Bug Infinite** 的制作思路是利用 Stable Diffusion 的 Inpainting 功能，来模拟 Outpainting，即在画面镜头之外让AI去补全新的内容。

关于更多 Inpainting 玩法，可以见上一篇推送：  
[当 Inpainting 遇上 Segment Anything](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489032&idx=1&sn=0cb98becf9907c188b55ca821ce6c818&chksm=e9f52499de82ad8feeaa0bea5814cc5ee264ee36dee2f38b06d541a0bf040c720fdcc86b395f&scene=21#wechat_redirect)

**Bug Infinite** **开源：**

https://github.com/avantcontra/sd-webui-bug-infinite

**安装要点：**

* 打开 Stable Diffusion Webui 的 Extension；
* 选择从 URL 安装，复制粘贴入 Bug Infinite Github 链接。

<img src="/uploads/bug-infinite-stable-diffusion-230416/img_001.webp" alt="" loading="lazy" />

**使用要点：**

* 大模型使用 Inpainting 模型；
* 在 txt2img 中生成一张图片（也可以用已有图片）；
* 将图片 Send to inpaint；
* 切换到 img2img 的 Inpaint；
* 在 Script 中选择 Bug Infinite。

一组示例参数如图：

<img src="/uploads/bug-infinite-stable-diffusion-230416/img_002.webp" alt="" loading="lazy" />

**<img src="/uploads/bug-infinite-stable-diffusion-230416/img_003.webp" alt="" loading="lazy" />**

**Inpainting大模型有两个选择：**

Runway 的：  
https://huggingface.co/runwayml/stable-diffusion-inpainting

Stabilityai 的：  
https://huggingface.co/stabilityai/stable-diffusion-2-inpainting

欢迎试用反馈。

****🚀**课程预告🚀**

近期准备开2023年的**实验编程AI艺术训练营**（第3期），**以AI视频制作为主题**，详情请关注公众号后续推送，或直接咨询（微信见文末）。

**部分课程**

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

<img src="/uploads/bug-infinite-stable-diffusion-230416/img_004.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/bug-infinite-stable-diffusion-230416/img_005.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
