function playVideo(vid) {
    console.log("on");
    vid.play();
}

function pauseVideo(vid) {
    console.log("out");
    vid.pause();
    vid.currentTime = 0;
}