// Global Navbar
const globalHamburger = document.querySelector('.global-nav .hamburger');
const globalNavMenu = document.querySelector('.global-nav .nav-menu');
const overlay = document.querySelector('.menu-overlay');

// Secondary Navbar
const secondaryHamburger = document.querySelector('.secondary-nav .hamburger');
const secondaryNavMenu = document.querySelector('.secondary-nav .nav-menu');

// Toggle global menu
globalHamburger.addEventListener('click', () => {
    globalHamburger.classList.toggle('active');
    globalNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Close secondary menu if open
    secondaryHamburger.classList.remove('active');
    secondaryNavMenu.classList.remove('active');
});

// Toggle secondary menu
secondaryHamburger.addEventListener('click', () => {
    secondaryHamburger.classList.toggle('active');
    secondaryNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Close global menu if open
    globalHamburger.classList.remove('active');
    globalNavMenu.classList.remove('active');
});

// Close menus when clicking overlay
overlay.addEventListener('click', () => {
    globalHamburger.classList.remove('active');
    globalNavMenu.classList.remove('active');
    secondaryHamburger.classList.remove('active');
    secondaryNavMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menus when clicking links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        globalHamburger.classList.remove('active');
        globalNavMenu.classList.remove('active');
        secondaryHamburger.classList.remove('active');
        secondaryNavMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Close menus when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        globalHamburger.classList.remove('active');
        globalNavMenu.classList.remove('active');
        secondaryHamburger.classList.remove('active');
        secondaryNavMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
}); 