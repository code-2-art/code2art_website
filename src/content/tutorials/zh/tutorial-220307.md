---
id: "tutorial-tutorial-220307-zh"
concept_id: "tutorial-220307"
type: "tutorial"
slug: "tutorial-220307"
title: "源码 | 傅里叶级数画画更新"
lang: "zh"
tags:
  - "tutorial"
status: "canonical"
created: "2022-03-07"
updated: "2022-03-07"
version: 1
summary: "本例是喜闻乐见的用傅里叶级数画画，用Blender + Python实现。"
coverUrl: "/uploads/tutorial-220307/img_001.webp"
author: "Contra的后院"
publishedAt: "2022-03-07"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486453&idx=1&sn=48e8399f6c7651acb84107281a340d02&chksm=e9f53964de82b072074cc97441604198ed2485982449abb6763070d4ac44e152ea2e2f268809"
useDocUrl: false
---

<img src="/uploads/tutorial-220307/img_001.webp" alt="" loading="lazy" />

本例是喜闻乐见的**用傅里叶级数画画，用Blender + Python实现。**

首发2019.12.11，Blender2.8。

2022.3.7更新，适配Blender2.9和3.0。

教程开放：

**https://www.yuque.com/code2art/case/tulo8r**

**案例源代码：**

**https://ghc.h5.xeknow.com/s/2o2HP2**

购买后获取，象征性收费，过滤伸手党。

情报中心会员和年度学员免费，可在情报中心资源库自取。

---

#### **2022.3.7更新**

因为Blender 2.9后，Grease Pencil的Python API变了，导致报错：

gp\_stroke.draw\_cyclic = False这一行的"draw\_cyclic"没有定义。

**将两处"draw\_cyclic"替换为"use\_cyclic"即可。**

---

#### **2019.12.11第一版教程原文**

前言：  
最近在【编程德鲁伊】的【傅里叶级数可视化】章节中，练习了傅里叶级数基础原理的可视化，演示了周期方波曲线分解为一系列正弦波曲线：

<img src="/uploads/tutorial-220307/img_002.webp" alt="" loading="lazy" />

