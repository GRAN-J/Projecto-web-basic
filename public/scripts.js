// Detecta el scroll y agrega o elimina la clase "scrolled"
window.onscroll = function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Cambia el fondo cuando el scroll es mayor a los 50px
  } else {
    header.classList.remove("scrolled"); // Vuelve al fondo transparente cuando el scroll es menor a los 50px
  }
};

//Realiza las validaciones del formulario
document.querySelector("form").onsubmit = function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos."); // alerta para solicitar el rellenado de los campos
    event.preventDefault();
  } else if (!email.includes("@")) {
    alert("Por favor, introduce un correo válido."); //alerta en caso del que el correo no sea valido
    event.preventDefault();
  }
};

// Manipulacion del DOM agrega un mensaje de agradecimiento cuando se envia el formulario

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario real
  alert("Gracias por contactarnos. Pronto responderemos a tu mensaje.");
});

//servidor nodejs

const express = require("express");
const app = express();

app.use(express.static("public")); // Servir archivos estáticos desde "public"

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Teclado Mecánico Personalizado", price: 120 },
    { id: 2, name: "Keycaps Exclusivas", price: 60 },
    { id: 3, name: "Accesorios de Diseño", price: 35 },
  ]);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
