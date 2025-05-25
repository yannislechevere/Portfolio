// La langue actuelle (par défaut 'fr')
  let langue = 'fr';

  // Ta fonction changerLangue existante
  function changerLangue(langue) {
    document.querySelectorAll('[data-fr]').forEach(el => {
      el.textContent = el.getAttribute('data-' + langue);
    });
    document.documentElement.lang = langue;
  }

  // Fonction toggle pour changer la langue à chaque clic
  function toggleLangue() {
    langue = (langue === 'fr') ? 'en' : 'fr';
    document.getElementById('langBtn').textContent = (langue === 'fr') ? 'Français' : 'English';
    changerLangue(langue);
  }