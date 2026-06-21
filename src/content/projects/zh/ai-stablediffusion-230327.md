---
id: "project-ai-stablediffusion-230327-zh"
concept_id: "ai-stablediffusion-230327"
type: "project"
slug: "ai-stablediffusion-230327"
title: "AI动画 | StableDiffusion多帧视频处理插件"
lang: "zh"
tags:
  - "ai"
  - "stablediffusion"
status: "canonical"
created: "2023-03-27"
updated: "2023-03-27"
version: 1
summary: "分享一款AI动画制作工具："
coverUrl: "/uploads/ai-stablediffusion-230327/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-03-27"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488975&idx=1&sn=bfee22a3d679b929df71d7e605e193a7&chksm=e9f5275ede82ae48a33d837d4eaf9e5ca381ff342d6944f6f6d9d6fc14adf884b00df4c85980"
useDocUrl: false
---

分享一款AI动画制作工具：  
**Multi-frame Video Processing**

**先看效果：**

<img src="/uploads/ai-stablediffusion-230327/img_001.webp" alt="" loading="lazy" />

<img src="/uploads/ai-stablediffusion-230327/img_002.webp" alt="" loading="lazy" />

**原视频：**

<img src="/uploads/ai-stablediffusion-230327/img_003.webp" alt="" loading="lazy" />

它以Stable Diffusion Script（扩展脚本）的方式工作。

**获取链接：**  
https://xanthius.itch.io/multi-frame-rendering-for-stablediffusion

*下面是原作者提供的使用说明：*

**(Beta) Multi-frame Video rendering for StableDiffusion**

**备注：**

### 

+ ‍这是 StableDiffusion 的 Automatic1111 UI 的脚本。
+ 我已经用非面部视频对其进行了测试并且效果很好。我用特定视频做了很多，这样更容易比较。
+ 除了将帧组合成 gif 之外，所显示的动画均未在脚本之外进行编辑。
+ 他们使用没有嵌入、超网络、lora 或其他任何东西的公共模型来进一步帮助保持一致性。
+ 没有对它们运行去闪烁过程，没有插值，也没有手动修复。
+ 这是测试版，目前主要是概念验证。有很多工作要做，因为这一切都很新，所以它远非完美。您可以尝试通过使用自定义艺术风格和嵌入来缓解一些问题，但这离完美还有一段距离。

## **多帧视频处理**

这个项目是我在使用 StableDiffusion 制作动画时保持一致性的尝试。 

它借鉴了我之前在尝试训练分屏动画模型以生成角色的 360 度视图时所做的工作。随着 ControlNet 的出现，我发现使用分屏/胶片卷轴技术可以做更多的事情，所以我正在努力研究如何最好地利用它。

### **它是如何工作的（基础）：**

<img src="/uploads/ai-stablediffusion-230327/img_004.webp" alt="" loading="lazy" />

您可以在此处将降噪强度设置为 1，然后使用 ControlNet 将其引导至动画第一帧所需的任何姿势和构图。慢慢来获得好的结果，因为第一帧将引导动画的其余部分。

<img src="/uploads/ai-stablediffusion-230327/img_005.webp" alt="" loading="lazy" />

脚本自动使用第一帧来创建第二帧，方法是创建分屏输入图像，类似于水平胶片卷轴。在运行 img2img 进程（也称为环回）之前，前一帧成为第 2 帧的基础图像。

请注意，此处显示的几乎每个动画都将去噪强度设置为 1.0，因此实际上并没有发生环回。以 0.75-0.8 的强度循环回来似乎使它更稳定一点，但如果降噪低于 1.0，请务必启用颜色校正，否则会出现颜色漂移。

<img src="/uploads/ai-stablediffusion-230327/img_006.webp" alt="" loading="lazy" />

