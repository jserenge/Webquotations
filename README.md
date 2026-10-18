# Studio Portfolio & Transparent Quote Builder

A premium, editorial portfolio and interactive project estimator designed for high-calibre web designers and creative engineers. Built with typographic rigor, sub-second performance, and quiet luxury.

## Architecture & Directory Layout

```
Webquotations/
├── index.html                  # About you + editorial portfolio cards + live device preview
├── quote/
│   └── index.html              # Dedicated interactive project investment estimator
├── assets/
│   ├── site-data.js            # Central configuration: bio, philosophy, demos & pricing
│   ├── css/
│   │   └── main.css            # Editorial design system (typography, light/dark themes, responsive)
│   └── screenshots/            # Hi-res demo mockups & screenshots (afya, true-barbers, etc.)
├── demos/                      # Standalone interactive concept demos
│   ├── afya/                   # Nutrition clinic & bakery flagship demo
│   ├── true-barbers/           # Luxury gentlemen's grooming & booking demo
│   └── kifaru-safari/          # Bespoke wilderness expeditions demo
├── incoming/                   # Staging area for new design exports
└── tools/
    └── localize.py             # Script to build localized offline demos from incoming/
```

## Adding New Demos
1. Place your design export files (`code.html` and optionally `screen.png`) into `incoming/<slug>/` (e.g. `incoming/maison-mara/`).
2. Run `python tools/localize.py` to localize remote assets into `demos/<slug>/assets/` and generate `demos/<slug>/index.html`.
3. Add the project entry into `window.SITE.work` inside `assets/site-data.js`.

## Customizing Your Profile & Pricing
All studio details, credentials, portfolio items, and pricing formulas live in `assets/site-data.js`:
- **Identity**: Name, bio, tagline, location, WhatsApp number, email.
- **Pricing**: Base packages, add-ons with quantities, domain extensions, SSL, and hosting tiers.
- **Deposit**: Configurable deposit percentage (defaults to 50%).

## Deployment (GitHub Pages)
1. Push to your GitHub repository:
   ```sh
   git add .
   git commit -m "Update portfolio & quote builder"
   git push origin main
   ```
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
4. Your site will be live globally on GitHub's high-speed CDN.
