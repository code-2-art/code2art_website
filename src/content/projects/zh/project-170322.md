---
id: "project-project-170322-zh"
concept_id: "project-170322"
type: "project"
slug: "project-170322"
title: "前后分离兼攻守，干活带风嗖嗖嗖"
lang: "zh"
tags:
  - "project"
status: "canonical"
created: "2017-03-22"
updated: "2017-03-22"
version: 1
summary: "上一篇写了猪跑上码头（Drupal on Docker），Drupal 诞生于2001年，那个时候攒台电脑还要跑去中关村。虽然 Docker 也算显年轻，但为了证明40岁不是 Coder 的年龄大限，"
coverUrl: "/uploads/project-170322/img_001.webp"
author: "Contra"
publishedAt: "2017-03-22"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483751&idx=1&sn=f296f9c8b2c7e3ad9601b5d5e30b966c&chksm=e9f533f6de82bae05a43a0d5176bd09571a898ca92e249aa4b4b12c420ad64697ed7ee39383c"
useDocUrl: false
---

上一篇写了猪跑上码头（Drupal on Docker），Drupal 诞生于2001年，那个时候攒台电脑还要跑去中关村。虽然 Docker 也算显年轻，但为了证明40岁不是 Coder 的年龄大限，这一篇我决定把 React 也拉进来。（什么，华为从34岁就开始清理了？扶我坐下……）

用 React 做前端，开发 SPA（单页面应用），就不再需要 Drupal 繁琐的模版主题了。

保留 Drupal 的纯后台功能，**通过 RESTful API 来实现前后数据通信**。

即所谓的**前后分离**，**Headless Drupal**，等等。

必要时，**还可以在 React 与 Drupal 间再加上 Node 这一层**，做一些访问数据库之前的逻辑处理，或实现首屏页面服务端渲染以优化SEO等。

这样一来，用 Drupal 快速定制后台功能，还天然捎带了一个多用户权限的后台管理系统。

前端用 React 可随意定制各种样式的页面。

当然后台也可以换成 Java PHP Go Scala Python 第三方云服务等你或你同事或你客户开心的技术来做，反正前后分离了。

正所谓进可攻，退可守，干活带风嗖嗖嗖。

Wordpress 其实早就这么做了，wordpress.com的dashboard (https://github.com/Automattic/wp-calypso)，已经全部由 React + Node 重构，通过 RESTful API 与 Wordpress 后台通信。

我之所以没有选 Wordpress，是因为 Drupal 的 API 定制功能更加灵活，而 Wordpress 更适合内容发布型的应用。

Drupal 8 内置了生成 RESTful API 的方法，直接上官方文档(https://www.drupal.org/docs/8/core/modules/rest/overview)，很详细。

当然，跟后台技术不限一样，前端也可以用 Angular 或 Vue，选型自然是有主客观因素。后端选 Drupal 是为了小型项目省事，其他语言如 Go、Scala 等在不同时期其实也都使用过。而前端选 React 的原因，还与 React Native、React + Electron 等生态有关。

谢谢阅读。

<img src="/uploads/project-170322/img_001.webp" alt="" loading="lazy" />

今天的配图花婶没空，是我自己倾情设计的。

-------

自己配图心不慌。
