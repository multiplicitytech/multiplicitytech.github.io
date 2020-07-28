
var logox, logoy;

// var xspeed = 2.5;
// var yspeed = 2.5;
var xspeed, yspeed;
var colors = ['#CC1B2C', '#0DB000', '#00CCA4', '#CC8200', '#C200CC', '#0500CC', '#B8CC00'];
var text_color, text_width, ext_color;
var speeds, speeds_tab, speeds_mob;
var mode;

let logo, logo_size, extension = '.tech';

let extensions = ['.tech', '.privacy', '.surveillance', '.exile', '.identity', '.archives', '.bias', '.climate', '.nature', '.monopoly', '.food'];

let hidden_text, spacing;

let ext_size;

let keywords = ['lujain', 'tom', 'grace', 'jihyun', 'munib', 'rastra', 'alia', 'sohail', 'isabelle', 'tona', 'tech', 'privacy', 'surveillance', 'exile', 'identity', 'archives', 'bias', 'climate', 'nature', 'monopoly', 'food', 'internet', 'youth', 'nepal', 'korea', 'palestine', 'lebanon', 'nigeria', 'usa', 'eastern europe', 'bosnia', 'uae', 'abu dhabi', 'new zealand', 'online'];

let word_list = [], wi;

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
  ext_color = random(colors);
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


  for (let i=0; i<canvas.width; i+=(textWidth("surveillance")*1.2)) {
    for (let j=0;j<canvas.height;j+=50) {
    word_list.push(random(keywords));
  }
  }

  console.log(word_list);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  word_list = [];

  for (let i=0; i<canvas.width; i+=(textWidth("surveillance")*1.2)) {
    for (let j=0;j<canvas.height;j+=50) {
    word_list.push(random(keywords));
  }
  }

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

if (logox > (canvas.width-textWidth(extension))) {
  logox = canvas.width - (textWidth(logo)+textWidth(extension));
}

if (logox < canvas.width) {
  logox = canvas.width + 10;
}

if (logoy < canvas.height) {
  logoy = canvas.height + 10;
}

if (logoy > canvas.height) {
  logoy = canvas.height - 30;
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

  hidden_text = "surveillance";

  fill('#FFFAF0');

  wi = 0;
  
  for (let i=0; i<canvas.width; i+=(textWidth(hidden_text)*1.2)) {
    for (let j=0;j<canvas.height;j+=50) {
      text(word_list[wi],i,j);
      wi+=1;
  }
  }
  
  fill(text_color);
  textSize(logo_size);
  // logo = "multiplicity" + extension;
  logo = "multiplicity";
  text(logo,logox,logoy);
  fill(ext_color);
  text(extension,logox+textWidth(logo),logoy);

  logox += xspeed;
  logoy += yspeed;

  if (logox < 0 || logox > canvas.width - (textWidth(logo)+textWidth(extension))) {
    ext_size = textWidth(extension);
    xspeed = xspeed * -1;
    text_color = random(colors);
    ext_color = random(colors);
    extension = random(extensions);

    if (logox > canvas.width - textWidth(logo)) {
      if (textWidth(extension) > ext_size) logox -= (textWidth(extension)-ext_size);
    }
  }

  else if (logoy < 0 || logoy > canvas.height) {
    yspeed = yspeed * -1;
    text_color = random(colors);
    ext_color = random(colors);
    extension = random(extensions);
  }


}



function mouseClicked() {
  // clear();

   
}
