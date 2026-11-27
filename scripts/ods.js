const puertas = document.getElementById("fuga");
const boton = document.getElementById("apertura");
const dominio = document.getElementById("expansiondedominio");

boton.addEventListener('click', function(){
    puertas.classList.toggle('activo');
    dominio.classList.toggle('activo');
});