document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu elements if they don't exist
  const nav = document.querySelector('.nav');
  const existingOverlay = document.querySelector('.mobile-menu-overlay');
  if (!existingOverlay) {
    // Build mobile menu structure
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    const backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    document.body.appendChild(backdrop);
    document.body.appendChild(overlay);
    
    // Copy navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      const clone = link.cloneNode(true);
      overlay.appendChild(clone);
    });
    
    // Add dark mode toggle inside mobile menu
    const mobileDarkToggle = document.createElement('button');
    mobileDarkToggle.className = 'mobile-dark-toggle';
    const icon = document.createElement('i');
    icon.className = localStorage.getItem('darkMode') === 'true' ? 'fas fa-sun' : 'fas fa-moon';
    mobileDarkToggle.appendChild(icon);
    mobileDarkToggle.appendChild(document.createTextNode(' Dark Mode'));
    overlay.appendChild(mobileDarkToggle);
    
    // Toggle mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        overlay.classList.toggle('active');
        backdrop.classList.toggle('active');
      });
    }
    
    backdrop.addEventListener('click', () => {
      overlay.classList.remove('active');
      backdrop.classList.remove('active');
    });
    
    // Dark mode toggle from mobile menu
    mobileDarkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      // Update icon
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
  
  // Desktop dark mode toggle (create if not exists)
  let desktopToggle = document.querySelector('.desktop-dark-toggle');
  if (!desktopToggle && window.innerWidth > 768) {
    const headerRight = document.querySelector('.nav');
    desktopToggle = document.createElement('button');
    desktopToggle.className = 'desktop-dark-toggle';
    const icon = document.createElement('i');
    icon.className = localStorage.getItem('darkMode') === 'true' ? 'fas fa-sun' : 'fas fa-moon';
    desktopToggle.appendChild(icon);
    headerRight.appendChild(desktopToggle);
    
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
      // Also update mobile dark toggle icon if exists
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
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const allToggles = document.querySelectorAll('.desktop-dark-toggle i, .mobile-dark-toggle i');
    allToggles.forEach(icon => {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    });
  }
  
  // Slideshow code (keep your existing slideshow logic)
  // ... (your existing slideshow code here)
  
  // FAQ accordion (keep your existing FAQ code)
  // ... (your existing FAQ code here)
  
  // Contact form (keep your existing form code)
  // ... (your existing contact form code)
});
