class AutoPause {
  constructor() {
    this.threshold = 0.20; //El porcentaje minimo para indicar que el elemento salio de vista (viewport).
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    }) //Creamos el Observer pasando el callback y el objeto de config.

    observer.observe(this.player.media) //Le decimos que elemento va a estar observando.

    /* Usamos la API de VisibilityPage para saber cuando el usuario este visuzalizando o no la pagina,
    para realizar alguna accion.
    */
    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  handleIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.isIntersecting; //Obtenemos un booleano si ya el elemento esta fuera de vista o no.

    //Creamos un condicional ternario => si el elemento esta fuera de vista pausalo => si vuelve a la vista dale play.
    (isVisible) ? this.player.play() : this.player.pause();
  }

  /*Este metodo toma el valor de visibilityState para reproducir el video si el usuario esta visizalizando
  la pagina y pausarlo si el usuario cambia de pestaña o minimiza
  */
  handleVisibilityChange() {
    const visible = document.visibilityState === "visible";
    (visible) ? this.player.play() : this.player.pause();
  }
}

export default AutoPause;