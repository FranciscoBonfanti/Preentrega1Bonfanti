//?PREENTREGA 1

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
        // Listado de eventos
        let eventos = [
            { nombre: "Metallica", precio: 50 },
            { nombre: "Megadeth", precio: 30 },
            { nombre: "Guns and Roses", precio: 15 },
            { nombre: "Slayer", precio: 20 }
        ];

        // Lista de eventos seleccionados
        let eventosSeleccionados = ["Metallica", "Guns and Roses"];

        // Calcular el costo total
        function calcularCostoTotal() {
            let costoTotal = 0;
            for (let i = 0; i < eventos.length; i++) {
                let eventoSeleccionado = false;

                // Verificar si el evento está en la lista de seleccionados
                for (let j = 0; j < eventosSeleccionados.length; j++) {
                    if (eventos[i].nombre === eventosSeleccionados[j]) {
                        eventoSeleccionado = true;
                        break; // Salir del ciclo una vez encontrado
                    }
                }
                if (eventoSeleccionado) {
                    costoTotal += eventos[i].precio;
                }
            }

            // Mostrar el costo total en consola
            document.getElementById('resultadoCosto').textContent = console.log("Costo Total: $" + costoTotal)
        }

//? FIN ALGORITMO DE CICLO