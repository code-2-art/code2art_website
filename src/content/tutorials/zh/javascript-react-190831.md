---
id: "tutorial-javascript-react-190831-zh"
concept_id: "javascript-react-190831"
type: "tutorial"
slug: "javascript-react-190831"
title: "【编程德鲁伊 - 数学篇】JavaScript (React)傅里叶级数可视化"
lang: "zh"
tags:
  - "javascript"
  - "react"
status: "canonical"
created: "2019-08-31"
updated: "2019-08-31"
version: 1
summary: "【编程德鲁伊】系列是我的横向编程练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。"
coverUrl: "/uploads/javascript-react-190831/img_001.webp"
author: "Contra的后院"
publishedAt: "2019-08-31"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483901&idx=1&sn=3efb372dfee56bd7772bf3bbc6a68bba&chksm=e9f5336cde82ba7aa37adb1f15f01d80692b26f305d15e19a2042c6f70400ca08f7cac440247"
useDocUrl: false
---

【编程德鲁伊】系列是我的**横向编程**练习笔记，每期围绕一个主题（数学物理电子图形声音...），用几种程序语言分别实现。战法牧贼同时修，能抗能打能奶能开溜。

---

编程德鲁伊 - 数学篇 - 傅里叶级数可视化  
JavaScript (React) 实现

上一章做了三角函数可视化，分别用 [MaxMSP](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483847&idx=1&sn=bf9bfbf83a89d8cd8a340aca5719e360&chksm=e9f53356de82ba40e00cfceb7655206d65599e0973487ebea09469e6e4ee0b86482d89b68314&scene=21#wechat_redirect), [JavaScript (React)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483862&idx=1&sn=0f72fec71c256f17f14a65488492baaa&chksm=e9f53347de82ba514176f855e101839d6f252e3ba01608629294617f40fd9d8904c1128d6760&scene=21#wechat_redirect), [Python](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483870&idx=1&sn=22992b1b8df35f0416e4062252141ad3&chksm=e9f5334fde82ba5909f48cb2508eb8cd9bb1c81a9e5d2c5f4c7665541511f3c3332480762640&scene=21#wechat_redirect), 以及 [Unity](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483884&idx=1&sn=2c26b5c7573d0d4cb49c337ec5d1aa10&chksm=e9f5337dde82ba6b9c0a36990d036a3a64d57ce5e0828b2e98a52903d24b8c99bc2a1b878b26&scene=21#wechat_redirect):

<img src="/uploads/javascript-react-190831/img_001.webp" alt="" loading="lazy" />

这一章准备重新体验下被傅里叶支配的恐惧，搞一搞傅里叶级数的可视化。  
不禁想起那一年夕阳下的奔跑，高数考了7分。  
所以本节决定先从最称手的 JavaScript (React) 开始，以防坑上加坑爬不出来。

*谈到傅里叶变换、傅里叶分析，通常会分为两部分内容来讲，傅里叶级数和连续傅里叶变换。本章先试试傅里叶级数。*

### **数学基础**

数学来了，老乡别走，后边有热乎代码和最终可视化动图！！

在数学中，傅里叶级数可以看作一组正弦曲线组成的周期函数，由加权求和组合而成。  
(wikipedia)

举个例子，假设有一个周期性方波，它可以分解成多个正弦波：  
（下面这图其实会动...）

<img src="/uploads/javascript-react-190831/img_002.webp" alt="" loading="lazy" />

正弦波越多，合成后的曲线越接近方波：

<img src="/uploads/javascript-react-190831/img_003.webp" alt="" loading="lazy" />

下面正式开始傅里叶级数的推导（公式抄写）。

假设 `f(x)` 是一个区间为 `x∈[−π,π]` 的周期函数, 周期为 `2π`：

<img src="/uploads/javascript-react-190831/img_004.webp" alt="" loading="lazy" />

它的傅里叶级数正弦函数式：

<img src="/uploads/javascript-react-190831/img_005.webp" alt="" loading="lazy" />

傅里叶系数：

<img src="/uploads/javascript-react-190831/img_006.webp" alt="" loading="lazy" />

老乡别走坚持住！

系数带入傅里叶级数，最终得到:

<img src="/uploads/javascript-react-190831/img_007.webp" alt="" loading="lazy" />

*上述公式参考了* *"Advanced Mathematics - (Engineering Course) 高等数学-工科"。*

*详细的傅里叶级数在维基百科里也有定义和解释：  
en.wikipedia.org/wiki/Fourier\_series*

维基百科里有一张图，是以傅里叶级数正弦函数展开式取了前四项的和为例，展示了如何去近似接近一个方波：

<img src="/uploads/javascript-react-190831/img_008.webp" alt="" loading="lazy" />

<img src="/uploads/javascript-react-190831/img_009.webp" alt="" loading="lazy" />

本次练习就来实现这张图的曲线。

老乡，这次真的是进入正题... 

### **可视化**

上一章我重构实现了正弦曲线:

<img src="/uploads/javascript-react-190831/img_010.webp" alt="" loading="lazy" />

这次接着上回单位圆和正弦部分的代码，继续使用React Hooks来做傅里叶级数可视化。

React 把 js、html、css揉在一起，写起来还是逻辑很清晰(?)的：

<img src="/uploads/javascript-react-190831/img_011.webp" alt="" loading="lazy" /><img src="/uploads/javascript-react-190831/img_012.webp" alt="" loading="lazy" /><img src="/uploads/javascript-react-190831/img_013.webp" alt="" loading="lazy" />

数据刷新部分，继续使用 React Hooks:

<img src="/uploads/javascript-react-190831/img_014.webp" alt="" loading="lazy" />

完整源代码请见后文。

最终结果:

<img src="/uploads/javascript-react-190831/img_015.webp" alt="" loading="lazy" />

随着n的增加，即正弦波的增加，合成后的波形越来越接近方波。

通过做这个例子，我感觉再考高数的话，傅里叶级数的题应该稳了，这次拿个八九分不成问题，100分在招手。

### **参考资源**

* Wikipedia
* Purrier Series (Meow) and Making Images Speak
* CodingChallenges by Daniel Shiffman
* 高等数学（工科类）
* 信号与系统 (第二版) 奥本海姆大神
* [干货]---Fourier级数
* 傅立叶变换如何理解？美颜和变声都是什么原理？李永乐老师告诉你

---

Talk is cheap. Show me the money code!

本例及【编程德鲁伊】系列大部分代码都开源在这里：  
github.com/avantcontra/coding-druid

您也可以在网站floatbug.com上获取更多教程、demo、源代码等资源。

请猛戳下方赞赏或喜欢作者，buy me a coffee！  
您的金钱鼓励是我前进的动力。

欢迎在Patreon上订阅，获取更多文章、示例、代码以及一部分会员特供的高级内容。  
您也可以直接在Gumroad商店下载免费的demo和源代码。  
  
愿风指引你充值的道路：  
patreon.com/avantcontra  
gumroad.com/avantcontra

**微信公众号/知乎专栏：****实验编程**

Cheers~

Contra
