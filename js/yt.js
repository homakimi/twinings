var videoUrlId;
var yplayers = [];
function onYouTubeIframeAPIReady() {
    $('.ytVideo').each(function() {
        videoUrlId = $(this).data('videoid');
        yplayer = new YT.Player( $(this)[0], {
            videoId: videoUrlId,
            host: 'http://www.youtube.com',
            playerVars: {
                playlist: videoUrlId,
                autoplay: 0,
                loop: 1,
                controls: 1,
                showinfo: 0,
                playsinline: 1,
                modestbranding: 1,
                mute: 1,
                fs: 1,
                rel: 0,
                wmode: 'transparent'
            },
            events: {
                // onReady: $(this).hasClass('autoplay')? '': onPlayerReady,
            }
        })
        yplayers.push(yplayer);
    })
}
function onPlayerReady(e) {
    // e.target.mute(), e.target.seekTo(0), e.target.playVideo();
}
function mainVisualResize() {
    var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        t = document.getElementsByClassName('ytVideo')
    1920 > e || (t.style.width = e + 'px', t.style.height = Math.floor(e / 16 * 9) + 'px')
}
var yplayer, ytag = document.createElement('script');
ytag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
window.onload = firstScriptTag.parentNode.insertBefore(ytag, firstScriptTag);
window.addEventListener('load', mainVisualResize);
window.addEventListener('resize', mainVisualResize);

