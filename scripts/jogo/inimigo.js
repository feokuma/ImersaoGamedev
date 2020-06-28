class Inimigo extends Personagem {
  constructor(imagem, alturaFrame, larguraFrame, numeroFrames) {
    super(imagem, alturaFrame, larguraFrame, numeroFrames);

    this.velocidade = 10;
  }

  draw() {
    super.draw();
    this.move();
  }

  move() {
    this.posiçãoHorizontal -= this.velocidade;
  }
}
