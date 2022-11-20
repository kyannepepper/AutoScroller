const article = document.querySelector("article");
const container = document.querySelector("#main-navigation")

let SPEED = 1

//elements
let littleArrowBox = document.createElement("div")
let littleArrow = document.createElement("img")
let wrapper = document.createElement("div")
let box = document.createElement("div")
let arrowBox = document.createElement("div")
let arrow = document.createElement("img")
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
let startButton = document.createElement("div")


//appending
container.appendChild(wrapper)
container.appendChild(littleArrowBox)
littleArrowBox.appendChild(littleArrow)
wrapper.appendChild(arrowBox)
arrowBox.appendChild(arrow)
wrapper.appendChild(box)
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
box.appendChild(startButton)
//styles
let width = 350



//littleArrowBox
littleArrowBox.style.width = "30px"
littleArrowBox.style.height = "70px"
littleArrowBox.style.backgroundColor = "#ff6116"
littleArrowBox.style.position = "absolute"
littleArrowBox.style.top = "0px"
littleArrowBox.style.left = "calc(100vw - " + 30 + "px)"
littleArrowBox.style.display = "flex"
littleArrowBox.style.justifyContent = "center"
littleArrowBox.style.alignItems = "center"
littleArrowBox.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

littleArrowBox.style.display = "none"
//littleArrow
littleArrow.src = "https://icon-library.com/images/white-arrow-icon-png/white-arrow-icon-png-28.jpg"
littleArrow.style.width = "20px"
littleArrow.style.transform = "rotate(360deg)"


littleArrowBox.addEventListener('mouseover',function(){
  littleArrow.style.transform = "rotate(180deg)"
  littleArrowBox.style.cursor = "pointer"
})
littleArrowBox.addEventListener('mouseleave',function(){
  littleArrow.style.transform = "rotate(360deg)"
  littleArrowBox.style.cursor = "default"
})
littleArrowBox.onclick = function() {
  littleArrowBox.style.display = "none"
  wrapper.style.display = "flex"
}



//wrapper
wrapper.style.width = width + "px"
wrapper.style.height = "280px"
wrapper.style.backgroundColor = "white"
wrapper.style.position = "absolute"
wrapper.style.top = "0px"
wrapper.style.left = "calc(100vw - " + width + "px)"
wrapper.style.display = "flex"
wrapper.style.justifyContent = "center"
wrapper.style.alignItems = "center"
wrapper.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"


//arrowBox
arrowBox.style.width = "50px"
arrowBox.style.height = "280px"
arrowBox.style.backgroundColor = "#ff6116"
arrowBox.style.display = "flex"
arrowBox.style.alignItems = "center"
arrowBox.style.justifyContent = "center"


arrowBox.addEventListener('mouseover',function(){
  arrow.style.transform = "rotate(360deg)"
  arrowBox.style.cursor = "pointer"
})
arrowBox.addEventListener('mouseleave',function(){
  arrow.style.transform = "rotate(180deg)"
  arrowBox.style.cursor = "default"
})
arrowBox.onclick = function() {
  littleArrowBox.style.display = "flex"
  wrapper.style.display = "none"
}


//arrow
arrow.src = "https://icon-library.com/images/white-arrow-icon-png/white-arrow-icon-png-28.jpg"
arrow.style.width = "30px"
arrow.style.transform = "rotate(180deg)"


//box
box.style.width = width - 50 + "px"
box.style.height = "280px"
box.style.backgroundColor = "white"
box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"
box.style.flexDirection = "column"





let y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
let scrolling = false



startButton.onclick = function() {
  if ( scrolling == true ) {
    scrolling = false
} else if ( scrolling == false ) {
  y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  wrapper.style.display = "none"
  scrolling = true
} 
}



