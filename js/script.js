
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
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'El país de origen y destino deben ser diferentes.',
            showConfirmButton: false,
            timer: 1500,

        })

        return;
    }

    // Validar que se haya seleccionado una fecha de ida
    if (fechaIdaValue === '') {

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Debes seleccionar una fecha de partida.',
            showConfirmButton: false,
            timer: 1500,

        })

        return;
    }

    // Validar que se haya seleccionado una fecha de vuelta si se eligió la opción de ida y vuelta
    if (opcionIdaVuelta.checked && fechaVueltaValue === '') {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Debes seleccionar una fecha de regreso.',
            showConfirmButton: false,
            timer: 1500,

        })

        return;
    }

    // Validar que la fecha de vuelta no sea menor que la fecha de ida si se eligió la opción de ida y vuelta
    if (opcionIdaVuelta.checked && fechaVueltaValue < fechaIdaValue) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'La fecha de regreso no puede ser menor que la fecha de partida.',
            showConfirmButton: false,
            timer: 1500,

        })

        return;
    }

    // Obtener el div de resultados
    const resultados = document.getElementById('resultados');

    // Mostrar el div de resultados
    resultados.style.display = 'block';

    // Filtrar los productos y mostrar los resultados en el div de resultados
    filtrarProductos();

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'En búsqueda del vuelo.',
        showConfirmButton: false,
        timer: 1500,

    })

};

function validarOpcionIda() {
    // Si se selecciona la opción "Solo Ida", se desactiva la fecha de vuelta
    fechaVuelta.disabled = true;
}

function validarOpcionIdaVuelta() {
    // Si se selecciona la opción "Ida y Vuelta", se activa la fecha de vuelta
    fechaVuelta.disabled = false;
};




