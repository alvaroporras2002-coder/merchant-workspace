import { VIEW_TABS, PAGE_COPY } from "./data/catalogs.js";
import { TIMEZONES } from "./data/timezones.js";
import { MERCHANTS } from "./data/merchants.js";

import { renderDashboard } from "./modules/dashboard.js";
import { renderPipeline } from "./modules/pipeline.js";
import { renderWorkHub } from "./modules/workhub.js";
import { renderFollowups } from "./modules/followups.js";
import { renderActivity } from "./modules/activity.js";
import { renderLogs } from "./modules/logs.js";
import { renderGpts } from "./modules/gpts.js";
import { renderResources } from "./modules/resources.js";
import { renderSettings } from "./modules/settings.js";

const state = {
  currentView: "dashboard",
  records: Array.isArray(MERCHANTS) ? MERCHANTS : [],
  selectedUid: "",
  timezones: TIMEZONES,
  sidebarCollapsed: localStorage.getItem("workspace_sidebar_collapsed") === "1",
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function pageCopy(view) {
  return PAGE_COPY[view] || PAGE_COPY.dashboard;
}

function renderNav() {
  const nav = $("#workspaceTopNav");
  if (!nav) return;

  nav.innerHTML = `
    <div class="workspace-topnav-head">
      <span>Workspace</span>
      <small>Quick navigation</small>
    </div>
    <div class="workspace-topnav-scroll">
      ${VIEW_TABS.map(tab => `
        <button class="nav-btn ${tab.view === state.currentView ? "active" : ""}" data-view="${tab.view}" type="button">
          <span class="nav-emoji">${tab.emoji}</span>
          <span class="nav-label">${esc(tab.label)}</span>
          <span class="nav-count" id="nav-${tab.view}Count">—</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTimezoneStrip() {
  const mount = $("#tzStrip");
  if (!mount) return;

  const now = new Date();
  mount.innerHTML = state.timezones.map(tz => {
    let time = "—";
    try {
      time = new Intl.DateTimeFormat("en-US", {
        timeZone: tz.code === "UTC" ? "UTC" : "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);
    } catch {
      time = "—";
    }
    return `
      <div class="tz-card">
        <div class="tz-code">${esc(tz.code)}</div>
        <div class="tz-name">${esc(tz.name)}</div>
        <div class="tz-note">${esc(tz.note)}</div>
        <div class="tz-time">${esc(time)}</div>
        <div class="tz-status">Ready</div>
      </div>
    `;
  }).join("");
}

function renderView() {
  const mount = $(`#view-${state.currentView}`);
  if (!mount) return;

  const [title, subtitle] = pageCopy(state.currentView);
  document.title = `${title} · Merchant Workspace`;

  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `view-${state.currentView}`));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === state.currentView));

  if (state.currentView === "dashboard") renderDashboard({ mount, state, toast });
  if (state.currentView === "pipeline") renderPipeline({ mount, state, toast });
  if (state.currentView === "callControl") renderWorkHub({ mount, state, toast });
  if (state.currentView === "followups") renderFollowups({ mount, state, toast });
  if (state.currentView === "activity") renderActivity({ mount, state, toast });
  if (state.currentView === "logs") renderLogs({ mount, state, toast });
  if (state.currentView === "gpts") renderGpts({ mount, state, toast });
  if (state.currentView === "resources") renderResources({ mount, state, toast });
  if (state.currentView === "settings") renderSettings({ mount, state, toast });

  const titleEl = $("#viewTitle");
  const subEl = $("#viewSubtitle");
  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
}

function showView(view) {
  if (!VIEW_TABS.some(t => t.view === view)) return;
  state.currentView = view;
  document.body.dataset.view = view;
  renderNav();
  renderView();
}

function bindGlobalActions() {
  document.addEventListener("click", e => {
    const navBtn = e.target.closest(".nav-btn[data-view]");
    if (navBtn) {
      e.preventDefault();
      showView(navBtn.dataset.view);
      return;
    }

    const tab = e.target.closest("[data-import-tab]");
    if (tab) {
      const value = tab.dataset.importTab;
      $$(".import-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.importTab === value));
      $("#importPaneMerchants")?.classList.toggle("active", value === "merchants");
      $("#importPaneCalls")?.classList.toggle("active", value === "calls");
      return;
    }

    const action = e.target.closest("[data-action]");
    if (!action) return;

    switch (action.dataset.action) {
      case "toggleTimezones":
        $("#timezonePanel")?.classList.toggle("hidden");
        break;
      case "toggleFocusMode":
        document.body.classList.toggle("focus-mode");
        break;
      case "openCommandBar":
        $("#commandBar")?.classList.add("show");
        $("#commandBackdrop")?.classList.add("show");
        break;
      default:
        break;
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      $("#commandBar")?.classList.remove("show");
      $("#commandBackdrop")?.classList.remove("show");
    }
  });

  $("#commandBackdrop")?.addEventListener("click", () => {
    $("#commandBar")?.classList.remove("show");
    $("#commandBackdrop")?.classList.remove("show");
  });

  $("#sidebarToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-collapsed", !document.body.classList.contains("sidebar-collapsed"));
    localStorage.setItem("workspace_sidebar_collapsed", document.body.classList.contains("sidebar-collapsed") ? "1" : "0");
  });

  $("#timezoneToggleBtn")?.addEventListener("click", () => {
    $("#timezonePanel")?.classList.toggle("hidden");
  });
}

function boot() {
  if (state.sidebarCollapsed) document.body.classList.add("sidebar-collapsed");
  renderNav();
  renderTimezoneStrip();
  renderView();
  bindGlobalActions();
  setInterval(renderTimezoneStrip, 1000);
  window.showView = showView;
  window.toast = toast;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
