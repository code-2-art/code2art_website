---
id: "project-project-220901-zh"
concept_id: "project-220901"
type: "project"
slug: "project-220901"
title: "在人工智能的时代寻找自身存在的价值 | 用 AI 创作的阶段总结 | 实验编程推荐"
lang: "zh"
tags:
  - "ai"
status: "canonical"
created: "2022-09-01"
updated: "2022-09-01"
version: 1
summary: "Hi, 我是海辛，是一名影视导演。"
coverUrl: "/uploads/project-220901/img_001.webp"
author: "实验编程"
publishedAt: "2022-09-01"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487335&idx=1&sn=bcd1c50357c7e3e4dcfe299b380d13c6&chksm=e9f53df6de82b4e0606975f547ec41fbc4c0279b52a4e4f7d905c5173b51f0d8611cc3113bdf"
useDocUrl: false
---

Hi, 我是海辛，是一名影视导演。

8 月 30 日，[2022 年中国数据内容大会](http://mp.weixin.qq.com/s?__biz=Mzg3ODExNzA2Ng==&mid=2247484648&idx=1&sn=52757ddca6ed4711db776be6fb6f4555&chksm=cf19ed4df86e645bd61e36267dadd2d2bcbcadbf899241e02ceb42151a0b1a6831182e08c16c&scene=21#wechat_redirect) 邀请我进行了关于 AI 创作的分享，我决定将分享内容也整理到公众号内，作为这几个月以来的自我总结。

<img src="/uploads/project-220901/img_001.webp" alt="" loading="lazy" />

上图这张小熊猫是我第一次用 Midjourney 时 1 分钟内生成的图片，我输入的指令是：**由皮克斯设计的，熊猫与猴子的结合体。**

“创作”，我一直将这个词语视为自己存在的意义，Midjourney 的出现曾一度让我陷入关于自身存在价值的危机之中。无论是作品的质量还是成长的速度，**在 AI 掷地有声袭来的时代，个人的存在似乎不过沧海一粟。**

从 3、4月份 Disco Diffusion 刚刚在国内掀起风潮，到 5、6 月份 Midjourney 与 Dall-E2 的风暴，7、8 月份 Stable Diffusion 掷地有声地降临。我写了有 10 余份创作笔记，**试图在 AI 席卷来的时代，寻找到可以属于自己的一席之地**，在 AI 制霸时代，我究竟还能做什么。

<img src="/uploads/project-220901/img_002.webp" alt="" loading="lazy" />

其中包括[对 Disco Diffusion 参数的探索](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484045&idx=1&sn=bc1cf57f4d568fccec8b56d45b536b5f&chksm=e8d38406dfa40d1050452f74caacf1d872a087b29ca1e233877938965e30f08ba46c49fceff9&scene=21#wechat_redirect)、[使用 Disco Diffusion 制作动画](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247483879&idx=1&sn=4d2d0e581801ec1fc2b009932552b37d&chksm=e8d3876cdfa40e7a5b80c991e19faade2ca33a50b746b05f9dadab2fe76512fbff27330680bd&scene=21#wechat_redirect)，[Midjourney 进入 3D 流程的尝试](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484242&idx=1&sn=3cc0ee9ac893188e2ba0a714cf5aac0c&chksm=e8d385d9dfa40ccfb13d67d2010a50d304587149676dedb74f6d980483a3c1acff14a2fd682d&scene=21#wechat_redirect)、[Midjourney 到虚拟制片的尝试](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484351&idx=1&sn=34b1914de8f15d1613dbae5b84e9e81f&chksm=e8d38534dfa40c22789cc9a6cfce52dac91dbdeca419dc5f0efff5915767d06f62d9cd54107b&scene=21#wechat_redirect)。

今天想分享 3 个我很喜欢的项目给大家。

**CASE 001**

**青耕**

**第一个是和上海自然博物馆合作的****山海经神兽复活计划 · 青耕****。**

**今年，上海自然博物馆计划复活一批《山海经》中记载的只有文字的神兽，规则简而言之就是：选中几只神兽面向社会公开征集画稿，并对入围作品进行网络投票，得票最高的一幅作品将由新锐艺术家用 AI 来进行改造。**

我负责改造的是青耕，我**从最高得票选手的画作中****提取了画中的关键词和其色彩搭配****，绘制喂给 AI 的底图。**

<img src="/uploads/project-220901/img_003.webp" alt="" loading="lazy" />

**结合使用 Disco Diffusion 的 init\_image 和 text prompt 的功能，输入底图及文字描述后，****AI 会在我的底图基础之上以文字描述为方向进行训练生成****，最终通过 Disco Diffusion 一次性生成了 20 余张画稿。**

<img src="/uploads/project-220901/img_004.webp" alt="" loading="lazy" />

最后在 Photoshop 中画稿进行细节收敛和清理，最终得到了青耕的完成品。

分享这个项目的原因是我很喜欢 AI 在其中扮演的角色，在我看来这像是**人类小孩和人工智能小孩一起协同完成的作品**，双方都代表着未来无穷无尽的可能性，人类和人工智能的小孩在一起，依凭着彼此的想象力共同创作出世界上从未存在过的生物，这在我看来是一件很浪漫的事情。

PS：今年上海自然博物馆还会陆陆续续复活：帝江、耳鼠、旋龟、蠪蛭等六只神兽，并将以展览、话剧等可能的形式和大家见面～敬请期待啦！

**CASE 002**

**神奈川猫浪里**

<img src="/uploads/project-220901/img_005.webp" alt="" loading="lazy" />

**这个是目前我还在进行中的一个项目，****目标是将 AI 所创造的图像做成真实的手办放在家里****，目前项目卡在学会使用 3D 打印机的阶段。**

<img src="/uploads/project-220901/img_006.webp" alt="" loading="lazy" />

我选择的是通过 Midjourney 将猫咪和海浪的元素融合在一起，**将不相干的元素融合在一起，一直是 AI 非常擅长的方向。**（在这个方面，我个人感受是 Midjourney 会比 Dall-E2 和 Stable Diffusion 的表现好一些，后两者会将单独的元素更加分开，猫是猫、浪是浪的感觉。）

<img src="/uploads/project-220901/img_007.webp" alt="" loading="lazy" />

**然后进行建模，将图片作为材质赋予给模型，最终就可以得到这张图的 3D 版本。**

**完整文档见：****[《AI 画画加入 3D 流程：Midjourney 的无限潜力》](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484186&idx=1&sn=acb27e13ae688fe8142ca0c65ee5cab7&chksm=e8d38591dfa40c87a040f7d1fa565ed3b31bcd86c5ffcca927fd06d5ff6e1410cce19e447d28&scene=21#wechat_redirect)、[《用 AI 做场景贴图 | 混乱邪恶流 3 小时完成场景制作》](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484242&idx=1&sn=3cc0ee9ac893188e2ba0a714cf5aac0c&chksm=e8d385d9dfa40ccfb13d67d2010a50d304587149676dedb74f6d980483a3c1acff14a2fd682d&scene=21#wechat_redirect)**

**分享这个项目的原因是源于对个人消费习惯的反思，我曾经在购买具有设计的物品时选择的通常都是****能让自己更产生共鸣****或者说是****更能代表“我”的设计/产品****。**

**那么有什么设计比自己做的更能代表自己呢？****AI 使得设计能力不再作为一种“权力”后，人人都可以通过 AI 设计来表达自我。****以后无论是服装、家具、交通工具，可能都是高度个人定制的，而不再是统一标准的均码时代了。**

**CASE 003**

**这街5·李承铉队长大秀**

这是我所在的公司将 AI 设计融入影视美术设计中的首次尝试，在极短的制片筹备时间内，AI 创作大幅度地提高了我们的效率，向我们证明了 AI 投入到工业化使用是完全可行的。

<img src="/uploads/project-220901/img_008.webp" alt="" loading="lazy" />

本次尝试的工作流是：Midjourney -> Blender -> UE 虚拟制片。使用 Blender 作为中间载体的原因是 Blender 很轻量，在苹果笔记本上就可以向导演和艺人进行展示。

完整笔记请见文档：[《这街5 · 李承铉队长大秀的诞生 | 剧组笔记》](http://mp.weixin.qq.com/s?__biz=MzIzNjc3MDI3Ng==&mid=2247484351&idx=1&sn=34b1914de8f15d1613dbae5b84e9e81f&chksm=e8d38534dfa40c22789cc9a6cfce52dac91dbdeca419dc5f0efff5915767d06f62d9cd54107b&scene=21#wechat_redirect)

分享这个项目的原因是想和大家一起探索 AI 是否已经准备好进入正式的商业化使用了，答案显而易见是肯定的。对于时间紧急的项目来讲，这简直就是救星般的存在。

**CASE XXX**

**一些我在关注的新方向**

alpaca AI: 结合了 Stable Diffusion 的 Photoshop 插件，可以高度自定义地控制和修改 AI 的生成结果。

AI + EbSynth: 实拍视频将其中一帧通过 AI 风格化后，通过 EbSynth 将剩下的帧也算出来。这种方式可以以很低的成本制作动画。

Stable Diffusion + Runwayml: Runway 的开发者接入了 SD 模型，可以通过文字指令修改视频的背景，即自动抠像+自动追踪+自动合成场景。

**CASE ?**

最后，最近常常想起 Ent 的一段话：人工智能发展起来是飞速的。不要想着该怎么对付“和人一样聪明”的电脑要么它就远不如你，要么它就远远把你甩在身后。**和你齐头并进的时刻，不过是那么一瞬间而已。**

我想我们此刻就是正在和人工智能齐头并进的时刻，未来的世界会变成怎样的形态，我不知道；我回忆曾经让我想踏入创作这条道路的不过是《飞屋环游记》中气球将房屋拽飞起来的一瞬间，那么如果这个情节是由 AI 创作出来的，我还会因此而感动吗？我不知道；我们和 AI 是不是有比我想象中更多的共性而非不同，我能在未来接受 AI 作为新的生命形态存在吗？我不知道。

未来在迷雾中，那是尚未有历史踏足的可能性，这份“不确定”让我感到恐惧，但既然未来已经来势汹汹不可阻挡，那便选择期待吧。

---

**关于实验编程**

* [关于实验编程 - 2022.6](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486912&idx=1&sn=48e563ca348988268d123cf52049b96e&chksm=e9f53f51de82b647b90e0855b0934abb65d1452b546d2d1da3e43a23232fa01150eef75f1978&scene=21#wechat_redirect)
* [**教学指引 - 2022.6**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486908&idx=1&sn=a7175b28d3d20fc1cc43504fb5036f05&chksm=e9f53f2dde82b63b189d6e0fe435e886d2f451575f36d20c7e0a1ab8a0221c74d40e9654701d&scene=21#wechat_redirect)

**部分AI艺术作品：**

* [Floating Punk 浮世朋克 | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487101&idx=1&sn=bd1a81f3f14dfc8e8f4574841ce3f05e&chksm=e9f53cecde82b5fa2f5224631de8a499e3f6c2a4ccea2e129e220b427255f19a7add00bef6b8&scene=21#wechat_redirect)
* [海滩 | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487065&idx=1&sn=dff03827d434d5f15a0e1b8babbf4e74&chksm=e9f53cc8de82b5de7935b3a88e050048ca02d49eb493d3517f79d59a6dc420a54d125af914fc&scene=21#wechat_redirect)
* [“CyberFish Portrait Bot” | AI生成图像作品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487125&idx=1&sn=e1590906325946508493c752bec5bd96&chksm=e9f53c04de82b512e012c9e77eee887a8f794c157b5f85707fc72ad69f80460bf21f71353876&scene=21#wechat_redirect)
* [CyberFish 如何刚正面？Midjourney + StyleGAN工作流](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487033&idx=1&sn=4a7ac6b7f832b16bffc091f7281dc8d5&chksm=e9f53ca8de82b5be6c8ad14b7084c9ce23d6df7003ce013afd7ba006dd2509260649a758eef6&scene=21#wechat_redirect)
* [Cyber Fish | AI艺术藏品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486009&idx=1&sn=f92b4a1cd3c4a0f7476cf03cce1964c8&chksm=e9f538a8de82b1be7db40f6d7beef75b42f1da59df81b092ce9388bde7963b08852b6c10ad06&scene=21#wechat_redirect)
* [Ukiyo-e Portrait Diffusion，自训练一套Diffusion模型](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487039&idx=1&sn=ff27260432e2286707fc13330b65232b&chksm=e9f53caede82b5b8e981cc6d562903e3ca1062698f7740d7cd754aa37ea5f2395fed72a4c260&scene=21#wechat_redirect)
* [不可名状·克苏鲁 | AI艺术藏品](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486074&idx=1&sn=bebd3c14cab5c566b618552c013fac0e&chksm=e9f538ebde82b1fdcbc0fc26fd59d05acd6ca994522eb6ffa266fd30ef9c4405eef46fce1200&scene=21#wechat_redirect)

**部分AI艺术教学相关内容：**

* [讲座视频 | 生成式AI艺术创作过程-8.25央美国际学院](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487312&idx=1&sn=79e83b213b8729571f1283215680d412&chksm=e9f53dc1de82b4d715ba1941330d54680b6244bd42467cd970828a4bbfd29926244ca909ba8f&scene=21#wechat_redirect)
* [StableDiffusion、DiscoDiffusion等AI模型本地环境搭建教程](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487259&idx=1&sn=7e80b3c577b3c869d7d944923efdb76a&chksm=e9f53d8ade82b49c7e54bde7ca56679924ef459c28eaca8fff42d25e3d80752ae8458c9c1c6a&scene=21#wechat_redirect)
* [AI艺术训练营第2期已开始，继续接受报名。](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247487039&idx=2&sn=164944280b26cb4a908c95d0587cfe86&chksm=e9f53caede82b5b888696d2e9e8cbe2205e5438fec79a4ac5e45cefcb244f449d707d477f2e3&scene=21#wechat_redirect)
* [「人工合成废托邦」AI艺术社群作品分享10 & Artiverse公开课预告](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486796&idx=1&sn=db0702138608fbe6308e6c8baa95b00a&chksm=e9f53fddde82b6cb65354e338a77f82f72ef7504911cf6f3f39219a7cd714464a90f2416844d&scene=21#wechat_redirect)
* [「“壮锦”非遗AI艺术设计」AI艺术训练营社群作品分享9](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486776&idx=1&sn=ff39f5c9a143d7a54098f3f7f4f3a1e3&chksm=e9f53fa9de82b6bf90f849e6b34b2ec06a730aa18736fde54452057cf671a13ede205fdcb17e&scene=21#wechat_redirect)
* [AI艺术训练营作业第二波](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486579&idx=1&sn=be43a450fb17ddd6402c7b2ae424eb27&chksm=e9f53ee2de82b7f41c7e8ffd033474f3e650ab86f6c5dfa2175d554fd16a1e8706309bc4a43a&scene=21#wechat_redirect)
* [AI艺术训练营作业第一波](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486560&idx=1&sn=2749a036037208c8efbb8257faccf8ac&chksm=e9f53ef1de82b7e7986abb1ddaa3274fb8963e7e1685a2b61e06c6e925291f8ae3b9d419437a&scene=21#wechat_redirect)

**教学资源汇总：****yuque.com/code2art**

**课程咨询及微信群：******floatbug****

群将满，加微信烦请注明：  
来源（公B抖知）、学校单位、专业行业、作品集/tw/ins等，高效交流。

<img src="/uploads/project-220901/img_009.webp" alt="" loading="lazy" />

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

公/知/抖/B/小：  
**实验编程**
