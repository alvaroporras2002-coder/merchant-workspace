export function renderPipeline({ mount }) {
  mount.innerHTML = `
    <div class="panel">
      <div class="section-title">
        <h3>Pipeline board</h3>
        <span class="hint">All affiliated merchants are shown in their current status lanes</span>
      </div>

      <div class="toolbar">
        <div class="field">
          <label>Search cards</label>
          <input id="pipelineSearch" placeholder="Search merchant, parent, market..." />
        </div>
        <div class="field">
          <label>Market</label>
          <select id="pipelineMarket"><option value="">All</option></select>
        </div>
        <div class="field">
          <label>Owner</label>
          <select id="pipelineOwner"><option value="">All</option></select>
        </div>
        <div class="field">
          <label>Sort</label>
          <select id="pipelineSort">
            <option value="priority">Priority</option>
            <option value="gmv">GMV</option>
            <option value="coverage">Coverage</option>
            <option value="lastCall">Last call</option>
          </select>
        </div>
        <button class="btn ghost" type="button" data-action="clearPipelineFilters">Clear</button>
      </div>
    </div>

    <div class="kanban" id="pipelineBoard">
      <div class="lane">
        <div class="lane-head"><div><div class="lane-title">To Call</div><div class="lane-sub">Queue</div></div><span class="pill blue">0</span></div>
        <div class="card-list"></div>
      </div>
      <div class="lane">
        <div class="lane-head"><div><div class="lane-title">Follow-up</div><div class="lane-sub">Needs action</div></div><span class="pill amber">0</span></div>
        <div class="card-list"></div>
      </div>
      <div class="lane">
        <div class="lane-head"><div><div class="lane-title">Healthy</div><div class="lane-sub">Good coverage</div></div><span class="pill green">0</span></div>
        <div class="card-list"></div>
      </div>
    </div>
  `;
}
