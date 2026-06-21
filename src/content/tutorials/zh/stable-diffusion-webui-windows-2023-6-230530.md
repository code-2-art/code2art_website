---
id: "tutorial-stable-diffusion-webui-windows-2023-6-230530-zh"
concept_id: "stable-diffusion-webui-windows-2023-6-230530"
type: "tutorial"
slug: "stable-diffusion-webui-windows-2023-6-230530"
title: "Stable Diffusion webui 本地安装教程 Windows（2023.6）"
lang: "zh"
tags:
  - "stable"
  - "diffusion"
  - "webui"
  - "windows"
status: "canonical"
created: "2023-05-30"
updated: "2023-05-30"
version: 1
summary: "流量筛选：这不是保姆级、超详细、看这个就够了教程。"
coverUrl: "/uploads/stable-diffusion-webui-windows-2023-6-230530/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-05-30"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489327&idx=1&sn=47be04a35bb9b946284c1b124652a381&chksm=e9f525bede82aca8e637889489ed37dc6717bcfdcbd41cb8ade90ca258d04d4c7ace43505c34"
useDocUrl: false
---

流量筛选：这不是保姆级、超详细、看这个就够了教程。

从教学角度，我更倾向于学习解决问题的根本方法，举一反三的能力，以及“一手信息”的重要性。

**SD webui Windows 本地安装**

**本篇主要内容：**

* 安装方式1，使用sd.webui.zip包。
* 安装方式2，手动安装Python方式（附安装视频）。
* 安装方式3，Conda。
* 安装方式4，全盘手动安装。
* 安装失败问题及解决方法。

**webui选择AUTOMATIC1111版：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui

**官方文档：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui#installation-and-running

**Windows详细版：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs

**安装前提：**

Windows 10/11，8G显存以上的Nvidia显卡。

****安装方式 1****

****使用sd.webui.zip包****

**官方文档：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs#windows-method-1

**关键步骤：**

**1.** **下载 sd.webui.zip**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases/tag/v1.0.0-pre

存放到打算装SD的文件夹（磁盘空间建议留几十G以上，越多越好），解压缩，然后打开 sd.webui 文件夹：

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_001.webp" alt="" loading="lazy" />

**2. 双击 update.bat 脚本**

它会更新 webui 到最新版本，等待更新完成后关闭窗口。

**3. 双击 run.bat 脚本**

它会启动 webui，在第一次启动时，它将下载大量文件。

在所有文件正确下载和安装完成后，应该会看到一条消息：

```
Running on local URL:  http://127.0.0.1:7860
```

在浏览器里打开上面的链接，就可以看到 webui 的界面。

**💡提示:**

这个方式操作简单，无需提前手动安装Python和Git，都已经包含在第一个压缩包sd.webui.zip里了，并且后续的脚本启动时会自动配置环境变量（就是让你电脑知道Python和Git程序的路径）。

**这个方式适合：**

只在这台电脑里使用SD webui，没有其他软件会用到Python或Git的情况。否则有一定可能造成其他软件调用Python或Git时发生路径错误。

简单的说如果电脑里只装SD webui这一套AI相关的工具，不懂或不想深究Python、Git、环境变量等名词，可以选择这个方法。

**安装方式 2**

**单独安装Python**

**官方文档：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui#automatic-installation-on-windows

**关键步骤：**

**1. 安装 Python 3.10.6**

如果不熟悉torch，就安装这个Python版本。下载链接：

https://www.python.org/ftp/python/3.10.6/python-3.10.6-amd64.exe

注意安装过程中选择 ***Add to PATH***（即把正在装的这个Python加入环境变量）。

**2. 安装Git**

下载链接：

https://github.com/git-for-windows/git/releases/download/v2.39.2.windows.1/Git-2.39.2-64-bit.exe

或者git官网：

https://git-scm.com/downloads

**3. 通过Git获取SD webui**

打开命令提示符/命令行窗口/终端：

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_002.webp" alt="" loading="lazy" />

*关于命令行知识，实验编程AI艺术系统课程、以及前两期训练营里都有详细的视频教程，见“**入门篇”**：*

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_003.webp" alt="" loading="lazy" />

在命令行窗口敲入以下命令后回车运行：

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

**4. 双击 webui-user.bat**

git clone成功后，打开 stable-diffusion-webui 文件夹，双击 webui-user.bat，启动 webui 。在第一次启动时，它将下载大量文件。

在所有文件正确下载和安装完成后，你应该会看到一条消息：

```
Running on local URL:  http://127.0.0.1:7860
```

在浏览器里打开上面的链接，就可以看到 webui 的界面。

**👀安装视频**（sd webui官方提供）**：**

****💡提示:****

这个方式也不复杂，推荐大部分想长期使用SD webui的人选用。

**安装方式 3**

**Conda**

还可以使用conda来装，通过conda创建一套sd webui专用的运行环境，好处是可以灵活的复制、删除，不影响系统里其他软件的运行。

比如创建好一套sd webui环境后，再复制一套，一杯用来喝，一杯倒掉。啊不，一个生产使用，一个测试新插件用，玩坏了删掉就行。

同理，还可以通过conda创建StyleGAN等其他AI模型专用环境。

**官方文档：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs#alternative-installation-on-windows-using-conda

