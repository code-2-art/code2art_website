---
id: "tutorial-math-trig-sine-maxmsp-zh"
concept_id: "math-trig-sine-maxmsp"
type: "tutorial"
slug: "math-trig-sine-maxmsp"
title: "MaxMSP三角函数可视化"
lang: "zh"

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
  - "MaxMSP三角函数可视化"

summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
difficulty: "intermediate"

tools:
  - "maxmsp"

coverUrl: "https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif"
author: "Contra"
publishedAt: "2019-07-04"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp"
---
<p>【编程德鲁伊】系列是我的<strong>横向编程</strong>练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。</p><hr><p><strong>编程德鲁伊 - 数学篇 - 三角函数可视化 MaxMSP实现</strong></p><p><img loading="lazy" alt="trig-max-visualization" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><hr><p>本着不给自己挖坑的原则，先找个（看上去）简单弱小的，就从<del>那位拿葱的大婶</del>初中数学三角函数开始吧。</p><p><img loading="lazy" alt="挑个简单的..." src="https://avantcontra.github.io/assets/images/cong-ff793f12ae3950ce235fd018c459b1d4.png" width="1558" height="832" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="三角函数定义">三角函数定义</h2><blockquote><p>三角函数（英语：Trigonometric functions）是数学中常见的一类关于角度的函数。三角函数将直角三角形的内角和它的两个边的比值相关联，也可以等价地用与单位圆有关的各种线段的长度来定义。三角函数在研究三角形和圆等几何形状的性质时有重要作用，也是<strong>研究周期性现象的基础数学工具</strong>。</p><p>常见的三角函数包括<strong>正弦函数（sin）、余弦函数（cos）和正切函数（tan)</strong>。</p><p>—— 维基百科  </p></blockquote><p>注意<strong>加黑</strong>的周期性，声音和可视化编程大部分与此有关。</p><br>用单位圆定义三角函数：<p><img loading="lazy" alt="用单位圆定义三角函数" src="https://avantcontra.github.io/assets/images/Trig_functions_on_unit_circle_zh-e0d25a529ebd8caaddf0d884f893a63f.png" width="608" height="560" class="img_ev3q"></p><br>直角坐标系sin(x)和cos(x)函数图像：<p></p><br>合起来了解下：<p><img loading="lazy" alt="单位圆三角函数" src="https://avantcontra.github.io/assets/images/unit-trig-1-dfc4862451dd2fa4f2e23a9dd680ac30.gif" width="330" height="324" class="img_ev3q"></p><p>至此好像也没什么可说的，反正笔记不是教程，任性就是胡编。</p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="三角函数的maxmsp实现">三角函数的MaxMSP实现</h2><p>Max里跟三角函数有关的功能很多，可以说整个MSP都以此为基础。
但本次练习用的是Max Jitter来可视化三角函数，并没有用到MSP。</p><p><em>Max里有很多功能子集，其中最著名的就是跟声音相关的MSP，跟图形图像相关的是Jitter。
现在其实官方名称就叫<strong>Max</strong>，只是<strong>MaxMSP</strong>这个早期名称太有代表性了，文章标题也用MaxMSP来改善下SEO。</em></p><p>起先感觉挺简单一玩意儿，磕磕绊绊几个小时，Max真的是学如滴水忘如泉涌。。。拿葱的大婶也不是好惹的。</p><p>实现后的Patch大约长下面这样:​</p><p><img loading="lazy" alt="max-screenshot" src="https://avantcontra.github.io/assets/images/max-screenshot-7c038266829a6d2c759f9000956c352a.png" width="1429" height="1238" class="img_ev3q"></p><p>一些Max常用片段参考了非常棒的视频教程系列：Amazing Max/Msp Tutorial
<a href="https://www.youtube.com/watch?v=HN8nQ_KtG6k" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=HN8nQ_KtG6k</a></p><p>大体思路是用<code>jit.gen</code>去操作<code>jit.matrix</code>，三角函数逻辑都写在<code>jit.gen</code>里，然后把最后变换后的<code>matrix</code>用<code>jit.mesh</code>画出来。
总之，要把大象装冰箱，分三步就可以，开门、装！、关门。</p><p>效果：</p><p><img loading="lazy" alt="trig-max-visualization" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
