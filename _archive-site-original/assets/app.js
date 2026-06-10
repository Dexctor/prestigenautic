const SITE_API_BASE = 'https://web-production-92c74.up.railway.app';

function normalizeText(value) {
  return String(value ?? '').trim();
}

async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const contentType = response.headers.get('content-type') || '';
  const rawText = await response.text();

  let parsedBody = null;

  if (rawText && contentType.includes('application/json')) {
    try {
      parsedBody = JSON.parse(rawText);
    } catch (error) {
      parsedBody = null;
    }
  }

  if (!response.ok) {
    const detail =
      parsedBody?.detail ||
      parsedBody?.message ||
      rawText ||
      `HTTP ${response.status} ${response.statusText}`;

    console.error('API error', {
      url,
      status: response.status,
      statusText: response.statusText,
      body: rawText,
      parsedBody,
    });

    throw new Error(`HTTP ${response.status}: ${detail}`);
  }

  if (parsedBody !== null) return parsedBody;
  if (!rawText) return null;

  try {
    return JSON.parse(rawText);
  } catch (error) {
    return rawText;
  }
}

async function sendQuoteToCRM(payload) {
  const crmPayload = {
    prenom: payload.prenom,
    nom: payload.nom,
    email: payload.email,
    telephone: payload.telephone || null,
    type_bateau: payload.type_bateau || null,
    marque: payload.marque || null,
    modele: payload.modele || null,
    port: payload.port || null,
    type_prestation: payload.type_prestation,
    description_demande: payload.description_demande,
    source: 'site internet',
    assigne_a: null,
    priorite: 'normale',
    montant_chantier: 0,
  };

  return fetchJSON(`${SITE_API_BASE}/api/site/leads`, {
    method: 'POST',
    body: JSON.stringify(crmPayload),
  });
}

function afficherConfirmation(form, demande) {
  let confirmation = document.getElementById('confirmation-devis');

  if (!confirmation) {
    confirmation = document.createElement('p');
    confirmation.id = 'confirmation-devis';
    confirmation.style.marginTop = '1rem';
    confirmation.style.color = '#0f5e5a';
    confirmation.style.fontWeight = '600';
    form.appendChild(confirmation);
  }

  confirmation.textContent =
    demande?.message || 'Demande envoyée avec succès.';
}

function brancherFormulaireDevis() {
  const form = document.getElementById('quote-form');
  console.log('quote-form trouvé ?', form);

  if (!form) return;

  const message = document.getElementById('quote-message');
  const successBox = document.getElementById('quote-success');
  let isSubmitting = false;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (isSubmitting) return;
    isSubmitting = true;

    const payload = {
      prenom: normalizeText(document.getElementById('quote-prenom')?.value),
      nom: normalizeText(document.getElementById('quote-nom')?.value),
      email: normalizeText(document.getElementById('quote-email')?.value),
      telephone: normalizeText(document.getElementById('quote-telephone')?.value),
      type_bateau: normalizeText(document.getElementById('quote-type-bateau')?.value),
      marque: normalizeText(document.getElementById('quote-marque')?.value),
      modele: normalizeText(document.getElementById('quote-modele')?.value),
      port: normalizeText(document.getElementById('quote-port')?.value),
      type_prestation: normalizeText(document.getElementById('quote-prestation')?.value),
      description_demande: normalizeText(
        document.getElementById('quote-message-input')?.value
      ),
    };

    if (
      !payload.prenom ||
      !payload.nom ||
      !payload.email ||
      !payload.type_bateau ||
      !payload.type_prestation ||
      !payload.description_demande
    ) {
      if (message) {
        message.textContent =
          'Merci de remplir prénom, nom, email, type de bateau, prestation et message.';
      }
      if (successBox) successBox.textContent = '';
      isSubmitting = false;
      return;
    }

    if (message) message.textContent = 'Envoi en cours...';
    if (successBox) successBox.textContent = '';

    try {
      const result = await sendQuoteToCRM(payload);

      // Tracking GA4 — événement de conversion
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'formulaire',
          event_label: payload.type_prestation || 'devis',
          value: 1,
        });
      }

      form.reset();
      afficherConfirmation(form, result);

      const customSelectRoot = document.querySelector('[data-custom-select]');
      if (customSelectRoot) {
        const hiddenInput = customSelectRoot.querySelector('#quote-prestation');
        const valueLabel = customSelectRoot.querySelector('.custom-select__value');
        const options = customSelectRoot.querySelectorAll('.custom-select__option');

        if (hiddenInput) hiddenInput.value = '';
        if (valueLabel) valueLabel.textContent = 'Choisir la prestation souhaitée';
        customSelectRoot.setAttribute('data-empty', 'true');

        options.forEach(function (option) {
          option.setAttribute('aria-selected', 'false');
        });
      }

      if (message) message.textContent = '';
      if (successBox) {
        successBox.textContent =
          'Demande préparée avec succès. Nous reviendrons vers vous après étude de votre projet.';
      }
    } catch (error) {
      console.error('Erreur envoi CRM', error);
      if (message) {
        message.textContent = `Erreur d’envoi : ${error.message}`;
      }
      if (successBox) successBox.textContent = '';
    } finally {
      isSubmitting = false;
    }
  });
}

