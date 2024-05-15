import VideoPlayerReverse from "./VideoPlayerReverse.js";

const video = document.getElementById("video");
const player = new VideoPlayerReverse(video);
player.start();
