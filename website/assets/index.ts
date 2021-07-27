<<<<<<< HEAD
import MediaPlayer from '@sparragus/platzimediaplayer';
import AutoPlay from '@sparragus/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};
=======
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
>>>>>>> development

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
<<<<<<< HEAD
  });
}
=======
  })
}
>>>>>>> development
