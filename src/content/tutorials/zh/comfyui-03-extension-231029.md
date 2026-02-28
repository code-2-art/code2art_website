---
id: "tutorial-comfyui-03-extension-231029-zh"
concept_id: "comfyui-03-extension-231029"
type: "tutorial"
slug: "comfyui-03-extension-231029"
title: "ComfyUI03 插件安装"
lang: "zh"

domains:
  - "ai-image-generation"
  - "workflow-automation"

series:
  id: "comfyui-notes"
  order: 3

related_terms:
  - "comfyui"

tags:
  - "comfyui"

status: "canonical"
created: "2023-10-29"
updated: "2023-10-29"
version: 1

aliases:
  - "ComfyUI03 插件安装"

summary: "ComfyUI 插件安装。"
difficulty: "beginner"

tools:
  - "comfyui"

coverUrl: "https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-f8a5334ae314ffb379eab35bf5c0a0a8.png"
author: "Contra"
publishedAt: "2023-10-29"
docUrl: "https://avantcontra.github.io/comfyui/comfyui-03-extension-231029"
---
<p>ComfyUI是节点式编程的环境思路，安装后的默认启动示例，是一套生成图像所需的基础节点组合：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-f8a5334ae314ffb379eab35bf5c0a0a8.png" width="2122" height="926" class="img_ev3q"></p><p>上图包含加载模型、设置关键词、设置图像大小、选择采样器、VAE解码、保存图片。</p><p>进一步丰富功能时，需要按需自主添加节点，例如加入LoRA：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-0ed15616f3ac7763b438f41da77a600b.png" width="800" height="518" class="img_ev3q"></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-20-dd327ecbca33b3d5869814989e197d3c.png" width="883" height="589" class="img_ev3q"></p><p>也可以使用节点搜索（双击空白处）：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-2-76e540473b8057a39769505fa7a971c6.png" width="930" height="241" class="img_ev3q"></p><p>这与webui一上来就摆好盘的软件操作思路有所不同：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-02-workflow-231025-2-18425d1137cb8e74ea5524c38ea6e48c.png" width="1236" height="966" class="img_ev3q"></p><p>所以之前有webui使用经验后，相对熟悉常用功能，对使用ComfyUI是非常有帮助的。</p><p>相应的，ComfyUI的内置插件（或叫扩展 extension），目前也可能没有webui开箱时那么丰富。按需安装即可。</p><p>同webui一样，插件安装最常见两种方式：</p><ul><li>单个插件手动安装；</li><li>使用插件管理器。</li></ul><h2 class="anchor anchorWithStickyNavbar_LWe7" id="单个插件手动安装">单个插件手动安装</h2><p>在ComfyUI中插件叫做<strong>custom node</strong>，所有的custom node都装在ComfyUI安装目录下的<strong>custom_nodes</strong>文件夹中：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-5-3c8c6a2c8becf8e1612262db6b79277b.png" width="947" height="386" class="img_ev3q"></p><p>类比webui的<strong>extensions</strong>文件夹：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-4-b5ef24fb88e822e2367f59e398bd354c.png" width="1069" height="542" class="img_ev3q"></p><p>单个插件的安装与webui类似，把插件 <code>git clone</code> 到<strong>custom_nodes</strong>文件夹里即可。</p><p>例如安装<strong>ComfyUI Manager</strong>这个插件：
<a href="https://github.com/ltdrdata/ComfyUI-Manager" target="_blank" rel="noopener noreferrer">https://github.com/ltdrdata/ComfyUI-Manager</a></p><p>分三步：</p><ol><li>命令行窗口中运行：
<code>cd D:\COMFYUI路径XXXX\custom_nodes</code></li><li>继续运行：
<code>git clone https://github.com/ltdrdata/ComfyUI-Manager.git</code></li><li>重启 ComfyUI</li></ol><p>命令行的基本操作，参考第一节课。<br>
<!-- -->示例图：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-6-dc0d2695f7bfbc010ebd76b72df0c949.png" width="1462" height="218" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="使用插件管理器">使用插件管理器</h2><p>刚才安装的ComfyUI Manager，实际上是一个插件及模型管理器，可以用它来浏览其他可选的插件列表并安装。</p><p>装好ComfyUI Manager并重启后，会在右侧主菜单中出现Manager选项：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-7-5e4e2c3ccb2e6efafe08cff63098558a.png" width="355" height="587" class="img_ev3q"></p><p>点击打开：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-8-e2fe565b5cfa38a9a1f2d822ecc93e27.png" width="610" height="944" class="img_ev3q"></p><p>红框中的：</p><ul><li>安装custom node（即插件）</li><li>安装缺失的custom node（稍后讲）</li><li>安装模型</li></ul><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-custom-nodes">Install Custom Nodes</h3><p>点击 Install Custom Nodes后，会去github上的插件列表里加载可用的插件：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-9-d51adf98b0d931c30c7f2a536f98988c.png" width="1182" height="963" class="img_ev3q"></p><p>命令行窗口里会显示细节：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-10-7554d31afdc0b423c7c24887cf6c70bc.png" width="1286" height="349" class="img_ev3q"></p><p><strong>这时候可能会出现经典的连接超时问题：</strong>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-11-aff3261e703ddadf856560be3246008e.png" width="1579" height="861" class="img_ev3q"></p><p>通过设置帆樯来解决。</p><p>正常情况会弹出custom node管理界面：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-12-6eec7794c8600c4e0fd5649697999d03.png" width="2115" height="1106" class="img_ev3q"></p><p>列出了插件作者、名称、简介。<br>
<!-- -->最右侧的Install一栏，可以按照，禁用/启用，卸载。</p><p>红色部分是某些插件安装前的特殊要求，例如有的对python、cuda等版本有特定要求，会在这里进行提示。</p><p>按需安装即可，会比第一小节的单个插件手动安装方便一点。</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-missing-custom-nodes">Install Missing Custom Nodes</h3><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-14-7cee3785a74a0bdf3a281c07708d643f.png" width="571" height="459" class="img_ev3q"></p><p>这是一个很实用的功能。上一节课讲了Workflow的使用方法，这个网站里有海量workflow参考：<br>
<a href="https://comfyworkflows.com/" target="_blank" rel="noopener noreferrer">https://comfyworkflows.com/</a></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-02-workflow-231025-15-8483926d4bf733280b28fc84df4ff6d5.png" width="1501" height="1038" class="img_ev3q"></p><p>当你下载了一个workflow并加载后，如果发现有大量的红色节点：</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-15-6f49e0d64ebc0fc621c69ec27c45ef84.png" width="1916" height="1123" class="img_ev3q"></p><p>此时不要慌，真青年是不会慌的。<br>
<!-- -->这是因为缺失了一些custom node，并且ComfyUI已经把缺的列出来了：<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-16-94d30fd1c6d026acde20a12702337a5b.png" width="740" height="455" class="img_ev3q"></p><p>这时只需打开Manager，点击Install Missing Custom Nodes：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-14-7cee3785a74a0bdf3a281c07708d643f.png" width="571" height="459" class="img_ev3q"></p><p>它会自动把这个workflow需要补充的插件摆好：
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-18-4e6de3893f19e7f8dcf35434dc13b019.png" width="2110" height="1054" class="img_ev3q"></p><p>逐个安装即可。</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-models">Install Models</h3><p>ComfyUI Manager除了管理插件，还能管理模型。
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-19-26e6c1f2b67a5c8b59561c7b5d40c56e.png" width="627" height="477" class="img_ev3q"></p><p>点击后会出现模型列表，包括大模型、ControNet、AnimateDiff等等等等，选择安装即可。</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-13-066acf5d4ae03305e4e810dd724c5dc8.png" width="2108" height="1064" class="img_ev3q"></p><p>进阶：我没有使用这个插件来安装模型，而是手动下载，并且把所有模型都集中放在电脑另一处公共文件夹里，供ComfyUI、webui共享。详见我另一篇教程，让webui和ComfyUI共用一套模型文件：<br>
<a href="https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&amp;mid=2247490394&amp;idx=1&amp;sn=8e43ffd4878dec63c9a6f7f54edec401" target="_blank" rel="noopener noreferrer">一台电脑装多套Stable Diffusion时共享模型文件的方法</a>。</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="更新插件">更新插件</h3><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-21-e87455362e4eb51b515f15e5a825e211.png" width="519" height="679" class="img_ev3q"></p><p>通过管理器来更新ComfyUI、更新插件。<br>
<!-- -->简单不提。</p><hr><p>公众号/B站/小红书/抖音/知乎：实验编程</p><p>实验编程社群资源、公开课：
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>实验编程情报中心（会员）：
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
