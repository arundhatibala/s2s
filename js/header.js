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


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".intro-image");

    images.forEach((image) => {
        image.addEventListener("mouseenter", () => expandImage(image));
        image.addEventListener("mouseleave", resetImages);
    });

    function expandImage(hoveredImage) {
        images.forEach((image) => {
            if (image === hoveredImage) {
                image.style.width = "45%"; // Expand hovered image to 45%
            } else {
                image.style.width = "27.5%"; // Shrink other images to 27.5%
            }
        });
    }

    function resetImages() {
        images.forEach((image) => {
            image.style.width = "33.33%"; // Reset all images to equal width
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-secondary");
    const carouselItems = document.querySelectorAll(".carousel-item");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons and add to the clicked one
            buttons.forEach(btn => btn.classList.remove("btn-active"));
            button.classList.add("btn-active");

            // Hide all carousel items and show only the selected one
            carouselItems.forEach(item => item.classList.remove("active"));
            carouselItems[index].classList.add("active");
        });
    });
});
