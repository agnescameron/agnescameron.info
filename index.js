var about = 0;

$.get('https://soup.agnescameron.info/feed.xml', function (data) {
    $(data).find("item").each(function (index) {
        var post = $(this);
        let date = new Date(post.find("pubDate").text());
        index < 5 && $('#blog').append(
        	`<a href="${post.find("link").text()}">${ (date.getMonth() + 1) + "/" + date.getFullYear().toString().slice(-2)}: ${post.find("title").text()} →</a> <br>`
        )
    });
});

function moreAbout() {
    about++;
    if(about == 4) {
        $('#extra-clicker').css({display: 'none'});
    }
    $('#extra' + about).css({display: 'inline'});
}

function showPostImage(post) {
    $('#imageContainer').html("<img src='" + post + "'>");
    $('#imageContainer').css({display: 'block'})
}

function hidePostImage() {
    $('#imageContainer').css({display: 'none'})
}

function showTechSupport() {
    var source_pos = event.target.getBoundingClientRect();
    $('#tech-support-bubble').css({display: 'block', left: source_pos.x + 50, top: source_pos.y + 20});
}

function hideTechSupport() {
    $('#tech-support-bubble').css({display: 'none'});
}

function lucky() {
    $.get('/lucky.json', function (data) {
        const choice = data[Math.floor(Math.random() * data.length)]
        window.location.href = choice.url
    });
}

function backClick() {
    if(document.referrer.indexOf('agnescameron.info') >= 0) {
        history.go(-1);
    }
    else {
        window.location.href = '/';
    }
}