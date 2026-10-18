// Edit this file to update your personal details, portfolio entries, and pricing (KES).
window.SITE = {
  me: {
    name: "Jeremy Serenge",
    role: "Independent Web Designer & Creative Engineer",
    tagline: "Digital craftsmanship & bespoke web systems for ambitious brands.",
    bio: "I design and engineer disciplined, high-converting digital flagships for leading businesses and founders in Kenya and beyond. Built with uncompromising typographic restraint, sub-second performance, and quiet luxury.",
    location: "Nairobi, Kenya",
    status: "Accepting select commissions for Q4 2026 / Q1 2027",
    whatsapp: "254700000000", // International format without '+' or spaces
    email: "jeremyserenge@gmail.com",
    github: "https://github.com/jserenge/Webquotations"
  },
  
  philosophy: [
    {
      number: "01",
      title: "Typographic Rigor",
      description: "Quiet confidence over visual noise. We treat layout and typography with the discipline of high-end editorial print, creating digital spaces that feel enduring and authoritative."
    },
    {
      number: "02",
      title: "Engineered for Velocity",
      description: "Sub-second load times on mobile 4G and desktop fiber. Zero bloated frameworks or generic templates. Every line of code is handwritten for maximum speed, accessibility, and SEO."
    },
    {
      number: "03",
      title: "Commercial Intent",
      description: "Aesthetics serve conversion. We build seamless inquiry funnels, frictionless booking flows, and clear calls to action that turn discerning visitors into loyal clients."
    },
    {
      number: "04",
      title: "Direct Partnership",
      description: "No account managers, junior handoffs, or agency overhead. You work directly with a seasoned creator from initial concept through launch and long-term stewardship."
    }
  ],

  work: [
    {
      slug: "afya",
      title: "Afya Wellness",
      category: "01 // CLINICAL & NUTRITION",
      type: "Therapeutic nutrition clinic & artisan bakery flagship",
      blurb: "Food as medicine crafted for cellular vitality. Comprehensive gut health protocols, artisan botanical sourdough bakery ordering, and clinical consultation scheduling.",
      demo: "demos/afya/",
      shot: "assets/screenshots/afya.png",
      live: "",
      tags: ["Therapeutic Nutrition", "Artisan Bakery", "Clinical Booking", "Cellular Health"]
    },
    {
      slug: "true-barbers",
      title: "True Barbers",
      category: "02 // BESPOKE GROOMING",
      type: "Gentlemen's atelier & private VIP grooming lounge",
      blurb: "Nairobi’s premier gentleman’s atelier where timeless heritage barbering meets contemporary refinement. Chair reservations, signature service rituals, and dual Westlands & Karen suites.",
      demo: "demos/true-barbers/",
      shot: "assets/screenshots/true-barbers.png",
      live: "",
      tags: ["Gentlemen's Atelier", "VIP Booking", "Westlands & Karen", "Quiet Luxury"]
    },
    {
      slug: "luxury-kenya",
      title: "Luxury Kenya",
      category: "03 // ARCHITECTURAL COMMERCE",
      type: "Curated goods for luxury living & architectural artifacts",
      blurb: "Architectural artifacts rooted in absolute restraint. Cast bronze, hand-turned stoneware, and unlacquered aerospace aluminum for distinguished residential and commercial spaces.",
      demo: "demos/luxury-kenya/",
      shot: "assets/screenshots/luxury-kenya.png",
      live: "",
      tags: ["Architectural Artifacts", "Curated Goods", "Raw Materiality", "Sovereign Living"]
    },
    {
      slug: "kifaru-safari",
      title: "Kifaru Conservancy",
      category: "04 // CONSERVANCY & EXPEDITIONS",
      type: "Private wilderness camps & bespoke wildlife expeditions",
      blurb: "Untamed horizons curated in silence. Private chartered fly-in camps across the Mara ecosystem, Lewa rhino tracking, and tailored conservation itineraries across East Africa.",
      demo: "demos/kifaru-safari/",
      shot: "assets/screenshots/kifaru-safari.svg",
      live: "",
      tags: ["Private Fly-in", "Mara Conservancy", "Wildlife Tracking", "Bespoke Itineraries"]
    }
  ],

  services: [
    {
      number: "01",
      name: "Bespoke Web Design",
      summary: "Custom brand aesthetics, typographic systems, and bespoke responsive layouts tailored to your unique market positioning."
    },
    {
      number: "02",
      name: "Front-End Engineering",
      summary: "Clean, standards-compliant HTML5, modern CSS, and JavaScript. Lightning-fast interactions with zero third-party script bloat."
    },
    {
      number: "03",
      name: "Commerce & Booking Workflows",
      summary: "Direct WhatsApp order routing, appointment calendars, automated client inquiries, and seamless payment gateway integrations."
    },
    {
      number: "04",
      name: "Technical SEO & Hosting",
      summary: "Google Search Console setup, structured schema data, global edge CDN deployment, and free automated SSL renewals."
    }
  ],

  pricing: {
    currency: "KES",
    depositPct: 50,
    groups: [
      {
        id: "pkg",
        title: "01. Select Your Core Package",
        description: "Choose the baseline scope for your website build.",
        multi: false,
        items: [
          {
            id: "landing",
            label: "Editorial Landing Page",
            note: "Single scrolling page, highly persuasive narrative, mobile responsive & lightning fast",
            price: 25000,
            features: ["Single long-form page", "Mobile & tablet optimization", "WhatsApp & contact integration", "1 round of revisions"]
          },
          {
            id: "business",
            label: "Multi-Page Business Flagship",
            note: "Up to 5 custom-designed pages (Home, About, Services, Case Studies, Contact)",
            price: 60000,
            features: ["Up to 5 bespoke pages", "Advanced typography & branding", "Lead capture inquiry form", "SEO foundations & schema"]
          },
          {
            id: "booking",
            label: "Booking or Commerce Platform",
            note: "Up to 8 pages with interactive booking flow, catalog, or ordering workflows",
            price: 120000,
            features: ["Up to 8 custom pages", "Interactive booking or catalog", "Payment / WhatsApp checkout", "Priority delivery & support"]
          }
        ]
      },
      {
        id: "add",
        title: "02. Scope Add-ons & Enhancements",
        description: "Select individual capabilities tailored to your goals.",
        multi: true,
        items: [
          {
            id: "pages",
            label: "Additional Custom Pages",
            note: "Per additional designed page beyond the package base",
            price: 8000,
            qty: true
          },
          {
            id: "copy",
            label: "Editorial Copywriting",
            note: "Compelling, polished copy crafted per page",
            price: 4000,
            qty: true
          },
          {
            id: "wa",
            label: "Direct WhatsApp Concierge Chat",
            note: "Floating conversational widget configured with custom welcome triggers",
            price: 3000
          },
          {
            id: "form",
            label: "Custom Multi-Step Inquiry Form",
            note: "Validated lead collection sent directly to your inbox with spam protection",
            price: 5000
          },
          {
            id: "seo",
            label: "Comprehensive SEO & Google Business Setup",
            note: "Local search indexing, Google Maps verification, metadata optimization",
            price: 8000
          }
        ]
      },
      {
        id: "dom",
        title: "03. Domain & Identity",
        description: "Annual domain registration and DNS management.",
        multi: false,
        items: [
          {
            id: "own",
            label: "I already own my domain",
            note: "We will configure your existing DNS records at no cost",
            price: 0
          },
          {
            id: "coke",
            label: ".co.ke Domain Registration",
            note: "Standard Kenyan commercial extension (billed annually)",
            price: 1500,
            per: "year"
          },
          {
            id: "com",
            label: ".com Domain Registration",
            note: "Global international commercial extension (billed annually)",
            price: 2000,
            per: "year"
          }
        ]
      },
      {
        id: "ssl",
        title: "04. Security & Encryption",
        description: "Security certificate configuration.",
        multi: false,
        items: [
          {
            id: "sslset",
            label: "HTTPS / SSL Certificate Setup",
            note: "Enterprise-grade SSL with automated perpetual renewal and HSTS security headers",
            price: 2000
          }
        ]
      },
      {
        id: "host",
        title: "05. Cloud Hosting & Stewardship",
        description: "Choose your deployment platform and maintenance cadence.",
        multi: false,
        items: [
          {
            id: "free",
            label: "High-Speed Global Edge CDN (GitHub Pages / Netlify)",
            note: "One-off configuration fee. Zero recurring hosting fees on static edge tier",
            price: 3000
          },
          {
            id: "cpanel",
            label: "Dedicated Business Cloud Hosting",
            note: "Includes business webmail accounts and daily automated snapshots (billed annually)",
            price: 6000,
            per: "year"
          },
          {
            id: "care",
            label: "Studio Retainer: Hosting + Monthly Care",
            note: "Hosting, security monitoring, uptime tracking, and up to 2 hours of monthly content updates",
            price: 24000,
            per: "year"
          }
        ]
      }
    ]
  }
};
