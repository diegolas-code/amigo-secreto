// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    
    if (nombre) {
        amigos.push(nombre);

        // const lista = document.getElementById("listaAmigos");
        // const nuevoElemento = document.createElement("li");
        // nuevoElemento.textContent = nombre;

        // lista.append(nuevoElemento);

        input.value = "";
        input.focus();
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}