// function randcolor() {

// 	var colors = ['#20b857', '#cc1b2c', '#cc8200', '#c200cc', '#0500cc', '00cca4'];

// 	const curr_color = colors[Math.floor(Math.random() * colors.length)];

// 	$('.switch').css('color', curr_color);

// 	var links = document.getElementById('ethan-article').getElementsByTagName('a');

// 	for (let i =0; i<links.length;i++) {
// 			links[i].style.color = curr_color;
// 			console.log(curr_color);
// 	}

// }

function example1() {
	$('#example1').css('display','block');
	$('#example2').css('display','none');
	$('#example3').css('display','none');

	$('#header1').css('color','#1DB954');
	$('#header2').css('color','grey');
	$('#header3').css('color','grey');
}

function example2() {
	$('#example1').css('display','none');
	$('#example2').css('display','block');
	$('#example3').css('display','none');

	$('#header1').css('color','grey');
	$('#header2').css('color','#1DB954');
	$('#header3').css('color','grey');
}

function example3() {
	$('#example1').css('display','none');
	$('#example2').css('display','none');
	$('#example3').css('display','block');

	$('#header1').css('color','grey');
	$('#header2').css('color','grey');
	$('#header3').css('color','#1DB954');
}