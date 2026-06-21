---
id: "tutorial-stable-diffusion-webui-bug-merge-231106-zh"
concept_id: "stable-diffusion-webui-bug-merge-231106"
type: "tutorial"
slug: "stable-diffusion-webui-bug-merge-231106"
title: "我给Stable Diffusion WebUI修的bug，终于被作者merge了✌"
lang: "zh"
tags:
  - "stable"
  - "diffusion"
  - "webui"
  - "bug"
status: "canonical"
created: "2023-11-06"
updated: "2023-11-06"
version: 1
summary: "成功为💩山清理一块砖。"
coverUrl: "/uploads/stable-diffusion-webui-bug-merge-231106/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-11-06"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490563&idx=1&sn=291a0f43d2c523d6868d3f7b06431beb&chksm=e9f52e92de82a7840fbfa81269aaf02eeb3f4ad482af003760681cd3227ba1eafce1743e39ad"
useDocUrl: false
---

成功为💩山清理一块砖。

我现在SD WebUI、秋叶包（偶尔测试用）、ComfyUI三者共享一套外部文件夹，里面存放所有模型文件，之前也写了教程：
<a target="_blank" data-itemshowtype="0" href="http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&amp;mid=2247490394&amp;idx=1&amp;sn=8e43ffd4878dec63c9a6f7f54edec401&amp;chksm=e9f529cbde82a0dd51c4b6cdc4ecde87e6ba31e2851c46cda36b2ca671f5b7dcb63d8f861af3&amp;scene=142#wechat_redirect">一台电脑装多套Stable Diffusion时共享模型文件的方法</a>

但是有一些第三方插件或模块，因为大家都是忙着先怼功能，并不都是严格按照优雅的方式去加载存放模型文件。
例如我半月前在使用GFPGAN做Upscale时，遇到存在外部的模型文件无论如何也不读取的问题。

为证明我的教程没问题😡，着手进行了修复。
其实是多年铲💩惯性导致看见了不修难受。

这个bug表现简单，解起来还挺麻烦，与GFPGAN工程本身的代码逻辑圆环套圆环。看第二张图我给WebUI作者写的问题分析与修复方法就能得知。

目前这个bug修复已经合并入了WebUI的dev分支，可能过几天会一起并入master分支供正常使用。

Pull Request：
https://github.com/AUTOMATIC1111/stable-diffusion-webui/pull/13718

<img src="/uploads/stable-diffusion-webui-bug-merge-231106/img_001.webp" alt="" loading="lazy" />
<img src="/uploads/stable-diffusion-webui-bug-merge-231106/img_002.webp" alt="" loading="lazy" />
