---
id: "tutorial-noc-1-2-maxmsp-zh"
concept_id: "noc-1-2-maxmsp"
type: "tutorial"
slug: "noc-1-2-maxmsp"
title: "Nature of Code 1.2 向量相加 MaxMSP实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 12

related_terms:
  - "nature-of-code"
  - "vector-math"
  - "creative-coding"

tags:
  - "nature-of-code"
  - "vector-math"
  - "maxmsp"

status: "canonical"
created: "2020-06-11"
updated: "2020-06-11"
version: 1

aliases:
  - "Nature of Code 1.2 向量相加 MaxMSP实现"

summary: "NoC 1.2节 Vector Addition，向量相加，MaxMSP实现"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/noc-1.2-1ba7f88cae9e428544a2fc026d885fe8.jpg"
author: "Contra"
publishedAt: "2020-06-11"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp"
---
<p>点击查看：<a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">背景介绍及NoC第1.1节的MaxMSP实现</a></p><p>本篇是实现NoC1.2，Vector Addition，即最基本的向量相加运算。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html</a></p><p><img loading="lazy" alt="noc-1.2" src="https://avantcontra.github.io/assets/images/noc-1.2-1ba7f88cae9e428544a2fc026d885fe8.jpg" width="778" height="667" class="img_ev3q"></p><p><strong>NoC1.2 p5js 原版</strong>
<img loading="lazy" alt="pad007-p5js" src="https://avantcontra.github.io/assets/images/pad007-p5js-1ede565279304176444979f21bf2d5bc.gif" width="948" height="654" class="img_ev3q"></p><p><strong>本文MaxMSP Jitter版</strong>
<img loading="lazy" alt="pad007max" src="https://avantcontra.github.io/assets/images/pad007-max-22fd29bb92ae93bd6fb1c7ac533c1c44.gif" width="839" height="650" class="img_ev3q"></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=925952434&amp;bvid=BV1UT4y1E7tL&amp;cid=201256769&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1UT4y1E7tL" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1UT4y1E7tL</a></p><p><a href="https://www.youtube.com/watch?v=DJJAKqXxVW4&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=7" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=DJJAKqXxVW4&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=7</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
