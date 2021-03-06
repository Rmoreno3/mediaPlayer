import MediaPlayer from 'rmoreno31_mediaplayer';
import AutoPlay from 'rmoreno31_mediaplayer/lib/plugins/AutoPlay';
import AutoPause from 'rmoreno31_mediaplayer/lib/plugins/AutoPause';
import Ads from 'rmoreno31_mediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
  });

const button: HTMLElement = document.querySelector("button");
const button1: HTMLElement = document.getElementById("mute")


button.onclick = () => player.togglePlay();
button1.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}
