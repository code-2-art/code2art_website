---
id: "tutorial-noc-1-2-blender-zh"
concept_id: "noc-1-2-blender"
type: "tutorial"
slug: "noc-1-2-blender"
title: "Nature of Code 1.2 向量相加 Blender实现"
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
  - "blender"
  - "sverchok"

status: "canonical"
created: "2020-06-12"
updated: "2020-06-12"
version: 1

aliases:
  - "Nature of Code 1.2 向量相加 Blender实现"

summary: "NoC 1.2节 Vector Addition，向量相加，Blender实现"
difficulty: "intermediate"

tools:
  - "blender"
  - "sverchok"

coverUrl: "https://avantcontra.github.io/assets/images/noc-1.2-1ba7f88cae9e428544a2fc026d885fe8.jpg"
author: "Contra"
publishedAt: "2020-06-12"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.2-blender"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender.html">Nature of Code 1.1 向量 Blender实现</a></li></ul><p>本篇是用Blender实现NoC1.2，Vector Addition，即最基本的向量相加运算。</p><p>具体就是给一个图案（Walker）的Position Vector（位置向量），加上另一个Velocity Vector（速度向量），使Walker动起来。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html</a></p><p><img loading="lazy" alt="noc-1.2" src="https://avantcontra.github.io/assets/images/noc-1.2-1ba7f88cae9e428544a2fc026d885fe8.jpg" width="778" height="667" class="img_ev3q"></p><p><strong>NoC1.2 p5js 原版</strong>
<img loading="lazy" alt="pad007-p5js" src="https://avantcontra.github.io/assets/images/pad007-p5js-1ede565279304176444979f21bf2d5bc.gif" width="948" height="654" class="img_ev3q"></p><p><strong>NoC1.2，Vector Addition，本文Blender版</strong>
<img loading="lazy" alt="non002" src="https://avantcontra.github.io/assets/images/non002-274e2ecfaf1d57e96d1fdd8fffa15628.gif" width="1061" height="832" class="img_ev3q"></p><p>插件下载：
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>插件详细文档：
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>顺便看一下<a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">MaxMSP Jitter版</a></strong>
<img loading="lazy" alt="pad007max" src="https://avantcontra.github.io/assets/images/pad007-max-22fd29bb92ae93bd6fb1c7ac533c1c44.gif" width="839" height="650" class="img_ev3q"></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=200890708&amp;bvid=BV1cz411i7XN&amp;cid=201251318&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1cz411i7XN" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1cz411i7XN</a></p><p><a href="https://www.youtube.com/watch?v=nmCASsZHlJ8&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=3" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=nmCASsZHlJ8&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=3</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
