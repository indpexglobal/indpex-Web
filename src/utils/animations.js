/**
 * High-performance animation engine using Intersection Observer
 */

export const initScrollAnimations = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // If it's a counter, start counting
                if (entry.target.hasAttribute('data-count')) {
                    animateCounter(entry.target);
                }

                // Stop observing after reveal if desired (standard for reveals)
                if (!entry.target.hasAttribute('data-observe-always')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, options);

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => observer.observe(el));
};

/**
 * Animate counters for statistics
 */
const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = Math.floor(easeProgress * (target - start) + start);
        el.textContent = currentCount + (el.getAttribute('data-suffix') || '');

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };

    requestAnimationFrame(updateCounter);
};

/**
 * Parallax effect for Hero sections
 */
export const initParallax = () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
};
