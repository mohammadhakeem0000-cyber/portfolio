document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Reveal Animation on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add 'fade-in' class to sections for animation possibility
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Scorecard Modal Logic
    const modal = document.getElementById('scorecard-modal');
    const viewBtn = document.getElementById('view-scorecard');
    const closeBtn = document.querySelector('.close-modal');

    if (viewBtn && modal) {
        viewBtn.onclick = function () {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        }
    }

    if (closeBtn && modal) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Close when clicking outside modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        if (event.target == certModal) {
            certModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Certificate Viewer Logic
    const certModal = document.getElementById('cert-viewer-modal');
    const certImg = document.getElementById('cert-image');
    const closeCertBtn = document.querySelector('.close-cert-modal');

    document.querySelectorAll('.verify-btn').forEach(btn => {
        btn.onclick = function () {
            const certSrc = this.getAttribute('data-cert');
            if (certSrc) {
                certImg.src = certSrc;
                certModal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }
    });

    if (closeCertBtn) {
        closeCertBtn.onclick = function () {
            certModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
