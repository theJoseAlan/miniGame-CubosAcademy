let personagem
let grama
let tamanho = 64

let velocidade = 64 
let andarX = 0
let andarY = 0 

let restart 

//Executa apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png');
  grama = loadImage('grama.jpg');
}

//fica executando até o programa ser encerrado
function draw() {
  
  background(220);
  
  if(andarX < 0){
    andarX = 0
  }
   if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  
   if(andarY < 0){
    andarY = 0
  }
   if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  
  for(let x = 0; x < 9; x++ ){
    
    for(let y = 0; y < 9; y++){
        image(grama, tamanho*x, tamanho*y, tamanho, tamanho)
    }
    
    image(personagem, andarX, andarY, tamanho, tamanho)   
  }
  
  if(andarX === 512 && andarY === 512){
  
  rect(160, 200, 256, 50)
  textSize(35)
  text('Ganhou', 210, 240)
    
  restart =  createButton('Reiniciar')
  
  restart.mousePressed(reseted)
    
  noLoop()
    
  }
}

function reseted(){
       andarX = 0
       andarY = 0
       restart.remove()
       loop() 
  
    }

 
//executa sempre que uma tecla é pressionada
  function keyPressed(){
      if(keyIsDown(DOWN_ARROW)){
          andarY += velocidade
      }
      if(keyIsDown(UP_ARROW)){
          andarY -= velocidade
      } 
      if(keyIsDown(LEFT_ARROW)){
          andarX -= velocidade
      } 
      if(keyIsDown(RIGHT_ARROW)){
          andarX += velocidade
      } 
  }