(function (root) {
  function allocateStageDays(total, stages) {
    const exact = stages.map(s => s.w * total);
    const days = exact.map(x => Math.max(1, Math.floor(x)));
    let diff = total - days.reduce((a, b) => a + b, 0);
    const order = exact.map((x, i) => i).sort((a, b) => (exact[b] % 1) - (exact[a] % 1));
    for (let k = 0; diff > 0; k++, diff--) days[order[k % order.length]]++;
    for (let k = order.length - 1; diff < 0 && k >= 0; k--) {
      if (days[order[k]] > 1) {
        days[order[k]]--;
        diff++;
      }
    }
    return days;
  }

  function totalDays(groups, pick, timeline) {
    let raw = 0;
    groups.forEach(g => g.items.forEach(it => {
      const s = pick(g.id, it.id);
      if (!s || !s.checked) return;
      raw += (it.days || 0) + (it.daysPerQty || 0) * (it.qty ? s.qty : 1);
    }));
    return Math.min(timeline.maxDays, Math.max(timeline.minDays, Math.round(raw)));
  }

  function weeksText(total) {
    const w = Math.max(1, Math.round(total / 5));
    return 'about ' + w + (w === 1 ? ' week' : ' weeks');
  }

  function deliveryLine(total) {
    return 'Estimated delivery: About ' + total + ' business days (' + weeksText(total) + '). Clock starts when deposit and content are received.';
  }

  const api = { allocateStageDays, totalDays, weeksText, deliveryLine };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Timeline = api;
})(typeof window !== 'undefined' ? window : globalThis);