与生成第 2 帧时发生的情况类似，其余帧也使用水平胶片卷轴设置。它的设置与以前相同，只是我们在右侧添加了另一个图像。因为我们实际上并不知道那个框架是什么，所以我们在那个地方放置一个现有的框架，以便作为更多的指导。我发现最好的选择是“FirstGen”，这意味着动画的第一帧始终是这些动画的最后一帧。它有助于减少颜色漂移，尽管如果动画变化很大并且这不切实际，那么“历史”是另一个不错的选择，因为它使用了更远的一步（因此在上面的示例中它将是第 2 帧，然后是第 3 帧，然后是1 生成帧 3) 时。

### **安装：**

通过将脚本放在“ stable-diffusion-webui\scripts\ ”文件夹中来安装脚本。

### **如何使用它：**

### **第1步：**

<img src="/uploads/ai-stablediffusion-230327/img_007.webp" alt="" loading="lazy" />

选择您最喜欢的模型并找到正确的设置，将动画的第一帧转换为最终动画所需的任何样式或角色。

请记住，CFG 比例和 ControlNet 权重似乎影响最大并且是主要关注点，因此在为第一帧生成一系列选项之前，我会使用 X/Y 图找到正确的值。

我通常根据动画将 ControlNet 权重设置为 0.3-0.7。较高的值会使质量变差，但会使动画更好地符合引导帧。

#### **第2步：**

<img src="/uploads/ai-stablediffusion-230327/img_008.webp" alt="" loading="lazy" />

单击“发送到 img2img”按钮。

然后从菜单中选择脚本

<img src="/uploads/ai-stablediffusion-230327/img_009.webp" alt="" loading="lazy" />

### **第 3 步：选择您的设置**

这是我为此示例选择的设置，但这些设置在下面进行了说明

<img src="/uploads/ai-stablediffusion-230327/img_010.webp" alt="" loading="lazy" />

请务必单击“上传指南框架”按钮并选择您的指南框架：

<img src="/uploads/ai-stablediffusion-230327/img_011.webp" alt="" loading="lazy" />

#### **初始降噪强度：**

该值控制动画第一帧的降噪强度。如果您继续并将之前的 img 发送到 img2img 模式，那么您需要将其设置为 0，以便您之前拥有的图像是生成的动画的第一帧。

如果您将其设置为 1 并将种子设置为 -1，那么您每次都会获得不同的起始帧，因此会有不同的动画。您可以使用更高的批次计数来执行此操作，以从同一提示中获得一系列不同的动画变化

#### **追加询问提示：**

这只是我构建代码所依据的预构建环回脚本的遗留选项。我从未实际使用过它，但它应该可以工作并且与回送脚本实现相同。

#### **第三帧图像：**

这是最重要的设置。它控制在生成过程中哪个图像用于图像右侧的帧。（请参阅“工作原理”部分的第 3 步）

None：

+ ‍仅使用 2 张图像（1 个参考帧）。
+ 最快的方法和最少的资源消耗。
+ 经常有颜色退化问题。（颜色校正有助于减轻它）

FirstGen：

+ 它将动画的第一帧作为每一代的第 3 帧。
+ 通常是我测试的最佳选择。
+ 与任何其他设置相比，它的颜色退化问题最少
+ 对于动画的小部分或第一帧是所有其他帧的良好参考的动画效果更好。

Historical：

+ 生成帧 K 时，第三帧是帧 (K-2)，因此对于帧 9，它将是  |\_Frame8\_|\_frame9\_|\_frame7\_|
+ 与“无”相比，它减少了颜色退化，但不如“第一代”那么多
+ 对于在内容方面与初始帧有很大差异的动画，它的性能优于其他方法。

#### **色彩校正：**

颜色校正试图减少颜色退化所面临的问题，尤其是在进行环回时（降噪低于 1.0）。

这是颜色校正 (CC) 与 0.75 去噪强度动画和各种第三帧设置的比较：

<img src="/uploads/ai-stablediffusion-230327/img_012.webp" alt="" loading="lazy" />

