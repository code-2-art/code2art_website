---
id: "tutorial-maxmsp-javascript-leetcode-two-sum-220407-zh"
concept_id: "maxmsp-javascript-leetcode-two-sum-220407"
type: "tutorial"
slug: "maxmsp-javascript-leetcode-two-sum-220407"
title: "源 | 分别用MaxMSP和JavaScript刷LeetCode-Two Sum问题"
lang: "zh"
tags:
  - "maxmsp"
  - "javascript"
  - "leetcode"
  - "two"
status: "canonical"
created: "2022-04-07"
updated: "2022-04-07"
version: 1
summary: "本例用MaxMSP来刷LeetCode（https://leetcode.com/）。"
coverUrl: "/uploads/maxmsp-javascript-leetcode-two-sum-220407/img_001.webp"
author: "Contra的后院"
publishedAt: "2022-04-07"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486564&idx=1&sn=eecaaebe0f4d6764869d25c7b176eac8&chksm=e9f53ef5de82b7e375b03880f40d55caa492ea63bbe72465a33c44de380173e294d04886209b"
useDocUrl: false
---

本例用MaxMSP来刷LeetCode（https://leetcode.com/）。

LeetCode是一个软件工程师/程序员刷编程和算法面试题的平台。

首发2020.02.13。

**[LeetCode刷题新姿势-分别用MaxMSP和JavaScript解Two Sum问题[Patch a dirty #005]](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247484049&idx=1&sn=0c3fb21d0fe8e7eea72c71ae4bedffdc&chksm=e9f53000de82b9166019dc1208d453593d5ed6b966b9a154ee6be8ddd4698bd40f8496cf96cd&scene=21#wechat_redirect)**

LeetCode第一题是求解Two Sum（两数之和）：

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。  
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。  
> 示例:  
> 给定 nums = [2, 7, 11, 15], target = 9因为 nums[0] + nums[1] = 2 + 7 = 9所以返回 [0, 1]  
> 来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/two-sum
>
> https://leetcode-cn.com/problems/two-sum

教程存档：

**https://yuque.com/code2art/case/wmmcg0/**

用JavaScript解了一遍，又用MaxMSP实现了一遍，视频全过程附上，推荐在电脑端服用。

**案例源文件：**

**https://ghc.h5.xeknow.com/s/31ROBD**

象征性收费，过滤伸手党。

情报中心会员和年度学员免费，可在情报中心资源库自取。

---

#### 

**关于实验编程**

* [关于实验编程 - 2022.2](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486363&idx=2&sn=26e1aac541f567f8365bc4a22845bab4&chksm=e9f5390ade82b01c8af55bb726971270926e5ef1675940228b70b764d01d7aa38a02b0003074&scene=21#wechat_redirect)
* [教学指引 - 2022.3](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486444&idx=4&sn=9aeba971a993d5d21646c7f41d66ad63&chksm=e9f5397dde82b06b9937d0192fb2b2a3877c3e0e46e39a1ae368d31a3345ec0817c3d2542e61&scene=21#wechat_redirect)
* [AI艺术课训练营开始了！手把手教你做CyberFish，克苏鲁，魔强买瓜](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486501&idx=1&sn=81e38271b95d2dc576521d7f843a1c91&chksm=e9f53eb4de82b7a27eb8b265efe4f89f8e1d0728f7a6a75252f89c1dea032115b32a50df9f38&scene=21#wechat_redirect)
* [AI艺术课训练营特点介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486524&idx=2&sn=98e96841cba12d8630fa275d2d8dd114&chksm=e9f53eadde82b7bbc1e31089ef94c5d6176cab3e36e4f2514b45d61e9d154d6d95794e4eaf55&scene=21#wechat_redirect)
* [AI艺术训练营作业第一波](http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247486560&idx=1&sn=2749a036037208c8efbb8257faccf8ac&chksm=e9f53ef1de82b7e7986abb1ddaa3274fb8963e7e1685a2b61e06c6e925291f8ae3b9d419437a&scene=21#wechat_redirect)

**教学资源汇总：****yuque.com/code2art**

<img src="/uploads/maxmsp-javascript-leetcode-two-sum-220407/img_001.webp" alt="" loading="lazy" />

**教学内容**

* **开放教程** - 公众号文章、视频教程
* **源代码源文件** - 文章教程配套代码
* **大帅课** - 干硬货讲座
* **专题课** - 深入某个主题精讲
* **答疑辅导** - 1对1定制

**教学模式**

* **专题课程** - 专项主题，付费课程
* **年度学员** - 1对1长期辅导
* **情报中心** - 源代码、课件资源、内部群答疑，适合自学型
* **单次付费咨询** - 1对1咨询，1小时视频会议

#### **什么是【答疑辅导】**

面向人群

* 数字媒体艺术、交互媒体、计算编程等领域的学习者。
* 需要不定期获取支持和建议的个人设计师、开发者、独立艺术家。
* **「不面向」企业**，企业咨询请单独联系。

热门主题

* 论文选题建议
* 作品方案与技术选型
* 技术问题拆解，解决方案建议
* 交互媒体、技术美术入门指引
* 个人学习情况评估，编程工具推荐，学习路线规划
* 专业职业发展建议，职场经验答疑
* 商业项目注意事项

**课程咨询及微信群：****floatbug**

<img src="/uploads/maxmsp-javascript-leetcode-two-sum-220407/img_002.webp" alt="" loading="lazy" />

加微信烦请注明：来源（公B抖知）、学校单位、专业行业等，高效交流。

您的**鼓励，在看，点赞，收藏，转发**，是我乱码的动力。

英文版全网ID：@avantcontra

微信公众号/视频号/知乎专栏/抖音/B站：  
**实验编程**
