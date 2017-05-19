function download(url,onSuccess){

	console.log('-- downloading by ...' + url);
	$('#loading').addClass('started');
	
	$.ajax({
		url:getYqlRssUrl(url),
		type: 'GET',
		dataType:'xml',

		success:function(xmlData){
			console.log('--dawnload SUCCESSED!');
			
			onSuccess(xmlData);
		},

		error:function(){
			console.log('--dawnload FAILURED...');
		},

		complete:function () {
			$('#loading').removeClass('started');
		}
	});
}

function getYqlRssUrl(url){
	var yql_url = 'https://query.yahooapis.com/v1/public/yql?q=' 
	+ encodeURIComponent('SELECT * FROM feednormalizer WHERE url = "'+ url +'"' ) 
	+ '&format=xml';
	return yql_url;
}