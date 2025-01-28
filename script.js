const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navLinks.classList.add('close');
        menuToggle.classList.remove('open');
    }
    else {
        navLinks.classList.remove('close');
        navLinks.classList.add('open');
        menuToggle.classList.add('open');
    }
});

// Fade-out effect
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    });
});

// Parallax scrolling effect
function updateBackgroundPosition() {
    // Get the scrolled distance once the scroll event is triggered
    const scrolled = window.scrollY;
    // Adjust the background position to be 20% of the current scrolled distance
    this.document.body.style.backgroundPositionY = -(scrolled * 0.2) + 'px';
}

// Update background position as soon as the page loads,
// rather than waiting for the first scroll event
updateBackgroundPosition();

window.addEventListener('scroll', updateBackgroundPosition);

//Test