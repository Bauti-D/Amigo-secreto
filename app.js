// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarAmigos(); 
        inputNombre.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido o único.");
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para sortear.");
        return;
    }

    let amigosSecretos = [...amigos]; 
    
    let sorteados = [];
    let resultadoLista = document.getElementById("resultado");

    for (let i = 0; i < amigos.length; i++) {
        let indiceAleatorio;

        do {
            indiceAleatorio = Math.floor(Math.random() * amigosSecretos.length);
        } while (amigos[i] === amigosSecretos[indiceAleatorio]);

        const amigoSorteado = amigosSecretos.splice(indiceAleatorio, 1)[0];
        sorteados.push({ amigo: amigos[i], amigoSecreto: amigoSorteado });
    }

    resultadoLista.innerHTML = "";
    sorteados.forEach(sorteo => {
        const li = document.createElement("li");
        li.textContent = `${sorteo.amigo} -> ${sorteo.amigoSecreto}`;
        resultadoLista.appendChild(li);
    });
}