---
id: "tutorial-ai-macbook-pro-ubuntu-180214-zh"
concept_id: "ai-macbook-pro-ubuntu-180214"
type: "tutorial"
slug: "ai-macbook-pro-ubuntu-180214"
title: "AI笔记之 —— MacBook Pro + 外置显卡 + Ubuntu 安装"
lang: "zh"
tags:
  - "ai"
  - "macbook"
  - "pro"
  - "ubuntu"
status: "canonical"
created: "2018-02-14"
updated: "2018-02-14"
version: 1
summary: "最近在年老体强的 2011 MacBook Pro 上，成功搭建了 Ubuntu 下的 TensorFlow 环境，本文先记录 MacBook Pro + 外置显卡 + Ubuntu 的安装。"
coverUrl: "/uploads/ai-macbook-pro-ubuntu-180214/img_001.webp"
author: "Contra"
publishedAt: "2018-02-14"
docUrl: "http://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&mid=2247483804&idx=1&sn=89b772d5dcb837dd207e310ad3614985&chksm=e9f5330dde82ba1b2fdb6f7a118b8dd5e587bf9d04636a954d1f96d126b43b87431286acf2f3"
useDocUrl: false
---

最近在年老体强的 2011 MacBook Pro 上，成功搭建了 Ubuntu 下的 TensorFlow 环境，本文先记录 MacBook Pro + 外置显卡 + Ubuntu 的安装。

# 安装环境

硬件环境：

* 2011 early MacBook Pro

+ 更换了 SSD 硬盘
+ 更换了 16G DDR3 内存
+ 自带雷电 Thunderbolt 1 接口

* 外置显卡盒子 AKiTiO Node -Thunderbolt 3
* GeForce GTX 1050Ti 4G
* 雷电 1/2 -> 雷电 3 转接头
* U盘

软件环境：  
- Ubuntu 17.10.1 Desktop AMD 64  
- Nvidia Linux X64 驱动 384.111  
- CUDA 驱动 9.0

# 关于外置显卡

外置显卡是扩展 Mac 电脑渲染能力的有力工具。通过外置显卡盒子将 PC 上的常用显卡，经由雷电口，接驳在 Mac 上。  
当然，windows 笔记本也可以，显卡盒子也有多种可选，在 egpu.io 上有详细搭配、安装介绍。  
我使用的是 AKiTiO Node，内装一块 GTX 1050Ti 显卡。家里 2011、2013、2017 老中青三台 MBP，都能发挥作用。  
macOS、windows 下外置显卡驱动的安装，在 egpu.io 上都有详细步骤介绍。Ubuntu 的不太多见。

# Mac上安装Ubuntu

## 下载Ubuntu

直接官网下载 Ubuntu 桌面版。  
刚开始用 Ubuntu 16.04.3 LTS 版本，但后边安装 Nvidia 驱动时，一直报错：  
`Unable to load the 'nvidia-drm' kernel module`  
后改用 Ubuntu 17.10.1 版本解决。

## 准备USB安装盘

### 1. U盘格式化选项

<img src="/uploads/ai-macbook-pro-ubuntu-180214/img_001.webp" alt="" loading="lazy" />

### 2. 把下载好的Ubuntu安装文件转为dmg

`$ hdiutil convert ./ubuntu-17.10.1-desktop-amd64.iso -format UDRW -o ./ubuntu.dmg`

### 3. 查找U盘序号

`$ diskutil list`  
得到类似下图，我的环境里是 disk9。

<img src="/uploads/ai-macbook-pro-ubuntu-180214/img_002.webp" alt="" loading="lazy" />

### 4. Unmount U盘

`$ diskutil unmountDisk /dev/disk9`

### 5. 制作启动盘

`$ sudo dd if=ubuntu.dmg of=/dev/rdisk9 bs=2m`  
**rdisk9** 即对应上一步查到的编号 disk9。  
注意：  
有的教程里是使用 `disk` 而非 `rdisk` ：  
`$ sudo dd if=ubuntu.dmg of=/dev/disk9 bs=2m`  
作用是一样的，但是 `disk` 会比 `rdisk` 慢很多，原因详见这里。

## 安装Ubuntu

### 1. 准备一块Ubuntu分区

格式化为FAT。  
<img src="/uploads/ai-macbook-pro-ubuntu-180214/img_003.webp" alt="" loading="lazy" />

### 2. 用U盘安装

* 做好的 U 盘插入 Mac
* 重启电脑，同时按住 Option 键
* 进入启动选择界面后，选择 EFI Boot
* 在随后的界面中选择 Install Ubuntu
* 选择语言（我选了英文）
* 选择 `Install third-party software for graphics and Wi-Fi hardware, Flash, MP3 and other media.`
* 选择 `Erase disk and install Ubuntu.`
* 随后是时区、键盘、用户名、密码
* 安装后重启，自动进入 Ubuntu
* \*在 Mac 启动时按 Option，可以选择进入 Mac

### 3. 关于Wi-Fi

我安装 Ubuntu 16.04 时，MBP 的 Wi-Fi 完美识别。而安装 Ubuntu 17.10 时，找不到 Wi-Fi 设备。  
如果你有网线，可以先通过网线上网，再安装相应的Wi-Fi驱动，参考这里第5点 “Get Wi-Fi Working”。  
我是用另一台电脑下载了 Wi-Fi 驱动，拷贝到 Ubuntu 里手动安装。详见这里。

# 安装Nvidia显卡

### 安装外置显卡盒子驱动

按照这里的提示一路装下去。

我的 AKiTiO 盒子直接就能看到，不知道是不是跟 Ubuntu 17.10 较新有关。

### 安装Nvidia驱动

**重点是找对驱动的版本**。  
这一点 Nvidia 官网上并没有说的很清楚，甚至有些误导：  
<img src="/uploads/ai-macbook-pro-ubuntu-180214/img_004.webp" alt="" loading="lazy" />

妥妥的写着 390.25 版，支持 1050Ti。  
然而一直安装失败。

后来先在 Ubuntu 命令行里检测一下：  
`$ sudo ubuntu-drivers devices`  
发现所支持的显卡版本是 **nvidia-384** ……

在命令行里直接安装：  
`$ sudo apt-get install nvidia-384`

---

至此，MacBook Pro + 外置显卡 + Ubuntu 安装成功，可以安装 Unigine 跑分测试。

CUDA 驱动的安装，*忘写了*，放在下一篇 TensorFlow 安装里。

谢谢阅读

---------------

不要慌，真显卡是不会慌的。
