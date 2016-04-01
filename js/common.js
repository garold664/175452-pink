var close = document.querySelector(".page-header__nav-button");
var open = document.querySelector(".page-header__nav-button_closed");
var pageNav = document.querySelector(".page-nav");
var pageHeadLine = document.querySelector(".page-header__head-line");

close.addEventListener("click", function(event) {
  event.preventDefault();
  pageNav.classList.toggle("page-nav_closed");
  close.classList.toggle("page-header__nav-button_closed");
  pageHeadLine.classList.toggle("page-header__head-line_closed");
});


