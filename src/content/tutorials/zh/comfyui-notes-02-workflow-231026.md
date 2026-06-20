---
id: "tutorial-comfyui-notes-02-workflow-231026-zh"
concept_id: "comfyui-notes-02-workflow-231026"
type: "tutorial"
slug: "comfyui-notes-02-workflow-231026"
title: "ComfyUI学习笔记2，一文看透Workflow"
lang: "zh"
domains:
  - "ai-image-generation"
  - "workflow-automation"
tags:
  - "comfyui"
  - "stable-diffusion"
  - "workflow"
status: "canonical"
created: "2023-10-26"
updated: "2023-10-26"
version: 1
summary: "ComfyUI 学习笔记第二篇，一文看透 ComfyUI 的 Workflow 节点工作流机制。"
difficulty: "beginner"
tools:
  - "comfyui"
  - "stable-diffusion"
coverUrl: "/uploads/comfyui-notes-02-workflow-231026/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-10-26"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490451&idx=1&sn=454c6143af1391f31867d25b060c04e6&chksm=e9f52902de82a014739e5bd7fd7a70ddb1c7b222a4c41f2dde2340d5270ada49c51434926d14"
useDocUrl: false
---

**什么是ComfyUI的Workflow**

Workflow是ComfyUI的精髓。所谓Workflow工作流，在ComfyUI这里就是它的节点结构及数据流运转过程。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_001.webp" alt="" loading="lazy" />

上图，从最左边加载模型开始，经过中间的CLIP Text Encode对关键词Prompt做处理，加入一个初始的Latent Image，然后是采样器，VAE解码，最后得到生成的图像。

通过节点的方式，除了类似webui那样去填写参数，还可以观察处理过程，这是ComfyUI设计巧妙之处。每次生成的时候，当程序运行到某个环节时，该环节对应的节点就会自动高亮。各节点按当前运行状态依次高亮，非常有利于理解生成式AI模型（Stable Diffusion）的基本原理。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_002.webp" alt="" loading="lazy" />

如上图，当运行到采样器在工作时，采样器KSampler节点的绿色框高亮，此时正对应着命令行窗口中的生成进度。

类比webui的使用体验：

1. 调好参数
2. 点击生成
3. 等待结果

除了观察命令行窗口能获得一些生成进度中的信息，在webui界面上，基本还是传统软件的使用思维：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_003.webp" alt="" loading="lazy" />

**Workflow的快速“复现”**

### **1. webui中的png info**

先回忆一下webui，当想要复现一张图像的生成参数时，可以把这张图拖到**png info**中进行查看。

例如在C站中查看这张AI聊斋的图：<img src="/uploads/comfyui-notes-02-workflow-231026/img_004.webp" alt="" loading="lazy" />

可以直接右键保存它，然后拖到webui的PNG Info里，即可查看包含关键词在内的所有参数。<img src="/uploads/comfyui-notes-02-workflow-231026/img_005.webp" alt="" loading="lazy" />

SD webui是把这些信息存在了PNG文件的chunk里，可以简单理解：PNG文件里某个数据块，是可以存储额外的文本信息的。

现在最新的webui似乎对存放的字段做了更新，直接右键点击图片，打开“属性”，在“详细信息”的“备注”里就可以查看：<img src="/uploads/comfyui-notes-02-workflow-231026/img_006.webp" alt="" loading="lazy" />

当然很多通用的图像软件都可以查看，例如**XnView**，在其自带的**Exif Tools**里就可以看：<img src="/uploads/comfyui-notes-02-workflow-231026/img_007.webp" alt="" loading="lazy" />

额外知识：这些信息也可以从图片中抹去，详见去年写的这一篇：

