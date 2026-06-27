/* ============ FORM SUBMISSION ============ */
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const submitBtn = event.target.querySelector('.subscribe-btn');
    
    // Show success feedback
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Subscribed!';
    submitBtn.style.backgroundColor = '#d4a574';
    
    // Reset after 2 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '#2a2a2a';
        event.target.reset();
    }, 2000);

    console.log(`Newsletter subscription: ${email}`);
}

/* ============ SMOOTH SCROLL FOR NAVIGATION LINKS ============ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

/* ============ INTERSECTION OBSERVER FOR ANIMATIONS ============ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe article cards
document.querySelectorAll('.article-card').forEach(card => {
    observer.observe(card);
});

/* ============ ADD ACTIVE STATE TO NAVIGATION ============ */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ============ LAZY LOADING IMAGES ============ */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.article-image').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ============ PARALLAX EFFECT ON HERO ============ */
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

/* ============ ADD RIPPLE EFFECT ON BUTTON CLICK ============ */
const buttons = document.querySelectorAll('.subscribe-btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

/* ============ PAGE LOAD ANIMATION ============ */
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});


console.log('LOMBOK Website loaded successfully!');