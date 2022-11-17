const article = document.querySelector("article");
const container = document.querySelector("#main-navigation")

//elements
let box = document.createElement("div")
let title = document.createElement("h1")
let speedBox = document.createElement("div")
let speedTitle = document.createElement("p")
let speeds = document.createElement("div")
let speed1 = document.createElement("div")
let speed2 = document.createElement("div")
let speed3 = document.createElement("div")
let speed4 = document.createElement("div")
let speed5 = document.createElement("div")
let countDownBox = document.createElement("div")
let countDownTitle = document.createElement("p")
let countDown = document.createElement("input")
let spaceBarTitle = document.createElement("p")
let plusTitle = document.createElement("p")
let minusTitle = document.createElement("p")


//appending
container.appendChild(box)
box.appendChild(title)
box.appendChild(speedBox)
speedBox.appendChild(speedTitle)
speedBox.appendChild(speeds)
speeds.appendChild(speed1)
speeds.appendChild(speed2)
speeds.appendChild(speed3)
speeds.appendChild(speed4)
speeds.appendChild(speed5)
box.appendChild(countDownBox)
countDownBox.appendChild(countDownTitle)
countDownBox.appendChild(countDown)
box.appendChild(spaceBarTitle)
box.appendChild(plusTitle)
box.appendChild(minusTitle)

//styles
let width = 300

//box
box.style.width = width + "px"
box.style.height = "250px"
box.style.backgroundColor = "gray"
box.style.position = "absolute"
box.style.top = "0px"
box.style.left = "calc(100vw - " + width + "px)"
box.style.display = "flex"
box.style.justifyContent = "center"
speedBox.style.alignItems = "center"
box.style.flexDirection = "column"

//title
title.innerHTML = "Auto Scroller"
title.style.fontFamily = "sans-serif"
title.style.color = "white"
title.style.fontSize = "15px"
title.style.textAlign = "center"
title.style.margin = "15px"

//speedBox
speedBox.style.width = width + "px"
speedBox.style.display = "flex"
speedBox.style.display = "flex"
speedBox.style.justifyContent = "center"
speedBox.style.alignItems = "center"
speedBox.style.margin = "5px"

//speedTitle
speedTitle.innerHTML = "Speed"
speedTitle.style.fontFamily = "sans-serif"
speedTitle.style.color = "white"
speedTitle.style.fontSize = "13px"
speedTitle.style.textAlign = "center"
speedTitle.style.margin = "0px"
speedTitle.style.marginRight = "30px"


//speeds
speeds.style.display = "flex"

//speed1,2,3,4,5
speed1.classList.add("speeds")
speed2.classList.add("speeds")
speed3.classList.add("speeds")
speed4.classList.add("speeds")
speed5.classList.add("speeds")
let sps = document.querySelectorAll(".speeds")

sps.forEach(sp => {
  sp.style.width = "30px"
  sp.style.height = "30px"
  sp.style.backgroundColor = "orange"
  sp.style.border = "1px solid white"
  sp.style.textAlign = "center"
  sp.style.fontFamily = "sans-serif"
  sp.style.color = "white"
  sp.style.fontSize = "15px"
});

speed1.innerHTML = "1"
speed2.innerHTML = "2"
speed3.innerHTML = "3"
speed4.innerHTML = "4"
speed5.innerHTML = "5"

//countDownBox
countDownBox.style.width = width + "px"
countDownBox.style.display = "flex"
countDownBox.style.display = "flex"
countDownBox.style.justifyContent = "center"
countDownBox.style.margin = "5px"

//countDownTitle
countDownTitle.innerHTML = "Count Down"
countDownTitle.style.fontFamily = "sans-serif"
countDownTitle.style.color = "white"
countDownTitle.style.fontSize = "13px"
countDownTitle.style.textAlign = "center"
countDownTitle.style.marginRight = "30px"
countDownTitle.style.margin = "0px"
countDownTitle.style.marginRight = "30px"

//countDown
countDown.style.width = "30px"
countDown.style.height = "30px"

//spaceBar, plus, minus; Titles
spaceBarTitle.classList.add("title")
plusTitle.classList.add("title")
minusTitle.classList.add("title")
let titles = document.querySelectorAll(".title")
titles.forEach(title => {
  title.style.width = width + "px"
  title.style.textAlign = "center"
  title.style.fontFamily = "sans-serif"
  title.style.color = "white"
  title.style.fontSize = "15px"
  title.style.padding = "0px"
  title.style.margin = "0px"
});
spaceBarTitle.innerHTML = "Press [space] to start and stop"
plusTitle.innerHTML = "Press [+] to speed up"
minusTitle.innerHTML = "Press [-] to slow down"







// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  console.log("firls");
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}