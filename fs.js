// Optional JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            alert(`Feature: ${feature.querySelector('h3').innerText}`);
        });
    });
});
