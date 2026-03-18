---
id: "tutorial-math-trig-sine-maxmsp-en"
concept_id: "math-trig-sine-maxmsp"
type: "tutorial"
slug: "math-trig-sine-maxmsp"
title: "MaxMSP Trigonometric Function Visualization"
lang: "en"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 1

related_terms:
  - "trigonometric-functions"
  - "sine-wave"
  - "mathematical-visualization"

tags:
  - "trigonometry"
  - "math-visualization"
  - "maxmsp"

status: "canonical"
created: "2019-07-04"
updated: "2019-07-04"
version: 1

aliases:
  - "MaxMSP Trigonometric Function Visualization"

summary: "The [Coding Druid] series is my cross-platform programming practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages."
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif"
author: "Contra"
publishedAt: "2019-07-04"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp"
---
<p>The [Coding Druid] series is my <strong>cross-platform programming</strong> practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages. Leveling up warrior, mage, healer, and rogue simultaneously — tanking, DPSing, healing, and escaping all at once.</p><hr><p><strong>Coding Druid - Math Chapter - Trigonometric Function Visualization: MaxMSP Implementation</strong></p><p><img loading="lazy" alt="trig-max-visualization" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><hr><p>Following the principle of not digging holes for myself, let's start with something that (looks) simple — middle school math trigonometric functions.</p><p><img loading="lazy" alt="Pick something simple..." src="https://avantcontra.github.io/assets/images/cong-ff793f12ae3950ce235fd018c459b1d4.png" width="1558" height="832" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="trigonometric-function-definition">Trigonometric Function Definition</h2><blockquote><p>Trigonometric functions are a class of functions commonly encountered in mathematics that relate to angles. They associate the interior angles of a right triangle with the ratios of its sides, and can equivalently be defined using various line segments related to the unit circle. Trigonometric functions play an important role in studying the properties of geometric shapes such as triangles and circles, and are also <strong>fundamental mathematical tools for studying periodic phenomena</strong>.</p><p>Common trigonometric functions include <strong>sine (sin), cosine (cos), and tangent (tan)</strong>.</p><p>— Wikipedia</p></blockquote><p>Note the <strong>bolded</strong> periodicity — most sound and visual programming is related to this.</p><br>Defining trigonometric functions using the unit circle:<p><img loading="lazy" alt="Defining trig functions with unit circle" src="https://avantcontra.github.io/assets/images/Trig_functions_on_unit_circle_zh-e0d25a529ebd8caaddf0d884f893a63f.png" width="608" height="560" class="img_ev3q"></p><br>Graphs of sin(x) and cos(x) in Cartesian coordinates:<p></p><br>Putting it all together:<p><img loading="lazy" alt="Unit circle trig functions" src="https://avantcontra.github.io/assets/images/unit-trig-1-dfc4862451dd2fa4f2e23a9dd680ac30.gif" width="330" height="324" class="img_ev3q"></p><p>Not much more to say here — after all, these notes aren't a textbook.</p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="maxmsp-implementation-of-trig-functions">MaxMSP Implementation of Trigonometric Functions</h2><p>There are many features related to trigonometric functions in Max — you could say the entire MSP is built on them. But this exercise uses Max Jitter to visualize trigonometric functions, without using MSP.</p><p><em>Max has many functional subsets. The most famous is MSP for audio, and Jitter for graphics and images. The official name is just <strong>Max</strong> now, but <strong>MaxMSP</strong> as the early name is so iconic that I use it in article titles for better SEO.</em></p><p>At first it seemed like a simple task, but after stumbling around for a few hours... Max really is a "learn like a drip, forget like a fountain" kind of tool.</p><p>The resulting patch looks roughly like this:</p><p><img loading="lazy" alt="max-screenshot" src="https://avantcontra.github.io/assets/images/max-screenshot-7c038266829a6d2c759f9000956c352a.png" width="1429" height="1238" class="img_ev3q"></p><p>Some common Max snippets were referenced from the excellent video tutorial series: Amazing Max/Msp Tutorial
<a href="https://www.youtube.com/watch?v=HN8nQ_KtG6k" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=HN8nQ_KtG6k</a></p><p>The general approach is to use <code>jit.gen</code> to manipulate <code>jit.matrix</code>, with all the trig function logic written in <code>jit.gen</code>, then render the final transformed <code>matrix</code> using <code>jit.mesh</code>.
In short — to put an elephant in a fridge takes three steps: open the door, stuff it in, close the door.</p><p>Result:</p><p><img loading="lazy" alt="trig-max-visualization" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
