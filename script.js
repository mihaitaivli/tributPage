$(document).ready(function () {
    var video = $('#backgroundVideo')[0];
    var pauseBtn = $('#pauseBtn');

    pauseBtn.on('click', function (e) {
        e.preventDefault();
        //        console.log(video);
        if (video.paused) {
            pauseBtn.text('Pause');
            video.play();
        } else {
            pauseBtn.text('Play');
            video.pause();
        }
    });
});