export function renderResources({ mount }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>Resource hub</h3>
        <span class="hint">Search by type, pin favorites, copy links, edit list</span>
      </div>
      <div class="resources-toolbar">
        <div class="field"><label>Search</label><input placeholder="Search name, description, or URL..." /></div>
        <div class="field"><label>Type</label><select><option>All types</option></select></div>
        <div class="field"><label>Sort</label><select><option>Favorites first</option></select></div>
        <div class="resource-toolbar-actions">
          <button class="btn ghost">Clear</button>
          <button class="btn red">Reset defaults</button>
        </div>
      </div>
    </div>

    <div class="split">
      <section class="panel">
        <div class="section-title"><h3>Pinned links</h3><span class="hint">Your most used shortcuts</span></div>
        <div class="grid cols-2" id="resourceFavorites"></div>
        <div class="section-title" style="margin-top:14px"><h3>All links</h3><span class="hint">Grouped by type</span></div>
        <div id="resourceGroups"></div>
      </section>

      <section class="panel">
        <div class="section-title"><h3>Edit resource</h3><span class="hint">Select a card to edit it</span></div>
        <div class="field"><label>Name</label><input placeholder="Resource name" /></div>
        <div class="field"><label>Type</label><select><option>Systems</option></select></div>
        <div class="field"><label>Emoji</label><input placeholder="📎" maxlength="8" /></div>
        <div class="field"><label>URL</label><input placeholder="https://..." /></div>
        <div class="field"><label>Description</label><textarea placeholder="What does this link do?"></textarea></div>
      </section>
    </div>
  `;
}
