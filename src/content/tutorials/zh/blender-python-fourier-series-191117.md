---
id: "tutorial-blender-python-fourier-series-191117-zh"
concept_id: "blender-python-fourier-series-191117"
type: "tutorial"
slug: "blender-python-fourier-series-191117"
title: "用Blender来学习Python创意编程，实现傅里叶级数可视化"
lang: "zh"
domains:
  - "creative-coding"
  - "generative-art"
tags:
  - "blender"
  - "python"
  - "fourier-series"
  - "creative-coding"
status: "canonical"
created: "2019-11-17"
updated: "2019-11-17"
version: 1
summary: "不写复杂代码，用 Blender 的 Python 接口实现傅里叶级数可视化，入门创意编程。"
difficulty: "beginner"
tools:
  - "blender"
  - "python"
coverUrl: "/uploads/blender-python-fourier-series-191117/img_001.webp"
author: "Contra的后院"
publishedAt: "2019-11-17"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6"
useDocUrl: false
---

前言的前言：

如果你的技能点选择了 Python，恭喜，现在 Python 赶上了 AI 热潮。  
而如果恰好还想做 Creative Programming，苦于漫天教程大多集中在 Processing、Unity、OpenFrameworks、vvvv 等平台，**真青年不要慌，Python 大法依然香**，往下看。

---

前言：

【编程德鲁伊】系列是我的**横向编程**练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。

（老乡别走，干货后面有）

---

**编程德鲁伊 - 数学篇 - 傅里叶级数可视化**

**Blender + Python 实现**

