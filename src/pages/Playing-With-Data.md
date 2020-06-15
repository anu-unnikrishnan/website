---
title: "Playing With Data"
date: "2020-05-19"
---

<i>Turning data files into web apps and maps.</i>

<p>
To practise some data cleaning, processing and visualisation, I made three fun websites about hiking, UFOs and bookshops! My main tools were Python to deal with the data files, Javascript for the web pages, and Heroku for hosting.
</p>

<p>
<a style="color: #fe6d73;" href="https://national-park-genie.herokuapp.com">National Park Genie</a> is a website that recommends hikes in US national parks. You can pick a state, a national park, the difficulty or route type of the trails you want, the activities you want to do, or the sights you want to see. The genie looks for all the hikes that satisfy your criteria, and spits out a random one to inspire you! 
</p>

![National park genie](./national-park.png)

<p>
<a style="color: #fe6d73;" href="http://ufo-visualiser.herokuapp.com">UFO visualiser</a> is a hexbin map of UFO sightings in the USA over the past 104 years. This was built using the D3 library in Javascript. We feed in our geo data points and our code bins them into hexagons. Hovering over any hexagon tells you how many sightings belong to the area it covers.
</p>

![UFO visualiser](./ufo-visualiser.png)

<p>
<a style="color: #fe6d73;" href="https://london-bookshops.herokuapp.com">London bookshop map</a> shows independent bookshops in London, inspired by movies like You've Got Mail which champion cute, cosy and non-chain booksellers. This map was created and customised using Mapbox. 
</p>

![London bookshops](./bookshop-map.png)

<p>
For all of the code, see my <a style="color: #fe6d73;" href="https://github.com/anu-unnikrishnan">Github</a>!
</p>
