---
id: "event-3-15-stable-diffusion-xl-2-231006-zh"
concept_id: "3-15-stable-diffusion-xl-2-231006"
type: "event"
slug: "3-15-stable-diffusion-xl-2-231006"
title: "聊斋是如何炼成的 | 训练营3期第15课，Stable Diffusion XL模型训练(2)"
lang: "zh"
tags:
  - "stable"
  - "diffusion"
  - "xl"
status: "canonical"
created: "2023-10-06"
updated: "2023-10-06"
version: 1
summary: "实验编程AI艺术训练营3期第15课："
coverUrl: "/uploads/3-15-stable-diffusion-xl-2-231006/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-10-06"
event_date: "2023-10-06"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490246&idx=1&sn=3537345146ca8f72162bb35c1f2df943&chksm=e9f52857de82a141e64412a3c2799c6244edc4a5dfe80b3ed75a0ce3178e11805978cad86f02"
useDocUrl: false
---

实验编程AI艺术训练营3期第15课：  
AI聊斋训练过程，附训练参数配置文件。  
Stable Diffusion XL LoRA风格模型训练。

## **要点提示**

* 数据集的处理及标注很重要（单独开一篇，可先参考文末附的教程）。
* 文末附上了几个不错的教程，推荐反复参考。
* 训练本身没有一次性完美解决方案，网上教程充满个人经验与玄学，需要多尝试。
* 训练的参数设置与训练目标息息相关，每人不一样，配合答疑来完成。

## 

## 

## **训练类型**

最重要三类：

* Dreambooth（训练得到大模型，对应C站上的checkpoints）；
* LoRA；
* Textural Inversion（现在训练需求不多，主要场景是直接使用C站上训练好的Textural Inversion负关键词）。

时间紧可忽略的训练类型：

* Hypernetwork，基本过时，LoRA替代；
* kohya\_ss训练工具里的“Fine Tune”，跟Dreambooth Caption方式差不多，可Dreambooth平替。

本节讲如何在kohya\_ss里训练SD XL、SD1.5版 LoRA 风格模型。

角色的训练网上有大量教程，角色训练比风格训练相对容易拿捏。

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_001.webp" alt="" loading="lazy" />

详细完整步骤见训练营课程。

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_002.webp" alt="" loading="lazy" />

**本课训练参数配置文件一览**

从小鹅通本节课程附件中下载。

* AI聊斋SD1.5版 Liaozhai\_sd1.5\_v1.3.json
* AI聊斋SDXL版 Liaozhai\_xl\_v1.0.json
* 其他第三方配置文件

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_003.webp" alt="" loading="lazy" />

## 

## **推荐参考教程**

* 训练工具官方文档

https://github.com/kohya-ss/sd-scripts/blob/main/docs/train\_README-zh.md

* 训练工具官方推荐教程（含数据集处理）

https://github.com/bmaltais/kohya\_ss#tutorials

* THE OTHER LoRA TRAINING RENTRY

https://rentry.org/59xed3

* LoRA guide

https://rentry.org/2chAI\_LoRA\_Dreambooth\_guide\_english

* Stable Diffusion LoRA 训练不完全指北(1)

https://www.bilibili.com/read/cv23072377/

* Stable Diffusion Lora locon loha训练参数设置

https://zhuanlan.zhihu.com/p/618758020

* ULTIMATE SDXL LORA Training!

https://www.youtube.com/watch?v=N\_zhQSx2Q3c&list=PLkIRB85csS\_vK9iGRXNHG618HTQKhDrZX&index=16

* 推荐★ SDXL LORA STYLE Training!

https://www.youtube.com/watch?v=1BCYdd9r1To&list=PLkIRB85csS\_vK9iGRXNHG618HTQKhDrZX&index=17

* 常用正则化图像下载

https://huggingface.co/datasets/ProGamerGov/StableDiffusion-v1-5-Regularization-Images

更多效果案例：

