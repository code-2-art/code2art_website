---
id: "tutorial-math-trig-sine-js-zh"
concept_id: "math-trig-sine-js"
type: "tutorial"
slug: "math-trig-sine-js"
title: "JavaScript(React)三角函数可视化"
lang: "zh"

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
  - "JavaScript(React)三角函数可视化"

summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
difficulty: "intermediate"

tools:
  - "javascript"
  - "react"

coverUrl: "https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif"
author: "Contra"
publishedAt: "2019-07-06"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-js"
---
<p>【编程德鲁伊】系列是我的<strong>横向编程</strong>练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。</p><hr><p><strong>编程德鲁伊 - 数学篇 - 三角函数可视化 JavaScript (React) 实现</strong></p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif" width="1885" height="796" class="img_ev3q"></p><hr><p>上一节用MaxMSP做了三角函数（正弦和单位圆）的可视化，长这样：</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">【编程德鲁伊 - 数学篇】MaxMSP三角函数可视化</a></em></p><br><p>这次用JavaScript来实现。</p><br><p>在浏览器里用JavaScript绘制函数曲线图形的方式有很多:</p><ul><li>在Canvas或WebGL里直接画</li><li>d3js</li><li>p5js</li><li>pixijs</li><li>SVG + CSS</li><li>还有hin多</li></ul><p>当选择强迫症发作时，偶然看到了一个用<a href="https://codepen.io/HunorMarton/pen/ggQGqQ" target="_blank" rel="noopener noreferrer">React + SVG</a>来实现的例子：</p><p><img loading="lazy" alt="React + SVG example" src="https://avantcontra.github.io/assets/images/WX20190706-174205@2x-21e40423c94aa03801c9229589227b7b.png" width="1924" height="466" class="img_ev3q"></p><p>使用SVG用标记或声明的方式来描述正弦函数：</p><p><img loading="lazy" alt="svg" src="https://avantcontra.github.io/assets/images/svg-87b67591fa4fde82fb0ac4aa679c8916.png" width="1446" height="294" class="img_ev3q"></p><p>再充分利用React State的更新机制，把沿x轴的参数<code>degree</code>进行绑定和更新：</p><p><img loading="lazy" alt="reactstate" src="https://avantcontra.github.io/assets/images/reactstate-100a547a465c25f52c333b047a00a7bb.png" width="1146" height="974" class="img_ev3q"></p><p>这样当degree变化时，正弦函数也就随着扭动起来了，清晰，漂亮！</p><br><p>我过去的项目很少用到<strong>SVG</strong>，有的话也只是当位图来用。正好借此机会学习学习，感谢这个例子的<a href="https://codepen.io/HunorMarton/pen/ggQGqQ" target="_blank" rel="noopener noreferrer">作者</a>～</p><p>而<strong>React</strong>，则是我近些年在前端项目里最常用的库了。
但新版本（React 16+）中新出的<strong>Hooks</strong>等功能也一直还没仔细看，再次正好借此机会学习学习，<strong>并用React Hooks重构了上述例子中的React State相关部分</strong>。</p><p><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">Hooks官方文档</a>很棒，直接跟着读然后跟着做，重构上文<code>Sinus</code>组件如下:</p><p><img loading="lazy" alt="reacthooks" src="https://avantcontra.github.io/assets/images/reacthooks-940bd8f86ff6a2162c14c8105f1c66a9.png" width="1408" height="974" class="img_ev3q"></p><p>Hooks用起来简单而强大，但是要留意下性能问题，因为<code>useEffect()</code>在第一次渲染及每次update后，都会执行。
关于这个话题，<a href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects" target="_blank" rel="noopener noreferrer">官方提供了一些tips</a>。</p><p><strong>最终效果</strong>:</p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-visualization-reactjs-3cacce0dd148dd434025da3c9ccc981d.gif" width="1885" height="796" class="img_ev3q">
稍微改了改颜色，跟原例子区分一下便于观看。</p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
