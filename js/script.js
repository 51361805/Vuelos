
//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760) {

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760) {

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

const opciones = document.querySelectorAll('input[name="opcion"]');
const elemento = document.getElementById('elemento-a-ocultar');
opciones.forEach(opcion => {
    opcion.addEventListener('change', () => {
        if (opcion.value === 'opcion1') {
            elemento.classList.add('oculto');
        } else {
            elemento.classList.remove('oculto');
        }
    });
});


function mostrarInformacion(idProducto) {
    // Obtener el elemento div que contiene la información del producto
    const infoProducto = document.getElementById("info-" + idProducto);

    // Obtener el elemento div que contiene la ventana modal
    const modal = document.getElementById("modal");

    // Obtener el elemento div que contiene la descripción del vehículo
    const descripcionVehiculo = document.getElementById("descripcion-vehiculo");

    // Agregar la descripción del vehículo al contenido de la ventana modal
    descripcionVehiculo.innerHTML = infoProducto.innerHTML;

    // Mostrar la ventana modal
    modal.style.display = "block";
}


function ocultarModal() {
    // Obtener el elemento div que contiene la ventana modal
    const modal = document.getElementById("modal");

    // Ocultar la ventana modal
    modal.style.display = "none";
}



//apartir de esta linea  de codigo se aplica lo dado en clase, el codigo anterior es necesario para 
//el  menu responsive y 
// para darle estructura al sitio web.



// Seleccionar elementos del DOM
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');
const fechaIda = document.querySelector('.fecha.ida');
const fechaVuelta = document.querySelector('.fecha.vuelta');
const opcionIda = document.querySelector('input[value="opcion1"]');
const opcionIdaVuelta = document.querySelector('input[value="opcion2"]');
const formulario = document.querySelector('.decoracion');

// Asignar eventos de validación
formulario.addEventListener('submit', validarFormulario);
opcionIda.addEventListener('click', validarOpcionIda);
opcionIdaVuelta.addEventListener('click', validarOpcionIdaVuelta);

function validarFormulario(evento) {
    // Prevenir el envío del formulario
    evento.preventDefault();

    // Obtener las fechas de ida y vuelta
    const fechaIdaValue = fechaIda.value;
    const fechaVueltaValue = fechaVuelta.value;

    // Validar que el país de origen sea diferente al de destino
    if (origen.value === destino.value) {
        alert('El país de origen y destino deben ser diferentes.');
        return;
    }

    // Validar que se haya seleccionado una fecha de ida
    if (fechaIdaValue === '') {
        alert('Debes seleccionar una fecha de partida.');
        return;
    }

    // Validar que se haya seleccionado una fecha de vuelta si se eligió la opción de ida y vuelta
    if (opcionIdaVuelta.checked && fechaVueltaValue === '') {
        alert('Debes seleccionar una fecha de regreso.');
        return;
    }

    // Validar que la fecha de vuelta no sea menor que la fecha de ida si se eligió la opción de ida y vuelta
    if (opcionIdaVuelta.checked && fechaVueltaValue < fechaIdaValue) {
        alert('La fecha de regreso no puede ser menor que la fecha de partida.');
        return;
    }

    // Si se llega hasta aquí, el formulario es válido
    alert('El formulario es válido y se puede enviar.');
}

function validarOpcionIda() {
    // Si se selecciona la opción "Solo Ida", se desactiva la fecha de vuelta
    fechaVuelta.disabled = true;
}

function validarOpcionIdaVuelta() {
    // Si se selecciona la opción "Ida y Vuelta", se activa la fecha de vuelta
    fechaVuelta.disabled = false;
}



// comprarVuelo.onclick = () => { alert("Revisa Tu Carrito De Compras Para Modicar  El Viaje") };
const productos = [
    {
        id: "viaje-01",
        origen: "Uruguay",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        precio: "1740",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-02",
        origen: "Uruguay",
        destino: "Francia",
        imagen: "./img/brasil.jpg",
        precio: "1250",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-03",
        origen: "Argentina",
        destino: "Brasil",
        imagen: "./img/brasil.jpg",
        precio: "1350",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-04",
        origen: "Chile",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        precio: "1250",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-05",
        origen: "Francia",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        precio: "850",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-06",
        origen: "Colombia",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        precio: "450",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-07",
        origen: "Argentina",
        destino: "Colombia",
        imagen: "./img/brasil.jpg",
        precio: "750",
        descripcion: "disfruta del vuelo"
    },
    {
        id: "viaje-08",
        origen: "Uruguay",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        precio: "650",
        descripcion: "disfruta del vuelo"
    }
];

let botonesAgregar = document.querySelectorAll(".producto-agregar")
const contenedorViajes = document.querySelector("#contenedorVuelosD");

function cargarProductos() {

    productos.forEach(producto => {
        const tr = document.createElement("tr");
        tr.classList.add("viaje");
        tr.innerHTML = `
        <td><img class="imglugar" src="${producto.imagen}" alt="destino"></td>
        <td>${producto.descripcion}</td>
        <td>${producto.origen}</td>
        <td>${producto.destino}</td>
        <td><button id="${producto.id}" class="producto-agregar">Comprar USD <span class="precioDelVuelo">${producto.precio}</span></button></td>
      `;
        contenedorViajes.appendChild(tr);
    });
    actualizarBotonesAgregar();
}

cargarProductos();



function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarVuelo);
    });
}
const productosEnCarritos = [];


function agregarVuelo(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarritos.some(producto => producto.id === idBoton)) {
        alert("Este producto ya se encuentra en el carrito");
    } else {
        productosEnCarritos.push(productoAgregado);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));
    }
}