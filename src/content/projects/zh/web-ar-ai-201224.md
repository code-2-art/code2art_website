---
id: "project-web-ar-ai-201224-zh"
concept_id: "web-ar-ai-201224"
type: "project"
slug: "web-ar-ai-201224"
title: "今年的圣诞树是Web + AR ​+ AI"
lang: "zh"
tags:
  - "web"
  - "ar"
  - "ai"
status: "canonical"
created: "2020-12-24"
updated: "2020-12-24"
version: 1
summary: "去年今日，用Bender和Python写了一棵圣诞树："
coverUrl: "/uploads/web-ar-ai-201224/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-12-24"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484737&idx=1&sn=844a4d4091bfa0709b008efa0e7ddcff&chksm=e9f537d0de82bec6df0f54fb18ed4719a27897f20a7405b616871755c024003ee1044fa8e104"
useDocUrl: false
---

去年今日，用Bender和Python写了一棵圣诞树：

原文：[用Blender和Python送你一棵圣诞树](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483990&idx=1&sn=4061a9ff55f9c1012b9c118eee461cbb&chksm=e9f530c7de82b9d15b3b3d45d61cf9a14fc98ccbecd0722a911042d0b350ea9f24f97c68b6c2&scene=21#wechat_redirect)

今天测试一个工作流：

从Blender中把通过Sverchok插件或Python脚本生成的模型导出来，再导入到Web网页中渲染。

顺便加上网页版机器学习人脸识别，把去年的圣诞树“贴”脸上玩玩。

注意我写的是“**贴**”脸上，而不是“**戴**”头上。

看上边视频可知，这里仅仅识别了视频中的人脸，而并没有计算人脸深度，所以整个视频其实作为单独一层，位于3D渲染层的下方。

后续可以试试用神经网络库（例如Tensorflow），计算出视频中的深度信息，提前做一个深度场景，让圣诞树🎄或帽子🧢等挂件在渲染的时候，基于此深度产生一些变化，使其看起来更加自然。

---

**Talk is cheap，Show me the Code！**

去年Blender+Python圣诞树的源文件，在知识星球和语雀。

今天这个Web + AR + AI圣诞树：

* 树本身是从去年圣诞树里导出的模型。
* Web + AI + AR这块，用的是jeeliz家出的jeelizFaceFilter，它有自家的前端AI库，以及多套脚手架工程文件，很适合做快速原型测试。  
  https://github.com/jeeliz/jeelizFaceFilter
* 渲染部分用的是老朋友threejs。

jeelizFaceFilter自带的例子基本换换模型就可以跑。

**若你仍需要今天的源文件（Web源代码，以及已导出的圣诞树模型），后台回复下方文字即可：**

**2020圣诞树**

---

**实验编程**

[关于实验编程 - 2020 八月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484512&idx=2&sn=f3ff9bbd8de4ccbe06210e0d98d7e6b5&chksm=e9f536f1de82bfe70147424c875e3dc716df4fdf0dde3790fe151496aacecd93a82026832879&scene=21#wechat_redirect)

<img src="/uploads/web-ar-ai-201224/img_001.webp" alt="" loading="lazy" />

**开源**

【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：  
https://github.com/avantcontra/coding-druid

【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://github.com/avantcontra/osc-websocket-example

**情报中心（**语雀**）**

* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料

详情请看：

[回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)

**知识星球**

知识星球是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。  
还可以直接在情报中心的知识星球专属下载区获取资源。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨**公众号菜单：关于-知识星球**。

**付费教学**

情报中心还有付费教学和VIP会员专属的小组。

在这里会放付费课程、教学资料、作业点评、问题解答等内容。

这一块目前试运行中，一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

详情请至：

* **公众号菜单：关于教学 -> 付费教学**
* 或者公众号发送关键字：付费咨询

**答疑优先顺序：**

1. 付费咨询、VIP/课程会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

**实验编程视频号**

<img src="/uploads/web-ar-ai-201224/img_002.webp" alt="" loading="lazy" />

**实验编程微信群**

加群请扫码或搜索微信号：floatbug

<img src="/uploads/web-ar-ai-201224/img_003.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**
