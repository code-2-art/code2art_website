---
id: "tutorial-math-fourier-series-unity-zh"
concept_id: "math-fourier-series-unity"
type: "tutorial"
slug: "math-fourier-series-unity"
title: "Unity傅里叶级数可视化"
lang: "zh"

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
  - "Unity傅里叶级数可视化"

summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
difficulty: "intermediate"

tools:
  - "unity"

coverUrl: "https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif"
author: "Contra"
publishedAt: "2019-11-03"
docUrl: "https://avantcontra.github.io/coding-druid/math-fourier-series-unity"
---
<p>【编程德鲁伊】系列是我的<strong>横向编程</strong>练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。</p><hr><p><strong>编程德鲁伊 - 数学篇 - 傅里叶级数可视化
Unity 实现</strong></p><p><img loading="lazy" alt="fs-unity" src="https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif" width="1133" height="448" class="img_ev3q"></p><hr><p>上一章做了三角函数可视化，分别用 <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">MaxMSP</a>, <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">JavaScript (React)</a>, <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-python.html">Python</a>, 以及 <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">Unity</a>:</p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><p>这一章重拾被傅里叶支配的恐惧。
谈到傅里叶变换、傅里叶分析，通常会分为两部分内容来讲，<strong>傅里叶级数</strong>和<strong>连续傅里叶变换</strong>。本章集中在<strong>傅里叶级数</strong>。</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="数学基础">数学基础</h3><p>在数学中，傅里叶级数可以看作一组正弦曲线组成的周期函数，由加权求和组合而成。(<a href="https://en.wikipedia.org/wiki/Fourier_series" target="_blank" rel="noopener noreferrer">wikipedia</a>)</p><p>举个例子，假设有一个周期性方波，它可以分解成多个正弦波。正弦波越多，合成后的曲线越接近方波：</p><p><img loading="lazy" alt="Fourier_series_and_transform" src="https://avantcontra.github.io/assets/images/Fourier_series_and_transform-6d20481f3e07205a81be85100bfc8e02.gif" width="300" height="240" class="img_ev3q"></p><p>更多图文解释及公式推导，可见上一节 <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">JavaScript(React)傅里叶级数可视化</a> 。</p><p>上一节的实现效果：</p><p><img loading="lazy" alt="fs-js-5" src="https://avantcontra.github.io/assets/images/fs-js-5-834f90695343cd366b48395ac8e6ecbd.gif" width="1006" height="528" class="img_ev3q"></p><br><p>本节用 <strong>Unity</strong> 。</p><p>曾写过一篇 <a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">Unity三角函数可视化</a> ，在其代码基础上，将绘制公式由三角函数修改为下方的傅里叶级数即可：</p><p></p><p><img loading="lazy" alt="code" src="https://avantcontra.github.io/assets/images/carbon-29c4231fea6862aaadb609d03a398532.png" width="1020" height="414" class="img_ev3q"></p><p>完整代码可见后文。</p><p><strong>最终效果</strong>:</p><p><img loading="lazy" alt="fs-unity" src="https://avantcontra.github.io/assets/images/fs-unity-4.3m-d5a5ba668088e0ca7809076e9cd82f94.gif" width="1133" height="448" class="img_ev3q"></p><br><h4 class="anchor anchorWithStickyNavbar_LWe7" id="参考资源">参考资源</h4><ul><li><p><a href="https://en.wikipedia.org/wiki/Fourier_series" target="_blank" rel="noopener noreferrer">Wikipedia</a></p></li><li><p><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-unity.html">【编程德鲁伊 - 数学篇】Unity三角函数可视化</a></p></li><li><p><a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">【编程德鲁伊 - 数学篇】JavaScript(React)傅里叶级数可视化</a></p></li><li><p><a href="https://catlikecoding.com/unity/tutorials/basics/building-a-graph/" target="_blank" rel="noopener noreferrer">Building a Graph Visualizing Math</a></p></li></ul><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
