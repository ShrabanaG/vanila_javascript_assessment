/**
 * Main JavaScript file for the HDPE Pipes Landing Page
 *
 * Features implemented:
 * - Sticky Header
 * - Image Carousel with Thumbnails
 * - Dynamic Content Rendering
 * - FAQ Accordion
 * - Modal Popup Form
 * - Responsive Navigation Menu
 */

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
  renderApplications();
  initApplicationsCarousel();
  initProcessSection();
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

const renderApplications = () => {
  const track = document.querySelector(".carousel-track");

  [
    { imgSrc: "./assets/fishing_image_1.webp" },
    { imgSrc: "./assets/fishing_image_2.webp" },
    { imgSrc: "./assets/fishing_image_3.webp" },
    { imgSrc: "./assets/fishing_image_4.webp" },
    { imgSrc: "./assets/fishing_image_5.webp" },
    { imgSrc: "./assets/fishing_image_6.webp" },
  ].forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("application-card");

    card.innerHTML = `
      <div><img src="${item.imgSrc}" alt="${index}" /></div>
      <div class="card-overlay">
        <h3>Fishnet Manufacturing</h3>
        <p>High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.</p>
      </div>
    `;

    track.appendChild(card);
  });
};

const initApplicationsCarousel = () => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!track) return;

  let currentIndex = 0;

  const getCardsPerView = () => {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 1024) return 2;
    return 3;
  };

  const updateCarousel = () => {
    const cards = document.querySelectorAll(".application-card");

    if (!cards.length) return;

    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;
    const offset = currentIndex * cardWidth;

    track.style.transform = `translateX(-${offset}px)`;
  };

  nextBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".application-card");
    const cardsPerView = getCardsPerView();

    if (currentIndex < cards.length - cardsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    currentIndex = 0;
    updateCarousel();
  });

  updateCarousel();
};

