
var logox, logoy;

// var xspeed = 2.5;
// var yspeed = 2.5;
var xspeed, yspeed;
var colors = ['#CC1B2C', '#0DB000', '#00CCA4', '#CC8200', '#C2C00CC', '#0500CC', '#B8CC00'];
var text_color, text_width;
var speeds, speeds_tab, speeds_mob;
var mode;

let logo, logo_size, extension = '.tech';

let extensions = ['.tech', '.privacy', '.surveillance', '.exile', '.identity', '.archives', '.bias', '.climate', '.nature', '.monopoly', '.food'];

let hidden_text, spacing;

let ext_size;

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
  speeds_tab = [random(-2,-1), random(1,2)];
  speeds_mob = [random(-1,-.5), random(.5,1)];

  if (canvas.width > 700) {
  mode = "desktop"
  xspeed = random(speeds);
  yspeed = random(speeds);
  logo_size = canvas.width / 25;
}

if (canvas.width < 700) {
  mode = "mobile";

  if (canvas.width > 400) {
  xspeed = random(speeds_tab);
  yspeed = random(speeds_tab);
}
  
  if (canvas.width <= 400) {
  xspeed = random(speeds_mob);
  yspeed = random(speeds_mob);
  }

  logo_size = canvas.width / 15;
}

  console.log(canvas.width);
  console.log(canvas.height);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (mode === "desktop" && canvas.width < 700) {

  if (canvas.width > 400) {
  xspeed = random(speeds_tab);
  yspeed = random(speeds_tab);
}
  
  if (canvas.width <= 400) {
  xspeed = random(speeds_mob);
  yspeed = random(speeds_mob);
  }

  logo_size = canvas.width / 15;
  mode = "mobile";
}

if (mode === "mobile" && canvas.width > 700) {
  mode = "desktop";
  xspeed = random(speeds);
  yspeed = random(speeds);
  logo_size = canvas.width / 25;
}

}

function draw() {

  background('#FFFAF0');
  // fill(random(0,255), random(0,255),random(0,255));

  if (mouseIsPressed) {
  fill(220);
  circle(mouseX,mouseY,100);
}

  textSize(20);

  hidden_text = "trial text";

  fill('#FFFAF0');
  for (let i=0; i<canvas.width; i+=(textWidth(hidden_text)*1.3)) {
    for (let j=0;j<canvas.height;j+=50) {
    text("trial text",i,j);
  }
  }

  
  fill(text_color);
  textSize(logo_size);
  logo = "multiplicity" + extension;
  text(logo,logox,logoy);

  logox += xspeed;
  logoy += yspeed;

  if (logox < 0 || logox > canvas.width - textWidth(logo)) {
    ext_size = textWidth(extension);
    xspeed = xspeed * -1;
    text_color = random(colors);
    extension = random(extensions);

    if (logox > canvas.width - textWidth(logo)) {
      if (textWidth(extension) > ext_size) logox -= (textWidth(extension)/2);
    }
  }

  else if (logoy < 0 || logoy > canvas.height) {
    yspeed = yspeed * -1;
    text_color = random(colors);
    extension = random(extensions);
  }


}



function mouseClicked() {
  // clear();

   
}
