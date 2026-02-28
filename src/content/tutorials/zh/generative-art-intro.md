---
id: "tutorial-generative-art-intro-zh"
concept_id: "generative-art-intro"
type: "tutorial"
slug: "generative-art-intro"
title: "生成艺术入门：当算法遇见美学"
lang: "zh"

domains:
  - "generative-art"
  - "computational-creativity"

series:
  id: "generative-art-foundations"
  order: 1

related_terms:
  - "generative-art"
  - "creative-coding"
  - "algorithmic-aesthetics"

tags:
  - "generative-art"
  - "creative-coding"
  - "beginner-guide"

status: "canonical"
created: "2026-02-20"
updated: "2026-02-20"
version: 1

aliases:
  - "生成艺术入门：当算法遇见美学"

summary: "从零开始了解生成艺术的核心概念、常用工具与创作思路，适合对编程和艺术交叉领域感兴趣的初学者。"
difficulty: "beginner"

tools:
  - "p5js"
  - "processing"
  - "touchdesigner"
  - "glsl"

coverUrl: "https://float.intplusplus.cn/code2art/assets/fluid.jpg"
author: "实验编程"
publishedAt: "2026-02-20"
docUrl: ""
---

## 什么是生成艺术？

生成艺术（Generative Art）是指艺术家通过设计**规则、算法或系统**，让计算机参与创作过程，最终产出视觉、声音或交互作品。创作者的角色从"直接画出每一笔"转变为"设计产生作品的规则"。

> "The artist creates the process, the process creates the work."
> — Philip Galanter

## 核心要素

1. **随机性与确定性的平衡** — 纯随机产生噪声，纯确定产生机械感。好的生成作品在两者之间找到张力。
2. **迭代与涌现** — 简单规则经过大量重复可以涌现出复杂结构，例如分形、元胞自动机。
3. **参数空间探索** — 调整参数就像在无限的可能性空间中旅行，每组参数对应一件独特的作品。

## 常用工具

| 工具 | 语言 | 特点 |
|------|------|------|
| Processing | Java | 生成艺术经典入门工具 |
| p5.js | JavaScript | Processing 的 Web 版本，社区活跃 |
| TouchDesigner | 可视化节点 | 实时交互与演出首选 |
| Shader (GLSL) | C-like | GPU 并行计算，极致性能 |

## 一个最小示例

用 p5.js 画一片"呼吸的圆"：

```javascript
function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(20);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = sin(frameCount * 0.02 + i) * 20 + 25;
    fill(100, 180, 255, 80);
    ellipse(x, y, r);
  }
}
```

每一帧都不同，却始终保持统一的视觉节奏——这就是生成艺术的魅力。

## 下一步

- 在 [OpenProcessing](https://openprocessing.org) 上浏览社区作品，fork 感兴趣的 sketch
- 阅读 Daniel Shiffman 的 *The Nature of Code*
- 加入实验编程社群，和我们一起探索算法与美学的边界
