---
id: "tutorial-vj-bad-apple-patch-a-dirty-191226-zh"
concept_id: "vj-bad-apple-patch-a-dirty-191226"
type: "tutorial"
slug: "vj-bad-apple-patch-a-dirty-191226"
title: "二次元VJ之路：Bad Apple音画互动 [Patch a dirty #003]"
lang: "zh"
tags:
  - "vj"
  - "bad"
  - "apple"
  - "patch"
status: "canonical"
created: "2019-12-26"
updated: "2019-12-26"
version: 1
summary: "我悄悄把【Patch a day】改成【Patch a dirty】了，每天练习demo，比【[编程德鲁伊](http://mp.weixin.qq.com/s?biz=MzI1MTM0MDc5OA="
coverUrl: "/uploads/vj-bad-apple-patch-a-dirty-191226/img_001.webp"
author: "Contra的后院"
publishedAt: "2019-12-26"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484001&idx=1&sn=9fb32116eba2fc112ba6ea2dd50be6ae&chksm=e9f530f0de82b9e66f42cf1e36e91f59dfb0bd5ee27f64e8dadc17c65455cf382bffc21151c1"
useDocUrl: false
---

我悄悄把【Patch a day】改成【Patch a dirty】了，每天练习demo，比【[编程德鲁伊](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483966&idx=1&sn=dba1b327132ea952e827426c3dbce743&chksm=e9f530afde82b9b9c1b205634ae3b4ad8d0db277c6325be65582828335acc085b4367130c207&scene=21#wechat_redirect)】系列要轻量，直接用视频录下编程制作过程，着眼于局部效果/功能/算法的快速实现。如果哪一期感兴趣的人多，将加入编程德鲁伊系列图文详解。

**Patch a dirty #003**：

**二次元VJ之路：Bad Apple音画互动**

#003是用MaxMSP做的Bad Apple音画互动，主要用到了声音振幅、FFT频率、以及Shader（jit.gl.pix）等。

---

#### **Talk is cheap. Show me the code!**

本文制作过程在视频里已包含。  
**若仍需源文件，可在知识星球中获取****，****感谢已经加入星球的朋友们**。

另外编程德鲁伊系列绝大部分开源，可刨**公众号菜单**或者：  
https://github.com/avantcontra/coding-druid

在知识星球里你将持续获得实验代码和无限次答疑。  
详情请点击：[关于赞赏和内部知识星球](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483960&idx=1&sn=58917f286e362fe9f49ec3dd6985b1b6&chksm=e9f530a9de82b9bf25d318b160b8ff8172dba821d5be6f1d2e5bf48f10f6b0f774f349de6f4d&scene=21#wechat_redirect)。

<img src="/uploads/vj-bad-apple-patch-a-dirty-191226/img_001.webp" alt="" loading="lazy" />

---

欢迎猛戳下方**赞赏**或**喜欢作者**，**buy me a coffee**！

作为一名 Old School Blogger（始于2003年），我将维持内容输出大于赞赏所得。  
您的金钱鼓励，**在看**，**收藏**，**转发**，是我乱码的动力。

--

Contra

网站: floatbug.com  
B站：Contra的后院 **微信公众号/知乎专栏/知识星球：****实验编程**

<img src="/uploads/vj-bad-apple-patch-a-dirty-191226/img_002.webp" alt="" loading="lazy" />
