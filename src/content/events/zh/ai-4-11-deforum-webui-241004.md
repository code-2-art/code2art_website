---
id: "event-ai-4-11-deforum-webui-241004-zh"
concept_id: "ai-4-11-deforum-webui-241004"
type: "event"
slug: "ai-4-11-deforum-webui-241004"
title: "实验编程AI训练营4期11 Deforum WebUI版快速入门"
lang: "zh"
tags:
  - "ai"
  - "deforum"
  - "webui"
status: "canonical"
created: "2024-10-04"
updated: "2024-10-04"
version: 1
summary: "影像部分用Deforum制作，由声音驱动。"
coverUrl: "/uploads/ai-4-11-deforum-webui-241004/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-10-04"
event_date: "2024-10-04"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492665&idx=1&sn=2454a7d467dee9dddfcb6c50cefcad0b&chksm=e9f6d6a8de815fbed06994ee0a59705ad76bb37b9f29a0b8327b878d1ccd868bd109eef458ea"
useDocUrl: false
---

影像部分用Deforum制作，由声音驱动。

**📣AI营第4期第11节**

**主题：**Deforum WebUI版快速入门方法

**方式：**在线课件，开放

**时间：**随到随学

**Deforum**，基于Stable Diffusion，有商业版在线使用，也有开源版本地部署。效果丰富，使用复杂，可控性强。

* 文生视频模式可以通过数学公式控制镜头运动。
* 可以做视频转绘。
* 本地部署版（SD WebUI Deforum）不限时长。
* 可结合ControlNet。
* 可在关键帧/分镜头位置设置关键词、参考图。
* 可以制作Audio Reactive声音驱动视频。
* 硬伤/特点：画面不连续，“抖动”。
* **适用场景：“AI味”的视频、音乐卡点视频。**

## 商业版见上期：

## 

