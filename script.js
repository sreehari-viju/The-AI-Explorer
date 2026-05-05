// Custom JavaScript for Personal Portfolio of Sreehari Viju

document.addEventListener('DOMContentLoaded', () => {
    // Add scrolled shadow class to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade-in animated elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // ── Active nav link tracking ──
    const navLinks = document.querySelectorAll('#main-nav a[data-section]');
    const sections = document.querySelectorAll('section[id]');

    const setActiveNav = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
        });
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveNav(entry.target.id);
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => navObserver.observe(section));

    // Simple performance logger or tracker (optional)
    console.log("Sreehari Viju Portfolio loaded. Premium UX initialized successfully.");

    // Dynamic Scroll-to-Top Button
    const scrollTopBtn = document.createElement('button');
    // We use an SVG for a clean arrow
    scrollTopBtn.innerHTML = '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path></svg>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top of page');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
