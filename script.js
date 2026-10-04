// --- 1. Dark / Light Mode Toggle with LocalStorage ---
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeToggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// --- 2. Active Nav Link on Scroll (Scroll Spy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// --- 3. Contact Form Submission Feedback ---
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.form-submit');
        if (!submitBtn) {
            console.error("Could not find button with class .form-submit");
            return;
        }

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.backgroundColor = '#22c55e';
        submitBtn.style.color = '#ffffff';

        // Clear the input fields
        contactForm.reset();

        // Reset button back after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
        }, 3000);
    });
} else {
    console.error("Could not find element with id #contact-form");
}