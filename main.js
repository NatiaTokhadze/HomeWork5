// // Task1
const divEl = document.createElement('div')
divAtr = setAttribute('id', "task")
const h2El = document.createElement('h2')
const textEl = document.createTextNode('is working')

divEl.append(h2El, textEl)
const btn = document.getElementById('mybtn')
btn.addEventListener("click", () => {
    divEl.style.display = 'none'
})


// Task2
const mydivEl = document.createElement('div')
const myh2El = document.createElement('h2')
const mytextEl = document.createTextNode('Gandalf')
const aEl = document.createElement('a')
const aHref = document.createAttributeNS("https://www.wikipedia.org/", "Go to profile")

mydivEl = setAttribute('id', 'card')
aEl = setAttribute('href', '#')
myh2El.append(mytextEl)
aEl.append(aHref)
mydivEl.append(myh2El, mytextEl, aEl)
document.body.append(mydivEl)



//Task3

const data = [
    {
        question: ,
        answers:[],
        correct: .
    }


    const questionElement = document.getElementById("question")
    const optionsContainer = document.getElementById("options-container")
    const nextBtn = document.getElementById("next-btn")

    let score = 0
    let question = 0

    function showQuestion()
    {
     let currentdata = quizData[question]
