// Mock data for Junctioncraft Pvt. Ltd. — Green Energy EPC
// NOTE: FRONTEND-ONLY mock data. No backend is wired yet.

export const COMPANY = {
  name: "Junctioncraft",
  legal: "Junctioncraft Pvt. Ltd.",
  short: "JCPL",
  tagline: "Green Energy EPC",
  since: "2021",
  email: "jcpl@junctioncraft.in",
  phone: "+91 74113 07097",
  phoneRaw: "917411307097",
  location: "Bengaluru, Karnataka, India",
  logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/lhlbkh0q_jcpl.webp",
  whatsapp:
    "https://wa.me/917411307097?text=Hello%20Junctioncraft%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

export const HERO = {
  badge: "Green Energy EPC · Est. 2021",
  titleLead: "Powering India's",
  titleAccent: "Green Tomorrow.",
  description:
    "Green-energy EPC for transmission lines, substations up to 110kV, solar evacuation and wind erection — engineered, manufactured and delivered by one accountable team.",
  note: "Govt.-approved Class-1 Electrical Contractor, Karnataka",
};

export const STATS = [
  { value: "188+", label: "Km of lines executed" },
  { value: "220kV", label: "Highest line voltage executed" },
  { value: "Class-1", label: "Electrical Contractor, Karnataka" },
  { value: "2021", label: "Incorporated, ROC Bangalore" },
];

export const MARQUEE = [
  "Substations",
  "Highway Lighting",
  "Class-1 Contractor",
  "Transmission Lines",
  "Solar EPC",
  "Wind Erection",
];

export const ABOUT = {
  eyebrow: "Who We Are",
  heading: "A trusted partner in power transmission & distribution.",
  body: "Junctioncraft Private Limited was incorporated on March 12, 2021 and is registered with the Registrar of Companies, Bangalore. We specialize in manufacturing, supplying, and executing electrical infrastructure for power utilities, government departments, and renewable developers.",
  pillars: [
    {
      icon: "Workflow",
      title: "End-to-End EPC",
      text: "From design and supply to installation and commissioning — one team, one responsibility.",
    },
    {
      icon: "ShieldCheck",
      title: "Compliance & Safety",
      text: "Class-1 contractor discipline with strict adherence to national standards on every site.",
    },
    {
      icon: "Leaf",
      title: "Green Energy Focus",
      text: "Transmission, solar evacuation and wind erection that feed India's clean energy grid.",
    },
  ],
};

export const PRODUCTS = [
  {
    slug: "lattice-towers",
    name: "Lattice Towers",
    desc: "Precision-engineered lattice towers for high-voltage transmission and telecommunication networks.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    long: "Our lattice towers are hot-dip galvanised steel structures engineered for high-voltage transmission and telecom networks. Each tower is designed to withstand extreme wind and ice loads while keeping conductor clearances well within statutory limits — ready for decades of dependable service.",
    features: [
      "Hot-dip galvanised for 25+ year service life",
      "Type-tested designs for 66kV to 220kV",
      "Bolted modular assembly for fast erection",
      "Custom heights and body extensions",
    ],
    specs: [
      { k: "Voltage range", v: "66kV – 220kV" },
      { k: "Material", v: "Galvanised MS angle / steel" },
      { k: "Tower types", v: "Suspension, tension, angle, dead-end" },
      { k: "Finish", v: "Hot-dip galvanised (IS 2629)" },
    ],
    applications: ["HV transmission lines", "Telecom towers", "River / valley crossings"],
  },
  {
    slug: "insulators",
    name: "Insulators",
    desc: "Disc, pin and polymer insulators engineered for 11kV to 110kV networks.",
    image:
      "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "We supply disc, pin and polymer insulators rated for 11kV to 110kV networks. Each unit is tested for electrical and mechanical strength to ensure reliable insulation under pollution, humidity and temperature stress.",
    features: [
      "Porcelain and polymer variants",
      "High mechanical and electrical strength",
      "Anti-fog / anti-pollution profiles",
      "Batch-tested to IS / IEC standards",
    ],
    specs: [
      { k: "Voltage", v: "11kV – 110kV" },
      { k: "Types", v: "Disc, pin, polymer, post" },
      { k: "Standard", v: "IS 731 / IEC 60383" },
    ],
    applications: ["Overhead lines", "Substation bus support", "Distribution networks"],
  },
  {
    slug: "conductors-cables",
    name: "Conductors & Cables",
    desc: "ACSR, AAAC and AAC conductors with LT/HT power and control cabling.",
    image:
      "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=2000&q=80",
    long: "ACSR, AAAC and AAC conductors along with LT/HT power and control cables for every stage of the grid. Sourced from reputed mills and tested for conductivity and tensile strength before dispatch.",
    features: [
      "ACSR / AAAC / AAC conductors",
      "LT and HT XLPE power cables",
      "Control and instrumentation cables",
      "Conductivity and tensile tested",
    ],
    specs: [
      { k: "Conductor", v: "ACSR, AAAC, AAC" },
      { k: "Cable", v: "LT/HT XLPE, control" },
      { k: "Voltage", v: "Up to 33kV cable" },
    ],
    applications: ["Transmission stringing", "Distribution feeders", "Substation cabling"],
  },
  {
    slug: "transformers",
    name: "Transformers",
    desc: "Distribution and power transformers supplied, installed and commissioned.",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "Distribution and power transformers supplied, installed and commissioned by our team — from 25 kVA distribution units to power transformers for utility substations, complete with on-site testing.",
    features: [
      "Distribution and power transformers",
      "Supply, install and commission",
      "Oil-immersed and dry-type options",
      "On-site pre-charge testing",
    ],
    specs: [
      { k: "Rating", v: "25 kVA – large power" },
      { k: "Type", v: "Oil-immersed / dry-type" },
      { k: "Standard", v: "IS 1180 / IS 2026" },
    ],
    applications: ["Substations", "Industrial feeders", "Solar pooling stations"],
  },
  {
    slug: "poles",
    name: "Poles",
    desc: "PCC, PSC and steel tubular poles for distribution and lighting networks.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    long: "PCC, PSC and steel tubular poles for distribution and lighting networks — cast and finished to utility standards for long, maintenance-free service life.",
    features: [
      "PCC, PSC and steel tubular",
      "High load-bearing capacity",
      "Corrosion-resistant finish",
      "Standard and custom lengths",
    ],
    specs: [
      { k: "Types", v: "PCC, PSC, steel tubular" },
      { k: "Use", v: "LT/HT distribution, lighting" },
      { k: "Standard", v: "IS 1678 / IS 785" },
    ],
    applications: ["Distribution lines", "Street & highway lighting", "Rural electrification"],
  },
  {
    slug: "accessories-hardware",
    name: "Accessories & Hardware",
    desc: "Line hardware, clamps, connectors, earthing and protection accessories.",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "A complete range of line hardware — clamps, connectors, earthing sets and protection accessories — engineered and galvanised to keep networks safe and reliable in every environment.",
    features: [
      "Clamps and connectors",
      "Earthing and grounding sets",
      "Protection accessories",
      "Hot-dip galvanised hardware",
    ],
    specs: [
      { k: "Range", v: "Clamps, connectors, earthing" },
      { k: "Finish", v: "Hot-dip galvanised" },
      { k: "Standard", v: "IS 2486" },
    ],
    applications: ["Line hardware", "Substation earthing", "Fault protection"],
  },
];

export const SERVICES = [
  {
    no: "01",
    slug: "substations",
    icon: "Building2",
    title: "Substations",
    desc: "Design, installation and commissioning of 11kV, 33kV and 110kV substations.",
    long: "Turnkey design, installation and commissioning of 11kV, 33kV and 110kV substations. From civil foundations and structure erection to equipment installation, protection systems and final energisation — handled by a single accountable team.",
    scope: [
      "11kV, 33kV and 110kV substations",
      "Bus, breaker and isolator installation",
      "Protection and control panels",
      "Earthing and lightning protection",
    ],
    process: ["Survey & design", "Civil & structural works", "Equipment erection", "Testing & energisation"],
    deliverables: ["Commissioned substation", "Test reports & drawings", "Utility compliance sign-off"],
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    no: "02",
    slug: "electrical-line-works",
    icon: "Cable",
    title: "Electrical Line Works",
    desc: "Installation, strengthening and upgradation of 11kV and 33kV overhead lines.",
    long: "Installation, strengthening and upgradation of 11kV and 33kV overhead lines — including reconductoring, pole and tower erection, and conductor stringing executed within planned shutdown windows to minimise downtime.",
    scope: [
      "11kV and 33kV overhead lines",
      "Reconductoring and strengthening",
      "Pole and tower erection",
      "Conductor stringing and sagging",
    ],
    process: ["Route survey", "Foundation & erection", "Stringing & sagging", "Testing & charging"],
    deliverables: ["Charged line", "As-built drawings", "Shutdown compliance"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "03",
    slug: "solar-epc",
    icon: "Sun",
    title: "Solar EPC & Evacuation",
    desc: "Solar plant electrical works and 33kV/11kV grid evacuation infrastructure.",
    long: "Solar plant electrical balance-of-plant and 33kV/11kV grid evacuation infrastructure — pooling substations, evacuation lines and switching equipment for safe, reliable integration of solar energy into the grid.",
    scope: [
      "Solar plant electrical BOP",
      "33kV / 11kV evacuation lines",
      "Pooling substations",
      "Switching and metering",
    ],
    process: ["Design & engineering", "Supply & erection", "Cabling & termination", "Grid synchronisation"],
    deliverables: ["Evacuation infrastructure", "Grid sync sign-off", "Commissioning reports"],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "04",
    slug: "wind-power-erection",
    icon: "Wind",
    title: "Wind Power Erection",
    desc: "Complete windmill assembly, erection and electrical cabling services.",
    long: "Complete windmill assembly, erection and electrical cabling. We handle tower erection, nacelle and blade assembly, and the electrical works that connect turbines to the grid — safely and on schedule.",
    scope: [
      "Windmill assembly and erection",
      "Nacelle and blade installation",
      "Internal and pad cabling",
      "Grid connection works",
    ],
    process: ["Foundation readiness", "Crane erection", "Assembly & alignment", "Electrical commissioning"],
    deliverables: ["Erected turbine", "Electrical connection", "Commissioning report"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "05",
    slug: "transformer-shifting",
    icon: "Truck",
    title: "Transformer Shifting & Relocation",
    desc: "Safe, cost-effective relocation of transformers and electrical utilities.",
    long: "Safe, cost-effective relocation of transformers and electrical utilities — including de-installation, transport, re-installation and re-commissioning with minimal downtime for the network.",
    scope: [
      "Transformer de-installation",
      "Safe transport and handling",
      "Re-installation",
      "Re-commissioning",
    ],
    process: ["Site assessment", "De-energisation", "Shifting & mounting", "Testing & re-energisation"],
    deliverables: ["Relocated asset", "Minimal downtime", "Test certificate"],
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    no: "06",
    slug: "highway-lighting",
    icon: "Lightbulb",
    title: "Highway Lighting Works",
    desc: "Highway lighting installation and relocation aligned with NHAI standards.",
    long: "Highway lighting installation and relocation aligned with NHAI standards — pole foundations, luminaire installation, cabling and line shifting for road-widening projects, delivered to utility-grade compliance.",
    scope: [
      "Highway lighting installation",
      "Pole foundations and erection",
      "LED luminaire fitting",
      "Line shifting for road widening",
    ],
    process: ["Survey & design", "Foundation & poles", "Cabling & fitting", "Testing & handover"],
    deliverables: ["Illuminated corridor", "NHAI compliance", "Handover documentation"],
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
  },
];

// The 8 real projects provided by the client
export const PROJECTS = [
  {
    id: "rays-honnati-110kv",
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "3.8 km",
    voltage: "110kV",
    location: "Honnati, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Execution of a 3.8 km 110kV transmission line at Honnati for Rays Power Infra Limited — including foundation, tower erection, stringing and testing to utility standards.",
  },
  {
    id: "marg-bijjaragi-33kv",
    client: "Marg Energy Pvt Ltd",
    work: "33kV Transmission Line",
    scope: "12 km",
    voltage: "33kV",
    location: "Bijjaragi, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A 12 km 33kV transmission line at Bijjaragi for Marg Energy Pvt Ltd, delivering reliable power evacuation with complete pole erection, stringing and commissioning.",
  },
  {
    id: "ravi-vijayapura-11kv",
    client: "Ravi Infra Projects Limited",
    work: "11kV Overhead Line",
    scope: "28 km",
    voltage: "11kV",
    location: "Vijayapura, Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Construction of a 28 km 11kV overhead distribution line at Vijayapura for Ravi Infra Projects Limited, strengthening the local distribution network.",
  },
  {
    id: "rays-yellaburga-110kv",
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "1 km",
    voltage: "110kV",
    location: "Yellaburga, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A focused 1 km 110kV transmission line at Yellaburga for Rays Power Infra Limited — precise, high-voltage line works with full testing and energisation.",
  },
  {
    id: "kvggn-aland-66kv",
    client: "KVGGN Synergy Pvt Ltd",
    work: "66kV MC Transmission Line",
    scope: "4.8 km",
    voltage: "66kV",
    location: "Aland, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A 4.8 km 66kV multi-circuit transmission line at Aland for KVGGN Synergy Pvt Ltd, executed with type-tested towers and disciplined stringing.",
  },
  {
    id: "kvggn-vijayapura-uss",
    client: "KVGGN Synergy Pvt Ltd",
    work: "USS Works — 10 Locations",
    scope: "10 sites",
    voltage: "Substation",
    location: "Vijayapura, Karnataka",
    category: "Substation",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Unit substation (USS) works across 10 locations in Vijayapura for KVGGN Synergy Pvt Ltd — equipment installation, cabling and commissioning at every site.",
  },
  {
    id: "hescom-link-line",
    client: "HESCOM (Govt. of Karnataka)",
    work: "11kV Link Line & Ganga Kalyan Works (38 Nos)",
    scope: "121 km",
    voltage: "11kV",
    location: "Vijayapura, Basavan Bagewadi, Talikoti, Tikota — Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "For HESCOM, a 121 km 11kV link line spanning Vijayapura, Basavan Bagewadi, Talikoti and Tikota, plus 38 Ganga Kalyan works — improving rural power reliability across the region.",
  },
  {
    id: "risitha-gadag-220kv",
    client: "Risitha Construction & Electricals (Hexa Climate)",
    work: "220kV Transmission Line",
    scope: "17.6 km",
    voltage: "220kV",
    location: "Gadag, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Our highest-voltage line to date — a 17.6 km 220kV transmission line at Gadag for Risitha Construction & Electricals (Hexa Climate), engineered for utility-grade reliability.",
  },
];

export const RENEWABLE = {
  eyebrow: "Renewable Focus",
  heading: "Solar & Wind, erected to last.",
  body: "From utility-scale solar evacuation corridors to complete windmill assembly and cabling, we execute renewable projects with the same engineering rigour that powers the national grid.",
  image:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
};

export const TESTIMONIALS = [
  {
    quote:
      "Junctioncraft executed our 33kV line strengthening with remarkable discipline. Shutdown windows were planned to the hour, and the quality of stringing work exceeded utility expectations.",
    name: "Executive Engineer",
    org: "Karnataka Power Utility",
  },
  {
    quote:
      "Their team completed our solar evacuation corridor — 35 km of 33kV line — ahead of schedule, which directly accelerated our plant's grid synchronization.",
    name: "Project Head",
    org: "Renewable Energy Developer",
  },
  {
    quote:
      "During highway widening, Junctioncraft relocated poles and lines without a single prolonged outage. Professional, safe and fully compliant with NHAI requirements.",
    name: "Site In-charge",
    org: "Highway Concessionaire",
  },
];

export const CLIENTS = [
  {
    name: "Rays Power Infra",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/jzdltxxv_image.png",
  },
  {
    name: "Ravi Infrabuild Projects",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/2f9nx211_image.png",
  },
  {
    name: "KVGGN Synergy",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/w1u4t2qu_image.png",
  },
  { name: "Marg Energy", sub: "Pvt Ltd", type: "text" },
  { name: "HESCOM", sub: "Govt. of Karnataka", type: "text" },
  { name: "Hexa Climate", sub: "Risitha Construction", type: "text" },
];
