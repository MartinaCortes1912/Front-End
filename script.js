//API
document.addEventListener('DOMContentLoaded', () => {
    const estoyCarrito = document.getElementById("carrito");
    if (estoyCarrito) { cargarCarrito() }
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(productos => {
                const catálogo = document.getElementById("catálogo");
                if (catálogo) {
                    productos.forEach((producto) => {
                    const nuevaTarjeta = document.createElement("div")
                    nuevaTarjeta.classList.add ("card")
                
                    nuevaTarjeta.innerHTML = `
                        <img class="cardrow1" src="${producto.image}" alt="${producto.title}"></img>
                        <p class="cardrow2">${producto.title}</p>   
                        <p class="cardcolor">${producto.category}</p>
                        <p class="cardrow3">$ ${producto.price}</p>`;

                    const botón = document.createElement("button")
                    botón.type = "button"
                    botón.classList.add ("botónProducto")
                    botón.textContent= "+"
                    botón.addEventListener('click', () => añadirCarrito(producto));

                    nuevaTarjeta.appendChild(botón);

                    catálogo.appendChild(nuevaTarjeta)
                    }); }
        
                // Mostrar algunos productos (Llamado) 
                const index = document.getElementById("index");
                if (index) {
                    mostrarAlgunos(index,productos) }
                })

                .catch(error=> {
                    console.error("Error:",error) 
                    alert("El servidor está teniendo problemas de conectividad en el momento")
                })
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




//CARRITO
function cargarCarrito() {
    let lista = document.getElementById("carrito")
    let miLista = document.getElementById("miCarrito")
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito)  {
    lista.innerHTML= ``

    const botónLimpiar = document.createElement("button")
    botónLimpiar.type = "button"
    botónLimpiar.id = "botónVaciar"
    botónLimpiar.textContent= "Vaciar mi carrito"
    botónLimpiar.addEventListener('click', () => vaciarCarrito());

    miLista.appendChild(botónLimpiar);  

    for (var i= 0; i < carrito.length; i++) {
    let item = document.createElement("li")
    item.textContent = "$ " + carrito[i].precio + "    -    " + carrito[i].nombre

    const botón = document.createElement("button")
    botón.type = "button"
    botón.textContent= "  -  "
    botón.addEventListener('click', () => eliminarCarrito(carrito[i]));

    item.appendChild(botón);

    lista.appendChild(item)  
}
    } else {
    lista.innerHTML= `<li>Tu carrito está vacío.</li>`
    }
}


function añadirCarrito(sumado) {
    var productoAñadido = { id: sumado.id, nombre: sumado.title, precio: sumado.price}
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(productoAñadido)  
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(localStorage.getItem("carrito"))

}


function eliminarCarrito (eliminado) {

}

function vaciarCarrito () {
    localStorage.clear()
    const botónVaciar = document.getElementById("botónVaciar");
    botónVaciar.remove();
    cargarCarrito()
}


// Mostrar algunos productos (Función)
function mostrarAlgunos (lugar, recurso) {
for (var i= 0; i < 4; i++) {
    const imagen = document.createElement("img");   
    imagen.src = recurso[i].image
    imagen.style.width = "25%";

    lugar.appendChild(imagen);
};}

 









