import logo from "../img/logo.png";

function Hero() {
  return (

    <section id="inicio" className="bg-light py-5">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                <p className="text-primary fw-semibold mb-2">¡Todo Videojuegos!</p>
                <h1 className="display-3 fw-bold">La Tiendita</h1>
                <p className="lead">Encuentra aquí todo lo relacionado a videojuegos.</p>
                </div>
            </div>
            </div>

            <div className="container text-center py-4">
            <img
                    src={logo}
                    alt="Logo"
                    width="150"
                    height="150"
                    className="rounded-img"
                    title="Logo"
                    loading="lazy"
            />
            </div>

    </section>


    )

}

export default Hero;