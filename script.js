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

//de startknop die alle elementen moet laden
function clickStartBtn() {
    const container = document.getElementById("container")
    show(container);
    show(previousbutton);
    show(nextbutton);
    show(eensBTN);
    show(geenVbeideBTN);
    show(oneensBTN);

    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
}

//scroll door de vragenlijst heen
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

//geef antwoord op de stelling
function antwoord(){
    if(this.id=="eens"){
        color(eensBTN)
        uncolor(geenVbeideBTN)
        uncolor(oneensBTN)
    }
    else if(this.id=="geenVbeide"){
        color(geenVbeideBTN)
        uncolor(eensBTN)
        uncolor(oneensBTN)
    }
    else if(this.id=="oneens"){
        color(oneensBTN)
        uncolor(eensBTN)
        uncolor(geenVbeideBTN)
    }
    volgende();
}

//geef kleur aan de gekozen keuze
function color(element){
    element.style.backgroundColor = "green"
}

function uncolor(element){
    element.style.backgroundColor = "lightgray"
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