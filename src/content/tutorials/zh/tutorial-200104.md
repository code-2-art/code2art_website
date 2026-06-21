---
id: "tutorial-tutorial-200104-zh"
concept_id: "tutorial-200104"
type: "tutorial"
slug: "tutorial-200104"
title: "【名侦探柯南】如何通过手机拨号来玩交互【大量实例高能预警】"
lang: "zh"
tags:
  - "tutorial"
status: "canonical"
created: "2020-01-04"
updated: "2020-01-04"
version: 1
summary: "2020第一篇，不小心挑了个Old School主题。"
coverUrl: "/uploads/tutorial-200104/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-01-04"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484017&idx=1&sn=80f244823d01075d14cbbaade5b4492c&chksm=e9f530e0de82b9f64d6cce3b886a995a7d805e193e762ec9f3682fa3458246bd2ec165e472ef"
useDocUrl: false
---

前言：

2020第一篇，不小心挑了个Old School主题。

十年前上映的柯南剧场版《名侦探柯南：战栗的乐谱》中有一段，只见柯大侠立于水中央，先一记世界波击落岸边的电话听筒，然后闭目运气喊了两嗓子，就远程播通了110报警电话。

<img src="/uploads/tutorial-200104/img_001.webp" alt="" loading="lazy" />

这回书我们就来说一说这个神仙操作的后半部分，如何用声音拨通电话。  
以及**进阶内容，用声波当传输载体来玩交互**。

---

柯大侠不但演示了最终效果，人家把原理也都解释清楚了，这简直就是本公众号的风格嘛。

<img src="/uploads/tutorial-200104/img_002.webp" alt="" loading="lazy" />

再分解一下，拉长文章篇幅。

<img src="/uploads/tutorial-200104/img_003.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-200104/img_004.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-200104/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-200104/img_006.webp" alt="" loading="lazy" />

柯大侠提到的**DTMF**，是“**Dual-Tone Multi-Frequency**”（双音多频）的缩写。  
我们在拨打电话的时候，尤其是十几年前实体按键的功能机时代，每一个数字按键，按下去都对应一个独一无二的拨号音。**电话实际上是由这些拨号音拨通的，不是那些按键。**

每个拨号音是由两个频率的音波组合而成，频率与数字的对应表，柯大侠刚才就准备好了：

<img src="/uploads/tutorial-200104/img_007.webp" alt="" loading="lazy" />

红色框出的就是常用的拨号键，比如110的1，就是由低频697Hz和高频1209Hz组成。而0，是由低频941Hz和高频1336Hz组成。

柯大侠和秋庭伶子酱，两个拥有**绝对音感**的人，分别按照上边的音频字母表，发出低频和高频的狮吼海豚功，组合出了110三个音，以此拨通了求救电话。

---

早年间很多人仿制这个过程，有用钢琴拨电话的，用windows media player的，也有写程序合成的，其实只要发出正确频率的音就可以。

<img src="/uploads/tutorial-200104/img_008.webp" alt="" loading="lazy" />  
https://www.youtube.com/watch?v=s-dKTP19OV0

<img src="/uploads/tutorial-200104/img_009.webp" alt="" loading="lazy" />  
https://www.zhihu.com/question/20338020/answer/119939351

如果到这里还没走，可以想一下，如果你拨打某人电话时的拨号声音，或者用电话银行时输密码的声音，**如果被人监听或录下来，是不是电话号码和密码就有可能泄露了**？  
答案：**是 的** **w(ﾟДﾟ)w**

<img src="/uploads/tutorial-200104/img_010.webp" alt="" loading="lazy" />

https://tech.qq.com/a/20120901/000028.htm

不过不用过于担心，毕竟本文的主题属于Old School，现如今的电话系统已经不是传统电话网络了，而银行也有措施：

"呼叫中心行业还有银行业早就有反制的方法（Jamming tone) 。在输入密码前后，甚至中间播放一些无用和无顺序的DTMF。"  
*https://www.zhihu.com/question/20453077/answer/15171721*

上边所谓对周鸿祎手机号的**“破译”，其实就是对DTMF音频信号的解码**。  
DTMF本身就是一系列特定的频率，为了方便接收端识别，**它的特点是抗干扰**而非加密，所以根本谈不上“破译”。  
实际上上文那个破译过程，其实就是把拨号音频文件丢到音频软件里看了一下频谱，然后拿柯大侠用的那张表进行对照查号码数字。

