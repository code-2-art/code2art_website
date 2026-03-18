---
id: "tutorial-noc-1-5-blender-en"
concept_id: "noc-1-5-blender"
type: "tutorial"
slug: "noc-1-5-blender"
title: "Nature of Code 1.5 Unit Vector — Blender Implementation"
lang: "en"

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
  - "blender"
  - "sverchok"

status: "canonical"
created: "2020-09-06"
updated: "2020-09-06"
version: 1

aliases:
  - "Nature of Code 1.5 Unit Vector — Blender Implementation"

summary: "NoC 1.5 Unit Vector / Normalization — Blender Implementation"
difficulty: "intermediate"

tools:
  - "blender"
  - "sverchok"

coverUrl: "https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg"
author: "Contra"
publishedAt: "2020-09-06"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.5-blender"
---
<p>This series implements Nature of Code specifically using Blender's node-based approach.</p><p>Using a Blender plugin called Sverchok — a powerful node-based plugin. No Python code needed, just "connect the dots" like MaxMSP and TouchDesigner to implement program logic.</p><p>Previous sections:</p><ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender.html">Nature of Code 1.1 Vectors — Blender Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-blender.html">Nature of Code 1.2 Vector Addition — Blender Implementation</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.3-blender.html">Nature of Code 1.3 Vector Multiplication and Randomness — Blender Implementation</a></li></ul><p>This article implements NoC 1.5 in Blender — Unit Vector (Normalize).</p><p>Nature of Code section URL:
<a href="https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html</a></p><p><img loading="lazy" alt="pad009-shfm" src="https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg" width="640" height="638" class="img_ev3q"></p><p><strong>NoC 1.5 p5.js original</strong>
<img loading="lazy" alt="pad009-p5" src="https://avantcontra.github.io/assets/images/pad009-p5-1dbe97b9851e1496d3040e5c4f2d1dfc.gif" width="829" height="681" class="img_ev3q"></p><p><strong><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.5-maxmsp.html">MaxMSP Jitter version</a></strong>
<img loading="lazy" alt="pad009-max" src="https://avantcontra.github.io/assets/images/pad009-max-1a8223e0012aae8054c8461e0102c6dc.gif" width="829" height="681" class="img_ev3q"></p><p><strong>NoC 1.5, Blender version (this article)</strong>
<img loading="lazy" alt="non-004" src="https://avantcontra.github.io/assets/images/non-004-fde58e01db1df7e3c033b90cc2ef3d16.gif" width="1014" height="1000" class="img_ev3q"></p><p>Plugin download:
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>Plugin documentation:
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>Full creation process video:</strong></p><p><em>(Source code is included in the video — just pause to see it.)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=842040688&amp;bvid=BV1m54y1C7Bc&amp;cid=232982056&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1m54y1C7Bc" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1m54y1C7Bc</a></p><p><a href="https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4</a></p><br><p><strong>Tips</strong></p><ul><li>Open the source file and run the Python script;</li><li>Set the rotation center (Line start point) position, defaults to (0, 0);</li><li>Press "F3", search for "Simple Modal View3D Operator" and press Enter;</li><li>The orthogonally transformed Line follows the mouse.</li></ul><p>The full creation process is included in the video. Combined with the mouse-following article, follow along patiently to implement it.</p><p><strong>References</strong></p><ul><li>Nature of Code section URL:
<a href="https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html</a></li><li>Blender Python script for mouse-following effect</li><li>Mouse-following reference:
<a href="https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator" target="_blank" rel="noopener noreferrer">https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator</a></li></ul><p><strong>Talk is cheap. Show me the code!</strong></p><p>The full creation process is included in the video.
For source files, join the code2art Intelligence Center.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
