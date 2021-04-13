window.onscroll = function () { stickMenu() };

var header = document.getElementById("mainNav");
var logo2 = document.getElementById('logo2');

var sticky = header.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo2.classList.add('logo-view');
  } else {
    header.classList.remove("sticky");
    logo2.classList.remove('logo-view');
  }
}