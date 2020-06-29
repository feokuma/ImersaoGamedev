class Personagem {
  constructor(imagem, alturaFrame, larguraFrame, numeroFrames) {
    this.imagem = imagem;
    this.xFrameAtual = 0;
    this.yFrameAtual = 0;

    this.larguraFrame = larguraFrame;
    this.alturaFrame = alturaFrame;

    this.larguraPersonagem = larguraFrame;
    this.alturaPersonagem = alturaFrame;

    this.contadorColunas = 0;
    this.contadorLinhas = 0;

    this.numeroFrames = numeroFrames;
    this.frameAtual = 0;

    this.alturaChão = 30;
    this.posiçãoHorizontal = 0;
    this.posiçãoVertical = height - this.alturaPersonagem - this.alturaChão;
    this.posiçãoVerticalInicial = this.posiçãoVertical;
  }

  estáVisivelNaTela(){
    return (this.posiçãoHorizontal < -this.larguraPersonagem);
  }

  draw() {
    this.exibe();
    this.anima();
  }

  exibe() {
    image(
      this.imagem,
      this.posiçãoHorizontal,
      this.posiçãoVertical,
      this.larguraPersonagem,
      this.alturaPersonagem,
      this.xFrameAtual,
      this.yFrameAtual,
      this.larguraFrame,
      this.alturaFrame
    );
  }

  escala(proporção) {
    this.larguraPersonagem *= proporção;
    this.alturaPersonagem *= proporção;

    this.posiçãoVerticalInicial = height - this.alturaPersonagem - this.alturaChão;
  }

  anima() {
    this.frameAtual++;
    this.xFrameAtual += this.larguraFrame;

    if(this.verificaSeAcabouOsFrames()){
      this.xFrameAtual = 0;
      this.yFrameAtual = 0;
      this.frameAtual = 0;
    }
    else if (this.verificaSeÉÚltimoFrameDaLinha()) {
      this.xFrameAtual = 0;
      this.yFrameAtual += this.alturaFrame;
    }
  }

  verificaSeÉÚltimoFrameDaLinha() {
    return this.xFrameAtual >= this.imagem.width;
  }

  verificaSeAcabouOsFrames(){
    return this.numeroFrames === this.frameAtual;
  }
}
