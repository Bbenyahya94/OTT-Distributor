// All server names (14 unique servers)
const serverNames = [
  "Trex IPTV", "8K Strong", "Dino IPTV (TVPlus)", "Lion OTT", "Crystal OTT",
  "Magnum OTT", "Dream 4K IPTV", "Eagle IPTV", "Promax (4K OTT, Cobra OTT)",
  "Tivione", "Mega OTT", "Infinity IPTV", "Max OTT", "Nexon IPTV"
];

// ------------------- UNIQUE PRICES PER SERVER -------------------
// Each server gets its own subscription prices (1,3,6,12 months) and reseller credit packages.
const serverPrices = {
  "Trex IPTV": {
    subscription: { "1 month": "13 €", "3 months": "23 €", "6 months": "33 €", "12 months": "49 €" },
    credits: [
      { credits: 120, price: 130 },
      { credits: 240, price: 250 },
      { credits: 360, price: 370 },
      { credits: 600, price: 600 }
    ]
  },
  "8K Strong": {
    subscription: { "1 month": "15 €", "3 months": "27 €", "6 months": "39 €", "12 months": "59 €" },
    credits: [
      { credits: 120, price: 140 },
      { credits: 240, price: 270 },
      { credits: 360, price: 400 },
      { credits: 600, price: 650 }
    ]
  },
  "Dino IPTV (TVPlus)": {
    subscription: { "1 month": "12 €", "3 months": "22 €", "6 months": "32 €", "12 months": "45 €" },
    credits: [
      { credits: 120, price: 125 },
      { credits: 240, price: 240 },
      { credits: 360, price: 355 },
      { credits: 600, price: 580 }
    ]
  },
  "Lion OTT": {
    subscription: { "1 month": "14 €", "3 months": "25 €", "6 months": "36 €", "12 months": "55 €" },
    credits: [
      { credits: 120, price: 135 },
      { credits: 240, price: 260 },
      { credits: 360, price: 385 },
      { credits: 600, price: 620 }
    ]
  },
  "Crystal OTT": {
    subscription: { "1 month": "16 €", "3 months": "29 €", "6 months": "42 €", "12 months": "65 €" },
    credits: [
      { credits: 120, price: 145 },
      { credits: 240, price: 280 },
      { credits: 360, price: 415 },
      { credits: 600, price: 670 }
    ]
  },
  "Magnum OTT": {
    subscription: { "1 month": "18 €", "3 months": "33 €", "6 months": "48 €", "12 months": "75 €" },
    credits: [
      { credits: 120, price: 160 },
      { credits: 240, price: 310 },
      { credits: 360, price: 460 },
      { credits: 600, price: 750 }
    ]
  },
  "Dream 4K IPTV": {
    subscription: { "1 month": "17 €", "3 months": "31 €", "6 months": "45 €", "12 months": "70 €" },
    credits: [
      { credits: 120, price: 150 },
      { credits: 240, price: 290 },
      { credits: 360, price: 430 },
      { credits: 600, price: 700 }
    ]
  },
  "Eagle IPTV": {
    subscription: { "1 month": "11 €", "3 months": "20 €", "6 months": "29 €", "12 months": "42 €" },
    credits: [
      { credits: 120, price: 120 },
      { credits: 240, price: 230 },
      { credits: 360, price: 340 },
      { credits: 600, price: 550 }
    ]
  },
  "Promax (4K OTT, Cobra OTT)": {
    subscription: { "1 month": "20 €", "3 months": "37 €", "6 months": "54 €", "12 months": "85 €" },
    credits: [
      { credits: 120, price: 180 },
      { credits: 240, price: 350 },
      { credits: 360, price: 520 },
      { credits: 600, price: 850 }
    ]
  },
  "Tivione": {
    subscription: { "1 month": "10 €", "3 months": "18 €", "6 months": "26 €", "12 months": "38 €" },
    credits: [
      { credits: 120, price: 110 },
      { credits: 240, price: 210 },
      { credits: 360, price: 310 },
      { credits: 600, price: 500 }
    ]
  },
  "Mega OTT": {
    subscription: { "1 month": "19 €", "3 months": "35 €", "6 months": "51 €", "12 months": "80 €" },
    credits: [
      { credits: 120, price: 170 },
      { credits: 240, price: 330 },
      { credits: 360, price: 490 },
      { credits: 600, price: 800 }
    ]
  },
  "Infinity IPTV": {
    subscription: { "1 month": "22 €", "3 months": "40 €", "6 months": "58 €", "12 months": "95 €" },
    credits: [
      { credits: 120, price: 200 },
      { credits: 240, price: 390 },
      { credits: 360, price: 580 },
      { credits: 600, price: 950 }
    ]
  },
  "Max OTT": {
    subscription: { "1 month": "21 €", "3 months": "38 €", "6 months": "55 €", "12 months": "88 €" },
    credits: [
      { credits: 120, price: 190 },
      { credits: 240, price: 370 },
      { credits: 360, price: 550 },
      { credits: 600, price: 900 }
    ]
  },
  "Nexon IPTV": {
    subscription: { "1 month": "14 €", "3 months": "26 €", "6 months": "37 €", "12 months": "57 €" },
    credits: [
      { credits: 120, price: 138 },
      { credits: 240, price: 265 },
      { credits: 360, price: 392 },
      { credits: 600, price: 630 }
    ]
  }
};

