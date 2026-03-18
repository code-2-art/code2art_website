---
id: "tutorial-math-trig-sine-unity-en"
concept_id: "math-trig-sine-unity"
type: "tutorial"
slug: "math-trig-sine-unity"
title: "Unity Trigonometric Function Visualization"
lang: "en"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 4

related_terms:
  - "trigonometric-functions"
  - "sine-wave"
  - "mathematical-visualization"

tags:
  - "trigonometry"
  - "math-visualization"
  - "unity"

status: "canonical"
created: "2019-07-10"
updated: "2019-07-10"
version: 1

aliases:
  - "Unity Trigonometric Function Visualization"

summary: "The [Coding Druid] series is my cross-platform programming practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages."
difficulty: "intermediate"

tools:
  - "unity"

coverUrl: "https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif"
author: "Contra"
publishedAt: "2019-07-10"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-unity"
---
<p>The [Coding Druid] series is my <strong>cross-platform programming</strong> practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages. Leveling up warrior, mage, healer, and rogue simultaneously — tanking, DPSing, healing, and escaping all at once.</p><hr><p><strong>Coding Druid - Math Chapter - Trigonometric Function Visualization:
Unity Implementation</strong></p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><hr><p>In the previous three sections, we visualized trigonometric functions (sine and unit circle) using MaxMSP, JavaScript, and Python:</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">[Coding Druid - Math Chapter] MaxMSP Trigonometric Function Visualization</a></em></p><br><p><img loading="lazy" alt="sine-js-croped.gif" src="https://avantcontra.github.io/assets/images/sine-js-croped-9ce583fb4591a2686254328e375d9328.gif" width="1200" height="347" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">[Coding Druid - Math Chapter] JavaScript (React) Trigonometric Function Visualization</a></em></p><br><p><img loading="lazy" alt="sine python effect" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-python.html">[Coding Druid - Math Chapter] Python Trigonometric Function Visualization</a></em></p><br><p>This time we'll implement it in Unity.</p><br><p>The previous Python version used the data visualization library Matplotlib.
For Unity, we won't use such a library — we'll draw directly using trig function algorithms.</p><p>First, let's get a dot moving along a Sine function curve.</p><p>Place a Sphere in the scene, increment its <code>position.x</code> uniformly, and set <code>position.y = sin(position.x)</code>.</p><blockquote><p>Vector3 posSine = sphere.localPosition;
posSine.x += speed;
posSine.y = Mathf.Sin(posSine.x);
sphere.localPosition = posSine;</p></blockquote><p><img loading="lazy" alt="sine-unity-sineball" src="https://avantcontra.github.io/assets/images/sine-unity-sineball-228493f3499cddc5871581810c2f7a9d.gif" width="972" height="354" class="img_ev3q"></p><p>Next, draw a sphere moving along the unit circle.</p><p>Note: set the unit circle radius to 1 and the Sine period length to 2Pi, so the unit circle and Sine share the same coordinate system.</p><p>Circle drawing formula:</p><blockquote><p>sphere's x = cos(t);
sphere's y = sin(t);</p></blockquote><p>Here, t is actually the Sine's x from the previous step.
Then shift the circle center to the left so the unit circle's starting point aligns with Sine's starting point.</p><blockquote><p>Vector3 posCircle = posSine;
posCircle.x = Mathf.Cos(posSine.x) - 1f;
posCircle.y = Mathf.Sin(posSine.x);
circleDot.localPosition = posCircle;</p></blockquote><p><img loading="lazy" alt="sine-unity-circleball" src="https://avantcontra.github.io/assets/images/sine-unity-circleball-4347b77c94fe7b4555750a94d731015b.gif" width="790" height="354" class="img_ev3q"></p><p>Combined together:</p><p><img loading="lazy" alt="sine-unity-sinecircleball" src="https://avantcontra.github.io/assets/images/sine-unity-sinecircleball-f60235ffaf12ab4f1b0ec47b5dff0c8c.gif" width="1069" height="354" class="img_ev3q"></p><p>In previous sections, we manually drew the path trajectories for clarity, like in the Python version:</p><p><img loading="lazy" alt="sine python effect" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p>In Unity, let's take a shortcut — just add <code>Trail Renderer</code> to both spheres for automatic trails.</p><p><img loading="lazy" alt="sine-unity-trail0" src="https://avantcontra.github.io/assets/images/sine-unity-trail0-4f615048c7a78d7a94db2ca2fa09b55b.gif" width="1069" height="354" class="img_ev3q"></p><p>The default trail is a bit... gloriously chunky...</p><p>Let's fix that. Search for <code>trail</code> in the Assets Store and find a nice free <a href="https://assetstore.unity.com/packages/vfx/particles/spells/particle-ribbon-42866" target="_blank" rel="noopener noreferrer">trail effect</a>:</p><p><img loading="lazy" src="https://assetstore-cdn-china-v1.unitychina.cn/key-image/6669ea2e-1c95-42fc-b061-51ceb257d996.jpg" alt="unity-trail" class="img_ev3q"></p><p>After installation, pick a material that catches your eye:</p><p><img loading="lazy" alt="sine-unity-trail-material" src="https://avantcontra.github.io/assets/images/sine-unity-trail-material-bbd21e6a974a07b304b3b5177fe9b9d4.png" width="880" height="281" class="img_ev3q"></p><p>Attach the material to the Trail.</p><p><strong>Final result</strong>:</p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><p><em>Note: In the published source code, I added the <code>Trail Renderer</code> to an empty <code>GameObject</code> that moves with the sphere, rather than directly on the sphere. No special reason — just a Unity newcomer doing practice.</em></p><p>Reference: <a href="https://catlikecoding.com/unity/tutorials/basics/building-a-graph/" target="_blank" rel="noopener noreferrer">Building a Graph Visualizing Math</a></p><hr><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
