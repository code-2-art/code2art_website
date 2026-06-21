---
id: "tutorial-stable-diffusion-webui-cuda-setup-231016-zh"
concept_id: "stable-diffusion-webui-cuda-setup-231016"
type: "tutorial"
slug: "stable-diffusion-webui-cuda-setup-231016"
title: "近期Stable Diffusion webui启动时CUDA SETUP报错的解决方法"
lang: "zh"
tags:
  - "stable"
  - "diffusion"
  - "webui"
  - "cuda"
status: "canonical"
created: "2023-10-16"
updated: "2023-10-16"
version: 1
summary: "如果最近启动Stable Diffusion webui时，遇到类似这样的报错信息："
coverUrl: "/uploads/stable-diffusion-webui-cuda-setup-231016/img_001.webp"
author: "Contra的后院"
publishedAt: "2023-10-16"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490345&idx=1&sn=242af762cf2c0bf93993e7b40ad280f1&chksm=e9f529b8de82a0aeb996a17ec1c07a8321d2025519952a9c734e03cedce16060da7a74c513c0"
useDocUrl: false
---

如果最近启动Stable Diffusion webui时，遇到类似这样的报错信息：

```
CUDA_SETUP: WARNING! libcudart.so not found in any environmental path. Searching in backup paths...DEBUG: Possible options found for libcudart.so: set()
```

详细见下图：

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_001.webp" alt="" loading="lazy" />

一般不影响SD使用。强迫症患者或者真的患者可以往下看。

**解决办法：安装 bitsandbytes-windows**

打开终端/命令行窗口，运行：

```
pip install bitsandbytes-windows
```

安装成功，重新启动SD webui即可。

**注意点：需要与SD webui的python在同一个运行环境中。**

运行环境切换方法：

**一、如果用conda：**

比较简单，在同一个conda env里安装即可。

（会用conda，肯定会安装。）

**二、如果是webui基本版：**

1. 打开命令行窗口（如命令提示符），在命令行里切换到webui的目录：

输入以下，xxxx换成具体的webui路径，输完回车：

```
cd XXXX\stable-diffusion-webui
```

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_002.webp" alt="" loading="lazy" />

2. 激活webui的python环境，继续在命令行里输入并回车：

```
venv\Scripts\activate.bat
```

3. 安装 bitsandbytes-windows，继续在命令行里输入并回车：

```
pip install bitsandbytes-windows
```

\*安装时有可能出现连接失败，解决方法是全局范强后安装；或者使用国内python镜像源去安装，复制下方命令粘贴回车运行：

```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple bitsandbytes-windows
```

国内源如果没有bitsandbytes-windows，导致安装不成功，建议优先解决全局范强问题。

关于国内源的详细使用，教程繁多，或者直接看清华源的官网：

https://mirrors.tuna.tsinghua.edu.cn/help/pypi/

实验编程学员可以见《AI艺术入门篇》相关章节。

安装成功，重新启动SD webui即可。

**三、如果是用秋叶整合包：**

在整合包里启动命令行窗口，然后按照上边的步骤安装即可。

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_003.webp" alt="" loading="lazy" />

Cheers🍻

**AI聊斋模型开放了**

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_004.webp" alt="" loading="lazy" />

我把最近训练的AI聊斋模型在C站开放了。

**下载地址：**

