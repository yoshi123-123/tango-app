let words = JSON.parse(localStorage.getItem("words")) || [
    
    { word: "apple", answer: "りんご" },
    { word: "book", answer: "本" },
    { word: "cat", answer: "猫" },
    { word: "dog", answer: "犬" },
    { word: "school", answer: "学校" },
    { word: "student", answer: "学生" },
    { word: "teacher", answer: "先生" },
    { word: "friend", answer: "友達" },
    { word: "family", answer: "家族" },
    { word: "house", answer: "家" },

    { word: "office", answer: "会社・事務所" },
    { word: "company", answer: "会社" },
    { word: "worker", answer: "働く人" },
    { word: "job", answer: "仕事" },
    { word: "work", answer: "仕事・働く" },
    { word: "manager", answer: "管理者・部長" },
    { word: "meeting", answer: "会議" },
    { word: "customer", answer: "顧客" },
    { word: "business", answer: "仕事・事業" },
    { word: "money", answer: "お金" },

    { word: "time", answer: "時間" },
    { word: "day", answer: "日" },
    { word: "week", answer: "週" },
    { word: "month", answer: "月" },
    { word: "year", answer: "年" },
    { word: "morning", answer: "朝" },
    { word: "afternoon", answer: "午後" },
    { word: "evening", answer: "夕方・夜" },
    { word: "today", answer: "今日" },
    { word: "tomorrow", answer: "明日" },

    { word: "food", answer: "食べ物" },
    { word: "water", answer: "水" },
    { word: "coffee", answer: "コーヒー" },
    { word: "restaurant", answer: "レストラン" },
    { word: "lunch", answer: "昼食" },
    { word: "dinner", answer: "夕食" },
    { word: "breakfast", answer: "朝食" },
    { word: "menu", answer: "メニュー" },
    { word: "table", answer: "テーブル" },
    { word: "drink", answer: "飲み物・飲む" },

    { word: "car", answer: "車" },
    { word: "train", answer: "電車" },
    { word: "bus", answer: "バス" },
    { word: "station", answer: "駅" },
    { word: "airport", answer: "空港" },
    { word: "hotel", answer: "ホテル" },
    { word: "trip", answer: "旅行" },
    { word: "travel", answer: "旅行する" },
    { word: "ticket", answer: "切符・チケット" },
    { word: "road", answer: "道路" },

    { word: "city", answer: "都市" },
    { word: "country", answer: "国" },
    { word: "place", answer: "場所" },
    { word: "building", answer: "建物" },
    { word: "store", answer: "店" },
    { word: "shop", answer: "店・買い物をする" },
    { word: "park", answer: "公園" },
    { word: "room", answer: "部屋" },
    { word: "home", answer: "家・家庭" },
    { word: "street", answer: "通り" },

    { word: "buy", answer: "買う" },
    { word: "sell", answer: "売る" },
    { word: "pay", answer: "支払う" },
    { word: "use", answer: "使う" },
    { word: "make", answer: "作る" },
    { word: "take", answer: "取る・持っていく" },
    { word: "give", answer: "与える" },
    { word: "get", answer: "得る・手に入れる" },
    { word: "find", answer: "見つける" },
    { word: "help", answer: "助ける" },

    { word: "go", answer: "行く" },
    { word: "come", answer: "来る" },
    { word: "leave", answer: "去る・出発する" },
    { word: "arrive", answer: "到着する" },
    { word: "start", answer: "始める" },
    { word: "finish", answer: "終える" },
    { word: "open", answer: "開ける・開く" },
    { word: "close", answer: "閉める・閉じる" },
    { word: "call", answer: "電話する・呼ぶ" },
    { word: "send", answer: "送る" },

    { word: "good", answer: "良い" },
    { word: "bad", answer: "悪い" },
    { word: "big", answer: "大きい" },
    { word: "small", answer: "小さい" },
    { word: "new", answer: "新しい" },
    { word: "old", answer: "古い・年を取った" },
    { word: "easy", answer: "簡単な" },
    { word: "important", answer: "重要な" },
    { word: "different", answer: "異なる" },
    { word: "same", answer: "同じ" },

    { word: "happy", answer: "幸せな" },
    { word: "busy", answer: "忙しい" },
    { word: "free", answer: "自由な・無料の" },
    { word: "ready", answer: "準備ができた" },
    { word: "early", answer: "早い・早く" },
    { word: "late", answer: "遅い・遅く" },
    { word: "fast", answer: "速い・速く" },
    { word: "slow", answer: "遅い・ゆっくり" },
    { word: "right", answer: "正しい・右" },
    { word: "wrong", answer: "間違った" }

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
        alert("英単語と日本語を入力してください！");
        return;
    }

    words.push({
        word: newWord.value,
        answer: newAnswer.value
    });

    newWord.value = "";
    newAnswer.value = "";

    localStorage.setItem("words", JSON.stringify(words));

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