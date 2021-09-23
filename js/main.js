const producto1 = new Producto('Labial Rojo', 950, 200, "img/producto1.jpg");
const producto2 = new Producto('Delineador', 7000, 100, "img/producto2.jpg");
const producto3 = new Producto('Sombras', 1200, 200, "img/producto3.jpg");
const producto4 = new Producto('Iluminador', 600, 50, "img/producto4.jpg");
const producto5 = new Producto('Iluminador', 600, 50, "img/producto5.jpg");
const producto6 = new Producto('Iluminador', 600, 50, "img/producto6.jpg");
const producto7 = new Producto('Iluminador', 600, 50, "img/producto7.jpg");
const producto8 = new Producto('Iluminador', 600, 50, "img/producto8.jpg");
const producto9 = new Producto('Iluminador', 600, 50, "img/producto9.jpg");
const producto10 = new Producto('Iluminador', 600, 50, "img/producto10.jpg");
const producto11 = new Producto('Iluminador', 600, 50, "img/producto11.jpg");
const producto12 = new Producto('Iluminador', 600, 50, "img/producto12.jpg");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];
let carrito =[];


let acumulador = ``;
let productosCarrito =``;

productos.forEach((producto) => {
    acumulador += `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top" src="${producto.img}" alt="..." />                            
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder"> ${producto.nombre} </h5>
                <p> $ ${producto.precio} </p>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"> <button class="btn btn-outline-dark mt-auto" href="#" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
            </div>
        </div>

    </div>
</div>`;
})




document.getElementById('productos').innerHTML = acumulador;

function agregarAlCarrito(title){
    const productoEncontrado = productos.find(productos => productos.nombre === title )
    carrito.push(productoEncontrado);

    document.getElementById('contador-carrito').innerHTML = carrito.length

    

    console.log(carrito)
}

$('#motrar-carrito').prepend(' <p> Cart <span id="contador-carrito"  class=" contador adge bg-dark text-white ms-1 rounded-pill">0</span> </p>')

$(".contador").click( function (){
    
    carrito.forEach((productoSeleccionado) => {
        productosCarrito += `<h5> ${productoSeleccionado.nombre} </h5>`;
    })
    document.getElementById('productos-carrito').innerHTML = productosCarrito;

})