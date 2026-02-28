---
id: "tutorial-math-fourier-series-blender-3d-zh"
concept_id: "math-fourier-series-blender-3d"
type: "tutorial"
slug: "math-fourier-series-blender-3d"
title: "🔥Blender傅里叶画画"
lang: "zh"

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
  - "🔥Blender傅里叶画画"

summary: "今天学会傅里叶画画，明天就是初音未来。"
difficulty: "intermediate"

tools:
  - "blender"
  - "python"

coverUrl: "https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif"
author: "Contra"
publishedAt: "2019-12-11"
docUrl: "https://avantcontra.github.io/coding-druid/math-fourier-series-blender-3d"
---
<p><strong>本篇效果</strong>:</p><p><img loading="lazy" alt="fs-blender-3d-all-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif" width="800" height="401" class="img_ev3q"></p><hr><p>前言：
最近在【编程德鲁伊】的【傅里叶级数可视化】章节中，练习了傅里叶级数基础原理的可视化，演示了周期方波曲线，可以分解为一系列正弦波曲线：</p><p><img loading="lazy" alt="fs-js-5" src="https://avantcontra.github.io/assets/images/fs-js-5-834f90695343cd366b48395ac8e6ecbd.gif" width="1006" height="528" class="img_ev3q"></p><p>上边是<a href="https://avantcontra.github.io/coding-druid/math-fourier-series-react.html">JavaScript (React)</a> 版，另有 <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-blender.html">Python (Blender)</a> 版、 <a href="https://avantcontra.github.io/coding-druid/math-fourier-series-unity.html">Unity</a> 版。</p><p>这次拿学到的知识做个实验，试试喜闻乐见的【用傅里叶级数画画】，并尽可能简单直观的解释一下原理。</p><hr><h4 class="anchor anchorWithStickyNavbar_LWe7" id="自认为简单直观的原理解释">自认为简单直观的原理解释</h4><p>之前练习的可视化，都是在二维空间进行，例如正弦波：
<img loading="lazy" alt="py-sine" src="https://avantcontra.github.io/assets/images/sine-py-effect-0-b0ca7aa7c18ff90040e84d9fff2098f6.gif" width="597" height="198" class="img_ev3q"></p><p>方波（通过傅里叶级数）：
<img loading="lazy" alt="fs-blender-short" src="https://avantcontra.github.io/assets/images/fs-blender-short-a859f26cd3de0e1894428e90c69b42ec.gif" width="1196" height="625" class="img_ev3q"></p><p>图中左半边的圆周（Epicycle）和右半边正弦波/方波的关系：</p><ul><li>左半边是一个运动点，在一个圆周或多个圆周组合上<strong>随着时间t转动</strong>；</li><li>右半边，是<strong>将时间t映射到横轴x轴上</strong>，纵轴仍是运动点当前的y值保持不变。</li></ul><p>也就是说，<strong>把时间域转换为空间域，就能从一个圆周得到正弦曲线，或者从一系列圆周组合，得到方波曲线</strong>。</p><p>我们把方波可视化左右两边的运动点轨迹也画出来：</p><p><img loading="lazy" alt="fs-blender-square" src="https://avantcontra.github.io/assets/images/fs-blender-square-5dc5f4b0f8cd7c62e45c20b67b4b9287.gif" width="1015" height="360" class="img_ev3q"></p><p><img loading="lazy" alt="fs-blender-epicycle-square" src="https://avantcontra.github.io/assets/images/fs-blender-epicycle-square-83575726d0c70167e84585469b051b73.png" width="1026" height="572" class="img_ev3q"></p><br><p>左半边由一系列圆周（Epicycle）组成的轨迹，与右半边的方波（Square）轨迹，其实只是<strong>同一个运动点在不同空间里的展现方式</strong>而已。</p><p>豁然开朗有没有！！！（此处插入<del>打赏</del>掌声！）</p><p>为了说的更清楚一些，接下来把空间域从二维换到三维，时间t不再映射到x轴，而是映射到z轴上：</p><p><img loading="lazy" alt="fs-blender-3d-sine-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-sine-2-606791a03067ce216cf0f65395bcd8a2.gif" width="892" height="615" class="img_ev3q"></p><p>上图从正面看过去，仍是一个圆周，而在三维空间里旋转坐标轴，从侧面看过去时，它实际上就是一个正弦曲线。</p><p>方波的也一样：
<img loading="lazy" alt="fs-blender-3d-square-1" src="https://avantcontra.github.io/assets/images/fs-blender-3d-square-1-b811e2e44e73dae8ff6a9084d845f903.gif" width="892" height="615" class="img_ev3q"></p><p>正面的橙色轨迹，转换角度，从侧面看，就是方波的曲线。</p><p>再次豁然开朗有没有！！！</p><br>进一步，根据傅里叶级数原理，为了得到方波（橙色），就要想办法得到组成方波的一系列正弦波（金黄色）： ![fs-blender-3d-items-1](./assets/fs-blender-3d-items-1.png)<br><p>换一个视角，为了得到最终的运动轨迹（橙色），就要想办法得到组成轨迹的一系列Epicycle圆周（金黄色）：</p><p><img loading="lazy" alt="fs-blender-3d-items-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-items-2-64600d5038d2a995ceb11f5d35cccca2.png" width="791" height="436" class="img_ev3q"></p><br><p>而这个橙色的运动轨迹，可以是各种形状，也就是说，无论想画什么图形，只要按照傅里叶级数的原理，找到一系列Epicycle圆周，就可以画出来了！</p><p>金猪报喜：</p><p><img loading="lazy" alt="fs-blender-3d-pig" src="https://avantcontra.github.io/assets/images/fs-blender-3d-pig-d5ca3725b25d99ec7279fada168a72cb.png" width="539" height="443" class="img_ev3q"></p><p>傅里叶本尊：</p><p><img loading="lazy" alt="fs-blender-3d-fourier" src="https://avantcontra.github.io/assets/images/fs-blender-3d-fourier-ba66aa8ae7e866d49d82dccc8d6fa7e1.png" width="830" height="778" class="img_ev3q"></p><br><p>怎么样，这样去理解傅里叶级数画画的原理，是不是容易了一些？
饿不饿，再给你煮碗面？</p><hr><p>接下来要解决的，就是<strong>如何为“任意”图案找到对应的一组Epicycle圆周</strong>的问题。</p><p>从数学上讲，就是求傅里叶级数里每个子项对应的傅里叶系数（a和b）：</p><p></p><p>各项系数a和b都找到后，合起来就可以得到f(x)。</p><p>求傅里叶系数的方法有很多，积分、傅里叶变换等。
详细的原理推导，我还没有<del>复习</del>重修，所以对于如何把大象装冰箱的回答，仍然是：</p><p>1.打开冰箱门；2.把大象装进去；3.关门。</p><p>直接对图案轨迹进行傅里叶变换，即可得到傅里叶系数。</p><p>而在计算机程序里，所有的数据都是离散的，所以实际上程序里用的是离散傅里叶变换。</p><p>关于这个环节，参考资源较多，尤其是用Web前端/JavaScript/p5.js做的不少，列在后面。</p><p>本文的配图和动画，是用 Blender + Python 完成：</p><p><img loading="lazy" alt="blender-fs-draw" src="https://avantcontra.github.io/assets/images/feature-b23156f1fb7ab3d26df7b078108ec286.png" width="1710" height="963" class="img_ev3q"></p><p>等等老乡，还没完。</p><p>从上图里傅里叶的配色就能看出，我其实原本是打算画 Miku 酱的（初音未来）：</p><p><img loading="lazy" alt="img_MIKU_us" src="https://avantcontra.github.io/assets/images/img_MIKU_us-99f9a92801aa2fcf3cb2afbb3e3a920d.png" width="462" height="710" class="img_ev3q"></p><p>然而码到用时方恨不会，关于傅里叶画画这个问题，其实更难的是找到合适的图案轨迹，并不是随便一个图都能轻松画出来的，这也是为什么上文中，我给任意图案的“任意”两字加了引号。</p><p>从数学上讲，在一些特定条件的约束下，一个函数才能用傅里叶级数来表达。
而找出这个图案轨迹的过程，复杂度远超用傅里叶级数画轨迹本身。
后面将附上其他高人的文章供参考。</p><p>本文投入的精力仅能画简单的轨迹线，所以Miku就换成了傅里叶他老人家🙂：</p><p><img loading="lazy" alt="fourier" src="https://avantcontra.github.io/assets/images/fourier-3172d877402867188dc8247b168db8a4.png" width="751" height="649" class="img_ev3q"></p><p><strong>最终效果（三个视角）</strong>:</p><p><img loading="lazy" alt="fs-blender-3d-all-2" src="https://avantcontra.github.io/assets/images/fs-blender-3d-all-2-ba69690c40aeeb707ec556627d88e780.gif" width="800" height="401" class="img_ev3q"></p><br><hr><h4 class="anchor anchorWithStickyNavbar_LWe7" id="参考资源">参考资源</h4><ul><li><p><a href="https://avantcontra.github.io/coding-druid/math-fourier-series-blender.html">用Blender来学习Python创意编程，实现傅里叶级数可视化</a>
如何用Blender来跑Python的入门学习笔记。</p></li><li><p><a href="http://www.jezzamon.com/fourier/index.html" target="_blank" rel="noopener noreferrer">An Interactive Introduction to Fourier Transforms</a>
非常棒的傅里叶级数画画的前端JavaScript实现。</p></li><li><p><a href="https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing" target="_blank" rel="noopener noreferrer">Drawing with Fourier Transform and Epicycles</a>
Shiffman的讲解和p5.js实现。</p></li><li><p><a href="https://www.bilibili.com/video/av62763042" target="_blank" rel="noopener noreferrer">But what is a Fourier series? From heat flow to circle drawings | DE4</a>
3Blue1Brown神仙的讲解，官方B站号。</p></li><li><p><a href="https://www.bilibili.com/video/av49238862/" target="_blank" rel="noopener noreferrer">Epicycles, complex Fourier series and Homer Simpson&#x27;s orbit</a>
光头大爷的讲解，不次于3B！</p></li><li><p><a href="https://zhuanlan.zhihu.com/p/72632360" target="_blank" rel="noopener noreferrer">手把手教你用傅立叶变换画可达鸭</a>
更多的是在讲如何获取图案最优轮廓线。</p></li></ul><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本例及【编程德鲁伊】系列大部分代码都开源在这里：
<a href="https://github.com/avantcontra/coding-druid" target="_blank" rel="noopener noreferrer">https://github.com/avantcontra/coding-druid</a></p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
