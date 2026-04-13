// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Dark mode toggle
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = darkToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkToggle.querySelector('i').classList.remove('fa-moon');
      darkToggle.querySelector('i').classList.add('fa-sun');
    }
  }

  // Slideshow
  const slides = document.querySelectorAll('.slide-hero');
  const dotsContainer = document.getElementById('dotsHero');
  if (slides.length && dotsContainer) {
    let currentIndex = 0;
    let autoInterval;
    function createDots() {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot-hero');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });
    }
    function goToSlide(index) {
      slides.forEach((s, i) => {
        s.classList.remove('active');
        if (dotsContainer.children[i]) dotsContainer.children[i].classList.remove('active');
      });
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      if (dotsContainer.children[currentIndex]) dotsContainer.children[currentIndex].classList.add('active');
      resetAutoSlide();
    }
    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }
    function resetAutoSlide() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(() => nextSlide(), 6000);
    }
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    createDots();
    goToSlide(0);
    resetAutoSlide();
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactFormMessage');
  if (contactForm && contactMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactMsg.innerHTML = '<span style="color:#10b981;">✅ Thank you! We will get back to you within 24 hours.</span>';
      contactForm.reset();
      setTimeout(() => contactMsg.innerHTML = '', 5000);
    });
  }
});
