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



/*// ELTON TOUCH -> //
document.getElementById("buttonUp").addEventListener('click', function() {
  var direction2 = 'Up'; snake.changeDirection(direction2); });
document.getElementById("buttonDown").addEventListener('click', function() {
  var direction2 = 'Down'; snake.changeDirection(direction2); });
document.getElementById("buttonLeft").addEventListener('click', function() {
  var direction2 = 'Left'; snake.changeDirection(direction2); });
document.getElementById("buttonRight").addEventListener('click', function() {
  var direction2 = 'Right'; snake.changeDirection(direction2); });
// <- ELTON TOUCH //




/* ELTON BOTÕES //
document.getElementById("buttonUp").addEventListener('click', function() {
  var direction2 = 'Up'; snake.changeDirection(direction2); });
document.getElementById("buttonDown").addEventListener('click', function() {
  var direction2 = 'Down'; snake.changeDirection(direction2); });
document.getElementById("buttonLeft").addEventListener('click', function() {
  var direction2 = 'Left'; snake.changeDirection(direction2); });
document.getElementById("buttonRight").addEventListener('click', function() {
  var direction2 = 'Right'; snake.changeDirection(direction2); });
// <- ELTON BOTÕES //*/

window.addEventListener('keydown', ((evt) => {
  //console.log(evt);
  const direction = evt.key.replace('Arrow','');
  //console.log(direction);
  snake.changeDirection(direction);

}));

// <- GENERAL SCRIPT //


// FRUIT SCRIPT ->
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
// <- FRUIT SCRIPT //


// START AND SOUNDS DECLARATIONS -> //

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

// <- START AND SOUNDS DECLARATIONS //