**[AI聊斋模型开放了](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490293&idx=1&sn=656d7e43f655882fb8bd0cf0a5de504b&chksm=e9f52864de82a17226f5bc01ccf0252a2c808b1ff0f7659a5303d4299dc5e7f40dcab236ee96&scene=21#wechat_redirect)**

**效果案例：**

[AI聊斋 | CyberFish制造府](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490335&idx=1&sn=64b4331dfde8858e4831be91b4c23710&chksm=e9f5298ede82a0985d3799df16ea170b64b07b731b2c5a6a76e91e19f6fa7fc83ed5cf3d8205&scene=21#wechat_redirect)

[AI聊斋 | 狐](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490315&idx=1&sn=d20a31dac0aae0ba2c91652c94c8c0d6&chksm=e9f5299ade82a08c9c9d32d18020601345ae18bdb0b017c5018922cc42f157e41affea3e9351&scene=21#wechat_redirect)

[AI聊斋 | 乐府赛高](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490268&idx=1&sn=db18845d7d0d8183de9d5ee6c211e0f9&chksm=e9f5284dde82a15b01cf9ad32aacff17db50caf3c1b7b376f3b1ce68ee5e6b6f058178acb039&scene=21#wechat_redirect)

[AI聊斋 | 陆判（二）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490237&idx=1&sn=bfdd9bea3e4cda2235eccc1e1f07a050&chksm=e9f5282cde82a13acfedeaf99b718284a6b8eb4842732c3de9db1b664dbd43ee172c799f8565&scene=21#wechat_redirect)

[AI聊斋 | 陆判（一）](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490218&idx=1&sn=cc39cb92eaa2b36a543e2e331206b6e6&chksm=e9f5283bde82a12d447c69a8565fd41e6154dae32eb46cdb389a29f45e03e09207fce0911f6a&scene=21#wechat_redirect)

[AI聊斋 | 白莲教](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490180&idx=1&sn=dc9c0870cd809f7dc48433aedc013cc9&chksm=e9f52815de82a103eda0f549618d9f732d09cfe88f3a9cad3c167d993a52d1c6c6dc50afade7&scene=21#wechat_redirect)

[驱怪 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=1&sn=49b3444b55cede81e1eac073dde9c7c1&chksm=e9f528fcde82a1eadbbde9a4347a363a1f14f615c63b6232ad9936142847eec09cfad2f85a75&scene=21#wechat_redirect)

[画皮 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490133&idx=1&sn=34801d38def02538b5f8b716a89c30cc&chksm=e9f528c4de82a1d25a5d50549b69fdfb4063b9cd2f9b29a2b1144f60451ca5bb9f9920a1e9ec&scene=21#wechat_redirect)  
[青蛙神 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490097&idx=1&sn=9ee72807d2c82ecf7b3ed207cebd9f0d&chksm=e9f528a0de82a1b624170b23016fe8612100dd3121baddbfffb593dc81080a15a24054072f49&scene=21#wechat_redirect)  
[画皮 | AI聊斋](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490133&idx=1&sn=34801d38def02538b5f8b716a89c30cc&chksm=e9f528c4de82a1d25a5d50549b69fdfb4063b9cd2f9b29a2b1144f60451ca5bb9f9920a1e9ec&scene=21#wechat_redirect)

**AI艺术训练营介绍**

**训练营、课程体系、会员详细介绍👇**

* [实验编程AI艺术训练营2023报名及教学资源一览](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)
* [**AI艺术训练营3期介绍（视频）**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489303&idx=1&sn=117377943e642b96074d6f23dec329e1&chksm=e9f52586de82ac90490d51109e2e290261388d10ca4d83c7de85b752ada2cb1c7ad0f534b437&scene=21#wechat_redirect)
* [训练营3期 16 数据集处理](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490279&idx=1&sn=449e1c76000e5049cfac07c3ad77a1b5&chksm=e9f52876de82a16026f9c538753a69037acd86c9251d935886247411d818aefc4589fd7e0c40&scene=21#wechat_redirect)
* [聊斋是如何炼成的 | 训练营3期第15课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490246&idx=1&sn=3537345146ca8f72162bb35c1f2df943&chksm=e9f52857de82a141e64412a3c2799c6244edc4a5dfe80b3ed75a0ce3178e11805978cad86f02&scene=21#wechat_redirect)
* [StableDiffusion XL 模型训练(1) | AI训练营3期第14课](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247490157&idx=2&sn=e6b59a8622855bb08df7f879eda1fa10&chksm=e9f528fcde82a1ea9cf78745b070c9861955c659446dfd8d16f4259010e123f51cabdd29dbd3&scene=21#wechat_redirect)
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

训练营3期在情报中心圈子内，课程持续添加中：

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_005.webp" alt="" loading="lazy" />

**试听课、公开课见文末二维码。**

加入情报中心圈子、或1v1超级会员，随到随学。

**情报中心：**

情报中心类似XX星球。汇总了课程、课件、源代码、资源、交流答疑。

有效期内无限畅享训练营、大帅课在内的多套课程，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_006.webp" alt="" loading="lazy" />

**1v1超级会员：**

导师制1对1长期辅导，日常答疑，视频会议。**含情报中心完整权益**，另加 AI Craft 联合课程系列。

面向群体、热门辅导主题等，详见**[**教学资源一览**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489221&idx=1&sn=560186e30431c593b881b0f03c88b63b&chksm=e9f52454de82ad426a2a1df1fabc0604768b13f2e49c4717f17f16457e61a887f8f5d6cd8237&scene=21#wechat_redirect)**。

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_007.webp" alt="" loading="lazy" />

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

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_008.webp" alt="" loading="lazy" />

**课程咨询及微****信群****：****floatbug**

群将满，加微信烦请注明：  
来源（公B抖小知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/stable-diffusion-webui-cuda-setup-231016/img_009.webp" alt="" loading="lazy" />

您的鼓励，在看，点赞，收藏，转发，是我乱码的动力。

英文版全网ID：@avantcontra

公知小抖B：**实验编程**
