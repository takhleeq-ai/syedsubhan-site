export type CVProfile = {
  name: string;
  email: string;
  headline: string;
  location: string;
  summary: string;
  linkedinUrl?: string;
  profileImage?: string;
};

export type CVEducation = {
  degree: string;
  institution: string;
};

export type CVExperience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  subRole?: string;
};

export type CVCertification = {
  name: string;
  issuer?: string;
  note?: string;
};

export const cvProfile: CVProfile = {
  name: "Syed Ahsan Subhan",
  email: "Subhan.Ahsan@Gmail.com",
  headline:
    "Senior Technical Product Owner / Product Manager – Payments & Platforms | Embedded Finance and BNPL Technical SME",
  location: "British Citizen | UK-based | Open to opportunities aligned with Middle East digital transformation",
  summary:
    "Senior Technical Product Owner / Product Manager with 15+ years' experience delivering payments, Open Banking, embedded finance, and regulated financial platforms. Combines Apple-grade delivery standards with UK tier-1 banking expertise to build secure, scalable, customer-centric products in highly regulated environments. Operates comfortably at the intersection of product strategy, technical delivery, compliance, and stakeholder management, with a proven track record in high-bar, regulated environments.",
  linkedinUrl: "https://www.linkedin.com/in/syed-subhan",
  profileImage: "/avatar.png",
};

export const cvEducation: CVEducation[] = [
  {
    degree: "M.Sc. Software Engineering",
    institution: "University of Bradford, UK",
  },
  {
    degree: "B.S. Computer Science",
    institution: "FAST National University of Computer & Emerging Sciences, Pakistan",
  },
];

