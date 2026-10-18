// Edit this file only: your details, portfolio entries and all prices (KES).
window.SITE = {
  me: {
    name: "Your Name",
    tagline: "I design and build websites for Kenyan businesses.",
    bio: "Write 2–3 sentences about yourself: what you build, who you work with, and how long a typical site takes.",
    whatsapp: "2547XXXXXXXX", // international format, no + or spaces
    email: "you@example.com"
  },
  work: [
    { title: "Afya", type: "Nutrition clinic and bakery, desktop design", blurb: "Shop, clinical services and recipes for a wellness brand.", demo: "demos/afya/", shot: "assets/screenshots/afya.png", live: "" },
    { title: "True Barbers", type: "Luxury barbershop, mobile design", blurb: "Booking-led site for a two-branch Nairobi barbershop.", demo: "demos/true-barbers/", shot: "assets/screenshots/true-barbers.png", live: "" }
    // add the other three the same way
  ],
  pricing: {
    depositPct: 50,
    groups: [
      { id: "pkg", title: "Choose a package", items: [
        { id: "landing", label: "Landing page", note: "One scrolling page, mobile friendly", price: 25000 },
        { id: "business", label: "Business site", note: "Up to 5 pages", price: 60000 },
        { id: "booking", label: "Booking or shop site", note: "Up to 8 pages with booking or ordering flow", price: 120000 }
      ]},
      { id: "add", title: "Add-ons", multi: true, items: [
        { id: "pages", label: "Extra pages", note: "Per page", price: 8000, qty: true },
        { id: "wa", label: "WhatsApp chat button", price: 3000 },
        { id: "form", label: "Enquiry form", note: "Sends to your email", price: 5000 },
        { id: "seo", label: "Google Maps and SEO setup", price: 8000 },
        { id: "copy", label: "Copywriting", note: "Per page", price: 4000, qty: true }
      ]},
      { id: "dom", title: "Domain name", items: [
        { id: "own", label: "I already own a domain", price: 0 },
        { id: "coke", label: ".co.ke domain", note: "Renews every year", price: 1500, per: "year" },
        { id: "com", label: ".com domain", note: "Renews every year", price: 2000, per: "year" }
      ]},
      { id: "ssl", title: "HTTPS", items: [
        { id: "sslset", label: "HTTPS setup", note: "The certificate itself is free; this covers setup and renewal checks", price: 2000 }
      ]},
      { id: "host", title: "Hosting", items: [
        { id: "free", label: "Static hosting (GitHub Pages or Netlify)", note: "Free platform, one-off deployment fee", price: 3000 },
        { id: "cpanel", label: "Shared hosting", note: "For sites that need email or a database", price: 6000, per: "year" },
        { id: "care", label: "Hosting plus maintenance plan", note: "Updates, backups, small edits", price: 24000, per: "year" }
      ]}
    ]
  }
};
