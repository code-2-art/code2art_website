---
id: "tutorial-comfyui-animatediff-231102-zh"
concept_id: "comfyui-animatediff-231102"
type: "tutorial"
slug: "comfyui-animatediff-231102"
title: "ComfyUI AnimateDiff 文字视频效果 | 案例源文件"
lang: "zh"
tags:
  - "comfyui"
  - "animatediff"
status: "canonical"
created: "2023-11-02"
updated: "2023-11-02"
version: 1
summary: "👆ComfyUI + AnimateDiff 文字视频效果。"
coverUrl: "/uploads/comfyui-animatediff-231102/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-11-02"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490547&idx=1&sn=2643ee143d53cc8ca406f0c54d8e0205&chksm=e9f52962de82a0742a6659ed5b1375d9e868131ea81d5bba3ced1cc0bd345b77f5d55f759b3a"
useDocUrl: false
---

👆ComfyUI + AnimateDiff 文字视频效果。

小图效果：

<img src="/uploads/comfyui-animatediff-231102/img_001.webp" alt="" loading="lazy" />

<img src="/uploads/comfyui-animatediff-231102/img_002.webp" alt="" loading="lazy" />

大图效果：

<img src="/uploads/comfyui-animatediff-231102/img_003.webp" alt="" loading="lazy" />

相关效果推荐教程：https://www.youtube.com/playlist?list=PLjC8P1vEncQDahWnl\_WKYsjF\_tmIDXWEa

源文件（Workflow）开放，在实验编程社群资源圈子免费获取，入口见后文。

ComfyUI Workflow 使用方法见公开课ComfyUI系列。

* [ComfyUI学习笔记1，ComfyUI安装](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490420&idx=1&sn=d44959221916f85f3d824745592598cc&chksm=e9f529e5de82a0f3ecbccd2876384b5f3e1c57e43597192573a4bcdfafe6c2134ac7331b41ee&scene=21#wechat_redirect)
* [ComfyUI学习笔记2，一文看透Workflow](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490451&idx=1&sn=454c6143af1391f31867d25b060c04e6&chksm=e9f52902de82a014739e5bd7fd7a70ddb1c7b222a4c41f2dde2340d5270ada49c51434926d14&scene=21#wechat_redirect)
* [ComfyUI学习笔记3，插件安装](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490527&idx=1&sn=887529eae90acc0f6fc6c02c3ef90705&chksm=e9f5294ede82a0584cc56724bb156691ab3a731202917ea1da5d651007ca146d2c9c3db3ff1e&scene=21#wechat_redirect)

欢迎点赞、在看、收藏、**公众号加星标⭐️**

**实验编程社群资源：**

类似XX星球的免费圈子，公开课、公开案例源文件、社群资源、知识沉淀。一杯咖啡过滤噪声，10年有效。

<img src="/uploads/comfyui-animatediff-231102/img_004.webp" alt="" loading="lazy" />

**实验编程情报中心：**

情报中心是实验编程内部学习圈子，类似XX星球。

汇总了实验编程教程、配套课件、源代码等，长期更新。无限次图文答疑。及时获取公众号文章修订和更新。

加入情报中心即可开始学习，有效期内无限畅享历届AI艺术训练营、大帅课在内的多套课程，附送多套交互编程源代码资源。详见**[教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/comfyui-animatediff-231102/img_005.webp" alt="" loading="lazy" />

**近期教学内容：**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [AI艺术训练营3期介绍（视频）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [ComfyUI学习笔记2，一文看透Workflow](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490451&idx=1&sn=454c6143af1391f31867d25b060c04e6&chksm=e9f52902de82a014739e5bd7fd7a70ddb1c7b222a4c41f2dde2340d5270ada49c51434926d14&scene=21#wechat_redirect)
* [AI聊斋模型开放了](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490293&idx=1&sn=656d7e43f655882fb8bd0cf0a5de504b&chksm=e9f52864de82a17226f5bc01ccf0252a2c808b1ff0f7659a5303d4299dc5e7f40dcab236ee96&scene=21#wechat_redirect)

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/comfyui-animatediff-231102/img_006.webp" alt="" loading="lazy" />

**更多介绍：**

[关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=4&sn=baf830a3b1b0fc6347e9f5c7d1829304&chksm=e9f526dbde82afcd903b91a5884d1da27f9f1b62c483a5ee92a0974b6930859ea2686678cb68&scene=21#wechat_redirect)

**课程咨询及微信群：****floatbug**

加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/ins等，高效交流。

<img src="/uploads/comfyui-animatediff-231102/img_007.webp" alt="" loading="lazy" />

**AI艺术训练营介绍**

训练营3期在情报中心圈子内，加入情报中心圈子、或1v1超级会员，随到随学。

课程持续添加中：

<img src="/uploads/comfyui-animatediff-231102/img_008.webp" alt="" loading="lazy" />

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [**AI艺术训练营3期介绍（视频）**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [训练营3期 17 多套SD共享模型文件的方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490394&idx=1&sn=8e43ffd4878dec63c9a6f7f54edec401&chksm=e9f529cbde82a0dd51c4b6cdc4ecde87e6ba31e2851c46cda36b2ca671f5b7dcb63d8f861af3&scene=21#wechat_redirect)
* [训练营3期 16 数据集处理](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490279&idx=1&sn=449e1c76000e5049cfac07c3ad77a1b5&chksm=e9f52876de82a16026f9c538753a69037acd86c9251d935886247411d818aefc4589fd7e0c40&scene=21#wechat_redirect)
* [训练营3期 15 聊斋是如何炼成的 | 训练营3期第15课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490246&idx=1&sn=3537345146ca8f72162bb35c1f2df943&chksm=e9f52857de82a141e64412a3c2799c6244edc4a5dfe80b3ed75a0ce3178e11805978cad86f02&scene=21#wechat_redirect)
* [训练营3期 14 StableDiffusion XL 模型训练](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=2&sn=e6b59a8622855bb08df7f879eda1fa10&chksm=e9f528fcde82a1ea9cf78745b070c9861955c659446dfd8d16f4259010e123f51cabdd29dbd3&scene=21#wechat_redirect)
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
* [近期SD webui启动时CUDA SETUP报错的解决方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490345&idx=1&sn=242af762cf2c0bf93993e7b40ad280f1&chksm=e9f529b8de82a0aeb996a17ec1c07a8321d2025519952a9c734e03cedce16060da7a74c513c0&scene=21#wechat_redirect)

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