function brancherMenuBurger() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  if (!toggle || !nav) return;

  function ouvrirMenu() {
    toggle.classList.add('is-active');
    nav.classList.add('nav--open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function fermerMenu() {
    toggle.classList.remove('is-active');
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('nav--open')) {
      fermerMenu();
    } else {
      ouvrirMenu();
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      fermerMenu();
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      fermerMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 900) {
      fermerMenu();
    }
  });
}

function brancherConfigurateurVisuel() {
  const teckButtons = document.querySelectorAll('#teck-options .swatch-card');
  const jointButtons = document.querySelectorAll('#joint-options .swatch-card');
  const selectedTeck = document.getElementById('selected-teck');
  const selectedJoint = document.getElementById('selected-joint');
  const selectedCombo = document.getElementById('selected-combo');
  const mainImage = document.getElementById('configurator-image');
  const zoomImage = document.getElementById('zoom-image');
  const mainFrame = document.querySelector('.config-main-visualframe');
  const zoomFrame = document.querySelector('.zoom-image-frame');

  if (!teckButtons.length || !jointButtons.length || !mainImage || !zoomImage) {
    console.log('Configurateur non détecté sur cette page.');
    return;
  }

  const labels = {
    teck: {
      champagne: 'Champagne',
      dapplegrey: 'Dapplegrey',
      mediteraneen: 'Mediteraneen',
      noyer: 'Noyer',
      teak: 'Teak',
    },
    joint: {
      black: 'Black',
      silver: 'Silver',
      white: 'White',
    },
  };

  const zoomMap = {
    'champagne-black': '../assets/configurateur/bateau/variante/champagne-black.webp',
    'champagne-silver': '../assets/configurateur/bateau/variante/champagne-silver.webp',
    'champagne-white': '../assets/configurateur/bateau/variante/champagne-white.webp',
    'dapplegrey-black': '../assets/configurateur/bateau/variante/dapplegrey-black.webp',
    'dapplegrey-silver': '../assets/configurateur/bateau/variante/dapplegrey-silver.webp',
    'dapplegrey-white': '../assets/configurateur/bateau/variante/dapplegrey-white.webp',
    'mediteraneen-black': '../assets/configurateur/bateau/variante/mediteraneen-black.webp',
    'mediteraneen-silver': '../assets/configurateur/bateau/variante/mediteraneen-silver.webp',
    'mediteraneen-white': '../assets/configurateur/bateau/variante/mediteraneen-white.webp',
    'noyer-black': '../assets/configurateur/bateau/variante/noyer-black.webp',
    'noyer-silver': '../assets/configurateur/bateau/variante/noyer-silver.webp',
    'noyer-white': '../assets/configurateur/bateau/variante/noyer-white.webp',
    'teak-black': '../assets/configurateur/bateau/variante/teak-black.webp',
    'teak-silver': '../assets/configurateur/bateau/variante/teak-silver.webp',
    'teak-white': '../assets/configurateur/bateau/variante/teak-white.webp',
  };

  const renderMap = {
    'champagne-black': '../assets/configurateur/bateau/rendu/champagne-black.webp',
    'champagne-silver': '../assets/configurateur/bateau/rendu/champagne-silver.webp',
    'champagne-white': '../assets/configurateur/bateau/rendu/champagne-white.webp',
    'dapplegrey-black': '../assets/configurateur/bateau/rendu/dapplegrey-black.webp',
    'dapplegrey-silver': '../assets/configurateur/bateau/rendu/dapplegrey-silver.webp',
    'dapplegrey-white': '../assets/configurateur/bateau/rendu/dapplegrey-white.webp',
    'mediteraneen-black': '../assets/configurateur/bateau/rendu/mediteraneen-black.webp',
    'mediteraneen-silver': '../assets/configurateur/bateau/rendu/mediteraneen-silver.webp',
    'mediteraneen-white': '../assets/configurateur/bateau/rendu/mediteraneen-white.webp',
    'noyer-black': '../assets/configurateur/bateau/rendu/noyer-black.webp',
    'noyer-silver': '../assets/configurateur/bateau/rendu/noyer-silver.webp',
    'noyer-white': '../assets/configurateur/bateau/rendu/noyer-white.webp',
    'teak-black': '../assets/configurateur/bateau/rendu/teak-black.webp',
    'teak-silver': '../assets/configurateur/bateau/rendu/teak-silver.webp',
    'teak-white': '../assets/configurateur/bateau/rendu/teak-white.webp',
  };

  const fallbackMainImage = '../assets/configurateur/bateau/bateau-reference-vue-01.webp';
  const fallbackZoomImage = '../assets/configurateur/bateau/variante/champagne-black.webp';

  const state = {
    teck:
      document.querySelector('#teck-options .swatch-card.is-active')?.dataset.value ||
      'champagne',
    joint:
      document.querySelector('#joint-options .swatch-card.is-active')?.dataset.value ||
      'black',
  };

  function getComboKey() {
    return `${state.teck}-${state.joint}`;
  }

  function setActiveButtons(buttons, value) {
    buttons.forEach(function (button) {
      const isActive = button.dataset.value === value;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function updateTexts() {
    const teckLabel = labels.teck[state.teck] || state.teck;
    const jointLabel = labels.joint[state.joint] || state.joint;

    // MASQUE NOM MARQUE TECK — remplacer '—' par teckLabel quand accord validé
    if (selectedTeck) selectedTeck.textContent = '—';
    if (selectedJoint) selectedJoint.textContent = jointLabel;
    if (selectedCombo) selectedCombo.textContent = `— / ${jointLabel}`;
  }

  function preloadImage(src) {
    return new Promise(function (resolve, reject) {
      if (!src) {
        reject(new Error('Source image manquante'));
        return;
      }

      const image = new Image();
      image.onload = function () {
        resolve(src);
      };
      image.onerror = function () {
        reject(new Error(`Impossible de charger ${src}`));
      };
      image.src = src;
    });
  }

  function setFrameUnavailable(frameElement, unavailable) {
    if (!frameElement) return;
    if (unavailable) {
      frameElement.classList.add('frame-unavailable');
    } else {
      frameElement.classList.remove('frame-unavailable');
    }
  }

  function swapImage(imgElement, frameElement, nextSrc) {
    if (!imgElement) return;

    // Pas d'image définie pour cette combinaison → placeholder direct
    if (!nextSrc) {
      setFrameUnavailable(frameElement, true);
      return;
    }

    if (imgElement.dataset.currentSrc === nextSrc) {
      setFrameUnavailable(frameElement, false);
      return;
    }

    if (frameElement) frameElement.classList.add('is-loading');

    preloadImage(nextSrc)
      .then(function () {
        imgElement.src = nextSrc;
        imgElement.dataset.currentSrc = nextSrc;
        setFrameUnavailable(frameElement, false);
      })
      .catch(function (error) {
        console.warn('Image non disponible :', error.message);
        setFrameUnavailable(frameElement, true);
      })
      .finally(function () {
        window.setTimeout(function () {
          if (frameElement) frameElement.classList.remove('is-loading');
        }, 60);
      });
  }

  function render() {
    const comboKey = getComboKey();

    setActiveButtons(teckButtons, state.teck);
    setActiveButtons(jointButtons, state.joint);
    updateTexts();

    swapImage(
      zoomImage,
      zoomFrame,
      zoomMap[comboKey] || null
    );

    swapImage(
      mainImage,
      mainFrame,
      renderMap[comboKey] || null
    );
  }

  teckButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      state.teck = button.dataset.value;
      console.log('Teck sélectionné :', state.teck);
      render();
    });
  });

  jointButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      state.joint = button.dataset.value;
      console.log('Joint sélectionné :', state.joint);
      render();
    });
  });

  mainImage.dataset.currentSrc = mainImage.getAttribute('src') || '';
  zoomImage.dataset.currentSrc = zoomImage.getAttribute('src') || '';

  render();
}

