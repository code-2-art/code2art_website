---
id: "tutorial-blender-200401-zh"
concept_id: "blender-200401"
type: "tutorial"
slug: "blender-200401"
title: "小程序中文语音识别并用Blender可视化，以及如何编解码中文字符"
lang: "zh"
tags:
  - "blender"
status: "canonical"
created: "2020-04-01"
updated: "2020-04-01"
version: 1
summary: "前言：今天的标题可真够拧巴..."
coverUrl: "/uploads/blender-200401/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-04-01"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484090&idx=1&sn=95f1b1b3ee1a50e7fc9c03d4caf6068e&chksm=e9f5302bde82b93d889ca8c7609f95958ea793c2761b34b82c954ce6c9ab9b8eb2d6ea2ae9b0"
useDocUrl: false
---

*前言：今天的标题可真够拧巴...*

上回书说的是小程序【BugOSC】与PC软件交互的全过程：

<img src="/uploads/blender-200401/img_001.webp" alt="" loading="lazy" />

[【教程来了】小程序与PC装置交互全过程](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484081&idx=1&sn=8980820743c08e35e48369fdce2a0c05&chksm=e9f53020de82b9366a266fa79028a2068ad4879152f55122a45065e5c802b0f516d1f5be71cc&scene=21#wechat_redirect)

上次教程里留了1%没讲，在BugOSC里通过中文语音识别后得到的中文字符，进行OSC传输时需要编解码，否则接收端会显示为乱码。

因为OSC1.0的协议规定，只支持最基本的ASCII，不支持Unicode即中文、日文等字符。  
毕竟OSC多用在交互的场合，大部分时候用来做控制指令，或者传输参数的具体数值，用到中文日文等场景相对较少。

这里**强行插入**一个用**BugOSC**语音识别中英文，**并用Blender可视化**的demo，观众先热热身。

**BugOSC**打包封装数据用到了OSC.js这个库，它遵循的就是OSC1.0的协议，只支持最基本的ASCII，简单说就是26个英文字母、数字及一些字符。

而**BugOSC**还是可以传输中文的，这是因为在传输前对中文做了**编码**，**把中文用一串有规则的英文字母数字及符合来表示**；  
相应的你的接收端，需要做**解码**，**用同样的规则**，把这串英文字母数字符号还原成中文。

这里用的是很常规的编解码方式，大部分编程语言或软件都有现成的解决方案，也很简单。

例如JavaScript里，编码就一句：  
`encodeURI()`  
解码也是一句:  
`decodeURI()`

关于字符编解码的详细介绍，推荐维基百科上的定义，或者Google这几个关键词：  
`URI`，`Unicode`，`UTF-8`，`ASCII`。

通过编解码的方式，就可以用**BugOSC**愉快的进行中文语音识别和传输了。

**老乡别走，源代码来了！**

---

下面用MaxMSP演示如何接收BugOSC的中文字符并解码：

<img src="/uploads/blender-200401/img_002.webp" alt="" loading="lazy" />

如上图所示，收到的字符串，未解码前，是这样的：  
`%E6%B2%A1%E5%90%83%20%E5%9B%9E%E5%AE%B6%E5%90%83%E5%8E%BB%E5%90%A7%20`

通过**decode.js**解码后，得到：  
`没吃 回家吃去吧`

流程演示完毕，就这么简单。

负责具体解码过程的**decode.js**也很简单：

<img src="/uploads/blender-200401/img_003.webp" alt="" loading="lazy" />

顺便附上一个说明，刚才解码后得到的语句是：

没吃 回家吃去吧

实际上语音识别引擎识别后的**原文是含有标点符号**的：

`没吃，回家吃去吧！`

**BugOSC**在传输语句时，自动过滤了标点符号，因为由引擎生成的标点符号目前生成规则不太可控，尤其末尾的句号感叹号问号。

为了方便在接收端直接将字符串结果做 `if else` 比对，过滤掉了标点符号。  
但是我留下了空格，用意是方便一开始在熟悉语音识别特性的时候，分辨连读与间隔的区别。

**如果对这方面有更好的建议，欢迎反馈！**

---

**扩展**

OSC接收端对中文要额外做解码，总觉得有一点不方便。  
其实OSC在1.x之后的版本，协议Spec做了扩展，支持了Unicode字符串。  
很多语言的库也相应做了扩展，直接拿来使用就好。甚至你手头的OSC插件，可能本身就是可以正常收发中文的。

但是BugOSC的OSC封装部分由于使用了OSC.js，遵循的是OSC 1.0的协议，所以使用BugOSC的时候，接收中文要做decodeURI解码（好尴尬）。

**如果你的软件有解码插件或内置了解码功能，或总之能正常接收显示BugOSC发出的中文，烦请给我留言<img src="/uploads/blender-200401/img_004.webp" alt="" loading="lazy" />**

另外，解码的程序逻辑里无需对英文和中文区别对待，统一做解码处理就好。  
中文通过解码会正常还原，而英文即便做一次解码仍然是原有英文保持不变。  
正所谓你大妈已经不是原来的大妈了，你大爷还是你大爷。

---

#### **参考资源**

* OSC 1.0协议：  
  http://opensoundcontrol.org/spec-1\_0
* 遵循OSC 1.x协议，扩展了Unicode字符支持的 .net 库：  
  http://opensoundcontrol.org/implementation/osc-net-v1-2  
  （提示：跟着.net可以一路摸到Unity和vvvv。）
* 一个Python OSC库，支持Unicode：  
  https://github.com/kivy/oscpy  
  （提示：跟着Python可以一路摸到Blender和TouchDesigner。）
* 一个Java OSC库，支持Unicode，里边有processing相应库的说明：  
  https://www.sciss.de/netutil/  
  （提示：跟着Java可以一路摸到processing。）
* OSC.js库，及其作者对Unicode不支持的说明：  
  https://github.com/colinbdclark/osc.js/issues/40

---

#### **Talk is cheap. Show me the code!**

**本文插图就是**MaxMSP和JavaScript的源代码。

**源文件仍将惯例直接提供给知识星球的赞助商老板们，感谢支持。**

另外编程德鲁伊系列**绝大部分开源**，可刨公众号菜单。

在知识星球里你将持续获得实验代码和无限次答疑。  
详情请刨公众号菜单：**关于问答-内部知识星球**。

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

网站: floatbug.com

**微信公众号/知乎专栏/知识星球/B站：****实验编程**

<img src="/uploads/blender-200401/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/blender-200401/img_006.webp" alt="" loading="lazy" />