// Helper: get subscription prices for a server
function getSubscriptionPrices(serverName) {
  return serverPrices[serverName].subscription;
}

// Helper: get reseller credits for a server
function getResellerCredits(serverName) {
  return serverPrices[serverName].credits;
}

// Descriptions (can remain same or be unique per server – keeping generic but ok)
function getDescription(name) {
  const descMap = {
    "Trex IPTV": "Trex IPTV: 18,000+ live channels, 75,000 movies, 12,000 series. Ultra-stable 4K streaming.",
    "8K Strong": "8K Strong: Next-gen 8K/4K content, 22,000 channels, 90,000 VODs. 99.9% uptime.",
    "Dino IPTV (TVPlus)": "Dino IPTV (TVPlus): 15,000+ channels, 55,000 movies, catch-up & PPV events.",
    "Lion OTT": "Lion OTT: 20k channels, 80k VODs, 24/7 support. High-performance.",
    "Crystal OTT": "Crystal OTT: 25,000 channels, 95,000 movies, flawless FHD/4K.",
    "Magnum OTT": "Magnum OTT: 30k channels, 110k VODs, DDoS protection.",
    "Dream 4K IPTV": "Dream 4K IPTV: 16k channels, 65k movies, premium European & US content.",
    "Eagle IPTV": "Eagle IPTV: 14k channels, 50k VODs, fast zapping.",
    "Promax (4K OTT, Cobra OTT)": "Promax: 35k channels, 120k VODs, multi-CDN. All-in-one.",
    "Tivione": "Tivione: 12k channels, 45k movies, 7-day catchup.",
    "Mega OTT": "Mega OTT: 28k channels, 100k VODs, VPN friendly.",
    "Infinity IPTV": "Infinity IPTV: 32k channels, 150k VODs, 4K/8K support.",
    "Max OTT": "Max OTT: 26k channels, 85k movies, highest bitrate.",
    "Nexon IPTV": "Nexon IPTV: 18k channels, 70k VODs, anti-buffer."
  };
  return descMap[name] || `${name} delivers premium IPTV with worldwide channels and reseller options.`;
}

// Logo filename conversion (same as before)
function getLogoFilename(name) {
  let filename = name.toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  if (filename === 'dino-iptv-tvplus') filename = 'dino-iptv';
  if (filename === '8k-strong') filename = '8k-strong';
  if (filename === 'promax-4k-ott-cobra-ott') filename = 'promax';
  return filename + '.webp';
}

