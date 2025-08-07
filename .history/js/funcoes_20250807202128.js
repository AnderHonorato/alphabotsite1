document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
      // Painel tá aberto, fecha ele
      panel.style.maxHeight = null;
      panel.classList.remove('active');
    } else {
      // Fecha outros painéis, se quiser só 1 aberto por vez, pode remover essa parte se quiser multi-open
      document.querySelectorAll('.panel').forEach(p => {
        p.style.maxHeight = null;
        p.classList.remove('active');
      });
      document.querySelectorAll('.accordion').forEach(btn => btn.classList.remove('active'));

      // Abre o painel clicado
      button.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.classList.add('active');
    }
  });
});
