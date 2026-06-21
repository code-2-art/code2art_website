---
id: "project-chaostao-200512-zh"
concept_id: "chaostao-200512"
type: "project"
slug: "chaostao-200512"
title: "“ChaosTao”是一个在线的算法作曲生成器"
lang: "zh"
tags:
  - "chaostao"
status: "canonical"
created: "2020-05-12"
updated: "2020-05-12"
version: 1
summary: "“ChaosTao”，其实是一个简陋的在线的算法作曲生成器。"
coverUrl: "/uploads/chaostao-200512/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-05-12"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484193&idx=1&sn=e9c98c2368e18b89ad6dfe81945189cd&chksm=e9f531b0de82b8a6cd809c164508820c37b5d6febf1346f95e959682867632a6107c997080f0"
useDocUrl: false
---

**“ChaosTao”**，其实是一个简陋的在线的算法作曲生成器。  
它根据**Chaos**算法实时生成Midi序列。

Chaos算法：

<img src="/uploads/chaostao-200512/img_001.webp" alt="" loading="lazy" />

**“ChaosTao”**是用**WebPd**开发，打开网页就能使用。  
https://floatbug.com/chaostao  
文末“阅读原文”可访问，推荐用手机自带浏览器打开。  
如果手动敲入链接，开头必须是http**s**，浏览器安全性要求，其实也是我网站自动跳https有时不太灵……

WebPd是**PureData**的Web版，作者停更了几年，今年居然又复活续更了？！  
https://github.com/sebpiq/WebPd

只要打开**“ChaosTao”**页面，同时再随便开一个能收Midi的合成器，就可以尽情玩耍了！  
（其实暂时就Chaos这一个算法，还是写死的……） 

**但视频还是很新鲜哒！**

**先来回顾一下2012年的PureData + Unity + Garage版本：**

我发现 小 时 候 做的demo，土是土，但细节还挺用心，情节小有起伏。  
因为不会剪辑，经常一镜到底...

**电脑端**打开“ChaosTao”网页，搭配**GarageBand**：

**手机端**打开“ChaosTao”网页，再随便搜了一个Midi合成器“FluidSynth MIDI”：

ps：手机版的视频是用Android录的。

iOS端可以打开“ChaosTao”网页，并能听由浏览器内置Audio模块合成的声音。  
但是iOS的浏览器不怎么支持WebMidi，因为跟Chrome有仇。

iOS store里有一个App “Web MIDI”，似乎是封装了一个浏览器，并且像是能把Midi通过蓝牙转发出去，然而我并没有发送成功。

<img src="/uploads/chaostao-200512/img_002.webp" alt="" loading="lazy" />

看到手机端，想到BugOSC，那能不能用小程序来实现呢？

答案是 不 能 😄。  
微信官方目前没有支持Midi的计划（抠鼻屎表情）。

**下面是干货时间**，碍于面子点进来的朋友们可以直接滑去文章底部点击**在看**和**广告**了，感谢您的耐心支持，还请以后继续来哟！

“ChaosTao”是个很老的项目，随着Chrome和WebAudio协议的发展，当前的Chrome浏览器已经不允许程序直接控制用户的Midi设备了，需要做一些permission相关的request。

昨天我把它更新了一下，并且录了两段演示视频。  
为什么是昨天？因为昨天不知道写什么好……

“ChaosTao”发展捡屎：

* 2011年有一篇介绍Chaos算法并用PureData和MaxMSP实现的文章。
* 2012年我碰瓷此文章，用PureData生成了一段“音乐”。https://soundcloud.com/avantcontra/chaostao001
* 2015年偶然参加Google的WebAudio开发大赛，抖了个激灵，把2012年的PureData版通过WebPd移植成网页版就交了差，好像还有个名次...  
  当然我的移植也不会全水，毕竟2015年的WebPd功能有限，一些PureData里现成的组件WebPd不支持，还是自己开发了一丢丢。
* 2020年昨天，更新了一下……

初始版本是PureData实现，直接看原始文章就很好，也有MaxMSP版：

http://algorithmiccomposer.com/2011/08/chaos-in-max-and-puredata.html

algorithmiccomposer.com 是一个伟大的算法作曲博客，里面有AI大爆发之前经常用到的多种算法作曲讲解，并且有PureData、MaxMSP、SuperCollider等多种实现。

这些算法的思路，跟现在用magenta等AI作曲lib是不太一样的。  
可以跟我这一阵做的generative visual做下类比：

* 以前用程序“**直接**”编程，得到的视觉或声音，会直接反应作者的编程和创作思路。
* 现在启用了AI，是一个“**间接**”的过程，作者创造和训练的对象是AI，而最后由AI自己去创作作品。

没有高低，没有所谓“AI”更先进，根据作品特点，选择适合的方式就好。

“ChaosTao” 我在2015年当时就已开源，如果你对WebPd、WebAudio、WebMidi感兴趣，不妨一看。  
https://github.com/avantcontra/chaostao   
（大概是我有屎以来唯一一次用jquery写的程序，因为当时拖延症拖到了比赛最后提交日期的下午，只好拼拼凑凑😄）

如果你对Chaos算法本身感兴趣，或者对PureData、MaxMSP版本感兴趣，强烈推荐看2011年的原始文章。

然 而 ，algorithmiccomposer.com 这个网站已经打不开了嘿。

好在2015年我莫名觉得这网站不太稳，把其中一些文章保存了印象笔记… 

