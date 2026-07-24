/*
 * EDIT PROJECT CONTENT HERE
 * Keep TODO comments until Morenike supplies verified project information.
 */
const PROJECTS = [
  {
    id: "omaha", number: "01", destination: "omaha", category: "Comprehensive planning",
    title: "We Make Omaha", location: "Omaha, Nebraska", station: "Community Planning Station",
    summary: "Work involving community engagement analysis, scenario planning, spatial research, and implementation-focused reporting.",
    highlight: "50K+", highlightLabel: "resident comments analyzed",
    methods: ["Community engagement", "Scenario planning", "Spatial research", "Implementation reporting"]
  },
  {
    id: "tracker", number: "02", destination: "omaha", category: "Civic technology and public accountability",
    title: "Implementation Tracker", location: "Omaha, Nebraska", station: "Civic Accountability Station",
    summary: "A public-facing framework connecting plan commitments to actions, indicators, annual reporting, and place-based projects.",
    highlight: "32", highlightLabel: "implementation indicators",
    methods: ["Information design", "Data governance", "Public accountability"]
  },
  {
    id: "plans", number: "03", destination: "omaha", category: "Applied research",
    title: "Plan Quality and Implementation Research",
    location: "Marshalltown, Iowa · Walla Walla, Washington · Ottumwa, Iowa", station: "Comparative Research Station",
    summary: "A comparative evaluation of comprehensive plans, including equity, implementation responsibility, and monitoring.",
    highlight: "10", highlightLabel: "plan-quality criteria",
    methods: ["Comparative research", "Content analysis", "Plan evaluation"]
  },
  {
    id: "access", number: "04", destination: "omaha", category: "Current research",
    title: "Employment Access and Housing", location: "Omaha, Nebraska", station: "Opportunity Station",
    summary: "Research examining how affordable housing locations connect residents with employment opportunities. Spatial mismatch is one explanation being tested, not a predetermined conclusion.",
    highlight: "01", highlightLabel: "explanation among several",
    methods: ["GIS", "Accessibility analysis", "Equity research"]
  },
  {
    id: "ames", number: "05", destination: "ames", category: "Academic research",
    title: "Inclusivity WDSM Project", institution: "Iowa State University",
    location: "Ames, Iowa", station: "Ames Research Station",
    // TODO: Morenike to provide full meaning of WDSM
    summary: "TODO: Morenike to provide project summary.",
    highlight: "ISU", highlightLabel: "Iowa State University",
    methods: ["TODO: Morenike to provide methods", "TODO: Morenike to provide skills demonstrated"],
    details: [
      ["Full meaning of WDSM", "TODO: Morenike to provide"],
      ["Project date", "TODO: Morenike to provide"],
      ["Research objective", "TODO: Morenike to provide"],
      ["My role", "TODO: Morenike to provide"],
      ["Collaborators", "TODO: Morenike to provide"],
      ["Methods", "TODO: Morenike to provide"],
      ["Findings", "TODO: Morenike to provide"],
      ["Deliverables", "TODO: Morenike to provide"],
      ["Relevant images or documents", "TODO: Morenike to provide"],
      ["Skills demonstrated", "TODO: Morenike to provide"]
    ]
  }
];

const DESTINATIONS = {
  omaha: { latitude: "41.2565° N", longitude: "95.9345° W" },
  ames: { latitude: "42.0308° N", longitude: "93.6319° W" }
};
const CHAPTERS = ["home", "atlas", "work", "methods", "about", "contact"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const site = document.documentElement;
const drawer = document.querySelector("#drawer");
const drawerPanel = drawer.querySelector(".project-drawer");
const status = document.querySelector("#journey-status");
const returnButton = document.querySelector("#return-omaha");
let currentDestination = "omaha";
let projectTrigger = null;
let savedScroll = 0;
let journeyTimer = 0;

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = String(value);
  return element.innerHTML;
}

function renderProjects() {
  const hotspots = document.querySelector("#hotspot-field");
  const list = document.querySelector("#project-list");
  PROJECTS.forEach((project, index) => {
    hotspots.insertAdjacentHTML("beforeend", `
      <button class="map-hotspot hotspot-${index + 1} destination-${project.destination}" type="button" data-project="${project.id}" aria-label="Open ${escapeHtml(project.title)}">
        <span class="hotspot-pulse"></span>
        <span class="hotspot-card"><small>${escapeHtml(project.station)} · ${project.number}</small><strong>${escapeHtml(project.title)}</strong><em>${escapeHtml(project.category)}</em></span>
      </button>`);
    list.insertAdjacentHTML("beforeend", `
      <button class="project-card" type="button" data-project="${project.id}">
        <span class="project-number">${project.number}</span>
        <span class="project-copy"><small>${escapeHtml(project.category)}</small><strong>${escapeHtml(project.title)}</strong><em>${escapeHtml(project.summary)}</em></span>
        <span class="project-stat"><strong>${escapeHtml(project.highlight)}</strong><small>${escapeHtml(project.highlightLabel)}</small></span>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </button>`);
  });
}

