document.addEventListener('DOMContentLoaded', function() {
  // ========== MOBILE MENU ==========
  function initMobileMenu() {
    if (document.querySelector('.mobile-menu-overlay')) return;

    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (!mobileBtn) return;

    // Create overlay and backdrop
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    const backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    document.body.appendChild(backdrop);
    document.body.appendChild(overlay);

    // Clone all .nav-menu items (including the dark mode toggle)
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      const items = navMenu.querySelectorAll('li');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        overlay.appendChild(clone);
      });
    }

    // Toggle menu
    mobileBtn.addEventListener('click', () => {
      overlay.classList.toggle('active');
      backdrop.classList.toggle('active');
    });

    backdrop.addEventListener('click', () => {
      overlay.classList.remove('active');
      backdrop.classList.remove('active');
    });

    // Close menu when a link is clicked
    overlay.querySelectorAll('a, .dark-mode-toggle-link').forEach(el => {
      el.addEventListener('click', () => {
        overlay.classList.remove('active');
        backdrop.classList.remove('active');
      });
    });
  }

  // ========== SINGLE DARK MODE TOGGLE ==========
  function initDarkMode() {
    // Check if toggle already exists
    if (document.querySelector('.dark-mode-toggle-link')) return;

    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    // Create list item for dark mode toggle
    const li = document.createElement('li');
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'dark-mode-toggle-link';
    const icon = document.createElement('i');
    const isDark = localStorage.getItem('darkMode') === 'true';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    toggleBtn.appendChild(icon);
    toggleBtn.appendChild(document.createTextNode(' Dark Mode'));
    li.appendChild(toggleBtn);
    navMenu.appendChild(li);

    // Apply saved dark mode
    if (isDark) {
      document.body.classList.add('dark-mode');
    }

    // Toggle event
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const darkModeOn = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', darkModeOn);
      const newIcon = darkModeOn ? 'fas fa-sun' : 'fas fa-moon';
      toggleBtn.querySelector('i').className = newIcon;
    });
  }

  // ========== HERO SLIDESHOW ==========
  function initSlideshow() {
    const slides = document.querySelectorAll('.slide-hero');
    const dotsContainer = document.getElementById('dotsHero');
    if (!slides.length || !dotsContainer) return;

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

  // ========== CONTACT FORM ==========
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

  // Run all
  initDarkMode();
  initMobileMenu();
  initSlideshow();
  initFaq();
  initContactForm();
});
