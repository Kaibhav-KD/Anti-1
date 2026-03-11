document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navActions = document.querySelector('.nav-actions');

    mobileMenuBtn.addEventListener('click', () => {
        // Simple toggle for demonstration - in production, an animated sidebar would be optimal
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(10, 12, 25, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.backdropFilter = 'blur(20px)';
            navLinks.style.borderBottom = '1px solid rgba(0, 229, 255, 0.2)';
            navLinks.style.zIndex = '99';
        }
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navContainer.style.background = 'rgba(10, 12, 25, 0.85)';
            navContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            navContainer.style.border = '1px solid rgba(0, 229, 255, 0.2)';
        } else {
            navContainer.style.background = 'rgba(10, 12, 25, 0.6)';
            navContainer.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
            navContainer.style.border = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });

    // 3. 3D Tilt Effect on Cards (Micro-interaction)
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            // Calculate rotation values (max rotation 10 degrees)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'transform 0.1s ease'; // Quick follow

            // Adjust gradient position
            const gradient = card.querySelector('.card-bg-gradient');
            if (gradient) {
                gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 60%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease'; // Smooth reset

            const gradient = card.querySelector('.card-bg-gradient');
            if (gradient) {
                gradient.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)`;
            }
        });
    });

    // 4. Parallax effect on Hero Visual Elements
    const hologramStage = document.querySelector('.hologram-stage');

    if (hologramStage) {
        document.addEventListener('mousemove', e => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * -20;

            // Keep the baseline 800px perspective and 20deg X rotation, slightly vary them
            hologramStage.style.transform = `perspective(800px) rotateX(${20 + y}deg) rotateY(${x}deg)`;
        });
    }
});
