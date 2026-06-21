---
id: "event-ai-4-12-deforum-webui-241004-zh"
concept_id: "ai-4-12-deforum-webui-241004"
type: "event"
slug: "ai-4-12-deforum-webui-241004"
title: "实验编程AI训练营4期12 Deforum WebUI版进阶"
lang: "zh"
tags:
  - "ai"
  - "deforum"
  - "webui"
status: "canonical"
created: "2024-10-04"
updated: "2024-10-04"
version: 1
summary: "影像部分用Deforum制作，通过Motion公式模拟流体效果。"
coverUrl: "/uploads/ai-4-12-deforum-webui-241004/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-10-04"
event_date: "2024-10-04"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492665&idx=2&sn=5120e941689d916278cb5ab05cff5a13&chksm=e9f6d6a8de815fbeb144af0198be99e9e706ea2c3a3164bb37a792f0a29dc30a04756a42a1da"
useDocUrl: false
---

影像部分用Deforum制作，通过Motion公式模拟流体效果。

**📣AI营第4期第12节**

**主题：**Deforum WebUI版进阶

**方式：**在线课件，开放

**时间：**随到随学

**Deforum**，基于Stable Diffusion，有商业版在线使用，也有开源版本地部署。效果丰富，使用复杂，可控性强。可以制作Audio Reactive声音驱动视频。**适用场景：“AI味”的视频、音乐卡点视频。**

## **本次讲Deforum的开源版，基于SD WebUI。** 分为快速入门（今日第一篇推送）和进阶（本篇）。

按照Deforum Tab栏位逐个讲解。

### **1. Info, Links and Help**

这个栏位里的资源很好，经常被忽略，推荐在基本功能上手后回来阅读。

<img src="/uploads/ai-4-12-deforum-webui-241004/img_001.webp" alt="" loading="lazy" />

包含了很多有用的资源，例如：

**动画制作教程：**

https://rentry.org/AnimAnon-Deforum

<img src="/uploads/ai-4-12-deforum-webui-241004/img_002.webp" alt="" loading="lazy" />

**数学公式教程和工具：**

例如可以设置镜头运动曲线，或设置时间轴中的音频（parseq工具）等。

https://www.framesync.xyz/

<img src="/uploads/ai-4-12-deforum-webui-241004/img_003.webp" alt="" loading="lazy" />

https://sd-parseq.web.app/deforum

<img src="/uploads/ai-4-12-deforum-webui-241004/img_004.webp" alt="" loading="lazy" />

https://www.chigozie.co.uk/keyframe-string-generator/

<img src="/uploads/ai-4-12-deforum-webui-241004/img_005.webp" alt="" loading="lazy" />

### 

### **2. Run**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_006.webp" alt="" loading="lazy" />

Run Tab下是一些基础设置，与AI绘画类似。

Deforum输出的是图片序列帧，输出文件夹命名为上图第三个红框 “Deforum\_{timestring}”，在“outputs\img2img-images”下。

其中timestring是一个时间戳字符串，即每次生成这个字符串都会根据当前时间而变化，以达到每次生成一个新文件夹的目的。也可以手动修改。

### 

### **3. Keyframes**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_007.webp" alt="" loading="lazy" />

初上手时，Keyframes里先关注**Animation mode**和**Max frames**。

#### 

#### **3.1 Max frames**

Max frames就是视频的总长度，单位是帧。图中120，就是120帧（120张图）。

#### 

#### **3.2 Cadence**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_008.webp" alt="" loading="lazy" />

Cadence值默认是2，较大的值可以增加动画的连续性，但会减少扩散，导致画面相对单一。

#### 

#### **3.3 Animation mode：2D 3D**

2D、3D模式都是常用的Text to Video形式，通过关键词生成视频。

2D和3D的区别，在于镜头运动方式的不同。

镜头运动的设置在**Motion**里。

2D就是Zoom缩放、旋转、以及在X、Y轴方向的平移等。

3D则是在三维空间中，X、Y、Z轴三个方向进行平移、旋转等。

镜头运动的设置，格式是：

<img src="/uploads/ai-4-12-deforum-webui-241004/img_009.webp" alt="" loading="lazy" />

意思是沿着X方向平移：

* 从第0帧开始，平移速度是0，即不移动。
* 从第20帧开始，以每帧40像素的速度向右平移。
* 从第50帧开始，以每帧2像素的速度向左平移。

正数向右：

负数向左：

更多基础用法见：

https://deforum.github.io/animation.html

https://rentry.org/AnimAnon-Deforum

前文Info里提过数学公式，就可以用在镜头运动里：

<img src="/uploads/ai-4-12-deforum-webui-241004/img_010.webp" alt="" loading="lazy" />

意思是从第0帧开始，镜头以正弦曲线的速率进行运动（Zoom缩放）。

t代表当前帧。

上述公式的效果，可以直观认为每隔30帧，镜头的Zoom（向前推进）速度会有一个明显的速率变化：

更多：

https://rentry.org/AnimAnon-Deforum

<img src="/uploads/ai-4-12-deforum-webui-241004/img_011.webp" alt="" loading="lazy" />

**镜头运动案例：**

此例Cadence设置较高，6-8之间。

#### **3.4 Guided Images 引导图**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_012.webp" alt="" loading="lazy" />

Guided Images可以在指定关键帧位置设置一张引导图，慢慢融入 Deforum 的常规动画流程中，然后扩散开始重新制作图像。这样，图像就可以“引导”SD将制作的帧变形为预期的形状。

有点像在关键帧位置设置了“分镜头”，但更偏Image Prompt图像提示词的作用。

https://github.com/deforum-art/sd-webui-deforum/wiki/FAQ-&-Troubleshooting#guided-images