function getFallbackIcon(name, idx) {
  const icons = ["fas fa-tv", "fas fa-film", "fas fa-globe", "fas fa-broadcast-tower", "fas fa-server", "fas fa-play-circle", "fas fa-cloud-upload-alt", "fas fa-satellite", "fas fa-video"];
  if (name.includes("4K")) return "fas fa-video";
  if (name.includes("OTT")) return "fas fa-satellite";
  return icons[idx % icons.length];
}

// Build products array
const products = serverNames.map((name, idx) => ({
  id: idx,
  name: name,
  description: getDescription(name),
  logoFile: getLogoFilename(name),
  fallbackIcon: getFallbackIcon(name, idx),
  subscriptionPrices: getSubscriptionPrices(name),
  resellerCredits: getResellerCredits(name)
}));

// Render product cards (unchanged logic but uses new prices)
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach(prod => {
    let subPreview = '';
    for (const [duration, price] of Object.entries(prod.subscriptionPrices)) {
      subPreview += `<div class="price-item"><div class="price-duration">${duration}</div><div class="price-amount">${price}</div></div>`;
    }
    let creditsPreview = '';
    prod.resellerCredits.slice(0, 2).forEach(cred => {
      creditsPreview += `<div class="credit-item"><span class="credit-name">${cred.credits} credits</span><span class="credit-price">${cred.price} €</span></div>`;
    });
    if (prod.resellerCredits.length > 2) creditsPreview += `<div class="credit-item"><span>+ more</span><span></span></div>`;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-logo" id="logo-${prod.id}">
        <img src="logos/${prod.logoFile}" alt="${escapeHtml(prod.name)} logo" style="width:100%; height:100%; object-fit:contain;" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\\'${prod.fallbackIcon}\\' style=\\'font-size:2.8rem; color:#1b6b5e;\\'></i>';">
      </div>
      <div class="product-title">${escapeHtml(prod.name)}</div>
      <div class="product-desc">${escapeHtml(prod.description)}</div>
      <div class="price-section">
        <div class="price-header"><i class="fas fa-calendar-alt"></i> Subscription plans (EUR)</div>
        <div class="price-grid">${subPreview}</div>
        <div class="reseller-credits">
          <div class="price-header"><i class="fas fa-coins"></i> Reseller credits (EUR)</div>
          ${creditsPreview}
        </div>
      </div>
      <button class="btn-join" data-server-id="${prod.id}"><i class="fab fa-whatsapp"></i> Join Now → Choose Plan</button>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.btn-join').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.getAttribute('data-server-id'));
      openPlanModal(id);
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// ----- Plan Modal Logic (uses selected server's prices) -----
let currentServer = null;
let selectedPlan = null;
const planModal = document.getElementById('planModal');
const subscriptionOptionsDiv = document.getElementById('subscriptionOptions');
const creditOptionsDiv = document.getElementById('creditOptions');

function openPlanModal(serverId) {
  currentServer = products.find(p => p.id === serverId);
  if (!currentServer) return;
  document.getElementById('modalServerName').innerText = `📡 ${currentServer.name} – Choose Plan`;
  subscriptionOptionsDiv.innerHTML = '';
  creditOptionsDiv.innerHTML = '';

  for (const [duration, price] of Object.entries(currentServer.subscriptionPrices)) {
    const div = document.createElement('div');
    div.className = 'plan-option';
    div.innerHTML = `<span><strong>${duration}</strong> : ${price}</span><input type="radio" name="planChoice">`;
    div.addEventListener('click', (e) => {
      document.querySelectorAll('#subscriptionOptions .plan-option, #creditOptions .plan-option').forEach(opt => opt.classList.remove('selected'));
      div.classList.add('selected');
      div.querySelector('input').checked = true;
      selectedPlan = { type: 'subscription', label: duration, price: price };
    });
    subscriptionOptionsDiv.appendChild(div);
  }

  for (const cred of currentServer.resellerCredits) {
    const div = document.createElement('div');
    div.className = 'plan-option';
    div.innerHTML = `<span><strong>${cred.credits} credits</strong> : ${cred.price} €</span><input type="radio" name="planChoice">`;
    div.addEventListener('click', (e) => {
      document.querySelectorAll('#subscriptionOptions .plan-option, #creditOptions .plan-option').forEach(opt => opt.classList.remove('selected'));
      div.classList.add('selected');
      div.querySelector('input').checked = true;
      selectedPlan = { type: 'credit', label: `${cred.credits} credits`, price: `${cred.price} €` };
    });
    creditOptionsDiv.appendChild(div);
  }
  selectedPlan = null;
  planModal.classList.add('active');
}

function closePlanModal() {
  planModal.classList.remove('active');
}

document.getElementById('closePlanModalBtn').addEventListener('click', closePlanModal);
document.getElementById('submitPlanBtn').addEventListener('click', () => {
  if (!selectedPlan) {
    alert('Please select a subscription plan or credit package.');
    return;
  }
  const msg = `Hello! I'm interested in *${currentServer.name}*.\n📌 Selected plan: ${selectedPlan.type === 'subscription' ? `Subscription: ${selectedPlan.label} (${selectedPlan.price})` : `Reseller Credit Package: ${selectedPlan.label} (${selectedPlan.price})`}\n🔹 Please send me payment details and activation.`;
  window.open(`https://wa.me/212670969192?text=${encodeURIComponent(msg)}`, '_blank');
  closePlanModal();
});

// ----- General Modal (Free Trial / Become Reseller) -----
const generalModal = document.getElementById('generalModal');
const generalServerSelect = document.getElementById('generalServerSelect');
let generalAction = 'free_trial';

function populateGeneralServerSelect() {
  generalServerSelect.innerHTML = '<option value="" disabled selected>– Select a server –</option>';
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = p.name;
    generalServerSelect.appendChild(opt);
  });
}

