document.getElementById("checkMagicWord").onclick = function () {
  var magicWordEntered = document.getElementById("magicWord").value;
  var magicWord = "abracatabra";

  if (magicWordEntered === magicWord) {
    alert("OKです。");
    var magicWordEntered = (document.getElementById("magicWord").value = "");
  } else {
    console.log("正しい暗号を入力してください。");
    var magicWordEntered = (document.getElementById("magicWord").value = "");
  }
};
