document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const navLinks = document.getElementById('nav-links');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');

    // --- 1. Theme Toggle Functionality ---

    // Function to set the theme
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    };

    // Load theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setTheme(false);
    } else {
        // Default to dark if no preference is saved or if saved as 'dark'
        setTheme(true);
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        setTheme(!isDark);
    });

    // --- 2. Mobile Menu Toggle Functionality ---

    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        // Toggle the hamburger/close icon
        const icon = menuToggleBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // 'fa-times' for close icon
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            body.style.overflow = 'auto';
        }
    };

    menuToggleBtn.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu); // Close menu when overlay is clicked

    // Close mobile menu when a link is clicked (for smooth scroll)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                // Use a slight delay to allow smooth scroll before menu closes
                setTimeout(toggleMenu, 100);
            }
        });
    });
});