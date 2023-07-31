# bootcampjs-Modulo05

## Juego de las siete media

### Apartados obligatorios

1. Mostrar puntuación
   Arranca por crear una variable que almacena la puntuación que lleve el usuario:

- Crea una variable para almacenar la puntuación, inicialmente será 0.
- Crea un div en el HTML en el que podamos mostrar la puntuación.
- Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.
- Invoca a la función en cuanto este disponible el DOM.
  Más adelante invocaremos muestraPuntuación cada vez que el usuario pida carta nueva.

2. Pedir carta
   Implementa la funcionalidad de pedir carta, ¿En qué consiste?

- Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.
- Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.
- Para probar este caso, de momento muestra la carta elegida por consola.

3. Mostrar carta

- Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro.

Crea una función mostrar carta, para mapear valor a imagen de carta puedes utilizar un switch para hacer la conversión, recuerda que más arriba tienes los enlaces a las imágenes de las cartas.

Cuando el usuario pulse en el bóton Pide Carta llama a pideCarta y con el resultado llama a mostrarCarta.

3. Sumar puntuación
   Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.

Pistas

- Tenemos un div donde mostramos la puntuación y tenemos una variable donde la almacenamos.
- Suma el nuevo valor y llama a la función que creamos previamente para mostrar la información.

### Apartados opcionales

Game over
Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.

Me planto

Añadir un botón para que el usuario pueda plantarse, si el usuario se planta, el juego termina, el usuario no puede pedir más cartas y:

- Si su puntación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".

- Si la puntuación es mayor o igual que 4 y menor que 6, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".

- Si la puntuación ha sido mayor o igual a 6 o menor o igual a 7, mostrar un mensaje que diga... "Casi casí...".

- Si la puntuacion es 7.5, mostrar un mensaje que diga "¡Lo has clavado! ¡Enohorabuena!"

Nueva partida

Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), se le muestra un botón para que pueda empezar una nueva partida.

Saber lo que habría pasado

Una vez que el usuario ya se ha plantado, se le muestra un botón para que pueda saber lo que habría pasado si hubiera seguido pidiendo cartas.

Estila la aplicación
Utilizando CSS, estila la aplicación (margenes, espacios, colores, etc...) para que tenga el mejor aspecto posible.
