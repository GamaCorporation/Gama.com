const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });

    dots.forEach((dot, i) => {
      dot.classList.remove('bg-blue');
      if (i === index) dot.classList.add('bg-blue');
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Iniciar o carrossel automático
  setInterval(nextSlide, 5000);

  // Clique nas bolinhas
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showSlide(current);
    });
  });

  showSlide(current);
