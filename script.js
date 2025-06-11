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

    // Handle secondary menu dropdowns on mobile
    const secondaryMenuItems = document.querySelectorAll('.secondary-menu > li:not(:first-child)');
    
    secondaryMenuItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });

    // Secondary Navbar Dropdown Functionality
    const menuItems = document.querySelectorAll('.secondary-menu > li');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (dropdown) {
            // Desktop hover functionality
            item.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block';
            });
            
            item.addEventListener('mouseleave', () => {
                dropdown.style.display = 'none';
            });
            
            // Mobile click functionality
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isActive = item.classList.contains('active');
                    
                    // Close all dropdowns and remove active classes
                    menuItems.forEach(i => {
                        i.classList.remove('active');
                        const d = i.querySelector('.dropdown-menu');
                        if (d) d.style.display = 'none';
                    });
                    
                    // Toggle current dropdown
                    if (!isActive) {
                        item.classList.add('active');
                        dropdown.style.display = 'block';
                    }
                }
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.secondary-menu > li')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
                const dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) dropdown.style.display = 'none';
            });
        }
    });
}); 