---
id: "tutorial-geometry-algorithm-ai-pattern-240803-zh"
concept_id: "geometry-algorithm-ai-pattern-240803"
type: "tutorial"
slug: "geometry-algorithm-ai-pattern-240803"
title: "几何算法与AI绘画结合生成精美纹样"
lang: "zh"
domains:
  - "generative-art"
  - "ai-image-generation"
tags:
  - "generative-art"
  - "controlnet"
  - "stable-diffusion"
  - "pattern"
status: "canonical"
created: "2024-08-03"
updated: "2024-08-03"
version: 1
summary: "把几何算法与 AI 绘画（Stable Diffusion / ControlNet）结合，生成精美的纹样图案。"
difficulty: "intermediate"
tools:
  - "stable-diffusion"
  - "controlnet"
coverUrl: "/uploads/geometry-algorithm-ai-pattern-240803/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-08-03"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492233&idx=1&sn=3aa906c3a5ac5407ea5a9c949076a10f&chksm=e9f6d018de81590e25d59d98e2e3004f087b7b78af2fd1d5493b7da21e884027a50fc15974c5"
useDocUrl: false
---

*约稿。*

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_001.webp" alt="" loading="lazy" />

算法生成艺术和生成式AI是数字生成艺术的不同创作方式，结合它们各自的优势能使艺术创作变得更加多样和灵活。

算法生成艺术是通过计算机程序生成的艺术作品，其核心在于使用算法来生成视觉图案、形状和效果，强调规则和逻辑。通过程序控制创作过程，能够生成无限多样的图案，为艺术创作提供广阔的灵感来源。

有时候单纯通过数学公式和编程逻辑生成的基础图案，可能显得过于机械和单调。而AI可以进一步优化和提升这些图像的质量，再通过风格迁移，可使算法艺术作品在更具体的领域中落地。

本文用p5.js作为算法生成的编程实现工具，再与AI生图工具WHEE结合起来，充分利用两者的优势，创造出独特且复杂的纹样作品。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_002.webp" alt="" loading="lazy" />

左：p5.js生成几何纹样。  
右：WHEE风格化后的刺绣纹样。

**使用p5.js生成几何纹样**

p5.js是一个免费的开源JavaScript库，旨在帮助人们学习编程并进行算法生成艺术创作，对艺术家、设计师等非计算机专业背景的初学者非常友好。

p5.js官方教程以及一个在线的代码编辑和运行环境，都可以在它官网找到：

https://p5js.org/

先在p5.js中编写代码，生成对称纹样。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_003.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_004.webp" alt="" loading="lazy" />

通过修改代码和参数，可以成生更复杂的纹样，还可以根据鼠标交互的随机性，算法每次生成的图案都不一样。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_006.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_007.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_008.webp" alt="" loading="lazy" />

本文以算法生成 + AI生成的工作流阐释为主。

生成几何纹样、鼠标交互的p5.js程序，可以参考以下网站：

https://p5js.org/examples/  
https://openprocessing.org/

**使用WHEE App平面转3D工作流生成纹样刺绣**

接下来把p5.js生成的几何纹样，通过 WHEE将其转换成复杂的刺绣设计。

**主要生成步骤**

1. 打开WHEE App

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_009.webp" alt="" loading="lazy" />

2. 首页找到“羊毛毡-平面转3D”

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_010.webp" alt="" loading="lazy" />

3. 上传刚才用p5.js生成的纹样图片

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_011.webp" alt="" loading="lazy" />

4. 在生成后，通过点击“对比”按钮，可以查看对比效果。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_012.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_013.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_014.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_015.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_002.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_016.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_017.webp" alt="" loading="lazy" />

**修改调整**

针对不满意的部分可以使用“局部修改”功能做调整。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_018.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_019.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_020.webp" alt="" loading="lazy" />

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_021.webp" alt="" loading="lazy" />

**顺手做两张算法纹样海报**

将WHEE生成的图片导入“美图秀秀”，套用模板快速得到算法纹样海报。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_022.webp" alt="" loading="lazy" />

**使用WHEE网页版图生图工作流生成更多纹样风格**

WHEE除了App，还有功能更加灵活丰富的网页版。

https://www.whee.com/

**p5.js + 图生图的工作流关键步骤**

1.  在p5.js中编写代码，生成具有纹样分布特点的图形。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_023.webp" alt="" loading="lazy" />

