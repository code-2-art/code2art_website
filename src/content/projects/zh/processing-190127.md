---
id: "project-processing-190127-zh"
concept_id: "processing-190127"
type: "project"
slug: "processing-190127"
title: "用 Processing 开发微信小游戏"
lang: "zh"
tags:
  - "processing"
status: "canonical"
created: "2019-01-27"
updated: "2019-01-27"
version: 1
summary: "p5.we，是一个以 weapp-p5js-adapter 为核心的开发项目，通过它，可以利用大量 p5.js 乃至 Processing 资源来开发微信小游戏。"
coverUrl: "/uploads/processing-190127/img_001.webp"
author: "Contra"
publishedAt: "2019-01-27"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483823&idx=1&sn=9f128d3927740b1606f6196c04b56dd5&chksm=e9f5333ede82ba2834f1ff783e00a2efad0956c083378f21667fe983891073bd8bf1b29b8d8d"
useDocUrl: false
---

**p5.we**，是一个以 weapp-p5js-adapter 为核心的开发项目，通过它，可以利用大量 p5.js 乃至 Processing 资源来开发微信小游戏。

<img src="/uploads/processing-190127/img_001.webp" alt="" loading="lazy" />

p5.js 是一套 javascript 语言的创意开发库，发源自 Processing 社区，它继承了 Processing 的伟大意志，方便快速，也可以很方便的将 Processing 项目移植到 web 平台上。

既然是 js 库，就有可能把 p5.js 用在微信小程序/小游戏的开发上。  
微信小游戏是小程序的一种，与普通小程序有相同的开发发布流程，又有不同的API。普通小程序偏向于各种与用户连接的周边接口，而小游戏的渲染功能更加丰富。详细区分见微信官方文档。

微信小游戏的开发语言就是 js，但 js 的运行环境及相关API，与常见的 browser-based js 和 node js 都不完全相同，是由微信自己开发实现：

> 小游戏的运行环境在 iOS 上是JavaScriptCore，在 Android 上是V8，都是没有 BOM 和 DOM 的运行环境，没有全局的 document 和 window 对象。因此当你希望使用 DOM API 来创建 Canvas 和 Image 等元素的时候，会引发错误。

p5.js 是强依赖于浏览器的库，无法直接运行在微信小游戏上。但微信提供了 Adapter，可用来模拟适配浏览器运行环境：

> 这些使用 wx API 模拟 BOM 和 DOM 的代码组成的库称之为 Adapter。顾名思义，这是对基于浏览器环境的游戏引擎在小游戏运行环境下的一层适配层，使游戏引擎在调用 DOM API 和访问 DOM 属性时不会产生错误。Adapter 是一个抽象的代码层，并不特指某一个适配小游戏的第三方库，每位开发者都可以根据自己的项目需要实现相应的 Adapter。官方实现了一个 Adapter 名为weapp-adapter， 并提供了完整的源码，供开发者使用和参考。

更多详情直接见微信文档。

p5.we （https://github.com/avantcontra/p5.we 点击文末“阅读原文”）  
正是基于此 Adapter 开发的一套脚手架，包含了适配核心 weapp-p5js-adapter，以及若干直观示例。

<img src="/uploads/processing-190127/img_002.webp" alt="" loading="lazy" />

目前主干 master 分支上的版本 0.1.2 适配了 p5.js 核心库内 P2D 相关大部分功能（其他分支上也有 WEBGL 模式的例子，但需要 hack p5.js 源代码)。  
对已有的 p5.js sketch 代码，只需要非常简单的改动即可。

下图左边是 p5.we 的例子，右边是 p5.js 原有例子：  
（https://p5js.org/examples/structure-setup-and-draw.html）

<img src="/uploads/processing-190127/img_003.webp" alt="" loading="lazy" />

weapp-p5js-adapter 所基于的基础 adapter 版本，尝试了微信官方示例，最后用的是大城小胖的 weapp-adapter ES6 version 。

<img src="/uploads/processing-190127/img_004.webp" alt="" loading="lazy" />

关于 WEBGL 模式，有个坑点：

微信小游戏只支持显示一个 canvas（ p5.js 支持多个），之后创建的 canvas，都是离屏面，见文档。  
而 p5.js 的机制是，在启动时会自动创建一个默认的 canvas，并且renderer模式是 P2D 的。  
当用户写的 `function setup(){}` 被 p5.js 调用时，里边创建的 canvas 其实已经不是第一个了，仍可以去刷新第一个 canvas 的宽高等属性，但 renderer 无法由 P2D 改为 WEBGL。

p5.we 当前版本，没有从 adapter 上解决这个问题，但可以 hack p5.js 源代码，令其默认创建的第一个 canvas 是 WEBGL 模式即可。

欢迎 PR！

Cheers~

--------

微信公众号：浮生开方

网站 floatbug.com/contra/

支持 patreon.com/avantcontra
