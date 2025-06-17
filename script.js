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

    const menuItems = document.querySelectorAll('.secondary-menu > li[data-dropdown]');
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    const overlay = document.querySelector('.menu-overlay');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dropdownId = item.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);
            
            // Hide all dropdowns
            dropdowns.forEach(d => d.classList.remove('active'));
            
            // Show the current dropdown
            if (dropdown) {
                dropdown.classList.add('active');
            }
        });
    });

    // Add mouseenter/mouseleave to dropdowns
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
        });
    });

    // Hide dropdowns when mouse leaves the menu
    document.querySelector('.secondary-nav').addEventListener('mouseleave', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
    });

    // Sticky sub-navbar scroll functionality
    const stickySubNav = document.querySelector('.sticky-sub-nav');
    const scrollThreshold = 400;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            stickySubNav.classList.add('visible');
        } else {
            stickySubNav.classList.remove('visible');
        }
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}); 