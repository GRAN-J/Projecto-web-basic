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