[关键词保护！如何从StableDiffusion(webui)生成图片中抹去prompt信息](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487916&idx=1&sn=834d422aea9f475f3d242c59aa73c8bd&chksm=e9f5233dde82aa2b178ac0af03bb574fbf30f7d01bb05cedb17694214726dd7a09ce5859f9f3&scene=21#wechat_redirect)

### 

### **2. **ComfyUI中的Workflow****

回到ComfyUI，每次生成的这些参数，在ComfyUI里也可以用类似的方式保存和读取。

用ComfyUI生成一张图：<img src="/uploads/comfyui-notes-02-workflow-231026/img_001.webp" alt="" loading="lazy" />

同样用右键查看属性：<img src="/uploads/comfyui-notes-02-workflow-231026/img_008.webp" alt="" loading="lazy" />

没有找到相关信息，没关系，这只能说明Windows资源管理器能读取的字段里没有。用XnView MP打开它：<img src="/uploads/comfyui-notes-02-workflow-231026/img_009.webp" alt="" loading="lazy" />

这就能看到了，它分了两个字段，一个是Prompt，里面包含类似png info的信息：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_010.webp" alt="" loading="lazy" />

还多了一个字段是Workflow：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_011.webp" alt="" loading="lazy" />

太长删掉了一些。能看出来里面存放的就是那些节点信息，例如编号id、位置坐标pos等。当ComfyUI加载这些信息时，就能完美”复现“所有的节点结构，以及每个节点中的各项参数。

### **3. ComfyUI加载生成图片中的Workflow**

webui通过png info来反查参数，那么在ComfyUI中呢，更简单了，直接把生成的图拖到网页窗口中即可。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_012.webp" alt="" loading="lazy" />

拖进窗口放手可得：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_013.webp" alt="" loading="lazy" />提醒：拖进去前如果需要的话记得备份之前的Workflow。

另外，ComfyUI也可以专门保存Workflow文件，点击侧边栏中的Save和Load，进行保存与加载：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_014.webp" alt="" loading="lazy" />

保存后得到的文件默认是workflow.json，可以用文本编辑器打开查看：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_015.webp" alt="" loading="lazy" />

### **4. 把Workflow信息与工作界面截图存在一起**

Workflow信息除了能单独存成json文件，或者存在生成的图片中，还能存在工作界面截图中，这样更加直观：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_016.webp" alt="" loading="lazy" />

安装这个插件即可：

**ComfyUI-Custom-Scripts**

https://github.com/pythongosssss/ComfyUI-Custom-Scripts

该插件有很多脚手架功能，保存Workflow Images是其中一项。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_017.webp" alt="" loading="lazy" />  
https://github.com/pythongosssss/ComfyUI-Custom-Scripts/tree/main#workflow-images

ComfyUI插件的安装方法，放在下一课中。

## **Workflow资源**

在这个网站里有大量ComfyUI Workflow，可以直接下载，然后用本课的方法打开。https://comfyworkflows.com/

<img src="/uploads/comfyui-notes-02-workflow-231026/img_018.webp" alt="" loading="lazy" />

## **Workflow与Data Driving**

多说两句，webui的png info，存的是data，是静态的，更像是web2.0时代的数据驱动。在使用webui时，关注点是生成的图片结果，以及相应的关键词与各项参数。如传统软件一样，还是相对黑盒。

而ComfyUI对Workflow的存取方式，在关注数据的基础上多了一层工作流，即除了结果，还关注内部过程。这可能用多了就会有体会，会引导你下意识的去想着如何优化或改造工作流，带来更多的灵活可能性。

另，节点式与dataflow或workflow也不是新事物，我2005年开始接触的节点式编程环境MaxMSP，从其诞生距今已经三十多年了。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_019.webp" alt="" loading="lazy" />  
图自Wiki，上古版本的MaxMSP界面

Cheers🍻

近期开始更新ComfyUI系列：

* [ComfyUI学习笔记1，ComfyUI安装](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490420&idx=1&sn=d44959221916f85f3d824745592598cc&chksm=e9f529e5de82a0f3ecbccd2876384b5f3e1c57e43597192573a4bcdfafe6c2134ac7331b41ee&scene=21#wechat_redirect)

欢迎点赞、在看、收藏、**公众号加星标⭐️**

**AI聊斋模型开放了**

<img src="/uploads/comfyui-notes-02-workflow-231026/img_020.webp" alt="" loading="lazy" />

我把最近训练的AI聊斋模型在C站开放了。

**下载地址：**

**[AI聊斋模型开放了](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490293&idx=1&sn=656d7e43f655882fb8bd0cf0a5de504b&chksm=e9f52864de82a17226f5bc01ccf0252a2c808b1ff0f7659a5303d4299dc5e7f40dcab236ee96&scene=21#wechat_redirect)**

**效果案例：**

* [AI聊斋 | Cyber画皮](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490381&idx=1&sn=cd732493750b9222315d35a830e3f6e5&chksm=e9f529dcde82a0ca6d47bfaf0b5318e9cac5350862aae307ace9ffe886f3183d5df95cec9424&scene=21#wechat_redirect)
* [AI聊斋 | CyberFish×杀马特](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490363&idx=1&sn=5f8080a2484d9ab9eccebf8c57a15d84&chksm=e9f529aade82a0bc9dfb41751d0b2a7e8c0d43afe910d2fbb565eab9b52d5721220c79fa2f2a&scene=21#wechat_redirect)
* [AI聊斋 | CyberFish制造府](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490335&idx=1&sn=64b4331dfde8858e4831be91b4c23710&chksm=e9f5298ede82a0985d3799df16ea170b64b07b731b2c5a6a76e91e19f6fa7fc83ed5cf3d8205&scene=21#wechat_redirect)
* [AI聊斋 | 狐](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490315&idx=1&sn=d20a31dac0aae0ba2c91652c94c8c0d6&chksm=e9f5299ade82a08c9c9d32d18020601345ae18bdb0b017c5018922cc42f157e41affea3e9351&scene=21#wechat_redirect)
* [AI聊斋 | 乐府赛高](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490268&idx=1&sn=db18845d7d0d8183de9d5ee6c211e0f9&chksm=e9f5284dde82a15b01cf9ad32aacff17db50caf3c1b7b376f3b1ce68ee5e6b6f058178acb039&scene=21#wechat_redirect)
* [AI聊斋 | 陆判（二）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490237&idx=1&sn=bfdd9bea3e4cda2235eccc1e1f07a050&chksm=e9f5282cde82a13acfedeaf99b718284a6b8eb4842732c3de9db1b664dbd43ee172c799f8565&scene=21#wechat_redirect)
* [AI聊斋 | 陆判（一）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490218&idx=1&sn=cc39cb92eaa2b36a543e2e331206b6e6&chksm=e9f5283bde82a12d447c69a8565fd41e6154dae32eb46cdb389a29f45e03e09207fce0911f6a&scene=21#wechat_redirect)
* [AI聊斋 | 白莲教](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490180&idx=1&sn=dc9c0870cd809f7dc48433aedc013cc9&chksm=e9f52815de82a103eda0f549618d9f732d09cfe88f3a9cad3c167d993a52d1c6c6dc50afade7&scene=21#wechat_redirect)
* [驱怪 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=1&sn=49b3444b55cede81e1eac073dde9c7c1&chksm=e9f528fcde82a1eadbbde9a4347a363a1f14f615c63b6232ad9936142847eec09cfad2f85a75&scene=21#wechat_redirect)
* [画皮 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490133&idx=1&sn=34801d38def02538b5f8b716a89c30cc&chksm=e9f528c4de82a1d25a5d50549b69fdfb4063b9cd2f9b29a2b1144f60451ca5bb9f9920a1e9ec&scene=21#wechat_redirect)
* [青蛙神 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490097&idx=1&sn=9ee72807d2c82ecf7b3ed207cebd9f0d&chksm=e9f528a0de82a1b624170b23016fe8612100dd3121baddbfffb593dc81080a15a24054072f49&scene=21#wechat_redirect)

**AI艺术训练营介绍**

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [**AI艺术训练营3期介绍（视频）**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [训练营3期 17 多套SD共享模型文件的方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490394&idx=1&sn=8e43ffd4878dec63c9a6f7f54edec401&chksm=e9f529cbde82a0dd51c4b6cdc4ecde87e6ba31e2851c46cda36b2ca671f5b7dcb63d8f861af3&scene=21#wechat_redirect)
* [训练营3期 16 数据集处理](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490279&idx=1&sn=449e1c76000e5049cfac07c3ad77a1b5&chksm=e9f52876de82a16026f9c538753a69037acd86c9251d935886247411d818aefc4589fd7e0c40&scene=21#wechat_redirect)
* [训练营3期 15 聊斋是如何炼成的 | 训练营3期第15课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490246&idx=1&sn=3537345146ca8f72162bb35c1f2df943&chksm=e9f52857de82a141e64412a3c2799c6244edc4a5dfe80b3ed75a0ce3178e11805978cad86f02&scene=21#wechat_redirect)
* [训练营3期 14 StableDiffusion XL 模型训练](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=2&sn=e6b59a8622855bb08df7f879eda1fa10&chksm=e9f528fcde82a1ea9cf78745b070c9861955c659446dfd8d16f4259010e123f51cabdd29dbd3&scene=21#wechat_redirect)
* [训练营3期 13 如何抠除视频背景并生成遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490032&idx=1&sn=9acfcfcb7902e9e8166dfa61c5159635&chksm=e9f52b61de82a27726a639a2d5094ac4ee08d6d937d351618c77f9bf2df36dd557a6d67fae71&scene=21#wechat_redirect)
* [训练营3期 12 影像进阶 SD EbSynth + 视频遮罩](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490020&idx=1&sn=b8861a0eafcbe0699decb91a925dc235&chksm=e9f52b75de82a26353c5211b5f088de453fc86f01ce89eef6d93f872ff8bcc65cd8151601a5d&scene=21#wechat_redirect)
* [训练营3期 11 SD EbSynth影像生成方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490004&idx=1&sn=10dfa79de317c3a313015cc489bb56ef&chksm=e9f52b45de82a253551c0c7a881f4da2db43e2fab949a812c9933006fce018e75dad8970b1bd&scene=21#wechat_redirect)
* [训练营3期 10 Deforum与Text to Video影像制作基础](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489800&idx=1&sn=21c5cf76e571967b8a4a50ea86b5bd7b&chksm=e9f52b99de82a28f01bd13a4e1f56ddb68c1015b7ef15b9b708b451d8602301381f86062428a&scene=21#wechat_redirect)
* [训练营3期 09 AI影像工作流分析-1](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489732&idx=1&sn=3e90d039c064b07218d6c9441997053a&chksm=e9f52a55de82a343136554c9800e60046d1ee708c0359d9c65c08000cecf0d6731d610864975&scene=21#wechat_redirect)
* [训练营3期 08 AI文字光影效果](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489703&idx=1&sn=c239149386b62798f6ab66f2f454ef73&chksm=e9f52a36de82a320cd9e6295dc0e64b7a15e5cac9380ead2d03c2450166f8365f5f296628abb&scene=21#wechat_redirect)
* [训练营3期 07 AI文字怼一切‍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489570&idx=1&sn=04790c4a3d98c6cbefdbbc54c3b42c37&chksm=e9f52ab3de82a3a535110206506775d47195253847b99211d4b18b9048bcabf5d92ae965b9cc&scene=21#wechat_redirect)
* [训练营3期 06 多重ControlNet](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489548&idx=1&sn=eb57bacff497746f56454764552f987f&chksm=e9f52a9dde82a38b5353969dbaff686e2599bd84c6c01413eb380a5f5795bade513ee255b3cf&scene=21#wechat_redirect)
* [训练营3期 05 ControlNet基础](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489471&idx=1&sn=785e01ff29422d08a99546ccc94044a7&chksm=e9f5252ede82ac385eb4608a2ba65b831123070df7baffe2e93e5d20a122eeb1037ac8d4cf8f&scene=21#wechat_redirect)
* [训练营3期 04 SD常用操作(2)](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489429&idx=1&sn=b6f9b776b57158b448415ae7cd1e9683&chksm=e9f52504de82ac12accb42dc0327c18bbf2aca9c884997bed553b1229c05b848749a550cc427&scene=21#wechat_redirect)
* [训练营3期 03](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489394&idx=1&sn=56fc411bc2776aa63fbd214ecd506599&chksm=e9f525e3de82acf528974001051bc7c02da8b1c0d4be1de2f7ce899395dea059781443dcf95d&scene=21#wechat_redirect)
* [训练营3期 02](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489333&idx=1&sn=38669bcf7d633866b003be476d53da29&chksm=e9f525a4de82acb2f9d2c7c2e7baa856fa67df9456150ef6d46c0f41cb1e2cc585e5b197f584&scene=21#wechat_redirect)
* [训练营3期 01](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489286&idx=1&sn=aa768954408f618c4df37399fe3b2233&chksm=e9f52597de82ac8135d18cd5a04bd74759189eb3eae55a4f7e61622e98d4e39188d36d91215f&scene=21#wechat_redirect)
* [Stable Diffusion webui 本地安装教程 Windows（2023.6）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489327&idx=1&sn=47be04a35bb9b946284c1b124652a381&chksm=e9f525bede82aca8e637889489ed37dc6717bcfdcbd41cb8ade90ca258d04d4c7ace43505c34&scene=21#wechat_redirect)
* [Stable Diffusion 性能优化 - xformers安装问题](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489349&idx=1&sn=8266d4e3e9a928b7d7e509e63ec9aa5b&chksm=e9f525d4de82acc2098e8c27db062095d7c4ac6e8ad53b724412365a82c5690d1f70f30ec43b&scene=21#wechat_redirect)
* [Stable Diffusion上手路径与常用操作](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489423&idx=1&sn=f1c691905455c4c4902214844030ca22&chksm=e9f5251ede82ac082564ba6bb68272101a1c9f5b97bcf9ef95ea95ae238e3668e7dbbd915afc&scene=21#wechat_redirect)
* [Stable Diffusion视频生成时风格化与一致性的取舍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489405&idx=1&sn=c99076cf984f30786db3463d4b3e079b&chksm=e9f525ecde82acfa2b4c50b1af029d83559a734e2c3f38752a9093b25af5a4c461ead5b5468f&scene=21#wechat_redirect)
* [ControlNet各功能参数效果一览（一）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489510&idx=1&sn=095e764ea409a05e31a88d63a41d0e13&chksm=e9f52577de82ac614125caf1bc627c463eeca56897e12ba37241bf51bff5ffe879d0792175ba&scene=21#wechat_redirect)
* [ControlNet各功能参数效果一览（二）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489538&idx=1&sn=af71ac478f91422fdede994b7e5e3d9d&chksm=e9f52a93de82a3850d2e8873afc43f392e60a395b6b4489394f46bf9b4d6e8bec7d4e3e7c08b&scene=21#wechat_redirect)
* [近期SD webui启动时CUDA SETUP报错的解决方法](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490345&idx=1&sn=242af762cf2c0bf93993e7b40ad280f1&chksm=e9f529b8de82a0aeb996a17ec1c07a8321d2025519952a9c734e03cedce16060da7a74c513c0&scene=21#wechat_redirect)

训练营3期在情报中心圈子内，课程持续添加中：

<img src="/uploads/comfyui-notes-02-workflow-231026/img_021.webp" alt="" loading="lazy" />

**试听课、公开课见文末二维码。**

加入情报中心圈子、或1v1超级会员，随到随学。

**情报中心：**

情报中心类似XX星球。汇总了课程、课件、源代码、资源、交流答疑。

有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_022.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_023.webp" alt="" loading="lazy" />

---

**部分课程**

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

<img src="/uploads/comfyui-notes-02-workflow-231026/img_024.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/comfyui-notes-02-workflow-231026/img_025.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
