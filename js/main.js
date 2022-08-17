// Variables

const contenedorProductos = document.querySelectorAll("#contenedorProductos")




fetch ('./json/productos.json')
.then(response => response.json())
.then (productos =>{
    productos.forEach((producto ) => {
        contenedorProductos.innerHTML += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src=${producto.img} alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${producto.nombre}</h5>
                        <!-- Product price-->
                        <h3>$${producto.precio}</h3>
                        <p>${producto.detalle}</p>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button onclick=agregarAlCarrito(${producto.id}) class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        
    });
})