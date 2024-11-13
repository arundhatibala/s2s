window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar-brand img');

    if (window.scrollY > 50) { // Adjust scroll threshold if needed
        header.classList.add('scrolled');
        logo.classList.add('logo-hidden');
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('logo-hidden');
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
    const buttons = document.querySelectorAll(".category-button");
    const slides = document.querySelectorAll(".portfolio-slide");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons and slides
            buttons.forEach(btn => btn.classList.remove("active"));
            slides.forEach(slide => slide.classList.remove("active"));

            // Add active class to the clicked button and corresponding slide
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            document.querySelector(`.portfolio-slide[data-category="${category}"]`).classList.add("active");
        });
    });
});


// set the starting position of the cursor outside of the screen
var clientX = -300,
    clientY = -300
var linkList = []
// elements 
var outerCursor = document.querySelector(".cursor--outer");
var innerCursor = document.querySelector(".cursor--inner");

function generateLinks() {
  linkList = document.getElementsByClassName("link");
  console.log(linkList);
}

var initCursor = function() {
  // Check if screen width is larger than 768px (non-mobile devices)
  if (window.innerWidth > 768) {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", function(e) {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    var render = function() {
      TweenMax.set(outerCursor, {
        x: clientX,
        y: clientY,
        delay: .05,
        ease: Power1.easeOut
      });

      TweenMax.set(innerCursor, {
        x: clientX,
        y: clientY
      });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  } else {
    // Hide the custom cursor if on a smaller screen
    outerCursor.style.display = "none";
    innerCursor.style.display = "none";
    document.body.style.cursor = "default"; // Make sure the default cursor shows up
  }
};

initCursor();

function growOnHover() {
  generateLinks();
  for(var i = 0; i < linkList.length; i++) {
    let link = linkList[i];
    link.addEventListener("mouseleave", function() {
      TweenMax.to(outerCursor, 1, {scale: 1});
    });
    link.addEventListener("mouseenter", function() {
      TweenMax.to(outerCursor, 1, {scale: 2});
    });
  }
}

growOnHover();





