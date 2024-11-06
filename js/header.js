window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the value to your preference
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle the navigation menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbarNav');
    navbar.classList.toggle('active'); // Toggle the active class
});


document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Move hexagon-1 based on scroll
    const hexagon1 = document.querySelector('.hexagon-1');
    hexagon1.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`;

    // Move hexagon-2 based on scroll
    const hexagon2 = document.querySelector('.hexagon-2');
    hexagon2.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.15}px) rotate(20deg)`;
});








