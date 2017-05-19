$(function () {
	var images = $('img');
	for (var i = 0; i < images.size(); i++) {
		if (images.eq(i).attr('src').match('Kingsman')){
			$('img').eq(i).hover(function(){
				$('this').css('opacity', '0.7');
		}, function(){
			$('this').css('opacity', '1');
		});
	}
}
});

//http://on-ze.com/archives/1388
$(function(){
	var $width = 640;
	var $height = 500;
	var $interval = 3000;
	var $fade_speed = 1000;

	$("#side ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
	$("#side ul li").hide().css({"position":"absolute","top":0,"left":0});
	$("#side ul li:first").addClass("active").show();
	setInterval(function(){
		var $active = $("#side ul li.active");
		var $next = $active.next("li").length?$active.next("li"):$("#side ul li:first");
		$active.fadeOut($fade_speed).removeClass("active");
		$next.fadeIn($fade_speed).addClass("active");
	},$interval);
});

//http://9-bb.com/fade/