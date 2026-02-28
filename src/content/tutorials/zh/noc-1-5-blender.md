---
id: "tutorial-noc-1-5-blender-zh"
concept_id: "noc-1-5-blender"
type: "tutorial"
slug: "noc-1-5-blender"
title: "Nature of Code 1.5 单位向量 Blender实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 15

related_terms:
  - "nature-of-code"
  - "blender"

tags:
  - "blender"
  - "nature-of-code"

status: "canonical"
created: "2020-09-06"
updated: "2020-09-06"
version: 1

aliases:
  - "Nature of Code 1.5 单位向量 Blender实现"

summary: "NoC 1.5节 单位向量/归一化，Blender实现"
difficulty: "intermediate"

tools:
  - "blender"

coverUrl: "https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg"
author: "Contra"
publishedAt: "2020-09-06"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.5-blender"
---
<p>这个系列是专门用Blender的节点方式来实现Nature of Code。</p><p>用到一个Blender插件：Sverchok</p><p>这是一个很强大的节点式插件，不需要写Python代码，像MaxMSP、Touch Designer那样“连连看”就能实现程序逻辑。</p><p>前几节：</p><ul><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender.html">Nature of Code 1.1 向量 Blender实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.2-blender.html">Nature of Code 1.2 向量相加 Blender实现</a></li><li><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.3-blender.html">Nature of Code 1.3 向量乘法和随机 Blender实现</a></li></ul><p>本篇是Blender实现NoC1.5，Unit Vector (Normalize)，单位向量/归一化。</p><p>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html</a></p><p><img loading="lazy" alt="pad009-shfm" src="https://avantcontra.github.io/assets/images/pad009-shfm-4da8a307be0d07283d033d285b6f68e8.jpg" width="640" height="638" class="img_ev3q"></p><p><strong>NoC1.5 p5js 原版</strong>
<img loading="lazy" alt="pad009-p5" src="https://avantcontra.github.io/assets/images/pad009-p5-1dbe97b9851e1496d3040e5c4f2d1dfc.gif" width="829" height="681" class="img_ev3q"></p><p><strong><a href="https://avantcontra.github.io/natureofcode-remix/noc-1.5-maxmsp.html">MaxMSP Jitter版</a></strong>
<img loading="lazy" alt="pad009-max" src="https://avantcontra.github.io/assets/images/pad009-max-1a8223e0012aae8054c8461e0102c6dc.gif" width="829" height="681" class="img_ev3q"></p><p><strong>NoC1.5，本文Blender版</strong>
<img loading="lazy" alt="non-004" src="https://avantcontra.github.io/assets/images/non-004-fde58e01db1df7e3c033b90cc2ef3d16.gif" width="1014" height="1000" class="img_ev3q"></p><p>插件下载：
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>插件详细文档：
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=842040688&amp;bvid=BV1m54y1C7Bc&amp;cid=232982056&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1m54y1C7Bc" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1m54y1C7Bc</a></p><p><a href="https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ze2COEuRJEw&amp;list=PLc29R_yef6kEwEDbzPEK5R8vyIgQxKKzu&amp;index=4</a></p><br><p><strong>提示</strong></p><ul><li>打开源文件，运行Python脚本；</li><li>设置旋转中心（Line的起点）位置，默认在（0，0）；</li><li>&quot;F3&quot;，搜索“Simple Modal View3D Operator”并回车；</li><li>正交变换后的Line，随鼠标转动。</li></ul><p>本文制作全过程在视频里已包含，结合另一篇鼠标跟随的文章，耐心照做即可以实现。</p><p><strong>参考</strong></p><ul><li>Nature of Code 本节网址：
<a href="https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html" target="_blank" rel="noopener noreferrer">https://thecodingtrain.com/learning/nature-of-code/1.5-unit-vector.html</a></li><li>Blender Python 脚本实现鼠标跟随效果</li><li>鼠标跟随参考文章
<a href="https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator" target="_blank" rel="noopener noreferrer">https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator</a></li></ul><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
