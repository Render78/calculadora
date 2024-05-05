const botonesAgregar = document.querySelectorAll(".btnAgregar");
const pantalla = document.querySelector("#pantalla");
const btnCalcular = document.querySelector("#btnCalcular");
const btnBorrar = document.querySelector("#btnBorrar");

botonesAgregar.forEach((btn) => btn.addEventListener("click", () => {
    pantalla.value += btn.value;
}));

btnBorrar.addEventListener("click", () => {
    pantalla.value = "";
})

btnCalcular.addEventListener("click", () => {
    pantalla.value = eval(pantalla.value);
});