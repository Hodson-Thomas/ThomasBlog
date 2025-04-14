// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


document.getElementById("expand-header").addEventListener("click", () => {
  console.log("Hello");
  document.getElementById("primary-navigation").classList.toggle("visible");
});