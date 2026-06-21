---
id: "tutorial-midjurney-230513-zh"
concept_id: "midjurney-230513"
type: "tutorial"
slug: "midjurney-230513"
title: "【干货教程】用Midjurney一小时从零制作公众号互动图文"
lang: "zh"
tags:
  - "midjurney"
status: "canonical"
created: "2023-05-13"
updated: "2023-05-13"
version: 1
summary: "昨天，突发奇想，我自己主职是交互开发，以前工作流程需要多方配合，尤其在视觉层面往往需要其他设计师给素材，虽然我自己曾经也做过设计，但如果一个人承包所有工作会显得相当累，正巧如今有了AI，文字素材可以丢"
coverUrl: "/uploads/midjurney-230513/img_001.webp"
author: "实验编程"
publishedAt: "2023-05-13"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247489171&idx=1&sn=9feebd287eb288a5cb4bcd4b29ffd9c0&chksm=e9f52402de82ad14bfe71bd77afb89e9fe2854dc1885d2961b0fdd356ee7005b60e1e47d6839"
useDocUrl: false
---

昨天，突发奇想，我自己主职是交互开发，以前工作流程需要多方配合，尤其在视觉层面往往需要其他设计师给素材，虽然我自己曾经也做过设计，但如果一个人承包所有工作会显得相当累，正巧如今有了AI，文字素材可以丢给GPT，图片素材可以丢给MJ或者SD,我自己只负责输出技术即可，这样一个人就成了一整个工作室了。

为了验证我的想法，我下班后立即开搞，我仅用一小时简单做了一个“视差”特效的互动图文发在了自己的公众号上，不多时粉丝数就蹭蹭往上冒了，从原先的750一直到如今的830,自从公众号改了推荐算法后，我的文章的阅读数就从过去的三位数直接掉回了两位数。很多朋友看后说，公众号居然还能直接内嵌H5表示没想通。也有读者表示从没见过这样的图文，但效果实在“泰酷辣”。

