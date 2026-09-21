let words = JSON.parse(localStorage.getItem("words")) || [
    { word: "apple", answer: "りんご" },
    { word: "book", answer: "本" },
    { word: "cat", answer: "猫" },
    { word: "dog", answer: "犬" }
];

let currentIndex = 0;

const button = document.getElementById("answerButton");
const answer = document.getElementById("answer");
const nextButton = document.getElementById("nextButton");

button.addEventListener("click", function () {
    answer.style.display = "block";
});

nextButton.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    document.getElementById("word").textContent = words[currentIndex].word;
    answer.textContent = words[currentIndex].answer;
    answer.style.display = "none";
});


const addButton = document.getElementById("addButton");
const newWord = document.getElementById("newWord");
const newAnswer = document.getElementById("newAnswer");

addButton.addEventListener("click", function () {

    if (newWord.value === "" || newAnswer.value === "") {
        alert("単語と答えを入力してください");
        return;
    }

    words.push({
        word: newWord.value,
        answer: newAnswer.value
    });

localStorage.setItem("words", JSON.stringify(words));
    newWord.value = "";
    newAnswer.value = "";

    alert("単語を追加しました！");
});
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {
    words.splice(currentIndex, 1);
    localStorage.setItem("words", JSON.stringify(words));

    if (words.length === 0) {
        alert("単語がなくなりました！");
        return;
    }

    currentIndex = 0;

    document.getElementById("word").textContent = words[currentIndex].word;
    answer.textContent = words[currentIndex].answer;
    answer.style.display = "none";

    alert("単語を削除しました！");
});