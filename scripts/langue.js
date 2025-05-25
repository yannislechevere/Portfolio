function changerLangue(langue) {
    document.querySelectorAll('[data-fr]').forEach(el => {
        el.textContent = el.getAttribute('data-' + langue);
    });
document.documentElement.lang = langue;
}