let carrito = [];

let totalCarrito = 0;

let carritoFinal = document.getElementById('carritoFinal');

carritoFinal.innerHTML = '<b>Aún no tiene ningun producto en el carrito.</b>';
carritoFinal.className = 'totalProductos';

function traerProductos() {
  fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
      console.log(json);

      let productosHTML;

      for (const item of json) {
        productosHTML += `<div class="prod"><p>Producto: ${item.prod} <br>Precio: $${item.precio}</p><button class="btn-prod" id="btn${item.id}" onclick="sumarAlCarrito(${item.id})">Agregar al carrito</button></div>`;
      }

      document.getElementById('productos').innerHTML = productosHTML;
    })
    .catch((e) => {
      console.log(e);
    });
}

function sumarAlCarrito(id) {
  fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
      switch (id) {
        case 100:
          carrito.push(json[0]);
          totalCarrito += json[0].precio;
          break;
        case 101:
          carrito.push(json[1]);
          totalCarrito += json[1].precio;
          break;
        case 102:
          carrito.push(json[2]);
          totalCarrito += json[2].precio;
          break;
        case 103:
          carrito.push(json[3]);
          totalCarrito += json[3].precio;
          break;
        case 104:
          carrito.push(json[4]);
          totalCarrito += json[4].precio;
          break;
        case 105:
          carrito.push(json[5]);
          totalCarrito += json[5].precio;
          break;
        case 106:
          carrito.push(json[6]);
          totalCarrito += json[6].precio;
          break;
      }

      carritoFinal.innerHTML = `<p>Los productos que colocó en el carrito son: </p>`;
      for (let i = 0; i < carrito.length; i++) {
        carritoFinal.innerHTML += `<div>- ${carrito[i].prod}  $${carrito[i].precio} <button class="btn-eliminar"  onclick="">Eliminar del carrito</button></div>`;
      }

      carritoFinal.innerHTML += `<p> Sumando un total de $${totalCarrito}</p> <div><button class="btn-finalizar" id="btn-finalizar" onclick="">FINALIZAR COMPRA</button></div>`;

      Toastify({
        text: 'Producto agregado!',
        duration: 2000,
      }).showToast();
    });
}

traerProductos();

console.log(carrito);
