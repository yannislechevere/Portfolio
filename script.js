const header = document.querySelector('header');
const burger = header.querySelector('button');

burger.addEventListener('click', () => {
    const isOpen = header.getAttribute('data-open') === 'true';
    header.setAttribute('data-open', !isOpen);
});

