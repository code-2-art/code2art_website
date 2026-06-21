---
id: "tutorial-draggan-ai-230524-zh"
concept_id: "draggan-ai-230524"
type: "tutorial"
slug: "draggan-ai-230524"
title: "为DragGAN热身，实时AI音画交互案例"
lang: "zh"
tags:
  - "draggan"
  - "ai"
status: "canonical"
created: "2023-05-24"
updated: "2023-05-24"
version: 1
summary: "DragGAN最近火了，可以对二维图像通过拖拽的方式直接改变脸型、姿态、甚至转动三维视角。在当下以Diffusion模型为基础的AI绘画热潮里，DragGAN让GAN模型回光返照。"
coverUrl: "/uploads/draggan-ai-230524/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-05-24"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489267&idx=1&sn=a46c4b0b250398e86aa52a6d5d91cb3e&chksm=e9f52462de82ad743949ca5de93d5d8344c6528aa0456bd615f35a9522504913ca51a1c91d4a"
useDocUrl: false
---

<img src="/uploads/draggan-ai-230524/img_001.webp" alt="" loading="lazy" />

DragGAN最近火了，可以对二维图像通过拖拽的方式直接改变脸型、姿态、甚至转动三维视角。在当下以Diffusion模型为基础的AI绘画热潮里，DragGAN让GAN模型回光返照。

<img src="/uploads/draggan-ai-230524/img_002.webp" alt="" loading="lazy" />

看了DragGAN的论文，它是基于StyleGAN2的：

<img src="/uploads/draggan-ai-230524/img_003.webp" alt="" loading="lazy" />

*论文地址：https://vcai.mpi-inf.mpg.de/projects/DragGAN/data/paper.pdf*

StyleGAN的好处是生成时所需的硬件性能要求低，**可以实时生成，这也是Drag交互的基础。**

这就提供了一个可能性：**也许可以用DragGAN来做实时交互装置**。

DragGAN官方说六月份发布代码，那么我们提前热热身，来一个**StyleGAN音画实时交互**，这其实是基于去年实验编程AI艺术训练营里的课程，新做一个Demo：

画面中的鱼是我自训练的StyleGAN模型，由MaxMSP发出的音频数据来实时驱动，通过OSC让MaxMSP与StyleGAN通信。

这是实时交互的经典玩法，音频部分你可以任意替换为其他传感模块，例如动作捕捉、摄像头等，通过人体动作或人脸表情来驱动画面。

详细的制作流程和更多实例去年也发过：

[**AI艺术音画互动及小程序交互实例**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486388&idx=1&sn=b5c542cbd25878212cb56038ad5e8c7d&chksm=e9f53925de82b033443330eca5eeb6a8730eec5f16a1a6df7500f62de137159f2e0a2ce5191c&scene=21#wechat_redirect)

下个月等DragGAN发布，直接加入OSC模块，就可以迅速接入这套工作流，手势互动装置嗷嗷待哺🚀

---

**实验编程AI艺术训练营第3期火热且低调报名中**，仅图像生成（AI绘画）这一块，就覆盖了从StyleGAN到Diffusion时代完整脉络。AI发展的是很快，但应用层面的技术选型更重要的是适不适合，而非过不过时。

3期训练营目前已经有各专业背景的学生、行业大咖、高校教师加入，大家一起以小班形式边学习边研究，探索最适合各自行业方向的AI新应用，这是实验编程训练营特色。

🔥**报名详情**🚀：

**[实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**

---

**部分课程**

* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [课程动态|AI流体动画2-山水与正弦](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488602&idx=1&sn=55dfd96d687e7be1e24a4df5c1c9842b&chksm=e9f526cbde82afdd41f0b7b91df6c707e2cded7e03f778dfd576d1f131fe077fed6fe7dc956f&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

**关于实验编程**

* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/draggan-ai-230524/img_004.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/draggan-ai-230524/img_005.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
