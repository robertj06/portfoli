document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animado');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