export const cvExperience: CVExperience[] = [
  {
    company: "Lloyds Banking Group",
    role: "Solutions Integrator",
    dates: "Jan 2025 - Present",
    bullets: [
      "Senior product-aligned delivery role driving commercial Embedded Finance platforms, specialising in BNPL, Open Banking and Digital Identity verification at national scale.",
      "Spearheaded the design and development of the bank's first internal Embedded Finance enabler API for Buy Now Pay Later and other unregulated credit products",
      "Delivered revenue-generating internal APIs leveraging PCA customer data for 25+ million customers, improving credit decisioning and affordability outcomes at scale.",
      "Led Open Banking capabilities for income, expenditure, and identity verification, increasing application-to-approval conversion by ~30%.",
      "Enabled rapid commercial scale-up of embedded finance propositions, contributing to $1.5m+ in spend within six months.",
      "Designed reusable integration and onboarding frameworks, reducing B2B partner integration timelines by ~70% and accelerating time-to-revenue.",
      "Worked cross-functionally with product, engineering, risk, compliance, and commercial leadership to deliver growth while maintaining regulatory and operational control.",
      "Supported $100m+ technology acquisition due diligence, assessing scalability, integration complexity, and delivery risk.",
      "Acted as a senior delivery lead and mentor, strengthening execution discipline and capability across revenue-critical initiatives.",
    ],
  },
  {
    company: "Apple",
    role: "Wallet Payments & Commerce",
    dates: "Oct 2020 - Jan 2025",
    subRole: "Partner Engineer, Wallet Payments & Commerce (Apr 2022 – Jan 2025) | Implementation Manager, Open Banking & Credit Data Platforms (Oct 2020 – Mar 2022)",
    bullets: [
      "Senior product-aligned delivery and integration lead across wallet payments, merchant acceptance, and Open Banking platforms, operating at scale within Apple's regulated financial services ecosystem.",
      "Led Tap to Pay on iPhone implementations across local and international payment schemes in Germany (MasterCard, Visa, GiroCard), France (MasterCard, Visa, CB), Central Europe, and the Middle East (Mada), enabling secure merchant acceptance across multiple jurisdictions.",
      "Technical SME for Terminal Profile Configuration, Apple Pay Kernel Validation and scheme certification for GiroCard, Mada, CB and other domestic schemes.",
      "Acted as the primary technical and product authority for partners from pre-sales and due diligence through certification and regulated production launch.",
      "Coordinated cross-functional delivery across product, engineering, security, legal, and regional operations to ensure alignment with scheme rules, regulatory requirements, and platform governance.",
      "Conducted technical due diligence for new partners and clients, assessing API maturity, security controls, data readiness, and integration complexity to inform onboarding strategy and commercial timelines.",
      "Delivered Open Banking–powered income, expenditure, and affordability platforms, supporting financial institutions and fintechs from onboarding to live operation.",
      "Designed and delivered technical enablement workshops and solution demonstrations, accelerating adoption of data-driven credit and affordability use cases.",
      "Re-engineered onboarding processes and implementation tooling, achieving ~60% improvement in delivery efficiency and faster partner time-to-value.",
      "Resolved complex, cross-market integration and certification issues, balancing time-to-market, regulatory compliance, and platform integrity.",
    ],
  },
  {
    company: "Paymentology",
    role: "Technical Project Manager",
    dates: "Aug 2019 - Sep 2020",
    bullets: [
      "Led end-to-end issuer-side payment processing implementations for banking and fintech clients, supporting onboarding from initial design through go-live.",
      "Served as subject matter expert for payments rule configuration, including fraud controls, limits, and usage rules, ensuring alignment with client risk and regulatory requirements for various clients in the EU (RailsBank, Lendable etc) and MENA region (Bank of Jordan, Bank Al-Etihad, Derayah D360 etc).",
      "Drove internal process improvement initiatives that reduced average implementation timelines by ~40%, improving delivery predictability and scalability.",
      "Led development of self-service onboarding capabilities, enabling clients to configure, test, and validate fraud rules and payment behaviours more efficiently.",
      "Managed complex stakeholder environments, including client teams, internal engineering, and risk functions, supported by clear MI and risk reporting.",
      "Oversaw system integration and testing with client platforms and third-party providers, including hands-on involvement in UAT cycles and issue resolution.",
      "Configured and utilised Mastercard and Visa simulators to validate transaction flows, edge cases, and scheme compliance prior to production release.",
    ],
  },
  {
    company: "Sapiens",
    role: "Solutions Architect",
    dates: "Oct 2018 - Jul 2019",
    bullets: [
      "Played a key role in the design and delivery of client-specific solutions within regulated financial services environments.",
      "Led and supported requirements discovery and refinement workshops, translating business and regulatory needs into implementable system designs.",
      "Designed and delivered interfaces and integrations with external bodies and third-party systems, including FCA, HMRC, and other regulatory and data providers.",
      "Worked closely with engineering, product, and client stakeholders to ensure solutions were scalable, compliant, and aligned with broader platform architecture.",
    ],
  },
  {
    company: "Fenergo",
    role: "Senior Business Systems Analyst | Client Lifecycle Management & Regulatory Platforms",
    dates: "",
    bullets: [
      "Led technical and functional analysis across complex financial services systems, supporting global client implementations.",
      "Contributed to system architecture enhancements and legacy platform redesign, improving scalability and regulatory alignment.",
      "Liaised between product owners, engineering teams, and senior stakeholders to define features, priorities, and delivery scope within Scrum-based teams.",
      "Produced high-quality functional and technical documentation for internal teams and external clients, supporting implementation and change initiatives.",
    ],
  },
  {
    company: "Charles River Development",
    role: "Business Systems Analyst | Order Management Platforms",
    dates: "",
    bullets: [
      "Delivered customised order management system upgrades for government and privately owned financial institutions globally.",
      "Managed end-to-end delivery lifecycle, coordinating stakeholders from initiation through go-live and post-implementation handover.",
      "Streamlined delivery processes and introduced automation across development and testing, improving reliability and release efficiency.",
      "Analysed and implemented system changes driven by financial regulatory requirements, including FCA, FATCA, RDR, and GDPR.",
    ],
  },
  {
    company: "Capita Asset Services",
    role: "Support Analyst / Programmer | Fund Administration Systems",
    dates: "",
    bullets: [
      "Provided L3 application support and development for one of the UK's largest fund administrators, ensuring 23/7 system availability. Led incident and change management activities within a regulated production environment.",
      "Developed and enhanced in-house tools, APIs, and third-party integrations to improve operational efficiency and system reliability.",
    ],
  },
];

export const cvCertifications: CVCertification[] = [
  { name: "Professional Scrum Product Owner (PSPO I)", issuer: "Scrum.org", note: "exam-based" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", note: "Scheduled" },
  { name: "CISI – Introduction to Islamic Finance (IAQ)", note: "scheduled" },
  { name: "ITIL v3 Foundation" },
  { name: "Oracle Certified SQL Expert", issuer: "Oracle 11g" },
];
