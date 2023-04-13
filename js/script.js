

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

document.addEventListener("DOMContentLoaded", function(event) {

let nombre = prompt("¿Cómo te llamas?");

let pais = prompt("En cuál de estos dos países te encuentras: Uruguay o Argentina?");

if (pais.toLowerCase() === "uruguay") {

    let destino = prompt(`Los países que tenemos disponibles desde tu ubicación son Chile o Brasil. ¿A cuál de estos países te gustaría viajar, ${nombre}?`);

    if (destino.toLowerCase() === "chile" || destino.toLowerCase() === "brasil") {

        let dias = prompt(`¿Por cuántos días te gustaría viajar a ${destino}? el precio por dia es de USD 20 `);
        let precio = (20 * dias)
        let total = precio
        alert(`Genial, estás interesado en viajar a ${destino} desde ${pais} por ${dias} días. con un importe de USD ${total} `);

    } else {
        alert("Por favor, selecciona un país disponible para viajar.");
    }




} else if (pais.toLowerCase() === "argentina") {



    
    let destino = prompt(`Los países que tenemos disponibles desde tu ubicación son Chile o China. ¿A cuál de estos países te gustaría viajar, ${nombre}?`);

    if (destino.toLowerCase() === "chile" || destino.toLowerCase() === "china") {

        let dias = prompt(`¿Por cuántos días te gustaría viajar a ${destino}? el precio por día es de USD 30 `);
        let precio = (30 * dias)
        let total = precio
        alert(`Genial, estás interesado en viajar a ${destino} desde ${pais} por ${dias} días. con un importe de USD ${total} `);

    } else {
        alert("Por favor, selecciona un país disponible para viajar.");
    }

} else {
    
    alert("Lo siento, el país que ingresaste no está disponible para viajar.");
}

});

