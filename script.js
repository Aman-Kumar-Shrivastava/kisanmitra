document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');
    });

    // 2. Sticky Navbar Shadow & Color Change on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // If it's a stat badge, trigger count up
                if (entry.target.classList.contains('stat-badge')) {
                    const numberEl = entry.target.querySelector('.stat-number');
                    if (numberEl) {
                        animateValue(numberEl, 0, parseInt(numberEl.getAttribute('data-target')), 2000);
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate, .animate-up');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Count Up Animation Function
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end.toLocaleString();
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. Setup Images dynamically if filenames are known or keep fallbacks
    setupImages();

    // 6. Testimonial Carousel basic logic
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active classes
            dots.forEach(d => d.classList.remove('active'));
            cards.forEach(c => {
                c.style.display = 'none';
                c.classList.remove('active-card');
            });

            // Set active
            dot.classList.add('active');
            // Logic here is simple for demo: just show corresponding card or generic mobile hide/show toggle
            if(window.innerWidth > 768) {
                cards.forEach(c => c.style.display = 'block');
            } else {
                if(cards[index]) cards[index].style.display = 'block';
            }
        });
    });
});

function setupImages() {
    // Try to attach the images. If they don't load, CSS handles backgrounds gracefully.
    try {
        // Will inject actual logic or just path updates via CSS later
    } catch(e) {
        console.log("Image setup error", e)
    }
}
