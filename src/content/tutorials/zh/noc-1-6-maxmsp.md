---
id: "tutorial-noc-1-6-maxmsp-zh"
concept_id: "noc-1-6-maxmsp"
type: "tutorial"
slug: "noc-1-6-maxmsp"
title: "Nature of Code 1.6 加速度效果 MaxMSP实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 16

related_terms:
  - "nature-of-code"
  - "vector-math"
  - "creative-coding"

tags:
  - "nature-of-code"
  - "vector-math"
  - "maxmsp"

status: "canonical"
created: "2020-07-02"
updated: "2020-07-02"
version: 1

aliases:
  - "Nature of Code 1.6 加速度效果 MaxMSP实现"

summary: "NoC 1.5节 Acceleration Vector，即加速度效果。"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/pad010-noc-bc2b48f1a382bf66ec9b234703b71811.jpg"
author: "Contra"
publishedAt: "2020-07-02"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.6-maxmsp"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">Nature of Code 1.1 向量 MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp.html">Nature of Code 1.2 向量相加 MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.3-maxmsp.html">Nature of Code 1.3 向量乘法和随机 MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.5-maxmsp.html">Nature of Code 1.5 单位向量 MaxMSP实现</a></li></ul><p>本篇是实现NoC1.6，Acceleration Vector，即加速度效果。</p><p>这篇其实还涵盖其他常用技巧在里面，如何在MaxMSP里实现p5js/processing的成员变量、以及坐标变换等。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html</a></p><p><img loading="lazy" alt="pad010-noc" src="https://avantcontra.github.io/assets/images/pad010-noc-bc2b48f1a382bf66ec9b234703b71811.jpg" width="730" height="635" class="img_ev3q"></p><p><strong>NoC1.6 p5js 原版</strong>
<img loading="lazy" alt="pad010-noc-p5js" src="https://avantcontra.github.io/assets/images/pad010-noc-p5js-103f019170870f5c4cae9e11b5e1deb6.gif" width="672" height="606" class="img_ev3q"></p><p><strong>本文MaxMSP Jitter版</strong>
<img loading="lazy" alt="pad010-noc-max" src="https://avantcontra.github.io/assets/images/pad010-noc-max-71c5da2357952eecdce2b1d95f2034a8.gif" width="802" height="706" class="img_ev3q"></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=796247575&amp;bvid=BV1ZC4y187dr&amp;cid=207988685&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1ZC4y187dr" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1ZC4y187dr</a></p><p><a href="https://www.youtube.com/watch?v=0pbbGRNmBw0&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=3" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=0pbbGRNmBw0&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=3</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
