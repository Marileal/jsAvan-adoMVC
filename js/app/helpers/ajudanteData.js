class DataHelper {
  constructor(){
    throw new Error ('Esta classe não pode ser instanciada');
  }

  static textoParaData(texto){
    return new Date(...texto
        .split('-').map((item, indice) => item - indice % 2)
      );
    // console.log(data);
  }
//a referência a outra propriedade de outro objeto é feita por passagem de dado, mesmo
  static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }
}
