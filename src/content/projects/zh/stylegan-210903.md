---
id: "project-stylegan-210903-zh"
concept_id: "stylegan-210903"
type: "project"
slug: "stylegan-210903"
title: "StyleGAN加虚幻，续杯"
lang: "zh"
tags:
  - "stylegan"
status: "canonical"
created: "2021-09-03"
updated: "2021-09-03"
version: 1
summary: "原始的人像我用StyleGAN2-ADA生成，然后在Unreal里过了一手特效。"
coverUrl: "/uploads/stylegan-210903/img_001.webp"
author: "Contra的后院"
publishedAt: "2021-09-03"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485188&idx=1&sn=f13bc99cd4fec07af4fcb1e9e1a8f729&chksm=e9f53595de82bc8331212c2fa1c671aac71a061fcd411c7035112a76c79ada1b5e307a3172e8"
useDocUrl: false
---

原始的人像我用StyleGAN2-ADA生成，然后在Unreal里过了一手特效。

之前发的AI习作，用的是当时的StyleGAN和StyleGAN2，需要大量的数据集和训练时间。

这一批换了StyleGAN2-ADA，是Nvidia爸爸后来出的，支持小数据集，实在是业余选手福音。

另外框架方面，以前用的是Google的Tensorflow，这回换了Facebook的Pytorch。也没什么特别原因，看它使用量越来越大，试试而已，反正都只是调包调参。

**参考资料**

* **StyleGAN2-ADA：**

  https://github.com/NVlabs/stylegan2-ada
* **StyleGAN2-ADA Pytorch版：**

  https://github.com/NVlabs/stylegan2-ada-pytorch

* **以前的AI练习：**

+ ## [“Turtle looks at green bean” AILog.008](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484651&idx=1&sn=3b90fabcf4d631f02fa466b0dbe2e9a3&chksm=e9f5367ade82bf6c5bfb62b091232d2d2ea3a32a43230c3461403fdea4050cf3ebc4ed41e7d2&scene=21#wechat_redirect)
+ ## [“There is a cycle” AILog.007](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484162&idx=1&sn=8134c95687cee0d8ff61d76afe6a2ca0&chksm=e9f53193de82b885c8c500a62df91ec913b2c6a4d6762e221e2ff48364a51dc2f3647b7c922a&scene=21#wechat_redirect)
+ [“The First Dance” AILog.006 Computational Audiovisual](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484153&idx=1&sn=e19d7572b0701db5a871ba33dd6ff7e3&chksm=e9f53068de82b97e2c285e5e7615c0e851643372fa53a1d28ae254d047d1d28593c4250c0802&scene=21#wechat_redirect)
+ ["World is ahead" AILog.005  “还行，比较压抑”](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484127&idx=1&sn=b0fedfc8b8fc4f463f4f28ad24d85d50&chksm=e9f5304ede82b958138caad7ecf0afe92319b2f5f628fa36d9cdf05b957e3af5bb998ab34156&scene=21#wechat_redirect)
+ ["Home is behind" AILog004](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484117&idx=1&sn=d9d1826d500fcd150cc0e19558883342&chksm=e9f53044de82b952b2990b33b1df5650333ec7c4297d8f95fe10aafd7a940359f6dd508fa0b1&scene=21#wechat_redirect)
+ ["You know nothing" AILog.003](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484104&idx=1&sn=a1b2c631470dee7aee35581829f766e4&chksm=e9f53059de82b94f3712f0ce79faa15df4257875df00d58781c6f4623bfcefd3fc331d5ea393&scene=21#wechat_redirect)
+ ["Not today" AILog.002](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484097&idx=1&sn=e48d0e64c127495ebf5aaf58d7d5c204&chksm=e9f53050de82b9464c08cdd17154639c5a2a006a06ff5d160c4ed6e11607bfbb7596f8bd83be&scene=21#wechat_redirect)
+ ["I don't know why." AILog.001](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484094&idx=1&sn=0f20ea3f87b08f4987e1d38cc08d2103&chksm=e9f5302fde82b939d2789fd4eb96f336a84ea8d01e7cb36bb340329cabde9edcf20b7260bf69&scene=21#wechat_redirect)
+ ## [又是一个AI艺术](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484729&idx=2&sn=14dcbbb0740ff4d7016fcd23c169930e&chksm=e9f537a8de82bebe60aa69145e6f639eb3fe3968ac7639b169d0b04a9905f1bf52e0f7ea6fed&scene=21#wechat_redirect)
+ ## [给AI创作的新食材，加上音画交互老配方](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484663&idx=1&sn=1071a3e673ad1d9bb81b538c2beca306&chksm=e9f53666de82bf701d8b08044b8655bf9ca7505f58775e6e0aef80ee745c846f853cb8fb3b55&scene=21#wechat_redirect)

---

**关于实验编程**

[关于实验编程 - 2021捌月](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247485135&idx=2&sn=ab8b3658d96f33adea0d7588b74e95f1&chksm=e9f5345ede82bd48e6da0c519b00a92db92f1a500feba907cfa0db07d1c8bf0bca0d9128b8f1&scene=21#wechat_redirect)

最新介绍见公众号菜单：【关于教学 - 关于实验编程】

**微信群**

微信号：floatbug，烦请注明来自公众号。

<img src="/uploads/stylegan-210903/img_001.webp" alt="" loading="lazy" />

**视频号**

公众号/视频号/知乎/B站：**实验编程**

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。
