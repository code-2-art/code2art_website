---
id: "event-ai-4-09-comfyui-ipadapter-240919-zh"
concept_id: "ai-4-09-comfyui-ipadapter-240919"
type: "event"
slug: "ai-4-09-comfyui-ipadapter-240919"
title: "实验编程AI训练营4期09 人物合影ComfyUI IPAdapter注意力遮罩"
lang: "zh"
tags:
  - "ai"
  - "comfyui"
  - "ipadapter"
status: "canonical"
created: "2024-09-19"
updated: "2024-09-19"
version: 1
summary: "📣AI营第4期第9节"
coverUrl: "/uploads/ai-4-09-comfyui-ipadapter-240919/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-09-19"
event_date: "2024-09-19"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492480&idx=1&sn=dc3e6cd91c3e7dc29c9727c8d996ee99&chksm=e9f6d111de81580711e21021d9a42aac7b0b24056e80eb597d9acfe422ad37029d29c78da462"
useDocUrl: false
---

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_001.webp" alt="" loading="lazy" />

**📣AI营第4期第9节**

**主题：**ComfyUI IPAdapter Attention Mask学习

**方式：**视频 + 图文

**时间：**随到随学

限实验编程会员。超详细图文课件已更新，附带案例工作流，情报中心圈子自取。

**本节目标：**

* 进一步理解IPAdapter作为图像提示词（Image Prompt）的意义
* 学会IPAdapter Attention Mask
* 学会多重IPAdapter节点串接
* 学会“人物合影”效果

本节内容在油管上有一个很好的公开课  
https://www.youtube.com/watch?v=4jq6VQHyXjg

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_002.webp" alt="" loading="lazy" />

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_003.webp" alt="" loading="lazy" />

原公开课的工作流，对人脸、场景图使用了同一个IPAdapter节点，节点的权重类型是 PLUS (high strength)。  
该方式风格较统一，但对人脸的相似性较弱。

本课在此基础上，将人脸与背景图分别使用两套IPAdapter。

给人脸图使用的类型是PLUS FACE (portraits) ，给背景图仍然使用 PLUS (high strength)，该方式可明显增加人脸的相似度。

**对比效果如下，原工作流：**

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_004.webp" alt="" loading="lazy" />

**本课修改后的工作流：**

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_005.webp" alt="" loading="lazy" />

可见增强了人物一致性，同时保留了背景图的效果。

详细视频、课件、工作流源文件见会员课程。

感谢黄佬出镜。

**AI训练营第4期介绍：**

* [AI营4期报名-生成式AI从原理到应用](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491975&idx=1&sn=16e02849378db4843689974be7050762&chksm=e9f6d316de815a00c795c109a5b37a25c5baa6c1fe10cf04f3cd2def51519536ca6f7756aca0&scene=21#wechat_redirect)
* [AI营4期01-训练营与AI学习方法介绍(公开课)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492176&idx=1&sn=7c6010926405f941ffadd378461fbc76&chksm=e9f6d0c1de8159d773f31273055f03ccaabb728a8ee760c7f9e43206ef2fefbf9baaf681651e&scene=21#wechat_redirect)
* [AI营4期02-三大模型与SD快速上手路径](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492238&idx=1&sn=875775564b594677b7496683c04d3458&chksm=e9f6d01fde815909bba16cb65f616eed569cf4e89e802186e955f1454ecc55c129ebb5ff663e&scene=21#wechat_redirect)
* [AI营4期03-SD提示词进阶](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492244&idx=1&sn=892cadc037d3eee648bc3801cd450b9f&chksm=e9f6d005de81591323132dc735f8b1ec082cafc17dc9b25ac1f6e0a3470b5f31ee3064536857&scene=21#wechat_redirect)
* [AI营4期04-SD WebUI进阶功能](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492279&idx=1&sn=85742cfc9c2bfe3f92d1638970646fe4&chksm=e9f6d026de815930d9e29daeb8a78aade30e23b685bb1686534fb1a184182748b290841c62df&scene=21#wechat_redirect)
* [AI营4期05-ControlNet各功能与参数详解](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492286&idx=1&sn=c8aabc077ba7b97759c3b5cf813f11ac&chksm=e9f6d02fde815939c1777b3e64e8d19876b16ce91159375909d1ca061cf660d9ea445213e5c2&scene=21#wechat_redirect)
* [AI营4期06-IPAdapter概念详解与实践](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492302&idx=1&sn=bbe38599c1df8d9e068c35b95821b82e&chksm=e9f6d05fde8159490fe69c67189c1a371968d8e0f34706ae0770bb527cdbc553efd07a217fc5&scene=21#wechat_redirect)
* [AI营4期07-ComfyUI快速上手路径](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492318&idx=1&sn=d27a07e6ad3f41e399321997958183ee&chksm=e9f6d04fde815959ae7c55a80c6c9dca032f35f8ab4bce44e7d1f97564bb9d0d01b2b2c07ff5&scene=21#wechat_redirect)
* [AI营4期08 ComfyUI ControlNet学习](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492401&idx=1&sn=26d2fcf9ae4df3536a0db674db6d4f39&chksm=e9f6d1a0de8158b600818c50bfcb599a6dc415e8d57959f7aa58cec6372672d44922d37c725e&scene=21#wechat_redirect)
* [附：模型训练预设参数和数据集打标模板](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492311&idx=1&sn=a14f063f32ea1d7071ade6392a600ea6&chksm=e9f6d046de815950d7485fa50c7f0c4965ef680a36d27ac9d9757313308b12a1ee23d4931af3&scene=21#wechat_redirect)

**近期教学活动介绍：**

* 🚀[实验编程暑期爆肝教学活动一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492168&idx=1&sn=c0b32c024fe1f3bcfa50fbebe1b0c4f1&chksm=e9f6d0d9de8159cfb6342e68e46f970f57443ebf633654b583229ccd4468b535cfb181a4a86a&scene=21#wechat_redirect)
* [炼出1000+模型的训练师为你介绍Flux模型生态与入门 | 大帅课第18期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492425&idx=1&sn=bffe257d01672765bc96eb96803604de&chksm=e9f6d1d8de8158ce733613aaf5455621352c536a1427c7eab1dffcad686cda496824f9b76802&scene=21#wechat_redirect)

**实验编程会员机制介绍：**

会员可以在有效期内畅享历届以及持续新增的训练营、课程、源代码、内部社群等资源，报名通道长期开启，课程全程回放随到随学，详见：

[实验编程会员介绍与报名指引 2024上](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491763&idx=1&sn=3eb0a20587f5a655d03666b31855267c&chksm=e9f6d222de815b342a897e11ba47867c9cda935678e4e3b0ff6bfbc517420d3200202604c0fa&scene=21#wechat_redirect)

**🔥详细咨询、报名入口、加群**

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_006.webp" alt="" loading="lazy" />

加微烦请注明：

来源（公B抖小知）、学校单位、专业行业、作品集、社交媒体等，高效交流。

实验编程没有水群，以上信息缺一不可，感谢理解。

**公开课试听**

Stable Diffusion 核心基础：

生成式AI艺术原理与创作过程：

**更多公开课**

社群资源圈子内含公开课、开放课件、微信群文件、知识沉淀、行业交流。

捐赠一杯咖啡即可加入（目的是过滤噪声），10年有效。

提示：社群资源圈子**不是会员**，感谢咖啡投喂🌹

<img src="/uploads/ai-4-09-comfyui-ipadapter-240919/img_007.webp" alt="" loading="lazy" />

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
