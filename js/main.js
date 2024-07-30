//?PREENTREGA 1

//? SALUDO
// Pedir al usuario su nombre
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Saludar al usuario
alert(
    "Hola, " +
    nombreUsuario +
    "! Bienvenido a nuestro sistema de compra de entradas."
);

//? ALGORITMO CONDICIONAL
function verificarDisponibilidad() {
    // Pedir al usuario cuántas entradas quiere comprar
    let entradasDeseadas = prompt("¿Cuántas entradas deseas comprar?");

    // Convertir el valor a un número
    entradasDeseadas = parseInt(entradasDeseadas, 10);

    // Número de entradas disponibles
    let entradasDisponibles = 7;

    // Verificar si la cantidad de entradas deseadas están disponibles
    if (entradasDeseadas <= entradasDisponibles && entradasDeseadas > 0) {
        alert("Entradas disponibles. Puedes realizar la compra.");
    } else if (entradasDeseadas > entradasDisponibles) {
        alert("No hay suficientes entradas disponibles.");
    } else {
        alert("Por favor, ingresa un número válido de entradas.");
    }
}
//? FIN ALGORITMO CONDICIONAL

//? ALGORITMO DE CICLO
// Eventos con let por separado
let evento1 = { nombre: "Metallica", precio: 50000 };
let evento2 = { nombre: "Megadeth", precio: 30000 };
let evento3 = { nombre: "Green Day", precio: 25000 };
let evento4 = { nombre: "Slayer", precio: 20000 };

// Mostrar los eventos disponibles
let eventosDisponibles = `${evento1.nombre} (Precio: $${evento1.precio})\n${evento2.nombre} (Precio: $${evento2.precio})\n${evento3.nombre} (Precio: $${evento3.precio})\n${evento4.nombre} (Precio: $${evento4.precio})`;
alert("Eventos disponibles:\n" + eventosDisponibles);

// Variable para almacenar el costo total
let costoTotal = 0;
let continuar = true;

while (continuar) {
    let seleccion = prompt("Ingresa el nombre del evento que deseas asistir (o escribe 'fin' para terminar):");

    if (seleccion.toLowerCase() === 'fin') {
        continuar = false;
    } else {
        // Verificar si el evento seleccionado está disponible y sumar el costo
        if (seleccion.toLowerCase() === evento1.nombre.toLowerCase()) {
            costoTotal += evento1.precio;
        } else if (seleccion.toLowerCase() === evento2.nombre.toLowerCase()) {
            costoTotal += evento2.precio;
        } else if (seleccion.toLowerCase() === evento3.nombre.toLowerCase()) {
            costoTotal += evento3.precio;
        } else if (seleccion.toLowerCase() === evento4.nombre.toLowerCase()) {
            costoTotal += evento4.precio;
        } else {
            alert("Evento no encontrado. Por favor, ingresa un evento válido.");
        }
    }
}

// Mostrar el costo total
if (costoTotal > 0) {
    document.querySelector('#resultadoCosto').textContent = "Costo Total: $" + costoTotal;
} else {
    alert("Primero debe realizar la compra");
}

//? FIN ALGORITMO DE CICLO