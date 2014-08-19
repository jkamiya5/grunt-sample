document.write("<p>UTF-8で記述された外部ファイル</p>");

document.write("<p>Shift_JISで記述された外部ファイル</p>");
function koshin() {
	var hiduke = document.lastModified;
	for (i = 0; i < 20; i++) {
		document.write("<br>");
		document.write("テスト:" + i + ":　　");
		document.write(hiduke);
	}
	alert("bbbbbあああああああああああああdddddd");

}
// パターン1の色設定開始
function color1() {

	document.bgColor = "#eeeeff"; // bgcolor：背景色
	document.fgColor = "#0080ff"; // text：文字の基本色
	document.linkColor = "#ff0000"; // link：リンク文字の色
	document.vlinkColor = "#ff0000"; // vlink：リンク文字の色（アクセス済みのリンク）
	document.alinkColor = "#ff8000"; // alink：リンク文字の色（クリックした瞬間の色）

}
// パターン1の色設定終了

// パターン2の色設定開始
function color2() {

	document.bgColor = "#fbeae6";
	document.fgColor = "#ff0000";
	document.linkColor = "#ff00ff";
	document.vlinkColor = "#ff00ff";
	document.alinkColor = "#ff8000";

}
// パターン2の色設定終了

var TEST;
(function (TEST) {
    TEST.Message;
    var Cat = (function () {
        function Cat() {
        }
        return Cat;
    })();
    var myCat = new Cat();
    myCat.age = 3;
    myCat.weight = 5.1;
    TEST.Message = "My cat is " + myCat.age + "yeas old and weight is " + myCat.weight + " kg. ";
})(TEST || (TEST = {}));
document.write(TEST.Message);

function test1() {
    document.write(TEST.Message);
}
//# sourceMappingURL=cat.js.map
