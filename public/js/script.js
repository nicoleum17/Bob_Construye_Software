const botones = document.querySelectorAll(".add-to-cart");
let total = 0;
let iva = 0;

//Obtenemos elementos desde el HTML
const totalCarrito = document.getElementById("total-carrito");
const listaCarrito = document.getElementById("elemento-carrito");
const ivaCarrito = document.getElementById("iva-carrito");
const boton = document.getElementById("boton-ver-carrito");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    let precio = parseFloat(boton.getAttribute("data-precio"));
    let nombre = boton.getAttribute("instrumento");

    //Checamos la cantidad de elementos
    let inputCantidad = boton.previousElementSibling;
    let cantidad = parseInt(inputCantidad.value);

    //Verificar cantidad
    if (cantidad < 1 || isNaN(cantidad)) {
      alert("Por favor, ingrese una cantidad válida.");
      return;
    }

    //Precio según la cantidad de productos
    let subtotal = precio * cantidad;

    //Total
    total += subtotal;
    iva = total * 0.16;
    ivaCarrito.textContent = iva.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);

    //Lista de elementos del carrito
    let nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = `${nombre} x${cantidad} - $${subtotal}`;
    listaCarrito.appendChild(nuevoElemento);
  });
});

document
  .getElementById("button-ver-carrito")
  .addEventListener("click", function () {
    let carrito = document.getElementById("carrito");
    let boton = document.getElementById("button-ver-carrito");

    //Cambiamos a que se vea el carrito
    carrito.classList.toggle("is-hidden");

    //Cambiamos el texto
    boton.textContent = carrito.classList.contains("is-hidden")
      ? "Ver Carrito"
      : "Ocultar Carrito";
  });
