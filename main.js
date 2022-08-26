// aca empieza

let carrito = [];

let codigoProducto;

function sumarAlCarrito(id) {
  if (id == 100) {
    carrito.push(productosStock[0]);
  } else if (id == 101) {
    carrito.push(productosStock[1]);
  } else if (id == 102) {
    carrito.push(productosStock[2]);
  } else if (id == 103) {
    carrito.push(productosStock[3]);
  } else if (id == 104) {
    carrito.push(productosStock[4]);
  } else if (id == 105) {
    carrito.push(productosStock[5]);
  }
}

const productosStock = [
  { prod: 'remera', precio: 2500, id: 100 },
  { prod: 'jean', precio: 3600, id: 101 },
  { prod: 'bermuda', precio: 3300, id: 102 },
  { prod: 'buzo', precio: 4000, id: 103 },
  { prod: 'campera de jean', precio: 7000, id: 104 },
  { prod: 'zapatillas', precio: 11000, id: 105 },
];

let productosHTML;

for (const item of productosStock) {
  productosHTML += `<div class="prod"><p>Producto: ${item.prod} <br>Precio: $${item.precio}</p><button id="btn${item.id}" onclick="sumarAlCarrito(${item.id})">Agregar al carrito</button></div>`;
}

document.getElementById('productos').innerHTML = productosHTML;

//EL CARRITO QUEDO CONFORMADO POR LOS OBJETOS QUE SE LE ACABAN DE SUMAR
console.log(carrito);

let enCarrito;
let totalCarrito = 0;

function finalizarCompra() {
  enCarrito = 'Los productos que colocó en el carrito son: <br>';
  for (let i = 0; i < carrito.length; i++) {
    enCarrito += ` ${carrito[i].prod}  $${carrito[i].precio}<br>`;
    totalCarrito += carrito[i].precio;
  }
  let carritoFinal = document.createElement('div');
  carritoFinal.innerHTML = `<p>${enCarrito} Sumando un total de $${totalCarrito}</p>`;
  document.body.append(carritoFinal);
  carritoFinal.className = 'totalProductos';
}
