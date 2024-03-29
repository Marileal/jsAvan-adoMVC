class NegociacaoController {

      constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update();
      }

      adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaForm();
      }
      _criaNegociacao() {

        return new Negociacao (
          DataHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value
        );
      }

      _limpaForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0;

        this._inputData.focus();
      }

}