const productos = [

    {
        id: "viaje-01",
        origen: "Uruguay",
        destino: "Argentina",
        imagen: "./img/buenos-aires.jpg",
        imagen2: "../img/buenos-aires.jpg",
        precio: "1740",

        descripcion: "Disfruta de una escapada de fin de semana en Buenos Aires, la ciudad de la furia. Con este vuelo podrás conocer la cultura, historia y gastronomía porteña de la mano de los expertos locales. No te pierdas de sus atractivos turísticos como el Obelisco, la Casa Rosada, el Teatro Colón, la Recoleta y mucho más.",

    },
    {
        id: "viaje-02",
        origen: "Uruguay",
        destino: "Francia",
        imagen: "./img/brasil.jpg",
        imagen2: "../img/brasil.jpg",

        precio: "1250",
        descripcion: "Descubre la ciudad de la luz con este vuelo a París. Enamórate de sus atractivos turísticos como la Torre Eiffel, el Museo del Louvre, la Catedral de Notre-Dame, el Arco del Triunfo y muchos más. Además, podrás disfrutar de la deliciosa gastronomía francesa y su rica cultura."
    },
    {
        id: "viaje-03",
        origen: "Argentina",
        destino: "Brasil",
        imagen: "./img/losangeles.jpg",
        imagen2: "../img/losangeles.jpg",
        precio: "1350",

        descripcion: "Vuela a Brasil y descubre la magia de Río de Janeiro, la ciudad maravillosa. Podrás disfrutar de sus hermosas playas, como Copacabana e Ipanema, su increíble Carnaval, su famosa estatua del Cristo Redentor y mucho más. Además, la rica gastronomía brasileña te sorprenderá."
    },
    {
        id: "viaje-04",
        origen: "Chile",
        destino: "Argentina",
        imagen: "./img/brasil.jpg",
        imagen2: "../img/brasil.jpg",
        precio: "1250",

        descripcion: "Conoce la Patagonia Argentina, una de las regiones más espectaculares del mundo, con este vuelo a Bariloche. Podrás disfrutar de sus impresionantes paisajes de montañas, bosques y lagos, así como de su deliciosa gastronomía y actividades al aire libre como el esquí y el trekking."
    },
    {
        id: "viaje-05",
        origen: "Francia",
        destino: "Argentina",
        imagen: "./img/denver.jpg",
        imagen2: "../img/denver.jpg",
        precio: "850",

        descripcion: "Descubre Argentina con este vuelo a Buenos Aires, la capital del tango. Podrás disfrutar de su rica cultura, su vibrante vida nocturna y su deliciosa gastronomía. No te pierdas de los atractivos turísticos como el Obelisco, la Casa Rosada, el Teatro Colón, la Recoleta y mucho más."
    },
    {
        id: "viaje-06",
        origen: "Colombia",
        destino: "chile",
        imagen: "./img/orlando.jpg",
        imagen2: "../img/orlando.jpg",
        precio: "450",

        descripcion: "Vuela a Buenos Aires desde Colombia y descubre la rica cultura, la deliciosa gastronomía y los atractivos turísticos de la capital del tango. Podrás conocer lugares como el Obelisco, la Casa Rosada, el Teatro Colón, la Recoleta y mucho más. ¡No"
    },
    {
        id: "viaje-07",
        origen: "Argentina",
        destino: "Colombia",
        imagen: "./img/florianopolis4.jpg",
        imagen2: "../img/florianopolis4.jpg",
        precio: "750",

        descripcion: "Vuela a Buenos Aires desde Colombia y descubre la rica cultura, la deliciosa gastronomía y los atractivos turísticos de la capital del tango. Podrás conocer lugares como el Obelisco, la Casa Rosada, el Teatro Colón, la Recoleta y mucho más. ¡No"
    },
    {
        id: "viaje-08",
        origen: "Uruguay",
        destino: "Argentina",
        imagen: "./img/lima.jpg",
        imagen2: "../img/lima.jpg",
        precio: "650",

        descripcion: "Vuela a Buenos Aires desde Colombia y descubre la rica cultura, la deliciosa gastronomía y los atractivos turísticos de la capital del tango. Podrás conocer lugares como el Obelisco, la Casa Rosada, el Teatro Colón, la Recoleta y mucho más. ¡No"
    }, {
        id: "viaje-09",
        origen: "México",
        destino: "Perú",
        imagen: "https://placeimg.com/640/480/nature",
        imagen2: "https://placeimg.com/640/480/nature",
        precio: "2400",
        descripcion: "Descubre la ciudad de Lima, su gastronomía y cultura. Este paquete turístico incluye visitas a los lugares más emblemáticos de la ciudad, como la Plaza de Armas, el Palacio de Gobierno, la Catedral de Lima, el Convento de San Francisco, entre otros.",
    },

    {
        id: "viaje-10",
        origen: "Chile",
        destino: "Brasil",
        imagen: "https://placeimg.com/640/480/nature",
        imagen2: "https://placeimg.com/640/480/nature",
        precio: "3500",
        descripcion: "Vive una experiencia inolvidable en Río de Janeiro, la ciudad maravillosa de Brasil. Disfruta de sus playas, monumentos y la alegría de su gente con este paquete turístico que incluye alojamiento, traslados y visitas a los principales atractivos de la ciudad.",

    },

    {
        id: "viaje-11",
        origen: "Argentina",
        destino: "Perú",
        imagen: "https://placeimg.com/640/480/nature",
        imagen2: "https://placeimg.com/640/480/nature",
        precio: "2800",
        descripcion: "Descubre la magia de Perú con este paquete turístico que incluye visitas a Machu Picchu, Cusco, el Valle Sagrado y la ciudad de Lima. Conoce la historia y cultura de esta maravillosa tierra en compañía de los mejores guías locales.",
    },

    {
        id: "viaje-12",
        origen: "Colombia",
        destino: "México",
        imagen: "https://placeimg.com/640/480/nature",
        imagen2: "https://placeimg.com/640/480/nature",
        precio: "3200",
        descripcion: "Visita la vibrante ciudad de México y sus alrededores con este paquete turístico que incluye alojamiento, traslados y visitas a los lugares más emblemáticos de la ciudad, como la Plaza de la Constitución, el Palacio Nacional, la Catedral Metropolitana, entre otros.",
    },


];






let botonesAgregar = document.querySelectorAll(".producto-agregar")

const contenedorViajes = document.querySelector("#contenedorVuelosD");







function cargarProductos() {



    productos.forEach(producto => {
        const tr = document.createElement("tr");
        tr.classList.add("viaje");
        tr.innerHTML = `

        <td><img class="imglugar" src="${producto.imagen}" alt="destino"></td>
        <td class= "dviajedes" >${producto.descripcion}</td>
        <td>${producto.origen}</td>
        <td>${producto.destino}</td>
        <td><button id="${producto.id}" class="producto-agregar comprarVuelo">Reservar USD <span class="precioDelVuelo">${producto.precio}</span></button></td>
      `;
        contenedorViajes.appendChild(tr);

    });

    actualizarBotonesAgregar();
};
cargarProductos();

//filtar vuelos ......................................................................................

