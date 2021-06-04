
function btt() {
	setTimeout(() => {
		let boomTssTaks = document.getElementsByClassName('boomTssTak');
		for (let i = 1; i < 8; i++) {
			setTimeout(function() {boomTssTaks[i-1].style.visibility = 'visible'}, i*750);
		}
	}, 250);
}

 function switchsides(card) {
    var card = document.querySelector(card);
    card.classList.toggle('is-flipped');
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
	degree += e.deltaY * 0.10;
	if (degree >= 360) {
		degree = degree % 360;
	}
  e.currentTarget.children[0].style.transform = `rotateX(${degree}deg)`;
}

var tabledata = [
	{title:"Dreams", artist:"Fleetwood Mac", year:1977, tiktok:620200, billboard:1},
	{title:"You Broke Me First", artist:"Tate McRae", year:2021, tiktok:631400, billboard:17},
	{title:"Savage Love (Laxed - Siren Beat)", artist:"Jawsh 685 x Jason Derulo", year:2020, tiktok:2500000, billboard:1},
	{title:"Say So", artist:"Doja Cat", year:2020, tiktok:14700000, billboard:1},
	{title:"Supalonely", artist:"BENEE", year:2019, tiktok:8000000, billboard:39},
	{title:"The Box", artist:"Roddy Ricch", year:2019, tiktok:1800000, billboard:1},
	{title:"Out West", artist:"JACKBOYS & Travis Scott", year:2020, tiktok:12600000, billboard:38},
	{title:"Savage", artist:"Megan Thee Stallion", year:2020, tiktok:24700000, billboard:1},
	{title:"Tap In", artist:"Saweetie", year:2020, tiktok:5600000, billboard:20},
	{title:"Mood", artist:"24kGoldn & Iann Dior", year:2020, tiktok:3100000, billboard:1},
];

// //initialize table
var table = new Tabulator("#example", {
    data:tabledata, //assign data to table
    responsiveLayout: true,
    layout:"fitColumns", //fit columns to width of table (optional)

    columns:[ //Define Table Columns
        {title:"Title", field:"title"},
        {title:"Artist", field:"artist"},
        {title:"Year", field:"year"},
        {title:"TikTok Videos", field:"tiktok", formatter:"money", formatterParams:{
			thousand:",",
			precision:0,
		}},
        {title:"Billboard Hot 100 Peak Position", field:"billboard", formatter:"money", formatterParams:{
			symbol:"#",
			precision:0,
		}},
    ],
});

document.addEventListener('DOMContentLoaded', btt);
document.addEventListener('DOMContentLoaded', playback);

document.querySelectorAll('.cube-wrap').forEach((wrap) => {
	wrap.addEventListener('wheel', spin);
});