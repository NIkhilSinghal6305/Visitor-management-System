const gallery = document.querySelector('.gallery');
const container = document.querySelector('.card-container');

// Disable mouse-based movement on touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  gallery.addEventListener('mousemove', (e) => {
    const galleryWidth = gallery.offsetWidth;
    const containerWidth = container.scrollWidth;

    const mouseX = e.clientX / galleryWidth;
    const maxTranslate = containerWidth - galleryWidth;
    const translateX = -mouseX * maxTranslate;

    container.style.transform = `translateX(${translateX}px)`;
  });
}
