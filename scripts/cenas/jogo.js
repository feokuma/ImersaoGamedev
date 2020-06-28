class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuação();

    hipsta = new Hipsta(imagemHipsta, 270, 220, 16);
    hipsta.posiçãoHorizontal = 70;

    const gotinha = new Inimigo(imagemGotinha, 100, 105, 28);
    gotinha.posiçãoHorizontal = width;
    inimigos.push(gotinha);

    const gotinhaVoadora = new Inimigo(imagemGotinhaVoadora, 150, 200, 16);
    gotinhaVoadora.posiçãoVertical -= 500;
    inimigos.push(gotinhaVoadora);

    const troll = new Inimigo(imagemTroll, 400, 400, 26);
    troll.posiçãoHorizontal = width - 70;
    troll.posiçãoVertical += 50;
    inimigos.push(troll);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      hipsta.pula();
    }
    if (key === "ArrowRight"){
        hipsta.posiçãoHorizontal += 10;
    }
    if (key === "ArrowLeft"){
        hipsta.posiçãoHorizontal -= 10;
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    pontuacao.draw();

    hipsta.draw();

    const inimigo = inimigos[this.inimigoAtual];
    inimigo.draw();

    if (inimigo.estáVisivelNaTela()) {
      this.inimigoAtual = (this.inimigoAtual + 1) % inimigos.length;
      inimigo.velocidade = parseInt(random(10, 30));
    }
    /*
    if (hipsta.estáColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2);
      noLoop();
    }
    */
  }
}
