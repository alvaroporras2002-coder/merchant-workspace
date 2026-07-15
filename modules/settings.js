export function renderSettings({ mount }) {
  mount.innerHTML = `
    <section class="panel custom-theme-panel">
      <div class="section-title">
        <h3>Profile photo + adaptive palette</h3>
        <span class="hint">Drop an image to update the avatar and colors</span>
      </div>
      <div class="custom-theme-grid" style="display:grid;grid-template-columns:minmax(270px,.8fr) minmax(300px,1.2fr);gap:14px">
        <div class="custom-theme-dropzone">
          <div class="custom-theme-preview"></div>
          <div>
            <strong>Drop profile image here</strong>
            <span>The photo becomes the avatar and the workspace can inherit its colors.</span>
          </div>
        </div>
        <div class="custom-theme-info">
          <div class="custom-theme-copy">
            <strong>Automatic color matching</strong>
            <span>Use a logo, profile picture, brand image, or restaurant photo.</span>
          </div>
          <div class="palette-swatches">
            <div class="palette-swatch"><div class="palette-swatch-color" style="background:#eb1700;height:32px"></div><div class="palette-swatch-label">Accent</div></div>
            <div class="palette-swatch"><div class="palette-swatch-color" style="background:#ff5a3d;height:32px"></div><div class="palette-swatch-label">Secondary</div></div>
            <div class="palette-swatch"><div class="palette-swatch-color" style="background:#101722;height:32px"></div><div class="palette-swatch-label">Panel</div></div>
          </div>
          <div class="actions">
            <button class="btn blue" type="button">Choose Photo</button>
            <button class="btn ghost" type="button">Reset Palette</button>
          </div>
          <div class="custom-theme-status">No custom photo applied yet.</div>
        </div>
      </div>
    </section>

    <div class="split">
      <section class="panel">
        <div class="section-title"><h3>Clock control</h3></div>
        <div class="grid cols-2">
          <div class="field"><label>Clock Mode</label><select><option>LIVE</option><option>MANUAL</option></select></div>
          <div class="field"><label>Manual Timestamp</label><input type="datetime-local" /></div>
          <div class="field"><label>User Local Timezone</label><input value="America/Costa_Rica" /></div>
          <div class="field"><label>Safe Start</label><input type="time" value="09:30" /></div>
          <div class="field"><label>Safe End</label><input type="time" value="16:30" /></div>
          <div class="field"><label>Call Goal</label><input type="number" value="70" /></div>
        </div>
        <div class="actions" style="margin-top:12px">
          <button class="btn blue">Save Settings</button>
          <button class="btn red">Reset All Local Logs</button>
        </div>
      </section>

      <section class="panel">
        <div class="section-title"><h3>Workspace Health</h3><span class="hint">Data quality and workflow checks</span></div>
        <div class="grid cols-2" id="workspaceHealthGrid">
          <div class="health-card"><div class="h">State</div><div class="n">OK</div><div class="d">Settings module loaded</div></div>
          <div class="health-card"><div class="h">Modules</div><div class="n">9</div><div class="d">Split architecture ready</div></div>
        </div>
      </section>
    </div>
  `;
}
