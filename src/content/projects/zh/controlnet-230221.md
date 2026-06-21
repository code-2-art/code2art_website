---
id: "project-controlnet-230221-zh"
concept_id: "controlnet-230221"
type: "project"
slug: "controlnet-230221"
title: "ControlNet 今日上线压轴新功能：猜测模式/非提示模式"
lang: "zh"
tags:
  - "controlnet"
status: "canonical"
created: "2023-02-21"
updated: "2023-02-21"
version: 1
summary: "自从 ControlNet 的价值被大家看到之后，ControlNet 的作者就神隐了。原来是更新功能去了。在这篇文章发布时仍然在更新中……"
coverUrl: "/uploads/controlnet-230221/img_001.webp"
author: "实验编程"
publishedAt: "2023-02-21"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488633&idx=1&sn=11b7f9af900098a6f3fcb206c217fa1c&chksm=e9f526e8de82affe74dba3adc22941892f9f9537ad85d0eaa38a8abc694338ec18eaae665e58"
useDocUrl: false
---

自从 ControlNet 的价值被大家看到之后，ControlNet 的作者就神隐了。原来是更新功能去了。在这篇文章发布时仍然在更新中……

**ControlNet 官方github地址：**https://github.com/lllyasviel/ControlNet

<img src="/uploads/controlnet-230221/img_001.webp" alt="" loading="lazy" />

就在几个小时前  ControlNet 的github页面更新了最新的功能**：****猜测模式****。**这个模式支持大家可以在不输入提示词的状态下使用之前的线稿之类的底图，直接生成图片。

作者在文档里说到：**这是 ControlNet 里难度最大的一环。**

你可以在之前所有的八个模型中使用猜测模式如深度图、边缘图、涂鸦等，无需输入任何提示词。这个功能的难点在于在没有提示词的情况下，只能靠 ControlNet 编码器 **“猜测”** 控制图中的内容。这需要识别的非常准确才行。

**下面是github上作者给出的一些案例：**

下面这个是提示图本身非常完整的情况下，提取深度图的生成效果还不错。

<img src="/uploads/controlnet-230221/img_002.webp" alt="" loading="lazy" />

这个也是在提示图非常完整的前提下提取边缘，再生成的图片效果。

<img src="/uploads/controlnet-230221/img_003.webp" alt="" loading="lazy" />

简单的物体线稿表现的也挺好。

<img src="/uploads/controlnet-230221/img_004.webp" alt="" loading="lazy" />

由于没有提示，ControlNet编码器将“猜测”控制图中的内容。有时候猜测结果真的很有趣。由于扩散算法本质上可以给出多个结果，ControlNet似乎能够给出多个猜测，如下所示：

<img src="/uploads/controlnet-230221/img_005.webp" alt="" loading="lazy" />

在没有提示的情况下，当控制强度相对较低时，HED 似乎擅长生成看起来像绘画的图像：

<img src="/uploads/controlnet-230221/img_006.webp" alt="" loading="lazy" />

如下图所示，由于非提示模式非常困难，即使是非常深的ControlNet也可能会有故障案例。（在下面的示例中，只有右下角的那个看起来不错。）

<img src="/uploads/controlnet-230221/img_007.webp" alt="" loading="lazy" />

**除此之外作者还列出了ControlNet 的关联资源 list：**

**加入了SD的webui的github：**https://github.com/Mikubill/sd-webui-controlnet

**部署在huggingface上的简略版：**https://huggingface.co/spaces/hysts/ControlNet

**65种不同模式的colab列表：**https://github.com/camenduru/controlnet-colab

**支持视频输入的ControlNet Video（这个比较有趣）：**https://huggingface.co/spaces/fffiloni/ControlNet-Video 

**还有一些其他的尝试：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/7784

https://huggingface.co/spaces/hysts/ControlNet-with-other-models

https://huggingface.co/spaces/RamAnanth1/ControlNet

这里我补充一个作者没有提到，但是我觉得很好用webui的插件：**OpenPose Editor**

可以直接通过编辑人物骨骼来控制画面。这个插件很好的弥补了通过图片提取人物骨骼不能修改的问题，并且它可以手动添加多个人物。

https://github.com/fkunn1326/openpose-editor

这个是使用方法的视频：

下面几张图是我尝试的案例：

<img src="/uploads/controlnet-230221/img_008.webp" alt="" loading="lazy" />

<img src="/uploads/controlnet-230221/img_009.webp" alt="" loading="lazy" />

<img src="/uploads/controlnet-230221/img_010.webp" alt="" loading="lazy" />

---

**关于实验编程**

* [**关于实验编程 - 2023.2**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)
* [**实验编程教学资源汇总 2023.2**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488514&idx=1&sn=8d4c4dd3a60a284ab72722dd7d39e1b8&chksm=e9f52693de82af85642389db878a309390dec9ae12a6b5c4e03f532f6753a989347efe9501e7&scene=21#wechat_redirect)
* [****教学指引 - 2023.2****](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488506&idx=1&sn=513917f199d4ba157f7f3b76647e31c9&chksm=e9f5216bde82a87d3087140fbd1f9ee3726a5738543403c18250ce52655ac11d8a8e7b1d0074&scene=21#wechat_redirect)
* ****[【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)****
* ****[教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)****

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/controlnet-230221/img_011.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/controlnet-230221/img_012.webp" alt="" loading="lazy" />

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
