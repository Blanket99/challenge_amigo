let amigos = [];

/** Agrega un nuevo amigo a la lista.
 * Valida que el nombre:
 * - No esté vacío
 * - No contenga números ni caracteres especiales
 * - No sea un duplicado
 */
function agregarAmigo() {
  let inputAmigo = document.querySelector("#amigo");
  let nombreAmigo = inputAmigo.value.trim();
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;  // Expresión para permitir solo letras, tildes y espacios

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
  } else if (!regex.test(nombreAmigo)) {
    alert("Solo se permiten letras y espacios. No se aceptan números ni caracteres especiales.");
  } else if (amigos.includes(nombreAmigo.toLowerCase())) {
    alert("Este nombre ya ha sido agregado.");
  } else {
    amigos.push(nombreAmigo);
    inputAmigo.value = ""; 
    inputAmigo.focus(); // Mantiene el foco en el input para agilizar la entrada
    mostrarListaAmigo(); // Actualiza la lista visual
  }
}

//Muestra la lista de amigos en pantalla y se limpia la lista antes de agregar los nuevos elementos.
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

  amigos.forEach((amigo) => {
    let itemLista = document.createElement("li");
    itemLista.innerText = amigo; // Asigna el nombre al elemento
    listaAmigos.appendChild(itemLista);
  });
}

// Sortea aleatoriamente y muestra el resultado en pantalla
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, agregue al menos un nombre antes de sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  document.querySelector("#resultado").innerText = `🎉 Amigo Secreto: ${amigos[indiceAleatorio]} 🎉`;
}