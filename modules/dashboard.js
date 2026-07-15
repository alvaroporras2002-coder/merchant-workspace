export function renderDashboard({ mount, state }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>Today Focus</h3>
        <span class="hint">Fast workflow tools</span>
      </div>
      <div class="actions">
        <button class="btn green" data-action="nextMerchant">Next Best Merchant</button>
        <button class="btn blue" data-action="openCallConsole">Open Work Hub</button>
        <button class="btn purple" data-action="openCommandBar">Command Bar</button>
        <button class="btn ghost" data-action="toggleTimezones">Show / Hide Timezones</button>
        <button class="btn ghost" data-action="toggleFocusMode">Toggle Focus Mode</button>
        <button class="btn amber" data-action="dailyCloseout">Close Day</button>
      </div>
    </div>

    <div class="panel">
      <div class="section-title">
        <h3>Command metrics</h3>
        <span class="hint">Loaded from local data</span>
      </div>
      <div class="grid cols-4" id="metricGrid">
        <div class="metric"><div class="k">Merchants</div><div class="v">${state.records.length}</div><div class="s">Imported merchants loaded</div></div>
        <div class="metric"><div class="k">Selected</div><div class="v">${state.selectedUid ? "1" : "0"}</div><div class="s">Current merchant selection</div></div>
        <div class="metric"><div class="k">View</div><div class="v">${state.currentView}</div><div class="s">Active workspace section</div></div>
        <div class="metric"><div class="k">Status</div><div class="v">Ready</div><div class="s">Module split loaded</div></div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title">
        <h3>What to call next</h3>
        <span class="hint">Hook your merchant logic here</span>
      </div>
      <div class="grid cols-3" id="nextCallCards">
        <div class="merchant-card">
          <div class="card-title">Next merchant</div>
          <div class="card-sub">Connect your prioritization logic</div>
        </div>
        <div class="merchant-card">
          <div class="card-title">Need follow-up</div>
          <div class="card-sub">Due merchants will appear here</div>
        </div>
        <div class="merchant-card">
          <div class="card-title">Already called</div>
          <div class="card-sub">Recent activity summary</div>
        </div>
      </div>
    </div>
  `;
}
