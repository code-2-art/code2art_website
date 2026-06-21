---
id: "tutorial-blender-200831-zh"
concept_id: "blender-200831"
type: "tutorial"
slug: "blender-200831"
title: "本来只是个鼠标跟随效果，干脆以后把Blender搞成交互软件吧！"
lang: "zh"
tags:
  - "blender"
status: "canonical"
created: "2020-08-31"
updated: "2020-08-31"
version: 1
summary: "Blender虽然是个CG软件，但不仅是CG软件，可玩性非常强，这方面看我历史文章："
coverUrl: "/uploads/blender-200831/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-08-31"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484583&idx=1&sn=820ac14be5b1ec662c68f16d107494a1&chksm=e9f53636de82bf20519c73e23941fb13aea502c70624f73f3934a184b97bc7db02251b837cc9"
useDocUrl: false
---

Blender虽然是个CG软件，但不仅是CG软件，可玩性非常强，这方面看我历史文章：

* [超简单！5分钟就能做出来的MaxMSP和Blender实时音画交互](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484059&idx=1&sn=3a3d57a20660d76dd47feb73fc68bdc4&chksm=e9f5300ade82b91cec5abdad86b3510eedf7d5ace1ee3c193ae9dec22f37d24043bdffe7a1fd&scene=21#wechat_redirect)
* [小程序中文语音识别并用Blender可视化，以及如何编解码中文字符](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484090&idx=1&sn=95f1b1b3ee1a50e7fc9c03d4caf6068e&chksm=e9f5302bde82b93d889ca8c7609f95958ea793c2761b34b82c954ce6c9ab9b8eb2d6ea2ae9b0&scene=21#wechat_redirect)
* [今天学会傅里叶画画，明天就是初音未来](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483966&idx=1&sn=dba1b327132ea952e827426c3dbce743&chksm=e9f530afde82b9b9c1b205634ae3b4ad8d0db277c6325be65582828335acc085b4367130c207&scene=21#wechat_redirect)
* [Blender创意编程专辑](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1374613622072344577&__biz=MzI1MTM0MDc5OA==#wechat_redirect)

今天本来只是分享一个小技巧，把2D视窗坐标的Mouse，映射到3D世界坐标，实现鼠标跟随效果。

**后来突发奇想Flag：就这样一步一步把Blender搞成交互媒体软件吧！**

今日先拱一卒，让一个Cube跟随鼠标：

<img src="/uploads/blender-200831/img_001.webp" alt="" loading="lazy" />

**核心代码：**

在Blender的Python脚本里，监听 `MOUSEMOVE` 事件，再做坐标变换。

<img src="/uploads/blender-200831/img_002.webp" alt="" loading="lazy" />

```

```

**使用方式：**

运行脚本 - "F3" - 搜索“Simple Modal View3D Operator”并回车 - 鼠标转起来！

**源文件：**

https://floatlab.yuque.com/g/ggz/id394g/folder/1064023

源文件可在语雀情报中心直接下载，情报中心全员开放。

如果你没有情报中心帐号，可以参考下边的文章，大功能基本一致。

**参考文章：**

https://blender.stackexchange.com/questions/150267/how-to-move-object-while-tracking-to-mouse-cursor-with-a-modal-operator

讲完了，老朋友不如直接去文末点个“**在看**”吧😄😆

封面图出自 nippon.com ，宁静的濑户内海。

---

**关于实验编程完整详情**

[关于实验编程 - 2020 八月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484512&idx=2&sn=f3ff9bbd8de4ccbe06210e0d98d7e6b5&chksm=e9f536f1de82bfe70147424c875e3dc716df4fdf0dde3790fe151496aacecd93a82026832879&scene=21#wechat_redirect)

---

**语雀情报中心**

* 日常技巧快速分享
* 源代码、源文件、资源下载
* 公众号文章汇总，修订，更新
* 教学内容，课程资料

详情请看：

[回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)

---

**付费教学**

情报中心还有付费教学和VIP会员专属的小组。

在这里会放付费课程、教学资料、作业点评、问题解答等内容。

**目前试推付费咨询和VIP会员，付费课程也在更新上架中。**

一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

详情请至：

* 公众号菜单：“关于教学 -> 付费教学”
* 或者公众号发送关键字：付费咨询
* 或者扫码直接进入商店：

<img src="/uploads/blender-200831/img_003.webp" alt="" loading="lazy" />

**答疑优先顺序：**

1. 付费咨询、课程学员、VIP会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

---

**知识星球**

**知识星球**是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。  
还可以直接在情报中心的知识星球专属下载区获取资源。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/blender-200831/img_004.webp" alt="" loading="lazy" />

---

**开源**

如【编程德鲁伊】系列的大部分代码开源在全球最大🐒🐵交友网站：

https://**github.com/avantcontra**/coding-druid

又如【H5如何收发OSC】的大合集（附MaxMSP，p5js，processing，unity等代码示例）  
https://**github.com/avantcontra**/osc-websocket-example

---

**实验编程视频号**

视频号与公众号内容不尽相同，有一些未在公众号公开的视频、制作花絮等。

<img src="/uploads/blender-200831/img_005.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/blender-200831/img_006.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

您的**鼓励**，**在看**，**点赞，****收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**

<img src="/uploads/blender-200831/img_007.webp" alt="" loading="lazy" />