#### **解冻种子：**

冻结种子后，生成的每个帧都将使用相同的种子。解冻后，每一帧的种子都会不同。根据我的经验，种子冻结后它会明显更平滑，但我相信这也是导致纹理或皮肤细节似乎留在原地而不是随人/物体移动的奇怪效果的原因。这对于特写镜头来说最为明显，但“种子变化”设置可能能够纠正它。我还没有机会完全测试它。

#### **环回源：**

Loopback Source 是用于环回过程的图像，即“How it works”部分Step3 中的中心（绿色）输入图像。如果降噪强度设置为 1（通常情况下），则此图像只会影响颜色校正设置。

### **第 4 步：运行它**

您可以最初在前几帧运行它以查看它的外观：

<img src="/uploads/ai-stablediffusion-230327/img_013.webp" alt="" loading="lazy" />

它应该为您提供它们的 spritesheet 以及每个图像。

如果您对它的运行方式感到满意，那么选择您希望它处理的所有帧并让它运行。这可能需要一段时间，因为它一次处理最多 3 帧。

完成后，您将拥有一个精灵表和视频的帧。为了制作 gif，我刚刚将 spritesheet 上传到 https://ezgif.com/sprite-cutter 然后它给了我一个像这样的 gif 输出：

如果它不够符合您的视频，那么您可能需要增加 ControlNet 权重或稍微更改一些其他设置。这是这里的情况，所以你可以看到第一代：

<img src="/uploads/ai-stablediffusion-230327/img_014.webp" alt="" loading="lazy" />

然后 ControlNetWeight 增加到 0.55 的版本：

<img src="/uploads/ai-stablediffusion-230327/img_015.webp" alt="" loading="lazy" />

又是 0.7：

<img src="/uploads/ai-stablediffusion-230327/img_016.webp" alt="" loading="lazy" />

最后一个在 0.9 并且“Loopback Source”设置为“FirstGen”（因为它与颜色校正交互的方式）：

<img src="/uploads/ai-stablediffusion-230327/img_017.webp" alt="" loading="lazy" />

我认为还有很多设置我仍然会更改并且 ControlNet Weight 有点高，但我没有快速迭代的计算能力并且每个动画都是 78 帧（12.5fps），512x512 像素，这意味着 1536x512使用脚本，每次运行大约 15 分钟。

在解决各种问题的设置和培训方面有很多需要解决的问题，但这些是基础知识，我希望社区帮助找出最佳实践。

本指南使用 RealisticVision 1.4 作为模型，但其他模型的性能可能更好或更差，使用嵌入将有助于获得更好的一致性、更少的颜色退化和整体更流畅的视频。

**已知的问题：**

注意：有很多工作要做，所以这不是一个完整的列表

+ 颜色退化 - 这是一个很大的问题。尤其是在 2 帧模式下，这种情况经常发生。色彩校正设置有所帮助，但仍有很多工作要做，这绝对是一般最大的问题。TheCorridorCrew 提到的反向噪声问题是在此脚本的一个版本中设置的，但它会大大放大颜色退化，因此在尝试实施该选项之前我需要修复它。

---

**近期课程动态**

* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)
* [【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

**关于实验编程**

* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)
* [实验编程教学资源汇总 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488514&idx=1&sn=8d4c4dd3a60a284ab72722dd7d39e1b8&chksm=e9f52693de82af85642389db878a309390dec9ae12a6b5c4e03f532f6753a989347efe9501e7&scene=21#wechat_redirect)
* [教学指引 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488506&idx=1&sn=513917f199d4ba157f7f3b76647e31c9&chksm=e9f5216bde82a87d3087140fbd1f9ee3726a5738543403c18250ce52655ac11d8a8e7b1d0074&scene=21#wechat_redirect)
* [【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)
* [教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/ai-stablediffusion-230327/img_018.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/ai-stablediffusion-230327/img_019.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
