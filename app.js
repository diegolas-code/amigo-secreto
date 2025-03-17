// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo()
{    
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();

        input.value = "";
        input.focus();
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function actualizarLista()
{
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++)
    {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.append(nuevoElemento);
    }
}

const inputAmigo = document.getElementById("amigo");

function detectarEnter(event)
{
    if (event.key === "Enter") {
        agregarAmigo();
    }
}

inputAmigo.addEventListener("keydown", detectarEnter);

function sortearAmigo()
{
    if (amigos.length === 0)
    {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo seleccionado: <strong>${amigoSorteado}</strong>`;
}