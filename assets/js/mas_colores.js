document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    /* Cambiar a color 1 */
    cambiarColor1("pink");
  } else if (event.key === "s") {
    /* Cambiar a color 2 */
    cambiarColor1("orange");
  } else if (event.key === "d") {
    /* Cambiar a color 3 */
    cambiarColor1("lightblue");
  } else if (event.key === "q") {
    agregarDiv("purple");
  } else if (event.key === "w") {
    agregarDiv("grey");
  } else if (event.key === "e") {
    agregarDiv("brown");
  }
});

const key = document.querySelector("#key");
const key1 = document.querySelector("#key1");

function cambiarColor1(color) {
  key.style.backgroundColor = color;
}

function  agregarDiv(color) {
        // Obtenemos el elemento contenedor por su ID
        contenedor = document.getElementById("contenedor");
        // Creamos un nuevo elemento <div>
        nuevoElemento = document.createElement("div");

        nuevoElemento.style.backgroundColor = color;

        nuevoElemento.style.width = "200px";   
        nuevoElemento.style.height = "200px";
   
        contenedor.appendChild(nuevoElemento);
    
  }
  