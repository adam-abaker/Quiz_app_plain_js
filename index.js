const quizData = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    correct: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: ["Gd", "Go", "Ag", "Au"],
    correct: "Au",
  },
  {
    question: "Which element has the atomic number 1?",
    answers: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
    correct: "Hydrogen",
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Monaco", "Malta", "Vatican City", "San Marino"],
    correct: "Vatican City",
  },
  {
    question: "In which year did the Titanic sink?",
    answers: ["1912", "1905", "1920", "1898"],
    correct: "1912",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Quartz"],
    correct: "Diamond",
  },
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    answers: ["Python", "C++", "JavaScript", "Java"],
    correct: "JavaScript",
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["5", "6", "7", "8"],
    correct: "7",
  },
];
let right = 0;
let total = document.getElementById("total");
let questionName = document.getElementById("qeustionName");
let quesholder = document.getElementById("holder");
let score = document.getElementById("score");

let next = document.getElementById("next");
total.innerHTML = quizData.length;
let counter = 0;
questionName.innerHTML = quizData[counter].question;
function search(counter) {
  if (counter < quizData.length) {
    quizData[counter].answers.forEach((ele, index) => {
      let input = document.createElement("input");
      let label = document.createElement("label");
      score.innerHTML = right;
      questionName.innerHTML = quizData[counter].question;
      input.id = "ans" + index;
      input.type = "radio";
      input.name = "quiz_app";
      input.value = ele;
      label.htmlFor = "ans" + index;
      label.textContent = ele;
      holder.append(input);
      holder.append(label);
    });
  } else {
    console.log(right);
    let result = document.getElementById("result");
    let h2 = document.createElement("h2");
    h2.innerHTML = `you get : ${right} / ${quizData.length}`;
    result.append(h2);
  }
}
search(0);

function getAnswer() {
  console.log(counter);
  if (counter !== quizData.length) {
    console.log(counter);
    if (document.querySelector('input[type="radio"]:checked')) {
      let answer = document.querySelector('input[type="radio"]:checked').value;
      let final = quizData[counter].correct;
      if (final == answer) {
        right++;
        score.innerHTML = right;
        counter++;
        holder.innerHTML = "";
        search(counter);
      } else {
        holder.innerHTML = "";
        counter++;
        search(counter);
      }
    } else {
      alert("please chose one answe");
    }
  }
}
function nextfn() {
  getAnswer();
}
next.addEventListener("click", nextfn);
