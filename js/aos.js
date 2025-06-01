<script>
  const carousel = document.querySelector('#heroCarousel');
  const captions = carousel.querySelectorAll('.carousel-caption');

  // Remove animation classes initially
  captions.forEach(caption => {
    caption.classList.remove('animate-fadein', 'animate-slideup');
  });

  // On slide change, add animation to the active caption
  carousel.addEventListener('slid.bs.carousel', () => {
    captions.forEach(caption => {
      caption.classList.remove('animate-fadein', 'animate-slideup');
    });

    const activeItem = carousel.querySelector('.carousel-item.active .carousel-caption');

    if (activeItem.classList.contains('animate-fadein') || activeItem.classList.contains('animate-slideup')) {
      // force reflow to restart animation
      void activeItem.offsetWidth;
    }

    if (activeItem) {
      if (activeItem.classList.contains('animate-slideup')) {
        activeItem.classList.add('animate-slideup');
      } else {
        activeItem.classList.add('animate-fadein');
      }
    }
  });
</script>
