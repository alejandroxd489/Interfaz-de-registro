const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    mensaje.innerHTML =
    "Usuario registrado correctamente";
});