如果你还没有看过，可以戳这里[有了AI,做互动图文容易了](http://mp.weixin.qq.com/s?__biz=MzA3OTM1MTMyOA==&mid=2457069973&idx=1&sn=a2b6edd0e0a672da71d8f71e4b9272ce&chksm=883392dabf441bccab19e70b53a3e3266fd445e80b70a065b79b9bdd7ac90fd13d43502d9ce4&scene=21#wechat_redirect)，也可以点击今天推文的副条。

至于这篇，我想跟大家简单介绍一下互动图文，以及写一篇技术干货，手把手从科普到实操把昨天你看到的这篇图文的制作过程分析给你看。

---

公众号互动图文，属于新媒体编辑的工作范畴。其实很多大品牌早就开始使用了。比如苹果公众号，几乎每篇都是。

今年得到app的跨年演讲有一节标题是《10万+与微雕》，罗征宇谈到一个公众号“GQ实验室”，他们也是非常喜欢制作互动图文的。

罗胖说GQ每年都有350篇破10W+的文章，年入上亿。我们从事互动的早就知道他们了。并把他们作为行业标杆。但如果你懂行，经常把公众号发到浏览器按F12去查看他们的网页源码，那你可以会看到开发者偷偷注入的一些标签，比如“E2.COOL 新媒体编辑器版权所有”，又或者“交互实验室开发”等等字样。所以很容易找到他们是找了哪家供应商开发的，也可以知道他们使用的是什么开发工具。

一般新媒体小编用的最多的公众号工具往往是秀米，或者135，i排版，也会使用壹伴。在这些编辑器里，互动图文被叫作SVG，所以行业内也管互动图文叫作公众号SVG。但我目前调研下来，E2的功能确实远超其他。大部分编辑器把自己用过的案例做成模板，用户通过改变模板来实现效果。这样你差不多就能做出跟模板一致的互动了。所以开发的过程往往是先去找模板，然后根据模板来想效果，从而制作素材填入模板再把编辑器的内容导入到自己的号内发表。E2之所以厉害，在于他们的模板库数量以及叠加嵌套的能力。

一般越是有头有脸的品牌方，越是希望自己的互动图文最好是市面上没见过的。所以定制化需求会非常高。但新媒体的投入往往是低成本的。所以请一个懂设计的小编，往往不太懂开发。那就没法通过代码去调试svg效果，只能使用模板来内卷普通的图文。

<img src="/uploads/midjurney-230513/img_001.webp" alt="" loading="lazy" />

早在2018年，如今E2的创始人计育韬就写了本新媒体运营的书。里面特地提到要做新媒体运营必须得懂技术，所以书名就叫《硬核运营》。

然而，如果你只是做网页前端的，当你开始接触公众号互动图文时候，你就会发现这东西跟你认知里的SVG完全不是一回事。因为这里面接近50%的svg原生功能是不可用的。腾讯为了防止公众号被人恶意注入代码从而影响图文体验，屏蔽了非常多的功能。所以公众号里的SVG属于阉割版的，而且随时会根据腾讯公众号部门的规则变动而变动。也就是说或许某一天某一个效果以前可以，但现在就做不了了。这无疑对很多开发者来说是很崩溃的。但如果你是一个新媒体编辑，那就必须紧跟变化不断学习。就如同你如果开发过小程序，就应该知道微信小程序里的用户授权接口userInfo一年改三次的那个梗。没办法，作为开发者你必须紧跟腾讯。

至于，目前有哪些效果能不能做，你可以同样去计育韬他们开发的isvg网站里找。网址是：https://www.isvg.com/

<img src="/uploads/midjurney-230513/img_002.webp" alt="" loading="lazy" />

这里面收入了很多大品牌的互动图文展示，有些还非常新。你如果对这个领域不了解的，可以进去一个个扫码看看，一定会在一声声“泰酷辣”的感受中提升认知。

---

接下来，闲话不多，直接把我昨天从零开始创作图文的细节跟大家分享。

最一开始，我在isvg里找灵感，正巧看到马歇尔耳机制作的这款叫做《时间之门》的互动非常酷。非常普通的上下滑动+音频播放效果。就想做一个差不多的。

<img src="/uploads/midjurney-230513/img_003.webp" alt="" loading="lazy" />

可以点这里实际体验，[时间门外](http://mp.weixin.qq.com/s?__biz=MzI4MjE1NTI0Nw==&mid=2247505456&idx=1&sn=b51d21e585f4c640facaf413018db4b9&chksm=eb9cd7b0dceb5ea651571f288423ee3aed3f605f824750737919f38e42e520fae4dd2e79fe0a&scene=21#wechat_redirect)

这里面那个音箱和耳机在滑动中在屏幕中锁定并错层穿透的效果非常好。但如果从制作层面分析，它其实是把长图切得很碎，一层一层覆盖叠加才实现这样的效果的。

在svg里不像传统前端那样能使用postion:fixed进行锁定。布局上的问题都得通过svg的层层嵌套关系进行组合才行。这也是互动图文最麻烦的地方。

思来想去，我放弃了他这个效果，从而做一个自己觉得更简单的吧，但交互体验上下滑动非常好。因此素材整理上采用差不多的就行。直接开搞，打开discord,也打开ops。

四喜茶茶他们团队做的这个分析工具太好用了：https://moonvy.com/apps/ops/

如果你没读过我之前写的这篇《[分享点我最近倒腾Midjurney的心得](http://mp.weixin.qq.com/s?__biz=MzA3OTM1MTMyOA==&mid=2457069949&idx=1&sn=872b93a8e5e985cde78d8dd82d021016&chksm=88339232bf441b24e0c86b864af7faa15b0fc7445834b8c46b574a88b61741b6b2dd017f8903&scene=21#wechat_redirect)》，建议好好读读。

既然是上下滑动的长图，我先创一张大背景吧。

我想要加入“上海”，“科技感”等关键词，既然是模仿的对象是黑白的，我也找一个黑白的艺术家风格。直接抽卡。看看mj能给我什么。打开艺术家参考网站lib.kalos.art.

https://lib.kalos.art/topic?model=1&topic=0&type=artist

<img src="/uploads/midjurney-230513/img_004.webp" alt="" loading="lazy" />

看了几个，发现艺术家 Alex Toth的美漫风格很不错。

直接丢进ops。因为是长图，所以高宽比给个1:10吧。

<img src="/uploads/midjurney-230513/img_005.webp" alt="" loading="lazy" />

prompt：Science and technology, Shanghai, Fantasy painting, Black and white, by Alex Toth --ar 10:100 --q 2 --s 750 --v 5.1

我生成了大概三次。出来是这种竖版长条状的就对了。因为背景图太长，我就不一一展示了。你自己可以试试。

<img src="/uploads/midjurney-230513/img_006.webp" alt="" loading="lazy" />

因为刚才说了，我想搞得简单点，毕竟第一次试水，目标在下班后的一小时内完工。所以实在不想根据马歇尔那样的分图层切片做穿透，那就做一些悬浮效果吧，利用svg里支持css3d的特性做得立体点？行吧，开搞。

做几个人物串个主题吧，既然用在自己号内，做一个个人成长的过程，小孩，少年，中年人？随便吧，开搞。

<img src="/uploads/midjurney-230513/img_007.webp" alt="" loading="lazy" />

prompt：A geek with glasses floats in the air, Whole body, Black and white, White background, by Alex Toth, Super detail, 4k --q 2 --s 750 --v 5.1

<img src="/uploads/midjurney-230513/img_008.webp" alt="" loading="lazy" />

把这货放背景上，我同事说，看着像跳楼，那么把他放低点吧。哈哈哈

<img src="/uploads/midjurney-230513/img_009.webp" alt="" loading="lazy" />

prompt:A teenager., Carrying rocket thrusters on their backs, Feet on a skateboard, Floating, Whole body, Black and white, White background, by Alex Toth, Super detail, 4k --q 2 --s 750 --v 5.1 --q 2 --s 750 --v 5.1

<img src="/uploads/midjurney-230513/img_010.webp" alt="" loading="lazy" />

这组貌似只有最后一个能用，虽然看着脸有点邪气，无所谓啦。反正叛逆的青少年。接下来第三组。

<img src="/uploads/midjurney-230513/img_011.webp" alt="" loading="lazy" />

prompt:An 8-year-old boy, Sitting in a retro flying machine, Floating, Whole body, Black and white, White background, by Alex Toth, Super detail, 4k --q 2 --s 750 --v 5.1 --q 2 --s 750 --v 5.1

<img src="/uploads/midjurney-230513/img_012.webp" alt="" loading="lazy" />

本来还想放一些装饰的，比如在飞的鸽子啊，或者热气球啥的，生成出来不好看，给了白底的关键词也没奏效，索性就不放了

<img src="/uploads/midjurney-230513/img_013.webp" alt="" loading="lazy" />

不放装饰，虽然光三个漂浮物看着有点单调，那只好算了，反正后面还要加字的。简单就简单点吧，正合我意。

下一步，抠图。还记得上一篇我也讲过的。不记得没关系，我再放一下网址：https://pixian.ai/

<img src="/uploads/midjurney-230513/img_014.webp" alt="" loading="lazy" />

把定稿的几个悬浮物直接拖进去。然后下载下来就完事了。把背景在photoshop中打开，把元素大概摆放下位置，然后，画个矩形写上字。素材准备就绪，打开公众号的素材库，把图片一张张上传进去，按12拷贝图片的链接地址。

<img src="/uploads/midjurney-230513/img_015.webp" alt="" loading="lazy" />

用点击图片查看元素，把图片地址拷贝在一个记事本里。

接下来进开发，来到我的老本行。打开vscode,开始写代码。

<img src="/uploads/midjurney-230513/img_016.webp" alt="" loading="lazy" />

简单解释下，因为公众号使用的是div标签，为了区分互动图文内部的结构，开发者喜欢使用section标签来做标记。

因为公众号图文，没法使用stlye标签，所以css都得内联在里面。

图片使用svg的background-image可以兼容手机的深色模式。

最外层的section设置了高度，并给了scroll属性，这样滑动就可以仅仅在一个容器内部实现。

至于你们看到的3d效果，使用的是css 3d，在外层的容器上给一个

transform-style: preserve-3d;以及一个perspective的数值。内层的元素就可以使用translateZ了。我仅仅把几个悬浮物改变了z轴的位置，相当于更往前拉了。而字的部分加了一点点rotationY。

加多会导致扭曲变形。这样网页立马就立体了。

好了，最后得安装一个壹伴的插件，进入html的模式，把代码拷贝进去，手机预览就搞定了。

<img src="/uploads/midjurney-230513/img_017.webp" alt="" loading="lazy" />

---

以上这些，如果对于网页前端工程师来说都是小菜一碟。因为我们的工作每天都在和html,css和js打交道，在交互图文开发中，不能使用js，所以只能通过容器嵌套以及少部分的css来实现效果，而对于动画啥的，得通过svg下的animate标签实现。而对于点击事件的开发也只能使用给热区配合pointevent属性触发嵌套以及动画来做。对于习惯使用js的前端来说，无疑这样的工作流非常繁琐。所以很多工程师也不太愿意去碰触svg交互图文的开发。加上图文一版需求紧，开发周期短，往往当天或者隔天就要推送的，但客户或许非常的“作”，很容易让制作团队熬夜甚至通宵，所以更让普通开发者避而远之。

anyway，我通过这篇教程，也说了些行业的内幕。不过幸好现在有AI作为辅助手段了。如果你是一名独立开发者。不管你是开发app的，网站的还是游戏的。我觉得AI真的可以大大优化我们的工作流，你不用再为没有素材烦恼。如果设计没人做，可以用mj或者sd。文字没人写可以用gpt。你只需要专注于自己的开发即可。虽然现在写代码可以利用github的copilot，但你看，如果让ai给你做一篇微信公众号的交互长图文，你让gpt试试，我觉得他大概率还是做不了的。在夹缝中找机会这或许不仅仅是开发者的红利，也是每一个行业甚至每一个人的机会点。毕竟只有每一个人才能知道自己所处环境的痛点和痒点是什么。

所以，在AIGC环境的当下，到底啥是最重要的。我觉得还是那句老话，人人都是产品经理人。你至少得有一颗自己给自己打工的心，时刻想着要去做一个至少方便自己使用的工具，兴许方便了家人朋友，再然后方便到了同行等等。所以我经常喜欢用小宇宙app听产品人的播客节目《三五环》,我觉得像少楠的flomo这样做产品的思路其实适合每一个人。

即便在如今连公众号都没人看的今天，他还想出了需要收费订阅的推送产品《小报童》。如果对于文字阅读无感的人来说，固然是无法理解的。

但我觉得这可能也是每一个人自己的机会所在。人与人的区别就在这里，我们不能一方面抱怨市场内卷，加上时代变革，丢失某个技能护城河而怨天尤人。

**我的观点就是：不要在去做“工具人”了，赶紧做一个“产品人**”**。**

（完）

---

<img src="/uploads/midjurney-230513/img_018.webp" alt="" loading="lazy" />

头图prompt:an image of an alien in a spaceship, in the style of romantic riverscapes, infinity nets, expansive skies, baroque maritime, panoramic scale, impressive skies, fantastical street --ar 108:43 --q 2 --s 750 --v 5.1

如果你觉得还不错，请点在看和转发，有需要讨论后台留言备注“加群”

还有要记得关注我公众号哦。
