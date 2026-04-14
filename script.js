document.addEventListener('DOMContentLoaded', function() {
  // ========== MOBILE MENU WITH DARK MODE TOGGLE INSIDE ==========
  function initMobileMenu() {
    // Check if elements already exist to avoid duplicates
    if (document.querySelector('.mobile-menu-overlay')) return;

    const nav = document.querySelector('.nav');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (!mobileBtn) return;

    // Create overlay and backdrop
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    const backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    document.body.appendChild(backdrop);
    document.body.appendChild(overlay);

    // Copy navigation links from .nav-menu
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      const clone = link.cloneNode(true);
      overlay.appendChild(clone);
    });

    // Add dark mode toggle inside mobile menu
    const mobileDarkToggle = document.createElement('button');
    mobileDarkToggle.className = 'mobile-dark-toggle';
    const icon = document.createElement('i');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    mobileDarkToggle.appendChild(icon);
    mobileDarkToggle.appendChild(document.createTextNode(' Dark Mode'));
    overlay.appendChild(mobileDarkToggle);

    // Toggle mobile menu
    mobileBtn.addEventListener('click', () => {
      overlay.classList.toggle('active');
      backdrop.classList.toggle('active');
    });

    backdrop.addEventListener('click', () => {
      overlay.classList.remove('active');
      backdrop.classList.remove('active');
    });

    // Close menu when a link is clicked
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('active');
        backdrop.classList.remove('active');
      });
    });

    // Dark mode toggle from mobile menu
    mobileDarkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      const iconElem = mobileDarkToggle.querySelector('i');
      if (isDark) {
        iconElem.classList.remove('fa-moon');
        iconElem.classList.add('fa-sun');
      } else {
        iconElem.classList.remove('fa-sun');
        iconElem.classList.add('fa-moon');
      }
      // Also update desktop dark toggle if exists
      const desktopToggle = document.querySelector('.desktop-dark-toggle');
      if (desktopToggle) {
        const deskIcon = desktopToggle.querySelector('i');
        if (isDark) {
          deskIcon.classList.remove('fa-moon');
          deskIcon.classList.add('fa-sun');
        } else {
          deskIcon.classList.remove('fa-sun');
          deskIcon.classList.add('fa-moon');
        }
      }
    });
  }

  // ========== DESKTOP DARK MODE TOGGLE ==========
  function initDesktopDarkToggle() {
    if (window.innerWidth <= 768) return;
    let desktopToggle = document.querySelector('.desktop-dark-toggle');
    if (desktopToggle) return;

    const nav = document.querySelector('.nav');
    desktopToggle = document.createElement('button');
    desktopToggle.className = 'desktop-dark-toggle';
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const icon = document.createElement('i');
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    desktopToggle.appendChild(icon);
    nav.appendChild(desktopToggle);

    desktopToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      const iconElem = desktopToggle.querySelector('i');
      if (isDark) {
        iconElem.classList.remove('fa-moon');
        iconElem.classList.add('fa-sun');
      } else {
        iconElem.classList.remove('fa-sun');
        iconElem.classList.add('fa-moon');
      }
      // Also update mobile dark toggle if exists
      const mobileToggle = document.querySelector('.mobile-dark-toggle');
      if (mobileToggle) {
        const mobIcon = mobileToggle.querySelector('i');
        if (isDark) {
          mobIcon.classList.remove('fa-moon');
          mobIcon.classList.add('fa-sun');
        } else {
          mobIcon.classList.remove('fa-sun');
          mobIcon.classList.add('fa-moon');
        }
      }
    });
  }

  // Apply saved dark mode on load
  function applySavedDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      const allToggles = document.querySelectorAll('.desktop-dark-toggle i, .mobile-dark-toggle i');
      allToggles.forEach(icon => {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      });
    }
  }

  // ========== HERO SLIDESHOW (auto-rotate) ==========
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

  // Initialize all components
  initMobileMenu();
  initDesktopDarkToggle();
  applySavedDarkMode();
  initSlideshow();
  initFaq();
  initContactForm();
});
