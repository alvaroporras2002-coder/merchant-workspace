export function renderGpts({ mount }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>GPT hub</h3>
        <span class="hint">Search, pin, and launch your GPTs</span>
      </div>
      <div class="gpts-toolbar">
        <div class="field"><label>Search</label><input placeholder="Search name, description, creator, or URL..." /></div>
        <div class="field"><label>Access</label><select><option>All access levels</option></select></div>
        <div class="field"><label>Creator</label><select><option>All creators</option></select></div>
        <div class="field"><label>Sort</label><select><option>Favorites first</option></select></div>
        <div class="actions"><button class="btn ghost">Clear</button><button class="btn red">Reset defaults</button></div>
      </div>
    </div>
    <div class="split">
      <section class="panel">
        <div class="section-title"><h3>Pinned GPTs</h3><span class="hint">Fast launch shortcuts</span></div>
        <div class="grid cols-2" id="gptFavorites"></div>
        <div class="section-title" style="margin-top:14px"><h3>All GPTs</h3><span class="hint">Grouped by purpose</span></div>
        <div id="gptGroups"></div>
      </section>
      <section class="panel">
        <div class="section-title"><h3>Edit GPT</h3><span class="hint">Select a card to edit it</span></div>
        <div class="empty">Your editor goes here.</div>
      </section>
    </div>
  `;
}
