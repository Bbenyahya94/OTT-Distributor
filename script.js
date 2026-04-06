// All server data (14 servers exactly)
const serverNames = [
  "Trex IPTV", "8K Strong", "Dino IPTV (TVPlus)", "Lion OTT", "Crystal OTT",
  "Magnum OTT", "Dream 4K IPTV", "Eagle IPTV", "Promax (4K OTT, Cobra OTT)",
  "Tivione", "Mega OTT", "Infinity IPTV", "Max OTT", "Nexon IPTV"
];

function getDescription(name, index) {
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

function getSubscriptionPrices(index) {
  const base1 = [13, 14, 12, 15, 13, 14, 16, 12, 17, 13, 15, 18, 14, 16];
  const base3 = [23, 25, 22, 27, 24, 26, 29, 22, 31, 24, 27, 33, 25, 29];
  const base6 = [33, 36, 32, 39, 35, 38, 42, 32, 45, 35, 39, 48, 37, 42];
  const base12 = [49, 54, 47, 58, 52, 56, 63, 48, 68, 52, 58, 72, 55, 62];
  const i = index % base1.length;
  return {
    "1 month": `${base1[i]} €`,
    "3 months": `${base3[i]} €`,
    "6 months": `${base6[i]} €`,
    "12 months": `${base12[i]} €`
  };
}

function getResellerCredits(index) {
  const multipliers = [1, 1.02, 0.98, 1.05, 0.99, 1.03, 1.07, 0.96, 1.08, 1.01, 1.04, 1.09, 0.97, 1.06];
  const factor = multipliers[index % multipliers.length];
  const base = [
    { credits: 120, price: 130 },
    { credits: 240, price: 250 },
    { credits: 360, price: 370 },
    { credits: 600, price: 600 }
  ];
  return base.map(c => ({ credits: c.credits, price: Math.round(c.price * factor) }));
}

function getIcon(name, idx) {
  const icons = ["fas fa-tv", "fas fa-film", "fas fa-globe", "fas fa-broadcast-tower", "fas fa-server", "fas fa-play-circle", "fas fa-cloud-upload-alt", "fas fa-satellite", "fas fa-video"];
  if (name.includes("4K")) return "fas fa-video";
  if (name.includes("OTT")) return "fas fa-satellite";
  return icons[idx % icons.length];
}

const products = serverNames.map((name, idx) => ({
  id: idx,
  name: name,
  description: getDescription(name, idx),
  iconClass: getIcon(name, idx),
  subscriptionPrices: getSubscriptionPrices(idx),
  resellerCredits: getResellerCredits(idx)
}));

// Render product cards
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
      <div class="product-logo"><i class="${prod.iconClass}"></i></div>
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

// Plan modal logic
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
    div.setAttribute('data-type', 'subscription');
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

// General modal (free trial / reseller)
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

// Event listeners for banner buttons
document.getElementById('freeTrialBtn').addEventListener('click', () => openGeneralModal('free_trial'));
document.getElementById('becomeResellerBtn').addEventListener('click', () => openGeneralModal('reseller'));

// Close modals when clicking outside
[planModal, generalModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// Initialize everything
populateGeneralServerSelect();
renderProducts();
