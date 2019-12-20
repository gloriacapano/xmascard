let bubbles = [];
let numBubbles = 30;

function setup(){
  createCanvas(720, 400);
  initBubbles();
}

function draw(){
 background(0);
 drawBubbles();
 moveBubble();
 }

class Bubble{
  constructor(){
  this.x = x;
  this.y = y; 
  }
  display(){
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 36, 36);
  }
  move(){
    this.x = this.x + random(-1, 1);
    this.y = this.y -1; 
  }
}


function initBubble(){
  bubbles = [];
  for (let i=0; i < numBubbles; i++){
    let x = random(width);
    let y = height;
  }
  let bubble = new Bubble(x,y);
  bubbles.push(bubble);
}

//function mousePressed() {
//  initCreatures();
//}

function drawBubbles() {
   for (let bubble of bubbles) bubble.display();
}

function moveBubbles() {
   for (let bubble of bubbles) bubble.move();
}
