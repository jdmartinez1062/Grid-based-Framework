document.getElementById("icon-div").onmouseover = function() {mouseOver()};
document.getElementById("icon-div").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("icon-div").classList.toggle('translate-foot-mob');

}

function mouseOut() {
  document.getElementById("icon-div").classList.toggle('translate-foot-mob');

}