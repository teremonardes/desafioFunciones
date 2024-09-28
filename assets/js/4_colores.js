

let bloques = document.querySelectorAll("div");

bloques.forEach(bloque=> {

bloque.addEventListener("click", () => {
  bloque.style.backgroundColor = "black";
})
});
