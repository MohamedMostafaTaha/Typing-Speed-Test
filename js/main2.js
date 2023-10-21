// Array of words
const words = [
    "Hello",
    "Programming",
    "code",
    "Javascript",
    "town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "paradign",
    "styling",
    "cascade",
    "documentation",
    "coding",
    "funny",
    "working",
    "dependencies",
    "task",
    "runner",
    "roles",
    "tes",
    "rust",
    "Playing"
]

// setting levels 
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
}



// choose the level
let mySelect = document.getElementById("my-select");
let option1 = document.querySelector(".option1")
let option2 = document.querySelector(".option2")
let option3 = document.querySelector(".option3")

let keys = Object.keys(lvls);
option1.value = keys[0];
option1.innerHTML = keys[0];
option2.value = keys[1]
option2.innerHTML = keys[1];
option3.value = keys[2]
option3.innerHTML = keys[2];


let lvlNameSpan = document.querySelector(".message .lvl")
let secondsSpan = document.querySelector(".message .seconds")


let defaultLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName]
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;


mySelect.addEventListener("change", function(){
    // default level
defaultLevelName = mySelect.value // change level from here
 defaultLevelSeconds = lvls[defaultLevelName];


   // catch selectors
let startButton = document.querySelector(".start")

let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// setting level name + seconds + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable paste event 
input.onpaste = function (){
    return false;
}

// start game
startButton.onclick = function(){
    this.remove();
    input.focus();
    // generate word function
    genWords()

}

function genWords(){
    // get random word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // get word index
    let wordIndex = words.indexOf(randomWord)
    // remove word from array
    words.splice(wordIndex,1)
    // show the random word
    theWord.innerHTML = randomWord;
    // empty upcoming words
    upComingWords.innerHTML = "";
    // generate words
    for(let i =0; i<words.length; i++){
        // create div element 
        let div = document.createElement("div")
        let txt = document.createTextNode(words[i])
        div.appendChild(txt)
        upComingWords.appendChild(div)
    }
    //call start play function 
    startPlay()
}

function startPlay(){
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(()=>{
     timeLeftSpan.innerHTML--;
     if(timeLeftSpan.innerHTML === "0"){
        // stop timer
        clearInterval(start);
        // compare words
        if(theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()){
            // empty input field
            input.value = ""
            // increase score
            scoreGot.innerHTML++;
            if(words.length > 0){
                // call generate word function
                genWords();
            }else{
                let span = document.createElement("span")
                span.className = "good";
                let spanTxt = document.createTextNode('congratz')
                span.appendChild(spanTxt)
                finishMessage.appendChild(span)
                // remove upcoming words box
                upComingWords.remove();
            }
        }else{
            let span = document.createElement("span")
            span.className = "bad";
            let spanTxt = document.createTextNode('Game Over')
            span.appendChild(spanTxt)
            finishMessage.appendChild(span)
        }
     }
    },1000)
}
})






