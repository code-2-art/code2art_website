---
id: "tutorial-comfyui-animatediff-stable-diffusion-240229-zh"
concept_id: "comfyui-animatediff-stable-diffusion-240229"
type: "tutorial"
slug: "comfyui-animatediff-stable-diffusion-240229"
title: "更新ComfyUI AnimateDiff | 一台电脑装多套Stable Diffusion时共享模型文件的方法"
lang: "zh"
tags:
  - "comfyui"
  - "animatediff"
  - "stable"
  - "diffusion"
status: "canonical"
created: "2024-02-29"
updated: "2024-02-29"
version: 1
summary: "2023年10月写过这篇："
coverUrl: "/uploads/comfyui-animatediff-stable-diffusion-240229/img_001.webp"
author: "Contra的后院"
publishedAt: "2024-02-29"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491317&idx=1&sn=fae40ae9b126ba1b6b29bb2abd5c885f&chksm=e9f52c64de82a572845657bb0dc7a2be281b72dec04ed7b034318c7a6f0993d98937976a78fb"
useDocUrl: false
---

2023年10月写过这篇：

[一台电脑装多套Stable Diffusion时共享模型文件的方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490394&idx=1&sn=8e43ffd4878dec63c9a6f7f54edec401&chksm=e9f529cbde82a0dd51c4b6cdc4ecde87e6ba31e2851c46cda36b2ca671f5b7dcb63d8f861af3&scene=21#wechat_redirect)

当时ComfyUI生态里的多个插件还有在初期，对自定义模型路径的支持需要用户手动修改。

最近ComfyUI-AnimateDiff-Evolved这个插件固定了自定义路径的变量，现在可以配置启动参数正常使用了。

重新整理了本文。ComfyUI AnimateDiff的部分在文末。

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_001.webp" alt="" loading="lazy" />

我电脑里装了三套Stable Diffusion UI：

* Automatic1111 WebUI
* ComfyUI
* 秋叶整合包

一堆大模型、LoRA、ControlNet、AnimateDiff，再加上一些vae、upscale放大模型等，我自己常用的有90G左右，复制三份实在占地，更新版本也麻烦。

**可以将所有模型集中放在一个位置，然后给各SD UI指定模型位置即可。**

通常有两种方法，我用的方式**二**。

**方式一**

**mklink符号链接**

它类似一个文件夹的指针或快捷方式，这样可以把各SD ui的模型文件夹例如models，指向同一个集中存放的模型文件夹。

示例，用mklink创建一个符号链接，将C盘A目录指向D盘B目录：

```
mklink /d C:\XXX\A D:\XXX\B
```

微软mklink文档：

https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/mklink

例如我的模型文件夹是：

```
D:\ai\models\sd\webui_using
```

该文件夹下面分类放了一些常用的模型文件：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_002.webp" alt="" loading="lazy" />

以SD webui为例，将其安装目录stable-diffusion-webui下的models文件夹通过mklink映射到上图的webui\_using：

打开cmd命令提示符，运行：

```
mklink /d H:\prjs\sd\webui\automatic1111\stable-diffusion-webui\models D:\ai\models\sd\webui_using
```

注意，提前将models里的模型全移到webui\_using里。如果创建失败，可以删除models空文件夹再试，切记提前备份好模型以防删错。

这样就可以了，简单测试可以用，但webui社群里有人说这种方式有些插件不太兼容。

**方式二**

**命令行启动参数**

我现在用的是第二种方法，通过命令行启动参数，为每套SD ui指定对应的模型位置。

Stable Diffusion A1111 webui的GitHub上有各种文件夹对应的参数变量：

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings

以我的为例：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_003.webp" alt="" loading="lazy" />

包含了大模型、VAE、textural inversion、LoRA、upscaler、controlnet等。

**对Stable Diffusion A1111 webui：**

将以上参数添加在webui安装根目录下的**webui-user.bat**文件的**COMMANDLINE\_ARGS**后面：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_004.webp" alt="" loading="lazy" />

提示：

* COMMANDLINE\_ARGS后面各个参数不要空行，连起来写成一行，空格隔开。
* 最好将原本Windows路径里的 \ ，改为 / ，即：

```
D:\ai\models\sd\webui_using\XXX
```

改为：

```
D:/ai/models/sd/webui_using/XXX
```

正常运行webui-user.bat启动即可。

**对秋叶包：**

启动参数复制粘贴在启动器左侧**高级选项** -> 最下方的**自定义参数：**

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_005.webp" alt="" loading="lazy" />

将需要改的模型文件夹参数粘贴进去即可，这里可以用换行，每行一个。

正常启动SD即可。

**对ComfyUI：**

ComfyUI的自定义参数是存在其根目录下的**extra\_model\_paths.yaml**文件里，默认文件是extra\_model\_paths.yaml.example，直接改文件名或复制后改名。

然后用文本编辑器打开它。

它默认是在这里直接指定A1111 webui的模型文件位置，然后ComfyUI会去加载它。如果你只用了这两套ui，可以按默认的稍作修改。

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_006.webp" alt="" loading="lazy" />

如果也和我一样，还有秋叶包，以及其他XXX ui，那么可以在这个文件里专门去指定ComfyUI要读取的目录，把A1111部分注释掉：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_007.webp" alt="" loading="lazy" />

提示，同样将原本Windows路径里的 \ ，改为 / 。

正常启动ComfyUI即可。

至此，绝大部分的模型文件都指定好了，如果你只需要指定其中一两个文件夹，也是可以的，例如只指定大模型、LoRA、ControlNet，通常这三大件最占空间。

另外有一些特例，例如**AnimateDiff**，它目前（2023）在webui里没有启动参数，而是在webui启动后的**Settings**里设置。

启动webui，在Setting里，左侧下方找到AnimateDiff，然后在最上边填入AnimateDiff的模型文件夹路径即可，这里**不需要**修改 \ 为 / ：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_008.webp" alt="" loading="lazy" />

秋叶包同理。

**ComfyUI里添加AnimateDiff模型文件位置：**

2024.2更新

安装这个插件：

ComfyUI-AnimateDiff-Evolved   
https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved 

然后在**extra\_model\_paths.yaml**里添加：

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_009.webp" alt="" loading="lazy" />

Cheers🍻

**近期课程动态：**

* [课程更新 | AI动画折纸风](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491306&idx=1&sn=6c3aaf7a9cee0eb9c9f35469045169d2&chksm=e9f52c7bde82a56da15fab140115d510ce3f13bd558c4b4d018b938aa200103c6284cfa6c1bf&scene=21#wechat_redirect)
* [用美图WHEE在线训练风格模型](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491290&idx=1&sn=5379ccb7c4eea00fe97e737afd859800&chksm=e9f52c4bde82a55dfd280389a4afcaca66336f756ceebd63b64e58dfb1fe1e0a873dd627846d&scene=21#wechat_redirect)
* [發！实验编程红包封面来了，附制作方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491206&idx=1&sn=b1c5295579c14494ec66caa3e395dfc8&chksm=e9f52c17de82a501745a097a7f3e2fa2426a41ff0bdf977ba9b585fe95cc50cd31cd55584dc5&scene=21#wechat_redirect)
* [罗霄 | 2023生成式AI图像模型年报](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491174&idx=1&sn=b3b82d5bdf954d96b098408d80714aa6&chksm=e9f52cf7de82a5e1d44a0aec412abe405a3a5572591ce0ca692090cbf7fc4a2ed8c52dd1fc60&scene=21#wechat_redirect)
* [大帅课第15期 - AI音画交互、小程序交互（StyleGAN版）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247491048&idx=2&sn=2fd2c81759ef67b6fb5b4326ae38c55f&chksm=e9f52f79de82a66ff678ccacba181031b49ad9c2bf7408e5f6763ebdcf633fbc9669105920c2&scene=21#wechat_redirect)
* [用WHEE创作二维码芯片效果，科技之美](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490942&idx=1&sn=abdc3f235404189fd963249346da3886&chksm=e9f52fefde82a6f9c19a3c90a76a9f8938962ce3031282c5f89466aad4459ce2779bf312da59&scene=21#wechat_redirect)

**📣实验编程2024会员报名中🔥**

**[👉 实验编程2024报名指引](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490806&idx=1&sn=3c1f0cd8edf5d7b9a99767cb016895ad&chksm=e9f52e67de82a771257b231dcf06dfe89b513b9482e0177a57f75a01d2debd5d47fff5ee59ac&scene=21#wechat_redirect)**

* [**实验编程2023教学活动回顾**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490760&idx=1&sn=85a25f61c951eb389c2610689527f390&chksm=e9f52e59de82a74fbfdb1daa3ff346c6efaee039a19f07291ec35bdccb284a3cf77c8a35e183&scene=21#wechat_redirect)
* [AI陷阱2024与实验编程教学计划](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490620&idx=1&sn=fea8a2d04f8029d1fe40998f790742e1&chksm=e9f52eadde82a7bb394f93f889729e25048414099f804ef9a6ab957feec7f7a82c835ed4be18&scene=21#wechat_redirect)
* [实验编程往期教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [关于实验编程 - 2023.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247488586&idx=4&sn=baf830a3b1b0fc6347e9f5c7d1829304&chksm=e9f526dbde82afcd903b91a5884d1da27f9f1b62c483a5ee92a0974b6930859ea2686678cb68&scene=21#wechat_redirect)

🍻感谢点赞、在看、收藏、**公众号加星标⭐️**

**试听课、公开课入口：**

实验编程社群资源，类似XX星球的免费圈子，公开课、公开案例源文件、社群资源、知识沉淀。

一杯咖啡过滤噪声，10年有效。

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_010.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：**

2群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/comfyui-animatediff-stable-diffusion-240229/img_011.webp" alt="" loading="lazy" />

您的鼓励，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
