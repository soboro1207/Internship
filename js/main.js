$(document).ready(function () {
//お気に入りの開発で追記・編集した場所----------------------------------------
		$('#add-favorite-form').on('submit', function(event){

			event.preventDefault();
			var url = $(this).find('input[name="add-favorite-url"]').val();
			registerFavorite(url);
		});

		$('#feed-filter').on('input', function(){

			var word = $(this).val();
			filterFeed(word);
		});

		$('.menu-btn').click(function () {
			$('#menu').toggleClass('opened');
		});
//最初～一覧の開発まで-----------------------------------------------------
/*var feed_url = 'http://feeds.feedburner.com/hatena/b/hotentry';

	download(feed_url,displayFeedResults);

	registerFavorite(feed_url);*/
	displayFavorites();
	displayBookmarks();
});