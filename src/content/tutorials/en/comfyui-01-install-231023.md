---
id: "tutorial-comfyui-01-install-231023-en"
concept_id: "comfyui-01-install-231023"
type: "tutorial"
slug: "comfyui-01-install-231023"
title: "ComfyUI 01: Installation"
lang: "en"

domains:
  - "ai-image-generation"
  - "workflow-automation"

series:
  id: "comfyui-learning-path"
  order: 1

related_terms:
  - "comfyui"
  - "stable-diffusion"
  - "node-workflow"

tags:
  - "comfyui"
  - "stable-diffusion"
  - "workflow"

status: "canonical"
created: "2023-10-23"
updated: "2023-10-23"
version: 1

aliases:
  - "ComfyUI 01: Installation"

summary: "ComfyUI installation guide."
difficulty: "beginner"

tools:
  - "comfyui"
  - "stable-diffusion"

coverUrl: "https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-aebe855eb259249c12117f9c8f3b63c2.png"
author: "Contra"
publishedAt: "2023-10-23"
docUrl: "https://avantcontra.github.io/comfyui/comfyui-01-install-231023"
---
<p>I've recently started working with ComfyUI, and I'm recording my learning notes as I go. Workflow files and other resources are shared within the community.<br>
Feel free to join if you're interested in learning together.<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-aebe855eb259249c12117f9c8f3b63c2.png" width="1859" height="705" class="img_ev3q"></p><p>This lesson covers installation and getting it running.</p><p>With Stable Diffusion webui paving the way, ComfyUI installation is much simpler.</p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="windows-method-1-official-portable-package">Windows Method 1: Official Portable Package</h2><p>ComfyUI provides an official portable package — just download and run.<br>
<a href="https://github.com/comfyanonymous/ComfyUI#installing" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#installing</a>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-1-c7a3966b8429cdb498983c2b76aadf45.png" width="729" height="433" class="img_ev3q"></p><p>The download is a compressed archive (7z format — most common decompression tools should work; if you don't have one, download from 7-zip.org).<br>
Files after extraction:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-2-16817a746122047816c2eb1c4d126647.png" width="755" height="354" class="img_ev3q"></p><p>You can see the largest folder is python_embeded, which includes the built-in Python environment, PyTorch, and various other packages needed to run.</p><p>There are two startup options:<br>
run_cpu.bat is for CPU mode — use this if you don't have an Nvidia GPU.<br>
run_nvidia_gpu.bat is for GPU mode — use this if you have an Nvidia GPU capable of running AI workloads.<br>
Simply double-click to launch.</p><p>Command line window:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-3-809025688421986cb12dd5c54b92618d.png" width="896" height="440" class="img_ev3q"></p><p>Similar to webui, ComfyUI also opens a web page for its interface, with the default address:
127.0.0.1:8188</p><p>Startup screen:<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-9-4d081181e8ad1591207cce5a095b4f9c.png" width="1696" height="967" class="img_ev3q"><br>
This means installation and startup were successful.</p><p>Of course, the portable package doesn't include models. You need to place your models in the ComfyUI folder under models/checkpoints.<br>
checkpoints is where you put the "base models."<br>
There are also folders for clip, controlnet, lora, etc., all organized and ready for you.<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-6-15e9a60d5e42e9eec183e9248c803254.png" width="529" height="511" class="img_ev3q"><br>
You can also refer to my other tutorial on sharing model files between webui and ComfyUI:<br>
<a href="https://mp.weixin.qq.com/s?__biz=MzI1MTM0MDc5OA==&amp;mid=2247490394&amp;idx=1&amp;sn=8e43ffd4878dec63c9a6f7f54edec401" target="_blank" rel="noopener noreferrer">How to Share Model Files When Running Multiple Stable Diffusion Installations on One Computer</a></p><p>After placing the model files, no restart is needed — click <strong>Refresh</strong> on the right side, and you'll see the newly added models appear in <strong>Load Checkpoint</strong> on the left.<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-7-5dc69cafb015dedef97cd6e7c30fa042.png" width="1690" height="1049" class="img_ev3q"></p><p>Default prompts are already filled in the <strong>CLIP Text Encode (Prompt)</strong> nodes in the middle. Click <strong>Queue Prompt</strong> in the upper right to start generating.<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-10-9b848aac32bf10be68217c4dd54cfc1c.png" width="887" height="620" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="windows-method-2-using-webui-environment">Windows Method 2: Using webui's Existing Environment</h2><p>If you've previously installed webui, then the environment needed to run ComfyUI is already in place. You can directly git clone the ComfyUI source code and use webui's environment to launch it.</p><p>First, git clone the ComfyUI source code.<br>
There are plenty of tutorials on using git. If you're not comfortable with command-line git clone, you can also use the official GitHub Desktop client.<br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-11-0215758a527c9c4565dc6a7d127a4937.png" width="1279" height="770" class="img_ev3q"><br>
I don't recommend downloading the ZIP source code directly, as it makes updating versions inconvenient. If you can't manage git, go with Windows Method 1.</p><p>After cloning, open the ComfyUI folder.</p><p>The key trick: use webui's Python environment to launch ComfyUI.</p><h3 class="anchor anchorWithStickyNavbar_LWe7" id="1-if-you-normally-use-conda-to-launch-webui">1. If you normally use conda to launch webui</h3><p>Very simple — just use the same conda environment to run ComfyUI.</p><ol><li>Open a command line window in the ComfyUI folder;</li><li>Switch to webui's conda environment;</li><li>Run <strong>python main.py</strong> to launch ComfyUI.
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-13-8c22f8155d4766c067db2026a4c4b89f.png" width="1614" height="1013" class="img_ev3q"><br>Basic command line and conda operations are covered in the code2art AI art course introductory chapter, and there are plenty of tutorials online as well.</li></ol><h3 class="anchor anchorWithStickyNavbar_LWe7" id="2-if-you-installed-webui-using-its-default-method">2. If you installed webui using its default method</h3><p>Then you need to specify the Python inside webui's venv folder to run.<br>
For example, my original webui file structure:<br>
<code>H:\prjs\sd\webui\automatic1111\installtest3\stable-diffusion-webui\venv\Scripts\python.exe</code></p><p>Steps:</p><ol><li>Open Command Prompt (cmd), navigate to the ComfyUI installation directory;</li><li>Activate the original webui directory's venv environment by running <code>venv\Scripts\activate.bat</code>;
My path is quite long — just replace it with your own.
<code>H:\prjs\sd\webui\automatic1111\installtest3\stable-diffusion-webui\venv\Scripts\activate.bat</code></li></ol><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-14-110ead364114103cdd5e155b13d1578b.png" width="860" height="416" class="img_ev3q"></p><ol start="3"><li>After activating the environment, continue in the same command line window and run <code>python main.py</code> to launch.<br></li></ol><p>The official website also has a tutorial:<br>
<a href="https://github.com/comfyanonymous/ComfyUI#i-already-have-another-ui-for-stable-diffusion-installed-do-i-really-have-to-install-all-of-these-dependencies" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#i-already-have-another-ui-for-stable-diffusion-installed-do-i-really-have-to-install-all-of-these-dependencies</a><br>
<img loading="lazy" src="https://avantcontra.github.io/assets/images/paste-comfyui-01-231023-231023-17-9b8a845c6788044ad8ab363993b2a1b1.png" width="1173" height="486" class="img_ev3q"></p><h2 class="anchor anchorWithStickyNavbar_LWe7" id="other-manual-installation-methods">Other Manual Installation Methods</h2><p>For manual installation, or AMD GPUs (Linux only), refer to the official manual installation steps:<br>
<a href="https://github.com/comfyanonymous/ComfyUI#manual-install-windows-linux" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#manual-install-windows-linux</a><br>
Mac:<br>
<a href="https://github.com/comfyanonymous/ComfyUI#apple-mac-silicon" target="_blank" rel="noopener noreferrer">https://github.com/comfyanonymous/ComfyUI#apple-mac-silicon</a></p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
