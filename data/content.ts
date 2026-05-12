import { Monitor, Map as MapIcon, Aperture, BarChart3, Workflow, LayoutDashboard } from "lucide-react";

export const siteConfig = {
  name: "Signal Grid",
  tagline: "Geospatial × IT Studio · Est. 2019",
  headline: "Digital systems for businesses that depend on data, maps, and automation.",
  description: "We build Web GIS platforms, automated workflows, and custom dashboards that turn fragmented data into clear decisions.",
  metrics: [
    { label: "Projects shipped", value: "62 across 14 countries" },
    { label: "Disciplines", value: "GIS · Remote Sensing · IT" },
    { label: "Avg. delivery", value: "8 weeks to production" }
  ]
};

export const serviceTags = [
  "Web Development",
  "Web GIS",
  "Remote Sensing",
  "Spatial Analysis",
  "Dashboards",
  "Business Automation",
  "Custom IT",
  "Data Engineering",
  "Integrations"
];

export const problems = [
  {
    num: "01",
    title: "Data lives in twelve different places",
    desc: "Shapefiles on a laptop. CSVs in someone's inbox. A drone folder no one named. The \"single source of truth\" is a Slack thread.",
    tag: "Scattered"
  },
  {
    num: "02",
    title: "Manual workflows quietly burn weeks",
    desc: "Reformat. Re-project. Email. Repeat. The same report is rebuilt every quarter by hand because nothing talks to anything else.",
    tag: "Repetitive"
  },
  {
    num: "03",
    title: "Maps and dashboards live in different worlds",
    desc: "The GIS team has a map. The ops team has a spreadsheet. Leadership wants one view — and waits two weeks to get it.",
    tag: "Disconnected"
  },
  {
    num: "04",
    title: "Off-the-shelf tools don't fit the work",
    desc: "Generic SaaS covers 70% of your workflow and forces awkward workarounds for the 30% that actually matters.",
    tag: "Misfit"
  }
];

export const services = [
  {
    num: "01 / Web",
    icon: Monitor,
    title: "Web Development",
    desc: "Marketing sites, web apps, and internal tools — built with modern stacks, designed for clarity, deployed to last.",
    tags: ["Next.js", "React", "Node", "Postgres"]
  },
  {
    num: "02 / GIS",
    icon: MapIcon,
    title: "Web GIS Applications",
    desc: "Map-first platforms with editable layers, custom basemaps, secured roles, and tile pipelines that actually scale.",
    tags: ["Mapbox", "MapLibre", "PostGIS", "GeoServer"]
  },
  {
    num: "03 / Remote Sensing",
    icon: Aperture,
    title: "Remote Sensing Workflows",
    desc: "NDVI, change detection, classification, drone orthomosaics — automated, reproducible, and tied back to your operations.",
    tags: ["Sentinel-2", "GEE", "QGIS", "Python"]
  },
  {
    num: "04 / Spatial Analysis",
    icon: BarChart3,
    title: "Spatial Data Analysis",
    desc: "From site-suitability scoring to network and hotspot analysis — answers grounded in geography, not gut feel.",
    tags: ["GeoPandas", "Turf.js", "R", "DuckDB"]
  },
  {
    num: "05 / Automation",
    icon: Workflow,
    title: "Business Automation",
    desc: "Replace the spreadsheet relay race with pipelines that ingest, transform, alert, and report — quietly, on schedule.",
    tags: ["Airflow", "n8n", "Zapier", "API"]
  },
  {
    num: "06 / Dashboards",
    icon: LayoutDashboard,
    title: "Dashboards & Data Viz",
    desc: "Operational dashboards that show what changed, why it matters, and what to do next — for the team and the board.",
    tags: ["Metabase", "Superset", "D3", "Custom"]
  }
];

