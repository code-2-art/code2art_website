---
id: "project-blender-python-211002-zh"
concept_id: "blender-python-211002"
type: "project"
slug: "blender-python-211002"
title: "【代码更新】用Blender和Python画圣诞树"
lang: "zh"
tags:
  - "blender"
  - "python"
status: "canonical"
created: "2021-10-02"
updated: "2021-10-02"
version: 1
summary: "曾在2019年圣诞节发过这一篇："
coverUrl: "/uploads/blender-python-211002/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-10-02"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485242&idx=2&sn=4662f697a9333f268e1f73606aab41c0&chksm=e9f535abde82bcbd1d181d040a6773b5acdafee6bfc813edaa02b992e2feab5fe508a827a654"
useDocUrl: false
---

曾在2019年圣诞节发过这一篇：

[用Blender和Python送你一棵圣诞树 [Patch a day #002]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483990&idx=1&sn=4061a9ff55f9c1012b9c118eee461cbb&chksm=e9f530c7de82b9d15b3b3d45d61cf9a14fc98ccbecd0722a911042d0b350ea9f24f97c68b6c2&scene=21#wechat_redirect)

这篇的源代码在【情报中心】可以获取。同时也挂在gumroad上。

最近Instagram上有人反馈代码无法运行：

<img src="/uploads/blender-python-211002/img_001.webp" alt="" loading="lazy" />

ps，从Instagram上答疑也是第一次……

经过排查，是因为Blender 2.9后，Grease Pencil的Python API变了，导致运行报错（我当时是在Blender 2.8下制作）。

**修复也较简单：**

报错是：

gp\_stroke.draw\_cyclic = False这一行的"**draw\_cyclic**"没有定义。

修复：

将三处"**draw\_cyclic**"替换为"**use\_cyclic**"即可。

然后删除上一次已生成的，点击脚本的“Play”重新生成。

---

**关于实验编程**

[关于实验编程 - 2021捌月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485135&idx=2&sn=ab8b3658d96f33adea0d7588b74e95f1&chksm=e9f5345ede82bd48e6da0c519b00a92db92f1a500feba907cfa0db07d1c8bf0bca0d9128b8f1&scene=21#wechat_redirect)

最新介绍见公众号菜单：【关于教学 - 关于实验编程】

**情报中心**

* 实验编程的知识内核
* 汇总了公众号和原知识星球所有源文件、代码、笔记等，长期更新
* 公众号文章汇总，修订，更新
* 支持无限次图文答疑
* 付费学员的教学专区
* **大帅课**

详见公众号菜单：【关于教学 - 情报中心】

**微信群**

微信号：floatbug，烦请注明来自公众号。

<img src="/uploads/blender-python-211002/img_002.webp" alt="" loading="lazy" />

**视频号**

公众号/视频号/知乎/B站：**实验编程**

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。
