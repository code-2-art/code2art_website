---
id: "tutorial-math-fourier-series-unity-en"
concept_id: "math-fourier-series-unity"
type: "tutorial"
slug: "math-fourier-series-unity"
title: "Unity Fourier Series Visualization"
lang: "en"

domains:
  - "computational-basics"
  - "signal-processing"

series:
  id: "coding-druid-math"
  order: 6

related_terms:
  - "fourier-series"
  - "epicycles"
  - "mathematical-visualization"

tags:
  - "fourier-series"
  - "math-visualization"
  - "unity"

status: "canonical"
created: "2019-11-03"
updated: "2019-11-03"
version: 1

aliases:
  - "Unity Fourier Series Visualization"

summary: "The [Coding Druid] series is my cross-platform programming practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages."
difficulty: "intermediate"

tools:
  - "unity"

coverUrl: "https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif"
author: "Contra"
publishedAt: "2019-11-03"
docUrl: "https://avantcontra.github.io/coding-druid/math-fourier-series-unity"
---
<p>The [Coding Druid] series is my <strong>cross-platform programming</strong> practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages. Leveling up warrior, mage, healer, and rogue simultaneously — tanking, DPSing, healing, and escaping all at once.</p><hr><p><strong>Coding Druid - Math Chapter - Fourier Series Visualization:
Unity Implementation</strong></p><p><img loading="lazy" alt="fs-unity" src="https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif" width="1133" height="448" class="img_ev3q"></p><hr><p>The previous chapter covered trigonometric function visualization, implemented in <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">MaxMSP</a>, <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">JavaScript (React)</a>, <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-python.html">Python</a>, and <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">Unity</a>:</p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><p>This chapter revisits the terror once dominated by Fourier.
When discussing Fourier transform/Fourier analysis, it's usually divided into two parts: <strong>Fourier Series</strong> and <strong>Continuous Fourier Transform</strong>. This chapter focuses on <strong>Fourier Series</strong>.</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="math-basics">Math Basics</h3><p>In mathematics, a Fourier series can be seen as a periodic function composed of a set of sinusoidal curves, combined through weighted summation. (<a href="https://en.wikipedia.org/wiki/Fourier_series" target="_blank" rel="noopener noreferrer">Wikipedia</a>)</p><p>For example, a periodic square wave can be decomposed into multiple sine waves. The more sine waves, the closer the composite curve approximates a square wave:</p><p><img loading="lazy" alt="Fourier_series_and_transform" src="https://avantcontra.github.io/assets/images/Fourier_series_and_transform-6d20481f3e07205a81be85100bfc8e02.gif" width="300" height="240" class="img_ev3q"></p><p>For more detailed explanations and formula derivations, see the previous section: <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">JavaScript (React) Fourier Series Visualization</a>.</p><p>Previous section's result:</p><p><img loading="lazy" alt="fs-js-5" src="https://avantcontra.github.io/assets/images/fs-js-5-834f90695343cd366b48395ac8e6ecbd.gif" width="1006" height="528" class="img_ev3q"></p><br><p>This section uses <strong>Unity</strong>.</p><p>I previously wrote a <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">Unity Trigonometric Function Visualization</a>. Building on that code, just change the drawing formula from trigonometric functions to the Fourier series formula:</p><p><img loading="lazy" alt="code" src="https://avantcontra.github.io/assets/images/carbon-29c4231fea6862aaadb609d03a398532.png" width="1020" height="414" class="img_ev3q"></p><p>Full code available below.</p><p><strong>Final result</strong>:</p><p><img loading="lazy" alt="fs-unity" src="https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif" width="1133" height="448" class="img_ev3q"></p><br><h4 class="anchor anchorWithStickyNavbar_LWe7" id="references">References</h4><ul><li><p><a href="https://en.wikipedia.org/wiki/Fourier_series" target="_blank" rel="noopener noreferrer">Wikipedia</a></p></li><li><p><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">[Coding Druid - Math Chapter] Unity Trigonometric Function Visualization</a></p></li><li><p><a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">[Coding Druid - Math Chapter] JavaScript (React) Fourier Series Visualization</a></p></li><li><p><a href="https://catlikecoding.com/unity/tutorials/basics/building-a-graph/" target="_blank" rel="noopener noreferrer">Building a Graph Visualizing Math</a></p></li></ul><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
