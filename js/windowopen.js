//新しい窓を開く
function winOpen(){
	var w=(screen.width-1000)/2;
	var h=(screen.height-1500)/2;
//window.openの仕様はよく分からんけど動いてるからよし（後で調べる）
	window.open("staffroll.html","sub","width=1000,height=1500,"+
		"left="+w+
		",top="+h+
		",scrollbars=no,menubar=no,toolbar=no");
}