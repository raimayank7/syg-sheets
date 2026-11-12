/* sheets.shareyourgroup.com: function finder and print button */
(function () {
  'use strict';
  var d = document, q = d.getElementById('fq');
  d.addEventListener('click', function (e) { if (e.target.closest('[data-print]')) window.print(); });
  if (!q) return;
  var items = d.querySelectorAll('.fl li'), heads = d.querySelectorAll('.fnx h2[id]'), count = d.querySelector('[data-fcount]');
  function run() {
    var words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean), n = 0;
    for (var i = 0; i < items.length; i++) {
      var k = items[i].getAttribute('data-k'), ok = true;
      for (var j = 0; j < words.length; j++) if (k.indexOf(words[j]) < 0) { ok = false; break; }
      items[i].hidden = !ok; if (ok) n++;
    }
    for (var h = 0; h < heads.length; h++) {
      var ul = heads[h].nextElementSibling;
      heads[h].hidden = ul.hidden = !ul.querySelector('li:not([hidden])');
    }
    if (count) count.textContent = words.length ? (n ? n + ' page' + (n === 1 ? '' : 's') + ' found' : 'Nothing found. Try a simpler word, such as "count", "date" or "text".') : '';
  }
  q.addEventListener('input', run);
  if (location.hash.indexOf('#q=') === 0) { q.value = decodeURIComponent(location.hash.slice(3)); run(); }
})();
