// Global Navbar
const globalHamburger = document.querySelector('.global-nav .hamburger');
const globalNavMenu = document.querySelector('.global-nav .nav-menu');
const overlay = document.querySelector('.menu-overlay');

// Toggle global menu
globalHamburger.addEventListener('click', () => {
    globalHamburger.classList.toggle('active');
    globalNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    globalHamburger.classList.remove('active');
    globalNavMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menu when clicking links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        globalHamburger.classList.remove('active');
        globalNavMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        globalHamburger.classList.remove('active');
        globalNavMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Toggle main menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const secondaryMenuItems = document.querySelectorAll('.secondary-menu > li');
            secondaryMenuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}); 