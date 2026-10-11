import carrito from "../img/carrito.png";

function parsePrice(price) {
  const value = Number(String(price).replace(/[^0-9]+/g,""));
  return Number.isNaN(value) ? 0 : value;
}

function CartSummary({ cart }) {
  const cantidad = cart.length
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);


  if (cantidad === 0) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-bold">Carrito de Compras</h2>

             <div className="container text-center py-4">
            <img
                    src={carrito}
                    alt="Cogo"
                    width="100"
                    height="100"
                    title="Logo"
                    loading="lazy"
            />
            </div>

            <p className="text-muted">No hay productos en el carrito.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Carrito de Compras</h2>
        </div>

        <div className="container text-center py-4">
            <img
                    src={carrito}
                    alt="Cogo"
                    width="100"
                    height="100"
                    title="Logo"
                    loading="lazy"
            />
            </div>


        <div className="card shadow-sm">
          <div className="card-body">
            <p className="mb-2">
              <strong>Cantidad de productos: </strong> {cantidad}
            </p>
            <ul className="mb-2">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.price}
                </li>
              ))}
            </ul>
            <div className="mb-0">
              <strong>Total: </strong> $ {total.toLocaleString('es-CL')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default CartSummary;