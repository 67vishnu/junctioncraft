// Mock data for Junctioncraft Pvt. Ltd. — Green Energy EPC
// NOTE: This is FRONTEND-ONLY mock data. No backend is wired yet.

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
  "Transmission Lines",
  "Solar EPC",
  "Wind Erection",
  "Substations",
  "Highway Lighting",
  "Class-1 Contractor",
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
  },
  {
    slug: "insulators",
    name: "Insulators",
    desc: "Disc, pin and polymer insulators engineered for 11kV to 110kV networks.",
    image:
      "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "conductors-cables",
    name: "Conductors & Cables",
    desc: "ACSR, AAAC and AAC conductors with LT/HT power and control cabling.",
    image:
      "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "transformers",
    name: "Transformers",
    desc: "Distribution and power transformers supplied, installed and commissioned.",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "poles",
    name: "Poles",
    desc: "PCC, PSC and steel tubular poles for distribution and lighting networks.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "accessories-hardware",
    name: "Accessories & Hardware",
    desc: "Line hardware, clamps, connectors, earthing and protection accessories.",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const SERVICES = [
  {
    no: "01",
    slug: "substations",
    icon: "Building2",
    title: "Substations",
    desc: "Design, installation and commissioning of 11kV, 33kV and 110kV substations.",
  },
  {
    no: "02",
    slug: "electrical-line-works",
    icon: "Cable",
    title: "Electrical Line Works",
    desc: "Installation, strengthening and upgradation of 11kV and 33kV overhead lines.",
  },
  {
    no: "03",
    slug: "solar-epc",
    icon: "Sun",
    title: "Solar EPC & Evacuation",
    desc: "Solar plant electrical works and 33kV/11kV grid evacuation infrastructure.",
  },
  {
    no: "04",
    slug: "wind-power-erection",
    icon: "Wind",
    title: "Wind Power Erection",
    desc: "Complete windmill assembly, erection and electrical cabling services.",
  },
  {
    no: "05",
    slug: "transformer-shifting",
    icon: "Truck",
    title: "Transformer Shifting & Relocation",
    desc: "Safe, cost-effective relocation of transformers and electrical utilities.",
  },
  {
    no: "06",
    slug: "highway-lighting",
    icon: "Lightbulb",
    title: "Highway Lighting Works",
    desc: "Highway lighting installation and relocation aligned with NHAI standards.",
  },
];

// The 8 real projects provided by the client
export const PROJECTS = [
  {
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "3.8 km",
    voltage: "110kV",
    location: "Honnati, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "Marg Energy Pvt Ltd",
    work: "33kV Transmission Line",
    scope: "12 km",
    voltage: "33kV",
    location: "Bijjaragi, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "Ravi Infra Projects Limited",
    work: "11kV Overhead Line",
    scope: "28 km",
    voltage: "11kV",
    location: "Vijayapura, Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "1 km",
    voltage: "110kV",
    location: "Yellaburga, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "KVGGN Synergy Pvt Ltd",
    work: "66kV MC Transmission Line",
    scope: "4.8 km",
    voltage: "66kV",
    location: "Aland, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "KVGGN Synergy Pvt Ltd",
    work: "USS Works — 10 Locations",
    scope: "10 sites",
    voltage: "Substation",
    location: "Vijayapura, Karnataka",
    category: "Substation",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    client: "HESCOM (Govt. of Karnataka)",
    work: "11kV Link Line & Ganga Kalyan Works (38 Nos)",
    scope: "121 km",
    voltage: "11kV",
    location: "Vijayapura, Basavan Bagewadi, Talikoti, Tikota — Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "Risitha Construction & Electricals (Hexa Climate)",
    work: "220kV Transmission Line",
    scope: "17.6 km",
    voltage: "220kV",
    location: "Gadag, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
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

// Clients — image logos for the ones provided, styled text badges for others
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
