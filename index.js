var about = 0;
const self_imgs = ["cat-small.png", "thinkpad-small.png", "inflatable-small.png"]

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
        $('#extra-closer').css({display: 'inline'});
    }
    $('#extra' + about).css({display: 'inline'});
}

function closeAbout() {
    about = 0;
    $('#extra-closer').css({display: 'none'});
    $('#extra-clicker').css({display: 'inline'});
    $('.extra').css({display: 'none'});
}

function showMainImage() {
    let img = self_imgs[Math.floor(Math.random() * self_imgs.length)];
    $('#main-img').html("<img src='/assets/img/main/" + img + "'>");
    $('#main-img').css({display: 'block'})
    $('#show-img').css({display: 'none'})
    $('#close-img').css({display: 'inline'})
}

function hideMainImage() {
    $('#main-img').css({display: 'none'})
    $('#show-img').css({display: 'inline'})
    $('#close-img').css({display: 'none'})
}

function showPostImage(post) {
    $('#imageContainer').html("<img src='" + post + "'>");
    $('#imageContainer').css({display: 'block'})
}

function hidePostImage() {
    $('#imageContainer').css({display: 'none'})
}

function showTechSupport() {
    // var source_pos = event.target.getBoundingClientRect();
    // $('#tech-support-bubble').css({display: 'block', left: source_pos.x + 50, top: source_pos.y + 20});
    $('#tech-support-clicker').css({display: 'none'})
    $('#tech-support').css({display: 'inline'})
}

function hideTechSupport() {
        $('#tech-support-clicker').css({display: 'inline'})
    $('#tech-support').css({display: 'none'})
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