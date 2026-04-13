/* ============================================
   OTT Distributor - Global JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initSlideshow();
  initFaq();
  initContactForm();
  initMobileMenu();
});

// ========== HERO SLIDESHOW (auto-rotate) ==========
function initSlideshow() {
  const slides = document.querySelectorAll('.slide-hero');
  const dotsContainer = document.getElementById('dotsHero');
  if (!slides.length || !dotsContainer) return;

  let currentIndex = 0;
  let autoInterval;

  // Create dots
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
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
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

  // Attach controls if they exist
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

  createDots();
  goToSlide(0);
  resetAutoSlide();
}

// ========== FAQ ACCORDION ==========
function initFaq() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const icon = q.querySelector('i');
      if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        answer.style.maxHeight = null;
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        answer.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// ========== CONTACT FORM SUBMISSION ==========
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactFormMessage');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (contactMsg) {
      contactMsg.innerHTML = '<span style="color:#10b981;">✅ Thank you! We will get back to you within 24 hours.</span>';
      contactForm.reset();
      setTimeout(() => contactMsg.innerHTML = '', 5000);
    }
  });
}

// ========== MOBILE MENU TOGGLE (optional) ==========
function initMobileMenu() {
  // If you add a hamburger button later, you can extend this
  // Currently the navigation is responsive without a toggle.
  // This function is a placeholder for future enhancements.
}
