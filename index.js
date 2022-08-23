$.get('https://soup.agnescameron.info/feed.xml', function (data) {
    $(data).find("item").each(function (index) {
        var post = $(this);
        let date = new Date(post.find("pubDate").text());
        index < 5 && $('#blog').append(
        	`<a href="${post.find("link").text()}">${ (date.getMonth() + 1) + "/" + date.getFullYear().toString().slice(-2)}: ${post.find("title").text()} →</a> <br>`
        )
    });
});

function showPostImage(post) {
    $('#imageContainer').html("<img src='" + post + "'>");
    $('#imageContainer').css({display: 'block'})
}

function hidePostImage() {
    $('#imageContainer').css({display: 'none'})
}

function backClick() {
    if(document.referrer.indexOf('agnescameron.info') >= 0) {
        history.go(-1);
    }
    else {
        window.location.href = '/';
    }
}