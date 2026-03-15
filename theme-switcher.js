/**
 * theme-switcher.js — IT-Study
 * 2 ta tema: Qorong'i (dark) va Oq (light)
 */
(function () {

  /* ── Panel HTML ─────────────────────────── */
  const html = `
    <div class="theme-fab" id="themeFab">
      <div class="theme-panel" id="themePanel">
        <div class="theme-panel-title">🎨 Temani tanlang</div>

        <div class="theme-option" data-theme="theme-dark" onclick="setTheme('theme-dark')">
          <div class="theme-swatch theme-swatch-dark"></div>
          <div class="theme-info">
            <span class="theme-name">Qorong'i</span>
            <span class="theme-desc">Ko'k-qora, standart</span>
          </div>
          <div class="theme-check">✓</div>
        </div>

        <div class="theme-option" data-theme="theme-light" onclick="setTheme('theme-light')">
          <div class="theme-swatch theme-swatch-light"></div>
          <div class="theme-info">
            <span class="theme-name">Oq</span>
            <span class="theme-desc">Yorug', toza ko'rinish</span>
          </div>
          <div class="theme-check">✓</div>
        </div>
      </div>

      <button class="theme-fab-btn" id="themeFabBtn"
              onclick="toggleThemePanel()"
              aria-label="Temani o'zgartirish">
        🎨
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);

  /* ── Saqlangan temani yuklash ─────────── */
  const saved = localStorage.getItem('it-theme') || 'theme-dark';
  applyTheme(saved);

  /* ── Panel ochish/yopish ──────────────── */
  window.toggleThemePanel = function () {
    document.getElementById('themePanel').classList.toggle('open');
  };

  /* ── Tema qo'llash ────────────────────── */
  window.setTheme = function (theme) {
    applyTheme(theme);
    localStorage.setItem('it-theme', theme);
    setTimeout(() => {
      document.getElementById('themePanel').classList.remove('open');
    }, 250);
  };

  function applyTheme(theme) {
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-1', 'theme-2', 'theme-3', 'light', 'dark');
    document.body.classList.add(theme);
    document.querySelectorAll('.theme-option').forEach(o => {
      o.classList.toggle('active', o.dataset.theme === theme);
    });
    /* Eski themeBtn ikonasi */
    const btn = document.getElementById('themeBtn') || document.getElementById('themeToggle');
    if (btn) btn.style.display = 'none';
  }

  /* ── Tashqarida bosish — yopish ───────── */
  document.addEventListener('click', function (e) {
    const fab = document.getElementById('themeFab');
    if (fab && !fab.contains(e.target)) {
      document.getElementById('themePanel').classList.remove('open');
    }
  });

})();