document.querySelector('#menu-click').onclick = function() {
  
  document.getElementById("body").classList.toggle('translate-nav-mob');
}

window.onclick = function(event) { 
  if (!event.target.matches('.menu-menu-a')) 
  {
    if (document.getElementById("body").classList.contains('translate-nav-mob')) {
      document.getElementById("body").classList.remove('translate-nav-mob');
    }
  }
}
