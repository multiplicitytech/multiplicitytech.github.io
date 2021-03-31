function switcheroo() {
   var sideOne = document.getElementById("sideOne"); 
   var sideTwo = document.getElementById("sideTwo");

   sideOne.style.display = (
       sideOne.style.display == "none" ? "block" : "none"); 
   sideTwo.style.display = (
       sideTwo.style.display == "none" ? "block" : "none"); 
}