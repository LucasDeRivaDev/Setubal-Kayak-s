// Cierra el menú hamburguesa al hacer click en un link de navegación
document.querySelectorAll('.ul-links a.link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('menu-hamburguesa').checked = false;
  });
});