const initProcessSection = () => {
  const processSteps = [
    {
      title: "Raw Material",
      heading: "High-Grade Raw Material Selection",
      desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
      points: ["PE100 grade material", "Optimal molecular weight distribution"],
      image: "./assets/fishing_image_1.webp",
    },
    {
      title: "Extrusion",
      heading: "Advanced Pipe Extrusion",
      desc: "Modern extrusion lines ensure consistent pipe wall thickness and dimensional accuracy.",
      points: ["High precision die head", "Stable melt flow"],
      image: "./assets/fishing_image_2.webp",
    },
    {
      title: "Cooling",
      heading: "Controlled Cooling",
      desc: "Cooling tanks stabilize the pipe structure and ensure dimensional stability.",
      points: ["Uniform cooling", "Optimized crystallization"],
      image: "./assets/fishing_image_3.webp",
    },
    {
      title: "Sizing",
      heading: "Precise Pipe Sizing",
      desc: "Vacuum sizing tanks ensure the pipe maintains exact dimensions.",
      points: ["Accurate pipe diameter", "Smooth surface finish"],
      image: "./assets/fishing_image_4.webp",
    },
    {
      title: "Quality Control",
      heading: "Rigorous Quality Testing",
      desc: "Each pipe undergoes strict quality testing before dispatch.",
      points: ["Pressure testing", "Dimensional inspection"],
      image: "./assets/fishing_image_5.webp",
    },
    {
      title: "Marking",
      heading: "Pipe Identification Marking",
      desc: "Automated marking systems label each pipe with traceable information.",
      points: ["Product traceability", "Standard compliance"],
      image: "./assets/fishing_image_6.webp",
    },
    {
      title: "Cutting",
      heading: "Precision Pipe Cutting",
      desc: "High-speed cutters ensure accurate pipe lengths.",
      points: ["Automated cutting", "Minimal waste"],
      image: "./assets/fishing_image_7.webp",
    },
    {
      title: "Packaging",
      heading: "Secure Packaging",
      desc: "Pipes are bundled and packaged for safe transport.",
      points: ["Protective wrapping", "Transport ready"],
      image: "./assets/fishing_image_1.webp",
    },
  ];

  const stepsContainer = document.querySelector(".process-steps");
  const textContainer = document.querySelector(".process-text");
  const imageContainer = document.querySelector(".process-image");
  const prevBtn = document.querySelector(".process-prev");
  const nextBtn = document.querySelector(".process-next");
  const indicator = document.querySelector(".process-indicator");

  let currentStep = 0;

  const renderSteps = () => {
    stepsContainer.innerHTML = "";

    processSteps.forEach((step, index) => {
      const btn = document.createElement("button");
      btn.classList.add("process-step");

      if (index === currentStep) {
        btn.classList.add("active");
      }

      btn.textContent = step.title;

      btn.addEventListener("click", () => {
        currentStep = index;
        updateProcess();
      });

      stepsContainer.appendChild(btn);
    });
  };

  const updateProcess = () => {
    const step = processSteps[currentStep];

    textContainer.innerHTML = `
      <h3>${step.heading}</h3>
      <p>${step.desc}</p>
      <ul>
        ${step.points.map((point) => `<li><span><img src="./assets/icons/CheckCircle.png" alt="bullet-icon" /></span><span>${point}</span></li>`).join("")}
      </ul>
    `;

    imageContainer.innerHTML = `
      <img src="${step.image}" alt="${step.title}" />
    `;

    renderSteps();
    updateIndicator();
  };

  const updateIndicator = () => {
    if (!indicator) return;

    indicator.textContent = `Step - ${currentStep + 1} / ${processSteps.length}`;
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateProcess();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep < processSteps.length - 1) {
        currentStep++;
        updateProcess();
      }
    });
  }

  renderSteps();
  updateProcess();
};

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./assets/fishing_image_1.webp",
    "./assets/fishing_image_2.webp",
    "./assets/fishing_image_3.webp",
    "./assets/fishing_image_4.webp",
    "./assets/fishing_image_5.webp",
  ];

  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.querySelector(".carousel-thumbnails");

  const prevBtn = document.querySelector(".hero-carousel-btn.prev");
  const nextBtn = document.querySelector(".hero-carousel-btn.next");

  let currentIndex = 0;

  const renderThumbnails = () => {
    thumbnailsContainer.innerHTML = "";

    images.forEach((img, index) => {
      const thumb = document.createElement("div");
      thumb.classList.add("thumbnail");

      if (index === currentIndex) {
        thumb.classList.add("active");
      }

      thumb.innerHTML = `<img src="${img}" alt="thumbnail">`;

      thumb.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });

      thumbnailsContainer.appendChild(thumb);
    });
  };

  const updateCarousel = () => {
    mainImage.src = images[currentIndex];

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;

    const thumbs = document.querySelectorAll(".thumbnail");

    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
  };

  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  const initCarousel = () => {
    mainImage.src = images[currentIndex];

    renderThumbnails();

    updateCarousel();
  };

  initCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const closeBtn = document.getElementById("closeMenuBtn");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".features-btn-wrapper button");
  const modal = document.getElementById("quoteModal");
  const closeBtn = document.querySelector(".close-modal");

  const submitBtn = document.getElementById("submitQuote");

  const fullName = document.getElementById("fullName");
  const companyName = document.getElementById("companyName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const inputs = [fullName, companyName, email, phone];

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const allFilled = inputs.every((i) => i.value.trim() !== "");

      submitBtn.disabled = !allFilled;
    });
  });

  submitBtn.addEventListener("click", () => {
    const data = `
Full Name: ${fullName.value}
Company: ${companyName.value}
Email: ${email.value}
Phone: ${phone.value}
`;

    alert(data);

    modal.classList.remove("active");

    inputs.forEach((i) => (i.value = ""));
    submitBtn.disabled = true;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".specs-btn-wrapper .outline-btn");
  const modal = document.getElementById("downloadBrochureModal");
  const closeBtn = document.querySelector(".close-download-modal");

  const submitBtn = document.getElementById("downloadBrochure");

  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  email.addEventListener("input", () => {
    submitBtn.disabled = email.value.trim() === "";
  });

  submitBtn.addEventListener("click", () => {
    const data = `
Email: ${email.value}
Phone: ${phone.value || "Not Provided"}
`;

    alert(data);

    modal.classList.remove("active");

    email.value = "";
    phone.value = "";

    submitBtn.disabled = true;
  });
});
