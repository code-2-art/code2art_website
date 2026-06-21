---
id: "event-deforum-text-to-video-3-10-230808-zh"
concept_id: "deforum-text-to-video-3-10-230808"
type: "event"
slug: "deforum-text-to-video-3-10-230808"
title: "Deforum与Text to Video影像制作基础 | 课程更新 | 训练营3期第10课"
lang: "zh"
tags:
  - "deforum"
  - "text"
  - "to"
  - "video"
status: "canonical"
created: "2023-08-08"
updated: "2023-08-08"
version: 1
summary: "Deforum 镜头Zoom示例"
coverUrl: "/uploads/deforum-text-to-video-3-10-230808/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-08-08"
event_date: "2023-08-08"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489800&idx=1&sn=21c5cf76e571967b8a4a50ea86b5bd7b&chksm=e9f52b99de82a28f01bd13a4e1f56ddb68c1015b7ef15b9b708b451d8602301381f86062428a"
useDocUrl: false
---

Deforum 镜头Zoom示例

**Text to Video**，或者更广义的Prompt to Video（image也可以算作prompt）， 目前（2023.8）两个选择：

**Runway GEN2**，效果好，使用简单，可控性少，时长有限。

**SD Deforum**，效果丰富，使用复杂，可控性强，可以通过数学公式控制镜头运动，可结合ControlNet，可在关键帧/分镜头位置设置关键词、参考图，可以制作Audio Reactive声音驱动视频。有AI“抖动”问题。

‍“Computer Chips That Imitate the Brain”

Contra，2022.11

‍"隐"，Audio Reactive 影像

合成器：周蒙泰，AI：Contra，2023.2

本课是实验编程AI艺术训练营3期第10课，讲述Stable Diffusion Deforum在Text to Video方面的基础用法及注意事项。从Deforum上手基础开始，并重点突出Text to Video相关的值得关注的知识点，包括数学公式、镜头控制、关键帧/分镜头设置、Hybrid模式案例等。

详细课程见训练营，以下是部分内容节选。

**No.0**

**安装**

***推文略，见课程。***

**No.1**

**Info, Links and Help**

这个栏位里的资源很好，经常被忽略，推荐在基本功能上手后回来阅读。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_001.webp" alt="" loading="lazy" />

包含了很多有用的资源，例如：

**动画制作教程：**

https://rentry.org/AnimAnon-Deforum

<img src="/uploads/deforum-text-to-video-3-10-230808/img_002.webp" alt="" loading="lazy" />

**数学公式教程和工具：**

例如可以设置镜头运动曲线，或设置时间轴中的音频（parseq工具）等。

https://www.framesync.xyz/

<img src="/uploads/deforum-text-to-video-3-10-230808/img_003.webp" alt="" loading="lazy" />

******推文略，见课程。******

**No.2**

**Run**

<img src="/uploads/deforum-text-to-video-3-10-230808/img_004.webp" alt="" loading="lazy" />

Run Tab下是一些基础设置，与AI绘画类似。

Deforum输出的是图片序列帧，输出文件夹命名为上图第三个红框 “Deforum\_{timestring}”，在“outputs\img2img-images”下。

其中timestring是一个时间戳字符串，即每次生成这个字符串都会根据当前时间而变化，以达到每次生成一个新文件夹的目的。也可以手动修改。

**No.3**

**Keyframes**

<img src="/uploads/deforum-text-to-video-3-10-230808/img_005.webp" alt="" loading="lazy" />

**初上手时，Keyframes里先关注Animation mode和Max frames。**

Max frames就是视频的总长度，单位是帧。图中120，就是120帧（120张图）。

#### **Animation mode，2D 3D**

2D、3D模式都是常用的Text to Video形式，通过关键词生成视频。

2D和3D的区别，在于镜头运动方式的不同。

镜头运动的设置在Motion里。

2D就是Zoom缩放、旋转、以及在X、Y轴方向的平移等。

3D则是在三维空间中，X、Y、Z轴三个方向进行平移、旋转等。

镜头运动的设置，格式是：

<img src="/uploads/deforum-text-to-video-3-10-230808/img_006.webp" alt="" loading="lazy" />

意思是沿着X方向平移，从第0帧开始，平移速度是0，即不移动。

从第20帧开始，以每帧40像素的速度向右平移。

从第50帧开始，以每帧2像素的速度向左平移。

平移演示：

***推文略，见课程。***

前文Info里提过数学公式，就可以用在镜头运动里：

<img src="/uploads/deforum-text-to-video-3-10-230808/img_007.webp" alt="" loading="lazy" />

意思是从第0帧开始，镜头以正弦曲线的速率进行运动（Zoom缩放）。

t 代表当前帧。

