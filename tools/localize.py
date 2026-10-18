"""Turns Stitch exports into static demos.
Put each export in incoming/<slug>/ (code.html and, optionally, screen.png), then run:  python tools/localize.py
Needs an internet connection (it downloads the images). Safe to run again."""
import re, shutil, urllib.request
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
EXT = {'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp', 'image/gif': '.gif', 'image/svg+xml': '.svg'}
BANNER = '''<div id="cd" style="position:fixed;top:6px;left:50%;transform:translateX(-50%);z-index:99999;background:#000c;color:#fff;font:12px system-ui;padding:4px 12px;border-radius:99px">Concept demo</div><script>document.addEventListener('click',function(e){var a=e.target.closest('a[href="#"][data-path]');if(a){e.preventDefault();var d=document.getElementById('cd');d.textContent='Demo: this page is not included';setTimeout(function(){d.textContent='Concept demo'},2000)}})</script>'''
for src in sorted((ROOT / 'incoming').glob('*/code.html')):
    slug = src.parent.name
    out = ROOT / 'demos' / slug
    (out / 'assets').mkdir(parents=True, exist_ok=True)
    html = src.read_text(encoding='utf-8')
    for i, u in enumerate(sorted(set(re.findall(r'(?:src=["\']|url\(["\']?)(https://[^"\')\s]+)', html)))):
        try:
            r = urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30)
            ext = EXT.get(r.headers.get_content_type())
            if not ext: continue  # scripts, fonts etc. stay as they are
            name = f'img{i:02d}{ext}'
            (out / 'assets' / name).write_bytes(r.read())
            html = html.replace(u, 'assets/' + name)
        except Exception as e:
            print('could not download', u[:70], '-', e)
    html = re.sub(r'<head[^>]*>', lambda m: m.group(0) + '<meta name="robots" content="noindex">', html, 1)
    html = html.replace('</body>', BANNER + '</body>')
    (out / 'index.html').write_text(html, encoding='utf-8')
    shot = src.parent / 'screen.png'
    if shot.exists(): shutil.copy(shot, ROOT / 'assets' / 'screenshots' / f'{slug}.png')
    print('built demos/' + slug)
