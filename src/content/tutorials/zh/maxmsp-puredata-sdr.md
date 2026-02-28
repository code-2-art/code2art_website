---
id: "tutorial-maxmsp-puredata-sdr-zh"
concept_id: "maxmsp-puredata-sdr"
type: "tutorial"
slug: "maxmsp-puredata-sdr"
title: "末日技能：新媒体艺术家如何在末世AI来临时用MaxMSP收听广播"
lang: "zh"

domains:
  - "interactive-media"
  - "audio-computation"

series:
  id: "interactive-media-practice"
  order: 1

related_terms:
  - "software-defined-radio"
  - "maxmsp"
  - "puredata"

tags:
  - "sdr"
  - "maxmsp"
  - "puredata"
  - "radio-art"

status: "canonical"
created: "2017-03-28"
updated: "2017-03-28"
version: 1

aliases:
  - "末日技能：新媒体艺术家如何在末世AI来临时用MaxMSP收听广播"

summary: "用MaxMSP、PureData实现软件无线电，收听广播。"
difficulty: "intermediate"

tools:
  - "maxmsp"
  - "puredata"
  - "rtl-sdr"

coverUrl: "https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-1-813b9665944b5396849524a843933fd0.jpg"
author: "Contra"
publishedAt: "2017-03-28"
docUrl: "https://avantcontra.github.io/interactive-media/maxmsp-puredata-sdr"
---
<p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-1-813b9665944b5396849524a843933fd0.jpg" width="650" height="431" class="img_ev3q"></p><p><em>图自 softcraze.com</em></p><p>从《终结者1》中的“天网”开始，“人工智能”若隐若现了三十多年，终于在今年占领了头条位置。据说霍爷（不是元甲，是霍金）也预言了 “人类未来的敌人就是 AI ”。</p><p>在不远的未来的某一天，当你摆脱智能扫地机器人的阻拦跳出窗外，才发现街上不断涌来的僵尸，空气中弥漫着能使人变异的病毒，无人驾驶的汽车拦在十字路口。微信是不能发了，谁知道另一头接收微信的是人还是狗。急迫想刷微博朋友圈获取最新消息，但互联网已经被天网完全控制。</p><p>是时候学一门末日技能了，在断网的时候能跟外界保持联络。</p><p>可以选择通过 3KHz～300GHz 之间的电磁波来通信，用国语说就是收听广播。</p><p>严格地讲，不是指普通家用或车里收听的那种广播（接收范围有点窄），而是“无线电”。能收到世界某个角落发出的微弱信息，指引着末日仅存的人类。</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-2-9f38170d68b62be078fd7abbc2a809ea.jpg" width="650" height="366" class="img_ev3q"></p><p><em>Citizen Z in Z Nation，图自Pinterest</em></p><p>当然，作为一名新媒体艺术家，身上背个无线电台坐在星巴克喝茶，目标有点大，功能也不太灵活。能否直接用星巴克店机 Mac 笔记本来接收无线电呢？</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-3-b5ea7b870ba39c8a559a6211d48f04bf.jpg" width="400" height="551" class="img_ev3q"></p><p><em>图自58pic.com</em></p><p>用电脑接收无线电（而非通过互联网），背景原理是“软件定义无线电”，简单说是用电脑软件来实现一部分传统电台的硬件电路功能，详情可以搜索<strong>“Software Defined Radio”、“RTL-SDR”</strong>等关键词。</p><p>本文直接上实例，需要以下三样：</p><ul><li>Macbook Pro；</li><li>基于 Max(Cycling ’74) 的 SDR patch（也有 Pure Data 版）；</li><li>Realtek RTL2832U+R820T 电视棒。</li></ul><p>说好的听广播，怎么又变成看电视了？
Realtek RTL2832U + R820T，是 Realtek 产的一款芯片的型号，原本是做电视棒的。但这个芯片具有非常广的频率接收范围，又物美价廉，就被广泛用来做 SDR 应用了。因为即便是软件无线电也不能完全纯软，这根棒棒就包含了必要的射频调谐器、ADC 等硬件，还有根天线。</p><p>RTL2832U+R820T 电视棒我买的是这一款，四五十块钱，看上去是个“U盘”加根天线，小巧。</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-4-0a18c1e02ea48ebc747f3441338aa8a9.jpg" width="640" height="640" class="img_ev3q"></p><p>其实还带个遥控器，毕竟人家是电视棒……</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-4.2-fe474a51aa1c83fab81b5939621d5ef6.jpg" width="720" height="960" class="img_ev3q"></p><p><em>购自淘宝：
<a href="https://item.taobao.com/item.htm?spm=a1z09.2.0.0.S23qQk&amp;id=42758064965&amp;_u=s1493hhfb30" target="_blank" rel="noopener noreferrer">https://item.taobao.com/item.htm?spm=a1z09.2.0.0.S23qQk&amp;id=42758064965&amp;_u=s1493hhfb30</a></em></p><p>插好电视棒，接下来就是准备 SDR 软件。</p><p>SDR 软件有很多种，本文专为新媒体艺术家量身推荐基于 Max/Pd 的 SDR patch：</p><p><a href="https://github.com/tkzic/pd-rtlsdr" target="_blank" rel="noopener noreferrer">https://github.com/tkzic/pd-rtlsdr</a></p><p>下载运行起来后，MaxMSP版如图：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-5-00c607626da33e77a2926c1928144f39.jpg" width="640" height="352" class="img_ev3q"></p><p>PureData版:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-6-80a33abec411286e26e4273df0747e90.jpg" width="640" height="310" class="img_ev3q"></p><p>MaxMSP版收听广播实录视频：</p><p><em>（调频时有杂音，建议先调小音量）</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=80965034&amp;bvid=BV1EJ411e7nu&amp;cid=138576497&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><p><a href="https://www.bilibili.com/video/BV1EJ411e7nu" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1EJ411e7nu</a></p><p>PureData版：</p><p><em>TODO</em></p><p>至此，已经可以用电脑来听音乐台广播了，末世来临也要消遣不是。</p><p>而这根末日金箍电视棒，除了能听中国国际广播电台，还能接收气象卫星、GSM、飞机等无线电信号。</p><br><p>篇幅所限，列些图片；单纯科研，拒绝喝茶。</p><p><strong>气象卫星云图：</strong></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-7-9a89a1847b47f183ebd97f8b522cdc50.jpg" width="450" height="380" class="img_ev3q"></p><p><em>图自 mattg.co.uk/words/noaa_sdr/</em></p><p>下面是我昨晚扫描一夜接收到的气象卫星云图，可能因为没有加装室外天线，或者哪里的打开方式不对，图片是这个样子……</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-8-dfae1fce1b0201e9843382f19c4c2fea.jpg" width="640" height="772" class="img_ev3q"></p><p>要接收卫星云图，新媒体艺术家的 Max 就有点吃力了，我改用了开源软件 CubicSDR ，以及能将卫星声波信号转为图片的 WXtoImg 。</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-8.2-d706cfd3b329ee54e5802c189e8224cb.jpg" width="1280" height="640" class="img_ev3q"></p><p>参考资料：<a href="http://mattg.co.uk/words/noaa_sdr/" target="_blank" rel="noopener noreferrer">http://mattg.co.uk/words/noaa_sdr/</a></p><p><strong>飞机轨迹：</strong></p><p>飞机飞行轨迹数据，收到后可视化出来，就如下图所示：</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-9-487e3dd79c0cc80da333bea4fd7a7893.jpg" width="640" height="502" class="img_ev3q"></p><p><em>图自 flightradar24.com</em></p><p>如今，13寸的2016款 MacbookPro，已经可以用充电宝充电了。给车加满汽油，带上金箍电视棒和笔记本，来一场说逃就跑的末日旅行吧！</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-10-2cdecdd1b91528decfa2f323880043f2.jpg" width="1240" height="800" class="img_ev3q"></p><p><em>图自 wnax.com</em></p><p><strong>一些参考资料：</strong></p><ul><li><a href="http://osmocom.org/projects/sdr/wiki/rtl-sdr" target="_blank" rel="noopener noreferrer">http://osmocom.org/projects/sdr/wiki/rtl-sdr</a></li><li><a href="https://fjkraan.home.xs4all.nl/digaud/puredata/rtlsdr/index.html" target="_blank" rel="noopener noreferrer">https://fjkraan.home.xs4all.nl/digaud/puredata/rtlsdr/index.html</a></li><li><a href="http://mattg.co.uk/words/noaa_sdr/" target="_blank" rel="noopener noreferrer">http://mattg.co.uk/words/noaa_sdr/</a></li><li><a href="http://ju.outofmemory.cn/entry/72852" target="_blank" rel="noopener noreferrer">http://ju.outofmemory.cn/entry/72852</a></li><li><a href="http://sdr-x.github.io/page3/" target="_blank" rel="noopener noreferrer">http://sdr-x.github.io/page3/</a></li></ul><p>谢谢阅读。</p><p>不要慌，请自觉遵守无线电管理法规。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
