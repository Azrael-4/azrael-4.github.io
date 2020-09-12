var velocidade = 200;
var optiones = 0;

while (!(optiones == 1 || optiones == 2 || optiones == 3 || optiones == 4)) {
  var x = prompt("Escolha a velocidade do jogo!\n\n1 - Lenta\n\n2 - Média\n\n3 - Rápida\n\n4 - Burlesca\n\n", "1 2 3 4");
  optiones = x;
  }

if (optiones == 1) {velocidade = 200};
if (optiones == 2) {velocidade = 150};
if (optiones == 3) {velocidade = 100};
if (optiones == 4) {velocidade = 50};




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

//

window.addEventListener('keydown', ((evt) => {
  //console.log(evt);
  const direction = evt.key.replace('Arrow','');
  //console.log(direction);
  snake.changeDirection(direction);

}));

function removerMsg () {
  document.getElementById('SOM').innerHTML = "";
  musicRandom = Math.floor(Math.random() * 3) ;
  console.log(musicRandom);
  switch ( musicRandom ){
    case 0: musica2.pause();musica3.pause();musica1.play();break;
    case 1: musica1.pause();musica3.pause();musica2.play();break;
    case 2: musica1.pause();musica2.pause();musica3.play();break;
    default: console.log("Random Music");
  }

}
