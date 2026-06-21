---
id: "tutorial-ai-4-13-controlnet-241008-zh"
concept_id: "ai-4-13-controlnet-241008"
type: "tutorial"
slug: "ai-4-13-controlnet-241008"
title: "AI营4期13 | \\\"ControlNet二维码模型\\\"剖析与光影特效案例"
lang: "zh"
tags:
  - "ai"
  - "controlnet"
status: "canonical"
created: "2024-10-08"
updated: "2024-10-08"
version: 1
summary: "有一类常用于二维码文字效果的ControlNet模型，最常用的有两套。"
coverUrl: "/uploads/ai-4-13-controlnet-241008/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-10-08"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492712&idx=1&sn=ce8f7865f3ca71576729a5173d348622&chksm=e9f6d6f9de815fefe0b4297c2d2d74959e522e63ff6c7b52e7719de5b8e020cbff5e4b8464bd"
useDocUrl: false
---

有一类常用于二维码文字效果的ControlNet模型，最常用的有两套。

一是由全球首发该玩法的Latent Cat出品；

二是近期使用较多的QRCode Monster。

<img src="/uploads/ai-4-13-controlnet-241008/img_001.webp" alt="" loading="lazy" />

### **为什么把这个效果单独拿出来讲解？**

因为：该类模型，不止用于二维码文字效果，更能用在各种光影特效，以及大量生成视频的ComfyUI工作流中，起到引导的作用。

例如ipiv大神的ComfyUI视频Morph工作流中，就用了此模型：

<img src="/uploads/ai-4-13-controlnet-241008/img_002.webp" alt="" loading="lazy" />

https://civitai.com/models/372584?modelVersionId=469548

<img src="/uploads/ai-4-13-controlnet-241008/img_003.webp" alt="" loading="lazy" />

本节课先讲利用二维码ControlNet模型制作文字光影效果。

<img src="/uploads/ai-4-13-controlnet-241008/img_004.webp" alt="" loading="lazy" />

## 

## **方案1：Latent Cat的光影模型**

