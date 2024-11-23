// List of companies with details
const companies = [
    { name: "Adaptyv Biosystems", category: "Health & Life Sciences", description: "Adaptyv Biosystems is focused on pioneering the next generation of biosensors that improve patient outcomes through real-time health monitoring.", link: "https://www.adaptyvbio.com/" },
    { name: "Ailegis", category: "Enterprise & SaaS", description: "Ailegis specializes in providing enterprise solutions tailored to the unique needs of SaaS companies.", link: "https://www.ailegis.ch/" },
    { name: "askEarth", category: "Enterprise & SaaS", description: "askEarth redefines enterprise management with sustainable, AI-driven SaaS solutions for modern businesses.", link: "https://www.ask.earth/" },
    { name: "Biosimo Chemicals", category: "Climate & Sustainability", description: "Biosimo Chemicals develops sustainable chemical processes that reduce emissions and support the green economy.", link: "https://www.biosimo-chemicals.com/" },
    { name: "Bollwerk", category: "Digital Economy", description: "Bollwerk leverages AI to build innovative digital tools for modern economies.", link: "https://www.bollwerk.ai/" },
    { name: "Catchfree", category: "Agriculture & Food", description: "Catchfree pioneers technology solutions for sustainable agriculture and food systems.", link: "https://www.catchfree.ch/" },
    { name: "Citus", category: "Health & Life Sciences", description: "Citus provides innovative solutions for healthcare diagnostics.", link: "https://www.citus-ag.com/" },
    { name: "ClimaLinks", category: "Enterprise & SaaS", description: "ClimaLinks offers tools for enterprises to manage climate-related risks.", link: "https://climalinks.com/" },
    { name: "Correntics", category: "Enterprise & SaaS", description: "Correntics enables efficient supply chain management with AI-powered analytics.", link: "https://www.correntics.com/" },
    { name: "Cotierra", category: "Climate & Sustainability", description: "Cotierra develops solutions for soil health and climate resilience.", link: "https://terra-preta.earth" },
    { name: "Enantios", category: "Deep Tech", description: "Enantios specializes in cutting-edge deep tech for chemical synthesis.", link: "https://enantios.com/" },
    { name: "Enhance-D", category: "Health & Life Sciences", description: "Enhance-D creates technologies to improve patient diagnostics.", link: "https://www.enhance-d.com" },
    { name: "FRIGG", category: "Digital Economy", description: "FRIGG designs eco-friendly tools for digital asset management.", link: "https://www.frigg.eco/" },
    { name: "Hoshī", category: "Enterprise & SaaS", description: "Hoshī provides AI solutions to simplify enterprise workflows.", link: "https://hoshii.ai/" },
    { name: "IMAI", category: "Health & Life Sciences", description: "IMAI is revolutionizing medical imaging through AI.", link: "https://www.imai-medtech.com/" },
    { name: "Intonate", category: "Enterprise & SaaS", description: "Intonate creates software tools for efficient business communications.", link: "https://www.intonate.ch/" },
    { name: "K2 Photonics", category: "Deep Tech", description: "K2 Photonics is advancing photonic computing technologies.", link: "https://k2photonics.com/" },
    { name: "Kora Labs", category: "Agriculture & Food", description: "Kora Labs develops precision agriculture solutions to optimize food production.", link: "https://koralabs.ch/" },
    { name: "Maven Health", category: "Health & Life Sciences", description: "Maven Health integrates AI with healthcare solutions for better patient outcomes.", link: "https://www.mavenhealth.ch/" },
    { name: "Oryl Photonics", category: "Deep Tech", description: "Oryl Photonics develops advanced photonics technology for various applications.", link: "https://www.orylphotonics.com/" },
    { name: "Prodlane", category: "Enterprise & SaaS", description: "Prodlane streamlines product management with innovative SaaS tools.", link: "https://prodlane.io/" },
    { name: "RRReefs", category: "Climate & Sustainability", description: "RRReefs creates artificial reefs to support marine biodiversity.", link: "https://www.rrreefs.com/" },
    { name: "Scanvio Medical", category: "Health & Life Sciences", description: "Scanvio Medical focuses on AI-assisted diagnostic tools.", link: "https://www.scanvio.com/" },
    { name: "Sensawear", category: "Health & Life Sciences", description: "Sensawear designs wearable technology for health monitoring.", link: "https://www.sensawear.ch/" },
    { name: "Showzone", category: "Enterprise & SaaS", description: "Showzone offers SaaS solutions for content creators.", link: "https://showzone.app/" },
    { name: "Storabble", category: "Digital Economy", description: "Storabble enhances digital asset storage for businesses.", link: "https://storabble.com/" },
    { name: "Umi", category: "Consumer & Lifestyle", description: "Umi offers immersive experiences for consumer lifestyle apps.", link: "https://umiapp.co/" },
    { name: "Yuon Control", category: "Enterprise & SaaS", description: "Yuon Control provides automation tools for enterprise workflows.", link: "https://yuon.ch/" },
  ];
  
  // Function to render companies
  function renderCompanies(companies) {
    const container = document.querySelector(".companies");
  
    companies.forEach(company => {
      const companyElement = `
        <div class="col-12 col-sm-12 col-md-4 col-lg-3">
          <div class="company-item" data-category="${company.category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}"">
            <h2 class="fs-4">
              ${company.name}
              <a href="${company.link}" target="_blank" class="link-icon ms-2">
                <i class="bi bi-link"></i>
              </a>
            </h2>
            <p class="category">${company.category}</p>
            <p class="company-description fs-6">${company.description}</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", companyElement);
    });
  }
  
  // Call the render function on page load
  renderCompanies(companies);
  