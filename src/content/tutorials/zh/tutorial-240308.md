---
id: "tutorial-tutorial-240308-zh"
concept_id: "tutorial-240308"
type: "tutorial"
slug: "tutorial-240308"
title: "大学中学进行AI教学的设备问题"
lang: "zh"
tags:
  - "ai"
status: "canonical"
created: "2024-03-08"
updated: "2024-03-08"
version: 1
summary: "今天的课比较有代表性，上午在同济大学给本科生上，下午在香山中学教中学生。"
coverUrl: "/uploads/tutorial-240308/img_001.webp"
author: "实验编程"
publishedAt: "2024-03-08"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491324&idx=1&sn=387bde916d70b9c8b149623730667431&chksm=e9f52c6dde82a57bcaa945ab0d92c905ad93dfb4293fae2944fca4604fd9e720595657b9c651"
useDocUrl: false
---

今天的课比较有代表性，上午在同济大学给本科生上，下午在香山中学教中学生。
无论chatgpt还是ai绘画，要现场带学生一起顺畅练习，可能大学中学都会遇到种种问题。

对大学生，我一般要求他们自行蹚一遍安装或访问方法，在这个过程中，解决当代学习科研的必备技能：搜索能力、上网能力、去除命令行恐惧等。在课堂一般都是笔记本，高配的自装sd（不使用整合包），低配的通过colab练习google生态。唯一问题可能是付费环节，本科生大多没有外币信用卡。但也可以想办法曲线救国。这些能力往往会给他们之后的各种课程学习打好基础，尤其非计算机专业。

对中学，限制更多，首先学校机房或配的笔记本不一定符合ai需求，尽量采用在线ai平台。外网的服务也不适合中学课堂，那么国内平台呢，模型能力倒是教学够用，但学生【没有或不能带手机】，那么如何注册登录呢？我目前采用的方案是自己改造部署了一套支持多人并发的Stable Diffusion系统，供学生在课堂上通过学校配的上网本来使用。看似是个好方案。但学校的网络并不稳定，教育网线路也有限制，今天我甚至用手机流量热点全程教学。另外国内服务手机号登录验证真是很烦，课堂作业学生们无法登录邮箱来交作业，因为要手机验证码...

今天教学生ai绘画时，提议生成悟空和阿拉蕾，纪念鸟山明大师。

<img src="/uploads/tutorial-240308/img_001.webp" alt="" loading="lazy" />
<img src="/uploads/tutorial-240308/img_002.webp" alt="" loading="lazy" />
