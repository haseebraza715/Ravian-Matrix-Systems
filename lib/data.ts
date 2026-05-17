export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "GIS Analysis", href: "/services" },
    { name: "Remote Sensing", href: "/services" },
    { name: "WebGIS Solutions", href: "/services" },
    { name: "IT & Web Development", href: "/services" },
    { name: "Data & Automation", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
  ]
};

export const coreServices = [
  {
    id: "web-solutions",
    title: "Web Solutions",
    description: "Professional business websites, responsive interfaces, and digital platforms that clearly present your services.",
    tags: ["Business Websites", "Web Platforms", "Maintenance"],
    icon: "globe"
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom business applications, backend systems, and workflow automation tailored to your operational needs.",
    tags: ["Custom Apps", "Dashboards", "API Integration"],
    icon: "code"
  },
  {
    id: "geospatial-intelligence",
    title: "Geospatial Intelligence",
    description: "Spatial data analysis, GIS mapping, and remote sensing for location-based decision support.",
    tags: ["GIS Analysis", "WebGIS", "Remote Sensing"],
    icon: "map"
  },
  {
    id: "digital-growth",
    title: "Digital Growth",
    description: "Improving online visibility through structured marketing, SEO, brand presentation, and creative communication.",
    tags: ["SEO", "Digital Marketing", "Brand Presentation"],
    icon: "trending"
  }
];

export const applicationScope = [
  {
    title: "Environmental & Land Monitoring",
    description: "Continuous tracking of land use, deforestation, and vegetation health to support conservation and sustainable agriculture."
  },
  {
    title: "Infrastructure & Planning",
    description: "Site suitability analysis, network planning, and infrastructure monitoring grounded in precise spatial data."
  },
  {
    title: "Aviation & Spatial Systems",
    description: "Management of aeronautical data, obstacle mapping, and airspace analysis for operational safety and planning."
  },
  {
    title: "Hydrology & Water Resources",
    description: "Watershed modeling, flood risk assessment, and water flow analysis for municipal and regional planning."
  },
  {
    title: "Business GIS & Web Platforms",
    description: "Custom web applications and interactive dashboards that make spatial data accessible to the entire organization."
  },
  {
    title: "Data Automation & Reporting",
    description: "Automated pipelines that ingest disparate data sources, run analysis, and generate operational reports on schedule."
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Understand requirements",
    desc: "We start by defining the operational problem, user needs, and exact output requirements before touching any data."
  },
  {
    num: "02",
    title: "Structure data and scope",
    desc: "Auditing available data sources, designing the schema, and establishing a clear pipeline architecture."
  },
  {
    num: "03",
    title: "Analyze and design",
    desc: "Developing the spatial models, processing algorithms, and designing the user interface or report format."
  },
  {
    num: "04",
    title: "Build and validate",
    desc: "Developing the application or pipeline, followed by rigorous QA against real-world scenarios and edge cases."
  },
  {
    num: "05",
    title: "Deliver and support",
    desc: "Deploying to production, providing necessary training, and maintaining the system for long-term reliability."
  }
];

export const solutions = [
  {
    title: "Land Monitoring Dashboard",
    problem: "Disparate satellite data and manual field reports slow down regional planning.",
    solution: "A unified WebGIS dashboard with automated satellite imagery ingestion.",
    output: "Real-time vegetation indices and alert systems.",
    services: ["Remote Sensing", "WebGIS", "Automation"]
  },
  {
    title: "Hydrological Analysis Workflow",
    problem: "Flood risk assessments take weeks of manual topographical data processing.",
    solution: "An automated spatial pipeline that processes DEMs and runs flow accumulation models.",
    output: "Standardized flood risk maps and volume reports.",
    services: ["GIS Analysis", "Hydro Modeling", "Data & Automation"]
  },
  {
    title: "WebGIS Decision Platform",
    problem: "Executives lack visibility into spatial assets spread across multiple departments.",
    solution: "A centralized, secure mapping portal integrating departmental databases.",
    output: "Interactive map layers with KPI roll-ups.",
    services: ["WebGIS", "IT & Web Development", "Spatial Database"]
  },
  {
    title: "Spatial Database & Automation System",
    problem: "Data duplication and versioning issues cause errors in daily operations.",
    solution: "A centralized PostGIS architecture with automated ETL pipelines.",
    output: "A single source of truth for all spatial assets.",
    services: ["Spatial Database", "Automation", "IT & Web Development"]
  }
];
