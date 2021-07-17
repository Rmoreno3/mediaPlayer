import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");

const button = document.querySelector("button");
const button1 = document.getElementById("mute")

const player = new MediaPlayer({ el: video, 
  plugins: [ 
    // new AutoPlay() 
  ] });

button.onclick = () => player.togglePlay();
button1.onclick = () => player.toggleMute();