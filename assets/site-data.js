// Edit: assets/site-data.js
// Added timing metadata and journey timeline to pricing object (no price/id changes)
// Original file retained structure; only additive fields inserted.

// Edit this file to update your personal details, portfolio entries, and pricing (KES).
window.SITE = {
  me: {
    name: "Jeremy Serenge",
    role: "Independent Web Designer & Creative Engineer",
    tagline: "Digital craftsmanship & bespoke web systems for ambitious brands.",
    bio: "I design and engineer disciplined, high-converting digital flagships for leading businesses and founders in Kenya and beyond. Built with uncompromising typographic restraint, sub-second p[...]",
    location: "Nairobi, Kenya",
    status: "Accepting select commissions for Q4 2026 / Q1 2027",
    whatsapp: "254708236755", // International format without '+' or spaces
    email: "jeremyserenge@gmail.com",
    github: "https://github.com/jserenge/Webquotations"
  },
  
  philosophy: [ /* ... unchanged ... */ ],

  work: [ /* ... unchanged ... */ ],

  services: [ /* ... unchanged ... */ ],

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
            days: 5,
            timeframe: "1 week",
            features: ["Single long-form page", "Mobile & tablet optimization", "WhatsApp & contact integration", "1 round of revisions"]
          },
          {
            id: "business",
            label: "Multi-Page Business Flagship",
            note: "Up to 5 custom-designed pages (Home, About, Services, Case Studies, Contact)",
            price: 60000,
            days: 10,
            timeframe: "2 weeks",
            features: ["Up to 5 bespoke pages", "Advanced typography & branding", "Lead capture inquiry form", "SEO foundations & schema"]
          },
          {
            id: "booking",
            label: "Booking or Commerce Platform",
            note: "Up to 8 pages with interactive booking flow, catalog, or ordering workflows",
            price: 120000,
            days: 20,
            timeframe: "4 weeks",
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
            qty: true,
            daysPerQty: 1,
            timeframe: "+1 business day per page"
          },
          {
            id: "copy",
            label: "Editorial Copywriting",
            note: "Compelling, polished copy crafted per page",
            price: 4000,
            qty: true,
            daysPerQty: 1,
            timeframe: "+1 business day per page"
          },
          {
            id: "wa",
            label: "Direct WhatsApp Concierge Chat",
            note: "Floating conversational widget configured with custom welcome triggers",
            price: 3000,
            days: 0,
            timeframe: "Instant"
          },
          {
            id: "form",
            label: "Custom Multi-Step Inquiry Form",
            note: "Validated lead collection sent directly to your inbox with spam protection",
            price: 5000,
            days: 1,
            timeframe: "1 business day"
          },
          {
            id: "seo",
            label: "Comprehensive SEO & Google Business Setup",
            note: "Local search indexing, Google Maps verification, metadata optimization",
            price: 8000,
            days: 1,
            timeframe: "1 business day"
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
            price: 0,
            days: 0,
            timeframe: "No additional time"
          },
          {
            id: "coke",
            label: ".co.ke Domain Registration",
            note: "Standard Kenyan commercial extension (billed annually)",
            price: 1500,
            per: "year",
            days: 0,
            timeframe: "Same-day"
          },
          {
            id: "com",
            label: ".com Domain Registration",
            note: "Global international commercial extension (billed annually)",
            price: 2000,
            per: "year",
            days: 0,
            timeframe: "Same-day"
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
            price: 2000,
            days: 0,
            timeframe: "Automated instant setup"
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
            price: 3000,
            days: 0,
            timeframe: "Same-day Edge deployment"
          },
          {
            id: "cpanel",
            label: "Dedicated Business Cloud Hosting",
            note: "Includes business webmail accounts and daily automated snapshots (billed annually)",
            price: 6000,
            per: "year",
            days: 0,
            timeframe: "Same-day Cloud setup"
          },
          {
            id: "care",
            label: "Studio Retainer: Hosting + Monthly Care",
            note: "Hosting, security monitoring, uptime tracking, and up to 2 hours of monthly content updates",
            price: 24000,
            per: "year",
            days: 0,
            timeframe: "Continuous monthly care"
          }
        ]
      }
    ],
    // New timeline limits
    timeline: {
      minDays: 5,
      maxDays: 22
    },

    // New journey stages (5 stages with shares w summing to 1)
    journey: [
      {
        phase: "Discovery and Brief",
        badge: "Scope",
        w: 0.10,
        summary: "A short kickoff to lock scope, content and plan before design starts.",
        steps: [
          "30-minute kickoff call to confirm goals, audience and brand",
          "Content checklist (logo, photos, copy, social links)",
          "Sitemap and page-by-page scope agreed in writing",
          "Deposit received and project slot reserved"
        ],
        deliverable: "Signed-off Scope and Project Plan"
      },
      {
        phase: "Visual Direction and Design",
        badge: "Design",
        w: 0.25,
        summary: "Concept designs in your brand, reviewed on phone and desktop.",
        steps: [
          "Two homepage concepts in your colours and typography",
          "Mobile and desktop layouts reviewed with you",
          "One revision round on the chosen concept"
        ],
        deliverable: "Approved Design Direction"
      },
      {
        phase: "Build and Responsive Development",
        badge: "Build",
        w: 0.35,
        summary: "Every page coded from the approved design and tested on real screen sizes.",
        steps: [
          "Pages built from the approved design",
          "Mobile, tablet and desktop testing",
          "Speed and accessibility checks",
          "Private staging link for review"
        ],
        deliverable: "Working Website on a Private Preview Link"
      },
      {
        phase: "Commerce and Leads",
        badge: "Commerce and Leads",
        w: 0.20,
        summary: "Turning your aesthetic showcase into a working business asset with direct inquiry routing, appointment scheduling, and analytics.",
        steps: [
          "Direct WhatsApp concierge chat button with custom welcome triggers",
          "Custom validated multi-step inquiry form delivering straight to your inbox",
          "Interactive appointment calendar or catalog/checkout integration",
          "Google Analytics 4 and Meta Pixel event tracking configuration"
        ],
        deliverable: "Fully Functional Inquiry and Conversion Engine"
      },
      {
        phase: "Global Edge Launch and Stewardship Handover",
        badge: "Launch and Support",
        w: 0.10,
        summary: "Zero-downtime deployment to a global edge CDN, security lockdown, search indexing, and a personal client walkthrough.",
        steps: [
          "Custom domain DNS routing and CDN propagation",
          "Automated SSL/HTTPS encryption and security headers",
          "Google Search Console submission, XML sitemap and schema indexing",
          "Recorded Loom video walkthrough showing how to manage your site",
          "30-day post-launch warranty with direct technical support"
        ],
        deliverable: "Live Production Website and Complete Ownership Handover"
      }
    ]
  }
};
