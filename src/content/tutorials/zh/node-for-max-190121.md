---
id: "tutorial-node-for-max-190121-zh"
concept_id: "node-for-max-190121"
type: "tutorial"
slug: "node-for-max-190121"
title: "Node for Max 二维码生成器"
lang: "zh"
tags:
  - "node"
  - "for"
  - "max"
status: "canonical"
created: "2019-01-21"
updated: "2019-01-21"
version: 1
summary: "“Node for Max”是 Max8 的新功能，通过它可以在 Max 中方便的调用 NodeJS。充分利用 NodeJS 海量的 NPM 库，能大大扩展 Max 的可能性。"
coverUrl: "/uploads/node-for-max-190121/img_001.webp"
author: "Contra"
publishedAt: "2019-01-21"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483815&idx=1&sn=7effcf53ee7cc1352f1a72caad793917&chksm=e9f53336de82ba204a9eb16e26150574502d427f3bc4c4a6a936fc5b0e040a48052e6978eb5e"
useDocUrl: false
---

“Node for Max”是 Max8 的新功能，通过它可以在 Max 中方便的调用 NodeJS。充分利用 NodeJS 海量的 NPM 库，能大大扩展 Max 的可能性。  
MaxMSP 官方介绍及入门教程：  
https://www.youtube.com/watch?v=PmyPdmujYQQ  
https://www.youtube.com/watch?v=qSZH6fjOcXE

Node for Max 使用相对方便:  
在 Max 中，使用 `[node script]` object。  
在 javascript 中：

```
const maxAPI = require("max-api");  
// listen from Max  
maxAPI.addHandler("genQR", (...args) => {     
    // send to Max
    maxAPI.outlet("filePath", filePath);
});
```

借助 Node for Max，做了一个 Max 二维码生成器：

<img src="/uploads/node-for-max-190121/img_001.webp" alt="" loading="lazy" />

用 Max 处理的特效/可视化/音视频，上传到服务器后（同样可用N4M调用各云服务的SDK），把视频链接生成二维码，用户扫码就能查看及带走了。

源代码/Patch下载（阅读原文）：  
https://www.patreon.com/posts/24123843

--------

以下是撑字数环节：

# n4m-qrcode-generator

A QRCode generator allow you to generate a QRCode image from some text, web URL, etc. It uses the node package "node-qrcode".

## Files

`qrcode-generator.maxpat` : The Max patch to run the example. It will generate a png file in qrcode folder from the message text.  
`qrcode-generator.js` : The launcher JS for the NodeJS script.   
`README.md` : This file!

## Usage

1. Launch the `qrcode-generator.maxpat` Max patch.
2. Click on the [script npm install] once to install the NodeJS package. And then click on the [script start] message to start the Node process.
3. Click the two example message object. You will see the image file generated in qrcode folder, and the image rendered in window.
4. You can scan the QRCode image using mobile phone App to see the result.
