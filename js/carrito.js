const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.querySelector("#carrito-Viajes");

  function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
      productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("izquierdo");
        div.innerHTML = `
        <h3>Usted ha reservado un vuelo:</h3>
        <p>Origen: <span class="compra-origen">${producto.origen}</span></p>
        <p>Destino: <span class="compra-destino">${producto.destino}</span></p>
        <p>Descripcion: ${producto.descripcion} </p>
        <p>Fecha de partida: <span class="compra-fecha-partida">20/05/2018</span> Hora: <span
              class="compra-hora-partida">10:00</span></p>
        <p>Fecha de regreso: <span class="compra-fecha-regreso">22/05/2018</span> Hora: <span
              class="compra-hora-regreso">16:00</span></p>
        <p class="compra-personas">Cantidad de personas: <input type="number" class="compra-input-personas"
            min="1" max="10" value="0"></p>
        <p class="compra-equipaje">¿Llevará equipaje? <select class="compra-input-equipaje">
            <option value="si">Sí</option>
            <option value="no" selected>No</option>
          </select>
        </p>
        <p class="compra-maletas">Cantidad de maletas: <input type="number" class="compra-input-maletas"
            min="0" max="5" value="0"></p>
        <p class="compra-nombres">Nombres de los pasajeros: <input type="text" class="compra-input-nombres">
        </p>
        <p class="compra-identificaciones">Números de identificación de los pasajeros: <input type="text"
            class="compra-input-identificaciones"></p>
        <p class="compra-menores">¿Hay menores de 18 años? <select class="compra-input-menores">
            <option value="si">Sí</option>
            <option value="no" selected>No</option>
          </select>
        </p>
        <p class="compra-mascotas">¿Llevará mascotas? <select class="compra-input-mascotas">
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otros">Otros</option>
            <option value="no" selected>No</option>
          </select>
        </p>
        <h4>Precio del viaje Por Persona: <span class="compra-precio">${producto.precio}</span></h4>
        
        `;

        contenedorProductos.appendChild(div);
      });

      actualizarBotonesEliminar();
      actualizarTotal();
    }
  }

  cargarProductosCarrito();
});
