---
id: "tutorial-math-fourier-series-blender-3d-en"
concept_id: "math-fourier-series-blender-3d"
type: "tutorial"
slug: "math-fourier-series-blender-3d"
title: "Blender Fourier Drawing"
lang: "en"

domains:
  - "computational-basics"
  - "signal-processing"

series:
  id: "coding-druid-math"
  order: 8

related_terms:
  - "fourier-series"
  - "epicycles"
  - "mathematical-visualization"

tags:
  - "fourier-series"
  - "math-visualization"
  - "blender"
  - "python"

status: "canonical"
created: "2019-12-11"
updated: "2019-12-11"
version: 1

aliases:
  - "Blender Fourier Drawing"

summary: "Learn Fourier drawing today, become Hatsune Miku tomorrow."
difficulty: "intermediate"

tools:
  - "blender"
  - "python"

coverUrl: "https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif"
author: "Contra"
publishedAt: "2019-12-11"
docUrl: "https://avantcontra.github.io/coding-druid/math-fourier-series-blender-3d"
---
<p><strong>Result of this article</strong>:</p><p><img loading="lazy" alt="fs-blender-3d-all-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif" width="800" height="401" class="img_ev3q"></p><hr><p>Preface:
In the [Coding Druid] Fourier Series Visualization chapter, we practiced the basic visualization of Fourier series principles, demonstrating how a periodic square wave can be decomposed into a series of sine waves:</p><p><img loading="lazy" alt="fs-js-5" src="https://avantcontra.github.io/assets/images/fs-js-5-834f90695343cd366b48395ac8e6ecbd.gif" width="1006" height="528" class="img_ev3q"></p><p>Above is the <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">JavaScript (React)</a> version. There's also a <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-blender.html">Python (Blender)</a> version and a <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-unity.html">Unity</a> version.</p><p>This time, let's apply what we've learned and try the popular "Drawing with Fourier Series" experiment, with as simple and intuitive an explanation of the principle as possible.</p><hr><h4 class="anchor anchorWithStickyNavbar_LWe7" id="a-hopefully-simple-explanation">A (Hopefully) Simple and Intuitive Explanation</h4><p>Previous visualizations were all in 2D space. For example, a sine wave:
<img loading="lazy" alt="py-sine" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p>Square wave (via Fourier series):
<img loading="lazy" alt="fs-blender-short" src="https://avantcontra.github.io/assets/images/fs-blender-short-a859f26cd3de0e1894428e90c69b42ec.gif" width="1196" height="625" class="img_ev3q"></p><p>The relationship between the epicycles on the left and the sine/square wave on the right:</p><ul><li>Left side: a moving point <strong>rotating over time t</strong> on one or more combined circles (epicycles);</li><li>Right side: <strong>time t is mapped to the x-axis</strong>, while the y-value of the moving point remains unchanged.</li></ul><p>In other words, <strong>converting from time domain to spatial domain gives you a sine curve from a circle, or a square wave from a combination of circles</strong>.</p><p>Let's also draw the trajectories of the moving points on both sides of the square wave visualization:</p><p><img loading="lazy" alt="fs-blender-square" src="https://avantcontra.github.io/assets/images/fs-blender-square-5dc5f4b0f8cd7c62e45c20b67b4b9287.gif" width="1015" height="360" class="img_ev3q"></p><p><img loading="lazy" alt="fs-blender-epicycle-square" src="https://avantcontra.github.io/assets/images/fs-blender-epicycle-square-83575726d0c70167e84585469b051b73.png" width="1026" height="572" class="img_ev3q"></p><br><p>The epicycle trajectory on the left and the square wave trajectory on the right are actually just <strong>different representations of the same moving point in different spaces</strong>.</p><p>Eureka!!!</p><p>To make it even clearer, let's switch from 2D to 3D space, mapping time t to the z-axis instead of the x-axis:</p><p><img loading="lazy" alt="fs-blender-3d-sine-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-sine-2-606791a03067ce216cf0f65395bcd8a2.gif" width="892" height="615" class="img_ev3q"></p><p>Viewed from the front, it's still a circle. But rotating to a side view in 3D space reveals it's actually a sine curve.</p><p>Same for the square wave:
<img loading="lazy" alt="fs-blender-3d-square-1" src="https://avantcontra.github.io/assets/images/fs-blender-3d-square-1-b811e2e44e73dae8ff6a9084d845f903.gif" width="892" height="615" class="img_ev3q"></p><p>The orange trajectory from the front, viewed from the side, is the square wave curve.</p><p>Eureka again!!!</p><br><p>Furthermore, based on Fourier series principles, to get the square wave (orange), we need to find the series of sine waves (golden) that compose it:</p><p>From another angle, to get the final trajectory (orange), we need to find the series of epicycles (golden) that compose it:</p><p><img loading="lazy" alt="fs-blender-3d-items-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-items-2-64600d5038d2a995ceb11f5d35cccca2.png" width="791" height="436" class="img_ev3q"></p><br><p>And this orange trajectory can be any shape — meaning whatever figure you want to draw, as long as you find the right set of epicycles following Fourier series principles, you can draw it!</p><p>Golden pig:</p><p><img loading="lazy" alt="fs-blender-3d-pig" src="https://avantcontra.github.io/assets/images/fs-blender-3d-pig-d5ca3725b25d99ec7279fada168a72cb.png" width="539" height="443" class="img_ev3q"></p><p>Fourier himself:</p><p><img loading="lazy" alt="fs-blender-3d-fourier" src="https://avantcontra.github.io/assets/images/fs-blender-3d-fourier-ba66aa8ae7e866d49d82dccc8d6fa7e1.png" width="830" height="778" class="img_ev3q"></p><br><p>How about that — is this an easier way to understand the principle behind Fourier drawing?</p><hr><p>The next challenge is <strong>how to find the corresponding set of epicycles for "any" pattern</strong>.</p><p>Mathematically, this means finding the Fourier coefficients (a and b) for each term in the Fourier series.</p><p>There are many methods for finding Fourier coefficients — integration, Fourier transform, etc.
I haven't fully reviewed the detailed derivations yet, so my answer to "how to put an elephant in a fridge" is still: 1. Open the door; 2. Put the elephant in; 3. Close the door.</p><p>Simply apply the Fourier transform to the pattern trajectory to get the Fourier coefficients.</p><p>In computer programs, all data is discrete, so what's actually used is the Discrete Fourier Transform.</p><p>For this topic, there are many reference resources, especially web frontend/JavaScript/p5.js implementations, listed below.</p><p>The figures and animations in this article were made with Blender + Python:</p><p><img loading="lazy" alt="blender-fs-draw" src="https://avantcontra.github.io/assets/images/feature-b23156f1fb7ab3d26df7b078108ec286.png" width="1710" height="963" class="img_ev3q"></p><p>Wait — not done yet.</p><p>As you can tell from the color scheme of the Fourier portrait, I originally planned to draw Miku (Hatsune Miku):</p><p><img loading="lazy" alt="img_MIKU_us" src="https://avantcontra.github.io/assets/images/img_MIKU_us-99f9a92801aa2fcf3cb2afbb3e3a920d.png" width="462" height="710" class="img_ev3q"></p><p>However, this is where "need meets reality" — the harder part of Fourier drawing is actually finding a suitable contour trajectory, not every image works easily. That's why I put "any" in quotes earlier.</p><p>Mathematically, a function can only be expressed as a Fourier series under certain conditions.
Finding the optimal contour is far more complex than drawing the trajectory itself.
References from others are listed below.</p><p>With the effort invested in this article, I could only manage simple contour lines, so Miku was replaced by Mr. Fourier himself 🙂:</p><p><img loading="lazy" alt="fourier" src="https://avantcontra.github.io/assets/images/fourier-3172d877402867188dc8247b168db8a4.png" width="751" height="649" class="img_ev3q"></p><p><strong>Final result (three viewpoints)</strong>:</p><p><img loading="lazy" alt="fs-blender-3d-all-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif" width="800" height="401" class="img_ev3q"></p><br><hr><h4 class="anchor anchorWithStickyNavbar_LWe7" id="references">References</h4><ul><li><p><a href="https://avantcontra.github.io/coding-druid/math-fourier-series-blender.html">Learn Python Creative Coding with Blender: Fourier Series Visualization</a>
Introductory notes on running Python in Blender.</p></li><li><p><a href="http://www.jezzamon.com/fourier/index.html" target="_blank" rel="noopener noreferrer">An Interactive Introduction to Fourier Transforms</a>
An excellent frontend JavaScript implementation of Fourier drawing.</p></li><li><p><a href="https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing" target="_blank" rel="noopener noreferrer">Drawing with Fourier Transform and Epicycles</a>
Shiffman's explanation and p5.js implementation.</p></li><li><p><a href="https://www.bilibili.com/video/av62763042" target="_blank" rel="noopener noreferrer">But what is a Fourier series? From heat flow to circle drawings | DE4</a>
3Blue1Brown's brilliant explanation, official Bilibili channel.</p></li><li><p><a href="https://www.bilibili.com/video/av49238862/" target="_blank" rel="noopener noreferrer">Epicycles, complex Fourier series and Homer Simpson's orbit</a>
Another excellent explanation, on par with 3B1B!</p></li><li><p><a href="https://zhuanlan.zhihu.com/p/72632360" target="_blank" rel="noopener noreferrer">Step-by-step Guide to Drawing with Fourier Transform</a>
Focuses more on obtaining the optimal contour.</p></li></ul><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
