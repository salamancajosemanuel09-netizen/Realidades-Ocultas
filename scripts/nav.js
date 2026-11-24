document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("#nav");

    function actualizarAnimaciones() {
        // Reducir el menú
        if (navbar) {
            navbar.classList.toggle(
                "shrink",
                window.scrollY > 50
            );
        }
    }
});