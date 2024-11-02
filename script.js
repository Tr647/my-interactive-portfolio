// Smooth scroll to sections
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        console.log(`Navigating to section: ${targetId}`);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle Functionality
const themeButtons = document.querySelectorAll('.theme-toggle button');
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.className = ''; // Clear previous theme
        document.body.classList.add(button.id); // Add the selected theme
        updateThemeStyles(button.id); // Update additional styles based on theme
        console.log(`Theme changed to: ${button.id}`);
    });
});

// Function to update theme-specific styles
function updateThemeStyles(theme) {
    const heroSection = document.querySelector('.hero');
    const checkpoints = document.querySelectorAll('.checkpoint');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (theme === 'dark-mode') {
        heroSection.style.color = '#ffffff';
        checkpoints.forEach(cp => cp.style.borderColor = '#ffffff');
        navLinks.forEach(link => link.style.color = '#ffffff');
    } else if (theme === 'light-mode') {
        heroSection.style.color = '#333333';
        checkpoints.forEach(cp => cp.style.borderColor = '#333333');
        navLinks.forEach(link => link.style.color = '#333333');
    } else if (theme === 'maze-mode') {
        heroSection.style.color = '#ffcc00';
        checkpoints.forEach(cp => cp.style.borderColor = '#ffcc00');
        navLinks.forEach(link => link.style.color = '#ffcc00');
    }
    console.log(`Theme styles updated for: ${theme}`);
}

// Navigate to Section Using Checkpoints
const checkpoints = document.querySelectorAll('.checkpoint');
checkpoints.forEach(checkpoint => {
    checkpoint.addEventListener('click', () => {
        const targetSection = checkpoint.getAttribute('data-section');
        console.log(`Checkpoint clicked: Navigating to ${targetSection}`);
        navigateToSection(targetSection);
    });
});

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
        activateSection(sectionId);
    } else {
        console.error(`Section not found: ${sectionId}`);
    }
}

// Activate Section and Update Progress
function activateSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log(`Activated section: ${sectionId}`);
    } else {
        console.error(`Failed to activate section: ${sectionId}`);
    }
    updateProgress(sectionId);
}

// Update Progress Bar
function updateProgress(sectionId) {
    const sectionOrder = ['hero', 'about', 'projects', 'contact'];
    const index = sectionOrder.indexOf(sectionId);
    if (index !== -1) {
        const progressPercentage = ((index + 1) / sectionOrder.length) * 100;
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
            console.log(`Progress updated to: ${progressPercentage}%`);
        } else {
            console.error('Progress bar element not found');
        }
    } else {
        console.error(`Section ID not found in sectionOrder: ${sectionId}`);
    }
}

// Initial Load - Show Hero Section
document.addEventListener('DOMContentLoaded', () => {
    activateSection('hero');
    updateThemeStyles('light-mode'); // Set initial theme styles
    console.log('Initial load complete - Hero section activated');
});
