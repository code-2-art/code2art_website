---
id: "tutorial-noc-1-6-maxmsp-en"
concept_id: "noc-1-6-maxmsp"
type: "tutorial"
slug: "noc-1-6-maxmsp"
title: "Nature of Code 1.6 Acceleration — MaxMSP Implementation"
lang: "en"

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
  - "Nature of Code 1.6 Acceleration — MaxMSP Implementation"

summary: "NoC 1.6 Acceleration Vector — MaxMSP Implementation"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/pad010-noc-bc2b48f1a382bf66ec9b234703b71811.jpg"
author: "Contra"
publishedAt: "2020-07-02"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.6-maxmsp"
---
<ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-maxmsp.html">Nature of Code 1.1 Vectors — MaxMSP Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-maxmsp.html">Nature of Code 1.2 Vector Addition — MaxMSP Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.3-maxmsp.html">Nature of Code 1.3 Vector Multiplication and Randomness — MaxMSP Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.5-maxmsp.html">Nature of Code 1.5 Unit Vector — MaxMSP Implementation</a></li></ul><p>This article implements NoC 1.6 — Acceleration Vector.</p><p>This section also covers other useful techniques, such as implementing p5.js/Processing member variables in MaxMSP, as well as coordinate transformations.</p><p>Nature of Code section URL:
<a href="https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html</a></p><p><img loading="lazy" alt="pad010-noc" src="https://avantcontra.github.io/assets/images/pad010-noc-bc2b48f1a382bf66ec9b234703b71811.jpg" width="730" height="635" class="img_ev3q"></p><p><strong>NoC 1.6 p5.js original</strong>
<img loading="lazy" alt="pad010-noc-p5js" src="https://avantcontra.github.io/assets/images/pad010-noc-p5js-103f019170870f5c4cae9e11b5e1deb6.gif" width="672" height="606" class="img_ev3q"></p><p><strong>MaxMSP Jitter version (this article)</strong>
<img loading="lazy" alt="pad010-noc-max" src="https://avantcontra.github.io/assets/images/pad010-noc-max-71c5da2357952eecdce2b1d95f2034a8.gif" width="802" height="706" class="img_ev3q"></p><p><strong>Full creation process video:</strong></p><p><em>(Source code is included in the video — just pause to see it.)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=796247575&amp;bvid=BV1ZC4y187dr&amp;cid=207988685&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1ZC4y187dr" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1ZC4y187dr</a></p><p><a href="https://www.youtube.com/watch?v=0pbbGRNmBw0&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=3" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=0pbbGRNmBw0&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=3</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The full creation process is included in the video.
For source files, join the code2art Intelligence Center.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
