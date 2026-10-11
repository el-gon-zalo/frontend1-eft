function ProductCard({ producto, onProductoClick, cart, toggleCart }) {
  const enCarrito = cart.some((item) => item.id === producto.id)

  return (
    <div className="card h-100 product-card">
      <img
        src={producto.image}
        className="card-img-top product-image"
        alt={producto.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text text-muted flex-grow-1">
          {producto.description}
        </p>
        <p className="product-price">Precio: {producto.price}</p>

        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-todos"
            onClick={() => onProductoClick(producto)}
          >
            Ver producto
          </button>

          <button
            type="button"
            className={`btn ${enCarrito ? 'btn-outline-danger' : 'btn-todos'}`}
            onClick={() => toggleCart(producto)}
          >
            {enCarrito ? 'Quitar del carrito' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard