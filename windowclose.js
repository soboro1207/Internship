//窓を閉じる
$(function(){
	var close = $('#bigtext');
	
	close.on('mouseover',function () {
		window.open('about:blank','_self').close();
		//IE以外（chromeなど）はこう書かないとすんなり閉じてくれないらしい
		//IEもこれだとアラートなしで閉じる
	});
});
//40ミリ秒ごとにscroll()を再帰的に呼び出してる...と思う
function scroll() {
	scrollBy(0,3);
	setTimeout("scroll()",40);
	}