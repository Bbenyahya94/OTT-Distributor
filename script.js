document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const overlay = document.getElementById('mobileMenuOverlay');
  const backdrop = document.getElementById('menuBackdrop');
  if (mobileBtn && overlay && backdrop) {
    function updateMobileMenu() {
      const desktopMenu = document.querySelector('.nav-menu');
      if (!desktopMenu) return;
      overlay.innerHTML = '';
      const items = desktopMenu.querySelectorAll('li');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        overlay.appendChild(clone);
      });
      overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          overlay.classList.remove('active');
          backdrop.classList.remove('active');
        });
      });
    }
    updateMobileMenu();
    mobileBtn.addEventListener('click', () => {
      overlay.classList.toggle('active');
      backdrop.classList.toggle('active');
    });
    backdrop.addEventListener('click', () => {
      overlay.classList.remove('active');
      backdrop.classList.remove('active');
    });
  }

  // Dark mode toggle (add to nav menu)
  function initDarkMode() {
    if (document.querySelector('.dark-mode-toggle')) return;
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'dark-mode-toggle';
    const icon = document.createElement('i');
    const isDark = localStorage.getItem('darkMode') === 'true';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    toggleBtn.appendChild(icon);
    toggleBtn.appendChild(document.createTextNode(' Dark Mode'));
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      const li = document.createElement('li');
      li.appendChild(toggleBtn);
      navMenu.appendChild(li);
    }
    if (isDark) document.body.classList.add('dark-mode');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const darkOn = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', darkOn);
      const newIcon = darkOn ? 'fas fa-sun' : 'fas fa-moon';
      document.querySelectorAll('.dark-mode-toggle i').forEach(ic => ic.className = newIcon);
    });
  }
  initDarkMode();

  // Slideshow (only on pages that have it)
  const slides = document.querySelectorAll('.slide-hero');
  const dotsContainer = document.getElementById('dotsHero');
  if (slides.length && dotsContainer) {
    let currentIndex = 0, autoInterval;
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

  // FAQ accordion (only on pages that have it)
  document.querySelectorAll('.faq-question').forEach(q => {
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
