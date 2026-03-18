---
id: "tutorial-comfyui-03-extension-231029-en"
concept_id: "comfyui-03-extension-231029"
type: "tutorial"
slug: "comfyui-03-extension-231029"
title: "ComfyUI 03: Extension Installation"
lang: "en"

domains:
  - "ai-image-generation"
  - "workflow-automation"

series:
  id: "comfyui-learning-path"
  order: 3

related_terms:
  - "comfyui"
  - "stable-diffusion"
  - "node-workflow"

tags:
  - "comfyui"
  - "stable-diffusion"
  - "workflow"

status: "canonical"
created: "2023-10-29"
updated: "2023-10-29"
version: 1

aliases:
  - "ComfyUI 03: Extension Installation"

summary: "ComfyUI extension installation guide."
difficulty: "intermediate"

tools:
  - "comfyui"
  - "stable-diffusion"

coverUrl: "https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-f8a5334ae314ffb379eab35bf5c0a0a8.png"
author: "Contra"
publishedAt: "2023-10-29"
docUrl: "https://avantcontra.github.io/comfyui/comfyui-03-extension-231029"
---
<p>ComfyUI follows a node-based programming approach. The default startup example after installation is a basic set of nodes needed for image generation:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-f8a5334ae314ffb379eab35bf5c0a0a8.png" width="2122" height="926" class="img_ev3q"></p><p>The image above includes loading a model, setting prompts, setting image size, choosing a sampler, VAE decode, and saving the image.</p><p>To expand functionality, you need to add nodes as needed. For example, adding a LoRA node:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-0ed15616f3ac7763b438f41da77a600b.png" width="800" height="518" class="img_ev3q"></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-20-dd327ecbca33b3d5869814989e197d3c.png" width="883" height="589" class="img_ev3q"></p><p>You can also use node search (double-click on an empty area):<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-2-76e540473b8057a39769505fa7a971c6.png" width="930" height="241" class="img_ev3q"></p><p>This is different from webui's approach of having everything laid out from the start:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-02-workflow-231025-2-18425d1137cb8e74ea5524c38ea6e48c.png" width="1236" height="966" class="img_ev3q"></p><p>So having prior experience with webui and being familiar with common features is very helpful when using ComfyUI.</p><p>Accordingly, ComfyUI's built-in extensions may not be as rich as webui's out-of-the-box offerings. Just install what you need.</p><p>Like webui, there are two common methods for installing extensions:</p><ul><li>Manual installation of individual plugins;</li><li>Using a plugin manager.</li></ul><h2 class="anchor anchorWithStickyNavbar_LWe7" id="manual-plugin-installation">Manual Plugin Installation</h2><p>In ComfyUI, plugins are called <strong>custom nodes</strong>. All custom nodes are installed in the <strong>custom_nodes</strong> folder under the ComfyUI installation directory:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-5-3c8c6a2c8becf8e1612262db6b79277b.png" width="947" height="386" class="img_ev3q"></p><p>Compare with webui's <strong>extensions</strong> folder:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-4-b5ef24fb88e822e2367f59e398bd354c.png" width="1069" height="542" class="img_ev3q"></p><p>Installing a single plugin is similar to webui — just <code>git clone</code> the plugin into the <strong>custom_nodes</strong> folder.</p><p>For example, installing the <strong>ComfyUI Manager</strong> plugin:
<a href="https://github.com/ltdrdata/ComfyUI-Manager" target="_blank" rel="noopener noreferrer">https://github.com/ltdrdata/ComfyUI-Manager</a></p><p>Three steps:</p><ol><li>In the command line, run:
<code>cd D:\YOUR_COMFYUI_PATH\custom_nodes</code></li><li>Then run:
<code>git clone https://github.com/ltdrdata/ComfyUI-Manager.git</code></li><li>Restart ComfyUI</li></ol><p>Basic command line operations are covered in Lesson 1.<br>
Example:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-6-dc0d2695f7bfbc010ebd76b72df0c949.png" width="1462" height="218" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="using-the-plugin-manager">Using the Plugin Manager</h2><p>The ComfyUI Manager we just installed is actually a plugin and model manager that lets you browse available plugin lists and install them.</p><p>After installing ComfyUI Manager and restarting, a Manager option appears in the right-side main menu:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-7-5e4e2c3ccb2e6efafe08cff63098558a.png" width="355" height="587" class="img_ev3q"></p><p>Click to open:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-8-e2fe565b5cfa38a9a1f2d822ecc93e27.png" width="610" height="944" class="img_ev3q"></p><p>The highlighted options:</p><ul><li>Install Custom Nodes (plugins)</li><li>Install Missing Custom Nodes (explained below)</li><li>Install Models</li></ul><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-custom-nodes">Install Custom Nodes</h3><p>After clicking Install Custom Nodes, it fetches the available plugin list from GitHub:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-9-d51adf98b0d931c30c7f2a536f98988c.png" width="1182" height="963" class="img_ev3q"></p><p>The command line window shows the details:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-10-7554d31afdc0b423c7c24887cf6c70bc.png" width="1286" height="349" class="img_ev3q"></p><p><strong>You might encounter the classic connection timeout issue:</strong>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-11-aff3261e703ddadf856560be3246008e.png" width="1579" height="861" class="img_ev3q"></p><p>This can be resolved by configuring a proxy.</p><p>Under normal circumstances, the custom node management interface pops up:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-12-6eec7794c8600c4e0fd5649697999d03.png" width="2115" height="1106" class="img_ev3q"></p><p>It lists plugin authors, names, and descriptions.<br>
The rightmost Install column lets you install, disable/enable, and uninstall.</p><p>The red sections indicate special requirements before installation — for example, some plugins require specific Python or CUDA versions, and warnings are shown here.</p><p>Install as needed — it's a bit more convenient than manual installation.</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-missing-custom-nodes">Install Missing Custom Nodes</h3><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-14-7cee3785a74a0bdf3a281c07708d643f.png" width="571" height="459" class="img_ev3q"></p><p>This is a very practical feature. The previous lesson covered how to use workflows. This website has tons of workflow references:<br>
<a href="https://comfyworkflows.com/" target="_blank" rel="noopener noreferrer">https://comfyworkflows.com/</a></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-02-workflow-231025-15-8483926d4bf733280b28fc84df4ff6d5.png" width="1501" height="1038" class="img_ev3q"></p><p>When you download and load a workflow and find lots of red nodes:</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-15-6f49e0d64ebc0fc621c69ec27c45ef84.png" width="1916" height="1123" class="img_ev3q"></p><p>Don't panic — stay calm.<br>
This is because some custom nodes are missing, and ComfyUI has already listed what's needed:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-16-94d30fd1c6d026acde20a12702337a5b.png" width="740" height="455" class="img_ev3q"></p><p>Just open Manager and click Install Missing Custom Nodes:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-14-7cee3785a74a0bdf3a281c07708d643f.png" width="571" height="459" class="img_ev3q"></p><p>It automatically lists the plugins needed for this workflow:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-18-4e6de3893f19e7f8dcf35434dc13b019.png" width="2110" height="1054" class="img_ev3q"></p><p>Install them one by one.</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="install-models">Install Models</h3><p>ComfyUI Manager also manages models.
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-19-26e6c1f2b67a5c8b59561c7b5d40c56e.png" width="627" height="477" class="img_ev3q"></p><p>Clicking it shows a model list, including base models, ControlNet, AnimateDiff, and much more — just select and install.</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-13-066acf5d4ae03305e4e810dd724c5dc8.png" width="2108" height="1064" class="img_ev3q"></p><p>Advanced: I don't use this plugin to install models — instead I download them manually and keep all models in a shared folder on my computer, accessible by both ComfyUI and webui. See my other tutorial on sharing model files between webui and ComfyUI:<br>
<a href="https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&amp;mid=2247490394&amp;idx=1&amp;sn=8e43ffd4878dec63c9a6f7f54edec401" target="_blank" rel="noopener noreferrer">How to Share Model Files When Running Multiple Stable Diffusion Installations on One Computer</a>.</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="updating-plugins">Updating Plugins</h3><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-03-extension-231029-21-e87455362e4eb51b515f15e5a825e211.png" width="519" height="679" class="img_ev3q"></p><p>Use the manager to update ComfyUI and plugins.<br>
Simple enough — no further explanation needed.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
