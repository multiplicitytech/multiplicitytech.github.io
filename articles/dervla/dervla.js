function mute(){
    document.body.style.background = '#fffaf0';
    $('#bigdiv').css('color', 'white');
    $('p').css('color', 'black');
    $('h4').css('color', '#098500');
    $('.mis').css('text-decoration', 'none');
    $('#about').css('color', '#098500');
    $('#multi').css('color', '#098500');
    $('#exten').css('color', '#ffa200');
    // $('#toggle').css("background-image", "url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(9, 133, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important");
    document.getElementById('multi').setAttribute("class", "navbar2-brand");
    document.getElementById('about').setAttribute("class", "nav2-link");
    $('.articleTitle').css('color', '#098500');
    document.getElementById('sticky-footer').style.cssText= 'background-color:black !important';
    document.getElementById('social1').setAttribute("class", "white-orange-filter");
    document.getElementById('social2').setAttribute("class", "white-orange-filter");
    document.getElementById('social3').setAttribute("class", "white-orange-filter");
    document.getElementById('social4').setAttribute("class", "white-orange-filter");
    document.getElementById("mute").style.display = "none";
    document.getElementById("unmute").style.display = "";
  }  
  
  function unmute(){
    document.body.style.background = '#01002d';
    $('p').css('color', 'white');
    $('h4').css('color', '#3833ff');
    $('.mis').css('text-decoration', 'underline wavy #cc1b2c');
    $('#about').css('color', '#3833ff');
    $('#multi').css('color', '#3833ff');
    $('#exten').css('color', '#ff2138');
    document.getElementById('multi').setAttribute("class", "navbar-brand");
    document.getElementById('about').setAttribute("class", "nav-link");
    $('.articleTitle').css('color', '#3833ff');
    document.getElementById('sticky-footer').style.cssText= 'background-color:white !important';
    document.getElementById('social1').setAttribute("class", "black-blue-filter");
    document.getElementById('social2').setAttribute("class", "black-blue-filter");
    document.getElementById('social3').setAttribute("class", "black-blue-filter");
    document.getElementById('social4').setAttribute("class", "black-blue-filter");
    document.getElementById("unmute").style.display = "none";
    document.getElementById("mute").style.display = "";
  
  }  

  jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({
            "position" : "relative"
        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left : -5
            }, 10).animate({
                left : 0
            }, 50).animate({
                left : 5
            }, 10).animate({
                left : 0
            }, 50);
        }
    });
    return this;
}
setInterval(function() {
    $('#mute').shake();
}, 4000);