let allTabs = document.querySelectorAll(".tab");
let allSections = document.querySelectorAll(".section");
let darkBtn = document.querySelector(".background-change");
let icon = document.querySelector(".background-change i");
allTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    allTabs.forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");

    allSections.forEach(function (section) {
      section.classList.add("hidden");
    });
    let target = tab.dataset.target;
    let matchingSection = document.querySelector("#" + target);
    matchingSection.classList.remove("hidden");
  });
});

darkBtn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.querySelector('.background-change span').textContent = 'Dark'
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    document.body.classList.add("dark");
    document.querySelector('.background-change span').textContent = 'Light'
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

function updateClock() {
    // Step 2 - get current time
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    // Step 3 - calculate degrees
    let secondDegrees = seconds * 6
    let minuteDegrees = minutes * 6
    let hourDegrees = hours * 30

    // Step 4 - find the hands
    let secondHand = document.querySelector('.second')
    let minuteHand = document.querySelector('.minute')
    let hourHand = document.querySelector('.hour')

    // Step 5 - rotate the hands
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)'
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)'
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)'

   document.querySelector('.digital-time').textContent = String(hours).padStart(2,'0') + ':' + String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0')
}

// Step 6 - start the clock
updateClock()
setInterval(updateClock, 1000)



let clockFace = document.querySelector('.clock-face')

for(let i = 1; i <= 12; i++){
   let newDiv = document.createElement('div')
   newDiv.textContent = i
   newDiv.className = 'clock-number'
   
   // calculate angle for this number
   // multiply by 30 because each number is 30 degrees apart
   let angle = i * 30
   
   // convert degrees to radians
   let radians = angle * (Math.PI / 180)
   
   // calculate x and y position on the circle
   // 85 is the radius - distance from center to number
   let x = Math.sin(radians) * 100
   let y = Math.cos(radians) * 100
   
   // position the number
   // 50% is the center, we add/subtract x and y to move it around the circle
   newDiv.style.left = (50 + (x / 2.5)) + '%'
   newDiv.style.top = (50 - (y / 2.5)) + '%' 
   clockFace.appendChild(newDiv)
}