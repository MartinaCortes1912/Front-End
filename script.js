//API
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(producto => {
            console.log("Conexión con la API exitosa.")
               const catálogo = document.getElementById("catálogo");
               producto.forEach((producto) => {
               const nuevaTarjeta = document.createElement("div")
               nuevaTarjeta.classList.add ("card")
               nuevaTarjeta.innerHTML = `
                <img class="cardrow1" src="${producto.image}" alt="${producto.title}"></img>
                <p class="cardrow2">${producto.title}</p>   
                <p class="cardcolor">${producto.category}</p>
                <p class="cardrow3">${producto.price}</p>
                <button type="button" class="botónProducto" id="${producto.id}">+</button> `;

               catálogo.appendChild(nuevaTarjeta)
                });
            })        
            
            .catch(error=> {
                console.error("Error en la conexión con la API",error) 
                alert("El servidor está teniendo problemas de conectividad en el momento")
            })

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
};

document.getElementById("botónFomrulario").addEventListener("click", () => completarFormulario());

// Crear un ciclo que genere dinámicamente una lista de productos disponibles y los muestre en la consola.
// Crear un listado de productos incluidos en nuestro HTML generado por medio de una función en Js. 
// Crear de una función que cree un array de productos y los muestre en la página utilizando una plantilla HTML dinámica.








