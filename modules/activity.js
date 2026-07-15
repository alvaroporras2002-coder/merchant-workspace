export function renderActivity({ mount }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>Monthly Activity Tracker</h3>
        <span class="hint">Calendar of what was completed each day</span>
      </div>
      <div class="actions" style="margin-bottom:12px">
        <button class="btn ghost" type="button">Previous Month</button>
        <button class="btn blue" type="button">Focus Today</button>
        <button class="btn ghost" type="button">Next Month</button>
        <button class="btn purple" type="button">Download Monthly CSV</button>
      </div>
      <div class="calendar-grid" id="activityCalendarGrid"></div>
    </div>

    <div class="split">
      <div class="panel">
        <div class="section-title">
          <h3>Selected Day Actions</h3>
          <span class="hint">Daily breakdown</span>
        </div>
        <div class="grid cols-4" id="activityDailyMetrics"></div>
        <div class="list" id="activityDailyDetail" style="margin-top:12px"></div>
      </div>

      <div class="panel">
        <div class="section-title">
          <h3>Weekly Report</h3>
          <span class="hint">Day-by-day breakdown</span>
        </div>
        <div class="grid cols-2" id="activityWeeklyMetrics"></div>
        <div class="table-wrap" style="max-height:360px;margin-top:12px">
          <table class="notion-table">
            <thead>
              <tr>
                <th>Date</th><th>Credited Min</th><th>Real Min</th><th>Calls</th><th>Photos</th><th>Stores</th><th>Follow-ups</th>
              </tr>
            </thead>
            <tbody id="activityWeeklyRows"></tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title">
        <h3>Monthly Ledger</h3>
        <span class="hint">Every day of the selected month</span>
      </div>
      <div class="table-wrap" style="max-height:520px">
        <table class="notion-table">
          <thead>
            <tr>
              <th>Date</th><th>Credited Minutes</th><th>Real Minutes</th><th>Calls</th><th>Photos</th><th>Stores Touched</th><th>Follow-ups</th><th>GMV Touched</th><th>Download</th>
            </tr>
          </thead>
          <tbody id="activityLedgerRows"></tbody>
        </table>
      </div>
    </div>
  `;
}
