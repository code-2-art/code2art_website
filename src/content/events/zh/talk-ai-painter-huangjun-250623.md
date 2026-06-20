---
id: "event-talk-ai-painter-huangjun-250623-zh"
concept_id: "talk-ai-painter-huangjun-250623"
type: "event"
slug: "talk-ai-painter-huangjun-250623"
title: "AI画匠：疯狂的独立游戏开发者黄峻的开源项目与艺术探索"
lang: "zh"
domains:
  - "ai-image-generation"
  - "game-development"
tags:
  - "talk"
  - "indie-game"
  - "stable-diffusion"
  - "unity"
status: "canonical"
created: "2025-06-23"
updated: "2025-06-23"
version: 1
summary: "社群分享会回顾——独立游戏开发者黄峻的 AI 绘图项目《AI画匠》与开源艺术探索。"
tools:
  - "stable-diffusion"
  - "unity"
  - "touchdesigner"
coverUrl: "/uploads/talk-ai-painter-huangjun-250623/img_001.webp"
author: "实验编程"
publishedAt: "2025-06-23"
event_date: "2025-06-23"
format: "online"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247493790&idx=1&sn=f3744e588e192d1623314cb5001d4e77&chksm=e9f6da0fde8153199968a9d51afff816813fdefa9cc2f67f4a57e92a471a6e63acc9e70c0440"
useDocUrl: false
---

开发者背景介绍

黄峻是一位在游戏行业深耕近30年的资深从业者，目前以"六边形战士"的身份进行独立游戏开发工作。作为一名身兼多职的全能开发者，他独自承担游戏开发的全部环节，包括策划、美术、程序、动画、特效以及Steam平台上架等工作。他的目标是在Steam平台发布100款游戏，目前已成功上线15款，更多作品仍在研发中。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_001.webp" alt="" loading="lazy" />

## AI绘图项目开发缘起

黄峻的最新项目是一款AI绘图游戏《AI画匠：画家模拟器》，该项目将Stable Diffusion技术集成到Unity引擎中，实现了实时绘图功能。对于为什么要开发这样一款产品，他从两个层面进行了解释。

### 技术层面的创新

目前市面上虽然存在众多AI绘图工具和平台，但这些工具大多基于网页端，需要在线调用云端绘图服务才能运行。黄峻的项目则是一个完全本地化的单机程序，依靠用户本地电脑的算力进行绘图处理，无需网络连接即可使用。

虽然市场上也存在一些本地化的AI绘图软件，但黄峻发现了一个市场空白。他注意到Stream Diffusion（一种专为实时流式AI推理设计的Stable Diffusion变种）与Touch Designer（一款专业的交互式项目开发工具）的结合应用。Touch Designer主要用于创建各种交互式展览项目，可以连接手势检测、摄像头、声光电设备等，实现丰富的交互效果。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_002.webp" alt="" loading="lazy" />

然而，Touch Designer存在一个重要限制：它主要面向B端用户，每个播放Touch Designer内容的用户都需要单独购买播放器授权，这使得个人用户难以接触到这些先进的AI交互技术。此外，将AI接入Touch Designer目前处于相对垄断的状态，主要依赖国外作者开发的插件，需要向该作者的patreon每月支付订阅费用才可以使用。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_003.webp" alt="" loading="lazy" />

### 开源项目的突破

"实验编程"是一个围绕交互媒体、人工智能,、生成艺术的创作者社群，创立于2016年，其前身是10年代中国最活跃的交互媒体艺术论坛HUDOIT。黄峻是实验编程社群的首席训练专家。该社群的专家王锐编写了一套将Stream Diffusion与Unity连接的开源代码，黄峻也为此项目做出了贡献。这套开源工具使得普通程序员可以轻松将AI功能集成到Unity中，从而打破了原有的技术壁垒。使得ai可以离开TD，转而在unity上面使用。源代码可以在github上搜索Code2Art免费获取

<img src="/uploads/talk-ai-painter-huangjun-250623/img_004.webp" alt="" loading="lazy" />

由于Unity本身提供免费的个人版本，这一开源方案大大降低了技术门槛，使得更多开发者能够创建类似的AI交互应用。黄峻的AI绘图游戏正是应用这一开源工程的首个商业化产品，为其他开发者提供了重要的参考范例。

## 艺术模型的积累与分享

黄峻在AI艺术领域有着深厚的积累。在Civitai（全球知名的AI模型分享平台）上，他以"唐伯虎"的用户名分享了超过1000个AI训练模型，总使用量超过百万次。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_005.webp" alt="" loading="lazy" />

<img src="/uploads/talk-ai-painter-huangjun-250623/img_006.webp" alt="" loading="lazy" />

<img src="/uploads/talk-ai-painter-huangjun-250623/img_007.webp" alt="" loading="lazy" />

### 艺术导向的模型训练

与市面上许多包含成人内容的AI模型不同，黄峻专注于训练纯艺术类型的模型。他的训练对象涵盖了古今中外的著名艺术家，包括莫奈、毕加索、梵高、高更、塞尚、达芬奇、米开朗基罗等等艺术大师，以及建筑、摄影、时尚等各个艺术领域的代表人物。这些模型全部免费提供下载，体现了他对艺术传承的使命感。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_008.webp" alt="" loading="lazy" />

相关的lora还曾在2024年的三亚红树林AI艺术万人展上展出

<img src="/uploads/talk-ai-painter-huangjun-250623/img_009.webp" alt="" loading="lazy" />

### 文化传承的使命

作为一名中国人，黄峻将这项工作视为保护和数字化人类艺术遗产的重要贡献。此项工作由中国人来完成是很值得骄傲的。他投入了大量的时间和成本，每个模型的训练至少需要一个小时，加上数据整理、样图生成、上传等工作，整个过程完全是"为爱发电"。这种行为艺术般的坚持得到了用户的广泛认可，许多用户留言表示通过他的分享了解到了更多艺术家和艺术风格。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_010.webp" alt="" loading="lazy" />

## AI绘图游戏的实现

黄峻的AI绘图游戏将他训练的艺术风格模型集成其中，用户可以实时体验不同艺术家的绘画风格。例如，目前游戏中的猫咪图像采用了路易斯·韦恩（Louis Wain，英国艺术家，以猫咪插画著称）的画风，梵高风格的作品也能在游戏中实时生成。

目前游戏已集成了18种不同的艺术风格，黄峻计划持续更新，最终达到数百种风格。每次更新都需要将模型集成到程序中、生成样图、调整提示词等工作，因此是一个渐进的过程。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_011.webp" alt="" loading="lazy" />

<img src="/uploads/talk-ai-painter-huangjun-250623/img_012.webp" alt="" loading="lazy" />

## 项目定位与展望

黄峻将这个项目定位为实验编程社群开源项目的标杆应用，同时也为他多年来训练的艺术模型提供了一个实用的展示平台。虽然游戏定价相对较高，但他认为这体现了项目的价值，希望用户能够认真对待这一艺术与技术的结合产品。

对于价格敏感的用户，黄峻也通过各种抽奖活动提供免费体验机会，希望更多人能够了解和体验AI艺术的魅力。

这个项目不仅展示了独立开发者在AI时代的创新能力，也体现了技术与艺术结合的无限可能性，为AI绘图应用的发展提供了新的思路和方向。

最后一些小小的预告，目前黄峻正在带队5名硕博生参加清华的游戏设计比赛，内容是fps，四行仓库保卫战，该项目会以最低价格发售，旨在宣传推广中国人打击侵略者的英勇无畏的勇气和决心。

<img src="/uploads/talk-ai-painter-huangjun-250623/img_013.webp" alt="" loading="lazy" />

除此以外黄峻还有一个农场类型卡通项目正在开发中，这里附上概念设计图，欢迎大家多多关注，谢谢大家支持

<img src="/uploads/talk-ai-painter-huangjun-250623/img_014.webp" alt="" loading="lazy" />
