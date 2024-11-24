// List of companies with details
const companies = [
  { name: "Adaptyv Biosystems", category: "Health & Life Sciences", description: "Next-generation protein engineering.", link: "https://www.adaptyvbio.com/" },
  { name: "Ailegis", category: "Enterprise & SaaS", description: "Ailegis automates legal document drafting using AI.", link: "https://www.ailegis.ch/" },
  { name: "askEarth", category: "Enterprise & SaaS", description: "Tool to access unique information from Earth Observation images.", link: "https://www.ask.earth/" },
  { name: "Biosimo Chemicals", category: "Climate & Sustainability", description: "Biobased chemicals with an innovative catalyst.", link: "https://www.biosimo-chemicals.com/" },
  { name: "Bollwerk", category: "Digital Economy", description: "Collaborative data stack for financial research.", link: "https://www.bollwerk.ai/" },
  { name: "Catchfree", category: "Agriculture & Food", description: "Catchfree produces plant-based alternatives to seafood.", link: "https://www.catchfree.ch/" },
  { name: "Citus", category: "Health & Life Sciences", description: "Skin diagnostics tool.", link: "https://www.citus-ag.com/" },
  { name: "ClimaLinks", category: "Enterprise & SaaS", description: "Weather relationship management software to face weather risks.", link: "https://climalinks.com/" },
  { name: "Correntics", category: "Enterprise & SaaS", description: "SaaS for supply chain resilience.", link: "https://www.correntics.com/" },
  { name: "Cotierra", category: "Climate & Sustainability", description: "Decentralizing biochar in the global south at scale.", link: "https://terra-preta.earth" },
  { name: "Enantios", category: "Deep Tech", description: "New measurement technique for molecular structures for pharma.", link: "https://enantios.com/" },
  { name: "Enhance-D", category: "Health & Life Sciences", description: "Data aggregator for diabetes-related data.", link: "https://www.enhance-d.com" },
  { name: "FRIGG", category: "Digital Economy", description: "Empowers sustainable infrastructure developers to issue digital securities.", link: "https://www.frigg.eco/" },
  { name: "Hoshī", category: "Enterprise & SaaS", description: "Hoshī builds AI agents to put wholesaler workflows on autopilot.", link: "https://hoshii.ai/" },
  { name: "IMAI", category: "Health & Life Sciences", description: "Cancer detection with detect diseased tissue in 3D.", link: "https://www.imai-medtech.com/" },
  { name: "Intonate", category: "Enterprise & SaaS", description: "Text to speech tool for general practitioners.", link: "https://www.intonate.ch/" },
  { name: "K2 Photonics", category: "Deep Tech", description: "Dual frequency comb lasers for precise measurements in industrial applications.", link: "https://k2photonics.com/" },
  { name: "Kora Labs", category: "Agriculture & Food", description: "AI nutritionist for agriculture.", link: "https://koralabs.ch/" },
  { name: "Maven Health", category: "Health & Life Sciences", description: "Metabolic health risk profiling from saliva sampling for preventive healthcare.", link: "https://www.mavenhealth.ch/" },
  { name: "Oryl Photonics", category: "Deep Tech", description: "Measuring solubility of compounds through a new money and time saving method.", link: "https://www.orylphotonics.com/" },
  { name: "Prodlane", category: "Enterprise & SaaS", description: "The AI platform for corporate knowledge.", link: "https://prodlane.io/" },
  { name: "RRReefs", category: "Climate & Sustainability", description: "Rebuilding coral reefs.", link: "https://www.rrreefs.com/" },
  { name: "Scanvio Medical", category: "Health & Life Sciences", description: "Scanvio develops AI for endometriosis diagnosis.", link: "https://www.scanvio.com/" },
  { name: "Sensawear", category: "Health & Life Sciences", description: "Wearable NIRS device for pressure injury risk assessing and prevention.", link: "https://www.sensawear.ch/" },
  { name: "Showzone", category: "Enterprise & SaaS", description: "Presentation delivery app powered by AI.", link: "https://showzone.app/" },
  { name: "Storabble", category: "Digital Economy", description: "Booking for storage space.", link: "https://storabble.com/" },
  { name: "Umi", category: "Consumer & Lifestyle", description: "Language learning through online videos.", link: "https://umiapp.co/" },
  { name: "Yuon Control", category: "Enterprise & SaaS", description: "Patented technology which leads to more efficient district heating.", link: "https://yuon.ch/" }
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
  