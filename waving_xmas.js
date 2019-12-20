
let font, 
  fontsize = 66;


function preload(){
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  // Font downloaded by https://www.fontsquirrel.com/fonts/list/popular
  font = loadFont('font/Pacifico.ttf');
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
    
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  // background(0);
}

let j = 0;

function draw() {
  background(0, 30);

  // Set the gap between letters and the left and top margin
  let gap = 56;
  let margin = 10;
  translate(margin * 0, margin * 4);
  
  x = 0;
   
  let letter = "Merry Xmas";
  for (let i of letter){
    let r;
    let g;
    let b;
    b = 255 * cos((x + j)/width*TWO_PI); 
    g = 255 * sin((x + j)/width*TWO_PI);
    r = 255;  // 255 * cos((x + j)/width*5*PI);
    fill(r, g, b);
    if (mouseIsPressed){
       fill(255);
  }
    y = windowHeight/3 - sin((x + j) / width * TWO_PI) * windowHeight/6;
    text(i, (x + j)%width, y);
    textSize(fontsize + (mouseX/width)*100);
    x += gap;
  }
  j += 1;
  
 
}
