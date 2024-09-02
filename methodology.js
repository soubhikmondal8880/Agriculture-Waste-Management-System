document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.target.dataset.delay}s`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    steps.forEach((step, index) => {
        step.dataset.delay = index * 0.2;
        observer.observe(step);
    });
});
