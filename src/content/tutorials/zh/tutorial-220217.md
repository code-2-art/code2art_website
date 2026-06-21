---
id: "tutorial-tutorial-220217-zh"
concept_id: "tutorial-220217"
type: "tutorial"
slug: "tutorial-220217"
title: "AI艺术音画互动及小程序交互实例（源文件）"
lang: "zh"
tags:
  - "ai"
status: "canonical"
created: "2022-02-17"
updated: "2022-02-17"
version: 1
summary: "在《AI艺术课 · 基础篇》中分析和演示过用AI生成的内容做音画互动效果。"
coverUrl: "/uploads/tutorial-220217/img_001.webp"
author: "Contra的后院"
publishedAt: "2022-02-17"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486388&idx=1&sn=b5c542cbd25878212cb56038ad5e8c7d&chksm=e9f53925de82b033443330eca5eeb6a8730eec5f16a1a6df7500f62de137159f2e0a2ce5191c"
useDocUrl: false
---

在《AI艺术课 · 基础篇》中分析和演示过用AI生成的内容做音画互动效果。

<img src="/uploads/tutorial-220217/img_001.webp" alt="" loading="lazy" />

其中比较**简便的方法是利用StyleGAN3自带的visualizer，加入OSC，接收其他软件发来的音频数据，进行实时音画互动。**

再来个例子：

这个主题将放在《AI艺术课 · 放肆篇》精讲。

刚好最近有会员提问，我先把案例工程（源文件）放在**情报中心资源库**，供大家参考自学。

**几个要点：**

**电脑配置**

近两年的Nvidia显卡，Linux或Windows系统。

本案例效果不需要在电脑本地训练模型，所以对显卡的要求比较宽松，一台正常游戏本即可。

**安装StyleGAN3运行环境**

这一步既简单又复杂，“运气”好的话，按照官方指引一步一步安装即可。

但是安装过程大概率会出现种种环境配置问题，尤其在Windows上。解决它们需要一些基本计算机操作常识。

这也是初上手提问最多的一个环节。

StyleGAN3官方指引：

https://github.com/NVlabs/stylegan3

**音画互动的“画”**

**即AI模型**，可以是你自己训练的，也可以是互联网上训练好的直接使用。

训练模型需要高配置电脑、大量数据集、较长训练时间。

一个零基础的办法，是使用Runway训练模型，见《AI艺术课入门篇Runway章》。

为了演示效果，我这里也使用在Runway上训练出的浮世绘模型。

<img src="/uploads/tutorial-220217/img_002.webp" alt="" loading="lazy" />

**我训练好的模型也可以在情报中心资源库获取。**

有了模型后，启动visualizer，加载模型：

<img src="/uploads/tutorial-220217/img_003.webp" alt="" loading="lazy" />

**音画互动的“互动”**

仍然用**OSC**解决互动问题。

给visualizer（官方开源）里hack进**python-osc**库，即可接收外界传来的音频数据。

使用收到的数据去控制模型的Truncate等参数，即可实现文章开头的音画联动效果。

**python-osc**库：

https://github.com/attwad/python-osc

加入OSC的visualizer启动后，OSC默认监听10086端口。

示例是将BugOSC的slider1的数据，与visualizer里的Truncate绑定。

可按需要自行修改源文件，细节问题可在情报中心群和AI答疑群里讨论。

**源代码和工程文件我放在情报中心资源库里，情报中心会员、年度学员可免费获取。**

<img src="/uploads/tutorial-220217/img_004.webp" alt="" loading="lazy" />

实际上，也可以接收动捕、人体识别等任何数据作为画面控制源。

例如小程序撩一切的BugOSC：

（点击播放视频）

也有会员使用ml5js的PoseNet来做面部控制：

<img src="/uploads/tutorial-220217/img_005.webp" alt="" loading="lazy" />

---

