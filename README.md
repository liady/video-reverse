# Video Reverser
> A utility to run videos in "boomernag mode" in loop

## Check it [here](https://liady.github.io/video-reverse/)

## Running it locally
1. Clone the repo.
2. Run `npx serve` to serve `index.html`, and navigate to `localhost:3000` (or the port in the output).
3. You can change the video URL in `index.html` to test other videos.
4. You can change the `REWIND_FACTOR` param to experiment with rewind speeds (currently at `1.3`)

## Dev details
* The code initializes the `VideoPlayerReverse` class with the video object, then calls `player.start()` to start the boomerang playback.
* The class `VideoPlayerReverse` in `VideoPlayerReverse.js` holds the logic.
* When playing forward, the code checks on every `timeupdate` event and when the video almost reaches the end, it calls a `rewind` method that uses `requestVideoFrameCallback` to explicitly update the video time with a negative value (thus rewinding it).
* Near the start - the `playForward` method is called, and so on.
