//Formulario Completo
function completarFormulario() {

    let nombre = document.getElementById("Nombre").value
    let email = document.getElementById("Email").value
    let mensaje = document.getElementById("Mensaje").value
    let nombreValido = document.getElementById("Nombre").checkValidity()
    let emailValido = document.getElementById("Email").checkValidity()

    if (nombre && email && mensaje && nombreValido && emailValido) 
        console.log("Se ha enviado el formulario correctamente completado.")
        else
        alert("El formulario no ha sido completado correctamente.")
}

document.getElementById("botónFomrulario").addEventListener("click", () => completarFormulario())


