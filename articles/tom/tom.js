function openPage(pageName,elmnt,color) {
    $('.container').fadeOut(1000);
    $('.fadein').fadeOut(1000);
    $('.fadein').fadeIn(1000);
    setTimeout(function(){
    var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      document.getElementById(pageName).style.display = "block";
      elmnt.style.backgroundColor = color;

    }, 1000); 

    }