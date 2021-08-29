const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
  "diameter",
  "chord",
  "radius",
  "2r",
  "2πr",
];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputEl.innerText = "The score is " + score;
}
submitBtn.addEventListener("click", calculateScore);