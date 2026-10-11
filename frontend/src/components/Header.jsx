import { useState } from 'react'
import logo from "../img/logo.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)



  return (

    <header>
        <nav className="navbar navbar-expand-lg navbar-dark barracustom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img
                src={logo}
                alt="Logo"
                width="40"
                height="40"
                className="rounded-img"
                title="Logo"
                loading="lazy"
            /></a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" id="menu_inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="menu_mercado">Mercado</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="menu_noticias">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="menu_nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="menu_carrito">Carrito</a>
            </li>
          </ul>
        </div>
        <p className="nav-link mb-0" id="lead_info">La Tiendita - Landing Page</p>
      </div>
    </nav>
    </header>

     );
}

export default Header;
