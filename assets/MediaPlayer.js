function MediaPlayer(config) {
  this.Media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  })
}

MediaPlayer.prototype.play = function () {
  this.Media.play();
};

MediaPlayer.prototype.pause = function () {
  this.Media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  (this.Media.paused) ? this.play() : this.pause();
};

MediaPlayer.prototype.mute = function () {
  this.Media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.Media.muted = false;
};

MediaPlayer.prototype.toggleMute = function () {
  (!this.Media.muted) ? this.Media.muted = true : this.Media.muted = false;
}

export default MediaPlayer;