class Negociacao {

  constructor(data, quantidade, valor){
    // convenção sinalizando que pessoas de fora não podem acessar e modificar os valores destas propriedades
    // apenas a própria classe pode acessá-las
    this._data = new Date(data.getTime());//pra fazer ref ao método de apenas leitura COM adicional
    // de que uma propriedade foi trazida à superfície do código, e então congelada
    this._quantidade = quantidade;
    this._valor = valor;
    // torna estas propriedades imutáveis
    Object.freeze(this);
  }

  get volume(){
    return this._quantidade * this._valor;
  }
  // método acessador

  get data(){
    return this._data;
  }
  get qntd(){
    return this._quantidade;
  }
  get valor(){
    return this._valor;
  }
}
