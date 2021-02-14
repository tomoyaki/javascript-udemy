//foodの配列を作成
var myArray = new Array();
myArray[0] = "pizza";
myArray[1] = "chocolate";

//配列の要素数をカウント
document.getElementById("countArray").onclick = function () {
  alert(myArray.length);
};
//配列の内容を表示
document.getElementById("showArray").onclick = function () {
  alert(myArray);
};

console.log(myArray);

//tweets配列
var tweets = ["GoodMorning", "It's Lunch Time", "Almost Done!"];
//配列の要素を追加
tweets.push("Finish!");
//要素の入れ替え
tweets.splice(1, 0, "today's lunch is Pasta!");
console.log(tweets);
