// Código JavaScript

// Animación de desplazamiento suave al hacer clic en los enlaces del menú

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const target = document.querySelector(targetId);
  target.scrollIntoView({
    behavior: 'smooth'
  });
}