import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BANNER = '''<div id="cd" style="position:fixed;top:6px;left:50%;transform:translateX(-50%);z-index:99999;background:#000c;color:#fff;font:12px system-ui;padding:4px 12px;border-radius:99px;border:1px solid #444;">Concept demo</div><script>document.addEventListener('click',function(e){var a=e.target.closest('a[href="#"][data-path]');if(a){e.preventDefault();var d=document.getElementById('cd');d.textContent='Demo: this page is not included';setTimeout(function(){d.textContent='Concept demo'},2000)}})</script>'''

for slug in ['afya', 'true-barbers', 'luxury-kenya']:
    src = ROOT / 'incoming' / slug / 'code.html'
    if not src.exists():
        print('Skipping', slug)
        continue
    out = ROOT / 'demos' / slug
    out.mkdir(parents=True, exist_ok=True)
    html = src.read_text(encoding='utf-8')
    if 'noindex' not in html:
        html = re.sub(r'<head[^>]*>', lambda m: m.group(0) + '<meta name="robots" content="noindex">', html, 1)
    if 'Concept demo' not in html:
        if '</body>' in html:
            html = html.replace('</body>', BANNER + '</body>')
        else:
            html += BANNER
    (out / 'index.html').write_text(html, encoding='utf-8')
    print('Generated demos/' + slug + '/index.html')

# Also ensure kifaru-safari has its code in incoming
kifaru_src = ROOT / 'demos' / 'kifaru-safari' / 'index.html'
if kifaru_src.exists():
    (ROOT / 'incoming' / 'kifaru-safari').mkdir(parents=True, exist_ok=True)
    (ROOT / 'incoming' / 'kifaru-safari' / 'code.html').write_text(kifaru_src.read_text(encoding='utf-8'), encoding='utf-8')
    print('Synced kifaru-safari to incoming')
