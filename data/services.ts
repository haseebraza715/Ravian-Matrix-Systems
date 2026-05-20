import { 
  Globe, Layers, Terminal, Database, Network, IterationCw, Settings,
  AppWindow, Laptop, Cpu, LineChart, Workflow, Zap, Wrench,
  Map, Satellite, Compass, Layout, FileText, Droplet, ShieldAlert,
  TrendingUp, Search, Sparkles, Palette, Share2, Monitor, Megaphone
} from "lucide-react";

export interface ServiceProvideItem {
  title: string;
  description: string;
  includes: string[];
  icon: any;
}

export interface ServiceApproachItem {
  title: string;
  description: string;
}

export interface ServiceHowStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceTool {
  name: string;
  context: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  eyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  problemWeSolve: string; // New field
  deliverables: ServiceDeliverable[]; // New field
  tools: ServiceTool[]; // New field
  useCases: ServiceUseCase[]; // New field
  
  // Legacy fields preserved for complete safety
  providesTitle: string;
  providesItems: ServiceProvideItem[];
  approachTitle: string;
  approachItems: ServiceApproachItem[];
  suitableTitle: string;
  suitableItems: string[];
  howWeWorkTitle: string;
  howWeWorkSteps: ServiceHowStep[];
  ctaTitle: string;
  ctaDescription: string;
  slogan: string;
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    id: "web-development",
    title: "Web Solutions",
    subtitle: "Professional Web Solutions for Modern Businesses",
    description: "We design and develop reliable, scalable, and user-focused web solutions for businesses that need a strong digital presence and efficient online systems.",
    eyebrow: "Web Solutions",
    introTitle: "Built Around Your Business Requirements",
    introParagraphs: [
      "A professional web solution should be clear, functional, secure, and aligned with the way your business works. It should present your services properly, support your operations, and create a smooth experience for your users.",
      "At Ravian Matrix Systems, we develop web solutions with a structured approach. We focus on clean architecture, professional design, responsive interfaces, and reliable functionality. Whether you need a new web presence, a digital platform, a customer-facing system, or an internal web-based solution, we help transform your requirements into a practical and scalable product."
    ],
    problemWeSolve: "Many businesses struggle with rigid template builders that load slowly and fail to adapt to complex custom workflows. We engineer high-performance web systems tailored to your exact operational requirements, ensuring speed, security, and true code ownership.",
    deliverables: [
      {
        title: "Custom Web Platforms & Client Portals",
        description: "Tailored client-facing interfaces, portals, and operational panels built on secure, scalable backends."
      },
      {
        title: "High-Performance Business Web Presences",
        description: "Fast, response-optimized business websites designed to convert visitors and load instantly on mobile."
      },
      {
        title: "API & System Integrations",
        description: "Connecting your web tools to legacy databases, third-party APIs, and automation workflows."
      },
      {
        title: "Long-Term Technical Support & Updates",
        description: "Ongoing technical updates, performance monitoring, and security enhancements."
      }
    ],
    tools: [
      { name: "Next.js & React", context: "For building responsive, lightning-fast user interfaces." },
      { name: "Node.js & FastAPI", context: "For developing stable, secure backend services and API gateways." },
      { name: "PostgreSQL & TimescaleDB", context: "For structured, high-volume data storage and quick queries." },
      { name: "Tailwind CSS", context: "For responsive, bespoke layouts without bloated CSS files." }
    ],
    useCases: [
      {
        title: "Client Portal for Financial Advising",
        description: "A secure dashboard showing real-time investment metrics and encrypted document uploads."
      },
      {
        title: "Operational Dashboard for Logistics",
        description: "Internal fleet coordination board pulling live coordinate positions from API webhooks."
      },
      {
        title: "High-Conversion SaaS Landing Page",
        description: "A custom web presence with sub-second LCP and a modular contact funnel."
      }
    ],
    providesTitle: "What We Provide",
    providesItems: [
      {
        title: "Business Web Presence",
        description: "We create professional web presences that help businesses present their services, company profile, and contact options clearly.",
        includes: ["Company websites", "Service-based websites", "Portfolio and profile websites", "Contact and inquiry flows", "Multi-page business websites"],
        icon: "globe"
      },
      {
        title: "Web Platforms",
        description: "We develop web-based platforms that support business processes, users, data, and digital services.",
        includes: ["Client portals", "Admin systems", "Booking or request systems", "Data-driven platforms", "Business process interfaces"],
        icon: "laptop"
      },
      {
        title: "Frontend Development",
        description: "We build clean and responsive user interfaces that are easy to use across desktop, tablet, and mobile devices.",
        includes: ["Responsive interface development", "User-focused layouts", "Interactive web components", "Cross-device compatibility", "Modern frontend structures"],
        icon: "layers"
      },
      {
        title: "Backend Development",
        description: "We develop backend systems that handle logic, data, users, workflows, and integrations behind digital platforms.",
        includes: ["Server-side development", "Database connectivity", "User and role management", "Business logic implementation", "Secure data handling"],
        icon: "terminal"
      },
      {
        title: "API & System Integration",
        description: "We connect websites and platforms with external systems, services, and data sources.",
        includes: ["API integrations", "Third-party service connections", "Payment or booking system integration", "Data exchange between systems", "Automation between platforms"],
        icon: "network"
      },
      {
        title: "Website Redesign & Improvement",
        description: "We improve existing websites and web systems by enhancing structure, usability, performance, and overall presentation.",
        includes: ["Design improvement", "Structure improvement", "User experience refinement", "Performance optimization", "Content flow improvement"],
        icon: "iteration-cw"
      },
      {
        title: "Maintenance & Technical Support",
        description: "We provide ongoing technical support to keep web systems updated, functional, and reliable.",
        includes: ["Technical updates", "Bug fixing", "Feature improvements", "Performance support", "Ongoing system maintenance"],
        icon: "settings"
      }
    ],
    approachTitle: "Our Development Approach",
    approachItems: [
      {
        title: "Requirement-Based Development",
        description: "We do not force one technology or template. We select the right approach based on your business goals, system requirements, scalability needs, and project complexity."
      },
      {
        title: "Professional Structure",
        description: "We plan each solution with clear pages, features, user flows, data structure, and technical logic before development begins."
      },
      {
        title: "Scalable Implementation",
        description: "Our solutions are built so they can grow later with new features, integrations, services, or application modules."
      },
      {
        title: "User-Focused Design",
        description: "We focus on clarity, usability, and professional presentation so users can understand and interact with your platform easily."
      },
      {
        title: "Reliable Delivery",
        description: "We keep communication clear and delivery structured from the first requirement discussion to final handover."
      }
    ],
    suitableTitle: "Our Web Solutions are suitable for:",
    suitableItems: [
      "Service businesses",
      "Startups",
      "Consulting companies",
      "Technical service providers",
      "Digital platforms",
      "Internal business systems",
      "Customer-facing portals",
      "Data-based web systems"
    ],
    howWeWorkTitle: "How We Work",
    howWeWorkSteps: [
      { number: 1, title: "Requirement Review", description: "We review your business goals, technical requirements, users, and expected outcomes." },
      { number: 2, title: "Solution Structure", description: "We define the web structure, features, user flow, and technical direction." },
      { number: 3, title: "Design & Development", description: "We design and develop the solution according to the agreed scope." },
      { number: 4, title: "Review & Refinement", description: "You review the solution and we make final improvements." },
      { number: 5, title: "Delivery & Support", description: "We deliver the final solution and provide support for updates or further development." }
    ],
    ctaTitle: "Request a Non-Binding Quote",
    ctaDescription: "Tell us what kind of web solution you need. We will review your requirements and respond within 24 hours with a non-binding quote.",
    slogan: "You name IT, We make IT."
  },
  "software-development": {
    id: "software-development",
    title: "Software Development",
    subtitle: "Custom Software Solutions for Business Operations",
    description: "We design and develop custom software solutions that help businesses manage processes, automate workflows, organize data, and improve operational efficiency.",
    eyebrow: "Software Development",
    introTitle: "Built for Your Business Requirements",
    introParagraphs: [
      "Every business works differently. Standard tools are not always enough, especially when your workflows, users, data, or processes require a tailored system.",
      "At Ravian Matrix Systems, we develop software solutions that are structured, scalable, and practical. Our focus is on building systems that solve real business problems, support daily operations, and can grow with your future requirements. We work with a requirement-based approach and select the technical direction according to the project, not according to one fixed technology."
    ],
    problemWeSolve: "Off-the-shelf software covers 70% of standard operations but forces awkward manual workarounds for the 30% that actually sets your business apart. We bridge that gap by building bespoke backends, automated data pipelines, and internal tools that match your exact workflows.",
    deliverables: [
      {
        title: "Bespoke Business & Operational Applications",
        description: "Custom software tools designed around your specific team processes and operational tasks."
      },
      {
        title: "Event-Driven & Server-Side Architectures",
        description: "Reliable, message-broker backed servers that handle heavy data processing without downtime."
      },
      {
        title: "Centralized Database Systems & Dashboards",
        description: "We create systems that store, manage, process, and present structured business data."
      },
      {
        title: "Automated Workflow Pipelines",
        description: "Pipelines that collect, clean, validate, and move business information on schedule."
      }
    ],
    tools: [
      { name: "Python & Go", context: "For high-performance data processing, speed, and clean concurrent backends." },
      { name: "Apache Kafka", context: "For event-driven messaging brokers that scale to millions of messages daily." },
      { name: "Docker & AWS", context: "For containerized environments and secure, redundant cloud hosting." },
      { name: "TimescaleDB / PostgreSQL", context: "For structured relational databases and time-series telemetry data." }
    ],
    useCases: [
      {
        title: "SCADA Telemetry Aggregator",
        description: "Ingesting 1.2M metrics per day from water pressure sensors with sub-50ms query replies."
      },
      {
        title: "Event-Driven Log Sync Pipeline",
        description: "A Go-based broker bridging legacy ERP databases with real-time customer tracking portals."
      },
      {
        title: "Automated CSV Processing Daemon",
        description: "A cron pipeline transforming and deduping legacy vendor files on an AWS scheduler."
      }
    ],
    providesTitle: "What We Provide",
    providesItems: [
      {
        title: "Custom Business Applications",
        description: "We develop custom applications designed around your business processes and operational needs.",
        includes: ["Internal business tools", "Management systems", "Client-facing applications", "Process-based software", "Role-based user systems"],
        icon: "app-window"
      },
      {
        title: "Web-Based Applications",
        description: "We build browser-based software systems that allow users to access business tools and services online.",
        includes: ["Web applications", "Online portals", "Admin panels", "Customer portals", "Business dashboards"],
        icon: "monitor"
      },
      {
        title: "Backend Systems",
        description: "We develop backend systems that handle logic, data, users, workflows, and integrations behind digital platforms.",
        includes: ["Server-side development", "Business logic implementation", "User and access management", "Data handling", "Secure system operations"],
        icon: "cpu"
      },
      {
        title: "Database-Driven Solutions",
        description: "We create systems that store, manage, process, and present structured business data.",
        includes: ["Database design support", "Data management systems", "Search and filtering functions", "Reporting structures", "Structured data workflows"],
        icon: "database"
      },
      {
        title: "Dashboard & Reporting Systems",
        description: "We develop dashboards and reporting interfaces that help businesses monitor performance, review data, and make informed decisions.",
        includes: ["Admin dashboards", "Business reporting panels", "Data visualization interfaces", "Operational monitoring systems", "Custom report views"],
        icon: "line-chart"
      },
      {
        title: "API & System Integration",
        description: "We connect software systems, platforms, and external services so data and processes can work together.",
        includes: ["API development", "Third-party integrations", "Data exchange between systems", "Platform connections", "Automation between services"],
        icon: "network"
      },
      {
        title: "Workflow Automation",
        description: "We develop software-supported workflows that reduce manual work and improve operational efficiency.",
        includes: ["Process automation", "Task management logic", "Notification systems", "Data flow automation", "Repetitive task reduction"],
        icon: "workflow"
      },
      {
        title: "Maintenance & Feature Development",
        description: "We support existing software systems with improvements, new features, fixes, and ongoing technical development.",
        includes: ["Feature extensions", "Bug fixing", "Performance improvements", "System updates", "Long-term technical support"],
        icon: "wrench"
      }
    ],
    approachTitle: "Our Development Approach",
    approachItems: [
      {
        title: "Requirement-Based Planning",
        description: "We first understand your business process, users, data, and goals before defining the technical solution."
      },
      {
        title: "Structured Architecture",
        description: "We plan the system structure, features, user roles, data flow, and integrations before development begins."
      },
      {
        title: "Scalable Development",
        description: "We build software so it can be expanded later with new modules, users, features, or integrations."
      },
      {
        title: "Practical Functionality",
        description: "We focus on features that are useful, reliable, and aligned with your actual workflow."
      },
      {
        title: "Clear Communication",
        description: "We keep the process transparent, from initial requirement discussion to final delivery."
      }
    ],
    suitableTitle: "Our Software Development services are suitable for:",
    suitableItems: [
      "Service businesses",
      "Startups",
      "Consulting companies",
      "Internal business teams",
      "Digital platforms",
      "Job portal systems",
      "Data-driven systems",
      "Admin and reporting systems",
      "Custom workflow solutions",
      "Client and user portals"
    ],
    howWeWorkTitle: "How We Work",
    howWeWorkSteps: [
      { number: 1, title: "Requirement Review", description: "We review your idea, workflow, business process, users, and expected outcome." },
      { number: 2, title: "Solution Structure", description: "We define the application structure, features, user roles, database needs, and technical direction." },
      { number: 3, title: "Design & Development", description: "We design and develop the software according to the agreed scope and requirements." },
      { number: 4, title: "Testing & Refinement", description: "We test the system, review functionality, and refine the solution before delivery." },
      { number: 5, title: "Delivery & Support", description: "We deliver the final system and provide support for updates, improvements, and future extensions." }
    ],
    ctaTitle: "Request a Non-Binding Quote",
    ctaDescription: "Tell us what kind of software solution you need. We will review your requirements and respond within 24 hours with a non-binding quote.",
    slogan: "You name IT, We make IT."
  },
  "geospatial-intelligence": {
    id: "geospatial-intelligence",
    title: "Geospatial Intelligence",
    subtitle: "Spatial Data Solutions for Planning, Monitoring, and Decision-Making",
    description: "We provide geospatial solutions that help businesses, organizations, and project teams understand locations, spatial patterns, environmental conditions, and geographic data.",
    eyebrow: "Geospatial Intelligence",
    introTitle: "Turning Spatial Data into Practical Insight",
    introParagraphs: [
      "Geospatial data is valuable when it is properly analyzed, structured, and presented. We help clients transform raw spatial data into clear outputs that support planning, reporting, monitoring, and operational decisions.",
      "At Ravian Matrix Systems, we combine geospatial analysis with digital systems to deliver practical solutions for complex spatial problems. Our work supports projects in environment, infrastructure, hydrology, urban analysis, risk assessment, and spatial data management."
    ],
    problemWeSolve: "Geospatial data sits scattered across shapefiles, emails, and isolated laptops. We unify your location datasets, remote sensing imagery, and hydrology vectors into a centralized map-first platform designed for quick decision-making.",
    deliverables: [
      {
        title: "Crop monitoring for agritech",
        description: "Automated NDVI time-series monitoring for agricultural parcels using Sentinel-2 and Landsat scenes."
      },
      {
        title: "Utility network ops",
        description: "Fusing telemetry nodes with vector pipelines for regional municipal water and energy networks."
      },
      {
        title: "Urban planning dashboards",
        description: "Interactive multi-layer map overlays showing demographic suitability grids and infrastructure buffers."
      }
    ],
    tools: [
      { name: "PostGIS & DuckDB", context: "For spatial database operations, vector relationships, and rapid analytic summaries." },
      { name: "MapLibre GL & Mapbox", context: "For rendering interactive vector tiles smoothly on web browsers." },
      { name: "Python Rasterio & GDAL", context: "For scripting remote sensing calculations and orthomosaic manipulations." },
      { name: "QGIS", context: "For desktop-level geographic quality assurance, analysis, and map styling." }
    ],
    useCases: [
      {
        title: "Satellite Crop-Monitoring GIS Platform",
        description: "Processed weekly Sentinel-2 imagery covering 400,000 hectares of farmland with custom React map overlays."
      },
      {
        title: "Municipal Water SCADA Telemetry",
        description: "Fusing telemetry flows with water supply geographic network systems for real-time risk alerts."
      },
      {
        title: "Urban Demographic Suitability Mapper",
        description: "Suitability analysis for site selection based on population layers, road grids, and topography datasets."
      }
    ],
    providesTitle: "What We Provide",
    providesItems: [
      {
        title: "GIS Analysis",
        description: "We analyze spatial data to identify patterns, relationships, risks, and opportunities across geographic areas.",
        includes: ["Spatial data analysis", "Multi-layer assessment", "Location-based analysis", "Site suitability support", "GIS-based reporting"],
        icon: "map"
      },
      {
        title: "Remote Sensing",
        description: "We use satellite and earth observation data to monitor land, environment, and spatial change over time.",
        includes: ["Land use and land cover analysis", "Change detection", "Environmental monitoring", "Surface and vegetation analysis", "Satellite-based interpretation"],
        icon: "satellite"
      },
      {
        title: "Mapping & Visualization",
        description: "We create clear and professional map outputs for reports, presentations, planning documents, and decision-making.",
        includes: ["Thematic maps", "Analytical maps", "Report-ready maps", "Multi-layer visualization", "Spatial presentation outputs"],
        icon: "compass"
      },
      {
        title: "WebGIS Solutions",
        description: "We support web-based geospatial systems where users can view, interact with, and understand spatial data digitally.",
        includes: ["Interactive maps", "GIS dashboards", "Web-based spatial platforms", "Geospatial data integration", "Map-based interfaces"],
        icon: "layout"
      },
      {
        title: "Spatial Data Processing",
        description: "We prepare, clean, organize, and structure spatial datasets so they are ready for analysis, reporting, or system integration.",
        includes: ["Data cleaning", "Data transformation", "Data integration", "Dataset structuring", "Quality control and validation"],
        icon: "database"
      },
      {
        title: "Hydrological & Environmental Analysis",
        description: "We support projects related to water systems, terrain, environmental conditions, and spatial risk.",
        includes: ["Watershed analysis", "Flood risk assessment", "Terrain-based analysis", "Environmental impact support", "Hydrological data interpretation"],
        icon: "droplet"
      },
      {
        title: "Disaster Risk & Spatial Assessment",
        description: "We provide spatial analysis for risk identification, impact assessment, and emergency-related planning.",
        includes: ["Risk mapping", "Impact assessment", "Vulnerability analysis", "Spatial risk evaluation", "Emergency planning support"],
        icon: "shield-alert"
      },
      {
        title: "Advanced Spatial Systems",
        description: "We support complex geospatial requirements where spatial data must be structured, connected, or integrated with digital platforms.",
        includes: ["Spatial databases", "Spatial-temporal data handling", "Multi-dimensional spatial models", "Geospatial system support", "Integration with web and software systems"],
        icon: "network"
      }
    ],
    approachTitle: "Our Geospatial Approach",
    approachItems: [
      {
        title: "Requirement-Based Analysis",
        description: "We first understand the project objective, study area, available data, and expected deliverables."
      },
      {
        title: "Structured Data Handling",
        description: "We organize spatial data carefully so the analysis is reliable and the outputs are usable."
      },
      {
        title: "Practical Outputs",
        description: "We focus on results that can be used in planning, reporting, monitoring, or operational decision-making."
      },
      {
        title: "Digital Integration",
        description: "Where required, geospatial outputs can be connected with web platforms, dashboards, or business systems."
      },
      {
        title: "Clear Communication",
        description: "We present complex spatial information in a clear and structured way so it can be understood by technical and non-technical stakeholders."
      }
    ],
    suitableTitle: "Our Geospatial Intelligence services are suitable for:",
    suitableItems: [
      "Environmental projects",
      "Infrastructure and planning projects",
      "Urban and regional analysis",
      "Hydrology and water-related studies",
      "Disaster risk assessment",
      "Research and institutional projects",
      "WebGIS and map-based systems",
      "Location-based business analysis",
      "Spatial data management projects"
    ],
    howWeWorkTitle: "How We Work",
    howWeWorkSteps: [
      { number: 1, title: "Requirement Review", description: "You share the project objective, location, available data, expected outputs, and timeline." },
      { number: 2, title: "Data Review", description: "We review the available spatial data and identify what is needed for the analysis." },
      { number: 3, title: "Analysis & Processing", description: "We process, analyze, and structure the spatial data according to the project scope." },
      { number: 4, title: "Output Preparation", description: "We prepare maps, reports, datasets, dashboards, or other agreed deliverables." },
      { number: 5, title: "Delivery & Support", description: "We deliver the final outputs and provide support for clarification, updates, or further development." }
    ],
    ctaTitle: "Request a Non-Binding Quote",
    ctaDescription: "Tell us about your geospatial requirement, study area, available data, and expected deliverables. We will review your inquiry and respond within 24 hours with a non-binding quote.",
    slogan: "You name IT, We make IT."
  },
  "digital-growth": {
    id: "digital-growth",
    title: "Digital Growth",
    subtitle: "Digital Visibility, Brand Presence, and Creative Communication",
    description: "We support businesses in improving their online presence through structured digital marketing, professional content presentation, visual design, and creative communication.",
    eyebrow: "Digital Growth",
    introTitle: "Building a Stronger Digital Presence",
    introParagraphs: [
      "A professional business needs more than a website. It needs clear messaging, consistent branding, strong visual presentation, and a digital presence that helps customers understand and trust the company.",
      "At Ravian Matrix Systems, we help businesses improve how they present themselves online. Our focus is on clarity, consistency, professional design, and practical digital visibility. Whether you need better service content, visual identity, social media creatives, SEO structure, or marketing material, we help shape your digital presence in a professional and business-focused way."
    ],
    problemWeSolve: "Standard digital agencies deliver cookie-cutter marketing designs that fail to communicate technical expertise. We craft professional visual identities, structured SEO plans, and clear technical brochures that build trust with business operators.",
    deliverables: [
      {
        title: "Professional SEO & Content Architectures",
        description: "Optimizing code architecture and text structure so search engines surface your technical services."
      },
      {
        title: "Consistent Brand & Visual Guidelines",
        description: "Creating professional logos, fonts, colors, and style guides tailored to engineering firms."
      },
      {
        title: "Interactive Marketing Material & Designs",
        description: "Designing clean, data-grounded PDF brochures, flyers, and sales presentation decks."
      },
      {
        title: "High-Conversion Campaigns & Creative Collaterals",
        description: "Branded social media templates and launch campaigns to market new services and platforms."
      }
    ],
    tools: [
      { name: "Google Search Console", context: "For search query analysis and page index tracking." },
      { name: "Figma", context: "For digital interface wireframing and graphic design layouts." },
      { name: "Next.js Metadata API", context: "For technical page optimization, semantic HTML, and structured schemas." },
      { name: "Adobe Illustrator", context: "For print-ready vector brochures, brand marks, and technical illustrations." }
    ],
    useCases: [
      {
        title: "B2B Technical Brochure Redesign",
        description: "Consolidating software feature lists into a clean, 4-page PDF print brochure for client handovers."
      },
      {
        title: "Local SEO Audit & Schema Ingestion",
        description: "Boosting local search rankings for a Munich engineering firm via JSON-LD schemas."
      },
      {
        title: "Pitch Deck for Tech Startup",
        description: "Structuring slide layouts and system diagrams for a Series-A telemetry platform presentation."
      }
    ],
    providesTitle: "What We Provide",
    providesItems: [
      {
        title: "Digital Marketing Support",
        description: "We help businesses improve their online visibility and present their services more effectively across digital channels.",
        includes: ["Digital presence improvement", "Service presentation support", "Online visibility planning", "Content direction", "Campaign support"],
        icon: "megaphone"
      },
      {
        title: "SEO & Content Structure",
        description: "We structure website content so visitors and search engines can better understand your services.",
        includes: ["Website content improvement", "Service page structuring", "Page headings and content flow", "Local business content support", "Search-friendly content planning"],
        icon: "search"
      },
      {
        title: "Brand Presentation",
        description: "We help businesses create a clear and consistent professional identity across digital and business materials.",
        includes: ["Brand direction", "Visual consistency", "Business profile presentation", "Service identity", "Professional communication style"],
        icon: "sparkles"
      },
      {
        title: "Graphic Design",
        description: "We create visual materials that support your business communication and make your brand look professional.",
        includes: ["Business graphics", "Service brochures", "Company profiles", "Flyers and posters", "Digital banners", "Presentation material"],
        icon: "palette"
      },
      {
        title: "Social Media Creatives",
        description: "We design professional visual content for social media platforms and digital communication.",
        includes: ["Social media post designs", "Business announcement graphics", "Promotional creatives", "Branded templates", "Campaign visuals"],
        icon: "share2"
      },
      {
        title: "Marketing Material Design",
        description: "We create structured business and marketing materials for both digital and print use.",
        includes: ["Service documents", "Digital brochures", "Business cards", "Presentation decks", "Promotional material", "Company information sheets"],
        icon: "file-text"
      },
      {
        title: "UI/UX Design Support",
        description: "We support websites and applications with clean, user-focused interface design.",
        includes: ["Website interface design", "Application screen design", "User flow improvement", "Layout refinement", "Visual structure improvement"],
        icon: "monitor"
      },
      {
        title: "Digital Campaign Support",
        description: "We support businesses with campaign material for service launches, offers, promotions, and business communication.",
        includes: ["Campaign concept support", "Promotional content structure", "Campaign graphics", "Call-to-action improvement", "Digital launch material"],
        icon: "zap"
      }
    ],
    approachTitle: "Our Digital Growth Approach",
    approachItems: [
      {
        title: "Clear Communication",
        description: "We help structure your message so clients can quickly understand what you offer and why it matters."
      },
      {
        title: "Professional Design",
        description: "We create clean and business-appropriate visuals that support trust and brand consistency."
      },
      {
        title: "Practical Marketing Support",
        description: "We focus on realistic marketing actions that support your business goals without unnecessary complexity."
      },
      {
        title: "Consistent Brand Presence",
        description: "We help keep your website, social media, documents, and business materials visually aligned."
      },
      {
        title: "Business-Focused Delivery",
        description: "Every design or marketing output should support a clear purpose: visibility, trust, communication, or conversion."
      }
    ],
    suitableTitle: "Our Digital Growth services are suitable for:",
    suitableItems: [
      "Startups",
      "Service businesses",
      "Consulting companies",
      "Local businesses",
      "Technical service providers",
      "Online platforms",
      "Personal brands",
      "Small and medium-sized companies",
      "Businesses improving their digital presence"
    ],
    howWeWorkTitle: "How We Work",
    howWeWorkSteps: [
      { number: 1, title: "Requirement Review", description: "You share your business goals, target audience, current digital presence, and required materials." },
      { number: 2, title: "Direction & Structure", description: "We define the right content structure, design direction, and communication approach." },
      { number: 3, title: "Design & Development", description: "We create the required digital, marketing, or graphic materials according to the agreed scope." },
      { number: 4, title: "Review & Refinement", description: "You review the work and we make final improvements." },
      { number: 5, title: "Delivery & Support", description: "We deliver the final material and support further updates or improvements if required." }
    ],
    ctaTitle: "Request a Non-Binding Quote",
    ctaDescription: "Tell us what you need to improve, design, promote, or communicate. We will review your inquiry and respond within 24 hours with a non-binding quote.",
    slogan: "You name IT, We make IT."
  }
};
