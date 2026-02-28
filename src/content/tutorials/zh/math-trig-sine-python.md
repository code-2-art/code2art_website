---
id: "tutorial-math-trig-sine-python-zh"
concept_id: "math-trig-sine-python"
type: "tutorial"
slug: "math-trig-sine-python"
title: "Python三角函数可视化"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 3

related_terms:
  - "trigonometric-functions"
  - "python"

tags:
  - "python"
  - "trigonometric-functions"

status: "canonical"
created: "2019-07-08"
updated: "2019-07-08"
version: 1

aliases:
  - "Python三角函数可视化"

summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
difficulty: "intermediate"

tools:
  - "python"

coverUrl: "https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif"
author: "Contra"
publishedAt: "2019-07-08"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-python"
---
<p>【编程德鲁伊】系列是我的<strong>横向编程</strong>练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。</p><hr><p><strong>编程德鲁伊 - 数学篇 - 三角函数可视化
Python 实现</strong>
<img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif" width="676" height="397" class="img_ev3q"></p><hr><p>前两节用MaxMSP和JavaScript做了三角函数（正弦和单位圆）的可视化，长这样：</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">【编程德鲁伊 - 数学篇】MaxMSP三角函数可视化</a></em></p><br><p><img loading="lazy" alt="sine-js-croped.gif" src="https://avantcontra.github.io/assets/images/sine-js-croped-9ce583fb4591a2686254328e375d9328.gif" width="1200" height="347" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">【编程德鲁伊 - 数学篇】JavaScript (React) 三角函数可视化</a></em></p><br><p>这次用Python来实现。</p><br><p>Python绘制图形的方式同样很多，好在我都不太熟，Python新手，所以没有上一篇JavaScript选型那么纠结。</p><p>以快速出活为目标，直接Google “python data visualization lib” 这几个关键词，得到的lib里，按github里star数排序，发现了老而坚挺的<a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">Matplotlib</a>，于是就这么愉快的决定了。</p><p><img loading="lazy" src="https://matplotlib.org/_static/logo2.png" alt="Matplotlib logo" class="img_ev3q"></p><p><strong>Matplotlib 安装</strong>
考虑到后续其他练习主题，选择<a href="https://www.anaconda.com" target="_blank" rel="noopener noreferrer">Anaconda</a>提供的全家桶安装方式，包含了Matplotlib在内的一堆科学计算数据分析相关的lib。</p><p><img loading="lazy" alt="Anaconda" src="https://avantcontra.github.io/assets/images/anaconda-distro-579fa3f38327b46b4df6139fbf2628c2.png" width="600" height="270" class="img_ev3q"></p><p>由于最近办公地点不固定，工作电脑也不固定，部署了远程开发环境（VSCode Remote真香！），代码部署、运行在Azure服务器上，手头用一台上网本编辑代码和查看效果。因此选择服务器环境对应的Linux版本。</p><p><img loading="lazy" alt="Anaconda Python 3.0" src="https://avantcontra.github.io/assets/images/Anaconda-python3.0-68f7d87463ca1f0376d7c63a8af650c4.png" width="1922" height="682" class="img_ev3q"></p><p><strong>注意</strong>，这里优先选择左边Python 3.x的版本，因为Matplotlib 3.0以上版本，只支持Python 3。</p><blockquote><p>Matplotlib 3.0 is Python 3 only.</p><p>For Python 2 support, Matplotlib 2.2.x will be continued as a LTS release and updated with bugfixes until January 1, 2020.</p></blockquote><p>Matplotlib装好后就可以开始搬砖了。</p><p>（实际上写了几句后发现，远程开发Python，实时查看图形效果仍不太方便，我还又安装了<a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a>，直接在浏览器里边写边运行边看效果。）</p><p>另外还装了ffmpeg，把Matplotlib运算后得到的动画，转存成mp4。
ffmpeg，也用Anaconda来安装，第六感觉得这样可能坑少一点。。
<code>conda install -c conda-forge ffmpeg</code></p><p>有了Matplotlib，Sine函数动画部分，其实也没几句代码，大部分占篇幅的，实际上是坐标配置、画一些辅助线等功能。</p><p>代码如下图所示：</p><p><img loading="lazy" alt="sine python script" src="https://avantcontra.github.io/assets/images/sine-py-carbon-0e19b1a766b72fd10a3647f838c9aa33.png" width="1484" height="1974" class="img_ev3q"></p><p>基本是按教程和一些参考文章照猫画虎来的，用这种库的特点，大部分思路集中在数学公式本身的算法逻辑上。</p><p>附上一份不错的参考文章：
<a href="https://towardsdatascience.com/animations-with-matplotlib-d96375c5442c" target="_blank" rel="noopener noreferrer">Animations with Matplotlib</a></p><p><strong>最终效果</strong>:</p><p><img loading="lazy" alt="sine-visualization-reactjs" src="https://avantcontra.github.io/assets/images/sine-py-effect-1-be3a2c6c88fdde1c7ad10cdc4ec1b43e.gif" width="676" height="397" class="img_ev3q"></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
