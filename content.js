/* =====================================================================
   YOUR PORTFOLIO CONTENT  -  this is the only file you need to edit for text.

   HOW TO EDIT
     1. Change the words that sit between "quote marks".
     2. Leave the punctuation alone: every "quote" and every comma at the
        end of a line has to stay.
     3. To ADD something (a role, a skill, a brand, a case study), copy a whole
        { ... }, block (or one "item",) and paste it right below, then edit it.
        To REMOVE something, delete the whole block or line.
     4. Click "Commit changes". The site updates in about a minute.

   Made a mistake or the page looks broken? Open this file's History on
   GitHub and revert to the last good version.

   Colors and fonts live in style.css, not here.
   ===================================================================== */

const SITE = {

  // ---------- TOP BAR (the small bar that stays at the top)
  header: { name: "hiba-kakul", section: "portfolio", branch: "main", status: "all changes saved" },

  // ---------- CONTACT LINKS - written once here and reused by the buttons, the contact section
  // and the printed header. Change your email or LinkedIn here and it updates everywhere.
  links: {
    email: "hibakakul@gmail.com",
    linkedin: "https://linkedin.com/in/hibakakul",
    site: "https://hibakakul-hash.github.io/Conjunctions/",
  },

  // ---------- HEADLINE (top of the page)
  hero: {
    label: "Platform Product Manager",
    headline: "I diagnose bottlenecks. I design platforms. I scale operations.",
    text: "0-to-1 platform builder. Scaled operations for 250+ enterprise partners across India, West Asia and East Asia. Moved from reactive support to proactive product strategy through structured problem translation.",
  },

  // ---------- SECTION 1 - QUICK ANSWERS
  // Each note becomes a clickable button. "command" is the button label (shown as --command).
  // The first note is the one shown when the page loads.
  overview: {
    fileName: "01_overview.md",
    title: "A few quick answers",
    prompt: "Pick a prompt below.",
    shell: "field-notes.sh",
    user: "hiba@portfolio",
    notes: [
      {
        command: "approach",
        text: "My approach: diagnose the constraint at platform level (fragmented data, no automation, missing visibility), design the architecture (what can be built?), then drive adoption (how do we make it stick?).",
      },
      {
        command: "currently",
        text: "Currently building Filtrd's backend infrastructure and community architecture, while scaling Sab Link's artisan-to-market platform.",
      },
      {
        command: "background",
        text: "Started as operations lead at Rivigo. Moved into product at Unicommerce, working from Consultant through Senior Consultant to Team Lead across 110+ enterprise accounts.",
      },
      {
        command: "outside-work",
        text: "I write poetry, play basketball, and read a mix of fiction and non-fiction.",
      },
      {
        command: "lets-talk",
        text: "Best way to reach me is email or LinkedIn. Always happy to talk platforms, constraints, and 0-to-1 builds.",
      },
    ],
  },

  // ---------- SECTION 2 - PROFILE CARD
  // buttons: "link" can be "email" or "linkedin" (taken from LINKS above), or use url: "https://...".
  // Add primary: true to make a button solid.
  profile: {
    fileName: "02_profile.ticket",
    status: "Open to opportunities",
    ticketId: "TICKET-01 · Platform PM",
    name: "Hiba Kakul",
    role: "Platform Product Manager",
    location: "New Delhi, India",
    buttons: [
      { label: "✉ Email me", link: "email", primary: true },
      { label: "in/ LinkedIn", link: "linkedin" },
    ],
    stats: [
      { value: "250+", label: "Enterprise Partners" },
      { value: "6", label: "Years Building" },
      { value: "3", label: "Regions" },
    ],
  },

  // ---------- SECTION 3 - CAREER ROADMAP (newest first)
  // now: true gives the filled dot. "tag" is the little label (Now, Shipped, ...).
  experience: {
    fileName: "03_experience.roadmap",
    title: "Career roadmap",
    subtitle: "My path from operations into product.",
    items: [
      {
        now: true,
        tag: "Now",
        title: "Platform PM and Strategy, Sab Link",
        dates: "July 2026 – Present",
        text: "Building a 0-to-1 platform connecting artisan-businesses from marginalized communities to market access and upskilling. Piloted to 5+ active makers with a 2-3x income uplift.",
      },
      {
        now: true,
        tag: "Now",
        title: "Platform Lead, Filtrd",
        dates: "2025 – Present · Part-time",
        text: "Own backend infrastructure and community engagement architecture for a fintech platform focused on ethical investment education for women, built from market research into a 0-to-1 roadmap.",
      },
      {
        now: false,
        tag: "Shipped",
        title: "Team Lead, Products Solutioning, Unicommerce",
        dates: "Mar 2023 – May 2024",
        text: "Led product discovery and solution strategy for 100+ feature enhancements across quick commerce and returns automation, using feedback from 110+ enterprise accounts to prioritize. Led a team of 10 consultants and analysts, contributing to 95% CSAT.",
      },
      {
        now: false,
        tag: "Shipped",
        title: "Senior Consultant, Product Solutioning, Unicommerce",
        dates: "Mar 2022 – Mar 2023",
        text: "Ran technical deep dives (SQL, APIs, workflows) to find usability issues and define product and integration improvements. Translated 100+ customer use-cases into structured technical requirements.",
      },
      {
        now: false,
        tag: "Shipped",
        title: "Consultant, Product Solutioning, Unicommerce",
        dates: "May 2021 – Mar 2022",
        text: "Owned end-to-end delivery of multi-stakeholder integration projects, managing dependencies across product, engineering, QA, and customer teams.",
      },
      {
        now: false,
        tag: "Shipped",
        title: "Service Manager, Rivigo",
        dates: "2020 – May 2021",
        text: "Operations and analytics lead for Rivigo's top-tier Pan-India clients, including TATA Motors, Hilti India, and Firstcry. Redesigned service delivery workflows during COVID-19 while maintaining SLA continuity.",
      },
      {
        now: false,
        tag: "Shipped",
        title: "Service Associate, Rivigo",
        dates: "Sep 2018 – 2020",
        text: "Started here in operations, handling service delivery on the ground.",
      },
    ],
  },

  // ---------- SECTION 4 - CASE STUDIES
  // Each case study is a card (tag, title, summary, chips) plus a pop-up (details).
  // Card number (CASE-01...) and the pop-up title are filled in automatically.
  // Each block inside details has a heading and ONE of these:
  //   text: "..."                       -> a paragraph
  //   bullets: ["..."]                   -> a list (add style: "dots" for round bullets)
  //   steps: ["..."]                     -> numbered 'how it works' steps
  //   decisions: [{ title, text }]       -> key decisions
  //   before: "...", after: "..."        -> a before / after comparison
  cases: {
    fileName: "04_case-studies.board",
    title: "Selected product enablements",
    hint: "Click a card for the full case study.",
    items: [
      {
        tag: "Infrastructure",
        title: "Unified Omni-Channel Data Integration",
        summary: "Sugar Cosmetics needed real-time inventory and order visibility across 100+ retail stores with no unified data pipeline.",
        chips: [
          "Real-time Sync", "100+ Stores", "Webhook-Based", "Reusable Playbook",
        ],
        details: [
          {
            heading: "The Problem",
            text: "Sugar Cosmetics operated across 100+ retail stores with siloed inventory and order data. Real-time visibility was impossible, leading to overselling, stockouts, and fragmented customer experiences.",
          },
          {
            heading: "Constraints",
            bullets: [
              "No engineering bandwidth. I designed the architecture, wrote the API playbook and technical spec, and guided Sugar's own dev team through the build.",
              "No slot on the native roadmap for a custom connector.",
              "The third-party WMS only supported webhooks for inventory updates.",
              "Shopify's API rate limits had to be managed carefully across 100+ stores.",
              "A tight deadline for a working solution across 100+ stores.",
            ],
            style: "dots",
          },
          {
            heading: "Design and Delivery",
            text: "Assessed existing API capabilities across retail, e-commerce, and POS systems. Designed a webhook-based integration architecture for real-time inventory and order data sync. Coordinated technical requirements directly with the client's product team and validated the design through a staging pilot before go-live.",
          },
          {
            heading: "How it works",
            steps: [
              "Shopify order arrives by webhook", "Unicommerce checks nearest store stock",
              "Routes to the store, or to the WMS if no stock", "Shiprocket books the shipment",
              "Tracking syncs back to Shopify",
            ],
          },
          {
            heading: "Key decisions",
            decisions: [
              {
                title: "One inventory ledger",
                text: "Unicommerce became the single source of truth for stock. Every system pushes stock changes to it first, and Shopify and the WMS read from it. That ended conflicting stock numbers across systems.",
              },
              {
                title: "Built as a reusable playbook",
                text: "Tenant URL, API keys, and store codes are variables, so other teams could reuse the same design for similar clients without starting over.",
              },
            ],
          },
          {
            heading: "Impact",
            bullets: [
              "Delivered to production, improving inventory visibility and order synchronization phase-wise across 100+ stores",
              "Freed ops teams for strategic work instead of firefighting",
              "Playbook reused for later clients without re-architecting",
              "Orders route to the nearest store with stock, which lowers shipping cost",
            ],
          },
        ],
      },
      {
        tag: "Integration",
        title: "Amazon B2B Order Integration",
        summary: "Manual order reconciliation across 250+ enterprise brands created operational inefficiency and error risk.",
        chips: [
          "250+ Brands", "Zero Manual Work",
        ],
        details: [
          {
            heading: "The Problem",
            text: "Manual order reconciliation across 250+ enterprise brands' Amazon B2B channels created operational inefficiency and error risk. No reliable sync existed between Amazon and Unicommerce.",
          },
          {
            heading: "Discovery",
            text: "Ran structured interviews with brand ops teams and turned their pain points into user stories on Jira for four roles: brand ops, finance, warehouse, and business owners. Wrote the BRD and feature spec from that.",
          },
          {
            heading: "Design and Delivery",
            text: "Identified the problem and built the business case. Engaged directly with Amazon's team to scope available integration options. Partnered with engineering and leadership through solution design, recommending a polling-based sync model chosen based on Amazon's webhook limitations at the time.",
          },
          {
            heading: "How it works",
            steps: [
              "Brand gets a B2B order on Amazon Business", "Unicommerce pulls it through the API",
              "Order is flagged as B2B from the buyer type", "Mapped to a Unicommerce order",
              "Inventory reserved, warehouse picks", "GST B2B invoice generated automatically",
              "Shipped, invoice pushed to the brand's ERP",
            ],
          },
          {
            heading: "Key decisions",
            decisions: [
              {
                title: "Polling over webhooks",
                text: "Amazon's B2B webhook support was limited at the time, and B2B orders are not as time-critical as B2C. Polling kept the build simple and still met the SLA.",
              },
              {
                title: "A separate B2B invoice template",
                text: "Built a dedicated GST template with a buyer GSTIN field and a reverse-charge flag instead of reusing the B2C one, because compliance depended on it.",
              },
              {
                title: "Pilot first",
                text: "Ran a pilot with a small group of brands first, fixed edge cases in bulk orders and credit notes, then rolled out in phases.",
              },
            ],
          },
          {
            heading: "Impact",
            bullets: [
              "Eliminated manual reconciliation across 250+ brands",
              "Enabled seamless, scaled order processing",
              "Reduced operational risk and human error",
              "Freed finance and ops teams from routine reconciliation work",
              "Set a reusable integration pattern for later B2B marketplace integrations",
            ],
          },
        ],
      },
      {
        tag: "Compliance",
        title: "Ajio B2B2C GST Compliance Remediation",
        summary: "Ajio's B2B2C model needed two invoice chains; the existing integration mixed them into GST-invalid invoices across 50+ brands.",
        chips: [
          "50+ Brands", "Historical Invoices Corrected", "Zero Violations",
        ],
        details: [
          {
            heading: "The Problem",
            text: "Ajio's B2B2C model required two separate invoice chains. The existing integration mixed them, producing GST-invalid invoices. A client's CA flagged the mismatches, escalating to a compliance risk across 50+ brands.",
          },
          {
            heading: "Root cause",
            before: "Ajio invoices the end customer and the brand invoices Ajio, so every order has two invoice chains. The old integration built one invoice with the customer's address but Ajio's GSTIN as buyer, mixing B2B and B2C rules. A second customer invoice was also generated by mistake.",
            after: "Only the brand-to-Ajio B2B invoice is generated, with Ajio's GSTIN as buyer. Ajio issues its own invoice to the end customer, so the two chains stay separate.",
          },
          {
            heading: "Design and Delivery",
            text: "Built the business case for remediation. Engaged Ajio's technical team directly to define the corrected invoicing approach. Partnered with engineering and business through the revamp, holding sign-off before rollout. Retrospectively corrected historical invoices with zero operational disruption.",
          },
          {
            heading: "Key decisions",
            decisions: [
              {
                title: "Rebuild the classifier, don't patch",
                text: "Instead of patching the old invoice template, built a classifier that reads the order type from the Ajio payload and routes it to the right template. Future changes to Ajio's model won't break invoicing.",
              },
              {
                title: "Fix the past, not only the future",
                text: "Worked with Ajio and brand finance teams to set the correction period, issued credit notes for the wrong invoices, and re-issued compliant ones. A one-time SQL batch script found every affected invoice.",
              },
              {
                title: "Roll out by risk",
                text: "Started with the brands at highest risk of GST escalation and validated invoice accuracy on pilot brands before rolling out to the rest.",
              },
            ],
          },
          {
            heading: "Impact",
            bullets: [
              "Restored compliance across all affected brands, with zero violations post-launch",
              "Retrospectively corrected historical invoices with zero disruption",
              "Eliminated manual review, freed finance team",
              "Scaled across 50+ brands without a compliance violation",
              "Ajio formally approved the revamped integration as compliant",
            ],
          },
        ],
      },
      {
        tag: "Fintech",
        title: "Filtrd: Ethical Investment Platform",
        summary: "Women investors lacked accessible ethical investment education and Shariah-compliant options.",
        chips: [
          "API Infrastructure", "Community Architecture",
        ],
        details: [
          {
            heading: "The Problem",
            text: "Women investors faced barriers: lack of accessible ethical investment education, limited Shariah-compliant options, and no aggregated financial data layer for third-party integration.",
          },
          {
            heading: "Design and Delivery",
            text: "Translated market research (women's wealth gaps, Shariah-compliance constraints, investor sentiment) into a 0-to-1 roadmap. Built API layer enabling third-party financial data integration. Designed pricing model and community workshop framework connecting financial literacy to product adoption.",
          },
          {
            heading: "Impact",
            bullets: [
              "Designed backend infrastructure for scaled financial data integration",
              "Built community engagement architecture connecting education to adoption",
              "Established framework for workshop-led financial literacy",
              "Creating infrastructure for ethical investing at scale",
            ],
          },
        ],
      },
      {
        tag: "Creator Platform",
        title: "Sab Link: Artisan-to-Market Platform",
        summary: "Artisans from marginalized communities had no unified access to market visibility or direct-to-consumer channels.",
        chips: [
          "5+ Active Makers", "Community-Led Growth",
        ],
        details: [
          {
            heading: "The Problem",
            text: "Artisans from marginalized communities had no unified platform for market access. Skill-sharing channels were fragmented. Artists had no aggregated visibility and faced barriers to direct-to-consumer sales.",
          },
          {
            heading: "Design and Delivery",
            text: "Diagnosed the platform-level constraint: artisans needed both community visibility and market access. Designed a two-layer model combining skill-based workshops with a direct-to-consumer marketplace. Built the community layer first (monthly in-person skill-sharing workshops), then layered the digital platform enabling direct transactions and artist portfolios.",
          },
          {
            heading: "Impact",
            bullets: [
              "Piloted with 5+ active makers, connecting them to market access and visibility",
              "Built skill-based entrepreneurship framework for scaling",
              "Created community-led model reducing reliance on single founder",
              "Established sustainable pathway for minority group economic growth",
            ],
          },
        ],
      },
    ],
  },

  // ---------- SECTION 5 - SKILLS
  // Each group is a filter button. color: "cyan", "purple", "gold" or "teal".
  // The counts on the buttons are worked out automatically.
  // hint = small instruction shown on screen only (not in print).
  skills: {
    fileName: "05_skills.matrix",
    title: "Capability matrix",
    subtitle: "Dot color shows the group.",
    hint: "Click a category to filter.",
    hintFirst: true,
    groups: [
      {
        label: "Platform Strategy",
        color: "cyan",
        items: [
          "0-1 Design", "Stakeholder Mapping", "Adoption Frameworks", "Platform Health Metrics",
          "Cross-Regional Scaling",
        ],
      },
      {
        label: "Product & Data",
        color: "purple",
        items: [
          "API Architecture", "Data Field-Mapping", "Data Pipelines", "Agile Delivery",
          "Backlog Management", "SQL Debugging", "Webhook Strategies",
        ],
      },
      {
        label: "Tools",
        color: "gold",
        items: [
          "SQL", "Postman", "Jira", "Confluence", "Tableau", "Figma", "Python", "CRM Tools",
          "Agentic AI", "Advanced Excel",
        ],
      },
      {
        label: "Leadership",
        color: "teal",
        items: [
          "Team Management", "KPI Definition", "Process Optimization",
          "Client-Facing Technical Leadership",
        ],
      },
    ],
  },

  // ---------- SECTION 6 - EDUCATION AND CERTIFICATIONS ("text" is optional)
  education: {
    fileName: "06_education.cert",
    title: "Education and certifications",
    subtitle: "Degrees first, then the certifications I've kept current.",
    items: [
      { title: "Master of Business Administration (MBA)", meta: "Aligarh Muslim University · 2018" },
      { title: "Bachelor of Science", meta: "Aligarh Muslim University · 2016" },
      {
        title: "Generative AI for Project Managers Professional Certification",
        meta: "Project Management Institute (PMI) · 2026",
        text: "Applying generative AI, LLMs, and agents for workflow automation and product delivery.",
      },
      {
        title: "Data Analysis for Management",
        meta: "The London School of Economics and Political Science · 2025",
        text: "Statistical analysis, data visualization, Excel-based modelling, regression, forecasting, and data-driven decision-making.",
      },
      {
        title: "Agile Methodologies for Project Managers",
        meta: "Project Management Institute (PMI) · 2024",
      },
    ],
  },

  // ---------- SECTION 7 - BRANDS
  // {total} in the subtitle is replaced by the real number of brands.
  // statLabel is the label on the big number tile above the filters.
  brands: {
    fileName: "07_brands.network",
    title: "Brands I've worked with",
    subtitle: "{total} partners across marketplaces, direct brands, and logistics.",
    hint: "Click a category to filter.",
    groups: [
      {
        label: "Marketplaces & D2C",
        color: "cyan",
        items: [
          "Amazon", "Flipkart", "Myntra", "Ajio", "Meesho", "Yaari", "Tata Cliq", "Nykaa", "Blinkit",
          "Firstcry", "Shopify", "WooCommerce", "Magento", "Noon", "TikTok", "Lazada",
        ],
        statLabel: "Marketplaces & D2C",
      },
      {
        label: "Brands",
        color: "purple",
        items: [
          "Milton", "Sugar Cosmetics", "Agrostar", "FabIndia", "ForeverNew", "Mosaic Wellness",
          "Bestseller (ONLY, Jack&Jones, Vero Moda)", "Hopscotch", "Rarerabbit", "W for Woman",
          "Liberty Shoes", "Converse India", "Campus Shoes", "Paragon", "Redchief", "Bacca Bucci",
          "Ajmal Perfumes", "Adil Qadri Perfumes", "Hilti India", "TATA Motors",
        ],
        statLabel: "Direct Brands",
      },
      {
        label: "Shipping Aggregators",
        color: "teal",
        items: [
          "Shiprocket", "Delhivery", "Xpressbees", "Shadowfax", "Ecom Express", "Pickrr",
          "Nimbuspost", "J&T Express (UAE)", "WareIQ", "Bluedart", "DHL",
        ],
        statLabel: "Shipping Partners",
      },
    ],
  },

  // ---------- SECTION 8 - CONTACT
  // Each link uses link: "email" / "linkedin" or url: "https://...".
  contact: {
    fileName: "08_contact.log",
    logLine: "v1.0.0 · portfolio launched",
    columns: [
      {
        title: "Connect",
        links: [
          { label: "LinkedIn", link: "linkedin" },
          { label: "Email", link: "email" },
        ],
      },
      {
        title: "Projects",
        links: [
          { label: "Sab Link", url: "https://www.sablink.in" },
          {
            label: "Filtrd",
            url: "https://hibakakul-hash.github.io/filtrd-halal-finance-screener/",
          },
        ],
      },
    ],
    copyright: "© 2026 Hiba Kakul.",
  },
};
