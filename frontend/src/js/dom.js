const restablecerColores = () => {
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => {
    p.style.color = "";
  });
};


const mostrarProductos = (productos) => {
  const divProductos = document.getElementById("productos");
  divProductos.innerHTML = "";
  productos.forEach(producto => {
    const tarjeta = `
          <article class="col" id="${producto.id}">
            <div class="card h-100 shadow-sm">
              <img src="${producto.imagen.src}" class="card-img-top" alt="${producto.imagen.alt}">
              <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" id="${producto.id}" class="btn btn-primary">${producto.boton.texto}</a>
              </div>
            </div>
          </article>
    `;
    divProductos.innerHTML += tarjeta;
  });
};

const cargarProductos = () => {
  const divProductos = document.getElementById("productos");
  divProductos.innerHTML = "<p>Cargando productos...</p>";

  fetch("/data/productos.json")
    .then(response => response.json())
    .then(data => {
      mostrarProductos(data);
    })
    .catch(error => {
      divProductos.innerHTML = "<p>Error al cargar los productos.</p>";
      console.error("Error al cargar los productos:", error);
    });

};


//Lo mismo ahora con noticias:

const mostrarNoticias = (noticias) => {
  const divNoticias = document.getElementById("noticias");
  divNoticias.innerHTML = "";

  noticias.forEach(noticia => {
    const tarjeta = `
      <article class="col">
        <div class="card h-100 shadow-sm">
          <img 
            src="${noticia.imagen.src}" 
            class="card-img-top" 
            alt="${noticia.imagen.alt}"
          >

          <div class="card-body">
            <h5 class="card-title">${noticia.titulo}</h5>
            <p class="card-text">${noticia.descripcion}</p>
          </div>
        </div>
      </article>
    `;

    divNoticias.innerHTML += tarjeta;
  });
};


const cargarNoticias = () => {
  const divNoticias = document.getElementById("noticias");

  divNoticias.innerHTML = "<p>Cargando noticias...</p>";

  fetch("/data/noticias.json")
    .then(response => response.json())
    .then(data => {
      mostrarNoticias(data);
    })
    .catch(error => {
      divNoticias.innerHTML = "<p>Error al cargar las noticias.</p>";
      console.error("Error al cargar las noticias:", error);
    });
};




document.addEventListener("DOMContentLoaded", function() {
  const areaProductos = document.getElementById("area-productos");
  const productos = document.getElementById("productos");

  // Eventos
  const menuInicio = document.getElementById("menu_inicio");
  const menuMercado = document.getElementById("menu_mercado");
  const menuNoticias = document.getElementById("menu_noticias");
  const menuNosotros = document.getElementById("menu_nosotros");
  const menuCarrito = document.getElementById("menu_carrito");
  const leadInfo = document.getElementById("lead_info");

  const leadDefault = leadInfo.innerHTML;

  menuInicio.addEventListener("mouseover", () => {
    leadInfo.innerHTML="Página principal.";
  });
  menuInicio.addEventListener("mouseout", () => {
    leadInfo.innerHTML = leadDefault;
  });

  menuMercado.addEventListener("mouseover", () => {
    leadInfo.innerHTML="Descubre el mercado interactivo de videojuegos. ¡Compra y vende aquí!.";
  });
  menuMercado.addEventListener("mouseout", () => {
    leadInfo.innerHTML = leadDefault;
  });

  menuNoticias.addEventListener("mouseover", () => {
    leadInfo.innerHTML="Explora todas las novedades del mundo Gaming aquí.";
  });
  menuNoticias.addEventListener("mouseout", () => {
    leadInfo.innerHTML = leadDefault;
  });

   menuNosotros.addEventListener("mouseover", () => {
    leadInfo.innerHTML="Descubre quiénes somos. Ponte en contacto con nosotros.";
  });
  menuNosotros.addEventListener("mouseout", () => {
    leadInfo.innerHTML = leadDefault;
  });

    menuCarrito.addEventListener("mouseover", () => {
    leadInfo.innerHTML="Revisa tu carrito de compras.";
  });
  menuCarrito.addEventListener("mouseout", () => {
    leadInfo.innerHTML = leadDefault;
  });

 const noticias = document.getElementById("noticias");

if (productos) {
  cargarProductos();
}

if (noticias) {
  cargarNoticias();
}
  

});