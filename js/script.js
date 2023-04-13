


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



