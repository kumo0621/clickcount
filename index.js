// クリック回数を記録する変数
var clickCount = 0;

// ボタンがクリックされたときの処理
document.getElementById("clickButton").addEventListener("click", function() {
  // クリック回数をインクリメント
  clickCount++;

  // クリック回数を表示する要素を取得
  var counterElement = document.getElementById("counter");

  // クリック回数を表示する要素に値を設定
  counterElement.textContent = clickCount;

  // URLを開く
  window.open("https://www.dropbox.com/s/zakgdewj2vh2rir/levelBank-1.0-SNAPSHOT.jar?dl=1"); // ここに開きたいURLを指定してください
});
