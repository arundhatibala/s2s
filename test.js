// Example team data
const teamMembers = [
    { name: "Max Schaldach", city: "Zurich", role: "Partner & President", linkedin: "https://www.linkedin.com/in/max-schaldach", category: "BOARD" },
    { name: "Giammarco Bozzelli", city: "Lausanne", role: "Partner & VP", linkedin: "https://www.linkedin.com/in/giammarcobozzelli", category: "BOARD" }
];

// Example alumni data
const alumni = [
    { name: "John Doe", role: "Former Partner", linkedin: "https://www.linkedin.com/in/johndoe/" }
];

// Example advisors data
const advisors = [
    { name: "Alex Ilic", role: "Co-Founder - ETH AI Center", linkedin: "https://www.linkedin.com/in/ilicalexander/" }
];

function renderContent(containerSelector, data) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ""; // Clear old content

    data.forEach(member => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 team-item";
        col.innerHTML = `
            <div class="team-member">
                <h2 class="fs-5">
                    ${member.name}
                    <a href="${member.linkedin}" target="_blank" class="ms-2">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </h2>
                <p>${member.role}</p>
                ${member.city ? `<p>${member.city}</p>` : ""}
            </div>
        `;
        container.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Render initial tab content
    renderContent("#pills-home", teamMembers);

    // Handle tab clicks
    document.querySelectorAll(".nav-link").forEach(tab => {
        tab.addEventListener("click", event => {
            const targetTab = event.target;
            const targetPane = document.querySelector(targetTab.getAttribute("data-bs-target"));

            if (targetTab.id.includes("home")) {
                renderContent("#pills-home", teamMembers);
            } else if (targetTab.id.includes("profile")) {
                renderContent("#pills-profile", alumni);
            } else if (targetTab.id.includes("contact")) {
                renderContent("#pills-contact", advisors);
            }
        });
    });
});