---

前边提过，大部分关于DTMF的所谓“黑科技”视频，其实都是模拟发音拨个电话而已，含金量甚至不如拿音频软件去分析周鸿祎的手机号。  
没错，我就是羡慕他们的播放量 **(╬▔皿▔)凸**

**DTMF的解码过程**，既然没多少人写，我写写好了。  
如果你是**电子通信**类专业，可能本科某个实验课要考，所以还不赶快关注再加个星标？  
如果你是**交互媒体**相关专业，下面就要开始**用声波当传输载体来玩交互**了，所以还不赶快关注再加个星标？  
当然等会儿再点个**在看**就更好了。

先再回顾一下柯大侠的表：

<img src="/uploads/tutorial-200104/img_007.webp" alt="" loading="lazy" />

DTMF抗干扰强，图中的8个音频各自间不存在谐波关系，从而减少了信号干扰。

它的原理又很简单，每行每列各出一个频率，组合出一个拨号音。  
4行✖4列=16个音，也就是说，如果把DTMF做成类似OSC的控制器，即使仅仅按单音个数，也有16个控制开关。  
如果再按拨号间隔去切分，那就多了去了，比如110控制灯光开关，114控制粒子特效开关、119发射烟火……

类比OSC交互过程，DTMF交互也分成发送和接收两端。

*强势插播OSC控制器广告一则：*  
[用这款小程序就能操控现场演出和交互装置](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)

然后再发个**后半截文章的预告**，否则我怕有的老乡跑了……  
我将学习记录DMTF的发送和接收，涉及到的关键词有：

* 前端！HTML5！JavaScript！NodeJS！WebAudio！
* 傅里叶！！！FFT！！戈泽尔！(?)
* MaxMSP！Pure Data！！
* 交互！！！！

---

**先 说 发 送 端。**

前边的钢琴、柯大侠的嗓子、电话拨号，都是发送端，但我们还是需要看上去“正经”一点的。  
（否则发出去没人看啊，就像我之前的大量熊文……）

分别举几个**MaxMSP**和**前端（JavaScript）** 的例子。

**MaxMSP示例1**

MaxMSP自带的例子里就有，我写这篇之前从没注意过，太良心了，见菜单：  
`Help - Examples - synths - dialer`

<img src="/uploads/tutorial-200104/img_011.webp" alt="" loading="lazy" />

注意红框的9和两个频率，跟柯大侠表格中的是一样的。

播出来的声音就是这样：

**MaxMSP示例2**

<img src="/uploads/tutorial-200104/img_012.webp" alt="" loading="lazy" />

“Designing Sound”的例子里有一个是DTMF拨号，有人给出了此书所有例子的MaxMSP实现版：  
https://github.com/unriginal/Designing-Sound-Max-Patches

<img src="/uploads/tutorial-200104/img_013.webp" alt="" loading="lazy" />

注意图中红框仍是柯大侠的频率表格。

**前端JavaScript 示例**

前端的实现跟MaxMSP原理是一样的，按照DTMF频率表格，调用WebAudio API播放即可。  
这里有一个例子：

<img src="/uploads/tutorial-200104/img_014.webp" alt="" loading="lazy" />

https://codepen.io/edball/pen/EVMaVN

访问上述链接，手机也兼容。不止是UI，还是能发出相应拨号音的。  
没录视频，不妨自己试试。

---

**现 在 说 接 收 端。**

接收过程就是采集麦克风的音频，然后进行解码，得到对应的拨号数字。

音频采集，一般的程序底层都有提供好的API供调用，所以重点就是如何对DTMF解码。

DTMF说白了也是一段声音，并且按照特定频率在发送。所以解码就是想办法得到声波中的特定频率，自然而然的，**傅 里 叶** 又出现了。用傅里叶变换，把时间域的声波变换到频率域，就能轻松的展开分析了。