document.addEventListener('keydown', function(e) {  
  if ( e.key == " " ) {
    if ( scrolling == true ) {
        scrolling = false
    } else if ( scrolling == false ) {
      y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      wrapper.style.display = "none"
      scrolling = true
    } 
  }
  if ( e.key == "=" ) {
    if ( SPEED < 5 ) {
      SPEED += 1
    } else {
      SPEED = 5
    }
  }
  if ( e.key == "-" ) {
    if ( SPEED > 1 ) {
      SPEED -= 1
    } else {
      SPEED = 1
    }
  }
})
let count = 3
let scroll = setInterval(() => {
  
  if (scrolling) {
    if ( y < (findPosition(document.getElementById("Lyrics_with_Chords"))[0] - 300 )) {
      count = 0
      
      y = (findPosition(document.getElementById("Lyrics_with_Chords"))[0] - 300)
      window.scrollTo(0, y);
      setInterval(() => {
        if ( count < 3) {
          console.log(count)
          count += 1
        }
      }, 500);
    }
    if ( y <= (findPosition(document.getElementById("874745"))[0] - 500) && count == 3 ) {
     
      y += SPEED / 20
      window.scrollTo(0, y);
      
    }
   
  }
  

}, 10);



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
title.style.color = "rgb(72 78 85)"
title.style.fontSize = "25px"
title.style.textAlign = "center"
title.style.margin = "15px"

//speedBox
speedBox.style.width = "180px"
speedBox.style.height = "80px"
speedBox.style.display = "flex"
speedBox.style.display = "flex"
speedBox.style.backgroundColor = "#EFEFEF"
speedBox.style.justifyContent = "center"
speedBox.style.alignItems = "center"
speedBox.style.margin = "5px"
speedBox.style.padding = "10px"
speedBox.style.flexDirection = "column"
speedBox.style.borderRadius = "3px"

//speedTitle
speedTitle.innerHTML = "Speed"
speedTitle.style.fontFamily = "sans-serif"
speedTitle.style.color = "#4F4F4F"
speedTitle.style.fontSize = "18px"
speedTitle.style.margin = "0px"


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
  sp.style.backgroundColor = "#CCCCCC"
  sp.style.border = "1px solid #4F4F4F"
  sp.style.display = "flex"
  sp.style.alignItems = "center"
  sp.style.justifyContent = "center"
  sp.style.fontFamily = "sans-serif"
  sp.style.color = "#4F4F4F"
  sp.style.fontSize = "18px"
  sp.style.boxSizing = "border-box"

  sp.addEventListener('mouseover',function(){
    if ( sp.style.backgroundColor == "rgb(204, 204, 204)") {
      sp.style.backgroundColor="#ff6116"
      sp.style.color = "#EDEDED"
      sp.style.cursor = "pointer"
    }
  })
  sp.addEventListener('mouseleave',function(){
    console.log(sp.style.backgroundColor)
    if ( sp.style.backgroundColor != "rgb(255, 97, 23)" ) {
      sp.style.backgroundColor="#CCCCCC";
      console.log(sp.style.backgroundColor)
      sp.style.color = "#4F4F4F"
      sp.style.cursor = "default"
    }
  })

  sp.onclick = function () {
      let sps = document.querySelectorAll(".speeds")
      sps.forEach(sp => {
        sp.style.color = "#4F4F4F"
        sp.style.backgroundColor = "#CCCCCC"
      })
      sp.style.backgroundColor = "#ff6117"
      sp.style.color = "#EDEDED"
      SPEED = sp.innerHTML
      console.log(sp.style.backgroundColor)

  }

});

speed2.style.borderLeft = "none"
speed2.style.borderRight = "none"
speed4.style.borderLeft = "none"
speed4.style.borderRight = "none"


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
  title.style.height = "25px"
  title.style.textAlign = "center"
  title.style.fontFamily = "sans-serif"
  title.style.color = "#A5A5A5"
  title.style.fontSize = "13px"
  title.style.padding = "0px"
  title.style.margin = "0px"
});
spaceBarTitle.innerHTML = "Press [space] to start and stop"
plusTitle.innerHTML = "Press [+] to speed up"
minusTitle.innerHTML = "Press [-] to slow down"

//startButton
startButton.style.width = "150px"
startButton.style.height = "40px"
startButton.style.display = "flex"
startButton.style.alignItems = "center"
startButton.style.justifyContent = "center"
startButton.style.backgroundColor = "#ff6116"
startButton.style.color = "#FFFFFF"
startButton.style.margin = "10px"
startButton.style.marginBottom = "20px"
startButton.style.borderRadius = "50px"
startButton.innerHTML = "START"

console.log("hi")
startButton.addEventListener('mouseover',function(){
  console.log("hi")
  startButton.style.backgroundColor = "red"
  startButton.style.cursor = "pointer"
})
startButton.addEventListener('mouseleave',function(){
  startButton.style.backgroundColor = "#ff6116"
  startButton.style.cursor = "default"
})


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