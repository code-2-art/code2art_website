---
id: "tutorial-maxmsp-fft-220318-zh"
concept_id: "maxmsp-fft-220318"
type: "tutorial"
slug: "maxmsp-fft-220318"
title: "源 | MaxMSP音画互动FFT基础"
lang: "zh"
tags:
  - "maxmsp"
  - "fft"
status: "canonical"
created: "2022-03-18"
updated: "2022-03-18"
version: 1
summary: "本例是音画互动的基础环节：FFT（快速傅里叶变换）演示，MaxMSP实现。"
coverUrl: "/uploads/maxmsp-fft-220318/img_001.webp"
author: "Contra的后院"
publishedAt: "2022-03-18"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486486&idx=1&sn=de56cbe2ee227b6b74589f9f5fb67e06&chksm=e9f53e87de82b79167ca4ba9bdcc0d571b2b9a61483339df1563dd7d90dd4cc1265da22a6cec"
useDocUrl: false
---

<img src="/uploads/maxmsp-fft-220318/img_001.webp" alt="" loading="lazy" />

本例是音画互动的基础环节：**FFT（快速傅里叶变换）**演示，**MaxMSP实现。**

首发2019.12.26，支持目前MaxMSP 8.0版本。

教程开放：

**https://www.yuque.com/code2art/case/wixs5m**

代码实现，实际上在视频里已包含👇。

**案例源文件：**

**https://ghc.h5.xeknow.com/s/2LIZIU**

象征性收费，过滤伸手党。

情报中心会员和年度学员免费，可在情报中心资源库自取。

首发初版本文章：

[二次元VJ之路：Bad Apple音画互动 [Patch a dirty #003]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484001&idx=1&sn=9fb32116eba2fc112ba6ea2dd50be6ae&chksm=e9f530f0de82b9e66f42cf1e36e91f59dfb0bd5ee27f64e8dadc17c65455cf382bffc21151c1&scene=21#wechat_redirect)

---

#### 

**关于实验编程**

* [关于实验编程 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=2&sn=26e1aac541f567f8365bc4a22845bab4&chksm=e9f5390ade82b01c8af55bb726971270926e5ef1675940228b70b764d01d7aa38a02b0003074&scene=21#wechat_redirect)
* [教学指引 - 2022.3](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=4&sn=9aeba971a993d5d21646c7f41d66ad63&chksm=e9f5397dde82b06b9937d0192fb2b2a3877c3e0e46e39a1ae368d31a3345ec0817c3d2542e61&scene=21#wechat_redirect)
* [《AI艺术推行计划》](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=2&sn=95ff18bb5e454015d95e5fee1bfe4bac&chksm=e9f5397dde82b06b497c172530d784567cadd1ce43400ac89bb2752ed69f176ed6b7b5b05b69&scene=21#wechat_redirect)
* [《AI艺术从入门到放肆》课程介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=3&sn=7089e20d6a497aaebf935a6251e0f1b2&chksm=e9f5397dde82b06bf36d234f408df19fc73987af568bbb3ed5ff234a526bbdd7cf1d09a471d8&scene=21#wechat_redirect)

**教学资源汇总：****yuque.com/code2art**

<img src="/uploads/maxmsp-fft-220318/img_002.webp" alt="" loading="lazy" />

**教学内容**

* **开放教程** - 公众号文章、视频教程
* **源代码源文件** - 文章教程配套代码
* **大帅课** - 干硬货讲座
* **专题课** - 深入某个主题精讲
* **答疑辅导** - 1对1定制

**教学模式**

* **专题课程** - 专项主题，付费课程
* **年度学员** - 1对1长期辅导
* **情报中心** - 源代码、课件资源、内部群答疑，适合自学型
* **单次付费咨询** - 1对1咨询，1小时视频会议

#### **什么是【答疑辅导】**

面向人群

* 数字媒体艺术、交互媒体、计算编程等领域的学习者。
* 需要不定期获取支持和建议的个人设计师、开发者、独立艺术家。
* **「不面向」企业**，企业咨询请单独联系。

热门主题

* 论文选题建议
* 作品方案与技术选型
* 技术问题拆解，解决方案建议
* 交互媒体、技术美术入门指引
* 个人学习情况评估，编程工具推荐，学习路线规划
* 专业职业发展建议，职场经验答疑
* 商业项目注意事项

**课程咨询及微信群：****floatbug**

<img src="/uploads/maxmsp-fft-220318/img_003.webp" alt="" loading="lazy" />

加微信烦请注明：来源（公B抖知）、学校单位、专业行业等，高效交流。

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

微信公众号/视频号/知乎专栏/抖音/B站：  
**实验编程**
