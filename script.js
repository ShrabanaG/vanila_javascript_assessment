const productBoxContent = [
  {
    imgSrc: "./assets/icons/BSI_ICON.png",
    header: "BIS Certified",
  },
  {
    imgSrc: "./assets/icons/ISO_Icon.png",
    header: "ISO Certified",
  },
  {
    imgSrc: "./assets/icons/CE_Certification.png",
    header: "CE Certified",
  },
];

const heroPointerContent = [
  "Leak-Proof Fusion Joints",
  "Chemical Resistance",
  "50+ Year Service Life",
  "Flexible Installation",
  "Flexible Installation",
];

const specifications = [
  { parameter: "Pipe Diameter Range", value: "20mm to 1600mm (3/4” to 63”)" },
  {
    parameter: "Pressure Ratings",
    value: "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16",
  },
  {
    parameter: "Standard Dimension Ratio",
    value: "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11",
  },
  { parameter: "Operating Temperature", value: "-40C to +80C (-40F to +176F)" },
  { parameter: "Service Life", value: "50+ Years (at 20 degrees C, PN 10)" },
  { parameter: "Material Density", value: "0.95 - 0.96 g/cm3" },
  {
    parameter: "Certification Standards",
    value: "IS 5984, ISO 4427, ASTM D3035",
  },
  { parameter: "Joint Type", value: "Butt Fusion, Electrofusion, Mechanical" },
  { parameter: "Coil Lengths", value: "Up to 500mm (for smaller diameters)" },
  { parameter: "Country of Origin", value: "India" },
];

const featuresData = [
  {
    icon: "./assets/icons/Bag.png",
    header: "Superior Chemical Resistance",
  },
  {
    icon: "./assets/icons/Needle.png",
    header: "Exceptional Flexibility & Durability",
  },
  {
    icon: "./assets/icons/Package.png",
    header: "Leak-Proof Fusion Welding",
  },
  {
    icon: "./assets/icons/GearFine.png",
    header: "Cost-Effective Long-Term Solution",
  },
  {
    icon: "./assets/icons/GearFine.png",
    header: "Environmentally Sustainable",
  },
  {
    icon: "./assets/icons/GearFine.png",
    header: "Certified Quality Assurance",
  },
];

const faqData = [
  {
    question: "What is the purpose of a laser cutter for sheet metal?",
    answer:
      "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in modern manufacturing.",
  },
  {
    question:
      "What are the benefits of using aluminum tubing in manufacturing?",
    answer:
      "Aluminum tubing is lightweight, corrosion-resistant, and durable, making it ideal for various structural and industrial applications.",
  },
  {
    question: "How is aluminum tubing produced?",
    answer:
      "It is typically manufactured through extrusion or drawing processes to achieve precise dimensions and strength.",
  },
  {
    question: "What are the common applications of aluminum tubing?",
    answer:
      "Used in automotive, aerospace, construction, and industrial frameworks.",
  },
  {
    question: "Can aluminum tubing be customized?",
    answer:
      "Yes, it can be customized in size, thickness, finish, and strength grade.",
  },
];

const portfolioData = [
  {
    title: "HDPE Fittings & Accessories",
    desc: "Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.",
    image: "./assets/portfolio_1.webp",
  },
  {
    title: "Professional Installation Services",
    desc: "Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.",
    image: "./assets/portfolio_2.webp",
  },
  {
    title: "PE-RT Heating Pipes",
    desc: "Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.",
    image: "./assets/portfolio_1.webp",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  loadBoxContent();
  renderHeroPointerContent();
  renderSpecifications();
  renderFeatures();
  renderFAQs();
  renderPortfolio();
  renderResources();
});

const initStickyHeader = () => {
  const header = document.querySelector(".main-header");
  const heroSection = document.querySelector(".hero");

  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
};

const loadBoxContent = () => {
  const mainContainer = document.querySelector(".initial-box-content");

  productBoxContent.map((each, index) => {
    const eachContainer = document.createElement("div");
    eachContainer.classList.add("each-box-content");

    eachContainer.innerHTML = `<span><img src=${each.imgSrc} alt=${index} /></span><span class="box-header">${each.header}</span>`;
    mainContainer.appendChild(eachContainer);
  });
};

const renderHeroPointerContent = () => {
  const container = document.querySelector(".point-content");

  heroPointerContent.map((point, index) => {
    const eachContainer = document.createElement("div");
    eachContainer.classList.add("each-point-content");

    eachContainer.innerHTML = `
            <span><img src="./assets/icons/CheckCircle.png" alt={pointer_icon} /></span>
            <span class="point-header">${point} </span>
        `;
    container.appendChild(eachContainer);
  });
};

const renderSpecifications = () => {
  const tableBody = document.querySelector(".specs-table-body");

  specifications.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("spec-row");

    row.innerHTML = `
      <div class="spec-parameter">${item.parameter}</div>
      <div class="spec-value">${item.value}</div>
    `;

    tableBody.appendChild(row);
  });
};

const renderFeatures = () => {
  const grid = document.querySelector(".features-grid");

  featuresData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    card.innerHTML = `
      <div class="feature-icon">
        <img src="${item.icon}" alt="${item.title}" />
      </div>
      <h3>${item.header}</h3>
      <p>HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.</p>
    `;

    grid.appendChild(card);
  });
};

const renderFAQs = () => {
  const container = document.querySelector(".faq-container");

  faqData.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    faqItem.innerHTML = `
      <div class="faq-question">
        <span>${item.question}</span>
        <button class="faq-toggle" aria-label="Toggle FAQ">
          <img src="./assets/icons/Chevron down.png" alt="chevron_down" class="faq-icon"/>
        </button>
      </div>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    `;

    container.appendChild(faqItem);
  });

  initFAQToggle();
};

const initFAQToggle = () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-toggle");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faq) => faq.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
};

const renderPortfolio = () => {
  const grid = document.querySelector(".portfolio-grid");

  portfolioData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="portfolio-image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <button class="outline-btn">Learn More</button>
    `;

    grid.appendChild(card);
  });
};

const renderResources = () => {
  const container = document.querySelector(".resources-list");

  [
    "HDPE Pipe Installation Manual (PDF)",
    "Maintenance & Inspection Handbook (PDF)",
    "Engineering Specifications Sheet (PDF)",
  ].forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("resource-item");

    row.innerHTML = `
      <span class="resource-title">${item}</span>
      <button class="resource-download">
        <span>Download PDF</span>
        <span><img src="./assets/icons/Download.png" 
             alt="download icon" 
             class="download-icon" /></span>
      </button>
    `;

    container.appendChild(row);
  });
};
