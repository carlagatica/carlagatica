
  
  function openGallery(linkname) {
    current = document.getElementsByClassName("muestra");
    for (let i=0; i< current.length ; i++) {
      current[i].classList.add("oculta");
      current[i].classList.remove("muestra");
    }
    card = document.getElementById(linkname);
    card.classList.add("muestra");
    card.classList.remove("oculta");
  };