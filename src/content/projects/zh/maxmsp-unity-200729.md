---
id: "project-maxmsp-unity-200729-zh"
concept_id: "maxmsp-unity-200729"
type: "project"
slug: "maxmsp-unity-200729"
title: "MaxMSP乱斗机械臂，最后Unity乱入。仿真仿真，才不是什么音画互动。"
lang: "zh"
tags:
  - "maxmsp"
  - "unity"
status: "canonical"
created: "2020-07-29"
updated: "2020-07-29"
version: 1
summary: "现场软硬件联合调试画面"
coverUrl: "/uploads/maxmsp-unity-200729/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-07-29"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484464&idx=1&sn=6ff996e6432f03f5bf4f13655a044543&chksm=e9f536a1de82bfb76ac76719ab7a22ca199dac05ea0513187389b6ed2616c7dda6b04be98504"
useDocUrl: false
---

<img src="/uploads/maxmsp-unity-200729/img_001.webp" alt="" loading="lazy" />

现场软硬件联合调试画面

这是2017年做的一个机械臂多屏幕展示项目（ManaVR ✖ INT++）。

在前期我使用了MaxMSP Jitter配合ABB的RobotStudio，对机械臂和大屏幕进行仿真。

通常对于机械臂项目，软件、硬件、交互、视觉、内容、以及安装施工等每个环节都往往大坑套小坑，这个项目也充分发挥了我司（INT++）丰富的填坑技能包。

本文仅着眼于介绍如何巧用MaxMSP来做项目原型的仿真，充分利用了MaxMSP Jitter里非常方便的TCP通信、多屏幕运动模拟等功能模块。

**总之你懂的，在我手里，MaxMSP不仅仅是那个MaxMSP**🙃 。

<img src="/uploads/maxmsp-unity-200729/img_002.webp" alt="" loading="lazy" />

现场办公照片，保护我方屏幕，没撞碎几块

RobotStudio是ABB公司出的“机器人”编辑、调试、仿真一体化工具。

根据实际需求，在RobotStudio的场景中放4台机械臂，然后编排相应的动作，例如位移和旋转的组合。

<img src="/uploads/maxmsp-unity-200729/img_003.webp" alt="" loading="lazy" />

RobotStudio软件界面

然后使用TCP将位置和旋转数据发送出去。

这个可以在RobotStudio中编程实现。

**老乡不要走！下面有视频！**

在Max中，通过TCP接收从RobotStudio发来的数据。

用一段嵌入Max的js代码做数据的解析。

最后用处理后的数据去控制4个jit.gl.videoplane。

而videoplane里，可以播放设计好的视频素材。

<img src="/uploads/maxmsp-unity-200729/img_004.webp" alt="" loading="lazy" />

为TCP通信定义了一个简单的数据协议，在RobotStudio中打包（基本是C语言），在Max中进行解析。

一开始使用二进制格式的数据流，在Max中接收到后解析不方便。因为只是个简单的原型，所以改用直接拼字符串的方式打包数据。

RobotStudio与MaxMSP联合仿真视频：

别调音量了，这个没声音...

---

**一些资料**

* RobotStudio机械臂编排的源文件这里不便放出，可以下载RobotStudio自行尝试，有一个月免费试用期。https://new.abb.com/products/robotics/robotstudio

  预警：有一丢丢上手难度。

* **MaxMSP部分的源文件，可在实验编程情报中心（语雀），或者知识星球获取源文件。**

  一起来把MaxMSP玩儿坏鸭！
* 封面图引自verge3d.com

**老乡不要走，片尾有Unity彩蛋！！！**

---

**语雀情报中心**

详情请看：

[回来了，请坚持日拱一卒。情报中心改版。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484447&idx=1&sn=df4c8e67bb9d61c119b49efd589c2824&chksm=e9f5368ede82bf983d43237e8880c106f0641652553cef4cf7491079b08b13f61e045fa460d1&scene=21#wechat_redirect)

加入方式：

1. 通过邀请链接（已关闭）。过去的三个月，在微信群可以获取免费邀请链接。

2. **知识星球**的盆友请在星球或微信联系我，直接加入情报中心。

3. **付费教学或VIP会员**，可以直接加入情报中心。

4. 以后**不定期开放**免费邀请，请关注公众号。

因为语雀空间有名额限制，成员资格以加入日期开始，一年为期限。

---

**知识星球**

**知识星球**是我感谢各位赞赏的地方，在这里你将持续获取大部分系列的源代码以及无限次图文答疑。当然现在还可以直接在情报中心的知识星球专属下载区获取资源。

有一点付费门槛，平均一天几毛钱，象征性过滤伸手党，也是对赞赏用户的尊重。

更多介绍，请刨公众号菜单：**关于-知识星球**。

<img src="/uploads/maxmsp-unity-200729/img_005.webp" alt="" loading="lazy" />

另有【编程德鲁伊】等系列的大部分代码开源在全球最大🐒🐵交友网站：  
https://**github.com/avantcontra**/coding-druid

---

**付费教学**

情报中心还有付费教学和VIP会员专属的小组。

在这里会放付费课程、教学资料、作业点评、问题解答等内容。

这一块还在持续整理中，目前试推付费咨询和VIP会员，一可以提高答疑质量，二过滤无效问答省出时间写更多的文章，三也可以增加收入Cover公众号运营成本，简直三赢。

详情请至：

* 公众号菜单：“关于教学 -> 付费教学”
* 或者公众号发送关键字：付费咨询
* 或者**点击文末「阅读原文」**

**答疑优先顺序：**

1. 付费咨询或VIP会员（**必答**，优先）
2. 知识星球（**必答**）
3. 语雀情报中心（**必答**，抽空）
4. 微信群（选答，尽量）

---

**实验编程视频号**

视频号与公众号内容不尽相同，有一些未在公众号公开的视频、制作花絮等。

<img src="/uploads/maxmsp-unity-200729/img_006.webp" alt="" loading="lazy" />

---

**实验编程微信群**

* 讨论本公众号内容。尤其Computational Art，Generative Art。
* 小程序BugOSC功能建议、Bug反馈。
* 便于发布通知和调研，例如课程、答疑、Workshop等。

加群请扫码或搜索微信号：**floatbug**

<img src="/uploads/maxmsp-unity-200729/img_007.webp" alt="" loading="lazy" />

烦请注明来自公众号。

---

**彩蛋：**

虽然我现在有意识减少了Unity内容，当然是因为忙不过来，才不会是因为不会（Unity3.5版我还是可以的...）

但是Unity自然还是能打的！

下面视频里，同样是这个项目，改用Unity和RobotStudio做机械臂效果仿真：

重点是，这不是我写的！（为什么要写这句，为什么要加感叹号？）

这是**INT++**团队里**十八项硬件全能、踏雪填坑无痕**的**大Q**老师，在夜深人静思考下一顿给孩子做什么饭的间隙拿Unity写的。

大Q老师也在实验编程知识星球、情报中心、和微信群里。

所以呢，其实我的意思是机械臂相关的问题就不要问我了，问他去吧……

---

您的**鼓励**，**在看**，**点赞，****收藏**，**转发**，是我乱码的动力。

网站: floatbug.com  
英文版全网ID：@avantcontra

微信公众号/视频号/知识星球/  
知乎专栏/B站：  
**实验编程**

<img src="/uploads/maxmsp-unity-200729/img_008.webp" alt="" loading="lazy" />
