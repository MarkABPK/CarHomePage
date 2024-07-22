//manual changing//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("coverpic");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var form_container = document.getElementById("form-container");

        window.onclick = function(close) {
            if (close.target == form_container) {
                form_container.style.display = "none";
            }
        }




function opensidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function closesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

function openSignInPage(){
  const signinPage = document.getElementById('form-container');
  signinPage.style.display = 'block'
}
