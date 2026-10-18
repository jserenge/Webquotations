// tests/allocateStageDays.test.js
// Node test for allocateStageDays and timeline calculation
// Run: node tests/allocateStageDays.test.js

function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }

function allocateStageDays(totalDays, stages) {
  const w = (stages || []).map(s => Number(s.w) || 0);
  const exact = w.map(x => x * totalDays);
  const base = exact.map(x => Math.floor(x));
  for (let i = 0; i < base.length; i++) if (base[i] < 1) base[i] = 1;
  let assigned = base.reduce((a,b) => a + b, 0);
  const remainders = exact.map((x,i) => ({ i, rem: x - Math.floor(x) }));
  let remaining = totalDays - assigned;
  if (remaining > 0) {
    remainders.sort((a,b) => b.rem - a.rem);
    for (let k = 0; k < remainders.length && remaining > 0; k++, remaining--) base[remainders[k].i] += 1;
  } else if (remaining < 0) {
    remainders.sort((a,b) => a.rem - b.rem);
    for (let k = 0; k < remainders.length && remaining < 0; k++) {
      const idx = remainders[k].i;
      if (base[idx] > 1) { base[idx] -= 1; remaining++; }
    }
  }
  const finalSum = base.reduce((a,b) => a + b, 0);
  if (finalSum !== totalDays) {
    const diff = totalDays - finalSum;
    base[0] = base[0] + diff;
  }
  return base;
}

// Sample journey weights (must match assets/site-data.js)
const stages = [ {w:0.10}, {w:0.25}, {w:0.35}, {w:0.20}, {w:0.10} ];

function computeRawDays(pkgDays, addons) {
  // addons: array of { days, daysPerQty, qty, checked }
  let raw = pkgDays;
  addons.forEach(a => { if (a.checked) raw += (Number(a.days||0) + (Number(a.daysPerQty||0) * (a.qty || 1))); });
  return raw;
}

const timeline = { minDays:5, maxDays:22 };

const scenarios = [
  {name:'Default landing', pkgDays:5, addons:[]},
  {name:'Business flagship', pkgDays:10, addons:[]},
  {name:'Booking platform', pkgDays:20, addons:[]},
  {name:'Booking + 10 pages', pkgDays:20, addons:[{id:'pages', daysPerQty:1, qty:10, checked:true}]},
  {name:'Landing + copy(2) + form', pkgDays:5, addons:[{id:'copy', daysPerQty:1, qty:2, checked:true},{id:'form', days:1, checked:true}]},
  {name:'Business + seo + wa', pkgDays:10, addons:[{id:'seo', days:1, checked:true},{id:'wa', days:0, checked:true}]},
  {name:'Landing + many small addons', pkgDays:5, addons:[{id:'pages', daysPerQty:1, qty:4, checked:true},{id:'copy', daysPerQty:1, qty:3, checked:true},{id:'form', days:1, checked:true}]}
];

let allPass = true;
scenarios.forEach(s => {
  const raw = computeRawDays(s.pkgDays, s.addons);
  const total = clamp(Math.round(raw), timeline.minDays, timeline.maxDays);
  const allocation = allocateStageDays(total, stages);
  const sum = allocation.reduce((a,b)=>a+b,0);
  const minEach = allocation.every(x => x >= 1);
  const withinBounds = total >= timeline.minDays && total <= timeline.maxDays;

  console.log(`Scenario: ${s.name}`);
  console.log(`  rawDays: ${raw}, totalDays(clamped): ${total}`);
  console.log(`  allocation: [${allocation.join(', ')}], sum: ${sum}, minEach>=1: ${minEach}, withinBounds: ${withinBounds}`);

  if (sum !== total || !minEach || !withinBounds) {
    console.error('  => Test FAILED for scenario:', s.name);
    allPass = false;
  } else {
    console.log('  => OK');
  }
});

if (!allPass) {
  console.error('\nSome tests failed.');
  process.exit(1);
} else {
  console.log('\nAll tests passed.');
  process.exit(0);
}
