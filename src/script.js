
var colors = ['#CC1B2C', '#0DB000', '#CC8200', '#C200CC', '#0600FF', '#B8CC00', '#F533FF', '#40E333', '#FF2138'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


//add randomization
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

//     ind = Math.floor(Math.random() * this.toRotate.length-1) + 1;


//todo: randomize order of extensions
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
var that = this;
var delta = 300 - Math.random() * 100;

if (this.isDeleting) { delta /= 2; }

if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
    var color_index = Math.floor(Math.random() * colors.length-1) + 1;
    this.el.style.color = colors[color_index];
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
}


setTimeout(function() {
    that.tick();
}, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');

  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    var randRotate = JSON.parse(toRotate);

    for(let x = (randRotate.length - 1); x > 0; x--) {
      const y = Math.floor(Math.random() * x);
      const temp = randRotate[x];
      randRotate[x] = randRotate[y];
      randRotate[y] = temp;
  }

  if (toRotate) {
      new TxtRotate(elements[i], randRotate, period);
  }
}
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};