*关于conda的知识，实验编程AI艺术系统课程、以及前两期训练营里都有详细的视频教程，见**“进阶篇”**：*

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_004.webp" alt="" loading="lazy" />

**💡提示:**

SD webui 官方文档的Conda安装方法，有个不算坑的坑。它其实只是用Conda安装了Python环境，之后如果仍通过 webui-user.bat 来启动webui，它仍然会再装一个Python虚拟环境VENV\_DIR，然后把所有后续需要的Library都装在这个VENV\_DIR中，而非都跟Python一样统一装在Conda环境里。

使用没什么问题，但如果你和我一样通过手动安装的方式，并且把所有Library都装在Conda环境里，那么可能无法通过 webui-user.bat 来启动。但可以直接运行 launch文件来启动：

```
 python .\launch.py --port 7860
```

**安装方式 4**

**全盘手动安装**

**官方文档：**

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs#manual-installation

当然还可以“手动”安装，主要是指逐个安装运行SD webui所需要的各种模块。其实上边通过脚本启动SD webui时，它就是自动检查并安装这些模块的。

我自己用的本地SD webui环境，是很早期时混合了conda和手动安装的版本，一直更新使用至今。

**💡提示:**

推荐有一定命令行操作、Shell脚本、Python基础的人选择conda或手动安装，通过这个过程，会加深你对SD及SD webui的理解，**尤其是遇到生成时出现Error的情况时，能更快定位问题所在。**

**安装失败问题**

**网络，网络，网络**

前两种安装方式其实很简单，**绝大部分问题都出在网络上**，经常会因某种原因，导致git clone时失败，或下载大模型文件时很慢或断开。

**解决办法：**

● 手动下载各模块在github上的源码 + 手动安装。

● 提前下载各种大模型文件，放在相应的文件目录下。

● **更加推荐直接治本：解决网络问题**。这也是当下学习的前提必要条件。

也可以选择各种国内的“整合包”、“启动器”等，全网搜即可。

从教学角度，我更倾向于学习解决问题的根本方法，举一反三的能力，以及“一手信息”的重要性。

Good luck~

**对实验编程会员，安装过程遇到的任何问题，都可以在情报中心进行答疑。**

**实验编程AI艺术训练营**

**训练营、课程体系、会员详细介绍：**

👉 [**实验编程AI艺术训练营2023报名及教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)

**训练营3期第1课**，支持单次课报名试听：

**👉 [AI艺术训练营3期介绍（视频）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)**

**情报中心：**

情报中心是实验编程知识内核，类似XX星球。

汇总了课程、课件、源代码、推荐资源、交流答疑。

加入即可开始学习，有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

情报中心因大大提升了课程福利，将于6.18起又一次喜迎涨价活动。  
6.18前仍保持原价，详见下方报名入口。

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_005.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_006.webp" alt="" loading="lazy" />

---

**部分课程**

* [AI艺术训练营3期介绍（视频）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [为DragGAN热身，实时AI音画交互案例](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489267&idx=1&sn=a46c4b0b250398e86aa52a6d5d91cb3e&chksm=e9f52462de82ad743949ca5de93d5d8344c6528aa0456bd615f35a9522504913ca51a1c91d4a&scene=21#wechat_redirect)
* [AI Craft 第1课报名 | AI单刷爱死机](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488917&idx=1&sn=744f50c84f3e1a9289f21d056bf8049e&chksm=e9f52704de82ae129652e4af32089dc405184057bebcd4fe7aa27ae4d81e9421ca78146388fe&scene=21#wechat_redirect)
* [课件已开放,今晚(周四)AI动画视频制作 | 大帅课第13期](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488812&idx=1&sn=98b580a13956682c49197d56e29c0b7f&chksm=e9f527bdde82aeabd1c48b6c0c11c7c74716d7986c557b5e4b1c03a29b53d843ef3a68324672&scene=21#wechat_redirect)
* [课程动态|AI流体动画2-山水与正弦](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488602&idx=1&sn=55dfd96d687e7be1e24a4df5c1c9842b&chksm=e9f526cbde82afdd41f0b7b91df6c707e2cded7e03f778dfd576d1f131fe077fed6fe7dc956f&scene=21#wechat_redirect)
* [课程动态|放肆篇-AI动画-流体效果1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488309&idx=1&sn=8719f82a35e35318593d4869e341d549&chksm=e9f521a4de82a8b2ffceb0045bf17bad413b0bc2f1ac1045ec4d1b7910aa8dd40af191f6b60e&scene=21#wechat_redirect)
* [课程动态|AI艺术入门篇Runway章课件更新](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488299&idx=1&sn=e653462b9968f93198ef378270ddc606&chksm=e9f521bade82a8ac08ad9073536c5504d25307c029906d3a33af43f3978cded4bcc45d71d90c&scene=21#wechat_redirect)

**关于实验编程**

* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488568&idx=1&sn=11bcdf114a3efd42c443cda9d3f2fee0&chksm=e9f526a9de82afbf6b4d3bf2bf58865f429000667db3f7a6acbc1d38d4346d3caa19a783d1ec&scene=21#wechat_redirect)

**教学资源索引：****yuque.com/code2art**

#### **试听课、公开课入口：**

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_007.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/stable-diffusion-webui-windows-2023-6-230530/img_008.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
