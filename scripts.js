// Detecta el scroll y agrega o elimina la clase "scrolled"
window.onscroll = function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Cambia el fondo cuando el scroll es mayor a los 50px
  } else {
    header.classList.remove("scrolled"); // Vuelve al fondo transparente cuando el scroll es menor a los 50px
  }
};
