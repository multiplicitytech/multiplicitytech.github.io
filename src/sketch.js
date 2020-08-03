
var logox, logoy;

// var xspeed = 2.5;
// var yspeed = 2.5;
var xspeed, yspeed;
var colors = ['#CC1B2C', '#0DB000', '#CC8200', '#C200CC', '#0600FF', '#B8CC00', '#F533FF', '#40E333', '#FF2138'];
var text_color, text_width, ext_color;
var speeds, speeds_tab, speeds_mob;
var mode;

let logo, logo_size, extension = '.tech';

let extensions = ['.tech', '.privacy', '.surveillance', '.exile', '.identity', '.archives', '.bias', '.climate', '.nature', '.monopoly', '.food'];

let hidden_text, spacing;

let ext_size;

let keywords = ['lujain', 'tom', 'grace', 'jihyun', 'munib', 'rastra', 'alia', 'tona', 'tech', 'privacy', 'media', 'exile', 'identity', 'archives', 'bias', 'climate', 'nature', 'monopoly', 'food', 'internet', 'youth', 'nepal', 'korea', 'palestine', 'lebanon', 'nigeria', 'usa', 'said', 'apps', 'bosnia', 'uae', 'abu dhabi', 'online'];

let word_list = [], wi;


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
  speeds =  [random(-2.5,-2), random(2,2.5)];
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

  //console.log(canvas.width);
  //console.log(canvas.height);


  for (let i=0; i<canvas.width; i+=(textWidth("abu dhabi")*1.1)) {
    for (let j=0;j<canvas.height;j+=50) {
    word_list.push(random(keywords));
  }
  }

  //console.log(word_list);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //console.log("resized");

  for (let i=0; i<canvas.width; i+=(textWidth("abu dhabi")*1.1)) {
    for (let j=0;j<canvas.height;j+=50) {
    word_list.push(random(keywords));
  }
  }

// console.log(word_list.length);

  if (canvas.width < 700) {

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

if (canvas.width > 700) {
  mode = "desktop";
  xspeed = random(speeds);
  yspeed = random(speeds);
  logo_size = canvas.width / 25;
}

if (logox > (canvas.width-(textWidth(logo)+textWidth(extension)))) {
  logox = canvas.width - (textWidth(logo)+textWidth(extension));
}

if (logox < 0) {
  logox = canvas.width + 10;
}

if (logoy > canvas.height) {
  logoy = canvas.height - 30;
}

if (logoy < 0) {
  logoy+=10;
}



}

function draw() {

  background('#02012F');
  // fill(random(0,255), random(0,255),random(0,255));

  if (mouseIsPressed) {
    for (let i=120; i>0; i-=1) {
      fill(255,255,255,120-i);
      circle(mouseX,mouseY,i)
      fill('#02012F');
      if (i > 1) {
      circle(mouseX,mouseY,i-1);
    }
    }
  // fill(220,220,200,80);
  // circle(mouseX,mouseY,100);
}

  textSize(20);

  hidden_text = "abu dhabi";

  fill('#02012F');

  wi = 0;
  
  for (let i=0; i<canvas.width; i+=(textWidth(hidden_text)*1.1)) {
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


  if (logox < 0 || logox > (canvas.width - (textWidth(logo)+textWidth(extension)))) {
    //console.log("entered logox");
    // ext_size = textWidth(extension);
    // xspeed = xspeed * -1;
    text_color = random(colors);
    ext_color = random(colors);
    extension = random(extensions);

    if (logox > (canvas.width - (textWidth(logo)+textWidth(extension)))) {
    logox = canvas.width - (textWidth(logo)+textWidth(extension));
    }

    xspeed = xspeed * -1;
  }

  else if (logoy < 0 || logoy > canvas.height) {
    //console.log("entered logoy"); 
    yspeed = yspeed * -1;
    text_color = random(colors);
    ext_color = random(colors);
    extension = random(extensions);
  }


}



function mouseClicked() {
  // clear();

   
}
