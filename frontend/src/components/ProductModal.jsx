import { useRef, useEffect } from "react"
import { Modal } from "bootstrap"

function ProductModal({ producto, onClose }) {
  const modalRef = useRef(null)
  const modalInstanceRef = useRef(null)
  const onCloseRef = useRef(onClose)

  // Mantener siempre la última versión de onClose
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  // Crear la instancia una sola vez y escuchar el cierre
  useEffect(() => {
    const el = modalRef.current
    const handleHidden = () => onCloseRef.current()

    modalInstanceRef.current = new Modal(el)
    el.addEventListener("hidden.bs.modal", handleHidden)

    return () => {
      el.removeEventListener("hidden.bs.modal", handleHidden)
      modalInstanceRef.current?.dispose()
    }
  }, [])

  // Abrir cuando haya un producto seleccionado
  useEffect(() => {
    if (producto) modalInstanceRef.current?.show()
  }, [producto])

  return (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex="-1"
      aria-labelledby="productoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {producto && (
            <>
              <div className="modal-header">
                <h5 className="modal-title" id="productoModalLabel">
                  {producto.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Cerrar"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={producto.image}
                  className="img-fluid rounded modal-image mb-3"
                  alt={producto.title}
                />
                <h6>Descripción</h6>
                <p className="text-muted">{producto.description}</p>
                <p className="product-price mb-0">Precio: {producto.price}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-todos"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductModal