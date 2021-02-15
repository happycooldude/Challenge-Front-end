subjects.forEach(function(subject){ 
    console.log(subject)
}
)

let currentSubject = 0;

const startButton = document.getElementById("startBtn")
const titleHeader = document.getElementById("title")
const statementPar = document.getElementById("Statement")
const previousbutton = document.getElementById("vorige")
const nextbutton = document.getElementById("volgende")
const numberOfQuestions = subjects.length
const eensBTN = document.getElementById("eens")
const geenVbeideBTN = document.getElementById("geenVbeide")
const oneensBTN = document.getElementById("oneens")

startButton.onclick = clickStartBtn;
previousbutton.onclick = vorige;
nextbutton.onclick = volgende;
eensBTN.onclick = antwoord;
geenVbeideBTN.onclick = antwoord;
oneensBTN.onclick = antwoord;

function clickStartBtn() {
    const container = document.getElementById("container")
    show(container);
    show(previousbutton);
    show(nextbutton);

    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
}

function vorige(){
    currentSubject --
    if(currentSubject >=0){
    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
    }else(currentSubject ++)
    console.log(currentSubject)
}

function volgende(){
    currentSubject ++
    if(currentSubject<=numberOfQuestions -1){
    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
    }else(currentSubject --)
    console.log(currentSubject)
}

function antwoord(){
    if(this.id=="eens"){
        volgende;
        document.getElementById("eens").style.backgroundColor="green"
        document.getElementById("geenVbeide","oneens").style.backgroundColor="lightgray"
        console.log(volgende)
    }
    else if(this.id=="geenVbeide"){
        document.getElementById("geenVbeide").style.backgroundColor="green"
        document.getElementById("eens"&"oneens").style.backgroundColor="lightgray"
        volgende;
    }
    else if(this.id=="oneens"){
        document.getElementById("oneens").style.backgroundColor="green"
        document.getElementById("geenVbeide"&"eens").style.backgroundColor="lightgray"
        volgende;
    }
}

//show element
function show(element) {
    element.classList.remove("hidden")
}

//hide element
function hide(element) {
    element.classList.add("hidden")
}

// DOM Manipulation
// functions, parameters
// eventhandlers
// arrays en objects in javascript
// changing styles in javascript