function filtrarProductos() {


    const origenSeleccionado = document.getElementById('origen').value.toLowerCase();
    const destinoSeleccionado = document.getElementById('destino').value.toLowerCase();

    const productosFiltrados = productos.filter(producto => {
        return producto.origen.toLowerCase() === origenSeleccionado && producto.destino.toLowerCase() === destinoSeleccionado;


    });
    if (productosFiltrados.length === 0) {



        alert("Lo sentimos, no se encontraron vuelos para los filtros seleccionados. Sin embargo, tenemos más opciones disponibles.")

    };





    // Actualiza la tabla HTML con los resultados
    const tabla = document.getElementById('tablaProductos');


    tabla.innerHTML = '';

    productosFiltrados.forEach(producto => {
        tabla.innerHTML += `
       
     <div class="viajeseguro">
       <div class="viajeseguro-img">
        <img class="imgseguro" src="${producto.imagen}" alt="">
       </div>
       <div class="viajeseguro-info">
        <h2>Viaja seguro a ${producto.destino}</h2>
        <p>${producto.descripcion}</p>
        <div class="viajeseguro-detalles">
            <p><strong>Origen:</strong> ${producto.origen}</p>
            <p><strong>Destino:</strong> ${producto.destino}</p>
            <p><strong>Fecha Partida:</strong> ${fechaIda.value}</p>
            <p><strong>Fecha Regreso:</strong> ${fechaVuelta.value}</p>
            <p><strong>Precio:</strong> Desde $${producto.precio} USD</p>
         </div>
         <button  id="${producto.id}"class=" producto-agregar viajeseguro-btn">Reservar ahora</button>
        </div>
     </div> `;

        cargarProductos();

    });
};
















function actualizarBotonesAgregar() {

    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarVuelo);
    });

};


const productosEnCarritos = [];

function agregarVuelo(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    let productosEnCarritos = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

    if (productosEnCarritos.find(producto => producto.id === idBoton)) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Reserva previa encontrada',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        productosEnCarritos.push(productoAgregado);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Reserva exitosa.',
            showConfirmButton: false,
            timer: 1500
        })
    }
};






fechaIda.addEventListener("change", function () {
    const fechaIdaValue = fechaIda.value;
    localStorage.setItem("fechaIdaValue", fechaIdaValue);

});


fechaVuelta.addEventListener("change", function () {

    const fechaVueltaValue = fechaVuelta.value;
    localStorage.setItem("fechaVueltaValue", fechaVueltaValue);

});




document.getElementById('destino').addEventListener("change", function () {
    const climaDestino = this.value.toLowerCase();





    const apiKey = '6176377ce6df3ddd316c92fedbcddc6b';
    const city = climaDestino;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather-container');


            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const pressure = data.main.pressure;
            const weatherIcon = data.weather[0].icon;


            const iconClass = getWeatherIconClass(weatherIcon);


            const weatherHTML = `
            <h2 class="temperature">${cityName}</h2>
            <p class="temperature"><i class="fas fa-thermometer-half"></i> ${temperature}°C</p>
            <i class="wi ${iconClass} weather-icon"></i>
            <p class="description">${description}</p>
            <p class="additional-info"><i class="fas fa-tint"></i> Humedad: ${humidity}%</p>
            <p class="additional-info"><i class="fas fa-wind"></i> Velocidad del viento: ${windSpeed} m/s</p>
            <p class="additional-info"><i class="fas fa-compress"></i> Presión atmosférica: ${pressure} hPa</p>
    `;


            weatherContainer.innerHTML = weatherHTML;
        })
        .catch(error => {
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = 'Error al obtener los datos del clima.';

        });


    function getWeatherIconClass(iconCode) {
        switch (iconCode) {
            case '01d':
                return 'wi-day-sunny';
            case '01n':
                return 'wi-night-clear';
            case '02d':
                return 'wi-day-cloudy';
            case '02n':
                return 'wi-night-cloudy';
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return 'wi-cloudy';
            case '09d':
            case '09n':
                return 'wi-showers';
            case '10d':
            case '10n':
                return 'wi-rain';
            case '11d':
            case '11n':
                return 'wi-thunderstorm';
            case '13d':
            case '13n':
                return 'wi-snow';
            case '50d':
            case '50n':
                return 'wi-fog';
            default:
                return 'wi-na';
        }
    }

});

var agradecimiento = document.getElementById('agradecimiento');
var cerrar = document.getElementById('cerrar');

cerrar.addEventListener('click', function () {
    agradecimiento.style.display = 'none';
});

setTimeout(function () {
    agradecimiento.style.display = 'block';
}, 8000);