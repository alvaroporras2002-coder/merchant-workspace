export function renderLogs({ mount }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>Photo logs control</h3>
        <span class="hint">Bulk actions and selection</span>
      </div>
      <div class="actions">
        <button class="btn red" type="button">Delete Selected Call Logs</button>
        <button class="btn red" type="button">Delete Selected Photo Logs</button>
        <button class="btn red" type="button">Delete All Selected Logs</button>
        <button class="btn ghost" type="button">Clear Selection</button>
      </div>
    </div>

    <div class="split">
      <section class="panel">
        <div class="section-title"><h3>Call logs</h3><span class="hint">Imported call history</span></div>
        <div class="table-wrap">
          <table class="notion-table">
            <thead><tr><th>Date</th><th>Merchant</th><th>Outcome</th><th>Real</th><th>Credited</th><th>Notes</th></tr></thead>
            <tbody id="callLogRows"></tbody>
          </table>
        </div>
      </section>

      <section class="panel">
        <div class="section-title"><h3>Photo logs</h3><span class="hint">Imported photo history</span></div>
        <div class="table-wrap">
          <table class="notion-table">
            <thead><tr><th>Date</th><th>Merchant</th><th>Photos</th><th>Coverage</th><th>Status</th><th>Notes</th></tr></thead>
            <tbody id="photoLogRows"></tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}
