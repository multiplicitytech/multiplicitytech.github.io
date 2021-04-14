function btt() {
	setTimeout(() => {
		let boomTssTaks = document.getElementsByClassName('boomTssTak');
		for (let i = 1; i < 8; i++) {
			setTimeout(function() {boomTssTaks[i-1].style.visibility = 'visible'}, i*750);
		}
	}, 250);
}

function playback() {
	setInterval(() => {
		let boomTssTaks = document.getElementsByClassName('boomTssTak');
		for (let i = 0; i < 7; i++) {
			boomTssTaks[i].style.visibility = 'hidden';
		}
		btt();
	}, 10000);
}

var degree = 15;
function spin(e) {
	e.preventDefault();
	degree += e.deltaY * 0.1;
	if (degree >= 360) {
		degree = degree % 360;
	}
  e.currentTarget.children[0].style.transform = `rotateX(${degree}deg)`;
}

document.addEventListener('DOMContentLoaded', btt);
document.addEventListener('DOMContentLoaded', playback);
document.querySelectorAll('.cube-wrap').forEach((wrap) => {
	wrap.addEventListener('wheel', spin);
});