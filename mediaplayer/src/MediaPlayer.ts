class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

<<<<<<< HEAD
=======

>>>>>>> development
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
<<<<<<< HEAD
    this.media.parentNode.insertBefore(this.container, this.media);
=======
    this.media.parentNode.insertBefore(this.container, this.media)
>>>>>>> development
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
<<<<<<< HEAD
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
=======
    (this.media.paused) ? this.play() : this.pause();
>>>>>>> development
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
<<<<<<< HEAD
}

export default MediaPlayer;
=======

  toggleMute() {
    (!this.media.muted) ? this.media.muted = true : this.media.muted = false;
  }

};

export default MediaPlayer;
>>>>>>> development
