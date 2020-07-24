
var logox, logoy;

// var xspeed = 2.5;
// var yspeed = 2.5;
var xspeed, yspeed;
var colors = ['#CC1B2C', '#0DB000', '#00CCA4', '#CC8200', '#C2C00CC', '#0500CC', '#B8CC00'];
var text_color;
var speeds;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  textFont('Ministry');
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  noStroke();
  canvas.style('z-index',-1)

  logox = canvas.width/2.5;
  logoy = canvas.height/2;

  text_color = random(colors);
  speeds =  [random(-3,-2.5), random(2.5,3)];
  xspeed = random(speeds);
  // console.log(xspeed);
  yspeed = random(speeds);
  // console.log(yspeed);

  console.log(canvas.width);
  console.log(canvas.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // fill(random(0,255), random(0,255),random(0,255));
  fill(text_color);
  textSize(canvas.width/20);
  text("multiplicity",logox, logoy);

  logox += xspeed;
  logoy += yspeed;

  if (logox < 0 || logox > canvas.width - 75) {
    xspeed = xspeed * -1;
    text_color = random(colors);
  }

  if (logoy < 0 || logoy > canvas.height) {
    yspeed = yspeed * -1;
    text_color = random(colors);
  }


}


function mouseClicked() {
  // clear();

   
}