2. 打开WHEE网页版“图生图”。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_024.webp" alt="" loading="lazy" />

3. 上传有纹样分布特点的图形。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_025.webp" alt="" loading="lazy" />

4. 撰写提示词。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_026.webp" alt="" loading="lazy" />

5. 参数调整与生成

“重绘幅度”值越低越接近原始图，太低会影响图片质量，所以设置中等就可以了。

“提示词强度”值越高生成结果越接近提示词，默认为7，官方建议采用默认数值，但此案例为了更突出风格化，将提示词强度拉高改为13。

“采样步骤”通常是生成图片所需要的步骤，一般30就可以生成质量不错的图片了。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_027.webp" alt="" loading="lazy" />

设置完参数点击页面下方“生成”即可。

**几组生成效果**

1. p5生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_028.webp" alt="" loading="lazy" />

经WHEE图生图后生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_029.webp" alt="" loading="lazy" />

2. p5.js中增加对称线条后生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_030.webp" alt="" loading="lazy" />

经WHEE图生图后生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_031.webp" alt="" loading="lazy" />

3. p5.js中调整纹样分布形态：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_032.webp" alt="" loading="lazy" />

经WHEE图生图后生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_033.webp" alt="" loading="lazy" />

4. p5.js中调整纹样分布形态：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_034.webp" alt="" loading="lazy" />

WHEE图生图后生成的图形：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_001.webp" alt="" loading="lazy" />

**可以添加LoRA风格模型**

WHEE有丰富的模型库供大家选择。在“风格模型”中点击“添加风格模型”，可以看到海量的模型库，选择自己所需的模型。这里我选择了“3d刺绣中国龙”的模型，并将强度调整为70%。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_035.webp" alt="" loading="lazy" />

生成的是具有真实刺绣质感的画面：

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_036.webp" alt="" loading="lazy" />

我们可以继续尝试其它风格模型，“羊毛毡”模型，可以生成非常逼真的地毯了。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_037.webp" alt="" loading="lazy" />

“FLUFFY长毛材质”模型，生成的是可爱版的地毯。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_038.webp" alt="" loading="lazy" />

“陶瓷-V1-材质系列”模型，生成的瓷器质感也是非常棒的。

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_039.webp" alt="" loading="lazy" />

通过结合算法生成艺术和生成式AI艺术，艺术家和设计师可以创造出独特且复杂的艺术作品。p5.js 提供了一个强大的平台，用于生成基础图案和实现参数化设计，而以WHEE为代表的AI图像模型和工具则进一步提升了这些图案的质量和风格表现力。这种跨领域的技术结合不仅丰富了创作手段，也为数字艺术创作开辟了新的可能性。

---

**🔥**🔥**实验编程AI训练营4期**🔥**🔥******

第1节试听👉 [AI训练营4期第1节【公开课】](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492176&idx=1&sn=7c6010926405f941ffadd378461fbc76&chksm=e9f6d0c1de8159d773f31273055f03ccaabb728a8ee760c7f9e43206ef2fefbf9baaf681651e&scene=21#wechat_redirect)

**🚀**🚀**实验编程会员介绍**🚀**🚀******

👉[实验编程会员介绍与报名指引](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491763&idx=1&sn=3eb0a20587f5a655d03666b31855267c&chksm=e9f6d222de815b342a897e11ba47867c9cda935678e4e3b0ff6bfbc517420d3200202604c0fa&scene=21#wechat_redirect)

会员可以在一年内畅享历届以及新一年持续增加的训练营、课程、源代码、内部社群等资源，报名通道长期开启，课程全程回放随到随学。

**近期教学活动介绍：**

👉[实验编程暑期爆肝教学活动一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247492168&idx=1&sn=c0b32c024fe1f3bcfa50fbebe1b0c4f1&chksm=e9f6d0d9de8159cfb6342e68e46f970f57443ebf633654b583229ccd4468b535cfb181a4a86a&scene=21#wechat_redirect)

**详细咨询、报名、加群：**

<img src="/uploads/geometry-algorithm-ai-pattern-240803/img_040.webp" alt="" loading="lazy" />

加微烦请注明：

来源（公B抖小知）、学校单位、专业行业、作品集、社交媒体等，高效交流。

实验编程没有水群，以上信息缺一不可，感谢理解。

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**