[《**AI艺术从入门到放肆**》](https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486255&idx=2&sn=4a862c722a48e0935d134a860b6ae373&scene=21#wechat_redirect)，是我2022【[**AI艺术推行计划**](https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486255&idx=1&sn=d36716064e9f7e694bd05e36f9e30744&scene=21#wechat_redirect)】的一部分。

这门课的**首要目标**是让**想用AI赋魔艺术创作的人**能够**尽快且顺滑上手**。

<img src="/uploads/tutorial-220217/img_006.webp" alt="" loading="lazy" />

**基础篇**免费公开，可在B站或[**实验编程网校**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486214&idx=1&sn=f24dcabda97d220e04242cacd3a6861a&chksm=e9f53997de82b081ae17294d26206c432aabaec2df3096535b7bbc84847853e6f7deaaa3a8de&scene=21#wechat_redirect)获取。

我正在开发**入门篇**、**进阶篇**、**放肆篇**的课程内容。

全程采用真实案例教学，采取【**录播 + 答疑 + 资源 + 社群**】的形式。

**情报中心**成员和**年度学员**可以**抢先体验**最新的教程草稿、课件资源、答疑互动，而我将利用第一手反馈来打磨课程内容和难易程度。

**《课程开发日志》**不仅是课程制作流水账，**也会有实践笔记和资源推荐一并记录**。

历史日志：

* [AI艺术课程开发日志001 - 前言和案例准备](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486273&idx=1&sn=a1d192900635617ac317c646fecc1b91&chksm=e9f539d0de82b0c6393084e8f55e039b2dc18c0845178a189278be55e2c2e861bdbf42d72691&scene=21#wechat_redirect)
* [AI艺术课程开发日志002 - Runway和数据集](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486286&idx=1&sn=2e4c73e324a291d50c074e4a7cb7ef7b&chksm=e9f539dfde82b0c9d6e3590d7aad6bc36f2b6ed2d1e6a389a3e2e8687e397ebffa8cf244f527&scene=21#wechat_redirect)
* [AI艺术课程开发日志003 - Runway生成一万张虚拟蝴蝶](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486303&idx=1&sn=1229e4d9dc050a524fd14bf54fd20e3d&chksm=e9f539cede82b0d8eca476a5994aa060f3421bda65a64300c411913fa19a8c55c285fc8bde92&scene=21#wechat_redirect)
* [AI艺术课程开发日志004 - Colab教程开始](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486332&idx=1&sn=5e859c7cc003e297601a2bbe1b5d9cd1&chksm=e9f539edde82b0fb727eb86b69c896be89910a4abb04465907a7daaf08ae9afc3c5f7e40a912&scene=21#wechat_redirect)

---

**关于实验编程**

* [关于实验编程 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=2&sn=26e1aac541f567f8365bc4a22845bab4&chksm=e9f5390ade82b01c8af55bb726971270926e5ef1675940228b70b764d01d7aa38a02b0003074&scene=21#wechat_redirect)
* [教学指引 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=1&sn=b583d6b8d7e083a366ad03b453155e10&chksm=e9f5390ade82b01c48e26effa9f574490215c50f399085a11b5a7ae0e93e762202ef2811930d&scene=21#wechat_redirect)
* [情报中心 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=3&sn=b4fd397dab1a5725d2dfd204a2d8026d&chksm=e9f5390ade82b01c45577ea2a9972a15d471ef7e4a7599e6cfe981b552b5d1d8f9f7c0764c48&scene=21#wechat_redirect)
* [《AI艺术推行计划》](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486255&idx=1&sn=d36716064e9f7e694bd05e36f9e30744&chksm=e9f539bede82b0a870844be0d08b345f8a499f022ca8e83df16119ab97ac54566ce17891e3e3&scene=21#wechat_redirect)
* [《AI艺术从入门到放肆》课程介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486255&idx=2&sn=4a862c722a48e0935d134a860b6ae373&chksm=e9f539bede82b0a8a8ce01b6ab3bea5bac38a8a97f75d7d15edd98c60d1ba29e3debe13cc100&scene=21#wechat_redirect)

**微信群：floatbug**

<img src="/uploads/tutorial-220217/img_007.webp" alt="" loading="lazy" />

加微信烦请注明：来源（公B抖知）、学校单位、专业行业等，高效交流。

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

微信公众号/视频号/知乎专栏/抖音/B站：  
**实验编程**
