var tela = 0;
var player1 = 0;
var player2 = 0;
function setup(){
  createCanvas(401, 400);
}
function draw() {
  
//criando a tela 0...
  
  if(tela==0){
  background(70);
  fill('white')
  rect(113, 135, 150, 50)
  fill('green')
  textSize(38)
  text('JOGAR', 121, 175)
  textSize(21)
  fill('white')
  rect(113, 200, 150, 50)
  fill('red')
  textSize(22)
  text('INSTRUÇÕES', 116, 235)
  
}
  
//criando a tela 1...
  
  else if(tela==1){
    background(70)
    fill('white')
    rect(70, 115, 260, 150)
    fill('black')
    textSize(20)
    text('JOGO TRÊS COPOS.',100,142)
    fill('black')
    textSize(18)
    text('ESCOLHE UMA CARTA AI.', 90, 175)
    fill('rgb(0,0,0)')
    textSize(18)
    text('(PLAYER 1)',150,195)
    fill('black')
    rect(104, 215, 30, 40)
    fill('white')
    textSize(30)
    text('1', 110, 246)
    fill('black')
    rect(180,215,30,40)
    fill('white')
    textSize(30)
    text('2',187,247)
    fill('black')
    rect(256,215,30,40)
    textSize(30)
    fill('white')
    text('3',263,247)
    fill('white')
    rect(218,325,150,50)
    fill('black')
    textSize(32)
    text('VOLTAR',230,365)
  }
  
//criando a tela 2...
  
  else if(tela==2){
     background(70)
    fill('white')
    rect(70, 115, 260, 150)
    fill('black')
    textSize(20)
    text('JOGO TRÊS COPOS.',100,142)
    fill('black')
    textSize(18)
    text('ADIVINHA A CARTA AGORA.',85,175)
    fill('black')
    text('(PLAYER 2)',150,195)
    fill('black')
    rect(104, 215, 30, 40)
    fill('white')
    textSize(30)
    text('1', 110, 246)
    fill('black')
    rect(180,215,30,40)
    fill('white')
    textSize(30)
    text('2',187,247)
    fill('black')
    rect(256,215,30,40)
    textSize(30)
    fill('white')
    text('3',263,247)
    fill('white')
    rect(218,325,150,50)
    fill('black')
    textSize(32)
    text('VOLTAR',230,365)
  }
  
//criando a tela 3...
  
  else if(tela==3){
    background('#4CAF50')
    fill('white')
    rect(70, 105, 260, 150)
    fill('green')
    textSize(20)
    text('PLAYER 2 GANHOU!', 100, 138)
    fill('red')
    textSize(20)
    text('PLAYER 1, VOCÊ PERDEU!',73,178)
    fill('black')
    rect(125, 200, 150, 50)
    fill('white')
    textSize(18)
    text('TENTAR',160,220)
    fill('white')
    textSize(18)
    text('NOVAMENTE',140,240)
  }
    
//criando a tela 4...
    
  else if(tela==4){
    background('red')
    fill('white')
    rect(70,105,260,150)
     fill('green')
    textSize(20)
    text('PLAYER 1 GANHOU!', 100, 138)
    fill('red')
    textSize(20)
    text('PLAYER 2, VOCÊ PERDEU!',73,178)
    fill('black')
    rect(125, 200, 150, 50)
    fill('white')
    textSize(18)
    text('TENTAR',160,220)
    fill('white')
    textSize(18)
    text('NOVAMENTE',140,240)
   }
  
//criando a tela 5...
  
  else if(tela==5){
    background('rgb(110,12,12)')
    fill('white')
    textSize(40)
    text('INSTRUÇÕES',67,45);
    fill('white')
    textSize(18)
    text('• È um jogo de 2 jogadores humanos;',17,90)
    text('• O objetivo é acertar a carta escolhida por',17,120)
    text('algum dos jogadores;',17,139)
    textSize(25)
    text('• COMO JOGAR?',17,200)
    textSize(18)
    text('• O player 1 escolhe 1 carta;',17,245)
    text('• O player 2, tem como objetivo, acertá-la;',17,270)
    text('• O player 2 só ganha, se e somente se, acertar',17,295)
    text('o número, caso contrário, player 1 ganha.',17,315)
    fill('white')
    rect(218,340,150,50)
    fill('black')
    textSize(32)
    text('VOLTAR',230,379)
  }
}
//verificar clickes e onde parar em cada clique.

function mouseClicked(){
  if (tela == 0 && mouseX < 263 && mouseX > 113 && mouseY > 135 && mouseY < 185) {
    tela = 1;
  } else if(tela==0 && mouseX>113 && mouseX<263 && mouseY>200 && mouseY<250){
    tela=5
  } else if(tela==5 && mouseX>218 && mouseX<368 && mouseY>340 && mouseY<390){
    tela=0
  } else if((tela==1 || tela==2) && mouseX>218 && mouseX<368 && mouseY>325 && mouseY<375){
    tela=0
  }

  else if (tela == 1) {
    if (mouseX > 104 && mouseX < 134 && mouseY > 215 && mouseY < 255) {
      player1 = 1;
      tela = 2;
    } else if (mouseX > 180 && mouseX < 210 && mouseY > 215 && mouseY < 255) {
      player1 = 2;
      tela = 2;
    } else if (mouseX > 256 && mouseX < 286 && mouseY > 215 && mouseY < 255) {
      player1 = 3;
      tela = 2;
    }
  }

  else if (tela == 2) {
    if (mouseX > 104 && mouseX < 134 && mouseY > 215 && mouseY < 255) {
      player2 = 1;
    } else if (mouseX > 180 && mouseX < 210 && mouseY > 215 && mouseY < 255) {
      player2 = 2;
    } else if (mouseX > 256 && mouseX < 286 && mouseY > 215 && mouseY < 255) {
      player2 = 3;
    }

    if (player1 == player2) {
      tela = 3;
    } else {
      tela = 4;
    }
  }

  else if ((tela == 3 || tela == 4) && mouseX > 125 && mouseX < 275 && mouseY > 200 && mouseY < 250) {
    player1 = 0;
    player2 = 0;
    tela = 0;
  }
}