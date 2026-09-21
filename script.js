let words = JSON.parse(localStorage.getItem("words")) || [
    { word: "apple", answer: "りんご", level: 300 },
    { word: "book", answer: "本", level: 300 },
    { word: "cat", answer: "猫", level: 300 },
    { word: "dog", answer: "犬", level: 300 },
    { word: "school", answer: "学校", level: 300 },
    { word: "student", answer: "学生", level: 300 },
    { word: "teacher", answer: "先生", level: 300 },
    { word: "friend", answer: "友達", level: 300 },
    { word: "family", answer: "家族", level: 300 },
    { word: "house", answer: "家", level: 300 },

    { word: "office", answer: "会社・事務所", level: 300 },
    { word: "company", answer: "会社", level: 300 },
    { word: "worker", answer: "働く人", level: 300 },
    { word: "job", answer: "仕事", level: 300 },
    { word: "work", answer: "仕事・働く", level: 300 },
    { word: "manager", answer: "管理者・部長", level: 300 },
    { word: "meeting", answer: "会議", level: 300 },
    { word: "customer", answer: "顧客", level: 300 },
    { word: "business", answer: "仕事・事業", level: 300 },
    { word: "money", answer: "お金", level: 300 },

    { word: "time", answer: "時間", level: 300 },
    { word: "day", answer: "日", level: 300 },
    { word: "week", answer: "週", level: 300 },
    { word: "month", answer: "月", level: 300 },
    { word: "year", answer: "年", level: 300 },
    { word: "morning", answer: "朝", level: 300 },
    { word: "afternoon", answer: "午後", level: 300 },
    { word: "evening", answer: "夕方・夜", level: 300 },
    { word: "today", answer: "今日", level: 300 },
    { word: "tomorrow", answer: "明日", level: 300 },

    { word: "food", answer: "食べ物", level: 300 },
    { word: "water", answer: "水", level: 300 },
    { word: "coffee", answer: "コーヒー", level: 300 },
    { word: "restaurant", answer: "レストラン", level: 300 },
    { word: "lunch", answer: "昼食", level: 300 },
    { word: "dinner", answer: "夕食", level: 300 },
    { word: "breakfast", answer: "朝食", level: 300 },
    { word: "menu", answer: "メニュー", level: 300 },
    { word: "table", answer: "テーブル", level: 300 },
    { word: "drink", answer: "飲み物・飲む", level: 300 },

    { word: "car", answer: "車", level: 300 },
    { word: "train", answer: "電車", level: 300 },
    { word: "bus", answer: "バス", level: 300 },
    { word: "station", answer: "駅", level: 300 },
    { word: "airport", answer: "空港", level: 300 },
    { word: "hotel", answer: "ホテル", level: 300 },
    { word: "trip", answer: "旅行", level: 300 },
    { word: "travel", answer: "旅行する", level: 300 },
    { word: "ticket", answer: "切符・チケット", level: 300 },
    { word: "road", answer: "道路", level: 300 },

    { word: "city", answer: "都市", level: 300 },
    { word: "country", answer: "国", level: 300 },
    { word: "place", answer: "場所", level: 300 },
    { word: "building", answer: "建物", level: 300 },
    { word: "store", answer: "店", level: 300 },
    { word: "shop", answer: "店・買い物をする", level: 300 },
    { word: "park", answer: "公園", level: 300 },
    { word: "room", answer: "部屋", level: 300 },
    { word: "home", answer: "家・家庭", level: 300 },
    { word: "street", answer: "通り", level: 300 },

    { word: "buy", answer: "買う", level: 300 },
    { word: "sell", answer: "売る", level: 300 },
    { word: "pay", answer: "支払う", level: 300 },
    { word: "use", answer: "使う", level: 300 },
    { word: "make", answer: "作る", level: 300 },
    { word: "take", answer: "取る・持っていく", level: 300 },
    { word: "give", answer: "与える", level: 300 },
    { word: "get", answer: "得る・手に入れる", level: 300 },
    { word: "find", answer: "見つける", level: 300 },
    { word: "help", answer: "助ける", level: 300 },

    { word: "go", answer: "行く", level: 300 },
    { word: "come", answer: "来る", level: 300 },
    { word: "leave", answer: "去る・出発する", level: 300 },
    { word: "arrive", answer: "到着する", level: 300 },
    { word: "start", answer: "始める", level: 300 },
    { word: "finish", answer: "終える", level: 300 },
    { word: "open", answer: "開ける・開く", level: 300 },
    { word: "close", answer: "閉める・閉じる", level: 300 },
    { word: "call", answer: "電話する・呼ぶ", level: 300 },
    { word: "send", answer: "送る", level: 300 },

    { word: "good", answer: "良い", level: 300 },
    { word: "bad", answer: "悪い", level: 300 },
    { word: "big", answer: "大きい", level: 300 },
    { word: "small", answer: "小さい", level: 300 },
    { word: "new", answer: "新しい", level: 300 },
    { word: "old", answer: "古い・年を取った", level: 300 },
    { word: "easy", answer: "簡単な", level: 300 },
    { word: "important", answer: "重要な", level: 300 },
    { word: "different", answer: "異なる", level: 300 },
    { word: "same", answer: "同じ", level: 300 },

    { word: "happy", answer: "幸せな", level: 300 },
    { word: "busy", answer: "忙しい", level: 300 },
    { word: "free", answer: "自由な・無料の", level: 300 },
    { word: "ready", answer: "準備ができた", level: 300 },
    { word: "early", answer: "早い・早く", level: 300 },
    { word: "late", answer: "遅い・遅く", level: 300 },
    { word: "fast", answer: "速い・速く", level: 300 },
    { word: "slow", answer: "遅い・ゆっくり", level: 300 },
    { word: "right", answer: "正しい・右", level: 300 },
    { word: "wrong", answer: "間違った", level: 300 }
];

