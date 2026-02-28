---
id: "tutorial-noc-1-3-maxmsp-zh"
concept_id: "noc-1-3-maxmsp"
type: "tutorial"
slug: "noc-1-3-maxmsp"
title: "Nature of Code 1.3 向量乘法和随机 MaxMSP实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 13

related_terms:
  - "nature-of-code"
  - "vector-math"
  - "creative-coding"

tags:
  - "nature-of-code"
  - "vector-math"
  - "maxmsp"

status: "canonical"
created: "2020-06-13"
updated: "2020-06-13"
version: 1

aliases:
  - "Nature of Code 1.3 向量乘法和随机 MaxMSP实现"

summary: "NoC 1.3节 Vector Multiply，实际上先讲的是向量和标量的相乘，另外还讲了p5js的一个Random2D语法糖，MaxMSP实现"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg"
author: "Contra"
publishedAt: "2020-06-13"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.3-maxmsp"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">背景介绍及NoC第1.1节向量的MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp.html">Nature of Code 1.2 向量相加 MaxMSP实现</a></li></ul><p>本篇是实现NoC1.3，Vector Multiply，实际上先讲的是向量和标量的相乘，另外还讲了p5js的一个Random2D语法糖。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html</a></p><p><img loading="lazy" alt="noc-1.3" src="https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg" width="718" height="639" class="img_ev3q"></p><p><strong>NoC1.3 p5js 原版</strong>
<img loading="lazy" alt="pad008-p5js" src="https://avantcontra.github.io/assets/images/pad008-p5js-6778ea66a75ac7567b840f6f097b831e.gif" width="844" height="538" class="img_ev3q"></p><p><strong>本文MaxMSP Jitter版</strong>
<img loading="lazy" alt="pad008-max-small" src="https://avantcontra.github.io/assets/images/pad008-max-small-5fa01ac5645758485e8949dead52c273.gif" width="480" height="499" class="img_ev3q"></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=201022962&amp;bvid=BV1rz411i78a&amp;cid=201924166&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1rz411i78a" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1rz411i78a</a></p><p><a href="https://www.youtube.com/watch?v=idjtQwhMOms&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=5" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=idjtQwhMOms&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=5</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
