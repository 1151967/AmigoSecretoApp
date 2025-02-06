// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista global para almacenar los nombres
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();  // Obtener el valor del input y eliminar espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = '';

    // Actualizar la lista de amigos en la interfaz
    mostrarLista();
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpiar la lista antes de volver a mostrarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un ganador aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    // Escoger un ganador aleatorio
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el ganador en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El ganador es: ${ganador}!`;
}
