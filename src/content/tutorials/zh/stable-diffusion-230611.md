---
id: "tutorial-stable-diffusion-230611-zh"
concept_id: "stable-diffusion-230611"
type: "tutorial"
slug: "stable-diffusion-230611"
title: "Stable Diffusion上手路径与常用操作"
lang: "zh"
tags:
  - "stable"
  - "diffusion"
status: "canonical"
created: "2023-06-11"
updated: "2023-06-11"
version: 1
summary: "这是AI艺术训练营3期第3课的课件。"
coverUrl: "/uploads/stable-diffusion-230611/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-06-11"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489423&idx=1&sn=f1c691905455c4c4902214844030ca22&chksm=e9f5251ede82ac082564ba6bb68272101a1c9f5b97bcf9ef95ea95ae238e3668e7dbbd915afc"
useDocUrl: false
---

<img src="/uploads/stable-diffusion-230611/img_001.webp" alt="" loading="lazy" />

这是AI艺术训练营3期第3课的课件。

**SD上手路径与常用操作**

从零快速入手Stable Diffusion webui，通常有以下几个环节：

* 安装  
  见 [Stable Diffusion webui 本地安装教程](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489327&idx=1&sn=47be04a35bb9b946284c1b124652a381&chksm=e9f525bede82aca8e637889489ed37dc6717bcfdcbd41cb8ade90ca258d04d4c7ace43505c34&scene=21#wechat_redirect)
* 选择模型
* 关键词
* 扩展/插件安装
* ControlNet
* 模型训练

**No.1**

**选择模型**

### **1. 基础模型/大模型：SD 1.5 通用模型**

下载地址：

推荐SD 1.5版本，由Runway发布：

https://huggingface.co/runwayml/stable-diffusion-v1-5

老版本：

https://huggingface.co/CompVis/stable-diffusion

另有2.0版本，以及各版本的区别，详见本课视频。

用通用模型已经可以上手开始生成图像了，如果对某些特定风格有进一步要求，则可以进一步选择经过定制训练后的模型。

### **2. 经过定制训练的模型**

这类模型训练属于Fine Tune训练。

SD模型训练方式最常见三种，Textual Inversion、Dreambooth、LoRA。

初上手直接在C站上挑选训练好的模型即可。类型标在C站模型预览图的左上角，见下图：

<img src="/uploads/stable-diffusion-230611/img_002.webp" alt="" loading="lazy" />

#### **a. Textural Inversion**

* https://textual-inversion.github.io/
* 训练后的文件小，几K至几十K。
* 实际上训练后得到的是一个精炼的关键词组合，embeddings文件。
* 可以多个TI组合使用。
* TI训练，webui 内置，文档：

+ https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion

#### **b. Dreambooth**

* https://dreambooth.github.io/
* 训练后文件大，几G。
* 训练后得到的是一个大模型。
* 只能单个使用。
* Dreambooth训练1，webui 扩展：

+ https://github.com/d8ahazard/sd\_dreambooth\_extension

* 训练选择2，推荐

+ https://github.com/bmaltais/kohya\_ss

* 训练选择3，colab脚本

+ https://github.com/TheLastBen/fast-stable-diffusion

#### **c. LoRA**

* 是一种性能优化的Dreambooth训练方法。
* 训练后文件大小适中，几M至几百M。
* 训练后得到的是lora模型文件，可以搭配大模型文件一同使用。
* 可以多个LoRA组合使用。
* LoRA训练，同Dreambooth，webui 扩展：

+ https://github.com/d8ahazard/sd\_dreambooth\_extension

* 训练选择2

+ https://github.com/bmaltais/kohya\_ss

三种模型在SD webui里存放的位置、使用方法，详见本课视频。

**No.2**

**关键词**

关键词资源全网很多，课堂预购了以下几套，在情报中心圈子里获取。

* 20000+AI绘画关键词
* 建筑类 Architecture Midjourney Prompts
* 关键词生成器 Prompt Generator - SD Art v1.9 Excel版
* https://promptomania.com/stable-diffusion-prompt-builder/
* https://promptomania.com/midjourney-prompt-builder/
* https://stable-diffusion-art.com/prompt-guide/

C站模型样例图关键词及参数一键拷贝方法：

<img src="/uploads/stable-diffusion-230611/img_003.webp" alt="" loading="lazy" />

<img src="/uploads/stable-diffusion-230611/img_004.webp" alt="" loading="lazy" />

详细操作见本课视频。

**No.3**

**扩展/插件安装**

一些常见功能，如ControlNet，需要通过插件的方式来安装。

可以直接在webui的Extensions里进行操作。

<img src="/uploads/stable-diffusion-230611/img_005.webp" alt="" loading="lazy" />

也可以手动安装，通过git clone或直接下载插件包的方式，详见：

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Extensions

插件安装、使用的教程全网资源也很多。

有疑问可在圈子、群内答疑。

**No.4**

**ControlNet**

掌握了基本图像生成后，可通过ControlNet进行更精确的控制，解决构图、精修等细节问题。

将在后续课程详细讲解。

ControlNet介绍及文档：

* https://github.com/lllyasviel/ControlNet
* https://github.com/Mikubill/sd-webui-controlnet

**No.5**

**模型训练**

模型训练用来解决进一步风格定制、内容细节生成、品牌形象植入等问题，也可以改善AI视频中如角色面部控制、造型定制等问题。

将在后续课程详细讲解。

提前学习的文档链接见上文第一节。

**AI艺术训练营介绍**

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [AI艺术训练营3期介绍（视频）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [上课通知 | AI艺术训练营3期 03](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489394&idx=1&sn=56fc411bc2776aa63fbd214ecd506599&chksm=e9f525e3de82acf528974001051bc7c02da8b1c0d4be1de2f7ce899395dea059781443dcf95d&scene=21#wechat_redirect)
* [上课通知 | AI艺术训练营3期02](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489333&idx=1&sn=38669bcf7d633866b003be476d53da29&chksm=e9f525a4de82acb2f9d2c7c2e7baa856fa67df9456150ef6d46c0f41cb1e2cc585e5b197f584&scene=21#wechat_redirect)
* [上课通知 | AI艺术训练营3期-第1课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489286&idx=1&sn=aa768954408f618c4df37399fe3b2233&chksm=e9f52597de82ac8135d18cd5a04bd74759189eb3eae55a4f7e61622e98d4e39188d36d91215f&scene=21#wechat_redirect)
* [Stable Diffusion视频生成时风格化与一致性的取舍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489405&idx=1&sn=c99076cf984f30786db3463d4b3e079b&chksm=e9f525ecde82acfa2b4c50b1af029d83559a734e2c3f38752a9093b25af5a4c461ead5b5468f&scene=21#wechat_redirect)
* [Stable Diffusion webui 本地安装教程 Windows（2023.6）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489327&idx=1&sn=47be04a35bb9b946284c1b124652a381&chksm=e9f525bede82aca8e637889489ed37dc6717bcfdcbd41cb8ade90ca258d04d4c7ace43505c34&scene=21#wechat_redirect)
* [Stable Diffusion 性能优化 - xformers安装问题](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489349&idx=1&sn=8266d4e3e9a928b7d7e509e63ec9aa5b&chksm=e9f525d4de82acc2098e8c27db062095d7c4ac6e8ad53b724412365a82c5690d1f70f30ec43b&scene=21#wechat_redirect)

**听课入口：**

训练营3期在情报中心圈子内学习。

试听课、公开课见后文。

<img src="/uploads/stable-diffusion-230611/img_006.webp" alt="" loading="lazy" />

**情报中心：**

情报中心类似XX星球。汇总了课程、课件、源代码、资源、交流答疑。

有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

因大大提升了课程福利，将于6.18起又一次喜迎涨价活动。6.18前仍保持原价，详见下方报名入口。

<img src="/uploads/stable-diffusion-230611/img_007.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/stable-diffusion-230611/img_008.webp" alt="" loading="lazy" />

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

**教学资源索引：**

* **yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/stable-diffusion-230611/img_009.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/stable-diffusion-230611/img_010.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
