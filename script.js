// Questions Array
let questions = [
    {
      question: "The fathers of the Internet is?",
      answers: [
        { text: "1. Charles Babbage", correct: false },
        { text: "2. John McCarthy", correct: false },
        { text: "3. Vint Cerf", correct: true },
        { text: "4. Barin Lee", correct: false },
      ],
    },
    {
      question: "Which technology is primarily responsible for the styling of web pages?",
      answers: [
        { text: "1. JavaScript", correct: false },
        { text: "2. HTML", correct: false },
        { text: "3. CSS", correct: true },
        { text: "4. Python", correct: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "1. Creative Style Sheets", correct: false },
        { text: "2. Cascading Style Sheets", correct: true },
        { text: "3. Computer Style Sheets", correct: false },
        { text: "4. Custom Style Sheets", correct: false },
      ],
    },
    {
      question: "Which programming language is mainly used for adding interactivity to websites?",
      answers: [
        { text: "1. JavaScript", correct: true },
        { text: "2. HTML", correct: false },
        { text: "3. CSS", correct: false },
        { text: "4. Python", correct: false },
      ],
    },
    {
      question: " Which part of web development is responsible for handling data storage and retrieval?",
      answers: [
        { text: "1. Front-end development", correct: false },
        { text: "2. Back-end development", correct: true },
        { text: "3. Full-stack development", correct: false },
        { text: "4. Middleware development", correct: false },
      ],
    },
  ];
  
  // Naming the elements
  let questionElement = document.getElementById("question");
  let answerButtons = document.getElementById("answer-buttons");
  let nextButton = document.getElementById("nextbtn");
  let inputfield=document.getElementById('name');
  let inputValue='';
  
  
  // Declaration of index No and score.
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function Declaration for starting the quiz 
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    
    currentQuestion.answers.forEach((answer) => {
     
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
    nextButton.innerHTML='Next'
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
      selectedbtn.classList.add("correct");
      score++;
    } else {
      selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(value) {
    resetState();
    // let username=document.getElementById('name');
    questionElement.innerHTML = `<i>"${value}"</i> scored ${score} out of ${questions.length}`;
    if(score===questions.length){
      questionElement.innerHTML=questionElement.innerHTML+` <div>Congratulations! You are the top Winner.<div>`
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore(inputValue);
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  // The displayQuiz() remove intro section on clicking start quiz and display quiz section
  let showQuizSection= document.getElementById('Quizsection');
  let introSection=document.getElementById('introSection')
  function displayQuiz(){
     inputValue=inputfield.value;
     introSection.style.display='none'
     showQuizSection.style.display='block';
    startQuiz();
  }