[Deforum Studio 小众但好用的AI视频工具](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492579&idx=1&sn=2841ecad4f8cf8b52d7c74780cf98c47&chksm=e9f6d172de815864c40953ccafb874228c81827d6199f60c16935fd2ff922fc7c5910aba82f9&scene=21#wechat_redirect)

## **本次讲Deforum的开源版，基于SD WebUI。** 分为快速入门（本篇）和进阶（今日第二篇推送）。

## 

## **安装**

Deforum在SD WebUI中有extension（扩展插件），按照常规插件安装方法即可。

### **秋叶包**

秋叶包，通常内置了deforum，开箱即用。  
如果没有，则在秋叶包启动器的扩展管理里查找并安装。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_001.webp" alt="" loading="lazy" />

### 

### **A1111 WebUI标准版**

(1). 启动WebUI，导航到扩展Extentions选项卡；

(2). 选择可用Available，加载Load from可用扩展列表；

(3). 在可用扩展列表中找到 Deforum 并安装；

(4). 扩展安装完成后，重新启动 WebUI。

(5). 重启后，在页面顶部找到 Deforum 选项卡。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_002.webp" alt="" loading="lazy" />

<img src="/uploads/ai-4-11-deforum-webui-241004/img_003.webp" alt="" loading="lazy" />

<img src="/uploads/ai-4-11-deforum-webui-241004/img_004.webp" alt="" loading="lazy" />

**WebUI通过Git手动安装**

https://github.com/deforum-art/sd-webui-deforum

插件安装好后在此：

<img src="/uploads/ai-4-11-deforum-webui-241004/img_005.webp" alt="" loading="lazy" />

## 

## **快速上手指引**

**1. 在动画示例合集里找一个目标效果**

https://github.com/deforum-art/sd-webui-deforum/wiki/Animation-Video-Examples-Gallery

<img src="/uploads/ai-4-11-deforum-webui-241004/img_006.webp" alt="" loading="lazy" />

下载绿框中不同参数对应的视频，查看效果。

**2. 复现该效果**

<img src="/uploads/ai-4-11-deforum-webui-241004/img_007.webp" alt="" loading="lazy" />

红框的 “xxxxSettings.txt”文件，是该效果对应的提示词及各项参数文件，类似图片中的pnginfo。

#### **第一步：下载设置文件**

以3DRotationYCompSettings.txt为例。

#### **第二步：在Deforum中加载该文件**

加载下载好的3DRotationYCompSettings.txt，会自动复原该效果的提示词、运镜参数等。（大模型需要自己手动选择）。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_008.webp" alt="" loading="lazy" />

<img src="/uploads/ai-4-11-deforum-webui-241004/img_009.webp" alt="" loading="lazy" />

#### 

#### **第三步，点击生成，查看复现的效果**

<img src="/uploads/ai-4-11-deforum-webui-241004/img_010.webp" alt="" loading="lazy" />

#### **第四步，在效果基础上做定制修改**

**Run 运行**

Run Tab下是一些基础设置，宽高、种子等，与文生图的功能类似。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_011.webp" alt="" loading="lazy" />

Deforum输出的是图片序列帧，输出文件夹命名为上图第三个红框 “Deforum\_{timestring}”，在“outputs\img2img-images”下。

其中timestring是一个时间戳字符串，即每次生成这个字符串都会根据当前时间而变化，以达到每次生成一个新文件夹的目的。也可以手动修改。

**Prompts 提示词**

<img src="/uploads/ai-4-11-deforum-webui-241004/img_012.webp" alt="" loading="lazy" />

Prompts里，可以对生成视频按照关键帧/分镜头进行关键词设置，这是Deforum另一个灵活之处。

图中示例的意思：

第0帧起，画面内容是一只兔子（tiny cute swamp bunny）。

第30帧起，画面内容是猫（anthropomorphic clean cat）。

第60帧起，变成椰子（a beautiful coconut）。

第90帧起，变成榴莲（a beautiful durian）。

更多参数设置，在今日第二篇推送Deforum进阶里阐述。

## 

## **更多预制效果💡**

## 

## 在商业版里提到了有近百种预制效果模板： [Deforum Studio 小众但好用的AI视频工具](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492579&idx=1&sn=2841ecad4f8cf8b52d7c74780cf98c47&chksm=e9f6d172de815864c40953ccafb874228c81827d6199f60c16935fd2ff922fc7c5910aba82f9&scene=21#wechat_redirect)

全部预设效果：  
https://deforum.github.io/posts/deforum-studio-motion-presets/

<img src="/uploads/ai-4-11-deforum-webui-241004/img_013.webp" alt="" loading="lazy" />

整理了上述**50**个动态示例视频，以及**95**套动态预设配置文件，

这套配置在Stable Diffusion WebUI版Deforum里是通用的。

配置文件可在文末“实验编程社群资源圈子”中获取。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_014.webp" alt="" loading="lazy" />

**均可按照上述快速复现的步骤一一试用。**

**提示词JSON格式验证器**

Deforum的提示词需要遵循JSON格式，例如大括号、双引号、逗号等，都需要严格匹配，常见的问题是遗漏，或者使用了中文输入法（均需英文输入法的标点符号）。

下方是一个JSON格式检查器，可帮助检查语法格式错误。

https://jsonlint.com/

把JSON格式的提示词复制到验证器里，点击“validate JSON”，自动检查标点符号错误。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_015.webp" alt="" loading="lazy" />

## 

## **其他问题**

生成后只有序列帧没有视频：

在sd webui的设置里，找到deforum的设置，修复其中的FFmpeg路径（改为自己电脑的实际路径）。

<img src="/uploads/ai-4-11-deforum-webui-241004/img_016.webp" alt="" loading="lazy" />

## **SD WebUI Deforum插件官方常见问题列表**

https://github.com/deforum-art/sd-webui-deforum/wiki/FAQ-&-Troubleshooting

## 

## **参考文档**

WebUI版文档   
https://github.com/deforum-art/sd-webui-deforum/wiki

参数同样可以查询原版的参数手册

https://docs.google.com/document/d/1RrQv7FntzOuLg4ohjRZPVL7iptIyBhwwbcEYEW2OfcI

动画参数设置

https://github.com/deforum-art/sd-webui-deforum/wiki/Animation-Settings

动画示例合集及设置源文件

https://github.com/deforum-art/sd-webui-deforum/wiki/Animation-Video-Examples-Gallery

**AI训练营第4期介绍：**

* [AI营4期报名-生成式AI从原理到应用](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491975&idx=1&sn=16e02849378db4843689974be7050762&chksm=e9f6d316de815a00c795c109a5b37a25c5baa6c1fe10cf04f3cd2def51519536ca6f7756aca0&scene=21#wechat_redirect)
* [AI营4期01-训练营与AI学习方法介绍(公开课)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492176&idx=1&sn=7c6010926405f941ffadd378461fbc76&chksm=e9f6d0c1de8159d773f31273055f03ccaabb728a8ee760c7f9e43206ef2fefbf9baaf681651e&scene=21#wechat_redirect)
* [AI营4期02-三大模型与SD快速上手路径](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492238&idx=1&sn=875775564b594677b7496683c04d3458&chksm=e9f6d01fde815909bba16cb65f616eed569cf4e89e802186e955f1454ecc55c129ebb5ff663e&scene=21#wechat_redirect)
* [AI营4期03-SD提示词进阶](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492244&idx=1&sn=892cadc037d3eee648bc3801cd450b9f&chksm=e9f6d005de81591323132dc735f8b1ec082cafc17dc9b25ac1f6e0a3470b5f31ee3064536857&scene=21#wechat_redirect)
* [AI营4期04-SD WebUI进阶功能](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492279&idx=1&sn=85742cfc9c2bfe3f92d1638970646fe4&chksm=e9f6d026de815930d9e29daeb8a78aade30e23b685bb1686534fb1a184182748b290841c62df&scene=21#wechat_redirect)
* [AI营4期05-ControlNet各功能与参数详解](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492286&idx=1&sn=c8aabc077ba7b97759c3b5cf813f11ac&chksm=e9f6d02fde815939c1777b3e64e8d19876b16ce91159375909d1ca061cf660d9ea445213e5c2&scene=21#wechat_redirect)
* [AI营4期06-IPAdapter概念详解与实践](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492302&idx=1&sn=bbe38599c1df8d9e068c35b95821b82e&chksm=e9f6d05fde8159490fe69c67189c1a371968d8e0f34706ae0770bb527cdbc553efd07a217fc5&scene=21#wechat_redirect)
* [AI营4期07-ComfyUI快速上手路径](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492318&idx=1&sn=d27a07e6ad3f41e399321997958183ee&chksm=e9f6d04fde815959ae7c55a80c6c9dca032f35f8ab4bce44e7d1f97564bb9d0d01b2b2c07ff5&scene=21#wechat_redirect)
* [AI营4期08-ComfyUI ControlNet学习](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492401&idx=1&sn=26d2fcf9ae4df3536a0db674db6d4f39&chksm=e9f6d1a0de8158b600818c50bfcb599a6dc415e8d57959f7aa58cec6372672d44922d37c725e&scene=21#wechat_redirect)
* [AI营4期09-人物合影ComfyUI IPAdapter注意力遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492480&idx=1&sn=dc3e6cd91c3e7dc29c9727c8d996ee99&chksm=e9f6d111de81580711e21021d9a42aac7b0b24056e80eb597d9acfe422ad37029d29c78da462&scene=21#wechat_redirect)
* [AI营4期10-Deforum Studio小众但好用的AI视频工具](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492579&idx=1&sn=2841ecad4f8cf8b52d7c74780cf98c47&chksm=e9f6d172de815864c40953ccafb874228c81827d6199f60c16935fd2ff922fc7c5910aba82f9&scene=21#wechat_redirect)
* [附：模型训练预设参数和数据集打标模板](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492311&idx=1&sn=a14f063f32ea1d7071ade6392a600ea6&chksm=e9f6d046de815950d7485fa50c7f0c4965ef680a36d27ac9d9757313308b12a1ee23d4931af3&scene=21#wechat_redirect)

**近期教学活动介绍：**

* 🚀[实验编程暑期爆肝教学活动一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492168&idx=1&sn=c0b32c024fe1f3bcfa50fbebe1b0c4f1&chksm=e9f6d0d9de8159cfb6342e68e46f970f57443ebf633654b583229ccd4468b535cfb181a4a86a&scene=21#wechat_redirect)
* [炼出1000+模型的训练师为你介绍Flux模型生态与入门 | 大帅课第18期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492425&idx=1&sn=bffe257d01672765bc96eb96803604de&chksm=e9f6d1d8de8158ce733613aaf5455621352c536a1427c7eab1dffcad686cda496824f9b76802&scene=21#wechat_redirect)

**实验编程会员机制介绍：**

会员可以在有效期内畅享历届以及持续新增的训练营、课程、源代码、内部社群等资源，报名通道长期开启，课程全程回放随到随学，详见：

[实验编程会员介绍与报名指引 2024上](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491763&idx=1&sn=3eb0a20587f5a655d03666b31855267c&chksm=e9f6d222de815b342a897e11ba47867c9cda935678e4e3b0ff6bfbc517420d3200202604c0fa&scene=21#wechat_redirect)

**🔥详细咨询、报名入口、加群**

<img src="/uploads/ai-4-11-deforum-webui-241004/img_017.webp" alt="" loading="lazy" />

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

<img src="/uploads/ai-4-11-deforum-webui-241004/img_018.webp" alt="" loading="lazy" />

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
