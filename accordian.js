const array = [
  {
    question: "What is JavaScript?",
    answer:
      "A versatile programming language for web development, enabling interactivity on websites.",
  },
  {
    question: "What does HTML stand for?",
    answer:
      "HyperText Markup Language, used for structuring content on the web.",
  },
  {
    question: "What is CSS used for?",
    answer: "Cascading Style Sheets, used for styling and layout of web pages.",
  },
  {
    question: "What is a responsive design?",
    answer:
      "An approach to web design that makes pages render well on various devices and screen sizes.",
  },
  {
    question: "What is version control?",
    answer:
      "A system that helps track and manage changes to code over time, often using tools like Git.",
  },
];

let answerIndex = null;

const getDivForQuestion = (question) => {
  const index = array.findIndex((value) => value.question === question);

  const div = document.createElement("div");
  div.id = `${index}`;
  div.style.width = "100%";
  div.style.background = "red";
  div.style.color = "white";

  return div;
};

const displayAnswer = (answer, index) => {
  const div = document.createElement("div");
  div.id = `answer-${index}`;
  div.style.width = "100%";
  div.style.background = "green";
  div.style.color = "white";
  div.innerHTML = answer;

  document.getElementById(answerIndex).appendChild(div);
};

array.forEach((value, index) => {
  const div = getDivForQuestion(value.question);

  div.addEventListener("click", () => {
    const answer = document.getElementById(`answer-${answerIndex}`);
    if (answer) {
      answer.remove();
    }
    answerIndex = index;
    displayAnswer(value.answer, index);
  });

  div.innerHTML = value.question;

  document.body.appendChild(div);
});
