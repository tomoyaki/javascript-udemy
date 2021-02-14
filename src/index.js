/*
for (var i = 5; i < 5; i++) {
  console.log(i);
}

for (var i = 5; i > 0; i--) {
  console.log(i);
}
*/
var tweets = ["Morning", "Good Day", "Dinner", "Good Night", "midnight"];
var tweetString = "";

for (var i = 0; i < tweets.length; i++) {
  console.log(i);
  console.log(tweetString);
  tweetString = tweetString + "<p>" + tweets[i] + "</p>";

  document.getElementById("tweetDiv").innerHTML = tweetString;
}
