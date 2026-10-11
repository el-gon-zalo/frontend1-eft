import ProductCard from "./ProductCard"

function ProductList({ productos, onProductoClick, cart, toggleCart }) {
  return (
    <div className="row g-4">
      {productos.map((producto) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={producto.id}>
          <ProductCard
            producto={producto}
            onProductoClick={onProductoClick}
            cart={cart}
            toggleCart={toggleCart}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductList