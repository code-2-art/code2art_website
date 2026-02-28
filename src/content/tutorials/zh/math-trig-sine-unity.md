---
id: "tutorial-math-trig-sine-unity-zh"
concept_id: "math-trig-sine-unity"
type: "tutorial"
slug: "math-trig-sine-unity"
title: "Unity三角函数可视化"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "coding-druid-math"
  order: 4

related_terms:
  - "trigonometric-functions"
  - "unity"

tags:
  - "unity"
  - "trigonometric-functions"

status: "canonical"
created: "2019-07-10"
updated: "2019-07-10"
version: 1

aliases:
  - "Unity三角函数可视化"

summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
difficulty: "intermediate"

tools:
  - "unity"

coverUrl: "https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif"
author: "Contra"
publishedAt: "2019-07-10"
docUrl: "https://avantcontra.github.io/coding-druid/math-trig-sine-unity"
---
<p>【编程德鲁伊】系列是我的<strong>横向编程</strong>练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。</p><hr><p><strong>编程德鲁伊 - 数学篇 - 三角函数可视化
Unity 实现</strong></p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><hr><p>前三节用MaxMSP、JavaScript、Python做了三角函数（正弦和单位圆）的可视化，长这样：</p><p><img loading="lazy" alt="trig-max-visualization.gif" src="https://avantcontra.github.io/assets/images/trig-max-visualization-c7a43d02e63bfe383b456d100a7e8e1a.gif" width="918" height="250" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-maxmsp.html">【编程德鲁伊 - 数学篇】MaxMSP三角函数可视化</a></em></p><br><p><img loading="lazy" alt="sine-js-croped.gif" src="https://avantcontra.github.io/assets/images/sine-js-croped-9ce583fb4591a2686254328e375d9328.gif" width="1200" height="347" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-js.html">【编程德鲁伊 - 数学篇】JavaScript (React) 三角函数可视化</a></em></p><br><p><img loading="lazy" alt="sine python effect" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p><em><a href="https://avantcontra.github.io/coding-druid/math-trig-sine-python.html">【编程德鲁伊 - 数学篇】Python 三角函数可视化</a></em></p><br><p>这次用Unity来实现。</p><br><p>上一篇Python版，用到了数据可视化Library Matplotlib。
Unity就不用这种库了，直接按三角函数算法去画。</p><p>先让一个点随着Sine函数曲线运动起来。</p><p>场景里放一个Sphere球体，让它的<code>position.x</code>匀速递增，<code>position.y = sin(position.x)</code>即可。</p><blockquote><p>Vector3 posSine = sphere.localPosition;
posSine.x += speed;
posSine.y = Mathf.Sin(posSine.x);
sphere.localPosition = posSine;</p></blockquote><p><img loading="lazy" alt="sine-unity-sineball" src="https://avantcontra.github.io/assets/images/sine-unity-sineball-228493f3499cddc5871581810c2f7a9d.gif" width="972" height="354" class="img_ev3q"></p><p>接下来再画一个球体沿着单位圆运动的轨迹。</p><p>注意这里，设置单位圆的半径为1，设置Sine的周期长度为2Pi，即如之前几篇所示，单位圆与Sine共用一个坐标系。</p><p>画圆的公式:</p><blockquote><p>球体的x = cos(t);
球体的y = sin(t);</p></blockquote><p>这里的t，实际上就是上一步Sine的x。
然后再把圆心往左移，让单位圆转动的起点，与Sine的起点一致。</p><blockquote><p>Vector3 posCircle = posSine;
posCircle.x = Mathf.Cos(posSine.x) - 1f;
posCircle.y = Mathf.Sin(posSine.x);
circleDot.localPosition = posCircle;</p></blockquote><p><img loading="lazy" alt="sine-unity-circleball" src="https://avantcontra.github.io/assets/images/sine-unity-circleball-4347b77c94fe7b4555750a94d731015b.gif" width="790" height="354" class="img_ev3q"></p><p>合在一起：</p><p><img loading="lazy" alt="sine-unity-sinecircleball" src="https://avantcontra.github.io/assets/images/sine-unity-sinecircleball-f60235ffaf12ab4f1b0ec47b5dff0c8c.gif" width="1069" height="354" class="img_ev3q"></p><p>前几篇，还要手动画上曲线的路径轨迹，这样看着更清晰，如Python的：</p><p><img loading="lazy" alt="sine python effect" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p>到Unity这里，打算偷个懒，直接给两个球体加上<code>Trail Renderer</code>，自带轨迹美滋滋。</p><p><img loading="lazy" alt="sine-unity-trail0" src="https://avantcontra.github.io/assets/images/sine-unity-trail0-4f615048c7a78d7a94db2ca2fa09b55b.gif" width="1069" height="354" class="img_ev3q"></p><p>默认轨迹有点美艳的粗壮...</p><p>改一下吧，Assets Store里搜<code>trail</code>，找到一个免费的<a href="https://assetstore.unity.com/packages/vfx/particles/spells/particle-ribbon-42866" target="_blank" rel="noopener noreferrer">不错的轨迹效果</a>：</p><p><img loading="lazy" src="https://assetstore-cdn-china-v1.unitychina.cn/key-image/6669ea2e-1c95-42fc-b061-51ceb257d996.jpg" alt="unity-trail" class="img_ev3q"></p><p>安装后有不少效果，挑选一个有眼缘的材质:</p><p><img loading="lazy" alt="sine-unity-trail-material" src="https://avantcontra.github.io/assets/images/sine-unity-trail-material-bbd21e6a974a07b304b3b5177fe9b9d4.png" width="880" height="281" class="img_ev3q"></p><p>把材质附到Trail上。</p><p><strong>最终效果</strong>:</p><p><img loading="lazy" alt="sine-unity-croped" src="https://avantcontra.github.io/assets/images/sine-unity-croped-2cec944b31b5cb2fa9c5936e778c5a51.gif" width="768" height="320" class="img_ev3q"></p><p><em>注，发布的源代码里，我是将<code>Trail Renderer</code>添加在一个空的<code>GameObject</code>上，跟球体一起运动，没有把轨迹直接添加在球体上，没什么特别的原因，小生（老夫）Unity新手练手而已。</em></p><p>参考文章：<a href="https://catlikecoding.com/unity/tutorials/basics/building-a-graph/" target="_blank" rel="noopener noreferrer">Building a Graph Visualizing Math</a></p><hr><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
