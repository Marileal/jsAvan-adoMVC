class View {
    constructor (elemento){
      this._elemento = elemento;
    }
    template(model){
      throw new Error ('você deve sobrescrever este método em seu template');
    }
    update(model){
      this._elemento.innerHTML = this.template(model);
    }
    //falta criar a view da mensagem;

}
