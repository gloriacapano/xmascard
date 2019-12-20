let reference = null;
let numCreatures = 3000;
let creatures = [];
let time = 0;


class Creature {
   constructor(x, y, vx, vy, col) {
      this.x = x;
      this.y = y;
      if (typeof vx == "undefined") { vx = 0; vy = 0; }
      this.vx = vx;
      this.vy = vy;
      this.rad = Math.floor(2 + random(8));
      this.hasStopped = false;
      if (typeof col == "undefined") { col = color(255); }
      this.col = col;
      this.lifeTime = random(40, 200);
   }
   
   draw() {
      fill(this.col);
      noStroke();
      rect(this.x, this.y, this.rad, this.rad);
   }
   
   move() {
      if (this.hasStopped) return;
      let x = Math.floor(this.x);
      let y = Math.floor(this.y);
      let dx = mouseX - x;
      let dy = mouseY - y;
      let sd = dx * dx + dy * dy;
      let d = Math.sqrt(sd);
      let fx = dx / (10.0 + d);
      let fy = dy / (10.0 + d);
      this.vx += fx;
      this.vy += fy;
     
      if (reference.get(x, y)[0] > 0 && time > this.lifeTime) { this.hasStopped = true; return; }

      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
   
       
     
     
   }
}



function preload() {
   
}

function initCreatures() {
    creatures = [];
    time = 0;
    for (let i = 0; i < numCreatures; i++) {
      let vx = 0, vy = 0;
      let x = 0, y = 0;
      do {
        x = random(0, width);
        y = random(0, height);
      } while (reference.get(x, y)[0] > 0);
      let col = color(Math.floor(random(0, 255)), Math.floor(random(0, 255)), 255, 255);
   
      let creature = new Creature(x, y, vx, vy, col);
      creatures.push(creature);
    }
}

function mousePressed() {
   initCreatures();
}

function drawCreatures() {
   for (let creature of creatures) creature.draw();
}

function moveCreatures() {
   for (let creature of creatures) creature.move();
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  reference = createGraphics(windowWidth, windowHeight);
  reference.background(0);
  reference.textFont("Georgia bold");
  reference.textSize(144);
  reference.textAlign(CENTER);
  reference.fill(255);
  reference.text("Happy New Year 2020", 0, height / 4, width, height);
  initCreatures();
}


function draw() {
  background(0);
  // image(reference, 0, 0);
  fill(255);
  drawCreatures();
  moveCreatures();
  time += 1;
 
}