[AI聊斋 | 陆判（二）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490237&idx=1&sn=bfdd9bea3e4cda2235eccc1e1f07a050&chksm=e9f5282cde82a13acfedeaf99b718284a6b8eb4842732c3de9db1b664dbd43ee172c799f8565&scene=21#wechat_redirect)

[AI聊斋 | 陆判（一）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490218&idx=1&sn=cc39cb92eaa2b36a543e2e331206b6e6&chksm=e9f5283bde82a12d447c69a8565fd41e6154dae32eb46cdb389a29f45e03e09207fce0911f6a&scene=21#wechat_redirect)

[AI聊斋 | 白莲教](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490180&idx=1&sn=dc9c0870cd809f7dc48433aedc013cc9&chksm=e9f52815de82a103eda0f549618d9f732d09cfe88f3a9cad3c167d993a52d1c6c6dc50afade7&scene=21#wechat_redirect)

[驱怪 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=1&sn=49b3444b55cede81e1eac073dde9c7c1&chksm=e9f528fcde82a1eadbbde9a4347a363a1f14f615c63b6232ad9936142847eec09cfad2f85a75&scene=21#wechat_redirect)

[画皮 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490133&idx=1&sn=34801d38def02538b5f8b716a89c30cc&chksm=e9f528c4de82a1d25a5d50549b69fdfb4063b9cd2f9b29a2b1144f60451ca5bb9f9920a1e9ec&scene=21#wechat_redirect)  
[青蛙神 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490097&idx=1&sn=9ee72807d2c82ecf7b3ed207cebd9f0d&chksm=e9f528a0de82a1b624170b23016fe8612100dd3121baddbfffb593dc81080a15a24054072f49&scene=21#wechat_redirect)  
[画皮 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490133&idx=1&sn=34801d38def02538b5f8b716a89c30cc&chksm=e9f528c4de82a1d25a5d50549b69fdfb4063b9cd2f9b29a2b1144f60451ca5bb9f9920a1e9ec&scene=21#wechat_redirect)

---

**训练营****3期已开课程：**

* 1.1 课程体系介绍
* 1.2 生成式AI艺术创作过程
* 1.3 Colab版SD webui
* 2 SD webui本地安装
* 3 SD常用操作和学习路径梳理
* 4 SD webui常用操作(2)，CLIP/VAE/修复与放大等
* 5 ControlNet基础
* 6 Multi ControlNet
* 7 ControlNet文字效果（Canny）
* 8 ControlNet文字效果（光影）
* 9 影像工作流分析-1
* 10 Deforum与Text to Video影像制作基础
* 11 SD EbSynth影像生成
* 12 SD EbSynth 进阶，视频遮罩的应用
* 13 通过RobustVideoMatting抠除视频背景并生成遮罩
* 14 SD模型训练（1）
* 15 SD模型训练（2）

**后续：**

* AI交互，音画联动等
* 更多模型训练主题
* 其他综合应用
* 中间穿插讲解在**学习需求征集帖子**中的内容。

**AI艺术训练营介绍**

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [**AI艺术训练营3期介绍（视频）**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [StableDiffusion XL 模型训练(1) | AI训练营3期第14课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=2&sn=e6b59a8622855bb08df7f879eda1fa10&chksm=e9f528fcde82a1ea9cf78745b070c9861955c659446dfd8d16f4259010e123f51cabdd29dbd3&scene=21#wechat_redirect)
* [训练营3期 13 如何抠除视频背景并生成遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490032&idx=1&sn=9acfcfcb7902e9e8166dfa61c5159635&chksm=e9f52b61de82a27726a639a2d5094ac4ee08d6d937d351618c77f9bf2df36dd557a6d67fae71&scene=21#wechat_redirect)
* [训练营3期 12 影像进阶 SD EbSynth + 视频遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490020&idx=1&sn=b8861a0eafcbe0699decb91a925dc235&chksm=e9f52b75de82a26353c5211b5f088de453fc86f01ce89eef6d93f872ff8bcc65cd8151601a5d&scene=21#wechat_redirect)
* [训练营3期 11 SD EbSynth影像生成方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490004&idx=1&sn=10dfa79de317c3a313015cc489bb56ef&chksm=e9f52b45de82a253551c0c7a881f4da2db43e2fab949a812c9933006fce018e75dad8970b1bd&scene=21#wechat_redirect)
* [训练营3期 10 Deforum与Text to Video影像制作基础](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489800&idx=1&sn=21c5cf76e571967b8a4a50ea86b5bd7b&chksm=e9f52b99de82a28f01bd13a4e1f56ddb68c1015b7ef15b9b708b451d8602301381f86062428a&scene=21#wechat_redirect)
* [训练营3期 09 AI影像工作流分析-1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489732&idx=1&sn=3e90d039c064b07218d6c9441997053a&chksm=e9f52a55de82a343136554c9800e60046d1ee708c0359d9c65c08000cecf0d6731d610864975&scene=21#wechat_redirect)
* [训练营3期 08 AI文字光影效果](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489703&idx=1&sn=c239149386b62798f6ab66f2f454ef73&chksm=e9f52a36de82a320cd9e6295dc0e64b7a15e5cac9380ead2d03c2450166f8365f5f296628abb&scene=21#wechat_redirect)
* [训练营3期 07 AI文字怼一切‍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489570&idx=1&sn=04790c4a3d98c6cbefdbbc54c3b42c37&chksm=e9f52ab3de82a3a535110206506775d47195253847b99211d4b18b9048bcabf5d92ae965b9cc&scene=21#wechat_redirect)
* [训练营3期 06 多重ControlNet](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489548&idx=1&sn=eb57bacff497746f56454764552f987f&chksm=e9f52a9dde82a38b5353969dbaff686e2599bd84c6c01413eb380a5f5795bade513ee255b3cf&scene=21#wechat_redirect)
* [训练营3期 05 ControlNet基础](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489471&idx=1&sn=785e01ff29422d08a99546ccc94044a7&chksm=e9f5252ede82ac385eb4608a2ba65b831123070df7baffe2e93e5d20a122eeb1037ac8d4cf8f&scene=21#wechat_redirect)
* [训练营3期 04 SD常用操作(2)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489429&idx=1&sn=b6f9b776b57158b448415ae7cd1e9683&chksm=e9f52504de82ac12accb42dc0327c18bbf2aca9c884997bed553b1229c05b848749a550cc427&scene=21#wechat_redirect)
* [训练营3期 03](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489394&idx=1&sn=56fc411bc2776aa63fbd214ecd506599&chksm=e9f525e3de82acf528974001051bc7c02da8b1c0d4be1de2f7ce899395dea059781443dcf95d&scene=21#wechat_redirect)
* [训练营3期 02](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489333&idx=1&sn=38669bcf7d633866b003be476d53da29&chksm=e9f525a4de82acb2f9d2c7c2e7baa856fa67df9456150ef6d46c0f41cb1e2cc585e5b197f584&scene=21#wechat_redirect)
* [训练营3期 01](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489286&idx=1&sn=aa768954408f618c4df37399fe3b2233&chksm=e9f52597de82ac8135d18cd5a04bd74759189eb3eae55a4f7e61622e98d4e39188d36d91215f&scene=21#wechat_redirect)
* [Stable Diffusion webui 本地安装教程 Windows（2023.6）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489327&idx=1&sn=47be04a35bb9b946284c1b124652a381&chksm=e9f525bede82aca8e637889489ed37dc6717bcfdcbd41cb8ade90ca258d04d4c7ace43505c34&scene=21#wechat_redirect)
* [Stable Diffusion 性能优化 - xformers安装问题](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489349&idx=1&sn=8266d4e3e9a928b7d7e509e63ec9aa5b&chksm=e9f525d4de82acc2098e8c27db062095d7c4ac6e8ad53b724412365a82c5690d1f70f30ec43b&scene=21#wechat_redirect)
* [Stable Diffusion上手路径与常用操作](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489423&idx=1&sn=f1c691905455c4c4902214844030ca22&chksm=e9f5251ede82ac082564ba6bb68272101a1c9f5b97bcf9ef95ea95ae238e3668e7dbbd915afc&scene=21#wechat_redirect)
* [Stable Diffusion视频生成时风格化与一致性的取舍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489405&idx=1&sn=c99076cf984f30786db3463d4b3e079b&chksm=e9f525ecde82acfa2b4c50b1af029d83559a734e2c3f38752a9093b25af5a4c461ead5b5468f&scene=21#wechat_redirect)
* [ControlNet各功能参数效果一览（一）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489510&idx=1&sn=095e764ea409a05e31a88d63a41d0e13&chksm=e9f52577de82ac614125caf1bc627c463eeca56897e12ba37241bf51bff5ffe879d0792175ba&scene=21#wechat_redirect)
* [ControlNet各功能参数效果一览（二）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489538&idx=1&sn=af71ac478f91422fdede994b7e5e3d9d&chksm=e9f52a93de82a3850d2e8873afc43f392e60a395b6b4489394f46bf9b4d6e8bec7d4e3e7c08b&scene=21#wechat_redirect)

训练营3期在情报中心圈子内，课程持续添加中：

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_004.webp" alt="" loading="lazy" />

**试听课、公开课见文末二维码。**

加入情报中心圈子、或1v1超级会员，随到随学。

**情报中心：**

情报中心类似XX星球。汇总了课程、课件、源代码、资源、交流答疑。

有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_005.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_006.webp" alt="" loading="lazy" />

---

**部分课程**

* [为DragGAN热身，实时AI音画交互案例](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489267&idx=1&sn=a46c4b0b250398e86aa52a6d5d91cb3e&chksm=e9f52462de82ad743949ca5de93d5d8344c6528aa0456bd615f35a9522504913ca51a1c91d4a&scene=21#wechat_redirect)
* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [课程动态|AI流体动画2-山水与正弦](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488602&idx=1&sn=55dfd96d687e7be1e24a4df5c1c9842b&chksm=e9f526cbde82afdd41f0b7b91df6c707e2cded7e03f778dfd576d1f131fe077fed6fe7dc956f&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

**关于实验编程**

* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_007.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/3-15-stable-diffusion-xl-2-231006/img_008.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
