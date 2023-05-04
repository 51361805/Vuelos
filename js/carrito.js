
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.querySelector("#carrito-Viajes");

  function cargarProductosCarrito() {




    if (productosEnCarrito && productosEnCarrito.length > 0) {
      productosEnCarrito.forEach((producto, i) => {
        const div = document.createElement("div");
        div.classList.add("izquierdo");
        div.innerHTML = `
        <div class="cont-img-carrito">
        <h3>Usted ha reservado un vuelo:</h3>
        <p class="compra-origen"> Origen: <span class="compra-origen">${producto.origen}</span></p>
        <p class="compra-origen" >Destino: <span class="compra-destino">${producto.destino}</span></p>
        <p>Descripcion: ${producto.descripcion} </p>
        <p>Fecha de partida: <span class="compra-fecha-partida">12/06/2018</span> Hora: <span
              class="compra-hora-partida">10:00</span></p>
        <p>Fecha de regreso: <span class="compra-fecha-regreso">22/05/2018</span> Hora: <span
              class="compra-hora-regreso">16:00</span></p>
              <p class="compra-personas">Cantidad de personas: <input id="miInput" type="number" class="compra-input-personas"
              min="1" max="10" value="${producto.cantidadPersonas}"></p>
          <!-- ... -->
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
        <h5>Precio del viaje Por Persona: <span class="compra-precio">${producto.precio}</span></h5>
        <img class="imgcarritook" src="${producto.imagen2}" alt="destino">
       

        
        <h5 class ="totviaje">Precio Total del viaje: <span class="compra-precio-total">       </span></h5>
          <button class="eliminar-vuelo" data-index="${i}">Eliminar Vuelo</button>
         
          </div>
        `;
        contenedorProductos.appendChild(div);

        const botonEliminar = div.querySelector(".eliminar-vuelo");
        botonEliminar.addEventListener("click", () => {


          Swal.fire({
            title: '¿Seguro que quieres eliminar esta reserva?',
            text: "Si lo borras tendrás que agregarlo nuevamente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
          }).then((result) => {

            if (result.isConfirmed) {

              const index = botonEliminar.dataset.index;
              productosEnCarrito.splice(index, 1);
              localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
              div.remove();
    
              Swal.fire(
                'Eliminado!',
                'La reserva ha sido eliminada correctamente.',
                'success'
              )
            }
          })
        });
      });

      const miInput = document.getElementById("miInput");

      miInput.addEventListener("change", () => {
        const cantidad = miInput.value;
        const div = miInput.parentNode.parentNode; // Obtener el div padre
        const precioSpan = div.querySelector(".compra-precio");
        const precioTotalSpan = div.querySelector(".compra-precio-total");
        const precio = parseFloat(precioSpan.textContent); // Obtener el precio como número
        const precioTotal = precio * cantidad;
        precioTotalSpan.textContent = precioTotal;
        const elPrecioTotal = document.getElementById("elPrecioTotal")
        elPrecioTotal.textContent = precioTotal;
      });




      actualizarBotonesEliminar();
      actualizarTotal();
    }
  }

  cargarProductosCarrito();
});




//alquiler de autos..................................................................................


document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.querySelector("#carrito-Viajes");

  function cargarProductosCarrito() {
    const autosEnCarrito = JSON.parse(localStorage.getItem("autos-en-carrito"));

    if (autosEnCarrito && autosEnCarrito.length > 0) {

      autosEnCarrito.forEach((auto, i) => {
        const div = document.createElement("div");
        div.classList.add("izquierdo");
        div.innerHTML = `
        <div>
        <h2 class="tcar">${auto.modelo}
            <span class="spcar">${auto.descripcion}</span>
        </h2>

        <div class="flex-auto">
            <ul>

                <li> <i class="fa-solid fa-car"></i></i>4 Plazas</li>
                <li> <i class="fa-solid fa-car"></i> Manual</li>
                <li> <i class="fa-solid fa-car"></i>1 Maleta Grande</li>
                <li> <i class="fa-solid fa-car"></i>1 Maleta Pequeña</li>
                <li> <i class="fa-solid fa-car"></i>Kilometraje ilimitado </li>
            </ul>
            <div class="img-auto">
                <img class="iconoauto" src="${auto.imagen}" alt="">
            </div>

            <div class="scroll">
                <h2 class="titulo-alquiler">Incluido en el precio</h2>

                <div>
                    <i class="fa-solid fa-check"></i>Cancelación gratuita hasta 48 horas
                    antes de la recogida
                </div>
                <div>
                    <i class="fa-solid fa-check"></i>Cobertura parcial por colisión con
                    franquicia de $ 70.407

                </div>
                <div>
                    <i class="fa-solid fa-check"></i>Cobertura en caso de robo con
                    franquicia de $ 140.814

                </div>
                <div>
                    <i class="fa-solid fa-check"></i>Kilometraje ilimitado

                </div>


                <div>
                    <i class="fa-solid fa-check"></i>Sillas de niños, conductores
                    adicionales y más.

                </div>

                <div>
                    <i class="fa-solid fa-check"></i>Valoración de los usuarios: 8,8 /
                    10

                </div>

                <div>
                    <i class="fa-solid fa-check"></i>Personal atento y amable

                </div>
            </div>

        </div>
        <h4>Precio por 1 día: <span class="precio-dia">USD${auto.precio}</span></h4>
        <h4>Localidad <span class="precio-dia">${auto.lugar}</span></h4>
        <button class="eliminar-vuelo" data-index="${i}">Eliminar Reserva</button>
        
    </div>

        `;
        contenedorProductos.appendChild(div);

        const botonEliminar = div.querySelector(".eliminar-vuelo");
        botonEliminar.addEventListener("click", () => {

          Swal.fire({
            title: 'Seguro Que Quieres Eliminar Este Vehículo',
            text: "¿Estás seguro de que deseas eliminar esta reserva? Si la eliminas, tendrás que hacer una nueva reserva para alquilar este vehículo. ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
          }).then((result) => {
            if (result.isConfirmed) {

              const index = botonEliminar.dataset.index;
              autosEnCarrito.splice(index, 1);
              localStorage.setItem("autos-en-carrito", JSON.stringify(autosEnCarrito));
              div.remove();

              Swal.fire(
                'Reserva Eliminada!',
                'Tu reserva ha sido eliminada correctamente.',
                'success'
              )
            }
          })


         
        });

      });

      actualizarBotonesEliminar();
      actualizarTotal();
    }
  }

  cargarProductosCarrito();
});






















