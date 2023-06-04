//variáveis da bolinha
let xBolinha = 300, yBolinha = 200, bD = 20;
let velocXbolinha = 6, velocYbolinha = 6;
let raio = bD / 2; 

//variáveis da raquete
let xRaquete = 5, yRaquete = 150, larguraRaquete = 10, alturaRaquete = 90, colidiu = false, velocidadeRaquete, chanceDeErrar = 0;


//variáveis do oponente
let xRaqueteOponente = 583, yRaqueteOponente = 150,  velocidadeRaqueteOponente, dOponenteBolinha = 0;

//placar
let meusPontos = 0, pontosOponente = 0;

//sfx
let raquetada, ponto;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  
  mostraBolinha();
  //movimentoBolinha();
  colisaoBolinhaBorda();
  
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  colisaoRaqueteBorda();
  movimentaMinhaRaquete();
  //colisaoRaquete();
  
  //mostraRaqueteOponente();
  movimentaRaqueteOponente();
  //colisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoPrende();
  
  colisaoMinhaRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);

  
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, bD);
}

function movimentoBolinha() {
  xBolinha += velocXbolinha;
  yBolinha += velocYbolinha;
}

function colisaoBolinhaBorda() {
  
  if(xBolinha + raio > width || xBolinha - raio < 0)
  {
    velocXbolinha *= -1;  
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0)
  {
    velocYbolinha *= -1;  
  }
}

function mostraRaquete(x,y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete(){
  
  /*velocidadeRaquete = yBolinha - yRaquete - larguraRaquete / 2 - 30;
  yRaquete += velocidadeRaquete;*/
  
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}



function movimentaRaqueteOponente(){
  /*velocidadeRaqueteOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 50*/ /*dOponenteBolinha*//*;
  yRaqueteOponente += velocidadeRaqueteOponente + chanceDeErrar;
  
  /*if(pontosOponente > meusPontos)
  {
    dOponenteBolinha = 50;
  }
  if(pontosOponente < meusPontos && dOponenteBolinha > 50)
  {
    dOponenteBolinha -= 3;
  }*/
  
  //calculaChanceDeErrar();
  
    if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
  
}


function colisaoMinhaRaqueteBiblioteca(x,y){
  colidiu =   
  collideRectCircle(x,              y,larguraRaquete,alturaRaquete,xBolinha,yBolinha,raio);
  if (colidiu == true){
    
    velocXbolinha *= -1;
    
    raquetada.play();
    raquetada.setVolume(0.4);
    
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(17);
  fill(color(0,0,0));
  rect(150,10,40,20);
  fill(255);    
  text(meusPontos, 170, 26);
  fill(color(0,0,0));
  rect(430,10,40,20);
  fill(255); 
  
  text(pontosOponente, 450, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    
    /*ponto.play();
    ponto.setVolume(0.09);*/
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    
    /*ponto.play();
    ponto.setVolume(0.09);*/
}
}

function calculaChanceDeErrar(){
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35;
    }
  }
}

function bolinhaNaoPrende(){
  if(xBolinha - raio < 0){
    xBolinha = 15;
    //yBolinha = 200;
  }
  if(xBolinha + raio > 600){
    xBolinha = 573;
    //yBolinha = 200;
  }
}

function colisaoRaqueteBorda(){
    if(yRaquete + alturaRaquete  >= 400)
  {
    yRaquete = 390 - alturaRaquete;      
  }
    if(yRaquete /*- alturaRaquete*/  <= 0)
  {
    yRaquete = 10 /*+ alturaRaquete*/;      
  }
}


/*function colisaoRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocXbolinha *= -1;       
  }
}*/

/*function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente);
}*/

/*function colisaoRaqueteOponente(){


  
}*/




