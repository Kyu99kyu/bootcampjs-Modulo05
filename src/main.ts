import "./style.css";

let puntos: number = 0;
let carta: number = 0;
const divPuntiacion: HTMLElement | null = document.getElementById("puntuacion");
const btnPlantarse: HTMLInputElement | null = document.getElementById(
  "plnatarse"
) as HTMLInputElement;
const titulo: HTMLElement | null = document.getElementById("titulo");
const btnCarta: HTMLInputElement | null = document.getElementById(
  "pedirCarta"
) as HTMLInputElement;
const btnNueva: HTMLInputElement | null = document.getElementById(
  "nueva"
) as HTMLInputElement;
const imagenCarta: HTMLImageElement | null = document.getElementById(
  "imagenCarta"
) as HTMLImageElement;
const btnFuturo: HTMLInputElement | null = document.getElementById(
  "futuro"
) as HTMLInputElement;

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
btnCarta.addEventListener("click", pedirCarta);
btnPlantarse.addEventListener("click", plantarse);
btnNueva.addEventListener("click", () => {
  puntos = 0;
  muestraPuntuacion();
  btnCarta.disabled = false;
  btnPlantarse.disabled = false;
  if (
    imagenCarta instanceof HTMLImageElement &&
    titulo instanceof HTMLElement &&
    btnFuturo instanceof HTMLInputElement
  ) {
    imagenCarta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    titulo.innerHTML = "7 y medio";
    btnFuturo.hidden = true;
  }
});

function plantarse() {
  if (
    btnPlantarse instanceof HTMLInputElement &&
    titulo instanceof HTMLElement &&
    btnCarta instanceof HTMLInputElement
  ) {
    switch (true) {
      case puntos < 4:
        btnPlantarse.disabled = true;
        btnCarta.disabled = true;
        titulo.innerHTML = "Has sido muy conservador";
        break;
      case puntos >= 4 && puntos < 6:
        btnPlantarse.disabled = true;
        btnCarta.disabled = true;
        titulo.innerHTML = "Te ha entrado el canguelo eh?";
        break;
      case puntos >= 6 && puntos <= 7:
        btnPlantarse.disabled = true;
        btnCarta.disabled = true;
        titulo.innerHTML = "Casi casi...";
        break;
      case puntos === 7.5:
        btnPlantarse.disabled = true;
        btnCarta.disabled = true;
        titulo.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
        break;
    }
    if (btnFuturo instanceof HTMLInputElement) {
      btnFuturo.hidden = false;

      btnFuturo.addEventListener("click", () => {
        btnFuturo.disabled = true;
        pedirCarta();
        titulo.innerHTML = "Esta seria tu siguiente jugada";
      });
    }
  }
}

function muestraPuntuacion() {
  if (divPuntiacion instanceof HTMLElement) {
    divPuntiacion.innerHTML = puntos.toString();
    if (puntos >= 7.5) {
      if (
        titulo instanceof HTMLElement &&
        btnCarta instanceof HTMLInputElement &&
        btnPlantarse instanceof HTMLInputElement
      ) {
        titulo.innerHTML = "Game Over";
        btnCarta.disabled = true;
        btnPlantarse.disabled = true;
      }
    }
    console.log(puntos.toString());
  }
}

function pedirCarta() {
  carta = Math.floor(Math.random() * 10) + 1;
  switch (carta) {
    case 8:
      carta = 11;
      break;
    case 9:
      carta = 12;
      break;
  }
  if (carta === 10 || carta === 11 || carta === 12) {
    puntos += 0.5;
  } else {
    puntos += carta;
  }
  mostrarCarta(carta);
  muestraPuntuacion();
}

const mostrarCarta = (carta: number): void => {
  if (imagenCarta instanceof HTMLImageElement) {
    switch (carta) {
      case 1:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
    }
  }
};
