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


// Array to keep track of active categories
let activeCategories = [];

// Function to toggle the active category
function toggleCategory(button, category) {
    console.log("Button clicked for category:", category);

    const index = activeCategories.indexOf(category);

    if (index > -1) {
        // Remove category if already active
        activeCategories.splice(index, 1);
        button.classList.remove('active');
        console.log("Category removed:", category);
    } else {
        // Add category if not active
        activeCategories.push(category);
        button.classList.add('active');
        console.log("Category added:", category);
    }

    console.log("Active categories:", activeCategories);
    filterProjects();
}

// Function to filter the projects based on the active categories
function filterProjects() {
    console.log("Filtering projects with active categories:", activeCategories);

    const projects = document.querySelectorAll('.grid-item');
    projects.forEach(project => {
        // Get the categories of the project
        const projectCategories = project.getAttribute('data-category').split(' ');

        console.log("Project categories:", projectCategories);

        // Show project if it matches all active categories
        if (activeCategories.length === 0 || activeCategories.every(cat => projectCategories.includes(cat))) {
            project.style.display = 'block';
            const titleElement = project.querySelector('.card-title');
            if (titleElement) {
                console.log("Project shown:", titleElement.textContent);
            } else {
                console.log("Project shown: No card-title element found");
            }
        } else {
            project.style.display = 'none';
            const titleElement = project.querySelector('.card-title');
            if (titleElement) {
                console.log("Project hidden:", titleElement.textContent);
            } else {
                console.log("Project hidden: No card-title element found");
            }
        }
    });
}

// Initial display of all items when the page loads
window.addEventListener("DOMContentLoaded", () => {
    filterProjects();
});


// Function to filter company items based on selected category
function filterCategory(selectElement) {
  const selectedCategory = selectElement.value;
  const items = document.querySelectorAll('.company-item');

  items.forEach(item => {
      if (!selectedCategory || item.dataset.category === selectedCategory) {
          item.style.opacity = '1'; // Show item
          item.style.visibility = 'visible'; // Ensure it's visible
          item.style.pointerEvents = 'auto'; // Allow interaction
      } else {
          item.style.opacity = '0.2'; // Dim item
          item.style.visibility = 'visible'; // Keep it visible, but dimmed
          item.style.pointerEvents = 'none'; // Disable interaction
      }
  });
}

// Function to handle button click and filter team items
function filterTeam(teamCategory) {
  // Handle toggle button active state
  const buttons = document.querySelectorAll('.btn-toggle');
  buttons.forEach((btn) => {
      // Match the button's text with the selected category and toggle the 'active' class
      if (btn.textContent.includes(teamCategory === 'current' ? 'Active' : 'Alumni')) {
          btn.classList.add('active');
      } else {
          btn.classList.remove('active');
      }
  });

  // Filter the team items based on the selected category
  const allItems = document.querySelectorAll('.team-item');
  allItems.forEach(item => {
      if (teamCategory === 'current') {
          item.style.display = item.dataset.category === 'current' ? 'block' : 'none';
      } else if (teamCategory === 'alumni') {
          item.style.display = item.dataset.category === 'alumni' ? 'block' : 'none';
      } else {
          item.style.display = 'block'; // Default to showing all items
      }
  });

  console.log(`${teamCategory} team selected`);
}



// GSAP Scroll-based Animation
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY; // Get the scroll position

  // GSAP animation for hexagon-1
  gsap.to('.hexagon-1', {
      y: scrollY * 0.2, // Increase multiplier to make it move by 20px (adjust as needed)
      ease: 'power1.out', // Smooth easing for the animation
      duration: 0.2, // Duration of each frame for smoothness
  });

  // GSAP animation for hexagon-2
  gsap.to('.hexagon-2', {
      y: scrollY * 0.2, // Same effect for the second hexagon
      ease: 'power1.out', // Smooth easing for the animation
      duration: 0.2, // Duration of each frame for smoothness
  });
});


document.addEventListener("scroll", function () {
  const hexagon1 = document.querySelector(".hexagon-1");
  const hexagon2 = document.querySelector(".hexagon-2");
  const heroSection = document.querySelector(".hero");

  const heroRect = heroSection.getBoundingClientRect();
  const hexHeight = hexagon1.offsetHeight;

  // Determine the scroll offset
  if (heroRect.top <= 0 && heroRect.bottom >= hexHeight) {
      const offset = Math.min(-heroRect.top, heroRect.height - hexHeight);
      hexagon1.style.transform = `translateY(${offset}px)`;
      hexagon2.style.transform = `translateY(${offset + 20}px)`; // Add slight difference for visual effect
  } else {
      // Reset to original position
      hexagon1.style.transform = "translateY(0)";
      hexagon2.style.transform = "translateY(0)";
  }
});
