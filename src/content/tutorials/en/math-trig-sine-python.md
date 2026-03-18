---
id: "tutorial-math-trig-sine-python-en"
concept_id: "math-trig-sine-python"
type: "tutorial"
slug: "math-trig-sine-python"
title: "Python Trigonometric Function Visualization"
lang: "en"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 3

related_terms:
  - "trigonometric-functions"
  - "sine-wave"
  - "mathematical-visualization"

tags:
  - "trigonometry"
  - "math-visualization"
  - "python"

status: "canonical"
created: "2019-07-08"
updated: "2019-07-08"
version: 1

aliases:
  - "Python Trigonometric Function Visualization"

summary: "The [Coding Druid] series is my cross-platform programming practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages."
difficulty: "intermediate"

tools:
  - "python"

coverUrl: "https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif"
author: "Contra"
publishedAt: "2019-07-08"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-python"
---
<p>The [Coding Druid] series is my <strong>cross-platform programming</strong> practice notes. Each episode focuses on a theme (math, physics, electronics, graphics, sound...), implemented in several programming languages. Leveling up warrior, mage, healer, and rogue simultaneously — tanking, DPSing, healing, and escaping all at once.</p><hr><p><strong>Coding Druid - Math Chapter - Trigonometric Function Visualization:
Python Implementation</strong>
<img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif" width="676" height="397" class="img_ev3q"></p><hr><p>In the previous two sections, we visualized trigonometric functions (sine and unit circle) using MaxMSP and JavaScript:</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">[Coding Druid - Math Chapter] MaxMSP Trigonometric Function Visualization</a></em></p><br><p><img loading="lazy" alt="sine-js-croped.gif" src="https://avantcontra.github.io/assets/images/sine-js-croped-9ce583fb4591a2686254328e375d9328.gif" width="1200" height="347" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">[Coding Druid - Math Chapter] JavaScript (React) Trigonometric Function Visualization</a></em></p><br><p>This time we'll implement it in Python.</p><br><p>Python also has many ways to draw graphics. Fortunately, I'm not very familiar with most of them — being a Python newcomer means less choice paralysis than the JavaScript version.</p><p>With the goal of getting results quickly, I directly Googled "python data visualization lib" and among the results, sorted by GitHub stars, found the tried-and-true <a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">Matplotlib</a>. And just like that, the decision was made.</p><p><img loading="lazy" src="https://matplotlib.org/_static/logo2.png" alt="Matplotlib logo" class="img_ev3q"></p><p><strong>Matplotlib Installation</strong>
Considering future practice topics, I chose <a href="https://www.anaconda.com" target="_blank" rel="noopener noreferrer">Anaconda</a>'s all-in-one installation, which includes Matplotlib and a bunch of scientific computing and data analysis libraries.</p><p><img loading="lazy" alt="Anaconda" src="https://avantcontra.github.io/assets/images/anaconda-distro-579fa3f38327b46b4df6139fbf2628c2.png" width="600" height="270" class="img_ev3q"></p><p>Since I've been working from different locations recently with different computers, I set up a remote development environment (VSCode Remote is amazing!). Code is deployed and runs on an Azure server, while I use a netbook for editing and viewing results. So I chose the Linux version for the server.</p><p><img loading="lazy" alt="Anaconda Python 3.0" src="https://avantcontra.github.io/assets/images/Anaconda-python3.0-68f7d87463ca1f0376d7c63a8af650c4.png" width="1922" height="682" class="img_ev3q"></p><p><strong>Note</strong>: Choose the Python 3.x version on the left, since Matplotlib 3.0+ only supports Python 3.</p><blockquote><p>Matplotlib 3.0 is Python 3 only.</p><p>For Python 2 support, Matplotlib 2.2.x will be continued as a LTS release and updated with bugfixes until January 1, 2020.</p></blockquote><p>After installing Matplotlib, we can start coding.</p><p>(Actually, after writing a few lines, I found that viewing graphical output remotely wasn't very convenient, so I also installed <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a> to write and view results directly in the browser.)</p><p>I also installed ffmpeg to convert Matplotlib animations to mp4.
ffmpeg was also installed via Anaconda — gut feeling says fewer pitfalls this way.
<code>conda install -c conda-forge ffmpeg</code></p><p>With Matplotlib, the Sine function animation code is actually just a few lines. Most of the code is actually for coordinate configuration, drawing helper lines, etc.</p><p>Code shown below:</p><p><img loading="lazy" alt="sine python script" src="https://avantcontra.github.io/assets/images/sine-py-carbon-0e19b1a766b72fd10a3647f838c9aa33.png" width="1484" height="1974" class="img_ev3q"></p><p>Basically following tutorials and reference articles — when using this kind of library, most of the thinking focuses on the math formula logic itself.</p><p>Here's a good reference article:
<a href="https://towardsdatascience.com/animations-with-matplotlib-d96375c5442c" target="_blank" rel="noopener noreferrer">Animations with Matplotlib</a></p><p><strong>Final result</strong>:</p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif" width="676" height="397" class="img_ev3q"></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>The code for this and most of the [Coding Druid] series is open-sourced here:
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
