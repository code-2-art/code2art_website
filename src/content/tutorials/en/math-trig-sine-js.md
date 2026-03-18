---
id: "tutorial-math-trig-sine-js-en"
concept_id: "math-trig-sine-js"
type: "tutorial"
slug: "math-trig-sine-js"
title: "JavaScript (React) Trigonometric Function Visualization"
lang: "en"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 2

related_terms:
  - "trigonometric-functions"
  - "sine-wave"
  - "mathematical-visualization"

tags:
  - "trigonometry"
  - "math-visualization"
  - "javascript"
  - "react"

status: "canonical"
created: "2019-07-06"
updated: "2019-07-06"
version: 1

aliases:
  - "JavaScript (React) Trigonometric Function Visualization"

summary: "The [Coding Druid] series is my cross-platform programming practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages."
difficulty: "intermediate"

tools:
  - "javascript"
  - "react"

coverUrl: "https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif"
author: "Contra"
publishedAt: "2019-07-06"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-js"
---
<p>The [Coding Druid] series is my <strong>cross-platform programming</strong> practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages. Leveling up warrior, mage, healer, and rogue simultaneously — tanking, DPSing, healing, and escaping all at once.</p><hr><p><strong>Coding Druid - Math Chapter - Trigonometric Function Visualization: JavaScript (React) Implementation</strong></p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif" width="1885" height="796" class="img_ev3q"></p><hr><p>In the previous section, we visualized trigonometric functions (sine and unit circle) using MaxMSP, which looked like this:</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">[Coding Druid - Math Chapter] MaxMSP Trigonometric Function Visualization</a></em></p><br><p>This time we'll implement it in JavaScript.</p><br><p>There are many ways to draw function curves with JavaScript in a browser:</p><ul><li>Draw directly on Canvas or WebGL</li><li>d3js</li><li>p5js</li><li>pixijs</li><li>SVG + CSS</li><li>And many more</li></ul><p>While suffering from choice paralysis, I stumbled upon an example using <a href="https://codepen.io/HunorMarton/pen/ggQGqQ" target="_blank" rel="noopener noreferrer">React + SVG</a>:</p><p><img loading="lazy" alt="React + SVG example" src="https://avantcontra.github.io/assets/images/WX20190706-174205@2x-21e40423c94aa03801c9229589227b7b.png" width="1924" height="466" class="img_ev3q"></p><p>Using SVG to describe the sine function in a declarative way:</p><p><img loading="lazy" alt="svg" src="https://avantcontra.github.io/assets/images/svg-87b67591fa4fde82fb0ac4aa679c8916.png" width="1446" height="294" class="img_ev3q"></p><p>Then leveraging React State's update mechanism to bind and update the <code>degree</code> parameter along the x-axis:</p><p><img loading="lazy" alt="reactstate" src="https://avantcontra.github.io/assets/images/reactstate-100a547a465c25f52c333b047a00a7bb.png" width="1146" height="974" class="img_ev3q"></p><p>This way, when the degree changes, the sine function dances along — clean and beautiful!</p><br><p>I've rarely used <strong>SVG</strong> in past projects, and when I did, it was just as a bitmap. This was a good opportunity to learn more — thanks to the <a href="https://codepen.io/HunorMarton/pen/ggQGqQ" target="_blank" rel="noopener noreferrer">author</a> of this example!</p><p>As for <strong>React</strong>, it's been my go-to frontend library for years.
But I hadn't looked closely at new features like <strong>Hooks</strong> in React 16+, so this was another learning opportunity. <strong>I refactored the React State parts of the above example using React Hooks</strong>.</p><p>The <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">official Hooks documentation</a> is excellent — just follow along and refactor the <code>Sinus</code> component:</p><p><img loading="lazy" alt="reacthooks" src="https://avantcontra.github.io/assets/images/reacthooks-940bd8f86ff6a2162c14c8105f1c66a9.png" width="1408" height="974" class="img_ev3q"></p><p>Hooks are simple yet powerful, but watch out for performance issues since <code>useEffect()</code> runs after the first render and every update.
On this topic, the <a href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects" target="_blank" rel="noopener noreferrer">official docs provide some tips</a>.</p><p><strong>Final result</strong>:</p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif" width="1885" height="796" class="img_ev3q">
I tweaked the colors slightly to distinguish it from the original example.</p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
