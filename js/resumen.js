


const resumenCompra = document.getElementById("resumenCompra");
const elPrecioTotal = localStorage.getItem("elPrecioTotal");
console.log(elPrecioTotal);
resumenCompra.textContent = elPrecioTotal.toString();

const importeCuotaUno = document.getElementById("importeCuotaUno");
const importeCuotaDos = document.getElementById("importeCuotaDos");
const importeCuotaTres = document.getElementById("importeCuotaTres");
const importeCuotaCuatro = document.getElementById("importeCuotaCuatro");
const importeCuotaCinco = document.getElementById("importeCuotaCinco");

const importeRetiraUnaCuota = document.getElementById("importeRetiraUnaCuota");
const importeRetiraDosCuotas = document.getElementById("importeRetiraDosCuotas");
const importeRetiraTresCuotas = document.getElementById("importeRetiraTresCuotas");
const importeRetiraCuatroCuotas = document.getElementById("importeRetiraCuatroCuotas");
const importeRetiraCincoCuotas = document.getElementById("importeRetiraCincoCuotas");



let importeCuotaUnoCalculado = parseInt(elPrecioTotal * 1);
importeRetiraUnaCuota.textContent = importeCuotaUnoCalculado;

let importeCuotaDosCalculado = parseInt(elPrecioTotal * 1.15);
importeRetiraDosCuotas.textContent = importeCuotaDosCalculado;

let importeCuotaTresCalculado = parseInt(elPrecioTotal * 1.2);
importeRetiraTresCuotas.textContent = importeCuotaTresCalculado;

let importeCuotaCuatroCalculado = parseInt(elPrecioTotal * 1.25);
importeRetiraCuatroCuotas.textContent = importeCuotaCuatroCalculado;

let importeCuotaCincoCalculado = parseInt(elPrecioTotal * 1.3);
importeRetiraCincoCuotas.textContent = importeCuotaCincoCalculado;


let valorUnaCuota = parseInt(elPrecioTotal / 1);
importeCuotaUno.textContent = valorUnaCuota;

let valorDos = parseInt(importeCuotaDosCalculado / 2);
importeCuotaDos.textContent = valorDos;

let valorTres = parseInt(importeCuotaTresCalculado / 3);
importeCuotaTres.textContent = valorTres;

let valorCuatro = parseInt(importeCuotaCuatroCalculado / 4);
importeCuotaCuatro.textContent = valorCuatro;

let valorCinco = parseInt(importeCuotaCincoCalculado / 5);
importeCuotaCinco.textContent = valorCinco;