本章做傅里叶级数可视化，已经分别练习了 [JavaScript (React) 版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483901&idx=1&sn=3efb372dfee56bd7772bf3bbc6a68bba&chksm=e9f5336cde82ba7aa37adb1f15f01d80692b26f305d15e19a2042c6f70400ca08f7cac440247&scene=21#wechat_redirect)：  
<img src="/uploads/blender-python-fourier-series-191117/img_001.webp" alt="" loading="lazy" />

以及 [Unity 版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483919&idx=1&sn=d850d6039bc890e821d4041acc922a9f&chksm=e9f5309ede82b9886d62382c3d0a3c7a3a72258cf26c0bbea683129af2521093817a42aa4bbd&scene=21#wechat_redirect):

<img src="/uploads/blender-python-fourier-series-191117/img_002.webp" alt="" loading="lazy" />

这一节又轮到 **Python** 了。

---

### Playground 的选择

在上一章三角函数主题里（[Python三角函数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483870&idx=1&sn=22992b1b8df35f0416e4062252141ad3&chksm=e9f5334fde82ba5909f48cb2508eb8cd9bb1c81a9e5d2c5f4c7665541511f3c3332480762640&scene=21#wechat_redirect)），Python 的开发环境或者 Playground ，我用的是 Jupyter Notebook 。它是一个 Web 版的在线 Python 开发环境，可以基本做到实时编程，边写边看运行结果，还可以代码和文档混编。

<img src="/uploads/blender-python-fourier-series-191117/img_003.webp" alt="" loading="lazy" />

这样会相对容易一些，不用考虑如何搭建合理的本地 Python 环境、如何可视化图形渲染等问题。先把注意力集中在 Python 代码编写上，直接在浏览器里就可编写并查看运行结果。（老乡别走，干货后面还有）

<img src="/uploads/blender-python-fourier-series-191117/img_004.webp" alt="" loading="lazy" />

Jupyter 虽好，但仍不够野，如果想做更丰富的可视化效果，而非仅仅把公式曲线画出来，那用 Jupyter 来跑 Python 就稍有点限制。

我需要一个不用太操心图形渲染底层实现，并且渲染效果又强悍粗暴的 Python 运行环境。  
Blender 和 TouchDesigner 是两款看上去符合条件的软件。

**Blender**

<img src="/uploads/blender-python-fourier-series-191117/img_005.webp" alt="" loading="lazy" />

Blender 是一款开源的 3D 内容创作软件，核心功能可以类比 3D Max、Maya 等，体积短小精湛却又功能粗暴，横跨多操作系统，详细介绍见其官网：  
https://www.blender.org/

<img src="/uploads/blender-python-fourier-series-191117/img_006.webp" alt="" loading="lazy" />

Blender 的生态基于 Python 而建，插件、扩展以及高级定制功能，都可以用 Python 来编写。（其实也可以做实时交互的游戏，这一点有点像 Unity，当然 Blender 更偏重 3D 内容的制作。）

**TouchDesigner**

<img src="/uploads/blender-python-fourier-series-191117/img_007.webp" alt="" loading="lazy" />

TouchDesigner 是一款图形化编程工具，可以类比其他连连看工具如 MaxMSP 、 vvvv 等。  
TouchDesigner 的扩展脚本语言，也是 Python。

对我来说，目前用 MaxMSP 连连看完全够用，等何时 TouchDesigner 火了我再来蹭热点。

所以本次我**用 Blender 作为 Python 编程练习的运行环境**。

（老乡别走，干货后面还有）

---

Hello World

首先在 Blender 官网下载 2.80 版的安装文件，Mac、Windows、Linux都支持。

2.80 版起，Blender 有了巨大的更新，究竟有多大，我也不太清楚，因为我上一次用 Blender 是十多年前了，当时还是 2.4x 版，用 Python 试了试参数化建筑生成。  
反正 2.80 版我当新软件用就对了。

2.80 版安装后启动：

<img src="/uploads/blender-python-fourier-series-191117/img_008.webp" alt="" loading="lazy" />

它的功能很多，建模、贴图、动画、渲染等都有，反正我跟十多年前一样仍然不太会用，推荐查阅官方教程。

本文直接切到 **Scripting** 来跑 Python。

<img src="/uploads/blender-python-fourier-series-191117/img_009.webp" alt="" loading="lazy" />

在 Scripting 里有一个 Console，开箱即用，直接在里面输入 Python 代码即可。百年传统，hello world：

<img src="/uploads/blender-python-fourier-series-191117/img_010.webp" alt="" loading="lazy" />

仅在 Console 里写是很不方便的，点选图中的 Text，这实际上是一个代码文本编辑器，点击新建（New）开始玩耍：

<img src="/uploads/blender-python-fourier-series-191117/img_011.webp" alt="" loading="lazy" />

继续用 hello world 试试：

`print ("hello world from Text Editor")`

<img src="/uploads/blender-python-fourier-series-191117/img_012.webp" alt="" loading="lazy" />

输入代码，点击 **Run Script** 后，可以发现左侧的自带Console区域里，并没有打印 *"hello world from Text Editor"* 字样。

（老乡别走，干货后面还有）

**要调试打印 Text Editor 的代码，需要打开操作系统自带的 Console**。这里有官方 Tips ：  
https://docs.blender.org/api/current/info\_tips\_and\_tricks.html#use-the-terminal

对 Blender Windows 版，直接在 help 菜单里开启系统 Console 即可。

对 Mac 版，要先开系统 Terminal/终端（如果已打开 Blender 可以先关闭），在 Terminal 里打开 Blender：

* 打开 Terminal 或终端
* 在应用程序里右键点击 Blender(.app)，选择 “Show Package Contents” 或“查看包内容”
* 找到 Contents->MacOS->Blender
* 将 'Blender' 拖拽到 Terminal 窗口中
* 回车

<img src="/uploads/blender-python-fourier-series-191117/img_013.webp" alt="" loading="lazy" />

开启系统 Terminal 后，重新在 Blender Scripting 的 Text 中输入  
`print ("hello world from Text Editor")`   
然后 **Run Script**，便可在 Terminal 中看到打印的信息：

<img src="/uploads/blender-python-fourier-series-191117/img_014.webp" alt="" loading="lazy" />

---

### Grease Pencil

**Grease Pencil** 是 Blender 2.80 版的新功能，它是一种特殊的 Blender object，允许你在 3D 空间里绘制 2D 图形，制作传统 2D 动画，剪切，动效，甚至制作故事版等。

<img src="/uploads/blender-python-fourier-series-191117/img_015.webp" alt="" loading="lazy" />

An example of a Grease Pencil object in the 3D environment

前边说过，Blender 是深度结合 Python 的软件，基本上所有软件操作，都有对应的 Python API 供使用。所以铺垫了那么多，现在终于可以总结为：

**在 Blender 里用 Python 调用 Grease Pencil API 进行 2D 图形绘制。**

有点像在 Processing 和 P5js 里用代码画图的形式，但同时可以使用 Blender 强大的软件功能，比如直接使用功能菜单，去修改代码所画物体的贴图、材质等等，这一点上，又有点像 Unity 的操作。

Grease Pencil 要展开的话这篇就越跑越远了，先把参考资源列在这里（老乡别走，干货后面还有）：

* Grease Pencil 官方介绍（直接通过软件菜单来操作）：  
  https://docs.blender.org/manual/en/latest/grease\_pencil/introduction.html
* Blender Python 官方文档：  
  https://docs.blender.org/manual/en/dev/advanced/scripting/introduction.html
* Blender & Grease Pencil API 官方文档:  
  https://docs.blender.org/api/current/
* **Blender 2.8 Grease Pencil Scripting and Generative Art**  
  https://towardsdatascience.com/blender-2-8-grease-pencil-scripting-and-generative-art-cbbfd3967590

注意上边加粗的资源 **Blender 2.8 Grease Pencil Scripting and Generative Art**，其作者将常用的绘制功能做了封装，在下面节选一部分，详情可点击上方原文查看。

如封装一个 draw\_line 函数，用来从两点之间画线：

<img src="/uploads/blender-python-fourier-series-191117/img_016.webp" alt="" loading="lazy" />

进而画圆、画曲线等：

<img src="/uploads/blender-python-fourier-series-191117/img_017.webp" alt="" loading="lazy" />

然后借助 Blender 本身看家的 3D 功能，给画的物体**上材质**：

<img src="/uploads/blender-python-fourier-series-191117/img_018.webp" alt="" loading="lazy" />

<img src="/uploads/blender-python-fourier-series-191117/img_019.webp" alt="" loading="lazy" />

甚至还可以结合 Blender 的 Animation 功能：

<img src="/uploads/blender-python-fourier-series-191117/img_020.webp" alt="" loading="lazy" />

---

（老乡别走，干货后面还有）

### 傅里叶级数

终于回到正题了……

再回顾一下傅里叶级数的简化公式：

<img src="/uploads/blender-python-fourier-series-191117/img_021.webp" alt="" loading="lazy" />

有关傅里叶级数的数学知识学习笔记，可见 [JavaScript (React)傅里叶级数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483901&idx=1&sn=3efb372dfee56bd7772bf3bbc6a68bba&chksm=e9f5336cde82ba7aa37adb1f15f01d80692b26f305d15e19a2042c6f70400ca08f7cac440247&scene=21#wechat_redirect)。

用 Python 编写公式逻辑，以及调用 Blender Grease Pencil API 进行绘制渲染：

<img src="/uploads/blender-python-fourier-series-191117/img_022.webp" alt="" loading="lazy" />

完整代码可见后文。

**最终效果**:

<img src="/uploads/blender-python-fourier-series-191117/img_023.webp" alt="" loading="lazy" />

还记得么，Grease Pencil 其实是在 3D 空间里画 2D 图形：

<img src="/uploads/blender-python-fourier-series-191117/img_024.webp" alt="" loading="lazy" />

#### 参考资源

* [【编程德鲁伊 - 数学篇】Python 三角函数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483870&idx=1&sn=22992b1b8df35f0416e4062252141ad3&chksm=e9f5334fde82ba5909f48cb2508eb8cd9bb1c81a9e5d2c5f4c7665541511f3c3332480762640&scene=21#wechat_redirect)
* [【编程德鲁伊 - 数学篇】JavaScript (React)傅里叶级数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483901&idx=1&sn=3efb372dfee56bd7772bf3bbc6a68bba&chksm=e9f5336cde82ba7aa37adb1f15f01d80692b26f305d15e19a2042c6f70400ca08f7cac440247&scene=21#wechat_redirect)
* Grease Pencil 官方介绍
* Blender Python 官方文档
* Blender & Grease Pencil API 官方文档
* Blender 2.8 Grease Pencil Scripting and Generative Art

---

**Talk is cheap. Show me the code!**

本例及【编程德鲁伊】系列大部分代码都开源在这里：  
https://github.com/avantcontra/coding-druid

请猛戳下方**赞赏**或**喜欢作者**，**buy me a coffee**！  
您的金钱鼓励是我前进的动力。

欢迎在Patreon上订阅（英文版），获取更多会员特供的高级内容。  
您也可以直接在Gumroad商店获取demo和源代码。

网站: floatbug.com  
**微信公众号/知乎专栏：****实验编程**

Cheers~

Contra
