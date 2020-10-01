// Preset values
//const frogstable = require(".\assets\frogStable.js")


const FROGS = 3;
const ol = document.querySelector("ol")
const body = document.querySelector("body")




for(let count = 1; count <=FROGS; count ++){
    let li = document.createElement("li")
    li.id = `lane-${count}`;
    li.className = `lane-${count}`;
    let span = document.createElement("span");
    span.innerText = count
    li.appendChild(span)
    ol.appendChild(li)
}


let racers = []
for (i=0; i< FROGS; i++){
    racers.push(frogstable[i])
}
console.log(racers)

// const script = document.createElement("script");
// script.src = "./assets/frogstable.js"
// body.appendChild(script)

//1.3

const liItems = document.querySelectorAll("li");
racers.forEach((frog, index) =>{
    let frogSpan = document.createElement("span");
    frogSpan.id = `frogSpan-${index}`;
    frogSpan.className = ('frog')
    frogSpan.innerText = `${frog.number}`
    let frogName = document.createElement("span")
    frogName.innerText = frog.name;
    frogName.className = ("frog-name")
    frogSpan.style.background = frog.color;
    liItems[index].appendChild(frogSpan);
    liItems[index].appendChild(frogName);
    frog.progress = 0;
    frog.lane = `lane-${[index + 1]}`;
})

//1.4 add styling
const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./assets/styles.css";
const head = document.querySelector("head");
head.appendChild(style)

//1.6
function racingFrog(racer){
    const trackWidth = track.offsetWidth;
    console.log("racingFrog()", racer);
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
        let frog = document.querySelector(`#${racer.lane} .frog`)
        frog.style.left = `${racer.progress}%`;
        console.log(`${racer.name} is at ${racer.progress}`)
        if(racer.progress >= 100){
            racer.progress = 100;
            console.log(`${racer.name} has finished!`)
            clearInterval(hop);
        }
    }, Math.random () * 2000)    
}

racers.forEach(racingFrog);
