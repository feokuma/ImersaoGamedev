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
    let precisãoPosição = 0.3;
    let precisãoTamanho = 0.6;
    /*
    noFill();
    rect(
      this.posiçãoHorizontal + (this.larguraFrame * precisãoPosição),
      this.posiçãoVertical + (this.alturaFrame * precisãoPosição),
      this.larguraPersonagem * precisãoTamanho,
      this.alturaPersonagem * precisãoTamanho
    );
    rect(
      inimigo.posiçãoHorizontal + inimigo.larguraPersonagem * precisãoPosição,
      inimigo.posiçãoVertical + inimigo.larguraPersonagem * precisãoPosição,
      inimigo.larguraFrame * precisãoTamanho,
      inimigo.alturaFrame * precisãoTamanho
    );
    */
    let colisão = collideRectRect(
      this.posiçãoHorizontal + (this.larguraFrame * precisãoPosição),
      this.posiçãoVertical + (this.alturaFrame * precisãoPosição),
      this.larguraPersonagem * precisãoTamanho,
      this.alturaPersonagem * precisãoTamanho,
      inimigo.posiçãoHorizontal + (inimigo.larguraFrame * precisãoPosição),
      inimigo.posiçãoVertical + (inimigo.alturaFrame * precisãoPosição),
      inimigo.larguraFrame * precisãoTamanho,
      inimigo.alturaFrame * precisãoTamanho
    );

    return colisão;
  }
}