上边是[Python (Blender) 版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6&scene=21#wechat_redirect)，另有[JavaScript (React) 版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483901&idx=1&sn=3efb372dfee56bd7772bf3bbc6a68bba&chksm=e9f5336cde82ba7aa37adb1f15f01d80692b26f305d15e19a2042c6f70400ca08f7cac440247&scene=21#wechat_redirect)、 [Unity 版](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483919&idx=1&sn=d850d6039bc890e821d4041acc922a9f&chksm=e9f5309ede82b9886d62382c3d0a3c7a3a72258cf26c0bbea683129af2521093817a42aa4bbd&scene=21#wechat_redirect)（点击查看）。

这次拿学到的知识做个实验，试试喜闻乐见的**用傅里叶级数画画**，并尽可能简单直观的解释一下原理。

---

#### **自认为简单直观的原理解释**

之前练习的可视化，都是在二维空间进行，例如正弦波：

<img src="/uploads/tutorial-220307/img_003.webp" alt="" loading="lazy" />

方波（通过傅里叶级数）：

<img src="/uploads/tutorial-220307/img_002.webp" alt="" loading="lazy" />

图中左半边的圆周（Epicycle）和右半边正弦波/方波的关系：

* 左半边是一个运动点，在一个圆周或多个圆周组合上**随着时间t转动**；
* 右半边，是**将时间 t 映射到横轴 x 轴上**，纵轴仍是运动点当前的 y 值保持不变。

也就是说，**把时间域转换为空间域，就能从一个圆周得到正弦曲线，或者从一系列圆周组合，得到方波曲线**。

我们把方波可视化左右两边的运动点轨迹也画出来：

<img src="/uploads/tutorial-220307/img_004.webp" alt="" loading="lazy" />

<img src="/uploads/tutorial-220307/img_005.webp" alt="" loading="lazy" />

左半边由一系列圆周（Epicycle）组成的轨迹，与右半边的方波（Square）轨迹，其实只是**同一个运动点在不同空间里的展现方式**而已。

豁然开朗有没有！！！（此处插入打赏掌声！）

为了说的更清楚一些，接下来**把空间域从二维换到三维**，时间 t 不再映射到 x 轴，而是**映射到 z 轴**上：

<img src="/uploads/tutorial-220307/img_006.webp" alt="" loading="lazy" />

上图从正面看过去，仍是一个圆周，而在三维空间里旋转坐标轴，从侧面看过去时，它实际上就是一个正弦曲线。

方波的也一样：

<img src="/uploads/tutorial-220307/img_007.webp" alt="" loading="lazy" />  
正面的橙色轨迹，转换角度，从侧面看，就是方波的曲线。

再次豁然开朗有没有！！！

进一步，根据傅里叶级数原理，为了得到方波（橙色），就要想办法得到组成方波的一系列正弦波（金黄色）：

<img src="/uploads/tutorial-220307/img_008.webp" alt="" loading="lazy" />

换一个视角，为了得到最终的运动轨迹（橙色），就要想办法得到组成轨迹的一系列Epicycle圆周（金黄色）：

<img src="/uploads/tutorial-220307/img_009.webp" alt="" loading="lazy" />

而这个橙色的运动轨迹，可以是各种形状，也就是说，无论想画什么图形，**只要按照傅里叶级数的原理，找到一系列Epicycle圆周**，就可以画出来了！

金猪报喜：

<img src="/uploads/tutorial-220307/img_010.webp" alt="" loading="lazy" />

傅里叶本尊：

<img src="/uploads/tutorial-220307/img_011.webp" alt="" loading="lazy" />

怎么样，这样去理解傅里叶级数画画的原理，是不是容易了一些？

接下来要解决的，就是**如何为“任意”图案找到对应的一组Epicycle圆周**的问题。

从数学上讲，就是**求傅里叶级数里每个子项对应的傅里叶系数**（a和b）：

<img src="/uploads/tutorial-220307/img_012.webp" alt="" loading="lazy" />

各项系数a和b都找到后，合起来就可以得到f(x)。

求傅里叶系数的方法有很多，积分、傅里叶变换等。  
详细的原理推导，我还没有复习重修，所以对于如何把大象装冰箱的回答，仍然是：

1.打开冰箱门；2.把大象装进去；3.关门。  
**直接对图案轨迹进行傅里叶变换，即可得到傅里叶系数**。

而在计算机程序里，所有的数据都是离散的，所以实际上程序里用的是**离散傅里叶变换**。

关于这个环节，参考资源较多，尤其是用Web前端/JavaScript/p5.js做的不少，列在后面。

本文的配图和动画，是用 Blender + Python 完成：

<img src="/uploads/tutorial-220307/img_013.webp" alt="" loading="lazy" />

等一等老乡，Miku来了！

从上图里傅里叶的配色就能看出，我其实原本是打算画 Miku 酱的（初音未来）：

<img src="/uploads/tutorial-220307/img_014.webp" alt="" loading="lazy" />

然而码到用时方恨不会，关于傅里叶画画这个问题，其实更难的是找到合适的图案轨迹，并不是随便一个图都能轻松画出来的，这也是为什么上文中，我给任意图案的“任意”两字加了引号。

从数学上讲，在一些特定条件的约束下，一个函数才能用傅里叶级数来表达。  
而找出这个图案轨迹的过程，复杂度远超用傅里叶级数画轨迹本身。  
后面将附上其他高人的文章供参考。

本文投入的精力仅能画简单的轨迹线，所以Miku就换成了傅里叶他老人家🙂：

<img src="/uploads/tutorial-220307/img_015.webp" alt="" loading="lazy" />

**最终效果（三个视角）**:

<img src="/uploads/tutorial-220307/img_016.webp" alt="" loading="lazy" />

**参考资源**

* [用Blender来学习Python创意编程，实现傅里叶级数可视化](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483944&idx=1&sn=8b2bb7a184afcfad82c2edb810cc9529&chksm=e9f530b9de82b9af0fc640300d1c3361ed368a694f27ba763ee93095ab072b1d77e8feac25b6&scene=21#wechat_redirect)  
  如何用Blender来跑Python的入门学习笔记。
* An Interactive Introduction to Fourier Transforms  
  非常棒的傅里叶级数画画的前端JavaScript实现。
* Drawing with Fourier Transform and Epicycles  
  Shiffman的讲解和p5.js实现。
* But what is a Fourier series? From heat flow to circle drawings | DE4  
  3Blue1Brown神仙的讲解，官方B站号。
* Epicycles, complex Fourier series and Homer Simpson's orbit  
  光头大爷的讲解，不次于3B！
* 手把手教你用傅立叶变换画可达鸭  
  更多的是在讲如何获取图案最优轮廓线。

---

**关于实验编程**

* [关于实验编程 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=2&sn=26e1aac541f567f8365bc4a22845bab4&chksm=e9f5390ade82b01c8af55bb726971270926e5ef1675940228b70b764d01d7aa38a02b0003074&scene=21#wechat_redirect)
* [**教学指引 - 2022.3**](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486440&idx=4&sn=46e0096d823c722ffca3606d68b3a3d1&chksm=e9f53979de82b06f20fd9a671e609e793de9ba50ddf2bd756eff226f19b3a872455970bf643b&scene=21#wechat_redirect)
* [《AI艺术推行计划》](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=2&sn=95ff18bb5e454015d95e5fee1bfe4bac&chksm=e9f5397dde82b06b497c172530d784567cadd1ce43400ac89bb2752ed69f176ed6b7b5b05b69&scene=21#wechat_redirect)
* [《AI艺术从入门到放肆》课程介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=3&sn=7089e20d6a497aaebf935a6251e0f1b2&chksm=e9f5397dde82b06bf36d234f408df19fc73987af568bbb3ed5ff234a526bbdd7cf1d09a471d8&scene=21#wechat_redirect)

**教学资源汇总：****yuque.com/code2art**

<img src="/uploads/tutorial-220307/img_017.webp" alt="" loading="lazy" />

**课程咨询及微信群：****floatbug**

<img src="/uploads/tutorial-220307/img_018.webp" alt="" loading="lazy" />

加微信烦请注明：来源（公B抖知）、学校单位、专业行业等，高效交流。

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

微信公众号/视频号/知乎专栏/抖音/B站：  
**实验编程**
