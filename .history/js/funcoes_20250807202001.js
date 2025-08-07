document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const panel = button.nextElementSibling;

    if (panel.classList.contains('active')) {
      // fecha
      panel.style.maxHeight = null;
      panel.classList.remove('active');
    } else {
      // abre
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.classList.add('active');
    }
  });
});
