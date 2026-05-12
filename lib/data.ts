export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
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
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ]
};

export const coreServices = [
  {
    id: "gis-analysis",
    title: "GIS Analysis",
    description: "Spatial data analysis grounded in geography, from site-suitability scoring to network and hotspot analysis.",
    tags: ["GeoPandas", "Turf.js", "Spatial Joins", "Analysis"],
    icon: "layers"
  },
  {
    id: "remote-sensing",
    title: "Remote Sensing",
    description: "Automated remote sensing workflows including NDVI, change detection, and drone orthomosaics.",
    tags: ["Sentinel-2", "GEE", "Change Detection", "UAV"],
    icon: "radar"
  },
  {
    id: "hydro-modeling",
    title: "Hydrological Modeling",
    description: "Advanced modeling of watersheds, flood risks, and water resources using precise topographical data.",
    tags: ["Watersheds", "Flood Risk", "HEC-RAS"],
    icon: "water"
  },
  {
    id: "env-monitoring",
    title: "Environmental Monitoring",
    description: "Tracking land use, vegetation health, and ecological changes through continuous geospatial analysis.",
    tags: ["Land Use", "Ecology", "Time-series"],
    icon: "leaf"
  },
  {
    id: "aviation",
    title: "Aviation Spatial Systems",
    description: "Specialized mapping and spatial data infrastructure for airspace management and aviation planning.",
    tags: ["Airspace", "Obstacles", "Aero Data"],
    icon: "plane"
  },
  {
    id: "spatial-db",
    title: "Spatial Database Structuring",
    description: "Design and deployment of robust, scalable databases tuned specifically for spatial data and queries.",
    tags: ["PostGIS", "DuckDB", "Architecture"],
    icon: "database"
  },
  {
    id: "webgis",
    title: "WebGIS Solutions",
    description: "Map-first platforms with editable layers, custom basemaps, and secured roles.",
    tags: ["Mapbox", "MapLibre", "Dashboards"],
    icon: "map"
  },
  {
    id: "it-web",
    title: "IT & Web Development",
    description: "Modern websites, web apps, and internal tools built for clarity and deployed to last.",
    tags: ["Next.js", "React", "Node"],
    icon: "code"
  },
  {
    id: "automation",
    title: "Data & Automation",
    description: "Replacing manual tasks with pipelines that ingest, transform, alert, and report on schedule.",
    tags: ["Pipelines", "ETL", "Airflow"],
    icon: "workflow"
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
