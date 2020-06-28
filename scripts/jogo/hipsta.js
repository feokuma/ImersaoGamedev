class Hipsta extends Personagem {
  constructor(imagem, alturaFrame, larguraFrame, numeroFrames) {
    super(imagem, alturaFrame, larguraFrame, numeroFrames);

    this.somDoPulo = loadSound("../sons/somPulo.mp3");

    this.gravidade = 6;
    this.velocidadeDoPulo = 0;
    this.contadorPulos = 0;
    this.alturaDoPulo = 60;
  }

  pula() {
    if (this.contadorPulos++ < 2) {
      this.velocidadeDoPulo = -this.alturaDoPulo;
      this.somDoPulo.play();
    }
  }

  draw() {
    super.draw();
    this.aplicaGravidade();
  }

  aplicaGravidade() {
    this.posiçãoVertical += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.posiçãoVertical >= this.posiçãoVerticalInicial) {
      this.posiçãoVertical = this.posiçãoVerticalInicial;
      this.contadorPulos = 0;
    }
  }

  estáColidindo(inimigo) {
    let precisão = 0.6;
    let colisão = collideCircleCircle(
      this.posiçãoHorizontal,
      this.posiçãoVertical,
      this.larguraPersonagem * precisão,
      this.alturaPersonagem * precisão,
      inimigo.posiçãoHorizontal,
      inimigo.posiçãoVertical,
      inimigo.larguraFrame * precisão,
      inimigo.alturaFrame * precisão
    );

    return colisão;
  }
}
