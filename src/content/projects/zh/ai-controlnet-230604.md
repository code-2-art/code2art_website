---
id: "project-ai-controlnet-230604-zh"
concept_id: "ai-controlnet-230604"
type: "project"
slug: "ai-controlnet-230604"
title: "AI 生成可扫码图像 — 新 ControlNet 模型展示"
lang: "zh"
tags:
  - "ai"
  - "controlnet"
status: "canonical"
created: "2023-06-04"
updated: "2023-06-04"
version: 1
summary: "许久没有更新公众号，来分享一个新作："
coverUrl: "/uploads/ai-controlnet-230604/img_001.webp"
author: "实验编程"
publishedAt: "2023-06-04"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489351&idx=1&sn=b83f78e0e6b945b3cea9552ffaede855&chksm=e9f525d6de82acc0acd9cc919c9437df94b7d4e0c45b519e8402d18c7360be69e3523a106a37"
useDocUrl: false
---

## 引

许久没有更新公众号，来分享一个新作：  
**ControlNet for QR Code**

什么效果？有什么用处？来看下面的例子。

这是一张平平无奇，看上去略有些错乱的 Stable Diffusion 生成的风格化图像：

<img src="/uploads/ai-controlnet-230604/img_001.webp" alt="" loading="lazy" />

但给它加上三个定位点后，这张图就变成一个可以扫描识别的二维码了：

<img src="/uploads/ai-controlnet-230604/img_002.webp" alt="" loading="lazy" />

长按识别二维码，跳转至 qrbtf.com

很神奇吧！下面是这个项目的缘起、训练过程和更多生图结果……

## 缘起

大二的时候，我和同学做了一个参数化二维码生成器，qrbtf.com（[如何制作一个漂亮的二维码](https://mp.weixin.qq.com/s?__biz=MzU1Njg1NTU2Mw==&mid=2247484719&idx=1&sn=6188194d879096a04a2be4771f397bdd&scene=21#wechat_redirect)），出于各种（摆烂）原因，至今没有继续更新。记得一次和创新工场的咏刚老师交流时，突然聊到，能不能在任何肉眼观察完全正常的图像中编码隐藏的信息。在那个 GAN 的年代，机器学习的生态远没有如今活跃，不说有 Gradio Web UI、Diffusers 这样好用的框架，但配环境就足够劝退我了，这个想法就此搁置。

<img src="/uploads/ai-controlnet-230604/img_003.webp" alt="" loading="lazy" />

直到 Stable Diffusion 横空出世、ControlNet 席卷各大行业，经历了很长一段时间的摸索，我才重新开了这个坑，能不能用扩散模型生成一个看上去很像一张图片的二维码？

<img src="/uploads/ai-controlnet-230604/img_004.webp" alt="" loading="lazy" />

最初的 ControlNet 尝试

<img src="/uploads/ai-controlnet-230604/img_005.webp" alt="" loading="lazy" />

训练的中国传统纹样 LoRA

<img src="/uploads/ai-controlnet-230604/img_006.webp" alt="" loading="lazy" />

AIGC All in One 文档，持续更新中

<img src="/uploads/ai-controlnet-230604/img_007.webp" alt="" loading="lazy" />

HuggingFace JAX/Diffusers Sprint

## 训练

ControlNet 训练的数据结构十分简单，仅为一张输入图（conditioning image）、一张输出图（image）和一段标注（caption）。官方给出了非常多预训练模型，包括 1.0 版本中的 Depth、HED、OpenPose 和 1.1 中非常有创意的 Shuffle、Tile 和 Instruct Pix2Pix 等。

ControlNet 的训练对数据量和算力均有较高要求，论文中记录的训练数据量从 8 万到 300 万不等，训练时间可达 600 个 A100 GPU 小时。好在作者提供了基础的训练脚本，HuggingFace 也做了 Diffusers 实现。

在此前的 JAX Sprint 中，我们有幸使用 Google TPU v4，非常快地完成了 300 万张图的训练。可惜活动结束，我们回到了实验室的 A6000 / 4090，训练了一个 10 万张图的版本，且学习率非常大，只为尽早出现“突变拟合”（Sudden Convergence）。

<img src="/uploads/ai-controlnet-230604/img_008.webp" alt="" loading="lazy" />

GPU / TPU 训练参数

<img src="/uploads/ai-controlnet-230604/img_009.webp" alt="" loading="lazy" />

灰度控制 ControlNet，训练流程见 aigc.ioclab.com/sd-showcase/brightness-controlnet

<img src="/uploads/ai-controlnet-230604/img_010.webp" alt="" loading="lazy" />

光影控制 ControlNet，训练流程见 aigc.ioclab.com/sd-showcase/light\_controlnet

## 推理

测试模型训练完毕后，我们尝试了多种 Checkpoint + LoRA + QR Code ControlNet 的组合。得到了下面各式各样的可识别二维码。

### 中国传统纹样

LoRA 训练流程：aigc.ioclab.com/sd-showcase/chinese-ornament   
LoRA 模型下载：civitai.com/models/29858/chinese-traditional-pattern

<img src="/uploads/ai-controlnet-230604/img_011.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_012.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_013.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_014.webp" alt="" loading="lazy" />

### 浮世绘风格

LoRA 训练流程：aigc.ioclab.com/sd-showcase/fuyue   
LoRA 模型下载：civitai.com/models/25222/ukiyo-e-fuyue-style-background-mix

<img src="/uploads/ai-controlnet-230604/img_015.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_016.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_017.webp" alt="" loading="lazy" />

### 二次元和插画风格

<img src="/uploads/ai-controlnet-230604/img_018.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_019.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_020.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_021.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_022.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_023.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_024.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_025.webp" alt="" loading="lazy" />

### 水墨风格（MoXin）

<img src="/uploads/ai-controlnet-230604/img_026.webp" alt="" loading="lazy" />

### 水彩风格

<img src="/uploads/ai-controlnet-230604/img_027.webp" alt="" loading="lazy" />

### 立体风格

<img src="/uploads/ai-controlnet-230604/img_028.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_029.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_030.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_031.webp" alt="" loading="lazy" />

### 抽象风格

<img src="/uploads/ai-controlnet-230604/img_032.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_033.webp" alt="" loading="lazy" />

### PCB 风格

<img src="/uploads/ai-controlnet-230604/img_034.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_035.webp" alt="" loading="lazy" />

### Bonus：Ps 重绘

<img src="/uploads/ai-controlnet-230604/img_036.webp" alt="" loading="lazy" /><img src="/uploads/ai-controlnet-230604/img_037.webp" alt="" loading="lazy" />

## 后记

本科毕业之际，疫情退散，看到了生成式 AI 如此蓬勃发展，不禁感叹，真想重读一次本科。

这次的 QR Code ControlNet 离不开和 @陈柏宇(时辰) @王照涵 @陈智勇 几位同学的通力合作，一起在三天内完成了数据集准备、训练和推理测试，以及来自吕欣老师、孙国玉老师实验室的 GPU 资源支持。也要隆重感谢 Google、HuggingFace 此前慷慨提供的 TPU 服务器，属实是爽了一把。

模型发布、技术文档请留意公众号后续更新和文档更新（aigc.ioclab.com），欢迎点击阅读原文给文档留言！
