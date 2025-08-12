console..log('Ejecutando el sistema')


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde vamos a guardar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitamos espacios innecesarios

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Actualizar la lista visual
    mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiamos para evitar duplicados

    // Recorrer el array y crear un <li> para cada amigo
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // limpiar resultados previos

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    ulResultado.appendChild(li);
}