function openGeneralModal(action) {
  generalAction = action;
  generalServerSelect.value = '';
  document.getElementById('generalResellerCheckbox').checked = (action === 'reseller');
  document.getElementById('generalModalTitle').innerText = action === 'free_trial' ? '🎁 Start Free Trial' : '🤝 Become a Reseller';
  document.getElementById('generalModalDesc').innerText = action === 'free_trial' ? 'Select a server (required). Tick "become reseller" if you want reseller info too.' : 'Select your server. Reseller option is pre-checked.';
  generalModal.classList.add('active');
}

function closeGeneralModal() {
  generalModal.classList.remove('active');
}

document.getElementById('closeGeneralModalBtn').addEventListener('click', closeGeneralModal);
document.getElementById('submitGeneralModalBtn').addEventListener('click', () => {
  const server = generalServerSelect.value;
  if (!server) { alert('Please select a server.'); return; }
  const wantReseller = document.getElementById('generalResellerCheckbox').checked;
  let msg = '';
  if (generalAction === 'free_trial') {
    msg = `🔹 FREE TRIAL REQUEST 🔹\nServer: ${server}\nBecome reseller: ${wantReseller ? 'Yes' : 'No'}\nPlease provide trial access.`;
  } else {
    msg = `🌟 RESELLER INQUIRY 🌟\nServer: ${server}\nReseller interest: ${wantReseller ? 'Confirmed' : 'Just info'}\nPlease send reseller panel and credit pricing.`;
  }
  window.open(`https://wa.me/212670969192?text=${encodeURIComponent(msg)}`, '_blank');
  closeGeneralModal();
});

document.getElementById('freeTrialBtn').addEventListener('click', () => openGeneralModal('free_trial'));
document.getElementById('becomeResellerBtn').addEventListener('click', () => openGeneralModal('reseller'));

[planModal, generalModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// Initialize
populateGeneralServerSelect();
renderProducts();
