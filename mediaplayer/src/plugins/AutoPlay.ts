<<<<<<< HEAD
import MediaPlayer from '../MediaPlayer';

class AutoPlay {
  constructor() {}
=======
import MediaPlayer from '../../src/MediaPlayer';

class AutoPlay {
  constructor() { }
>>>>>>> development
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

<<<<<<< HEAD
export default AutoPlay;
=======

export default AutoPlay;
>>>>>>> development
