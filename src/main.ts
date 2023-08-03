import "./style.css";

let puntos: number = 0;
const divPuntiacion: HTMLElement | null = document.getElementById("puntuacion");
const btnPlantarse: HTMLElement | null = document.getElementById("plantarse");
const titulo: HTMLElement | null = document.getElementById("titulo");
const btnCarta: HTMLElement | null = document.getElementById("pedirCarta");
const btnNueva: HTMLElement | null = document.getElementById("nueva");
const imagenCarta: HTMLElement | null = document.getElementById("imagenCarta");
const btnFuturo: HTMLElement | null = document.getElementById("futuro");

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  eventos();
});

function muestraPuntuacion() {
  if (divPuntiacion instanceof HTMLElement) {
    divPuntiacion.textContent = puntos.toString();
    if (puntos > 7.5) {
      if (
        titulo instanceof HTMLElement &&
        btnCarta instanceof HTMLInputElement &&
        btnPlantarse instanceof HTMLInputElement
      ) {
        titulo.textContent = "Game Over";
        btnCarta.disabled = true;
        btnPlantarse.disabled = true;
      }
    }
    console.log(puntos.toString());
  }
}

function eventos() {
  if (
    btnCarta instanceof HTMLInputElement &&
    btnPlantarse instanceof HTMLInputElement &&
    btnNueva instanceof HTMLInputElement &&
    btnFuturo instanceof HTMLInputElement &&
    titulo instanceof HTMLElement
  ) {
    btnCarta.addEventListener("click", () => {
      let carta = generarCarta();
      puntos += generarValorCarta(carta);
      mostrarCarta(carta);
      muestraPuntuacion();
    });
    btnPlantarse.addEventListener("click", () => {
      if (
        btnFuturo instanceof HTMLInputElement &&
        titulo instanceof HTMLElement
      ) {
        comprobarPuntos(puntos);
        btnFuturo.hidden = false;
      }
    });
    btnFuturo.addEventListener("click", () => {
      let carta = generarCarta();
      puntos += generarValorCarta(carta);
      mostrarCarta(carta);
      muestraPuntuacion();
      btnFuturo.disabled = true;
      titulo.textContent = "Esta seria tu siguiente jugada";
    });
    btnNueva.addEventListener("click", () => {
      puntos = 0;
      muestraPuntuacion();
      btnCarta.disabled = false;
      if (
        btnPlantarse instanceof HTMLInputElement &&
        btnFuturo instanceof HTMLInputElement
      ) {
        btnPlantarse.disabled = false;
        btnFuturo.disabled = false;
      }
      if (
        imagenCarta instanceof HTMLImageElement &&
        titulo instanceof HTMLElement &&
        btnFuturo instanceof HTMLInputElement
      ) {
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        titulo.textContent = "Juego de las siete media";
        btnFuturo.hidden = true;
      }
    });
  }
}

function generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 10) + 1;
}

function generarCarta(): number {
  const numeroAleatorio = generarNumeroAleatorio();
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}

function generarValorCarta(valorCarta: number) {
  puntos = valorCarta >= 10 ? 0.5 : valorCarta;
  return puntos;
}

function comprobarPuntos(puntos: number) {
  if (
    btnPlantarse instanceof HTMLInputElement &&
    titulo instanceof HTMLElement &&
    btnCarta instanceof HTMLInputElement
  ) {
    if (puntos < 4) {
      btnPlantarse.disabled = true;
      btnCarta.disabled = true;
      titulo.textContent = "Has sido muy conservador";
    } else if (puntos >= 4 && puntos < 6) {
      btnPlantarse.disabled = true;
      btnCarta.disabled = true;
      titulo.textContent = "Te ha entrado el canguelo eh?";
    } else if (puntos >= 6 && puntos <= 7) {
      btnPlantarse.disabled = true;
      btnCarta.disabled = true;
      titulo.textContent = "Casi casi...";
    } else if (puntos === 7.5) {
      btnPlantarse.disabled = true;
      btnCarta.disabled = true;
      titulo.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    }
  }
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
