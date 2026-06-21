---
id: "tutorial-5-maxmsp-blender-200301-zh"
concept_id: "5-maxmsp-blender-200301"
type: "tutorial"
slug: "5-maxmsp-blender-200301"
title: "超简单！5分钟就能做出来的MaxMSP和Blender实时音画交互"
lang: "zh"
tags:
  - "maxmsp"
  - "blender"
status: "canonical"
created: "2020-03-01"
updated: "2020-03-01"
version: 1
summary: "Blender是现在的3D美术新势力。虽新却不小，也二十来岁了。"
coverUrl: "/uploads/5-maxmsp-blender-200301/img_001.webp"
author: "Contra的后院"
publishedAt: "2020-03-01"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484059&idx=1&sn=3a3d57a20660d76dd47feb73fc68bdc4&chksm=e9f5300ade82b91cec5abdad86b3510eedf7d5ace1ee3c193ae9dec22f37d24043bdffe7a1fd"
useDocUrl: false
---

<img src="/uploads/5-maxmsp-blender-200301/img_001.webp" alt="" loading="lazy" />

Blender是现在的3D美术新势力。虽新却不小，也二十来岁了。  
至于势力有多猛，推荐出门右转看康老师雄文，公众号：康师傅炖一切。

在【实验编程】这里，我一般拿Blender当作开箱即用的Python运行环境。  
推荐自家雄文：[用Blender来学习Python创意编程，实现傅里叶级数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6&scene=21#wechat_redirect)。

而这一次，**它是简单粗暴的VJ/音乐可视化/音画交互软件！**

<img src="/uploads/5-maxmsp-blender-200301/img_002.webp" alt="" loading="lazy" />

指头疼，换个道具：

<img src="/uploads/5-maxmsp-blender-200301/img_003.webp" alt="" loading="lazy" />

再来个：

<img src="/uploads/5-maxmsp-blender-200301/img_004.webp" alt="" loading="lazy" />

手机控制当然也是可以了：

<img src="/uploads/5-maxmsp-blender-200301/img_005.webp" alt="" loading="lazy" />  
**图中手机OSC控制器，自然是实验编程出品的土特产：**[**BugOSC**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)

**完整视频端上来，只需要几分钟**：

**点击视频****，精华都在这里**

---

以下是图文版详解。

有几个核心模块：

* **Blender Eevee引擎**：负责实时渲染
* **NodeOSC Blender addon**：负责OSC数据收发
* **MaxMSP**：负责声音处理
* **BugOSC**：微信小程序，OSC控制器

 

1我是第一章分隔线

**第一步，下载Blender Eevee demo Wasp Bot**

https://www.blender.org/download/demo-files/

<img src="/uploads/5-maxmsp-blender-200301/img_006.webp" alt="" loading="lazy" />

**第二步，下载和安装NodeOSC插件**

https://github.com/maybites/blender.NodeOSC

<img src="/uploads/5-maxmsp-blender-200301/img_007.webp" alt="" loading="lazy" />

从Preferences里安装插件：

<img src="/uploads/5-maxmsp-blender-200301/img_008.webp" alt="" loading="lazy" />

安装和修改勾选项后，记得保存设置：

<img src="/uploads/5-maxmsp-blender-200301/img_009.webp" alt="" loading="lazy" />

**第三步，配置NodeOSC插件**

安装后的插件从这里打开：

<img src="/uploads/5-maxmsp-blender-200301/img_010.webp" alt="" loading="lazy" />

**先做一个简单的Cube练练手**。在NodeOSC里设置PC主机的IP、端口Port，并把OSC address跟Cube的scale缩放属性绑定起来。

<img src="/uploads/5-maxmsp-blender-200301/img_011.webp" alt="" loading="lazy" />

注意**Message handlers**里的**datapath**和**property**两个字段。  
对默认的Cube，NodeOSC已经帮你填好了：

```
datapath：bpy.data.objects['Cube']property: location
```

只需把property里的location改成scale，因为这里我演示的是缩放效果。

**第四步，做一个简单的MaxMSP OSC发送器**

<img src="/uploads/5-maxmsp-blender-200301/img_012.webp" alt="" loading="lazy" />

其中的 `/cube/scale`，就对应NodeOSC里的address。

**第五步，当当当当！**

<img src="/uploads/5-maxmsp-blender-200301/img_013.webp" alt="" loading="lazy" />

**MaxMSP与Blender的实时交互就完成了，比冷藏大象只多了两步。**

---

然而本文并没有结束，精彩刚刚开始。

2我是第二章分隔线

**下面正式换Eevee demo：****Wasp Bot**

**1. 打开刚才下载好的Wasp Bot文件，并设置NodeOSC**

<img src="/uploads/5-maxmsp-blender-200301/img_014.webp" alt="" loading="lazy" />

用OSC来控制眼睛，所以先找到眼睛参数的节点:

<img src="/uploads/5-maxmsp-blender-200301/img_015.webp" alt="" loading="lazy" />

调整节点里的Color参数试一试，嗯，是这个味儿。

<img src="/uploads/5-maxmsp-blender-200301/img_016.webp" alt="" loading="lazy" />

眼睛Object及其参数，相应的在NodeOSC里该怎么填呢？  
不要慌，这里我有个**祖传秘籍**：

点一下你要设置的节点参数，然后去脚本信息窗口里就能找到对应的命令行参数！

<img src="/uploads/5-maxmsp-blender-200301/img_017.webp" alt="" loading="lazy" />

然后复制粘贴到NodeOSC的**datapath**和**property**里即可！

```
datapath：bpy.data.materials["Head"].node_tree.nodes["Emission"].inputs[1]property: default_value
```

如果脚本信息窗口没有打开，可参照视频中的相关操作。

**2. 设置MaxMSP**

接下来在MaxMSP里播放一首节奏感强的音乐，或采集麦克风的声音：

<img src="/uploads/5-maxmsp-blender-200301/img_018.webp" alt="" loading="lazy" />

**3. 搞定！**

<img src="/uploads/5-maxmsp-blender-200301/img_003.webp" alt="" loading="lazy" />

---

3我是第三章分隔线

**现在试一下如何用手机控制Blender里的模型。**

首先，在NodeOSC里，把IP从127.0.0.1改为PC在局域网中的IP，如10.0.0.11，或192.168.1.123之类。  
保证手机跟PC在同一个局域网里。

<img src="/uploads/5-maxmsp-blender-200301/img_019.webp" alt="" loading="lazy" />

相应的OSC message address也可能要改一下，跟手机里的OSC控制器App保持一致。

OSC App，可以使用TouchOSC，当然这里推荐使用我号土特产[**BugOSC**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)。

<img src="/uploads/5-maxmsp-blender-200301/img_020.webp" alt="" loading="lazy" />

我用BugOSC里的第一个Toggle按钮，它的address是：  
`/bug_slider1`。

BugOSC会根据Toggle按钮的开关状态，分别发送1和0两个数字到NodeOSC。  
而NodeOSC的message datapath已经跟模型眼睛的参数绑定，从而实现用手机操控的闪烁效果。

<img src="/uploads/5-maxmsp-blender-200301/img_021.webp" alt="" loading="lazy" />

<img src="/uploads/5-maxmsp-blender-200301/img_005.webp" alt="" loading="lazy" />

---

#### 

#### **参考资源**

* Blender Eevee demo Wasp Bot  
  https://www.blender.org/download/demo-files/
* NodeOSC Blender addon  
  https://github.com/maybites/blender.NodeOSC
* [BugOSC](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)  
  制作过程文章：[用这款小程序就能操控现场演出和交互装置](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483913&idx=1&sn=0314a5ca618388983ca54ff20514e86f&chksm=e9f53098de82b98e8d6b6edba5b16ff6769a52e99e2ec879347768672434ca9e5d40547a226f&scene=21#wechat_redirect)  
  微信搜一搜：BugOSC

---

#### 

#### **Talk is cheap. Show me the code!**

本文制作全过程在视频里已包含。  
**若仍需源文件，可在知识星球中获取****，****感谢已经加入星球的朋友们**。

另外编程德鲁伊系列绝大部分开源，可刨**公众号菜单。**

在知识星球里你将持续获得实验代码和无限次答疑。  
详情请刨公众号菜单：**关于问答-**内部知识星球****。

---

您的**鼓励**，**在看**，**收藏**，**转发**，是我乱码的动力。

--

Contra

网站: floatbug.com  
B站：Contra的后院 **微信公众号/知乎专栏/知识星球：****实验编程**

<img src="/uploads/5-maxmsp-blender-200301/img_022.webp" alt="" loading="lazy" />

<img src="/uploads/5-maxmsp-blender-200301/img_023.webp" alt="" loading="lazy" />
