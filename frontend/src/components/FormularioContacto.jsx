import { useState } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    setConfirmacion("");

    const nuevosErrores = {};

    const nombreLimpio = nombre.trim();
    const emailLimpio = email.trim();
    const mensajeLimpio = mensaje.trim();

    if (nombreLimpio === "") {
      nuevosErrores.nombre = "Ingrese su nombre";
    } else if (nombreLimpio.length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres";
    }

    if (emailLimpio === "") {
      nuevosErrores.email = "Ingrese su email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio)) {
      nuevosErrores.email = "Ingrese un email válido";
    }

    if (mensajeLimpio === "") {
      nuevosErrores.mensaje = "Ingrese su mensaje";
    } else if (mensajeLimpio.length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }
    setErrores(nuevosErrores);

    if (nuevosErrores.nombre || nuevosErrores.email || nuevosErrores.mensaje) {
      return;
    }

    setConfirmacion("Formulario enviado correctamente.");
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <section className="card shadow-sm text-center">
      <div className="card-body p-4" >
        <h1 className="h3 mb-3">Formulario de contacto</h1>

        <p className="text-secondary">
          Completen los siguientes campos para preparar su mensaje.
        </p>

        {confirmacion && (
          <div className="alert alert-success" role="status">
            {confirmacion}
          </div>
        )}

        <form onSubmit={manejarEnvio} noValidate>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
              value={nombre}
              onChange={(evento) => {
                setNombre(evento.target.value);
                setConfirmacion("");
              }}
              placeholder="Ingrese su nombre"
              autoComplete="name"
              required
              aria-invalid={Boolean(errores.nombre)}
              aria-describedby={errores.nombre ? "error-nombre" : undefined}
            />

            {errores.nombre && (
              <div id="error-nombre" className="invalid-feedback">
                {errores.nombre}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errores.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(evento) => {
                setEmail(evento.target.value);
                setConfirmacion("");
              }}
              placeholder="email@correo.cl"
              autoComplete="email"
              required
              aria-invalid={Boolean(errores.email)}
              aria-describedby={errores.email ? "error-email" : undefined}
            />

            {errores.email && (
              <div id="error-email" className="invalid-feedback">
                {errores.email}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              className={`form-control ${errores.mensaje ? "is-invalid" : ""}`}
              value={mensaje}
              onChange={(evento) => {
                setMensaje(evento.target.value);
                setConfirmacion("");
              }}
              placeholder="Ingrese un mensaje de al menos 10 caracteres"
              required
              aria-invalid={Boolean(errores.mensaje)}
              aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
            />

            {errores.mensaje && (
              <div id="error-mensaje" className="invalid-feedback">
                {errores.mensaje}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-todos">
            Enviar!
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormularioContacto;