上述公式的效果，可以直观认为每隔30帧，镜头的Zoom（向前推进）速度会有一个明显的速率变化：

更多：

***推文略，见课程。***

<img src="/uploads/deforum-text-to-video-3-10-230808/img_008.webp" alt="" loading="lazy" />

镜头运动案例：

#### Animation mode，Video Input

<img src="/uploads/deforum-text-to-video-3-10-230808/img_009.webp" alt="" loading="lazy" />

Video Input模式，即Video to Video的方式生成视频，对已有的视频做风格化，我们放在下一课讲解。

#### Animation mode，Interpolation

<img src="/uploads/deforum-text-to-video-3-10-230808/img_010.webp" alt="" loading="lazy" />

Interpolation模式也可以看作是Text to Video，在给定的一些关键帧设置中间，自动进行插值。

效果：

更多：

***推文略，见课程。***

#### Strength

<img src="/uploads/deforum-text-to-video-3-10-230808/img_011.webp" alt="" loading="lazy" />

Strength类似AI图生图Image to Image里的Denoising strength，该值的大小直接影响所生成图片的风格化强度。

注意：

Image to Image里的Denoising strength，越大，风格化越强。

而Deforum里的Strength，越大，代表当前帧的图像更接近上一帧图像。反之，越小，每帧之间的图像差别越大。

#### CFG

Strength右边的CFG，即Image to Image里的CFG Scale，越大，代表图像越接近关键词的描述。

Keyframes里的其他参数，放在Text to Video后续进阶课程中讲解。

**No.4**

**Prompts**

### 

Prompts里，可以对生成视频按照关键帧/分镜头进行关键词设置，这是Deforum另一个灵活之处。

图中示例的意思：

* 第0帧起，画面内容是一只兔子（tiny cute swamp bunny）。
* 第30帧起，画面内容是猫（anthropomorphic clean cat）。
* 第60帧起，变成椰子（a beautiful coconut）。
* 第90帧起，变成榴莲（a beautiful durian）。

Prompts也像AI绘画生图一样，支持正关键词和负关键词。

可以对某一帧单独设置负关键词，也可以将通用的正、负关键词写在下方：

<img src="/uploads/deforum-text-to-video-3-10-230808/img_013.webp" alt="" loading="lazy" />

**No.5**

**Init**

<img src="/uploads/deforum-text-to-video-3-10-230808/img_014.webp" alt="" loading="lazy" />

Init中，可以设置初始垫图（Image Init）、遮罩（Mask Init）等。

如果Animation mode使用Video Input模式（Video to Video视频风格化），则也在这里设置参考视频（Video Input）。

**No.6**

**ControlNet**

在Deforum中也可以使用ControlNet，放在后续Deforum进阶课程来讲。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_015.webp" alt="" loading="lazy" />

**No.7**

**Hybrid Video**

### 

### Hybrid Video是一个特殊的模式，它可以让你在使用2D或3D模式（Text to Video）的时候，通过引入一个参考视频，将二者效果进行混合，比如用参考视频的运动特性，来引导画面。

但这又**与Video Input（Video to Video）模式不同。**

此方法不常见，但会有一些奇妙的效果。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_016.webp" alt="" loading="lazy" />

参考教程：

***推文略，见课程。***

案例：

https://www.youtube.com/watch?v=ZPcthY0GqG8<img src="/uploads/deforum-text-to-video-3-10-230808/img_017.webp" alt="" loading="lazy" />

https://www.youtube.com/watch?v=ilGBg8iwNfA<img src="/uploads/deforum-text-to-video-3-10-230808/img_018.webp" alt="" loading="lazy" />

**No.8**

**Output**

Output中设置视频输出的规格。

***推文略，见课程。***

以上是本课内容，Deform及Text to Video的基础功能。

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

**后续：**

* 更多ControlNet进阶案例
* 视频主题（Text2Video，镜头控制，音画联动，Video2Video，ControlNet，Ebsynth等）
* 模型训练主题（Textural Inversion，Dreambooth，LoRA，ControlNet等）
* 其他综合应用
* 中间穿插讲解在**学习需求征集帖子**中的内容。

**AI艺术训练营介绍**

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [**AI艺术训练营3期介绍（视频）**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
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

<img src="/uploads/deforum-text-to-video-3-10-230808/img_019.webp" alt="" loading="lazy" />

**试听课、公开课见文末二维码。**

加入情报中心圈子、或1v1超级会员，随到随学。

**情报中心：**

情报中心类似XX星球。汇总了课程、课件、源代码、资源、交流答疑。

有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_020.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_021.webp" alt="" loading="lazy" />

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

<img src="/uploads/deforum-text-to-video-3-10-230808/img_022.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/deforum-text-to-video-3-10-230808/img_023.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
