// Aqui Detecta el scroll y agrega o elimina la clase "scrolled"
window.onscroll = function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Cambia el fondo cuando el scroll es mayor a los 50px
  } else {
    header.classList.remove("scrolled"); // Vuelve al fondo transparente cuando el scroll es menor a los 50px
  }
};

//Con esto realiza las validaciones del formulario
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

// esto es la Manipulacion del DOM agrega un mensaje de agradecimiento cuando se envia el formulario

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario real
  alert("Gracias por contactarnos. Pronto responderemos a tu mensaje.");
});

// Obtener datos de la API y mostrarlos en la página
fetch("/api/products")
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Limpiar el contenedor

    products.forEach((product) => {
      // Crear un elemento HTML para cada producto
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-item");
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
      `;
      productsContainer.appendChild(productDiv); // Agregarlo al DOM
    });
  })
  .catch((error) => console.error("Error al cargar los productos:", error));
