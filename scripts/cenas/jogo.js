class Jogo {
  constructor() {
    this.inimigoAtual = 0;

    this.inimigo;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuação();

    hipsta = new Hipsta(imagemHipsta, 270, 220, 16);
    hipsta.posiçãoHorizontal = 70;

    //ninja = new Hipsta(imagemNinja, 458, 363, 10);
    //ninja.escala(0.5);
    //ninja.posiçãoHorizontal = 70;

    const gotinha = new Inimigo(imagemGotinha, 100, 105, 28);
    gotinha.posiçãoHorizontal = width;
    inimigos.push(gotinha);

    const gotinhaVoadora = new Inimigo(imagemGotinhaVoadora, 150, 200, 16);
    gotinhaVoadora.posiçãoVertical = 300;
    gotinhaVoadora.posiçãoHorizontal = width;
    inimigos.push(gotinhaVoadora);

    const troll = new Inimigo(imagemTroll, 400, 400, 26);
    troll.posiçãoHorizontal = width;
    troll.posiçãoVertical += 50;
    inimigos.push(troll);

    this.inimigo = inimigos[this.inimigoAtual];
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      //ninja.pula();
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
    //ninja.draw();
    this.inimigo.draw();

    if (this.inimigo.estáVisivelNaTela()) {
      this.inimigoAtual = (this.inimigoAtual + 1) % inimigos.length;
      this.inimigo = inimigos[this.inimigoAtual];
      this.inimigo.posiçãoHorizontal = width;

      this.inimigo.velocidade = parseInt(random(10, 30));
    }
    
    if (hipsta.estáColidindo(this.inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2);
      somDoJogo.stop();
      noLoop();
    }
    
  }
}
