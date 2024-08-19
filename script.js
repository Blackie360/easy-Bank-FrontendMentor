// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('show'); // Show the menu
    });

    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('show'); // Hide the menu
    });

    // Close the menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && event.target !== menuToggle) {
            mobileMenu.classList.remove('show');
        }
    });
});