export const pipelineSteps = [
  {
    stage: "01 · Ingest",
    title: "Collect",
    desc: "Pull from satellites, drones, sensors, CSVs, third-party APIs and legacy systems.",
    items: ["Sentinel · Landsat", "UAV / orthomosaics", "IoT · Webhooks", "Excel · CSV · DB"]
  },
  {
    stage: "02 · Process",
    title: "Clean & model",
    desc: "Reproject, dedupe, validate. One canonical schema, audited and versioned.",
    items: ["ETL pipelines", "PostGIS · DuckDB", "QA validators", "Lineage tracking"]
  },
  {
    stage: "03 · Analyze",
    title: "Derive signal",
    desc: "Spatial joins, change detection, scoring, classification, forecasts.",
    items: ["NDVI · LST", "Suitability scoring", "Hotspot analysis", "ML models"]
  },
  {
    stage: "04 · Surface",
    title: "Show clearly",
    desc: "Maps, dashboards, alerts, reports — fit to the role of the person reading.",
    items: ["Web GIS UI", "Live dashboards", "PDF · email digests", "Slack · Teams"]
  },
  {
    stage: "05 · Decide",
    title: "Act",
    desc: "Trigger workflows, approvals, field tasks — the loop closes inside the same system.",
    items: ["Triggers · alerts", "Approvals", "Field assignments", "Audit logs"]
  }
];

export const caseStudies = [
  {
    category: "Web GIS",
    sector: "Agriculture · 2025",
    title: "A national crop-monitoring platform replacing 14 standalone spreadsheets.",
    desc: "We built a multi-tenant Web GIS with weekly Sentinel-2 ingestion, parcel-level NDVI time series, and field-officer mobile workflows — replacing a chain of spreadsheets and shared drives.",
    stats: [
      { label: "Parcels tracked", value: "18,400" },
      { label: "Manual hours / wk saved", value: "142" },
      { label: "Time to alert", value: "2 hours" }
    ],
    visualType: "map"
  },
  {
    category: "Dashboards",
    sector: "Utilities · 2025",
    title: "An ops dashboard that cut incident response from 6 hours to 18 minutes.",
    desc: "Real-time SCADA + GIS fusion for a regional water utility. Anomalies on the network now surface on a single screen with field-crew dispatch built in.",
    stats: [
      { label: "Response time", value: "−95%" },
      { label: "Sensors fused", value: "2,140" },
      { label: "Dashboards in use", value: "9 teams" }
    ],
    visualType: "dashboard"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Understand",
    desc: "We map your current data flows, identify the bottlenecks, and define the exact problem we are solving. No code is written yet.",
    duration: "1-2 Weeks"
  },
  {
    num: "02",
    title: "Design",
    desc: "We architect the database schema, pipeline logic, and UI mockups. You see exactly how the system will work before we build it.",
    duration: "2-3 Weeks"
  },
  {
    num: "03",
    title: "Build",
    desc: "Our engineers build the backend pipelines, GIS layers, and frontend interfaces in parallel. We share weekly staging updates.",
    duration: "4-8 Weeks"
  },
  {
    num: "04",
    title: "Deliver",
    desc: "We deploy to your infrastructure or host it securely. We train your team, hand over the code, and offer ongoing support.",
    duration: "1 Week"
  }
];

export const techStack = [
  {
    group: "Frontend",
    items: [
      { name: "React", type: "Library" },
      { name: "Next.js", type: "Framework" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "TypeScript", type: "Language" }
    ]
  },
  {
    group: "Backend",
    items: [
      { name: "Python", type: "Language" },
      { name: "FastAPI", type: "Framework" },
      { name: "Node.js", type: "Runtime" },
      { name: "PostgreSQL", type: "Database" }
    ]
  },
  {
    group: "GIS & Remote Sensing",
    items: [
      { name: "PostGIS", type: "Database" },
      { name: "QGIS", type: "Desktop" },
      { name: "Mapbox / MapLibre", type: "Web" },
      { name: "Google Earth Engine", type: "Cloud" }
    ]
  },
  {
    group: "Data",
    items: [
      { name: "Pandas / GeoPandas", type: "Library" },
      { name: "DuckDB", type: "Database" },
      { name: "Airflow", type: "Orchestration" },
      { name: "Metabase", type: "BI" }
    ]
  },
  {
    group: "Deployment",
    items: [
      { name: "Docker", type: "Container" },
      { name: "GitHub Actions", type: "CI/CD" },
      { name: "AWS / GCP", type: "Cloud" },
      { name: "Vercel", type: "Hosting" }
    ]
  }
];
