function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botao = new Botao('Iniciar', width/2, height/2);

  cenas = {
    jogo,
    telaInicial,
  };

  jogo.setup();
  somDoJogo.setVolume(0.1);
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
