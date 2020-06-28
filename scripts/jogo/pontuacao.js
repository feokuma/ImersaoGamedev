class Pontuação {
  constructor() {
    this.posiçãoVertical = 50;
    this.posiçãoHorizontal = width - 30;
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);
    text(parseInt(this.pontos), this.posiçãoHorizontal, this.posiçãoVertical);
  }

  somarPontos() {
    this.pontos += 0.02;
  }

  draw() {
    this.exibe();
    this.somarPontos();
  }
}