<img src="/uploads/ai-4-12-deforum-webui-241004/img_013.webp" alt="" loading="lazy" />

<img src="/uploads/ai-4-12-deforum-webui-241004/img_014.webp" alt="" loading="lazy" />

关键帧的写法非常灵活，可以明确的写上如第"0"帧、第"30"帧。

还可以写数学公式"max\_f/4-5"，即总帧数Max frames的四分之一，再减去5帧。Max frames如果是120，"max\_f/4-5"就是120/4-5=25。

#### 

#### **3.5 Strength**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_015.webp" alt="" loading="lazy" />

Strength类似AI图生图Image to Image里的Denoising strength，该值的大小直接影响所生成图片的风格化强度。

注意：

Image to Image里的Denoising strength，越大，风格化越强。

而Deforum里的Strength，越大，代表当前帧的图像更接近上一帧图像。反之，越小，每帧之间的图像差别越大。

#### 

#### **3.6 CFG**

Strength右边的CFG，即Image to Image里的CFG Scale，越大，代表图像越接近关键词的描述。

#### **3.7 Animation mode：Video Input**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_016.webp" alt="" loading="lazy" />

Video Input模式，即Video to Video的方式生成视频，对已有的视频做风格化或转绘。

此方法简单，但由于原理类似批量图生图，转绘后的视频抖动较大，已不太实用。

目前在转绘这一块，有更先进的Animatediff + ControlNet + IPAdapter + ComfyUI工作流方案可选。

**(1). 切换到“Video Input/视频输入”模式**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_017.webp" alt="" loading="lazy" />

**(2). 设置初始化视频**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_018.webp" alt="" loading="lazy" />

**(3). 提示词**

对于整条视频用同一种风格，可以在提示词里只保留第一条关键帧的设置。

<img src="/uploads/ai-4-12-deforum-webui-241004/img_019.webp" alt="" loading="lazy" />

**(4). 生成视频**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_020.webp" alt="" loading="lazy" />

#### **3.8 Animation mode，Interpolation**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_021.webp" alt="" loading="lazy" />

Interpolation模式也可以看作是Text to Video，在给定的一些关键帧设置中间，自动进行插值。

效果：

更多解释：

https://docs.google.com/document/d/1RrQv7FntzOuLg4ohjRZPVL7iptIyBhwwbcEYEW2OfcI

<img src="/uploads/ai-4-12-deforum-webui-241004/img_022.webp" alt="" loading="lazy" />

### **4. Prompts**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_023.webp" alt="" loading="lazy" />

Prompts里，可以对生成视频按照关键帧/分镜头进行关键词设置，这是Deforum另一个灵活之处。

图中示例的意思：

第0帧起，画面内容是一只兔子（tiny cute swamp bunny）。

第30帧起，画面内容是猫（anthropomorphic clean cat）。

第60帧起，变成椰子（a beautiful coconut）。

第90帧起，变成榴莲（a beautiful durian）。

Prompts也像AI绘画生图一样，支持正关键词和负关键词。

可以对某一帧单独设置负关键词，也可以将通用的正、负关键词写在下方：

<img src="/uploads/ai-4-12-deforum-webui-241004/img_024.webp" alt="" loading="lazy" />

### 

### **5. Init**

<img src="/uploads/ai-4-12-deforum-webui-241004/img_025.webp" alt="" loading="lazy" />

Init中，可以设置初始垫图（Image Init）、遮罩（Mask Init）等。

如果Animation mode使用Video Input模式（Video to Video视频风格化），则也在这里设置参考视频（Video Input）。

### 

### **6. ControlNet**

在Deforum中也可以使用ControlNet，原理与文生图类似，可以用一条视频去控制新生成的视频。

<img src="/uploads/ai-4-12-deforum-webui-241004/img_026.webp" alt="" loading="lazy" />

### 

### **7. Hybrid Video**

Hybrid Video是一个特殊的模式，它可以让你在使用2D或3D模式（Text to Video）的时候，通过引入一个参考视频，将二者效果进行混合，比如用参考视频的运动特性，来引导画面。

但这又与Video Input（Video to Video）模式不同。

此方法有点像ComfyUI视频工作流常用的ControlNet + IPAdapter，会有一些奇妙的效果。

<img src="/uploads/ai-4-12-deforum-webui-241004/img_027.webp" alt="" loading="lazy" />

参考教程：

https://docs.google.com/document/d/1I9zJfmmJd9l6aEdPa\_JZBbciOw-6r2CsWcesGLbCb-8

案例：

https://www.youtube.com/watch?v=ZPcthY0GqG8

https://www.youtube.com/watch?v=ilGBg8iwNfA

**8. Output**

Output中设置视频输出的规格。

<img src="/uploads/ai-4-12-deforum-webui-241004/img_028.webp" alt="" loading="lazy" />

最主要的是FPS，即视频每秒钟时长所包含的帧数。

因前部Motion里的镜头运动参数、Prompts中的关键帧等，都是以帧为单位，所以要牢记视频的FPS，用以换算成时间点。

例如Prompts中分镜头的设置：

<img src="/uploads/ai-4-12-deforum-webui-241004/img_023.webp" alt="" loading="lazy" />

第30帧的画面是一只猫，而FPS是15，即第2秒钟时出现猫（30/15=2）。

Outputs中还有一些其他功能，例如给视频添加音轨、视频插帧放大等。

另有一个常用的功能是Frames to Video，可以将文件夹中的序列帧，合成视频文件。类似在Pr等剪辑软件中的功能。

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

<img src="/uploads/ai-4-12-deforum-webui-241004/img_029.webp" alt="" loading="lazy" />

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

<img src="/uploads/ai-4-12-deforum-webui-241004/img_030.webp" alt="" loading="lazy" />

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
