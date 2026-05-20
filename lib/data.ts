export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/work" },
    { name: "Contact", href: "/contact" },
    { name: "Request a Quote", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Geospatial Intelligence", href: "/services/geospatial-intelligence" },
    { name: "Digital Growth", href: "/services/digital-growth" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ]
};

export const coreServices = [
  {
    id: "web-development",
    title: "Web Solutions",
    description: "We design and develop professional web solutions that help businesses present their services clearly, build trust, and create a smooth user experience.",
    tags: ["Business websites", "Web platforms", "Responsive interfaces", "Website redesign", "Web system improvements", "Maintenance and support"],
    icon: "globe"
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "We develop custom software solutions that support business operations, data management, workflows, users, and digital processes.",
    tags: ["Custom business applications", "Web-based applications", "Backend systems", "Dashboards and portals", "API and system integrations", "Workflow automation"],
    icon: "code"
  },
  {
    id: "geospatial-intelligence",
    title: "Geospatial Intelligence",
    description: "We provide geospatial services for projects that require spatial analysis, GIS, remote sensing, mapping, environmental assessment, and location-based decision support.",
    tags: ["GIS analysis", "Remote sensing", "Mapping and visualization", "WebGIS solutions", "Spatial data processing", "Hydrology and environmental analysis"],
    icon: "map"
  },
  {
    id: "digital-growth",
    title: "Digital Growth",
    description: "We support businesses in improving their digital presence through marketing support, visual design, content structure, branding, and creative communication.",
    tags: ["Digital marketing support", "SEO and content structure", "Graphic design", "Brand presentation", "Social media creatives", "Marketing material design"],
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
    title: "Requirement Review",
    desc: "You share your project idea, business need, existing system, or required service."
  },
  {
    num: "02",
    title: "Solution Planning",
    desc: "We review your requirements and define the right structure, scope, and technical direction."
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "We design, develop, analyze, or create the required solution based on the agreed scope."
  },
  {
    num: "04",
    title: "Review & Refinement",
    desc: "You review the work and we refine the solution where required."
  },
  {
    num: "05",
    title: "Delivery & Support",
    desc: "We deliver the final output and provide further support for updates, improvements, or future extensions."
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
