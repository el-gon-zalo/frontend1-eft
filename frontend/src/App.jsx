import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import CartSummary from './components/CartSummary.jsx'
import FormularioContacto from './components/FormularioContacto.jsx'

const API_URL = 'http://localhost:3000/api/productos'
const STORAGE_KEY = 'cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [cart, setCart] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const toggleCart = (product) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === product.id)
        ? prevCart.filter((item) => item.id !== product.id)
        : [...prevCart, product]
    )
  }

  useEffect(() => {
    fetch(API_URL)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('Error al obtener los productos')
        return respuesta.json()
      })
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
      .catch((error) => {
        setError(error.message)
        setCargando(false)
      })
  }, [])

  return (
    <div className="app">
      <Header />

      <main className="container py-4">
        <Hero />

        {cargando && (
          <div className="text-center py-5">
            <div className="spinner-border text-duoc" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3 text-muted">Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-warning" role="alert">
            No se pudo cargar la lista de productos desde{' '}
            <code>http://localhost:3000</code>. ({error})
          </div>
        )}

        {!cargando && !error && (
          <ProductList
            productos={productos}
            onProductoClick={setProductoSeleccionado}
            cart={cart}
            toggleCart={toggleCart}
          />
        )}

        {/* Después de los productos */}
        <CartSummary cart={cart} />

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <FormularioContacto />
          </div>
        </div>

      </main>


      <Footer />

      <ProductModal
        producto={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
      />
    </div>
  )
}

export default App