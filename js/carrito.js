
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.querySelector("#carrito-Viajes");

  function cargarProductosCarrito() {




    if (productosEnCarrito && productosEnCarrito.length > 0) {
      productosEnCarrito.forEach((producto, i) => {
        const div = document.createElement("div");
        div.classList.add("izquierdo");
        div.innerHTML += `
        <div class="cont-img-carrito">

        <img class="logovuelo" src="../img/logodos.png" alt="">
       
        <h3>Usted ha reservado un vuelo:</h3>
        <p class="compra-origen"> Origen: <span class="compra-origen">${producto.origen}</span></p>
        <p class="compra-origen">Destino: <span class="compra-destino">${producto.destino}</span></p>
        <p class="pDescripcion">Descripcion: ${producto.descripcion} </p>
        <p>Fecha de partida: <span class="compra-origen">${fechaIdaValue}</span> Hora: <span
        class="compra-origen">10:00</span></p>
        <p>Fecha de regreso: <span class="compra-origen">${fechaVueltaValue}</span> Hora: <span
        class="compra-origen">16:00</span></p>

    
    
    
        <div id="fechas" style="display:none;">
            <label for="fechaPartida">Fecha de partida:</label>
            <input type="date" id="fechaPartida" name="fechaPartida">
    
            <label for="fechaRegreso">Fecha de regreso:</label>
            <input type="date" id="fechaRegreso" name="fechaRegreso">
    
        </div>
    
        <p class="compra-personas">Cantidad de personas: <input id="miInput" type="number"
                class="compra-input-personas" min="1" max="10" value="${producto.cantidadPersonas}"></p>
        <!-- ... -->
        <p class="compra-equipaje">¿Llevará equipaje? <select class="compra-input-equipaje">
                <option value="si">Sí</option>
                <option value="no" selected>No</option>
            </select>
        </p>
        <div class="doble">

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
         </div>
         <h5 class="totviaje">Precio Total del viaje: <span class="compra-precio-total"> </span></h5>
        <img class="imgcarritook" src="${producto.imagen2}" alt="destino">
      
        <br>
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


      //modificar fechas..................



      const modificarFechas = document.getElementsByName("modificarFechas");
      const fechasDiv = document.getElementById("fechas");

      for (let i = 0; i < modificarFechas.length; i++) {

        modificarFechas[i].addEventListener("click", function () {

          if (modificarFechas[i].value === "si") {

            fechasDiv.style.display = "block";

          } else {

            fechasDiv.style.display = "none";
          }
        });
      };


      const fechaPartida = document.getElementById("fechaPartida");

      fechaPartida.addEventListener("change", function () {

        const fechPartida = fechaPartida.value;
        const fechaCambiada = fechaIdaValue;

        fechaCambiada.textContent = fechPartida;


      });


      //sumaa del carrito..........................................................................
      const miInput = document.getElementById("miInput");

      miInput.addEventListener("change", () => {
        const cantidad = miInput.value;
        const div = miInput.parentNode.parentNode;
        const precioSpan = div.querySelector(".compra-precio");
        const precioTotalSpan = div.querySelector(".compra-precio-total");
        const precio = parseFloat(precioSpan.textContent);
        const precioTotal = precio * cantidad;
        precioTotalSpan.textContent = precioTotal;
        const elPrecioTotal = document.getElementById("elPrecioTotal")
        elPrecioTotal.textContent = precioTotal;

        localStorage.setItem("elPrecioTotal", precioTotal)
        console.log(precioTotal);
      });

      actualizarBotonesEliminar();
      actualizarTotal();
    }
  }

  cargarProductosCarrito();


});

const fechaIdaValue = localStorage.getItem("fechaIdaValue");
console.log("El valor de fechaIdaValue es: " + fechaIdaValue);


const fechaVueltaValue = localStorage.getItem("fechaVueltaValue");
console.log("El valor de fechaVueltaValue es: " + fechaVueltaValue);





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
        <img class="logovuelo" src="../img/logodos.png" alt="">
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




const btnPagar = document.getElementById("btnPagar");
const numTarjeta = document.getElementById("numTarjeta");
const nombreTitular = document.getElementById("nombreTitular");
const fechaVencimiento = document.getElementById("fechaVencimiento");
const cvv = document.getElementById("cvv");
const formularioEnvio = document.getElementById("formularioEnvio");
const cuotas = document.getElementsByName("cuotas");
const cero = document.getElementById("resumenCompra");



btnPagar.addEventListener("click", function (event) {
  event.preventDefault();

  if (numTarjeta.value === "") {
    Swal.fire('Por favor, ingrese el número de tarjeta.');
    return;
  }

  if (nombreTitular.value === "") {
    Swal.fire('Por favor, ingrese el nombre del titular.');
    return;
  }

  if (fechaVencimiento.value === "") {
    Swal.fire('Por favor, ingrese la fecha de vencimiento.');
    return;
  }

  if (cvv.value === "") {
    Swal.fire('Por favor, ingrese el código de seguridad (CVV).');
    return;
  }

  let cuotasSeleccionadas = false;
  for (let i = 0; i < cuotas.length; i++) {
    if (cuotas[i].checked) {
      cuotasSeleccionadas = true;
      break;
    }
  }

  if (!cuotasSeleccionadas) {
    Swal.fire('Por favor, seleccione una opción de cuotas.');
    return;
  }




  localStorage.clear();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Su Vuelo Fue Reservado Con Exito.',
    showConfirmButton: false,
    timer: 1500,

  })



});