Latent Cat出品的两个光影模型Brightness和Illumination，全球首创该玩法，国产。  
官方简介：  
[AI 生成可扫码图像 — 新 ControlNet 模型展示](http://mp.weixin.qq.com/s?__biz=MzU1Njg1NTU2Mw==&mid=2247488073&idx=1&sn=ea0c92558d8125d24e049670081cc191&chksm=fc3fea2dcb48633b1e5ecd29830f7cfae4c272bcd31f98011e6bef9d77192ad0500fc9d51f03&scene=21#wechat_redirect)

### **使用方法**

本课配套视频及最新课件，会员见训练营4期。

#### (1) 不带光影模型的ControlNet纯文字效果制作

#### 

<img src="/uploads/ai-4-13-controlnet-241008/img_005.webp" alt="" loading="lazy" />

#### 往期参考： [公开课 | 训练营3期第7课AI文字怼一切](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489570&idx=1&sn=04790c4a3d98c6cbefdbbc54c3b42c37&chksm=e9f52ab3de82a3a535110206506775d47195253847b99211d4b18b9048bcabf5d92ae965b9cc&scene=21#wechat_redirect)

#### 

#### (2) ControlNet文字**光影**效果制作

<img src="/uploads/ai-4-13-controlnet-241008/img_006.webp" alt="" loading="lazy" />

#### 往期参考： [课程更新 | 训练营3期第8课AI文字光影效果](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489703&idx=1&sn=c239149386b62798f6ab66f2f454ef73&chksm=e9f52a36de82a320cd9e6295dc0e64b7a15e5cac9380ead2d03c2450166f8365f5f296628abb&scene=21#wechat_redirect)

#### 

#### 

#### **两个controlnet光影模型和配置文件下载**

https://huggingface.co/latentcat/latentcat-controlnet/tree/main/models

<img src="/uploads/ai-4-13-controlnet-241008/img_007.webp" alt="" loading="lazy" />

除了两个模型本身，在WebUI中需要额外手动设置配置文件：

<img src="/uploads/ai-4-13-controlnet-241008/img_008.webp" alt="" loading="lazy" />

会员课程附件《配置文件》是controlnet两个光影模型对应的yaml文件，下载后放入extension/sd-webui-controlnet/models下。  
如在小鹅通下载，需要将配置文件.zip.pdf改为配置文件.zip，然后解压。

#### **视频课程中提到的Brightness与illumination原理资料**

https://www.google.com/books/edition/%E5%9B%BE%E5%83%8F%E5%B7%A5%E7%A8%8B/wi91u4QqkogC?hl=zh-CN&gbpv=1&dq=brightness+illumination+%E5%8C%BA%E5%88%AB&pg=PA20&printsec=frontcover

<img src="/uploads/ai-4-13-controlnet-241008/img_009.webp" alt="" loading="lazy" />

## **方案2：QRCode Monster**

这个方案目前使用也较广。用法跟上述方案一类似，在ControlNet中选用该模型、搭配参考图即可。

**SD1.5：**https://civitai.com/models/111006/qr-code-monster  
https://huggingface.co/monster-labs/control\_v1p\_sd15\_qrcode\_monster

<img src="/uploads/ai-4-13-controlnet-241008/img_010.webp" alt="" loading="lazy" />

**SDXL：**  
https://civitai.com/models/197247/qr-code-monster-sdxl  
https://huggingface.co/monster-labs/control\_v1p\_sdxl\_qrcode\_monster

<img src="/uploads/ai-4-13-controlnet-241008/img_011.webp" alt="" loading="lazy" />

---

**AI训练营第4期介绍：**

* [AI营4期报名-生成式AI从原理到应用](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491975&idx=1&sn=16e02849378db4843689974be7050762&chksm=e9f6d316de815a00c795c109a5b37a25c5baa6c1fe10cf04f3cd2def51519536ca6f7756aca0&scene=21#wechat_redirect)
* [AI营4期01-训练营与AI学习方法介绍(公开课)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492176&idx=1&sn=7c6010926405f941ffadd378461fbc76&chksm=e9f6d0c1de8159d773f31273055f03ccaabb728a8ee760c7f9e43206ef2fefbf9baaf681651e&scene=21#wechat_redirect)
* [AI营4期02-三大模型与SD快速上手路径](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492238&idx=1&sn=875775564b594677b7496683c04d3458&chksm=e9f6d01fde815909bba16cb65f616eed569cf4e89e802186e955f1454ecc55c129ebb5ff663e&scene=21#wechat_redirect)
* [AI营4期03-SD提示词进阶](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492244&idx=1&sn=892cadc037d3eee648bc3801cd450b9f&chksm=e9f6d005de81591323132dc735f8b1ec082cafc17dc9b25ac1f6e0a3470b5f31ee3064536857&scene=21#wechat_redirect)
* [AI营4期04-SD WebUI进阶功能](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492279&idx=1&sn=85742cfc9c2bfe3f92d1638970646fe4&chksm=e9f6d026de815930d9e29daeb8a78aade30e23b685bb1686534fb1a184182748b290841c62df&scene=21#wechat_redirect)
* [AI营4期05-ControlNet各功能与参数详解](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492286&idx=1&sn=c8aabc077ba7b97759c3b5cf813f11ac&chksm=e9f6d02fde815939c1777b3e64e8d19876b16ce91159375909d1ca061cf660d9ea445213e5c2&scene=21#wechat_redirect)
* [AI营4期06-IPAdapter概念详解与实践](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492302&idx=1&sn=bbe38599c1df8d9e068c35b95821b82e&chksm=e9f6d05fde8159490fe69c67189c1a371968d8e0f34706ae0770bb527cdbc553efd07a217fc5&scene=21#wechat_redirect)
* [AI营4期07-ComfyUI快速上手路径（内含安装、工作流原理、插件、工作流快速复刻、排错调试指南共5小节）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492318&idx=1&sn=d27a07e6ad3f41e399321997958183ee&chksm=e9f6d04fde815959ae7c55a80c6c9dca032f35f8ab4bce44e7d1f97564bb9d0d01b2b2c07ff5&scene=21#wechat_redirect)
* [AI营4期08-ComfyUI ControlNet学习](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492401&idx=1&sn=26d2fcf9ae4df3536a0db674db6d4f39&chksm=e9f6d1a0de8158b600818c50bfcb599a6dc415e8d57959f7aa58cec6372672d44922d37c725e&scene=21#wechat_redirect)
* [AI营4期09-人物合影ComfyUI IPAdapter注意力遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492480&idx=1&sn=dc3e6cd91c3e7dc29c9727c8d996ee99&chksm=e9f6d111de81580711e21021d9a42aac7b0b24056e80eb597d9acfe422ad37029d29c78da462&scene=21#wechat_redirect)
* [AI营4期10-Deforum Studio小众但好用的AI视频工具](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492579&idx=1&sn=2841ecad4f8cf8b52d7c74780cf98c47&chksm=e9f6d172de815864c40953ccafb874228c81827d6199f60c16935fd2ff922fc7c5910aba82f9&scene=21#wechat_redirect)
* [AI营4期11-Deforum WebUI版快速入门](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492665&idx=1&sn=2454a7d467dee9dddfcb6c50cefcad0b&chksm=e9f6d6a8de815fbed06994ee0a59705ad76bb37b9f29a0b8327b878d1ccd868bd109eef458ea&scene=21#wechat_redirect)
* [AI营4期12-Deforum WebUI版进阶](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492665&idx=2&sn=5120e941689d916278cb5ab05cff5a13&chksm=e9f6d6a8de815fbeb144af0198be99e9e706ea2c3a3164bb37a792f0a29dc30a04756a42a1da&scene=21#wechat_redirect)
* [附：模型训练预设参数和数据集打标模板](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492311&idx=1&sn=a14f063f32ea1d7071ade6392a600ea6&chksm=e9f6d046de815950d7485fa50c7f0c4965ef680a36d27ac9d9757313308b12a1ee23d4931af3&scene=21#wechat_redirect)

**近期教学活动介绍：**

* 🚀[实验编程暑期爆肝教学活动一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492168&idx=1&sn=c0b32c024fe1f3bcfa50fbebe1b0c4f1&chksm=e9f6d0d9de8159cfb6342e68e46f970f57443ebf633654b583229ccd4468b535cfb181a4a86a&scene=21#wechat_redirect)
* [炼出1000+模型的训练师为你介绍Flux模型生态与入门 | 大帅课第18期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492425&idx=1&sn=bffe257d01672765bc96eb96803604de&chksm=e9f6d1d8de8158ce733613aaf5455621352c536a1427c7eab1dffcad686cda496824f9b76802&scene=21#wechat_redirect)

**实验编程会员机制介绍：**

会员可以在有效期内畅享历届以及持续新增的训练营、课程、源代码、内部社群等资源，报名通道长期开启，课程全程回放随到随学，详见：

[实验编程会员介绍与报名指引 2024上](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491763&idx=1&sn=3eb0a20587f5a655d03666b31855267c&chksm=e9f6d222de815b342a897e11ba47867c9cda935678e4e3b0ff6bfbc517420d3200202604c0fa&scene=21#wechat_redirect)

**🔥详细咨询、报名入口、加群**

<img src="/uploads/ai-4-13-controlnet-241008/img_012.webp" alt="" loading="lazy" />

加微烦请注明：

来源（公B抖小知）、学校单位、专业行业、作品集、社交媒体等，高效交流。

实验编程没有水群，以上信息缺一不可，感谢理解。

**公开课试听**

Stable Diffusion 核心基础：

生成式AI艺术原理与创作过程：

**更多公开课**

**社群资源圈子**内含公开课、开放课件、微信群文件、知识沉淀、行业交流。

捐赠一杯咖啡即可加入（目的是过滤噪声），10年有效。

提示：社群资源圈子**不是会员**，感谢咖啡投喂🌹

<img src="/uploads/ai-4-13-controlnet-241008/img_013.webp" alt="" loading="lazy" />

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
