// aca empieza

let carrito = [];
let carritoEnLS = JSON.parse(localStorage.getItem('carritoJSON'));
/*if (carritoEnLS) {
  carrito = carritoEnLS;
}*/

let enCarrito;

let totalCarrito = 0;

let carritoFinal = document.getElementById('carritoFinal');

carritoFinal.innerHTML = '<b>Aún no tiene ningun producto en el carrito.</b>';
carritoFinal.className = 'totalProductos';

function sumarAlCarrito(id) {
  switch (id) {
    case 100:
      carrito.push(productosStock[0]);
      totalCarrito += productosStock[0].precio;
      break;
    case 101:
      carrito.push(productosStock[1]);
      totalCarrito += productosStock[1].precio;
      break;
    case 102:
      carrito.push(productosStock[2]);
      totalCarrito += productosStock[2].precio;
      break;
    case 103:
      carrito.push(productosStock[3]);
      totalCarrito += productosStock[3].precio;
      break;
    case 104:
      carrito.push(productosStock[4]);
      totalCarrito += productosStock[4].precio;
      break;
    case 105:
      carrito.push(productosStock[5]);
      totalCarrito += productosStock[5].precio;
      break;
  }

  carritoFinal.innerHTML = `<p>Los productos que colocó en el carrito son: </p>`;

  for (let i = 0; i < carrito.length; i++) {
    carritoFinal.innerHTML += `<div>- ${carrito[i].prod}  $${carrito[i].precio} <button class="btn-eliminar"  onclick="">Eliminar del carrito</button></div>`;
  }

  carritoFinal.innerHTML += `<p> Sumando un total de $${totalCarrito}</p> <div><button class="btn-finalizar" id="btn-finalizar" onclick="">FINALIZAR COMPRA</button></div>`;
  let carritoJSON = JSON.stringify(carrito);
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

const carritoJSON = JSON.stringify(carrito);

localStorage.setItem('carritoJSON', carritoJSON);
