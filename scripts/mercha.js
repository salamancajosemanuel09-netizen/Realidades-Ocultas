document.addEventListener("DOMContentLoaded", () => {
    const inputsCantidad = document.querySelectorAll(".input-cantidad");
    const totalCotizacion = document.getElementById("total-cotizacion");

    function calcularTotal() {
        let granTotal = 0;

        inputsCantidad.forEach(input => {
            const cantidad = parseInt(input.value) || 0;
            const precio = parseInt(input.getAttribute("data-precio")) || 0;
            granTotal += cantidad * precio;
        });

        // Formatear a moneda colombiana o formato estándar con puntos
        totalCotizacion.textContent = `$ ${granTotal.toLocaleString("es-CO")} COP`;
    }

    inputsCantidad.forEach(input => {
        input.addEventListener("input", calcularTotal);
    });
});