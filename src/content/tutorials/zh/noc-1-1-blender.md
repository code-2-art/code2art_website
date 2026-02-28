---
id: "tutorial-noc-1-1-blender-zh"
concept_id: "noc-1-1-blender"
type: "tutorial"
slug: "noc-1-1-blender"
title: "Nature of Code 1.1 向量 Blender实现"
lang: "zh"

domains:
  - "computational-basics"
  - "visual-computation"

series:
  id: "nature-of-code-remix"
  order: 11

related_terms:
  - "nature-of-code"
  - "vector-math"
  - "creative-coding"

tags:
  - "nature-of-code"
  - "vector-math"
  - "blender"
  - "sverchok"

status: "canonical"
created: "2020-06-09"
updated: "2020-06-09"
version: 1

aliases:
  - "Nature of Code 1.1 向量 Blender实现"

summary: "NoC 1.1 向量 Blender实现"
difficulty: "intermediate"

tools:
  - "blender"
  - "sverchok"

coverUrl: "https://avantcontra.github.io/assets/images/noc-1-ea1ab5e077d08ddfd02a55b56927d04e.jpg"
author: "Contra"
publishedAt: "2020-06-09"
docUrl: "https://avantcontra.github.io/natureofcode-remix/noc-1.1-blender"
---
<p>Nature of Code是一套不错的Creative Coding上手教程，Daniel Shiffman作。</p><p>其旧版是Processing实现，新版是P5js。</p><p><a href="https://natureofcode.com/" target="_blank" rel="noopener noreferrer">https://natureofcode.com/</a></p><p>全书/视频/代码开源，请给原作者Donate。</p><p><strong>Nature of Code 2.0</strong>
<img loading="lazy" alt="Nature of Code 2.0" src="https://avantcontra.github.io/assets/images/noc-1-ea1ab5e077d08ddfd02a55b56927d04e.jpg" width="1482" height="912" class="img_ev3q"></p><p><strong>1.1节，官方P5js版本</strong>
<img loading="lazy" alt="1.1节，官方P5js版本" src="https://avantcontra.github.io/assets/images/noc-2-cbecdc3a31ab684b54639a1902dc108e.jpg" width="1092" height="737" class="img_ev3q"></p><p>这个系列是专门用Blender的Node（节点）方式来实现Nature of Code。</p><p>我会用到一个Blender插件：sverchok
<a href="http://nikitron.cc.ua/sverchok_en.html" target="_blank" rel="noopener noreferrer">http://nikitron.cc.ua/sverchok_en.html</a></p><p>这是一个很强大的节点式编程插件，不需要写Python代码，像MaxMSP、Touch Designer那样“连连看”就能实现程序逻辑。</p><p>工作界面如图：
<img loading="lazy" alt="non-1.1" src="https://avantcontra.github.io/assets/images/non-1.1-435bc4ef7c8b93ebb942e997b268dbd3.jpg" width="2569" height="1363" class="img_ev3q"></p><p>插件下载：
<a href="https://github.com/nortikin/sverchok" target="_blank" rel="noopener noreferrer">https://github.com/nortikin/sverchok</a></p><p>插件详细文档：
<a href="https://sverchok.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">https://sverchok.readthedocs.io/en/latest/installation.html</a></p><p><strong>完整制作过程视频：</strong></p><p><em>(源代码实际已经涵盖在视频之中，暂停播放即可。)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=243455251&amp;bvid=BV1Tv41167oh&amp;cid=200493712&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><br><p><a href="https://www.bilibili.com/video/BV1Tv41167oh" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Tv41167oh</a></p><p><a href="https://www.youtube.com/watch?v=cvh0N3eM2vk&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=cvh0N3eM2vk&amp;list=PLc29R_yef6kGM3zXDWW9mMh11_PkTjmXX&amp;index=4</a></p><br><p><strong>Talk is cheap. Show me the code!</strong></p><p>本文制作全过程在视频里已包含。
若仍需源文件，可加入实验编程情报中心。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
