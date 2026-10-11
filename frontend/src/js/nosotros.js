const validarCampo = (campo, condicion) => {

campo.classList.toggle("is-valid", condicion);
campo.classList.toggle("is-invalid", !condicion);

return condicion;

};

document.addEventListener("DOMContentLoaded", function () {


const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const area = document.getElementById("area");
const asunto = document.getElementById("asunto");
const descripcion = document.getElementById("descripcion");


const validarFormulario = () => {

    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nombreValido = validarCampo(
        nombre,
        nombre.value.trim() !== "" &&
        nombre.value.trim().length <= 100
    );

    const asuntoValido = validarCampo(
        asunto,
        asunto.value.trim() !== "" &&
        asunto.value.trim().length <= 150
    );

    const areaValida = validarCampo(
        area,
        area.value !== ""
    );

    const emailValido = validarCampo(
        email,
        email.value.trim() !== "" &&
        expresionEmail.test(email.value.trim())
    );

    const descripcionValida = validarCampo(
        descripcion,
        descripcion.value.trim() !== ""
    );

    return (
        nombreValido &&
        asuntoValido &&
        areaValida &&
        emailValido &&
        descripcionValida
    );
};


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    if (validarFormulario()) {

        formulario.reset();

        document.querySelectorAll(".is-valid").forEach((campo) => {
            campo.classList.remove("is-valid");
        });

        // Mostrar Toast de Bootstrap
        const toastElemento = document.getElementById("toastFormulario");

        const toast = new bootstrap.Toast(toastElemento);

        toast.show();
    }

});



[nombre, email, area, asunto, descripcion].forEach((campo) => {

    campo.addEventListener("input", validarFormulario);
    campo.addEventListener("change", validarFormulario);

});

});
