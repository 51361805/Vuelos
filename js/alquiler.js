

document.addEventListener("DOMContentLoaded", function(event) {const autos = [
    {
        id: "autonumero1",
        lugar: "el vehiculo esta disponible en el aeropuerto de argentina",
        año: "2010",
        imagen: "../img/audi.png",
        modelo: "suzuki alto",
        precio: "650",
        descripcion: "Suzuki práctico para 4 personas"
    },
    {
        id: "autonumero2",
        lugar: "el vehiculo esta disponible en el centro de la ciudad de Madrid",
        año: "2018",
        imagen: "../img/audi.png",
        modelo: "Ford Focus",
        precio: "1200",
        descripcion: "Ford espacioso y cómodo para viajes largos"
        },
        {
        id: "autonumero3",
        lugar: "el vehiculo esta disponible en el aeropuerto de París",
        año: "2015",
        imagen: "../img/audi.png",
        modelo: "BMW Serie 3",
        precio: "1500",
        descripcion: "BMW de lujo para una experiencia única en la carretera"
        },
        {
        id: "autonumero4",
        lugar: "el vehiculo esta disponible en la estación de tren de Barcelona",
        año: "2020",
        imagen: "../img/audi.png",
        modelo: "Audi A3",
        precio: "1800",
        descripcion: "Audi elegante y deportivo para los amantes de la velocidad"
        },
        {
        id: "autonumero5",
        lugar: "el vehiculo esta disponible en el aeropuerto de Miami",
        año: "2021",
        imagen: "../img/audi.png",
        modelo: "Tesla Model S",
        precio: "2500",
        descripcion: "Tesla eléctrico de alta tecnología para un viaje ecológico y elegante"
        },
        {
        id: "autonumero6",
        lugar: "el vehiculo esta disponible en la estación de tren de Nueva York",
        año: "2019",
        imagen: "../img/audi.png",
        modelo: "Toyota Camry",
        precio: "1100",
        descripcion: "Toyota confiable y duradero para un viaje sin preocupaciones"
        },
        {
        id: "autonumero7",
        lugar: "el vehiculo esta disponible en el centro de la ciudad de Londres",
        año: "2017",
        imagen: "../img/audi.png",
        modelo: "Volkswagen Golf",
        precio: "900",
        descripcion: "Volkswagen clásico y versátil para un viaje cómodo y económico"
        },
        {
        id: "autonumero8",
        lugar: "el vehiculo esta disponible en el aeropuerto de Los Ángeles",
        año: "2016",
        imagen: "../img/audi.png",
        modelo: "Mercedes-Benz E-Class",
        precio: "2200",
        descripcion: "Mercedes elegante y sofisticado para un viaje de lujo"
        },
        {
        id: "autonumero9",
        lugar: "el vehiculo esta disponible en el aeropuerto de Roma",
        año: "2014",
        imagen: "../img/audi.png",
        modelo: "Honda Civic",
        precio: "800",
        descripcion: "Honda eficiente y económico para un viaje sin preocupaciones"
        },
        {
        id: "autonumero10",
        lugar: "el vehiculo esta disponible en la estación de tren de Berlín",
        año: "2018",
        imagen: "../img/audi.png",
        modelo: "Nissan Altima",
        precio: "1000",
        descripcion: "Nissan espacioso y cómodo para un viaje en familia"
        }
];
let agregarAuto = document.querySelectorAll(".auto-agregar");

const contenedorAutos = document.querySelector("#alquilerAutomotor");

function cargarProductos() {
    autos.forEach(auto => {
        const tr = document.createElement("tr");
        tr.classList.add("auto");
        tr.innerHTML = `
            <td><img class="imglugar" src="${auto.imagen}" alt="auto"></td>
            <td class="dautodes">${auto.descripcion}</td>
            <td>${auto.modelo}</td>
            <td>${auto.año}</td>
            <td><button id="${auto.id}" class="auto-agregar comprarVuelo">Alquilar USD <span class="precioDelAuto">${auto.precio}</span></button></td>
        `;
        contenedorAutos.appendChild(tr);
    });
    
    actualizarAgregarAuto();
}

cargarProductos();

function actualizarAgregarAuto() {
    agregarAuto = document.querySelectorAll(".auto-agregar");

    agregarAuto.forEach(boton => {
        boton.addEventListener("click", agregarAutoAlCarrito);
    });
}

let autosEnCarrito = JSON.parse(localStorage.getItem("autos-en-carrito")) || [];

function agregarAutoAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const autoAgregado = autos.find(auto => auto.id === idBoton);

    if (autosEnCarrito.some(auto => auto.id === idBoton)) {
    
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Reserva previa encontrada',
            showConfirmButton: false,
            timer: 1500
        })
       
    } else {

        autosEnCarrito.push(autoAgregado);
        localStorage.setItem("autos-en-carrito", JSON.stringify(autosEnCarrito));

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Reserva exitosa.',
            showConfirmButton: false,
            timer: 1500
        })
       
      
    }
}
  });