const botones = document.querySelectorAll(".add-to-cart");
let total = 0;
let iva = 0;

// Obtenemos elementos desde el HTML
const totalCarrito = document.getElementById("total-carrito");
const listaCarrito = document.getElementById("elemento-carrito");
const ivaCarrito = document.getElementById("iva-carrito");

botones.forEach((boton) => {
  boton.addEventListener("click", async () => {
    let precio = parseFloat(boton.getAttribute("data-precio"));
    let nombre = boton.getAttribute("instrumento");

    let inputCantidad = boton.previousElementSibling;
    let cantidad = parseInt(inputCantidad.value);

    if (cantidad < 1 || isNaN(cantidad)) {
      alert("Por favor, ingrese una cantidad válida.");
      return;
    }

    let subtotal = precio * cantidad;
    total += subtotal;
    iva = total * 0.16;
    ivaCarrito.textContent = iva.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);

    let nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = `${nombre} x${cantidad} - $${subtotal}`;
    listaCarrito.appendChild(nuevoElemento);

    // 📌 Enviar datos al servidor
    try {
      let response = await fetch("/productos/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio, cantidad }), // 📌 Corregido
      });

      let result = await response.json();
      console.log("Servidor respondió:", result);
    } catch (error) {
      console.error("Error al enviar producto al servidor:", error);
    }
  });
});
