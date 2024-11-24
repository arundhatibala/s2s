const teamMembers = [
    { name: "Max Schaldach", city: "Zurich", role: "Partner & President", linkedin: "https://www.linkedin.com/in/max-schaldach", category: "" },
    { name: "Giammarco Bozzelli", city: "Lausanne", role: "Partner & City Lead", linkedin: "https://www.linkedin.com/in/giammarcobozzelli/", category: "" },
    { name: "Simon Schütz", city: "St. Gallen", role: "Partner & City Lead", linkedin: "https://www.linkedin.com/in/simon-sch%C3%BCtz/", category: "" },
    { name: "Maia Migliaro", city: "Lausanne", role: "Partner", linkedin: "https://www.linkedin.com/in/maia-migliaro/", category: "" },
    { name: "Fabius Wiesmann", city: "Zurich", role: "Partner", linkedin: "https://www.linkedin.com/in/fabiuswiesmann/", category: "" },
    { name: "Nora Zimmerli", city: "Zurich", role: "Partner", linkedin: "https://www.linkedin.com/in/nora-zimmerli/", category: "" },
    { name: "Tom Blackmore-Esslinger", city: "St. Gallen", role: "Partner", linkedin: "https://www.linkedin.com/in/tom-blackmore-esslinger/", category: "" },
    { name: "Felix Hatzold", city: "Lausanne", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/felix-hatzold-a71b2128b/", category: "" },
    { name: "Gaston Champagne", city: "Lausanne", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/gaston-champagne", category: "" },
    { name: "Hanna Senn", city: "Lausanne", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/hanna-senn/", category: "" },
    { name: "Rayane Charif Chefchaouni", city: "Lausanne", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/rayane-charif-chefchaouni-01317b211/", category: "" },
    { name: "Subhasis Dehury", city: "Lausanne", role: "Investment Analyst", linkedin: "http://www.linkedin.com/in/subhasis-dehury-025271151", category: "" },
    { name: "Camille Pescatore", city: "Zurich", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/camille-pescatore/", category: "" },
    { name: "David Niedbalka", city: "Zurich", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/david-niedbalka-31713087/", category: "" },
    { name: "Elina Teplygina", city: "Zurich", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/elina-teplygina-64428b1ba/", category: "" },
    { name: "Gabby Chan", city: "Zurich", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/yccgabby/", category: "" },
    { name: "Roshan Mishra", city: "Zurich", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/roshan-mishra-903a20122/", category: "" },
    { name: "Marvin Troschke", city: "St. Gallen", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/marvin-troschke-05a0a2250/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5%2F7vn0AXSNaAn4Os5w2VTw%3D%3D", category: "" },
    { name: "Oscar von Podewils", city: "St. Gallen", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/oscar-von-podewils-252bb61bb/", category: "" },
    { name: "Shuya Zhang", city: "St. Gallen", role: "Investment Analyst", linkedin: "https://www.linkedin.com/in/shuya-zhang/", category: "" },
    { name: "Théo Dietrich", city: "St. Gallen", role: "Event Lead", linkedin: "https://www.linkedin.com/in/th%C3%A9odietrich/", category: "" },
    { name: "Alexander Kühling", city: "Zurich", role: "Data Engineer", linkedin: "https://www.linkedin.com/in/alexander-k%C3%BChling-34b529213/", category: "" },
    { name: "Mathias Schmid", city: "Zurich", role: "Data Engineer", linkedin: "https://www.linkedin.com/in/mathias-schmid-04a7a5223/", category: "" },
    { name: "Aurélie Hadid", city: "Lausanne", role: "Legal Expert", linkedin: "http://linkedin.com/in/aurélie-hadid-a0b665230", category: "" },
    { name: "Elyssa Siblini", city: "Lausanne", role: "Portfolio Manager", linkedin: "https://www.linkedin.com/in/elyssa-s?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", category: "" },
    { name: "Mina Attia", city: "Lausanne", role: "Portfolio Success Lead", linkedin: "http://www.linkedin.com/in/mina-attia-", category: "" }
];

// Advisor-specific data
const advisors = [
    { name: "Alex Ilic", role: "Co-Founder - ETH AI Center, Founder & CTO - Dacuda 3D", linkedin: "https://www.linkedin.com/in/ilicalexander/" },
    { name: "Cynthia Jurytko", role: "Venture Partner - Lucy Capital, Principal M&A - eBay", linkedin: "https://www.linkedin.com/in/cynthiajurytko/" },
    { name: "Isabelle Siegrist", role: "Founder & CEO - Sandborn, Head - ETH AI Launchpad", linkedin: "https://www.linkedin.com/in/isabellesiegrist" }
];

// Alumni-specific data
const alumni = [
    { name: "Arnout Devos", linkedin: "https://www.linkedin.com/in/arnoutdevos/" },
    { name: "David Campbell", linkedin: "https://www.linkedin.com/in/david-campbell-ch/" },
    { name: "Jaques-Christopher Schmidt", linkedin: "https://www.linkedin.com/in/jaques-schmidt-81640b241/" },
    { name: "Anirudhh Ramesh", linkedin: "https://www.linkedin.com/in/anirudhhramesh/" },
    { name: "Flurin Martin", linkedin: "https://www.linkedin.com/in/flurinmartin/" },
    { name: "Katerina Rigana", linkedin: "https://www.linkedin.com/in/riganak/" },
    { name: "Lion Six", linkedin: "https://www.linkedin.com/in/lionsix/" },
    { name: "Meline Cretegny", linkedin: "https://www.linkedin.com/in/meline-cretegny-849632234/" },
    { name: "Mikhail Stoliartchouk", linkedin: "https://www.linkedin.com/in/mikhail-stoliartchouk-0b30b81a9/" },
    { name: "Sarper Melik Ertekin", linkedin: "https://www.linkedin.com/in/sarper-melik-ertekin/" },
    { name: "Sephin Alappatt", linkedin: "https://www.linkedin.com/in/sephin-alappatt-2aa529b8/" },
    { name: "Tobias Teslof", linkedin: "https://www.linkedin.com/in/tobiasteslof/" },
    { name: "Calvin Zhang", linkedin: "https://www.linkedin.com/in/calvincbzhang/" },
    { name: "Felix Wiese", linkedin: "https://www.linkedin.com/in/felix-wiese-8b5a73106/" },
    { name: "Julia Wagner", linkedin: "https://www.linkedin.com/in/julia-wagner-austria/" },
    { name: "Laurynas Lopata", linkedin: "https://www.linkedin.com/in/laurynas-lopata-46a23480/" },
    { name: "Lewis Jones", linkedin: "https://www.linkedin.com/in/lewis-jones-888469bb/" },
    { name: "Liliane Krüsi", linkedin: "https://www.linkedin.com/in/liliane-kruesi/" },
    { name: "Maximilian Krödel", linkedin: "https://www.linkedin.com/in/maximilian-kroedel/" },
    { name: "Moritz von Contzen", linkedin: "https://www.linkedin.com/in/mooritzvc/" },
    { name: "Nhi Luong", linkedin: "https://www.linkedin.com/in/nhi-luong-4651a29b/" },
    { name: "Noah Ghisleni", linkedin: "https://www.linkedin.com/in/noahghisleni/" },
    { name: "Raphael Beuter", linkedin: "https://www.linkedin.com/in/raphael-beuter/" },
    { name: "Alessandro Boccassino", linkedin: "https://www.linkedin.com/in/alessandro-boccassino/" },
    { name: "Alessio Farrér", linkedin: null },
    { name: "Alexandre Mourot", linkedin: "https://www.linkedin.com/in/alexandre-mourot-01b965239/" },
    { name: "Alexandre Piveteau", linkedin: "https://www.linkedin.com/in/alexandrepiveteau/" },
    { name: "Amelie August", linkedin: "https://www.linkedin.com/in/amelieaugust/" },
    { name: "Bahar Acilan", linkedin: "https://www.linkedin.com/in/bahar-acilan/" },
    { name: "Eric Bezzam", linkedin: "https://www.linkedin.com/in/eric-bezzam/" },
    { name: "Eric Nerger", linkedin: "https://www.linkedin.com/in/eric-nerger/" },
    { name: "Evy Chang", linkedin: "https://www.linkedin.com/in/evychang/" },
    { name: "Joel Weiss", linkedin: "https://www.linkedin.com/in/weiss-joel/" },
    { name: "Louis-Emmanuel Chriqui", linkedin: "https://www.linkedin.com/in/louis-emmanuel-chriqui-1002b2230/" },
    { name: "Louise Maunoir", linkedin: "https://www.linkedin.com/in/louise-scarlette-maunoir/" },
    { name: "Mak Fazlic", linkedin: "https://www.linkedin.com/in/mak-fazlic-2880131b9/" },
    { name: "Marlene Silz", linkedin: "https://www.linkedin.com/in/marlene-silz-0292021bb/" },
    { name: "Marvin Reusing", linkedin: "https://www.linkedin.com/in/marvin-reusing/" },
    { name: "Nathan Widmer", linkedin: "https://www.linkedin.com/in/nathan-widmer-a44976232/" },
    { name: "Nayanika Debnath", linkedin: "https://www.linkedin.com/in/nayanika-debnath-9a186720a" },
    { name: "Pardis Adams", linkedin: "https://www.linkedin.com/in/pardisadams/" },
    { name: "Pascal Dahinden", linkedin: "https://www.linkedin.com/in/pascaldahinden/" },
    { name: "Peter Michaelis", linkedin: "https://www.linkedin.com/in/peter-m-michaelis-%E6%A8%AA%E5%B1%B1-aa2761178/" },
    { name: "Pietro Miotti", linkedin: "https://www.linkedin.com/in/pietro-miotti-69a8b912a/" },
    { name: "Polina Holub", linkedin: "https://www.linkedin.com/in/polina-holub-010b95222/" },
    { name: "Raphaël Tonione", linkedin: "https://www.linkedin.com/in/rtonione/" },
    { name: "Thaddäus Heim", linkedin: "https://www.linkedin.com/in/thaddaeusheim/" },
    { name: "Timo Arnold", linkedin: "https://www.linkedin.com/in/timoarnold/" },
    { name: "Vincent Flattot", linkedin: "https://www.linkedin.com/in/vincent-flattot-491056193/" },
    { name: "Wiona Glänzer", linkedin: "https://www.linkedin.com/in/wiona-glaenzer/" },
    { name: "Xunhui Wang", linkedin: "https://www.linkedin.com/in/xunhui-wang-b8148822a/" },
    { name: "Charles Karamoko", linkedin: "https://www.linkedin.com/in/charles-karamoko-932724198/" },
    { name: "Claudia Alarcón López", linkedin: "https://www.linkedin.com/in/claudiaalarconlopez/" },
    { name: "Katleen Chang", linkedin: "https://www.linkedin.com/in/katleen-c-471409216/" },
    { name: "Mathilde Reyes", linkedin: "https://www.linkedin.com/in/mathilde-reyes-865213190/" },
    { name: "Maxime Cornut", linkedin: "https://www.linkedin.com/in/maximecornut/" },
    { name: "Quynh Vu", linkedin: null },
    { name: "Lorenzo Arbolino", linkedin: "https://www.linkedin.com/in/lorenzo-arbolino/" }
  ];
  
// Assign categories based on roles
teamMembers.forEach(member => {
    if (member.role.includes("Partner") || member.role.includes("President")) {
        member.category = "BOARD"; // Partner or President roles
    } else if (member.role.includes("Investment Analyst")) {
        member.category = "INVESTORS"; // Investment Analyst roles
    } else {
        member.category = "OPERATIONS"; // All other roles
    }
});

function renderTeamMembers(containerSelector, teamData) {
    // Select the container
    const container = document.querySelector(containerSelector);
    const containers = document.querySelectorAll('.category-section'); // replace with the correct selector

    // Loop through each container and clear its content
    containers.forEach(container => {
        container.innerHTML = ""; // Clear content
    });

    // Dynamically get categories from the team members data
    const categories = ['BOARD', 'INVESTORS', 'OPERATIONS'];

    // Find the maximum number of items in any category
    const maxItems = Math.max(
        ...categories.map(category => teamData.filter(member => member.category === category).length)
    );

    categories.forEach(category => {
        // Filter members by category
        let filteredMembers = teamData.filter(member => member.category === category);

        // Calculate how many dummy members to add
        const missingItems = maxItems - filteredMembers.length;

        // Add dummy members if necessary
        for (let i = 0; i < missingItems; i++) {
            filteredMembers.push({
                name: 'Dummy Member',
                linkedin: '#',
                city: '',
                role: 'N/A',
                category: category
            });
        }

        // Only render the category if there are team members for it
        if (filteredMembers.length > 0) {
            // Create a row for this category
            const row = document.createElement("div");
            row.className = "row team-row";

            // Add a header for the category
            const header = document.createElement("h4");
            header.className = "col-12 text-left mt-4";
            header.textContent = category;
            row.appendChild(header);

            // Loop through each filtered member
            filteredMembers.forEach(member => {
                // Create a column
                const col = document.createElement("div");
                col.className = "col-12 col-sm-12 col-md-4 col-lg-3 team-item";
                col.setAttribute("data-category", member.category);

                // If this is a dummy member, add a class to hide it
                if (member.name === 'Dummy Member') {
                    col.classList.add('dummy-item');
                }

                // Populate column content
                col.innerHTML = `
                    <div class="team-member">
                        <h2 class="fs-4">
                            ${member.name}
                            <a href="${member.linkedin}" target="_blank" class="link-icon ms-2">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </h2>
                        <p class="city">${member.city}</p>
                        <p class="team">${member.role}</p>
                    </div>
                `;

                // Append the column to the row
                row.appendChild(col);
            });

            // Append the row to the container
            container.appendChild(row);
        }
    });
}




// function renderTeamMembers(containerSelector, teamData) {
//     // Select the container
//     const container = document.querySelector(containerSelector);
//     const containers = document.querySelectorAll('.category-section'); // replace with the correct selector

//     // Loop through each container and clear its content
//     containers.forEach(container => {
//         container.innerHTML = ""; // Clear content
//     });

//     // Dynamically get categories from the team members data
//     const categories = ['BOARD', 'INVESTORS', 'OPERATIONS'];

//     categories.forEach(category => {
//         // Filter members by category
//         const filteredMembers = teamData.filter(member => member.category === category);

//         // Only render the category if there are team members for it
//         if (filteredMembers.length > 0) {
//             // Create a row for this category
//             const row = document.createElement("div");
//             row.className = "row team-row";

//             // Add a header for the category
//             const header = document.createElement("h4");
//             header.className = "col-12 text-left mt-4";
//             header.textContent = category;
//             row.appendChild(header);

//             // Loop through each filtered member
//             filteredMembers.forEach(member => {
//                 // Create a column
//                 const col = document.createElement("div");
//                 col.className = "col-12 col-sm-12 col-md-4 col-lg-3 team-item";
//                 col.setAttribute("data-category", member.category);

//                 // Populate column content
//                 col.innerHTML = `
//                     <div class="team-member">
//                         <h2 class="fs-4">
//                             ${member.name}
//                             <a href="${member.linkedin}" target="_blank" class="link-icon ms-2">
//                                 <i class="bi bi-linkedin"></i>
//                             </a>
//                         </h2>
//                         <p class="city">${member.city}</p>
//                         <p class="team">${member.role}</p>
//                     </div>
//                 `;

//                 // Append the column to the row
//                 row.appendChild(col);
//             });

//             // Append the row to the container
//             container.appendChild(row);
//         }
//     });
// }

// Function to render alumni
function renderAlumni(containerSelector, alumniData) {
    const container = document.querySelector(containerSelector);
    // Select all containers that you want to clear (use a common class or selector for the containers)
    const containers = document.querySelectorAll('.category-section'); // replace with the correct selector

// Loop through each container and clear its content
containers.forEach(container => {
    container.innerHTML = ""; // Clear content
});

    // Add each alumni member
    
    alumniData.forEach(alumnus => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-12 col-md-4 col-lg-3 team-item";
        col.innerHTML = `
            <div class="team-member">
                <h2 class="fs-4">
                    ${alumnus.name}
                    <a href="${alumnus.linkedin}" target="_blank" class="link-icon ms-2">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </h2>

            </div>
        `;

        container.appendChild(col);
    });
}
// Function to render alumni
function renderAdvisors(containerSelector, alumniData) {
    const container = document.querySelector(containerSelector);
    const containers = document.querySelectorAll('.category-section'); // replace with the correct selector

    // Loop through each container and clear its content
    containers.forEach(container => {
        container.innerHTML = ""; // Clear content
    });

    // Add each alumni member
    alumniData.forEach(alumnus => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-12 col-md-4 col-lg-3 team-item";
        col.innerHTML = `
            <div class="team-member">
                <h2 class="fs-4">
                    ${alumnus.name}
                    <a href="${alumnus.linkedin}" target="_blank" class="link-icon ms-2">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </h2>
                <p class="team">${alumnus.role}</p>
            </div>
        `;

        container.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Render initial content
    renderTeamMembers(".team", teamMembers);

    // Add event listeners for tabs
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', (event) => {
            const targetTab = event.target;
            const targetCategory = targetTab.id.split('-')[1]; // Extract category from the tab ID

            // Activate the clicked tab and deactivate others
            const allTabs = document.querySelectorAll('.nav-link');
            const allPanes = document.querySelectorAll('.tab-pane');
            allTabs.forEach(tab => tab.classList.remove('active'));
            allPanes.forEach(pane => pane.classList.remove('show', 'active'));

            targetTab.classList.add('active');
            document.getElementById(`pills-${targetCategory}`).classList.add('show', 'active');

            // Dynamically render the appropriate content for the selected tab
            if (targetCategory === "current") {
                renderTeamMembers(".team", teamMembers);
            } else if (targetCategory === "advisors") {
                renderAdvisors(".advisors", advisors);
            } else if (targetCategory === "alumni") {
                renderAlumni(".alumni", alumni);
            }
        });
    });
});