let currentIndex = 0;
let filteredWords = words;

// レベルを選択
const levelSelect = document.getElementById("levelSelect");

levelSelect.addEventListener("change", function () {
    const selectedLevel = Number(levelSelect.value);

    filteredWords = words.filter(function (item) {
        return item.level === selectedLevel;
    });

    currentIndex = 0;

    if (filteredWords.length === 0) {
        document.getElementById("word").textContent = "単語がありません";
        document.getElementById("answer").textContent = "";
        return;
    }

    showWord();
});

// 単語を表示
function showWord() {
    document.getElementById("word").textContent =
        filteredWords[currentIndex].word;

    document.getElementById("answer").textContent =
        filteredWords[currentIndex].answer;

    document.getElementById("answer").style.display = "none";
}

// 答えを見る
const button = document.getElementById("answerButton");
const answer = document.getElementById("answer");

button.addEventListener("click", function () {
    answer.style.display = "block";
});

// 次の単語
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function () {
    if (filteredWords.length === 0) {
        return;
    }

    currentIndex++;

    if (currentIndex >= filteredWords.length) {
        currentIndex = 0;
    }

    showWord();
});

// 単語を追加
const addButton = document.getElementById("addButton");
const newWord = document.getElementById("newWord");
const newAnswer = document.getElementById("newAnswer");
const newLevel = document.getElementById("newLevel");

addButton.addEventListener("click", function () {

    if (newWord.value === "" || newAnswer.value === "") {
        alert("英単語と日本語を入力してください！");
        return;
    }

    words.push({
        word: newWord.value,
        answer: newAnswer.value,
        level: Number(newLevel.value)
    });

    localStorage.setItem("words", JSON.stringify(words));

    newWord.value = "";
    newAnswer.value = "";

    filteredWords = words.filter(function (item) {
        return item.level === Number(levelSelect.value);
    });

    currentIndex = 0;
    showWord();

    alert("単語を追加しました！");
});

// 単語を削除
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {

    if (filteredWords.length === 0) {
        return;
    }

    const wordToDelete = filteredWords[currentIndex];

    const index = words.indexOf(wordToDelete);

    words.splice(index, 1);

    localStorage.setItem("words", JSON.stringify(words));

    filteredWords = words.filter(function (item) {
        return item.level === Number(levelSelect.value);
    });

    if (filteredWords.length === 0) {
        document.getElementById("word").textContent = "単語がありません";
        answer.textContent = "";
        return;
    }

    currentIndex = 0;
    showWord();

    alert("単語を削除しました！");
});