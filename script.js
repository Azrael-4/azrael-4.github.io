// GENERAL SCRIPT -> //
var velocidade = 50;
/*
var optiones = 0;
while (!(optiones == 1 || optiones == 2 || optiones == 3 )) {
  let x = prompt("Escolha a velocidade do jogo!\n\n1 - Normal\n\n2 - Rápida\n\n3 - Burlesca\n\n", "2");
  optiones = x;
  }
if (optiones == 1) {velocidade = 60};
if (optiones == 2) {velocidade = 50};
if (optiones == 3) {velocidade = 40};
*/


const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale= 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake();
  fruit = new fruit();
  
  fruit.pickLocation();


  window.setInterval( () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();

    document.querySelector('.score').innerText = snake.total;

    }, velocidade);
}());


// TOUCH -> //
document.getElementById("buttonUp").addEventListener('touchstart', function() {
  var direction2 = 'Up'; snake.changeDirection(direction2); });
document.getElementById("buttonDown").addEventListener('touchstart', function() {
  var direction2 = 'Down'; snake.changeDirection(direction2); });
document.getElementById("buttonLeft").addEventListener('touchstart', function() {
  var direction2 = 'Left'; snake.changeDirection(direction2); });
document.getElementById("buttonRight").addEventListener('touchstart', function() {
  var direction2 = 'Right'; snake.changeDirection(direction2); });
// <- TOUCH //

/* BUTTONS -> //
document.getElementById("buttonUp").addEventListener('click', function() {
  var direction2 = 'Up'; snake.changeDirection(direction2); });
document.getElementById("buttonDown").addEventListener('click', function() {
  var direction2 = 'Down'; snake.changeDirection(direction2); });
document.getElementById("buttonLeft").addEventListener('click', function() {
  var direction2 = 'Left'; snake.changeDirection(direction2); });
document.getElementById("buttonRight").addEventListener('click', function() {
  var direction2 = 'Right'; snake.changeDirection(direction2); });
// <- BUTTONS //*/

window.addEventListener('keydown', ((evt) => {
  //console.log(evt);
  const direction = evt.key.replace('Arrow','');
  //console.log(direction);
  snake.changeDirection(direction);

}));

// <- GENERAL SCRIPT //


// FRUIT ->
function fruit () {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() * rows -1) +1 ) * scale;
    this.y = (Math.floor(Math.random() * columns -1) +1 ) * scale;
  }
  this.draw = function() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
// <- FRUIT //


// STARTING AND SOUNDS DECLARATIONS -> //
var musicaTocar = 0;

function iniciar () {
  document.getElementById('SOM').innerHTML = "";
  switch ( musicaTocar ){
    case 0: musica2.pause();musica3.pause();musica1.play();break;
    case 1: musica1.pause();musica3.pause();musica2.play();break;
    case 2: musica1.pause();musica2.pause();musica3.play();break;
    case 3: musica1.pause();musica2.pause();musica3.pause();break;
    default: console.log("Default Music");
    }
  if (musicaTocar < 3) {musicaTocar++} else {musicaTocar = 0};
  }

const spree1 = new Audio('arquivos/Flamboyant_first_blood.mp3');
const spree2 = new Audio('arquivos/Flamboyant_3_kills.mp3');
const spree3 = new Audio('arquivos/Flamboyant_double_kill.mp3');
const spree4 = new Audio('arquivos/Flamboyant_4_kills.mp3');
const spree5 = new Audio('arquivos/Flamboyant_5_kills.mp3');
const spree6 = new Audio('arquivos/Flamboyant_6_kills.mp3');
const spree7 = new Audio('arquivos/Flamboyant_7_kills.mp3');
const spree8 = new Audio('arquivos/Flamboyant_8_kills.mp3');
const spree9 = new Audio('arquivos/Flamboyant_9_kills.mp3');
const spree10 = new Audio('arquivos/Flamboyant_10_kills.mp3');
const spree11 = new Audio('arquivos/Flamboyant_annihilation.mp3');
const spree12 = new Audio('arquivos/Flamboyant_immortal.mp3');
const derrota = new Audio('arquivos/Flamboyant_defeat.mp3');
const comer = new Audio('arquivos/comer.wav');
const musica1 = new Audio('arquivos/Musica1.mp3');
const musica2 = new Audio('arquivos/Musica2.mp3');
const musica3 = new Audio('arquivos/Musica3.mp3');
// <- STARTING AND SOUNDS DECLARATIONS //




//// SNAKE.JS ////

var maximum = 0;
var direciones = 0;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale*1;
  this.ySpeed = 0;
  
  this.total = 0;
  this.tail = [];

  this.draw = function() {

    ctx.fillStyle = "#FFFFFF";

    for (let i=0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i=0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total -1] = { x: this.x, y: this.y};

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  
    if (this.x == canvas.width) {this.x = 0};
    if (this.x < 0) {this.x = canvas.width};
    if (this.y == canvas.height) {this.y = 0};
    if (this.y < 0) {this.y = canvas.height};
  }
  
  this.changeDirection = function (direction) {
    switch(direction) {
      case 'Up':    if (direciones != 'Down')   {this.xSpeed = 0;          this.ySpeed = -scale*1;   direciones = 'Top'} break;
      case 'Down':  if (direciones != 'Top')   {this.xSpeed = 0;          this.ySpeed = scale*1;    direciones = 'Down'} break;
      case 'Left':  if (direciones != 'Right')   {this.xSpeed = -scale*1;   this.ySpeed = 0;          direciones = 'Left'} break;
      case 'Right': if (direciones != 'Left')   {this.xSpeed = scale*1;    this.ySpeed = 0;          direciones = 'Right'} break;
      default: break;
    }

    //ELTON
    this.changeDirection2 = function (direction2) {
      switch(direction2) {
        case 'Up':    if (direciones != 'Down')   {this.xSpeed = 0;          this.ySpeed = -scale*1;   direciones = 'Top'} break;
        case 'Down':  if (direciones != 'Top')   {this.xSpeed = 0;          this.ySpeed = scale*1;    direciones = 'Down'} break;
        case 'Left':  if (direciones != 'Right')   {this.xSpeed = -scale*1;   this.ySpeed = 0;          direciones = 'Left'} break;
        case 'Right': if (direciones != 'Left')   {this.xSpeed = scale*1;    this.ySpeed = 0;          direciones = 'Right'} break;
        default: break;
        }
    }
  }

  // KILLING SPREES
  this.eat = function(fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      if (this.total == 10) { spree1.play(); }
      if (this.total == 20) { spree2.play(); }
      if (this.total == 30) { spree3.play(); }
      if (this.total == 40) { spree4.play(); }
      if (this.total == 50) { spree5.play(); }
      if (this.total == 60) { spree6.play(); }
      if (this.total == 70) { spree7.play(); }
      if (this.total == 80) { spree8.play(); }
      if (this.total == 90) { spree9.play(); }
      if (this.total == 100) { spree10.play(); }
      if (this.total == 110) { spree11.play(); }
      if (this.total == 120) { spree11.play(); }
      if (this.total == 130) { spree12.play(); }
      if (this.total == 140) { spree12.play(); }
      if (this.total >= 150) { spree12.play(); }
      comer.play();
      return true;
    }
    return false;
  }

  this.checkCollision = function() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        var last = snake.total;
        derrota2.play();
        this.total = 0;
        this.tail = [];
        if (last >= maximum) {maximum = last; document.querySelector('.maxScore').innerText = maximum;};
      }
    }
  }
}
