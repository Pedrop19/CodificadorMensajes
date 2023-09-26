let mensaje = prompt("Escribe el mensaje que quieres cifrar");

let mensajeSinCifrar = document.getElementById("mensajeNorm");
mensajeSinCifrar.textContent = `${mensaje.toUpperCase()}`;
let imagenElement = document.getElementById("imgElement");
imagenElement.id = "img1";
imagenElement.src = "./resources/off.png";
let estado = 0;

function cambioImagen() {
  if (estado == 1) {
    imagenElement.src = "./resources/on.png";
    estado = 0;
  } else {
    imagenElement.src = "./resources/off.png";
    estado = 1;
  }
}

function cifrarMensaje() {
  mensaje = mensaje.split("");

  for (let i = 0; i < mensaje.length; ++i) {
    switch (mensaje[i]) {
      case "z":
        mensaje[i] = "a";
        break;
      case "Z":
        mensaje[i] = "A";
        break;
      case "1" - "8":
        mensaje[i] = mensaje[i] + 1;
        break;
      case "9":
        mensaje[i] = "0";
        break;
      default:
        mensaje[i] = String.fromCharCode(mensaje[i].charCodeAt(0) + 1);
    }
  }

  return mensaje.join("");
}

let mensajeCifrado = document.getElementById("mensajeCifr");
mensajeCifrado.textContent = `${cifrarMensaje().toUpperCase()}`;
imagenElement.addEventListener("click", cambioImagen);
