//API
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(producto => {
                const catálogo = document.getElementById("catálogo");
                if (catálogo) {
                producto.forEach((producto) => {
                const nuevaTarjeta = document.createElement("div")
                nuevaTarjeta.classList.add ("card")
    //               nuevaTarjeta.setAttribute("id",`"${producto.id}"`) 
                nuevaTarjeta.innerHTML = `
                    <img class="cardrow1" src="${producto.image}" alt="${producto.title}"></img>
                    <p class="cardrow2">${producto.title}</p>   
                    <p class="cardcolor">${producto.category}</p>
                    <p class="cardrow3">$ ${producto.price}</p>
                    <button type="button" class="botónProducto" onClick="añadirCarrito()">+</button> `;

                    catálogo.appendChild(nuevaTarjeta)
                    }); }
        
                // Mostrar algunos productos (Llamado) 
                const index = document.getElementById("index");
                if (index) {
                    mostrarAlgunos(index,producto) }
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


function añadirCarrito(event) {
    var productoCarrito = {
        id: event.target.getAttribute(producto.id)}  
    let nuevoCarrito = JSON.parse(localStorage.getItem(carrito)) || [];
    nuevoCarrito.push(productoCarrito)  
    localStorage.setItem(carrito, JSON.stringify(nuevoCarrito))
    console.log(localStorage(carrito))
}


function eliminarCarrito () {

}

function vaciarCarrito () {

}


// Mostrar algunos productos (Función)
function mostrarAlgunos (lugar, recurso) {
for (var i= 0; i < 4; i++) {
    const imagen = document.createElement("img");   
    imagen.src = recurso[i].image
    imagen.style.width = "25%";

    lugar.appendChild(imagen);
};}

 









