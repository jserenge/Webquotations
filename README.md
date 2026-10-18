# Quote and portfolio site

1. Edit `assets/site-data.js`: your name, WhatsApp number, portfolio entries and all prices.
2. For each Stitch design, unzip the export and copy `code.html` (and `screen.png`) into `incoming/<name>/`, for example `incoming/true-barbers/`.
3. Run `python tools/localize.py`. It downloads the images and builds `demos/<name>/index.html`.
4. Push to GitHub, then Settings > Pages > Deploy from branch > `main` / root.

The page has `noindex` so it stays off Google. Remove that line in `index.html` if you want it public.
