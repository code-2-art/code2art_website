---
id: "tutorial-comfyui-01-install-231023-zh"
concept_id: "comfyui-01-install-231023"
type: "tutorial"
slug: "comfyui-01-install-231023"
title: "ComfyUI01 ComfyUI安装"
lang: "zh"

domains:
  - "ai-image-generation"
  - "workflow-automation"

series:
  id: "comfyui-notes"
  order: 1

related_terms:
  - "comfyui"

tags:
  - "comfyui"

status: "canonical"
created: "2023-10-23"
updated: "2023-10-23"
version: 1

aliases:
  - "ComfyUI01 ComfyUI安装"

summary: "ComfyUI安装。"
difficulty: "beginner"

tools:
  - "comfyui"

coverUrl: "https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-aebe855eb259249c12117f9c8f3b63c2.png"
author: "Contra"
publishedAt: "2023-10-23"
docUrl: "https://avantcontra.github.io/comfyui/comfyui-01-install-231023"
---
<p>最近开始着手ComfyUI，同步记录学习笔记，涉及到的workflow等源文件社群内分享。<br>
<!-- -->欢迎有兴趣一起学习。<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-aebe855eb259249c12117f9c8f3b63c2.png" width="1859" height="705" class="img_ev3q"></p><p>本节是安装、启动运行。</p><p>有了Stable Diffusion webui<del>屎山</del>珠玉在前，ComfyUI的安装就简单多了。</p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="windows方式1官方整合包">Windows方式1官方整合包</h2><p>ComfyUI官方提供了整合包，直接下载运行即可。<br>
<a href="https://github.com/comfyanonymous/ComfyUI#installing" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#installing</a>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-1-c7a3966b8429cdb498983c2b76aadf45.png" width="729" height="433" class="img_ev3q"></p><p>下载的是一个压缩包（7z格式，常见解压软件应该均可，没有的话在7-zip.org下载）。<br>
<!-- -->解压后的文件：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-2-16817a746122047816c2eb1c4d126647.png" width="755" height="354" class="img_ev3q"></p><p>可以看到最大的文件夹是python_embeded，内置了运行所需的python环境、pytorch等各种包。  </p><p>启动运行有两个选择：<br>
<!-- -->run_cpu.bat是cpu模式，如果没有Nvidia显卡可以选用。<br>
<!-- -->run_nvidia_gpu.bat是gpu模式，有能跑AI的Nivdia显卡用此模式。<br>
<!-- -->双击运行即可启动。</p><p>命令行窗口：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-3-809025688421986cb12dd5c54b92618d.png" width="896" height="440" class="img_ev3q"></p><p>类似webui，ComfyUI也是自动打开一个网页窗口使用，默认地址是：
127.0.0.1:8188</p><p>启动画面：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-9-4d081181e8ad1591207cce5a095b4f9c.png" width="1696" height="967" class="img_ev3q"><br>
<!-- -->此时代表安装和启动成功。</p><p>当然，整合包里没有带模型，需要把模型装在ComfyUI文件夹下的models/checkpoints文件夹里。<br>
<!-- -->checkpoints里放的就是“大模型”。<br>
<!-- -->另外还有clip、controlnet、lora等文件也都摆好了，按需存放。<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-6-15e9a60d5e42e9eec183e9248c803254.png" width="529" height="511" class="img_ev3q"><br>
<!-- -->后续也可以参考我另一篇教程，让webui和ComfyUI共用一套模型文件：<br>
<a href="https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&amp;mid=2247490394&amp;idx=1&amp;sn=8e43ffd4878dec63c9a6f7f54edec401" target="_blank" rel="noopener noreferrer">一台电脑装多套Stable Diffusion时共享模型文件的方法</a></p><p>装好模型文件后，无需重启，点击右侧的 <strong>Refresh</strong> ，就可在左侧的 <strong>Load Checkpoint</strong> 中刷到新放进去的模型文件。<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-7-5dc69cafb015dedef97cd6e7c30fa042.png" width="1690" height="1049" class="img_ev3q"></p><p>它在中间的 <strong>CLIP Text Encode (Prompt)</strong> 节点里已经填好了默认的关键词，运行右上角的 <strong>Queue Prompt</strong> 即可开始生成。<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-10-9b848aac32bf10be68217c4dd54cfc1c.png" width="887" height="620" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="windows方式2-借助webui运行环境">Windows方式2 借助webui运行环境</h2><p>如果之前装了webui，那ComfyUI运行所需的环境条件其实都具备了，此时可以直接通过git克隆ComfyUI的源代码，借助webui的环境来启动。</p><p>先git clone ComfyUI的源代码工程。<br>
<!-- -->git的使用方法教程很多，实验编程课程也讲过。<br>
<!-- -->如果命令行git clone不擅长，也可以安装GitHub官方客户端来使用。<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-11-0215758a527c9c4565dc6a7d127a4937.png" width="1279" height="770" class="img_ev3q"><br>
<!-- -->不建议直接Download ZIP源代码包，这样不便于后续更新版本。搞不定的话可以选择Windows方式1。</p><p>克隆到本地后，打开ComfyUI文件夹。</p><p>接下来的关键Trick：使用webui的python环境来启动ComfyUI。</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="1-如果平时用conda启动webui">1. 如果平时用conda启动webui</h3><p>非常简单，直接用同一套conda环境来运行ComfyUI即可。</p><ol><li>用命令行窗口打开ComfyUI文件夹；</li><li>切换到webui的conda环境；</li><li>运行 <strong>python main.py</strong> 即可启动ComfyUI。
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-13-8c22f8155d4766c067db2026a4c4b89f.png" width="1614" height="1013" class="img_ev3q"><br>命令行与conda基本操作见实验编程AI艺术课程入门篇，网上教程也繁多。</li></ol><h3 class="anchor anchorWithStickyNavbar_LWe7" id="2-如果之前安装webui时是用其默认的方式">2. 如果之前安装webui时是用其默认的方式</h3><p>那就需要指定webui安装文件夹下的venv里的python来运行。<br>
<!-- -->例如我的原版webui的文件结构：<br>
<code>H:\prjs\sd\webui\automatic1111\installtest3\stable-diffusion-webui\venv\Scripts\python.exe</code></p><p>具体操作：</p><ol><li>打开命令提示符(cmd)，切换到ComfyUI安装目录；</li><li>激活原版webui目录下的venv环境，即运行<code>venv\Script\activate.bat</code>；
我的目录较长，替换你自己的即可。
<code>H:\prjs\sd\webui\automatic1111\installtest3\stable-diffusion-webui\venv\Scripts\activate.bat</code></li></ol><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-14-110ead364114103cdd5e155b13d1578b.png" width="860" height="416" class="img_ev3q"></p><ol start="3"><li>激活环境后，继续在同一个命令行窗口里运行 <code>python main.py</code>即可启动。<br></li></ol><p>官网也有教程：<br>
<a href="https://github.com/comfyanonymous/ComfyUI#i-already-have-another-ui-for-stable-diffusion-installed-do-i-really-have-to-install-all-of-these-dependencies" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#i-already-have-another-ui-for-stable-diffusion-installed-do-i-really-have-to-install-all-of-these-dependencies</a><br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-17-9b8a845c6788044ad8ab363993b2a1b1.png" width="1173" height="486" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="其他手动安装方式">其他手动安装方式</h2><p>如果需手动安装，或是AMD显卡（仅Linux），参考官网手动安装的步骤：<br>
<a href="https://github.com/comfyanonymous/ComfyUI#manual-install-windows-linux" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#manual-install-windows-linux</a><br>
<!-- -->Mac：<br>
<a href="https://github.com/comfyanonymous/ComfyUI#apple-mac-silicon" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#apple-mac-silicon</a>  </p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
