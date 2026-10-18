global.window = {};
require('../assets/site-data.js');
const T = require('../assets/timeline.js');
const assert = require('assert');
const P = window.SITE.pricing;
const run = (ids, qty = {}) => T.totalDays(P.groups, (g, i) => ({ checked: ids.includes(i), qty: qty[i] || 1 }), P.timeline);
const adds = ['pages', 'copy', 'wa', 'form', 'seo'];
let n = 0;
for (const p of ['landing', 'business', 'booking'])
  for (let m = 0; m < 32; m++)
    for (const qp of [1, 5, 20]) for (const qc of [1, 5, 20]) {
      const ids = [p, ...adds.filter((_, k) => (m >> k) & 1)];
      const total = run(ids, { pages: qp, copy: qc });
      const d = T.allocateStageDays(total, P.journey);
      assert.strictEqual(d.reduce((a, b) => a + b, 0), total);
      assert(d.every(x => x >= 1));
      assert(total >= 5 && total <= 22);
      n++;
    }
assert.strictEqual(run(['landing']), 5);
assert.strictEqual(run(['business']), 10);
assert.strictEqual(run(['booking']), 20);
assert.strictEqual(run(['booking', 'pages'], { pages: 10 }), 22);
assert(T.deliveryLine(5).includes('(about 1 week)'));
console.log('OK', n, 'combinations');
