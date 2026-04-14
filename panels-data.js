<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>OTT Distributor | #1 IPTV Reseller Platform – Trex, 8K Strong, Dream 4K</title>
  <meta name="description" content="Start your IPTV reseller business with OTT Distributor. 15+ premium panels (Trex, 8K Strong, Dream 4K, Crystal OTT, Magnum OTT, Eagle, ProMax, Tivione, Mega, Infinity, Max, Nexon). Free trials, wholesale credits, 24/7 support. Profit up to 300%.">
  <meta name="keywords" content="OTT distributor, IPTV reseller, IPTV subscriptions, wholesale credits, Trex IPTV, 8K Strong, Dream 4K, Crystal OTT, Magnum OTT, Eagle IPTV, ProMax, Tivione, Mega OTT, Infinity IPTV, Max OTT, Nexon IPTV">
  <meta name="author" content="OTT Distributor">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://ottdistributor.net/">
  <meta property="og:title" content="OTT Distributor | #1 IPTV Reseller Platform">
  <meta property="og:description" content="Official Reseller for Trex, 8K Strong, Dino, Lion, Crystal, Magnum, Dream 4K, Eagle, ProMax, Tivione, Mega, Infinity, Max, Nexon. Free trials & wholesale credits.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ottdistributor.net/">
  <meta name="twitter:card" content="summary_large_image">
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    /* ========== GLOBAL STYLES ========== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #f8fafc;
      color: #0f172a;
      line-height: 1.5;
      transition: background 0.3s, color 0.3s;
    }

    /* Dark mode: background dark, text light */
    body.dark-mode {
      background: #0f172a;
      color: #e2e8f0;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ========== HEADER & NAVIGATION ========== */
    .header {
      background: white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid #e2e8f0;
      transition: background 0.3s, border-color 0.3s;
    }

    body.dark-mode .header {
      background: #1e293b;
      border-bottom-color: #334155;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      max-width: 1400px;
      margin: 0 auto;
      flex-wrap: wrap;
      gap: 16px;
      position: relative;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .logo img {
      height: 40px;
      width: auto;
    }
    .logo span {
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #0f172a, #3b82f6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    body.dark-mode .logo span {
      background: linear-gradient(135deg, #e2e8f0, #60a5fa);
      -webkit-background-clip: text;
      background-clip: text;
    }

    /* Desktop navigation menu */
    .nav-menu {
      display: flex;
      gap: 20px;
      list-style: none;
      flex-wrap: wrap;
      align-items: center;
    }

    .nav-menu a, .dark-mode-toggle {
      text-decoration: none;
      color: #1e293b;
      font-weight: 500;
      transition: color 0.2s;
      font-size: 0.95rem;
      cursor: pointer;
      background: none;
      border: none;
    }

    body.dark-mode .nav-menu a,
    body.dark-mode .dark-mode-toggle {
      color: #cbd5e1;
    }

    .nav-menu a:hover,
    .nav-menu a.active,
    .dark-mode-toggle:hover {
      color: #2563eb;
    }

    /* Dark mode toggle button (same style as a link) */
    .dark-mode-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
    }

    /* Mobile menu button */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #1e293b;
    }

    body.dark-mode .mobile-menu-btn {
      color: #cbd5e1;
    }

    /* Mobile slide-out menu */
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: -100%;
      width: 80%;
      max-width: 320px;
      height: 100%;
      background: white;
      z-index: 200;
      transition: left 0.3s ease;
      box-shadow: 2px 0 10px rgba(0,0,0,0.1);
      padding: 80px 24px 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    body.dark-mode .mobile-menu-overlay {
      background: #1e293b;
    }

    .mobile-menu-overlay.active {
      left: 0;
    }

    .mobile-menu-overlay a,
    .mobile-menu-overlay .dark-mode-toggle {
      text-decoration: none;
      color: #1e293b;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 8px 0;
      display: block;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
      font-family: inherit;
    }

    body.dark-mode .mobile-menu-overlay a,
    body.dark-mode .mobile-menu-overlay .dark-mode-toggle {
      color: #cbd5e1;
    }

    .mobile-menu-overlay a.active {
      color: #2563eb;
    }

    /* Backdrop when menu is open */
    .menu-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 150;
      display: none;
    }

    .menu-backdrop.active {
      display: block;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: block;
      }
      .nav-menu {
        display: none;
      }
    }

    @media (min-width: 769px) {
      .mobile-menu-overlay,
      .menu-backdrop {
        display: none;
      }
    }

    /* ========== REST OF THE STYLES (info-banner, slideshow, panels, etc.) ========== */
    .info-banner {
      background: linear-gradient(135deg, #eef2ff, #ffffff, #e0e7ff);
      background-size: 200% 200%;
      animation: gradientShift 8s ease infinite;
      text-align: center;
      padding: 48px 24px;
      border-bottom: 1px solid #e2e8f0;
    }
    body.dark-mode .info-banner {
      background: linear-gradient(135deg, #1e293b, #0f172a, #1e293b);
      border-bottom-color: #334155;
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .info-banner h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 16px;
      color: #0f172a;
    }
    body.dark-mode .info-banner h2 {
      color: #f1f5f9;
    }
    .info-banner p {
      font-size: 1.1rem;
      color: #334155;
      max-width: 700px;
      margin: 0 auto 28px;
    }
    body.dark-mode .info-banner p {
      color: #94a3b8;
    }
    .banner-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn-primary, .btn-secondary, .btn-outline {
      padding: 12px 28px;
      border-radius: 40px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      transition: transform 0.2s, background 0.2s;
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .btn-primary {
      background: #2563eb;
      color: white;
      box-shadow: 0 2px 8px rgba(37,99,235,0.2);
    }
    .btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
    .btn-secondary {
      background: #0f172a;
      color: white;
    }
    .btn-secondary:hover { background: #1e293b; transform: translateY(-2px); }
    .btn-outline {
      background: transparent;
      border: 1.5px solid #2563eb;
      color: #2563eb;
    }
    .btn-outline:hover { background: #2563eb; color: white; transform: translateY(-2px); }
    body.dark-mode .btn-secondary {
      background: #334155;
      color: white;
    }
    body.dark-mode .btn-secondary:hover {
      background: #475569;
    }

    .hero-slideshow {
      position: relative;
      width: 100%;
      height: 500px;
      overflow: hidden;
      background: #0f172a;
    }
    .slide-hero {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      background-size: cover;
      background-position: center;
    }
    .slide-hero.active { opacity: 1; z-index: 2; }
    .slide-content {
      max-width: 800px;
      padding: 0 24px;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
      border-radius: 32px;
      padding: 40px 32px;
    }
    .slide-content h2 { font-size: 3rem; font-weight: 800; margin-bottom: 16px; }
    .slide-content p { font-size: 1.2rem; margin-bottom: 24px; opacity: 0.9; }
    .slide-content .btn-light {
      background: white;
      color: #0f172a;
      padding: 12px 28px;
      border-radius: 40px;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
      transition: transform 0.2s;
    }
    .slide-content .btn-light:hover { transform: translateY(-3px); background: #f1f5f9; }
    .prev-slide, .next-slide {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      font-size: 2rem;
      padding: 12px 18px;
      cursor: pointer;
      z-index: 10;
      border-radius: 50%;
      transition: 0.2s;
    }
    .prev-slide { left: 20px; }
    .next-slide { right: 20px; }
    .prev-slide:hover, .next-slide:hover { background: rgba(0,0,0,0.8); }
    .dots-hero {
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
    }
    .dot-hero {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 6px;
      background: rgba(255,255,255,0.5);
      border-radius: 50%;
      cursor: pointer;
      transition: 0.2s;
    }
    .dot-hero.active { background: white; transform: scale(1.2); }

    .section-title {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 12px;
      text-align: center;
    }
    .section-sub {
      text-align: center;
      color: #475569;
      margin-bottom: 48px;
    }
    body.dark-mode .section-sub {
      color: #94a3b8;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 32px;
      margin-bottom: 60px;
    }
    .feature-card {
      background: white;
      border-radius: 28px;
      padding: 32px 24px;
      text-align: center;
      border: 1px solid #eef2ff;
      transition: transform 0.2s;
    }
    body.dark-mode .feature-card {
      background: #1e293b;
      border-color: #334155;
    }
    .feature-card:hover { transform: translateY(-5px); }
    .feature-icon {
      font-size: 2.5rem;
      background: #eef2ff;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      margin: 0 auto 20px;
      color: #2563eb;
    }
    body.dark-mode .feature-icon {
      background: #334155;
      color: #60a5fa;
    }

    .panels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 32px;
      margin: 40px 0;
    }
    .panel-card {
      background: white;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
      border: 1px solid #eef2ff;
    }
    body.dark-mode .panel-card {
      background: #1e293b;
      border-color: #334155;
    }
    .panel-card:hover { transform: translateY(-6px); box-shadow: 0 20px 30px -12px rgba(0,0,0,0.12); }
    .card-header {
      background: linear-gradient(135deg, #f1f5f9, #ffffff);
      padding: 20px 24px;
      border-bottom: 1px solid #eef2ff;
    }
    body.dark-mode .card-header {
      background: #2d3748;
      border-bottom-color: #475569;
    }
    .card-header h3 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
    }
    .rating {
      font-size: 0.85rem;
      background: #eef2ff;
      padding: 4px 10px;
      border-radius: 30px;
      color: #2563eb;
    }
    body.dark-mode .rating {
      background: #334155;
      color: #60a5fa;
    }
    .card-body { padding: 20px 24px; }
    .description { color: #334155; margin-bottom: 16px; font-size: 0.9rem; }
    body.dark-mode .description { color: #cbd5e1; }
    .stats {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.75rem;
      color: #4b5563;
      margin-bottom: 16px;
      background: #f8fafc;
      padding: 8px 12px;
      border-radius: 20px;
    }
    body.dark-mode .stats {
      background: #0f172a;
      color: #94a3b8;
    }
    .price {
      font-size: 1.9rem;
      font-weight: 800;
      color: #0f172a;
      margin: 12px 0;
    }
    body.dark-mode .price { color: #facc15; }
    .price small { font-size: 0.9rem; font-weight: 400; color: #64748b; }
    .features { list-style: none; margin: 16px 0; }
    .features li { padding: 6px 0; font-size: 0.85rem; display: flex; align-items: center; gap: 8px; }
    .features li i.fa-check { color: #10b981; width: 18px; }
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }
    .btn-wa, .btn-tg, .btn-trial {
      flex: 1;
      min-width: 90px;
      padding: 10px 12px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 0.8rem;
      text-align: center;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: transform 0.2s;
      cursor: pointer;
      border: none;
    }
    .btn-wa { background: #25D366; color: white; }
    .btn-tg { background: #0088cc; color: white; }
    .btn-trial { background: #f59e0b; color: white; }
    .btn-wa:hover, .btn-tg:hover, .btn-trial:hover { transform: translateY(-2px); opacity: 0.9; }

    footer {
      background: #0f172a;
      color: #94a3b8;
      text-align: center;
      padding: 32px;
      margin-top: 40px;
    }
    body.dark-mode footer {
      background: #020617;
    }
    .official-text {
      background: #1e293b;
      padding: 12px;
      border-radius: 40px;
      margin: 16px auto;
      max-width: 90%;
      font-size: 0.85rem;
      color: #facc15;
    }
    body.dark-mode .official-text {
      background: #334155;
    }

    @media (max-width: 768px) {
      .info-banner h2 { font-size: 1.6rem; }
      .hero-slideshow { height: 450px; }
      .slide-content h2 { font-size: 1.8rem; }
      .slide-content p { font-size: 1rem; }
      .prev-slide, .next-slide { font-size: 1.5rem; padding: 8px 12px; }
      .panels-grid { grid-template-columns: 1fr; }
      .btn-group { flex-direction: column; }
      .btn-wa, .btn-tg, .btn-trial { width: 100%; }
    }
  </style>
</head>
<body>

<header class="header">
  <div class="nav">
    <a href="index.html" class="logo">
      <img src="logo.webp" alt="OTT Distributor Logo" onerror="this.style.display='none'; this.parentElement.innerHTML='<span>OTT<span style=\'color:#3b82f6;\'>Distributor</span></span>'">
      <span>OTT<span style="color:#3b82f6;">Distributor</span></span>
    </a>
    <button class="mobile-menu-btn" id="mobileMenuBtn"><i class="fas fa-bars"></i></button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="index.html" class="active">🏠 Home</a></li>
      <li><a href="reseller.html">👑 Reseller Plans</a></li>
      <li><a href="subscription.html">📺 Subscriptions</a></li>
      <li><a href="blog.html">📝 Blog</a></li>
      <li><a href="faq.html">❓ FAQ</a></li>
      <li><a href="contact.html">📞 Contact</a></li>
      <!-- Dark mode toggle will be added by JavaScript -->
    </ul>
  </div>
</header>

<!-- Mobile menu overlay -->
<div id="mobileMenuOverlay" class="mobile-menu-overlay"></div>
<div id="menuBackdrop" class="menu-backdrop"></div>

<div class="info-banner">
  <h2>🚀 Premium IPTV Reseller & Subscription Plans</h2>
  <p>Choose your server, pick a plan (subscription or reseller credits), and start instantly via WhatsApp.</p>
  <div class="banner-buttons">
    <a href="subscription.html" class="btn-primary"><i class="fas fa-gem"></i> Get Free Trial</a>
    <a href="reseller.html" class="btn-secondary"><i class="fas fa-chart-line"></i> Become Reseller</a>
  </div>
</div>

<div class="hero-slideshow" id="heroSlideshow">
  <div class="slide-hero active" style="background-image: linear-gradient(135deg, #1e293b, #0f172a), url('https://picsum.photos/id/104/1920/600'); background-blend-mode: overlay;">
    <div class="slide-content"><h2>Free Trials Available</h2><p>Test any panel for free before you buy. No commitment, instant access.</p><a href="subscription.html" class="btn-light">Get Free Trial →</a></div>
  </div>
  <div class="slide-hero" style="background-image: linear-gradient(135deg, #1e293b, #0f172a), url('https://picsum.photos/id/106/1920/600'); background-blend-mode: overlay;">
    <div class="slide-content"><h2>Reseller Wholesale Plans</h2><p>Buy credits in bulk and earn up to 300% profit. Free reseller dashboard included.</p><a href="reseller.html" class="btn-light">Become a Reseller →</a></div>
  </div>
  <div class="slide-hero" style="background-image: linear-gradient(135deg, #1e293b, #0f172a), url('https://picsum.photos/id/20/1920/600'); background-blend-mode: overlay;">
    <div class="slide-content"><h2>Premium OTT Panels</h2><p>15+ panels, 500K+ content, 4K/8K streaming. Subscribe now and enjoy the best.</p><a href="subscription.html" class="btn-light">View Subscriptions →</a></div>
  </div>
  <button class="prev-slide" id="prevSlide">❮</button>
  <button class="next-slide" id="nextSlide">❯</button>
  <div class="dots-hero" id="dotsHero"></div>
</div>

<div class="container">
  <h2 class="section-title">Welcome to OTT Distributor</h2>
  <p class="section-sub">Your #1 source for premium IPTV reseller panels and subscriptions.</p>
  <div class="features-grid">
    <div class="feature-card"><div class="feature-icon"><i class="fas fa-layer-group"></i></div><h3>15+ Premium Panels</h3><p>Access Trex, 8K Strong, Dream 4K, Crystal OTT and more.</p></div>
    <div class="feature-card"><div class="feature-icon"><i class="fas fa-film"></i></div><h3>500K+ Content</h3><p>Millions of movies, series, and live channels worldwide.</p></div>
    <div class="feature-card"><div class="feature-icon"><i class="fas fa-gift"></i></div><h3>Free Trials</h3><p>Test any panel with a 24h free trial before you commit.</p></div>
    <div class="feature-card"><div class="feature-icon"><i class="fas fa-headset"></i></div><h3>24/7 Support</h3><p>Dedicated WhatsApp and Telegram support for all resellers.</p></div>
  </div>

  <h2 class="section-title">🔥 All Premium IPTV Panels</h2>
  <p class="section-sub">Browse our complete collection of high‑performance panels</p>
  <div class="panels-grid" id="allPanelsGrid"></div>
</div>

<footer>
  <div class="official-text"><i class="fas fa-check-circle"></i> OTT Distributor — Official Reseller for Trex, 8K Strong, Dino, Lion, Crystal, Magnum, Dream 4K, Eagle, ProMax, Tivione, Mega, Infinity, Max, Nexon.</div>
  <p>© 2025 OTT Distributor — IPTV Reseller & IPTV Subscription Platform. All rights reserved.</p>
  <p style="margin-top:12px;">Contact via WhatsApp or Telegram for instant support and free trials.</p>
</footer>

<script src="panels-data.js"></script>
<script>
  // ========== CREATE SINGLE DARK MODE TOGGLE ==========
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

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const darkModeOn = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', darkModeOn);
      const newIcon = darkModeOn ? 'fas fa-sun' : 'fas fa-moon';
      document.querySelectorAll('.dark-mode-toggle i').forEach(ic => ic.className = newIcon);
    }
    toggleBtn.addEventListener('click', toggleDarkMode);
    return toggleBtn;
  }

  // ========== MOBILE MENU ==========
  function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (!mobileBtn) return;
    const overlay = document.getElementById('mobileMenuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    if (!overlay || !backdrop) return;

    function updateMobileMenu() {
      const desktopMenu = document.querySelector('.nav-menu');
      if (!desktopMenu) return;
      overlay.innerHTML = '';
      const items = desktopMenu.querySelectorAll('li');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        overlay.appendChild(clone);
      });
      const mobileToggle = overlay.querySelector('.dark-mode-toggle');
      if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          const darkModeOn = document.body.classList.contains('dark-mode');
          localStorage.setItem('darkMode', darkModeOn);
          const newIcon = darkModeOn ? 'fas fa-sun' : 'fas fa-moon';
          document.querySelectorAll('.dark-mode-toggle i').forEach(ic => ic.className = newIcon);
        });
      }
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
    overlay.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target.closest('.dark-mode-toggle')) {
        overlay.classList.remove('active');
        backdrop.classList.remove('active');
      }
    });
  }

  // ========== HERO SLIDESHOW ==========
  function initSlideshow() {
    const slides = document.querySelectorAll('.slide-hero');
    const dotsContainer = document.getElementById('dotsHero');
    if (!slides.length || !dotsContainer) return;
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

  // ========== RENDER PRODUCT GRID ==========
  function renderProducts() {
    const grid = document.getElementById('allPanelsGrid');
    if (!grid || typeof panels === 'undefined') return;
    function createCard(p) {
      const trialMsg = `Hello, I would like to request a FREE TRIAL for ${p.name}. Please provide access. Thank you!`;
      return `<div class="panel-card"><div class="card-header"><h3>${p.name} <span class="rating">⭐ ${p.rating}</span></h3></div><div class="card-body"><div class="stats"><span>📺 ${p.channels}</span><span>🎬 ${p.movies}</span>${p.series !== "0" ? `<span>📺 ${p.series}</span>` : ''}</div><div class="description">${p.fullDescription || p.description}</div><ul class="features">${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul><div class="price">${p.subPrice} <small>/ 1 year</small></div><div class="btn-group"><a href="https://wa.me/212670969192?text=${encodeURIComponent(trialMsg)}" target="_blank" class="btn-trial"><i class="fas fa-gift"></i> Free Trial</a><a href="https://wa.me/212670969192?text=Hello%2C%20I%20want%20to%20subscribe%20to%20${encodeURIComponent(p.name)}%20for%20${encodeURIComponent(p.subPrice)}.%20Please%20send%20payment%20details." target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a><a href="https://t.me/OTTDistributor?text=Hello%2C%20I%20want%20to%20subscribe%20to%20${encodeURIComponent(p.name)}%20for%20${encodeURIComponent(p.subPrice)}." target="_blank" class="btn-tg"><i class="fab fa-telegram"></i> Telegram</a></div></div></div>`;
    }
    grid.innerHTML = panels.map(p => createCard(p)).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initMobileMenu();
    initSlideshow();
    renderProducts();
  });
</script>
</body>
</html>