👇贴上原文，能看到结尾的，都是真正的算法作曲人！

---

**Chaos in Max and PureData**

We’ve looked at a few algorithmic composition ideas using Chaos in OpenMusic here, today’s post applies some of these ideas algorithmic composition ideas in Max and PureData. 

Chaos theory is a field of mathematics where dynamic systems are very sensitive to initial conditions. The famous ‘butterfly effect’ states that small differences in initial conditions can lead to large variations later: the small flap of a butterfly’s wings may cause effects that later alter the path of a tornado. 

<img src="/uploads/chaostao-200512/img_001.webp" alt="" loading="lazy" />

As with our OpenMusic chaos patch, for this example of Chaos in PureData and Max we’ll use a logistic map. The Logistic Map is a simple example of a discrete dynamical system that actually names a whole family of iterative functions described by the very common Logistic Equation:

<img src="/uploads/chaostao-200512/img_003.webp" alt="" loading="lazy" />

That’s to say: to get the next value of f, multiply the current values of c, f and (1 – f). This formula involves only 1 subtraction and two multiplies but it leads to chaotic behaviour. In this graph you can see with values of c below 3 the behaviour is very predicatable. However if c > 3.75 then very small changes in f lead to very large changes later on: 

<img src="/uploads/chaostao-200512/img_004.webp" alt="" loading="lazy" />

In contrast to the many random processes which produce indeterministic behaviour, the logistic map is strictly deterministic. For instance we can iterate a given function of the logistic map n times to determine its nth value. The nth value of the function is determined solely by the initial value, f0 and the function constant c. But exactly how the nth value depends on the initial conditions is hard to predict. The next illustration parallels two processes with only minimally altered initial values. This difference leads after an initial phase of almost parallel evolution to totally different behaviour in both processes. It is almost impossible to predict the exact iteration at which the two processes take on different behaviour. 

<img src="/uploads/chaostao-200512/img_005.webp" alt="" loading="lazy" />

Development of the logistic function for f0=.95 (red) and f0=.949999999 (blue) for c=3.75 in both cases. This minimal variation of the initial value yields dramatically different sequences for n>30. 

**Chaos in Max and PureData**

We’ll use an expr object to perform our calculation and store the results in a coll. Here we set the values for c and f at 3.75 and .95 respectively. The output of the expression is our new input for f. 

<img src="/uploads/chaostao-200512/img_006.webp" alt="" loading="lazy" />

We know modify the value of fslightly and store this under a new index in our coll.

<img src="/uploads/chaostao-200512/img_007.webp" alt="" loading="lazy" />

And in Max 

<img src="/uploads/chaostao-200512/img_008.webp" alt="" loading="lazy" />

Here we read our chaotic values stored in the coll, mapping them to chromatic pitches across three octaves and output the two different variations to different MIDI channels. 

<img src="/uploads/chaostao-200512/img_009.webp" alt="" loading="lazy" />

Finally, using a major scale stored in a table 

<img src="/uploads/chaostao-200512/img_010.webp" alt="" loading="lazy" />

And in Max

<img src="/uploads/chaostao-200512/img_011.webp" alt="" loading="lazy" />

We map them to the scale

<img src="/uploads/chaostao-200512/img_012.webp" alt="" loading="lazy" />

In Max we’ve set the metro to 250 and added a 125ms delay to instrument two so that the notes are triggered alternately. 

<img src="/uploads/chaostao-200512/img_013.webp" alt="" loading="lazy" />

The contents of the pd octavessubpatch looks like this. This subpatch receives numbers between 0 and 36 in, it uses mod 7 to map to the seven degrees of the major scale and / 7 to add in our octaves.

<img src="/uploads/chaostao-200512/img_014.webp" alt="" loading="lazy" />

As Max handles integers and floats slightly differently to PureData no int object is needed here for this ‘p octaves’ subpatch. 

<img src="/uploads/chaostao-200512/img_015.webp" alt="" loading="lazy" />

You can hear some example output of the patch here:  
*(这里的example丢失了，Contra注)*

There are many more chaotic functions to explore and many more ways of mapping these to create different musical output. We’ll be exploring some of these in a future algorithmic composition tutorial. Share this: 

This entry was posted in chaos, max, maxmsp, pd, puredata on August 18, 2011.

---

**实验编程情报中心（语雀知识库）**

**所有内容资源整合**，目前在内测，可以加入微信群获取内部邀请链接。

详情点击：[实验编程情报中心](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484139&idx=2&sn=56259747fe71e8fb19274c3a7c9657ea&chksm=e9f5307ade82b96cbf8a9fe51be07ebca7592c9ae8417a14ccaa71e3fd825daac4b4f124eef4&scene=21#wechat_redirect)

---

**实验编程微信群**

创意编程和交互技术等领域一直有很多优质群，关于专项技术优先推荐去这些群学习。

实验编程微信群倾向于：

* 讨论本公众号内容。尤其计算艺术Computational Art，生成艺术Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如直播答疑、线上workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/chaostao-200512/img_016.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

**实验编程****知识星球**

在知识星球你将持续获取大部分系列的源代码以及无限次答疑。  
更多内容，请刨公众号菜单：**关于问答-知识星球**。

<img src="/uploads/chaostao-200512/img_017.webp" alt="" loading="lazy" />

---

**实验编程视频号**

视频号里放一些未在公众号公开的视频demo、制作花絮等。

<img src="/uploads/chaostao-200512/img_018.webp" alt="" loading="lazy" />

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
