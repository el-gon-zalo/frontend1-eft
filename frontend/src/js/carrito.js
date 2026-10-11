let productos = [];

const leerCarrito = () => {
  if (localStorage.getItem("carrito")) {
    return JSON.parse(localStorage.getItem("carrito"));
  } else {
    localStorage.setItem("carrito", JSON.stringify([]));
    return [];
  }
};

const agregarAlCarrito = (producto) => {
  const carrito = leerCarrito();
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const eliminarDelCarrito = (productoId) => {
  const carrito = leerCarrito();
  const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
};

const limpiarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify([]));
};

const obtenerProductos = () => {
  productos = [];
  fetch("/data/productos.json")
    .then((response) => response.json())
    .then((data) => {
      productos = data;
      eventoAgregarCarrito();
    })
    .catch((error) => {
      console.error("Error al cargar los productos:", error);
    });
};

const eventoAgregarCarrito = () => {
  const botonesAgregar = document.querySelectorAll(".btn.btn-primary");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      const productoId = boton.id;
      const producto = productos.find((p) => p.id === productoId);
      if (producto) {
        const repetido = leerCarrito().some((p) => p.id === productoId);
        if (!repetido) {
          agregarAlCarrito(producto);
          alert("Producto agregado al carrito");
        }
      }
    });
  });
};

const mostrarCarrito = (divCarrito) => {
  const carrito = leerCarrito();
  divCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("col");
    divProducto.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen.src}" class="card-img-top" alt="${producto.imagen.alt}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <button class="btn btn-danger" id="eliminar-${producto.id}">Eliminar</button>
        </div>
      </div>
    `;
    divCarrito.appendChild(divProducto);

    const botonEliminar = document.getElementById(`eliminar-${producto.id}`);
    botonEliminar.addEventListener("click", () => {
      if (confirm("Está seguro/a de eliminar " + producto.titulo + "?")) {
        eliminarDelCarrito(producto.id);
        mostrarCarrito(divCarrito);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  obtenerProductos();
  const divCarrito = document.getElementById("productos-carrito");
  if (divCarrito) {
    mostrarCarrito(divCarrito);
  }
});
