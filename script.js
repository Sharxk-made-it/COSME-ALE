document.addEventListener('DOMContentLoaded', () => {
// 1. NAVEGACIÓN MÓVIL
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
navToggle.addEventListener('click', () => {
navMenu.classList.toggle('is-active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-active');
  });
});


}

// 2. FILTRADO DINÁMICO DE SERVICIOS
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
const filter = btn.getAttribute('data-filter');

  // Cambiar estado activo en botones
  filterBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filtrar servicios
  serviceCards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});


});

// 3. ACCORDEÓN (FAQ)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
header.addEventListener('click', () => {
const accordionItem = header.parentElement;
const isExpanded = header.getAttribute('aria-expanded') === 'true';

  // Cerrar otros acordeones abiertos
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.classList.remove('active');
    const btn = item.querySelector('.accordion-header');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });

  // Alternar el acordeón seleccionado
  if (!isExpanded) {
    accordionItem.classList.add('active');
    header.setAttribute('aria-expanded', 'true');
  }
});


});
});