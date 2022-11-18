const article = document.querySelector("article");
const container = document.querySelector("#main-navigation")

let SPEED = 1

//elements
let box = document.createElement("div")
let x = document.createElement("div")
let title = document.createElement("h1")
let speedBox = document.createElement("div")
let speedTitle = document.createElement("p")
let speeds = document.createElement("div")
let speed1 = document.createElement("div")
let speed2 = document.createElement("div")
let speed3 = document.createElement("div")
let speed4 = document.createElement("div")
let speed5 = document.createElement("div")
// let countDownBox = document.createElement("div")
// let countDownTitle = document.createElement("p")
// let countDown = document.createElement("input")
let spaceBarTitle = document.createElement("p")
let plusTitle = document.createElement("p")
let minusTitle = document.createElement("p")


//appending
container.appendChild(box)
box.appendChild(x)
box.appendChild(title)
box.appendChild(speedBox)
speedBox.appendChild(speedTitle)
speedBox.appendChild(speeds)
speeds.appendChild(speed1)
speeds.appendChild(speed2)
speeds.appendChild(speed3)
speeds.appendChild(speed4)
speeds.appendChild(speed5)
// box.appendChild(countDownBox)
// countDownBox.appendChild(countDownTitle)
// countDownBox.appendChild(countDown)
box.appendChild(spaceBarTitle)
box.appendChild(plusTitle)
box.appendChild(minusTitle)

//styles
let width = 350

//box
box.style.width = width + "px"
box.style.height = "280px"
box.style.backgroundColor = "gray"
box.style.position = "absolute"
box.style.top = "0px"
box.style.left = "calc(100vw - " + width + "px)"
box.style.display = "flex"
box.style.justifyContent = "center"
speedBox.style.alignItems = "center"
box.style.flexDirection = "column"

//x
x.style.width = "20px"
x.style.height = "20px"
x.style.backgroundColor = "white"
x.style.position = "absolute"
x.style.top = "0px"
x.style.left = width - 20 + "px"

x.addEventListener('mouseover',function(){
  x.style.backgroundColor="blue";
  x.style.cursor = "pointer"
})
x.addEventListener('mouseleave',function(){
  x.style.backgroundColor="white";
  x.style.cursor = "default"
})
x.onclick = function() {
  box.style.display = "none"
}
let y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
let scrolling = false
document.addEventListener('keydown', function(e) {


  
    if ( e.key == " " ) {
     
      if ( scrolling == true ) {
   
         scrolling = false
      }
      
       else if ( scrolling == false ) {
        y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        box.style.display = "none"
        scrolling = true
      }
        
    
  }
  
})
let count = 0
let scroll = setInterval(() => {
  
  if (scrolling) {
    if ( y < (findPosition(document.getElementById("Lyrics_with_Chords"))[0] - 300)) {
      y = (findPosition(document.getElementById("Lyrics_with_Chords"))[0] - 300)
      setInterval(() => {
        if ( count < 3) {
          console.log(count)
          count += 1
        }
      }, 1000);
    }
    console.log(count)
    if ( y <= (findPosition(document.getElementById("874745"))[0] - 500) && count == 3 ) {
     
      y += SPEED / 20
      window.scrollTo(0, y);
      
    }
   
  }
  

}, 1);



window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});


function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

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
  sp.addEventListener('mouseover',function(){
    if ( sp.style.backgroundColor == "orange") {
      sp.style.backgroundColor="blue";
      sp.style.cursor = "pointer"
    }
  })
  sp.addEventListener('mouseleave',function(){
    if ( sp.style.backgroundColor != "black" ) {
      sp.style.backgroundColor="orange";
      sp.style.cursor = "default"
    }
  })

  sp.onclick = function () {
      let sps = document.querySelectorAll(".speeds")
      sps.forEach(sp => {
        sp.style.backgroundColor = "orange"
      })
      sp.style.backgroundColor = "black"
      SPEED = sp.innerHTML

  }

});

speed1.innerHTML = "1"
speed2.innerHTML = "2"
speed3.innerHTML = "3"
speed4.innerHTML = "4"
speed5.innerHTML = "5"

// //countDownBox
// countDownBox.style.width = width + "px"
// countDownBox.style.display = "flex"
// countDownBox.style.display = "flex"
// countDownBox.style.justifyContent = "center"
// countDownBox.style.margin = "5px"

// //countDownTitle
// countDownTitle.innerHTML = "Count Down"
// countDownTitle.style.fontFamily = "sans-serif"
// countDownTitle.style.color = "white"
// countDownTitle.style.fontSize = "13px"
// countDownTitle.style.textAlign = "center"
// countDownTitle.style.marginRight = "30px"
// countDownTitle.style.margin = "0px"
// countDownTitle.style.marginRight = "30px"

// //countDown
// countDown.style.width = "30px"
// countDown.style.height = "30px"
// countDown.type = "number"

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