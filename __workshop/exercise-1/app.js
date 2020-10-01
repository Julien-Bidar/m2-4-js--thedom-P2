// Preset values
//const frogstable = require(".\assets\frogStable.js")


const FROGS = 3;
const ol = document.querySelector("ol")
const body = document.querySelector("body")
const main = document.querySelector("main")



for(let count = 1; count <=FROGS; count ++){
    let li = document.createElement("li")
    li.id = `lane-${count}`;
    li.className = `lane-${count}`;
    let span = document.createElement("span");
    span.innerText = count
    li.appendChild(span)
    ol.appendChild(li)
}

//generating random integer for frogpicker in order to get any frog from the frogstable
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let frogPicker = []

while (frogPicker.length < FROGS){
    let randomInt = getRandomInt(frogstable.length);
    if(frogPicker.indexOf(randomInt) == -1){
        frogPicker.push(randomInt);
    }
}

let racers = []
for (i=0; i< FROGS; i++){
    racers.push(frogstable[frogPicker[i]])
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
// adding imgs to frogs
    let frogImg = document.createElement("img");
    frogImg.src = "./assets/frogx50.png";
    frogImg.alt = "frog Image";
    frogSpan.appendChild(frogImg);
//styling imgs
    frogImg.style.transform = "rotate(90deg)";
    frogImg.style.width = "60%";    

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

const ranking = []


function racingFrog(racer){
    const trackWidth = track.offsetWidth;
    console.log("racingFrog()", racer);
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
        let frog = document.querySelector(`#${racer.lane} .frog`) //styling so the frogs jump in the
        frog.style.left = `${racer.progress}%`;
        console.log(`${racer.name} is at ${racer.progress}`)
        if(racer.progress >= 100){
            //let ranking = []
            racer.progress = 100;
            ranking.push(racer.name);
            if(ranking.length === 3){
                console.log(`${ranking[0]} finished 1st! ${ranking[1]} is 2nd. And ${ranking[2]} is 3rd.`);
            }
            
            //announcing winner in browser
            const announceWinner = document.createElement("h2");
            announceWinner.style.textAlign = "center";
            announceWinner.style.color = "green";
            announceWinner.style.textTransform = "uppercase"
            if(ranking.length === 1){
                announceWinner.innerText = `${racer.name} is 1st!`
            }
            if(ranking.length === 2){
                announceWinner.innerText = `${racer.name} is 2nd!`
            }
            if(ranking.length === 3){
                announceWinner.innerText = `${racer.name} is 3rd!`
            }
            main.appendChild(announceWinner);

            clearInterval(hop);
        }
    
    }, Math.random () * 500)    
}

racers.forEach(racingFrog);

const winnerIs = document.createElement('h1');
winnerIs.style.textAlign = "center";
winnerIs.style.color = "green";
winnerIs.innerText = "AND THE WINNER IS..."
main.appendChild(winnerIs);

