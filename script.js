// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. LÓGICA DE FILTROS PARA SERVICIOS ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceCards = document.querySelectorAll(".service-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Agregar clase active al botón clickeado
            button.classList.add("active");

            // Obtener la categoría seleccionada
            const filterValue = button.getAttribute("data-filter");

            // Mostrar/Ocultar tarjetas según la categoría
            serviceCards.forEach(card => {
                if (filterValue === "todos" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // --- 2. LÓGICA DE ACORDEÓN PARA PREGUNTAS FRECUENTES (FAQ) ---
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            // Obtener el contenedor padre (.faq-item)
            const faqItem = question.parentElement;

            // Alternar la clase 'active' para abrir o cerrar
            faqItem.classList.toggle("active");

            // Cambiar el signo + a - visualmente
            const span = question.querySelector("span");
            if (faqItem.classList.contains("active")) {
                span.textContent = "−";
            } else {
                span.textContent = "+";
            }
        });
    });

});