function setCoordinates(destination) {
  document.querySelector("#latitude").textContent = DESTINATIONS[destination].latitude;
  document.querySelector("#longitude").textContent = DESTINATIONS[destination].longitude;
}

function travelToAmes(onArrival) {
  window.clearTimeout(journeyTimer);
  currentDestination = "ames";
  site.classList.add("traveling", "at-ames");
  status.textContent = "Traveling northeast · Omaha → Ames";
  status.hidden = false;
  returnButton.hidden = true;
  const arrive = () => {
    site.classList.remove("traveling");
    setCoordinates("ames");
    status.textContent = "Arrived · Ames Research Station";
    returnButton.hidden = false;
    journeyTimer = window.setTimeout(() => { status.hidden = true; }, 1300);
    onArrival?.();
  };
  if (prefersReducedMotion.matches) arrive();
  else journeyTimer = window.setTimeout(arrive, 1750);
}

function returnToOmaha() {
  window.clearTimeout(journeyTimer);
  closeDrawer(false);
  currentDestination = "omaha";
  site.classList.add("returning");
  site.classList.remove("at-ames", "traveling");
  status.textContent = "Returning southwest · Ames → Omaha";
  status.hidden = false;
  returnButton.hidden = true;
  const arrive = () => {
    site.classList.remove("returning");
    setCoordinates("omaha");
    status.textContent = "Returned · Omaha";
    journeyTimer = window.setTimeout(() => { status.hidden = true; }, 1200);
  };
  if (prefersReducedMotion.matches) arrive();
  else journeyTimer = window.setTimeout(arrive, 1750);
}

function getDrawerControls() {
  return [...drawer.querySelectorAll("button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);
  if (!project) return;
  if (project.destination === "ames" && currentDestination !== "ames") {
    travelToAmes(() => openProject(id));
    return;
  }
  projectTrigger = document.activeElement;
  document.querySelector("#drawer-number").textContent = `Field note ${project.number}`;
  document.querySelector("#drawer-location").textContent = `${project.station} / ${project.category}`;
  document.querySelector("#drawer-title").textContent = project.title;
  document.querySelector("#drawer-summary").textContent = project.summary;
  document.querySelector("#drawer-highlight").textContent = project.highlight;
  document.querySelector("#drawer-highlight-label").textContent = project.highlightLabel;
  document.querySelector("#drawer-methods").innerHTML =
    `<small>Methods and lenses</small>${project.methods.map(item => `<span>${escapeHtml(item)}</span>`).join("")}`;
  document.querySelector("#drawer-details").innerHTML = project.details
    ? project.details.map(([label, value]) => `<section><h3>${escapeHtml(label)}</h3><p>${escapeHtml(value)}</p></section>`).join("")
    : "";
  savedScroll = window.scrollY;
  drawer.hidden = false;
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${savedScroll}px`;
  drawer.querySelector(".drawer-close").focus();
}

function closeDrawer(restoreFocus = true) {
  if (drawer.hidden) return;
  drawer.hidden = true;
  document.body.classList.remove("drawer-open");
  document.body.style.top = "";
  const previousBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, savedScroll);
  document.documentElement.style.scrollBehavior = previousBehavior;
  if (restoreFocus && projectTrigger instanceof HTMLElement && projectTrigger.isConnected) projectTrigger.focus();
  projectTrigger = null;
}

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
}

function updateModel() {
  const values = ["housing", "transit", "jobs"].map(id => Number(document.getElementById(id).value));
  ["housing", "transit", "jobs"].forEach((id, index) => {
    document.getElementById(`${id}-output`).textContent = values[index];
  });
  const score = Math.round(values[0] * .3 + values[1] * .35 + values[2] * .35);
  document.querySelector("#access-score").textContent = score;
  document.querySelector("#score-ring").style.setProperty("--score", `${score * 3.6}deg`);
  document.querySelector("#model-note").textContent = score >= 70
    ? "Strong combined access—but distribution and affordability still matter."
    : score >= 45
      ? "Moderate access. A weakness in one system can constrain the others."
      : "Low combined access. Place-based interventions may be needed across systems.";
}

renderProjects();
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => goTo(button.dataset.go)));
document.addEventListener("click", event => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project);
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => closeDrawer()));
returnButton.addEventListener("click", returnToOmaha);
["housing", "transit", "jobs"].forEach(id => document.getElementById(id).addEventListener("input", updateModel));
updateModel();

document.addEventListener("keydown", event => {
  if (drawer.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeDrawer();
    return;
  }
  if (event.key !== "Tab") return;
  const controls = getDrawerControls();
  if (!controls.length) {
    event.preventDefault();
    drawerPanel.focus();
    return;
  }
  const [first] = controls;
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const chapterObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  document.querySelectorAll(".dock button").forEach(button => {
    const active = button.dataset.go === visible.target.id;
    button.classList.toggle("active", active);
    button.toggleAttribute("aria-current", active);
  });
}, { threshold: [.35, .6] });
CHAPTERS.forEach(id => chapterObserver.observe(document.getElementById(id)));
