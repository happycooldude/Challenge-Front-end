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

startButton.onclick = clickStartBtn;
previousbutton.onclick = vorige;
nextbutton.onclick = volgende;

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
    if(currentSubject<=numberOfQuestions){
    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
    }else(currentSubject --)
    console.log(currentSubject)
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