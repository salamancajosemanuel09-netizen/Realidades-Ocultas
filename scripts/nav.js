
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector("#nav");
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    // Reducir la barra al desplazarse
    function actualizarAnimaciones() {
        if (navbar) {
            navbar.classList.toggle("shrink", window.scrollY > 50);
        }
    }

    window.addEventListener("scroll", actualizarAnimaciones);
    actualizarAnimaciones();

    // Comprobar que existen los elementos
    if (!navbar || !menuToggle || !navMenu) {
        console.error("No se encontraron los elementos de navegación");
        return;
    }

    // Abrir y cerrar el menú
    function cerrarMenu() {
        navbar.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }

    menuToggle.addEventListener("click", () => {

        const abierto = navbar.classList.toggle("menu-open");

        menuToggle.setAttribute("aria-expanded", abierto);
        menuToggle.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );

    });

    // Cerrar al seleccionar un enlace
    navMenu.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", cerrarMenu);
    });

    // Cerrar con Escape
    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape") {
            cerrarMenu();
        }
    });

    // Cerrar al pulsar fuera de la navegación
    document.addEventListener("click", evento => {
        if (!navbar.contains(evento.target)) {
            cerrarMenu();
        }
    });

    // Cerrar al volver a escritorio
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            cerrarMenu();
        }
    });

});
