window.onload = () => {
  var element = document.getElementById('home');
  element.classList.add("showing");
}

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

  