document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const panel = button.nextElementSibling;

    if (panel.style.height && panel.style.height !== '0px') {
      // Fechar painel
      panel.style.height = panel.scrollHeight + 'px'; // garante o start da transição
      // Força reflow (pra garantir que o browser "veja" a mudança)
      panel.offsetHeight;
      panel.style.height = '0px';
      panel.classList.remove('active');
    } else {
      // Abre painel

      // Fecha outros painéis (se quiser só 1 aberto)
      document.querySelectorAll('.panel').forEach(p => {
        p.style.height = '0px';
        p.classList.remove('active');
      });
      document.querySelectorAll('.accordion').forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');

      panel.style.height = panel.scrollHeight + 'px';
      panel.classList.add('active');

      // Quando terminar a transição, troca pra 'auto' pra ficar flexível
      panel.addEventListener('transitionend', function transitionEnd() {
        if (panel.classList.contains('active')) {
          panel.style.height = 'auto';
        }
        panel.removeEventListener('transitionend', transitionEnd);
      });
    }
  });
});
