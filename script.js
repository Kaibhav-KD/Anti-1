document.addEventListener('DOMContentLoaded', () => {
    // Subtle parallax effect on mouse move
    const parallaxWrapper = document.querySelector('.parallax-wrapper');
    const glowRing = document.querySelector('.glow-ring');
    
    document.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to center of screen (-0.5 to 0.5)
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);
        
        if (parallaxWrapper) {
            // Move wrapper opposite to mouse for parallax depth
            parallaxWrapper.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
            parallaxWrapper.style.transition = 'transform 0.1s ease-out';
        }
        
        if (glowRing) {
            // Move glow slightly with mouse
            glowRing.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            glowRing.style.transition = 'transform 0.1s ease-out';
        }
    });

    // Button interactions
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
            // Restore hover transform for primary buttons
            if(this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });
});
