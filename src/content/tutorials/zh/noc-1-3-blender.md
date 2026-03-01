---
id: "tutorial-noc-1-3-blender-zh"
concept_id: "noc-1-3-blender"
type: "tutorial"
slug: "noc-1-3-blender"
title: "Nature of Code 1.3 向量乘法和随机 Blender实现"
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
  - "blender"
  - "sverchok"

status: "canonical"
created: "2020-06-15"
updated: "2020-06-15"
version: 1

aliases:
  - "Nature of Code 1.3 向量乘法和随机 Blender实现"

summary: "NoC 1.3节 Vector Multiply，向量和标量的相乘及随机，Blender实现"
difficulty: "intermediate"

tools:
  - "blender"
  - "sverchok"

coverUrl: "https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg"
author: "Contra"
publishedAt: "2020-06-15"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.3-blender"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender.html">Nature of Code 1.1 向量 Blender实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-blender.html">Nature of Code 1.2 向量相加 Blender实现</a></li></ul><p>本篇是实现NoC1.3，Vector Multiply，实际上先讲的是向量和标量的相乘，另外还讲了p5js的一个Random2D语法糖。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html</a></p><p><img loading="lazy" alt="noc-1.3" src="https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg" width="718" height="639" class="img_ev3q"></p><p><strong>NoC1.3 p5js 原版</strong>
<img loading="lazy" alt="pad008-p5js" src="https://avantcontra.github.io/assets/images/pad008-p5js-6778ea66a75ac7567b840f6f097b831e.gif" width="844" height="538" class="img_ev3q"></p><p><strong>本文Blender</strong>
<img loading="lazy" alt="non-003-sun2" src="https://avantcontra.github.io/assets/images/non-003-sun2-478f20cb546c6a5120f59fdb590497d1.jpg" width="1762" height="1109" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-work" src="https://avantcontra.github.io/assets/images/non-003-work-d9501cff04ca30dc33a1f2fb30524cdd.jpg" width="2569" height="1399" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-ball-2" src="https://avantcontra.github.io/assets/images/non-003-ball-2-025e88f47e95d555bd83987cdb4f109d.jpg" width="1773" height="1116" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-new-future" src="https://avantcontra.github.io/assets/images/non-003-new-future-7487032144013dca7d3a3fccdd9e570e.jpg" width="1404" height="790" class="img_ev3q"></p><p>插件下载：
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>插件详细文档：
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=456033461&amp;bvid=BV1v5411W7Fm&amp;cid=202296309&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1v5411W7Fm" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1v5411W7Fm</a></p><p><a href="https://www.youtube.com/watch?v=6eFYyWcThJQ&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=2" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=6eFYyWcThJQ&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=2</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
