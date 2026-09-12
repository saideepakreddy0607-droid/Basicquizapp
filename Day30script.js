let quiz = [
    {
        question: "Who owns L-Drago?",
        options: ["Ryuga", "Ginka", "Kyoya", "Tsubasa"],
        answer: "Ryuga",
        check : true
    },
    {
        question: "Who owns Leone?",
        options: ["Ryuga", "Ginka", "Kyoya", "Tsubasa"],
        answer: "Kyoya",
        check : true
    },
    {
        question: "Who owns Earth Eagle?",
        options: ["Ryuga", "Ginka", "Kyoya", "Tsubasa"],
        answer: "Tsubasa",
        check : true
    },
    {
        question: "Who is strongest among them?",
        options: ["Ryuga", "Kai"],
        answer: "Ryuga",
        check : true
    },
    {   
        question: "Who owns Pegasus?",
        options: ["Ryuga", "Ginka", "Kyoya", "Tsubasa"],
        answer: "Ginka",
        check : true
    }
];
let questionBox = document.getElementById("question");
let optionBox = document.getElementById("option");
let currentQues = 0;
let result = document.getElementById("result");
let para = document.createElement("p");
let score = 0;
let checkScore = document.createElement("button");
checkScore.textContent = "Check Score";
// this div covers whole matter inside it 
let wholeDiv = document.createElement("div");
wholeDiv.classList.add("wholeDiv");
wholeDiv.appendChild(questionBox);
wholeDiv.appendChild(optionBox);
wholeDiv.appendChild(result);
function showQuestion() {
    result.classList.remove("green");
    result.classList.remove("red");
    questionBox.textContent = quiz[currentQues].question;
    optionBox.innerHTML = "";
    quiz[currentQues].options.forEach((option) => {
        let optionDiv = document.createElement("div");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = option;
        let label = document.createElement("label");
        label.textContent = option;
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionDiv.classList.add("options");
        optionBox.appendChild(optionDiv);
    });
    if (currentQues == quiz.length - 1) {
        buttons.appendChild(checkScore);
    }
    else {
        if (checkScore.parentNode) {
            checkScore.remove();
        }
        result.textContent = "";
    }
}
showQuestion();
let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.addEventListener("click", () => {
    if (currentQues > 0) {
        currentQues--;
    }
    showQuestion();
    para.remove();
});
next.addEventListener("click", () => {
    if (currentQues < quiz.length - 1) {
        currentQues++;
    }
    showQuestion();
    para.remove();
});
function checkAnswer() {
    let answer = false;
    let input = optionBox.getElementsByTagName("input");
    let selected = false;

    for(let i = 0; i < input.length; i++){
        if(input[i].checked){
            selected = true;
            break;
        }
    }
    if(!selected){
        para.textContent = "Please select an option";
        result.classList.remove("red");
        result.classList.remove("green");
    }
    for(let i = 0; i < input.length; i++){
        if (input[i].checked && input[i].value === quiz[currentQues].answer) {
            para.textContent = "Correct";
            result.classList.add("green");
            answer = true;
            if (quiz[currentQues].check) {
                score++;
                quiz[currentQues].check = false;
            }
            break;
        }
    }
    if (selected && answer == false) {
        para.textContent = "Wrong";
        result.classList.add("red");
        quiz[currentQues].check = false;
    }
    result.appendChild(para);
};
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    checkAnswer();
});
checkScore.addEventListener("click", () => {
    result.textContent = `Score: ${score}/${quiz.length}`;
    wholeDiv.appendChild(result);
});
document.body.appendChild(wholeDiv);
let buttons = document.createElement("div");
buttons.appendChild(submit);
buttons.appendChild(next);
buttons.appendChild(prev);
document.body.appendChild(buttons);
buttons.classList.add("buttons");
submit.classList.add("button");
next.classList.add("button");
prev.classList.add("button");
checkScore.classList.add("button");