在实际编程操作中，用的仍是**DFT**即**离散傅里叶变换**相关技术。  
（以前写过利用傅里叶原理，如何用Python和Blender画任意图形：[今天学会傅里叶画画，明天就是初音未来](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483966&idx=1&sn=dba1b327132ea952e827426c3dbce743&chksm=e9f530afde82b9b9c1b205634ae3b4ad8d0db277c6325be65582828335acc085b4367130c207&scene=21#wechat_redirect)）

这里会用到一个算法：**戈泽尔算法（Goertzel algorithm）**

Goertzel算法可以利用序列的周期性来减少计算量，它在只需要计算 0 ~ 2π 范围内的一部分频率上的DFT值时，比FFT需要计算全部值更加灵活有效，适合DTMF的解码。

本着已经重修了傅里叶的势头，心想再来一轮Goertzel，顺便再水10篇文章，美滋滋。  
打开落灰的神书后，突然看到**这单元当时不是考试重点**啊，所以在本文里也不多写了。（找不到坚强的理由...）

<img src="/uploads/tutorial-200104/img_015.webp" alt="" loading="lazy" />

所以愉快的开始Google。

**Pure Data 示例**

果然一遇到硬核的部分，MaxMSP资源就比较少了，拉出老朋友Pure Data！

<img src="/uploads/tutorial-200104/img_016.webp" alt="" loading="lazy" />

https://github.com/breedx2/pure-data

这是一个看上去靠谱的例子，但也是本文唯一我没测试过的，因为鞭长莫及啊心爱的Pd很久没动了，电脑里都没装……  
如果你服用时有什么不良或良的反应，十分欢迎留言分享。

**前端 JavaScript 示例**

Goertzel.js，看名称可知，这不仅能用来DTMF解码，更是一个全面的Goertzel算法库，可以用于其他各种项目（仪器调优、解码FSK、创建频谱图等）。  
https://github.com/Ravenstine/goertzeljs

它自带一个DTMF解码的demo。  
我分别用MaxMSP和手机直接拨号来测试，**请看视频**：

可以看到效果是一样的，**证明所传输的数字，确实是通过音频信号或声波传输到接收端的，而不像OSC那样走的是网络**。

再来搞点别的：

<img src="/uploads/tutorial-200104/img_017.webp" alt="" loading="lazy" />

本来想搞个大新闻，手头除了一个米家电源啥也没有，将就一下吧，**用手机拨号控制电风扇，字体加粗后也是交互啊！****！**

---

#### 参考资源

* Goertzel.js

  https://github.com/Ravenstine/goertzeljs  
  Goertzel算法的前端JavaScript实现，可以用来解码DTMF。
* 离散时间信号处理  
  奥本海姆大神的经典巨著。
* “Designing Soucnd” 示例的MaxMSP实现  
  https://github.com/unriginal/Designing-Sound-Max-Patches
* DTMF decoder in Pd  
  https://noisybox.net/blog/2015/11/dtmf\_decoder\_in\_pd  
  Pure Data 实现的DTMF解码器。
* DTMF Tones in Web Audio  
  https://codepen.io/edball/pen/EVMaVN  
  一个DTMF拨号前端实现。
* [用Blender来学习Python创意编程，实现傅里叶级数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6&scene=21#wechat_redirect)  
  广告一则，[自己写的傅里叶相关内容](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6&scene=21#wechat_redirect)。

---

#### **Talk is cheap. Show me the code!**

实验编程大部分文章开源，可从公众号菜单获得。例如编程德鲁伊系列：  
https://github.com/avantcontra/coding-druid

本文大部分参考示例已经附上链接。  
最后用手机拨号控制风扇开关的实现过程及代码，比较简单，**可在知识星球中获取，****感谢已经加入星球的朋友们**。

在知识星球里你将持续获得实验代码和无限次答疑。  
详情请点击：[**关于赞赏和内部知识星球**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483960&idx=1&sn=58917f286e362fe9f49ec3dd6985b1b6&chksm=e9f530a9de82b9bf25d318b160b8ff8172dba821d5be6f1d2e5bf48f10f6b0f774f349de6f4d&scene=21#wechat_redirect)。

<img src="/uploads/tutorial-200104/img_018.webp" alt="" loading="lazy" />

---

欢迎猛戳下方**赞赏**或**喜欢作者**，**buy me a coffee**！

作为一名 Old School Blogger（始于2003年），我将维持内容输出大于赞赏所得。  
您的金钱鼓励，**在看**，**收藏**，**转发**，是我乱码的动力。

--

Contra

网站: floatbug.com  
B站：Contra的后院 **微信公众号/知乎专栏/知识星球：****实验编程**

<img src="/uploads/tutorial-200104/img_019.webp" alt="" loading="lazy" />
