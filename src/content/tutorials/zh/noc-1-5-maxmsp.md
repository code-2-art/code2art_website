---
id: "tutorial-noc-1-5-maxmsp-zh"
concept_id: "noc-1-5-maxmsp"
type: "tutorial"
slug: "noc-1-5-maxmsp"
title: "Nature of Code 1.5 单位向量 MaxMSP实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 15

related_terms:
  - "nature-of-code"
  - "vector-math"
  - "creative-coding"

tags:
  - "nature-of-code"
  - "vector-math"
  - "maxmsp"

status: "canonical"
created: "2020-06-22"
updated: "2020-06-22"
version: 1

aliases:
  - "Nature of Code 1.5 单位向量 MaxMSP实现"

summary: "NoC 1.5节 Unit Vector (Normalize)，单位向量/归一化，MaxMSP实现"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg"
author: "Contra"
publishedAt: "2020-06-22"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.5-maxmsp"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">Nature of Code 1.1 向量 MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp.html">Nature of Code 1.2 向量相加 MaxMSP实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.3-maxmsp.html">Nature of Code 1.3 向量乘法和随机 MaxMSP实现</a></li></ul><p>本篇是实现NoC1.5，Unit Vector (Normalize)，单位向量/归一化。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html</a></p><p><img loading="lazy" alt="pad009-shfm" src="https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg" width="640" height="638" class="img_ev3q"></p><p><strong>NoC1.5 p5js 原版</strong>
<img loading="lazy" alt="pad009-p5" src="https://avantcontra.github.io/assets/images/pad009-p5-1dbe97b9851e1496d3040e5c4f2d1dfc.gif" width="829" height="681" class="img_ev3q"></p><p><strong>本文MaxMSP Jitter版</strong>
<img loading="lazy" alt="pad009-max" src="https://avantcontra.github.io/assets/images/pad009-max-1a8223e0012aae8054c8461e0102c6dc.gif" width="829" height="681" class="img_ev3q"></p><p><strong>结合上一篇jit.gl.sketch参数稍作调整</strong>
<img loading="lazy" alt="pad009-max-2" src="https://avantcontra.github.io/assets/images/pad009-max-2-46306daf54971393d44b088d69e28f19.gif" width="911" height="841" class="img_ev3q"></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=286115667&amp;bvid=BV1wf4y117bs&amp;cid=204798323&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1wf4y117bs" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1wf4y117bs</a></p><p><a href="https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
