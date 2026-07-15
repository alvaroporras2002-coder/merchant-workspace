export function renderFollowups({ mount }) {
  mount.innerHTML = `
    <div class="split">
      <div class="panel">
        <div class="section-title">
          <h3>Follow-up calendar</h3>
          <span class="hint">Week, day, and month views</span>
        </div>
        <div class="actions" style="margin-bottom:12px">
          <button class="btn ghost" type="button">Day</button>
          <button class="btn ghost" type="button">Week</button>
          <button class="btn ghost" type="button">Month</button>
        </div>
        <div class="calendar-grid" id="calendarGrid"></div>
      </div>

      <div class="panel" id="followupWorkbench">
        <div class="section-title">
          <h3>Create follow-up</h3>
          <span class="hint">Add scheduled actions</span>
        </div>
        <div class="empty">Paste your follow-up editor here.</div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title"><h3>Upcoming follow-ups</h3></div>
      <div class="grid cols-3" id="upcomingFollowups">
        <div class="merchant-card"><div class="card-title">Upcoming item</div><div class="card-sub">No data loaded yet.</div></div>
      </div>
    </div>
  `;
}