function brancherZoomMateriau() {
  const trigger = document.querySelector('.zoom-trigger');
  const modal = document.getElementById('material-modal');
  const modalImage = document.getElementById('material-modal-image');
  const closeButton = document.querySelector('.image-modal__close');
  const sourceImage = document.getElementById('zoom-image');

  if (!trigger || !modal || !modalImage || !closeButton || !sourceImage) {
    console.log('Zoom matière non détecté sur cette page.');
    return;
  }

  function ouvrirZoom() {
    modalImage.src = sourceImage.src;
    modalImage.alt = sourceImage.alt || 'Aperçu matière';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function fermerZoom() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', function () {
    console.log('Ouverture zoom matière');
    ouvrirZoom();
  });

  closeButton.addEventListener('click', fermerZoom);

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      fermerZoom();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      fermerZoom();
    }
  });
}

function brancherSelectPrestationPremium() {
  const root = document.querySelector('[data-custom-select]');

  if (!root) return;

  const hiddenInput = root.querySelector('#quote-prestation');
  const trigger = root.querySelector('.custom-select__trigger');
  const valueLabel = root.querySelector('.custom-select__value');
  const menu = root.querySelector('.custom-select__menu');
  const options = Array.from(root.querySelectorAll('.custom-select__option'));

  if (!hiddenInput || !trigger || !valueLabel || !menu || !options.length) {
    return;
  }

  const defaultLabel = 'Choisir la prestation souhaitée';

  function ouvrirMenu() {
    root.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
  }

  function fermerMenu() {
    root.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }

  function setValue(value, label) {
    hiddenInput.value = value;
    valueLabel.textContent = label || defaultLabel;
    root.setAttribute('data-empty', value ? 'false' : 'true');

    options.forEach(function (option) {
      const isSelected = option.dataset.value === value;
      option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });
  }

  trigger.addEventListener('click', function () {
    if (root.classList.contains('is-open')) {
      fermerMenu();
    } else {
      ouvrirMenu();
    }
  });

  options.forEach(function (option) {
    option.addEventListener('click', function () {
      const value = option.dataset.value || '';
      const label =
        option.querySelector('.custom-select__option-title')?.textContent?.trim() ||
        option.textContent.trim();

      setValue(value, label);
      fermerMenu();
      trigger.focus();
    });
  });

  document.addEventListener('click', function (event) {
    if (!root.contains(event.target)) {
      fermerMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      fermerMenu();
      trigger.focus();
    }
  });

  setValue(hiddenInput.value, '');
}

