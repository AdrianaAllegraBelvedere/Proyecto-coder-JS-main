const producto1 = new Producto('Labial Rojo', 950, 200, "img/producto1.jpg", true);
const producto2 = new Producto('Delineador', 7000, 100, "img/producto2.jpg", false);
const producto3 = new Producto('Sombras', 1200, 200, "img/producto3.jpg", true);
const producto4 = new Producto('Iluminador', 600, 50, "img/producto4.jpg", false);
const producto5 = new Producto('Rimel', 950, 70, "img/producto5.jpg", false);
const producto6 = new Producto('Agua Micelar', 1300, 40, "img/producto6.jpg", false);
const producto7 = new Producto('Serum Reparador', 750, 48, "img/producto7.jpg", false);
const producto8 = new Producto('Roller de jade', 600, 50, "img/producto8.jpg", true);
const producto9 = new Producto('Crema hidratante de manos', 800, 60, "img/producto9.jpg", false);
const producto10 = new Producto('Base de maquillaje', 1400, 35, "img/producto10.jpg", false);
const producto11 = new Producto('Kit 4 labiales', 1650, 20, "img/producto11.jpg", true);
const producto12 = new Producto('kit de sombras', 2300, 30, "img/producto12.jpg", false);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];
let carrito =[];


let acumulador = ``;
let acumuladorDescuentos = ``;
let productosCarrito = '';
obtenerProductosPublicitarios();

productos.forEach((producto) => {
   if(producto.descuento){
    acumuladorDescuentos += `<div class="col mb-5">
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
   }else{
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
   }
})

$('#productos').append(acumulador)
$('#descuentos').append(acumuladorDescuentos);



function agregarAlCarrito(title){
    const productoEncontrado = productos.find(productos => productos.nombre === title )
    carrito.push(productoEncontrado);

    document.getElementById('contador-carrito').innerHTML = carrito.length
   
}

 function mostrarCarrito(){
    console.log(carrito)

    carrito.forEach(productoSeleccionado => {
        
        console.log(productoSeleccionado.nombre)
        productosCarrito += `<h4> ${productoSeleccionado.nombre} </h4>`;
        
        document.getElementById('productos-carrito').innerHTML = productosCarrito;
    });
    
}


function obtenerProductosPublicitarios(){

    const productosJson = '../productos.json';
    $(document).load(productosJson, function(respuesta, estado){
        if(estado == "success"){
            let { productos } = JSON.parse(respuesta);
            CrearCards(productos);
        }
      });
}

function CrearCards(productos){

    let acumuladorPublicitario= ``;
    productos.forEach((producto) => {
        acumuladorPublicitario += `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="${producto.img}" alt="..." />                            
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder"> ${producto.nombre} </h5>
                </div>
            </div>
            
    
        </div>
    </div>`;
     });
    $('#publcidad').append(acumuladorPublicitario);
}
