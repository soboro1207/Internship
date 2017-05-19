/*
api.jsのdownloadメソッドにあるAjaxリクエストが成功すると、
displayFeedResultsという新しいメソッドを呼び出すようにする
*/
/*.find(item)でXMLの中のitemタグを検索します。jQueryのeach関数で全てのitemタグにアクセスができます。

eachの中で実装するfunctionはコールバックです。各アイテムでこのコールバックが呼ばれます。このコールバック関数の中ではアイテムにアクセスするために$(this)を利用します。*/
function displayFeedResults(xmlData) {

    $('#feed-articles').html('');

    var items = $(xmlData).find('item');
    items.each(function(n) {

        var title = $(this).find('title').text();
        var description = $(this).find('description').text();
        var link = $(this).find('link').text();
/*
        console.log('item ' + n);
        console.log(title);
        console.log(description);
        console.log(link);
 */       
        var html = 
        '<article>' +
        '<h3 class="article-title">' + title + '</h3>' +
        '<p class="article-description">' + description + '</p>' +
        '<a href="' + link + '" target="_blank" class="see-article-link" >See</a>' +
        '<button class="save-bookmark-btn"><i class="fa fa-rocket"></i></button>' +
        '</article>';

        $('#feed-articles').append(html);
    });

    $('.save-bookmark-btn').on('click', function(){
        var article = $(this).parent();
        var title = article.find('.article-title').text();
        var url = article.find('.see-article-link').attr('href');

        registerBookmark(title, url);
    });
}

function filterFeed(word) {
    
    if (word.length >= 2) {

        $('article').each(function () {
            var title = $(this).find('.article-title').text().toLowerCase();
            var titleHasWord = title.indexOf(word.toLowerCase()) >= 0;

            var description = $(this).find('.article-description').text().toLowerCase();
            var descriptionHasWord = description.indexOf(word.toLowerCase()) >= 0;

            if (titleHasWord || descriptionHasWord) {
                $(this).removeClass('hidden');
            }
            else{
                $(this).addClass('hidden');
            }
        });
    }
    else{
        $('article').removeClass('hidden');
    }
}