function brancherCompteurs() {
  const elements = document.querySelectorAll('[data-counter]');
  if (!elements.length) return;

  function animerCompteur(el) {
    const cible = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    const duree = 2000; // ms
    const debut = performance.now();

    function tick(maintenant) {
      const elapsed = maintenant - debut;
      const progress = Math.min(elapsed / duree, 1);
      // Ease-out expo : démarre vite, ralentit très doucement vers la fin
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const valeur = Math.round(eased * cible);
      el.textContent = valeur + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animerCompteur(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

// Tracking des clics téléphone et email comme leads (utile pour l'optimisation Google Ads)
function brancherTrackingContact() {
  const liens = document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]');
  if (!liens.length) return;

  liens.forEach(function (lien) {
    lien.addEventListener('click', function () {
      if (typeof gtag !== 'function') return;

      const href = lien.getAttribute('href') || '';
      const estTelephone = href.indexOf('tel:') === 0;

      gtag('event', 'generate_lead', {
        event_category: 'contact',
        event_label: estTelephone ? 'clic téléphone' : 'clic email',
        value: 1,
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  brancherSelectPrestationPremium();
  brancherFormulaireDevis();
  brancherMenuBurger();
  brancherConfigurateurVisuel();
  brancherZoomMateriau();
  brancherCompteurs();
  brancherTrackingContact();
});

window.PrestigeNauticApp = {
  brancherSelectPrestationPremium,
  brancherFormulaireDevis,
  brancherMenuBurger,
  brancherConfigurateurVisuel,
  brancherZoomMateriau,
  brancherCompteurs,
  brancherTrackingContact,
};