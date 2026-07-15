export function renderWorkHub({ mount }) {
  mount.innerHTML = `
    <div class="split">
      <section class="panel" id="section-work-board">
        <div class="section-title">
          <h3>Call board</h3>
          <span class="hint">Queue and merchant prioritization</span>
        </div>
        <div class="toolbar" style="grid-template-columns:1.6fr .9fr .9fr auto">
          <div class="field"><label>Search</label><input id="callSearch" placeholder="Search merchant..." /></div>
          <div class="field"><label>View</label><select id="callViewFilter"><option>All merchants</option></select></div>
          <div class="field"><label>Market</label><select id="callMarket"><option>All markets</option></select></div>
          <button class="btn blue" type="button" data-action="openProfile">Merchant Profile</button>
        </div>
        <div class="grid cols-2" id="callBoardCards" style="margin-top:12px">
          <div class="merchant-card"><div class="card-title">Merchant card</div><div class="card-sub">Render your merchant cards here.</div></div>
          <div class="merchant-card"><div class="card-title">Merchant card</div><div class="card-sub">Render your merchant cards here.</div></div>
        </div>
      </section>

      <section class="panel" id="section-work-console">
        <div class="section-title">
          <h3>Call console</h3>
          <span class="hint">Status, notes, photos, promos</span>
        </div>
        <div class="console">
          <div class="empty">Move your current console logic into this module.</div>
        </div>
      </section>
    </div>

    <div class="panel work-hub-profile-section" id="section-profile-search">
      <div class="section-title">
        <h3>Merchant profile</h3>
        <span class="hint">Profile, timeline and editing</span>
      </div>
      <div class="toolbar" style="grid-template-columns:1.4fr 1fr auto auto">
        <div class="field"><label>Search merchant</label><input id="profileSearch" placeholder="Search..." /></div>
        <div class="field"><label>Selected merchant</label><select id="merchantSelect"><option value="">None</option></select></div>
        <button class="btn blue" type="button" data-action="loadSelectedProfile">Load</button>
        <button class="btn ghost" type="button" data-scroll-target="section-work-console">Back to Console</button>
      </div>
    </div>

    <div class="split work-hub-profile-section" id="section-profile-info-wrap">
      <section class="panel" id="profileMain"></section>
      <section class="panel" id="profileTimeline"></section>
    </div>

    <section class="panel" id="merchantEditor"></section>
  `;
}
