---
id: "project-stablediffusion-230320-zh"
concept_id: "stablediffusion-230320"
type: "project"
slug: "stablediffusion-230320"
title: "两个StableDiffusion训练数据集标签管理器"
lang: "zh"
tags:
  - "stablediffusion"
status: "canonical"
created: "2023-03-20"
updated: "2023-03-20"
version: 1
summary: "数据集是AI模型训练重中之重，作为非技术人员，数据集的处理，是能参与到模型定制过程中、对AI模型训练结果产生直观影响的最直接和有效的手段。"
coverUrl: "/uploads/stablediffusion-230320/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-03-20"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488943&idx=1&sn=c7ac02b30107c66bd266f5e7bd367ee6&chksm=e9f5273ede82ae28b9a596061c527ab1de5f311cb438c53f6529b223eb69f855462f806fce0f"
useDocUrl: false
---

数据集是AI模型训练重中之重，**作为非技术人员，数据集的处理，是能参与到模型定制过程中、对AI模型训练结果产生直观影响的最直接和有效的手段**。

我在公开课和实验编程AI艺术课的多个章节里反复讲过数据集：

**AI艺术课-Runway篇：**

<img src="/uploads/stablediffusion-230320/img_001.webp" alt="" loading="lazy" />

****AI艺术课-**Colab篇：**

<img src="/uploads/stablediffusion-230320/img_002.webp" alt="" loading="lazy" />

****AI艺术课-模型**训练优化篇：**

<img src="/uploads/stablediffusion-230320/img_003.webp" alt="" loading="lazy" />

在做Stable Diffusion模型训练（Fine Tune）时，无论是Dreambooth、Textual Inversion还是Lora，均可按同样的思路处理数据集。

其中，如果要做Conditional模型训练（比如Lora），**给数据集打上正确的标签**，是提高模型训练效果的重要一环。

**推荐两个标签管理器**

**1. BooruDatasetTagManager**

独立安装的软件。

https://github.com/starik222/BooruDatasetTagManager

<img src="/uploads/stablediffusion-230320/img_004.webp" alt="" loading="lazy" />

**2. Dataset Tag Editor**

SD webui 扩展插件。

https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor

<img src="/uploads/stablediffusion-230320/img_005.webp" alt="" loading="lazy" />

数据在手，天下我有  
ε=ε=ε=┏(゜ロ゜;)┛

---

**近期课程动态**

* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)
* [【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

---

**关于实验编程**

* [**关于实验编程 - 2023.2**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)
* [**实验编程教学资源汇总 2023.2**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488514&idx=1&sn=8d4c4dd3a60a284ab72722dd7d39e1b8&chksm=e9f52693de82af85642389db878a309390dec9ae12a6b5c4e03f532f6753a989347efe9501e7&scene=21#wechat_redirect)
* [****教学指引 - 2023.2****](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488506&idx=1&sn=513917f199d4ba157f7f3b76647e31c9&chksm=e9f5216bde82a87d3087140fbd1f9ee3726a5738543403c18250ce52655ac11d8a8e7b1d0074&scene=21#wechat_redirect)
* ****[【AI艺术课】详解- 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488505&idx=1&sn=f4cd34b24716422c66ef462d274052e8&chksm=e9f52168de82a87e91acfe23335a54672dc585d4e86d88074534eff9e8c56ef5dedb2c7258f8&scene=21#wechat_redirect)****
* ****[教学更新，加量不加价](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=1&sn=14413a111c049f0bca2dec4081cebe47&chksm=e9f526dbde82afcd86a2800d4d7d03b5521a25b358fda33adac3d6103dfa9a953fba2d42361f&scene=21#wechat_redirect)****

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/stablediffusion-230320/img_006.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/stablediffusion-230320/img_007.webp" alt="" loading="lazy" />

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
