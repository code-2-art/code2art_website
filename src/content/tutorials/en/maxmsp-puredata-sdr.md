---
id: "tutorial-maxmsp-puredata-sdr-en"
concept_id: "maxmsp-puredata-sdr"
type: "tutorial"
slug: "maxmsp-puredata-sdr"
title: "Doomsday Skill: How New Media Artists Listen to Radio with MaxMSP When AI Apocalypse Arrives"
lang: "en"

domains:
  - "interactive-media"
  - "audio-computation"

series:
  id: "interactive-media-practice"
  order: 1

related_terms:
  - "software-defined-radio"
  - "maxmsp"
  - "puredata"

tags:
  - "sdr"
  - "maxmsp"
  - "puredata"
  - "radio-art"

status: "canonical"
created: "2017-03-28"
updated: "2017-03-28"
version: 1

aliases:
  - "Doomsday Skill: How New Media Artists Listen to Radio with MaxMSP When AI Apocalypse Arrives"

summary: "Using MaxMSP and PureData for software-defined radio to listen to broadcasts."
difficulty: "intermediate"

tools:
  - "maxmsp"
  - "puredata"
  - "rtl-sdr"

coverUrl: "https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-1-813b9665944b5396849524a843933fd0.jpg"
author: "Contra"
publishedAt: "2017-03-28"
docUrl: "https://avantcontra.github.io/interactive-media/maxmsp-puredata-sdr"
---
<p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-1-813b9665944b5396849524a843933fd0.jpg" width="650" height="431" class="img_ev3q"></p><p><em>Image from softcraze.com</em></p><p>Starting from "Skynet" in Terminator 1, "Artificial Intelligence" has been lurking for over thirty years before finally claiming the headlines. Reportedly, even Hawking predicted that "humanity's future enemy is AI."</p><p>On a not-so-distant day in the future, when you escape the clutches of your smart vacuum robot and jump out the window, you discover the streets are filled with zombies, the air carries a mutation-inducing virus, and self-driving cars block every intersection. WeChat is out of the question — who knows if the other end is human or machine. You desperately want to scroll social media for the latest news, but the internet has been completely taken over by Skynet.</p><p>It's time to learn a doomsday skill — staying in contact with the outside world when the internet goes down.</p><p>You can choose to communicate via electromagnetic waves between 3KHz and 300GHz — in plain English, listening to radio.</p><p>Strictly speaking, this isn't the ordinary broadcast you'd listen to at home or in the car (limited reception range), but "radio" in the broader sense. Receiving faint signals from some corner of the world, guiding the last surviving humans through the apocalypse.</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-2-9f38170d68b62be078fd7abbc2a809ea.jpg" width="650" height="366" class="img_ev3q"></p><p><em>Citizen Z in Z Nation, image from Pinterest</em></p><p>Of course, as a new media artist, carrying a radio transmitter into Starbucks is a bit conspicuous and not very flexible. Could we just use a Mac laptop at the coffee shop to receive radio signals?</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-3-b5ea7b870ba39c8a559a6211d48f04bf.jpg" width="400" height="551" class="img_ev3q"></p><p>The background principle behind receiving radio via computer (not through the internet) is "Software Defined Radio." In simple terms, computer software replaces some traditional radio hardware circuit functions. Search for <strong>"Software Defined Radio"</strong> or <strong>"RTL-SDR"</strong> for more details.</p><p>This article goes straight to the practical example. You'll need:</p><ul><li>MacBook Pro;</li><li>An SDR patch based on Max (Cycling '74) (also available for Pure Data);</li><li>Realtek RTL2832U+R820T TV dongle.</li></ul><p>Wait — we were talking about radio, how did we end up with TV?
RTL2832U+R820T is a Realtek chip originally designed for TV dongles. But this chip has an extremely wide frequency reception range and is cheap, so it's been widely adopted for SDR applications. Even software-defined radio needs some hardware — this dongle contains the necessary RF tuner, ADC, and comes with an antenna.</p><p>The RTL2832U+R820T TV dongle I bought looks like a "USB drive" with an antenna — small and portable.</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-4-0a18c1e02ea48ebc747f3441338aa8a9.jpg" width="640" height="640" class="img_ev3q"></p><p>It even comes with a remote control — after all, it IS a TV dongle...</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-4.2-fe474a51aa1c83fab81b5939621d5ef6.jpg" width="720" height="960" class="img_ev3q"></p><p>Plug in the TV dongle, and next up is preparing the SDR software.</p><p>There are many SDR software options. This article specifically recommends the Max/Pd-based SDR patch for new media artists:</p><p><a href="https://github.com/tkzic/pd-rtlsdr" target="_blank" rel="noopener noreferrer">https://github.com/tkzic/pd-rtlsdr</a></p><p>After downloading and running, the MaxMSP version looks like this:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-5-00c607626da33e77a2926c1928144f39.jpg" width="640" height="352" class="img_ev3q"></p><p>PureData version:
<img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-6-80a33abec411286e26e4273df0747e90.jpg" width="640" height="310" class="img_ev3q"></p><p>MaxMSP version radio listening demo video:</p><p><em>(There's static noise while tuning — lower your volume first)</em></p><div class="videoWrapper"><iframe src="https://player.bilibili.com/player.html?aid=80965034&amp;bvid=BV1EJ411e7nu&amp;cid=138576497&amp;p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div><p><a href="https://www.bilibili.com/video/BV1EJ411e7nu" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1EJ411e7nu</a></p><p>PureData version:</p><p><em>TODO</em></p><p>At this point, you can listen to music radio on your computer — even in the apocalypse, one must have entertainment.</p><p>Beyond music stations, this doomsday golden TV dongle can also receive weather satellite, GSM, aircraft, and other radio signals.</p><br><p>Due to space constraints, here are just some images. Purely for scientific research.</p><p><strong>Weather satellite imagery:</strong></p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-7-9a89a1847b47f183ebd97f8b522cdc50.jpg" width="450" height="380" class="img_ev3q"></p><p><em>Image from mattg.co.uk/words/noaa_sdr/</em></p><p>Below is the weather satellite image I received after scanning overnight — possibly due to not having an outdoor antenna or something being off in the setup, the image looks like this...</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-8-dfae1fce1b0201e9843382f19c4c2fea.jpg" width="640" height="772" class="img_ev3q"></p><p>For satellite imagery reception, the new media artist's Max was a bit underpowered, so I switched to the open-source CubicSDR software, along with WXtoImg for converting satellite audio signals to images.</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-8.2-d706cfd3b329ee54e5802c189e8224cb.jpg" width="1280" height="640" class="img_ev3q"></p><p>Reference: <a href="http://mattg.co.uk/words/noaa_sdr/" target="_blank" rel="noopener noreferrer">http://mattg.co.uk/words/noaa_sdr/</a></p><p><strong>Aircraft tracking:</strong></p><p>Flight trajectory data, once received and visualized, looks like this:</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-9-487e3dd79c0cc80da333bea4fd7a7893.jpg" width="640" height="502" class="img_ev3q"></p><p><em>Image from flightradar24.com</em></p><p>Today's 13-inch 2016 MacBook Pro can be charged with a power bank. Fill up the car with gas, grab the golden TV dongle and laptop, and embark on a doomsday road trip!</p><p><img loading="lazy" src="https://avantcontra.github.io/assets/images/maxmsp-pd-sdr-10-2cdecdd1b91528decfa2f323880043f2.jpg" width="1240" height="800" class="img_ev3q"></p><p><em>Image from wnax.com</em></p><p><strong>Some references:</strong></p><ul><li><a href="http://osmocom.org/projects/sdr/wiki/rtl-sdr" target="_blank" rel="noopener noreferrer">http://osmocom.org/projects/sdr/wiki/rtl-sdr</a></li><li><a href="https://fjkraan.home.xs4all.nl/digaud/puredata/rtlsdr/index.html" target="_blank" rel="noopener noreferrer">https://fjkraan.home.xs4all.nl/digaud/puredata/rtlsdr/index.html</a></li><li><a href="http://mattg.co.uk/words/noaa_sdr/" target="_blank" rel="noopener noreferrer">http://mattg.co.uk/words/noaa_sdr/</a></li><li><a href="http://ju.outofmemory.cn/entry/72852" target="_blank" rel="noopener noreferrer">http://ju.outofmemory.cn/entry/72852</a></li><li><a href="http://sdr-x.github.io/page3/" target="_blank" rel="noopener noreferrer">http://sdr-x.github.io/page3/</a></li></ul><p>Thanks for reading.</p><p>Stay calm, and please comply with radio management regulations.</p><hr><p>Follow us on social media: code2art</p><p>Community resources & courses:
<a href="https://ghc.h5.xeknow.com/s/hzkMX" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/hzkMX</a></p><p>code2art Intelligence Center (membership):
<a href="https://ghc.h5.xeknow.com/s/2BCFuJ" target="_blank" rel="noopener noreferrer">https://ghc.h5.xeknow.com/s/2BCFuJ</a></p><p>Cheers🍻</p><p>Contra</p>
