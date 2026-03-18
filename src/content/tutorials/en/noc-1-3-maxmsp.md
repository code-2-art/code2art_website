---
id: "tutorial-noc-1-3-maxmsp-en"
concept_id: "noc-1-3-maxmsp"
type: "tutorial"
slug: "noc-1-3-maxmsp"
title: "Nature of Code 1.3 Vector Multiplication and Randomness — MaxMSP Implementation"
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
  - "maxmsp"

status: "canonical"
created: "2020-06-13"
updated: "2020-06-13"
version: 1

aliases:
  - "Nature of Code 1.3 Vector Multiplication and Randomness — MaxMSP Implementation"

summary: "NoC 1.3 Vector Multiplication and Randomness — MaxMSP Implementation"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg"
author: "Contra"
publishedAt: "2020-06-13"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.3-maxmsp"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">Background and NoC Section 1.1 Vectors — MaxMSP Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp.html">Nature of Code 1.2 Vector Addition — MaxMSP Implementation</a></li></ul><p>This article implements NoC 1.3, Vector Multiply — which actually starts with multiplying a vector by a scalar, and also covers p5.js's Random2D syntactic sugar.</p><p>Nature of Code section URL:
<a href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html</a></p><p><img loading="lazy" alt="noc-1.3" src="https://avantcontra.github.io/assets/images/noc1.3-875129807fbc7b9844552e4cb1fc8508.jpg" width="718" height="639" class="img_ev3q"></p><p><strong>NoC 1.3 p5.js original</strong>
<img loading="lazy" alt="pad008-p5js" src="https://avantcontra.github.io/assets/images/pad008-p5js-6778ea66a75ac7567b840f6f097b831e.gif" width="844" height="538" class="img_ev3q"></p><p><strong>MaxMSP Jitter version (this article)</strong>
<img loading="lazy" alt="pad008-max-small" src="https://avantcontra.github.io/assets/images/pad008-max-small-5fa01ac5645758485e8949dead52c273.gif" width="480" height="499" class="img_ev3q"></p><p><strong>Full creation process video:</strong></p><p><em>(Source code is included in the video — just pause to see it.)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=201022962&amp;bvid=BV1rz411i78a&amp;cid=201924166&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1rz411i78a" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1rz411i78a</a></p><p><a href="https://www.youtube.com/watch?v=idjtQwhMOms&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=5" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=idjtQwhMOms&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=5</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The full creation process is included in the video.
For source files, join the code2art Intelligence Center.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
