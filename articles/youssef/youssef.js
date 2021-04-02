function switcheroo(val) {

	if(val == 0) {
		console.log("val = 0");
		var sideOne = document.getElementById("sideOne0"); 
		var sideTwo = document.getElementById("sideTwo0");

		sideOne.style.display = (
		   sideOne.style.display == "none" ? "block" : "none"); 
		sideTwo.style.display = (
		   sideTwo.style.display == "none" ? "block" : "none"); 	
	}
	else if(val == 1) {
		console.log("val = 1");
		var sideOne = document.getElementById("sideOne1"); 
		var sideTwo = document.getElementById("sideTwo1");

		sideOne.style.display = (
		   sideOne.style.display == "none" ? "block" : "none"); 
		sideTwo.style.display = (
		   sideTwo.style.display == "none" ? "block" : "none"); 	
	}

}