---
id: "tutorial-noc-1-3-blender-en"
concept_id: "noc-1-3-blender"
type: "tutorial"
slug: "noc-1-3-blender"
title: "Nature of Code 1.3 Vector Multiplication and Randomness — Blender Implementation"
lang: "en"

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
  - "Nature of Code 1.3 Vector Multiplication and Randomness — Blender Implementation"

summary: "NoC 1.3 Vector Multiplication and Randomness — Blender Implementation"
difficulty: "intermediate"

tools:
  - "blender"
  - "sverchok"

coverUrl: "https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg"
author: "Contra"
publishedAt: "2020-06-15"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.3-blender"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender.html">Nature of Code 1.1 Vectors — Blender Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-blender.html">Nature of Code 1.2 Vector Addition — Blender Implementation</a></li></ul><p>This article implements NoC 1.3, Vector Multiply — which actually starts with multiplying a vector by a scalar, and also covers p5.js's Random2D syntactic sugar.</p><p>Nature of Code section URL:
<a href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html</a></p><p><img loading="lazy" alt="noc-1.3" src="https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg" width="718" height="639" class="img_ev3q"></p><p><strong>NoC 1.3 p5.js original</strong>
<img loading="lazy" alt="pad008-p5js" src="https://avantcontra.github.io/assets/images/pad008-p5js-6778ea66a75ac7567b840f6f097b831e.gif" width="844" height="538" class="img_ev3q"></p><p><strong>Blender version (this article)</strong>
<img loading="lazy" alt="non-003-sun2" src="https://avantcontra.github.io/assets/images/non-003-sun2-478f20cb546c6a5120f59fdb590497d1.jpg" width="1762" height="1109" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-work" src="https://avantcontra.github.io/assets/images/non-003-work-d9501cff04ca30dc33a1f2fb30524cdd.jpg" width="2569" height="1399" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-ball-2" src="https://avantcontra.github.io/assets/images/non-003-ball-2-025e88f47e95d555bd83987cdb4f109d.jpg" width="1773" height="1116" class="img_ev3q"></p><p><img loading="lazy" alt="non-003-new-future" src="https://avantcontra.github.io/assets/images/non-003-new-future-7487032144013dca7d3a3fccdd9e570e.jpg" width="1404" height="790" class="img_ev3q"></p><p>Plugin download:
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>Plugin documentation:
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>Full creation process video:</strong></p><p><em>(Source code is included in the video — just pause to see it.)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=456033461&amp;bvid=BV1v5411W7Fm&amp;cid=202296309&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1v5411W7Fm" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1v5411W7Fm</a></p><p><a href="https://www.youtube.com/watch?v=6eFYyWcThJQ&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=2" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=6eFYyWcThJQ&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=2</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The full creation process is included in the video.
For source files, join the code2art Intelligence Center.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
