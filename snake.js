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
      default: console.log("DEFAULT SWITCH DIRECTION SNAKE");
  	}
  }
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
        if (this.total >= 100) { spree10.play(); }
        comer.play();
        
  		return true
  	}
  	return false;
  }
  this.checkCollision = function() {
  	for (let i = 0; i < this.tail.length; i++) {
  		if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
  			var last = snake.total;
  			document.querySelector('.lastScore').innerText = last;
        this.total = 0;
  			this.tail = [];
        derrota.play();
  			if (last >= maximum) {maximum = last; document.querySelector('.maxScore').innerText = maximum;};
  		}
  	}
  }
}






// SOUNDS

const spree1 = new Audio('arquivos/Flamboyant_first_blood.mp3');
const spree2 = new Audio('arquivos/Flamboyant_3_kills.mp3');
const spree3 = new Audio('arquivos/Flamboyant_4_kills.mp3');
const spree4 = new Audio('arquivos/Flamboyant_5_kills.mp3');
const spree5 = new Audio('arquivos/Flamboyant_6_kills.mp3');
const spree6 = new Audio('arquivos/Flamboyant_7_kills.mp3');
const spree7 = new Audio('arquivos/Flamboyant_8_kills.mp3');
const spree8 = new Audio('arquivos/Flamboyant_9_kills.mp3');
const spree9 = new Audio('arquivos/Flamboyant_10_kills.mp3');
const spree10 = new Audio('arquivos/Flamboyant_annihilation.mp3');
const derrota = new Audio('arquivos/Flamboyant_defeat.mp3');

const comer = new Audio('arquivos/comer.wav');
const musica1 = new Audio('arquivos/Musica1.mp3');
const musica2 = new Audio('arquivos/Musica2.mp3');
const musica3 = new Audio('arquivos/Musica3.mp3');
