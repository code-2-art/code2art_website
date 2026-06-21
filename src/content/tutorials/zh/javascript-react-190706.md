---
id: "tutorial-javascript-react-190706-zh"
concept_id: "javascript-react-190706"
type: "tutorial"
slug: "javascript-react-190706"
title: "【编程德鲁伊 - 数学篇】Javascript (React) 三角函数可视化"
lang: "zh"
tags:
  - "javascript"
  - "react"
status: "canonical"
created: "2019-07-06"
updated: "2019-07-06"
version: 1
summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
coverUrl: "/uploads/javascript-react-190706/img_001.webp"
author: "Contra的后院"
publishedAt: "2019-07-06"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483862&idx=1&sn=0f72fec71c256f17f14a65488492baaa&chksm=e9f53347de82ba514176f855e101839d6f252e3ba01608629294617f40fd9d8904c1128d6760"
useDocUrl: false
---

【编程德鲁伊】系列是我的**横向编程**练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。

---

**编程德鲁伊 - 数学篇 - 三角函数可视化  
Javascript (React) 实现**

上一节用MaxMSP做了三角函数（正弦和单位圆）的可视化，长这样：

<img src="/uploads/javascript-react-190706/img_001.webp" alt="" loading="lazy" />

原文链接:[【编程德鲁伊 - 数学篇】MaxMSP三角函数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483847&idx=1&sn=bf9bfbf83a89d8cd8a340aca5719e360&chksm=e9f53356de82ba40e00cfceb7655206d65599e0973487ebea09469e6e4ee0b86482d89b68314&scene=21#wechat_redirect)

这次用Javascript来实现。

在浏览器里用Javascript绘制函数曲线图形的方式有很多:

* 在Canvas或WebGL里直接画
* d3js
* p5js
* pixijs
* SVG + CSS
* 还有hin多

当选择强迫症发作时，偶然看到了一个用React + SVG来实现的例子：

<img src="/uploads/javascript-react-190706/img_002.webp" alt="" loading="lazy" />

https://codepen.io/HunorMarton/pen/ggQGqQ

使用SVG用标记或声明的方式来描述正弦函数：

<img src="/uploads/javascript-react-190706/img_003.webp" alt="" loading="lazy" />

再充分利用React State的更新机制，把沿x轴的参数**`degree`**进行绑定和更新：

<img src="/uploads/javascript-react-190706/img_004.webp" alt="" loading="lazy" />

这样每当degree变化时，正弦函数也就随着扭动起来了，清晰，漂亮！

我过去的项目很少用到**SVG**，有的话也只是当位图来用。正好借此机会学习学习，感谢这个例子的作者～ （https://codepen.io/HunorMarton/pen/ggQGqQ）

而**React**，则是我近些年在前端项目里最常用的库了。  
但新版本（React 16+）中新出的Hooks等功能也一直还没仔细看，再次正好借此机会学习学习，**并用React Hooks重构了上述例子中的React State相关部分**。

Hooks官方文档很棒：  
https://reactjs.org/docs/hooks-intro.html  
直接跟着读然后跟着做，重构上文**`Sinus`**组件如下:

<img src="/uploads/javascript-react-190706/img_005.webp" alt="" loading="lazy" />

Hooks用起来简单而强大，但是要留意下**性能**问题，因为`useEffect()`在第一次渲染及每次update后，都会执行。  
关于这个话题，官方提供了一些tips：  
https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

**最终效果**:

<img src="/uploads/javascript-react-190706/img_006.webp" alt="" loading="lazy" />

稍微改了改颜色，跟原例子区分一下便于观看。

---

**Talk is cheap. Show me the money code!**

本例及【编程德鲁伊】系列大部分代码都开源在这里：  
https://github.com/avantcontra/coding-druid

您也可以在网站**floatbug.com**上获取更多教程、demo、源代码等资源。

请猛戳下方赞赏或喜欢作者，buy me a coffee！  
您的金钱鼓励是我前进的动力。

或者在Patreon上订阅，愿风指引你充值的道路：  
https://www.patreon.com/avantcontra

Cheers~

Contra

微信公众号/知乎专栏：浮生开方 **实验编程**
