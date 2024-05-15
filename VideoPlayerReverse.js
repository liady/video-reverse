export default class VideoPlayerReverse {
  constructor(video) {
    this.video = video;
    this.rewinding = false;
  }
  start = () => {
    this.rewinding = false;
    let video = this.video;
    if (!video) {
      throw new Error("Video element not found");
    }
    // log currentTime every second
    video.addEventListener("timeupdate", () => {
      // check if we're almost at the end
      if (video.currentTime >= video.duration - 0.5 && !this.rewinding) {
        this.rewinding = true;
        this.rewindVideo();
      }
      // check if we're almost at the beginning
      if (video.currentTime <= 0.5 && this.rewinding) {
        this.rewinding = false;
        this.playForward();
      }
    });
    video.play();
  };

  rewindVideo = () => {
    const REWIND_FACTOR = 1.3;
    const video = this.video;
    const innerRewind = (elapsed) => {
      if (video.currentTime === 0 || !this.rewinding) {
        return;
      } else {
        video.currentTime += -(((elapsed || 40) * REWIND_FACTOR) / 1000);
        let handle;
        const start = new Date().getTime();
        video.requestVideoFrameCallback(() => {
          video.cancelVideoFrameCallback(handle);
          const now = new Date().getTime();
          const elapsed = now - start;
          innerRewind(elapsed);
        });
      }
    };
    setTimeout(() => requestAnimationFrame(() => innerRewind()), 0);
  };

  playForward = () => {
    this.video.playbackRate = 1.0;
    this.video.play();
  };
}
