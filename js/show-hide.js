window.onload = () => {
  var element = document.getElementById('home');
  element.classList.add("showing");
}
const navLinks = document.querySelectorAll('.nav-item');
  const menuToggle = document.querySelector('#offcanvasNavbar');
  navLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
      $("button.navbar-toggler").click();
    });
  });
function openCard(linkname) {
  current = document.getElementsByClassName("showing");
  for (let i=0; i< current.length ; i++) {
    current[i].classList.add("hiding");
    current[i].classList.remove("showing");
  }
  card = document.getElementById(linkname);
  card.classList.add("showing");
  card.classList.remove("hiding");
  
}