/*
 * EDITABLE PROJECT CONTENT
 * Keep every TODO until Morenike supplies verified Inclusivity WDSM information.
 */
const projects = [
  { id:"omaha", number:"01", destination:"omaha", category:"Comprehensive planning", title:"We Make Omaha", short:"Turning community knowledge into a citywide planning framework.", description:"Work involving community engagement analysis, scenario planning, spatial research, and implementation-focused reporting.", stat:"50K+", statLabel:"resident comments analyzed", methods:["Qualitative coding","Survey analysis","Spatial synthesis"], location:"Community District" },
  { id:"tracker", number:"02", destination:"omaha", category:"Civic technology and public accountability", title:"Implementation Tracker", short:"Making adopted commitments visible, measurable, and accountable.", description:"A public-facing framework connecting plan commitments to actions, indicators, annual reporting, and place-based projects.", stat:"32", statLabel:"implementation indicators", methods:["Information design","Data governance","Public accountability"], location:"Civic Core" },
  { id:"plans", number:"03", destination:"omaha", category:"Applied research", title:"Plan Quality and Implementation Research", short:"Following the path from public vision to administrative action.", description:"A comparative evaluation of comprehensive plans in Marshalltown, Iowa; Walla Walla, Washington; and Ottumwa, Iowa, including equity, implementation responsibility, and monitoring.", stat:"10", statLabel:"plan-quality criteria", methods:["Comparative research","Content analysis","Plan evaluation"], location:"Research Quarter" },
  { id:"access", number:"04", destination:"omaha", category:"Current research", title:"Employment Access and Housing", short:"Testing how affordable housing connects residents to opportunity.", description:"Research examining how affordable housing locations connect residents with employment opportunities. Spatial mismatch is one explanation being tested, not a predetermined conclusion.", stat:"1", statLabel:"explanation among several", methods:["GIS","Accessibility analysis","Equity research"], location:"Opportunity Corridor" },
  {
    id:"ames", number:"05", destination:"ames", category:"Academic research",
    title:"Inclusivity WDSM Project", short:"An Iowa State University research project based in Ames, Iowa.",
    description:"TODO: Morenike to provide project summary.", stat:"ISU", statLabel:"Iowa State University",
    methods:["TODO: Morenike to provide methods","TODO: Morenike to provide skills demonstrated"],
    location:"Ames Research Station",
    details:[
      ["Full meaning of WDSM","TODO: Morenike to provide"],
      ["Project date","TODO: Morenike to provide"],
      ["Research objective","TODO: Morenike to provide"],
      ["My role","TODO: Morenike to provide"],
      ["Collaborators","TODO: Morenike to provide"],
      ["Methods","TODO: Morenike to provide"],
      ["Findings","TODO: Morenike to provide"],
      ["Deliverables","TODO: Morenike to provide"],
      ["Images and documents","TODO: Morenike to provide"],
      ["Skills demonstrated","TODO: Morenike to provide"]
    ]
  }
];
const chapters = [{id:"home",label:"Home"},{id:"atlas",label:"Atlas"},{id:"work",label:"Work"},{id:"lab",label:"Methods"},{id:"about",label:"About"}];

const hotspotField = document.querySelector("#hotspot-field");
const projectStack = document.querySelector("#project-stack");
projects.forEach((p, i) => {
  hotspotField.insertAdjacentHTML("beforeend", `<button class="map-hotspot hotspot-${i+1} destination-${p.destination}" type="button" data-project="${p.id}" aria-label="Open ${p.title}"><span class="hotspot-pulse"></span><span class="hotspot-card"><small>${p.location} · ${p.number}</small><strong>${p.title}</strong><em>${p.category}</em></span></button>`);
  projectStack.insertAdjacentHTML("beforeend", `<button class="project-tile" type="button" data-project="${p.id}" aria-label="Open ${p.title} project details"><span class="tile-number">${p.number}</span><span class="tile-copy"><small>${p.category}</small><strong>${p.title}</strong><em>${p.short}</em></span><span class="tile-stat"><strong>${p.stat}</strong><small>${p.statLabel}</small></span><span class="tile-arrow" aria-hidden="true">↗</span></button>`);
});

function goTo(id) { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); }
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => goTo(button.dataset.go)));

const drawer = document.querySelector("#drawer");
const drawerPanel = drawer.querySelector(".project-drawer");
let projectTrigger = null;
let scrollPosition = 0;
let currentDestination = "omaha";
let journeyTimer = 0;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const site = document.querySelector(".atlas-site");
const travelStatus = document.querySelector("#travel-status");
const returnOrigin = document.querySelector("#return-origin");

function setCoordinates(destination) {
  const ames = destination === "ames";
  document.querySelector("#latitude").textContent = ames ? "42.0308° N" : "41.2565° N";
  document.querySelector("#longitude").textContent = ames ? "93.6319° W" : "95.9345° W";
}

function travelToAmes(onArrival) {
  window.clearTimeout(journeyTimer);
  currentDestination = "ames";
  site.classList.add("traveling", "location-ames");
  travelStatus.textContent = "Traveling northeast · Omaha → Ames";
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  const arrive = () => {
    site.classList.remove("traveling");
    setCoordinates("ames");
    travelStatus.textContent = "Arrived · Ames Research Station";
    returnOrigin.hidden = false;
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1400);
    onArrival?.();
  };
  if (reduceMotion.matches) arrive();
  else journeyTimer = window.setTimeout(arrive, 1500);
}

function returnToOmaha() {
  window.clearTimeout(journeyTimer);
  currentDestination = "omaha";
  site.classList.add("returning");
  site.classList.remove("location-ames", "traveling");
  travelStatus.textContent = "Returning southwest · Ames → Omaha";
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  const arrive = () => {
    site.classList.remove("returning");
    setCoordinates("omaha");
    travelStatus.textContent = "Returned · Omaha";
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1200);
  };
  if (reduceMotion.matches) arrive();
  else journeyTimer = window.setTimeout(arrive, 1500);
}
returnOrigin.addEventListener("click", returnToOmaha);

function getDrawerControls() {
  return [...drawer.querySelectorAll("button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function openProject(id) {
  const p = projects.find(project => project.id === id);
  if (!p) return;
  if (p.destination === "ames" && currentDestination !== "ames") {
    travelToAmes(() => openProject(id));
    return;
  }
  projectTrigger = document.activeElement;
  document.querySelector("#drawer-number").textContent = `Field note ${p.number}`;
  document.querySelector("#drawer-location").textContent = `${p.location} / ${p.category}`;
  document.querySelector("#project-title").textContent = p.title;
  document.querySelector("#drawer-description").textContent = p.description;
  document.querySelector("#drawer-stat").textContent = p.stat;
  document.querySelector("#drawer-stat-label").textContent = p.statLabel;
  const details = document.querySelector("#field-note-details");
  details.hidden = !p.details;
  details.innerHTML = p.details
    ? p.details.map(([label, value]) => `<section><h3>${label}</h3><p>${value}</p></section>`).join("")
    : "";
  const methods = document.querySelector("#drawer-methods");
  methods.innerHTML = `<small>Methods and lenses</small>${p.methods.map(method => `<span>${method}</span>`).join("")}`;
  scrollPosition = window.scrollY;
  drawer.hidden = false;
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${scrollPosition}px`;
  drawer.querySelector(".drawer-close").focus();
}
function closeProject() {
  if (drawer.hidden) return;
  drawer.hidden = true;
  document.body.classList.remove("drawer-open");
  document.body.style.top = "";
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, scrollPosition);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  if (projectTrigger instanceof HTMLElement && projectTrigger.isConnected) projectTrigger.focus();
  projectTrigger = null;
}
document.addEventListener("click", event => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project);
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", closeProject));
document.addEventListener("keydown", event => {
  if (drawer.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeProject();
    return;
  }
  if (event.key !== "Tab") return;
  const controls = getDrawerControls();
  if (!controls.length) {
    event.preventDefault();
    drawerPanel.focus();
    return;
  }
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  const index = chapters.findIndex(chapter => chapter.id === visible.target.id);
  document.querySelector("#chapter-number").textContent = String(index+1).padStart(2,"0");
  document.querySelector("#chapter-label").textContent = chapters[index].label;
  document.querySelectorAll(".dock button").forEach(button => {
    button.classList.toggle("active", button.dataset.go === visible.target.id);
    button.toggleAttribute("aria-current", button.dataset.go === visible.target.id);
  });
}, {threshold:[.35,.6]});
chapters.forEach(chapter => observer.observe(document.getElementById(chapter.id)));

const inputs = ["housing","transit","jobs"].map(id => document.getElementById(id));
function updateModel() {
  inputs.forEach(input => document.getElementById(`${input.id}-output`).textContent = input.value);
  const score = Math.round(Number(inputs[0].value)*.3 + Number(inputs[1].value)*.35 + Number(inputs[2].value)*.35);
  document.querySelector("#access-score").textContent = score;
  document.querySelector("#score-orbit").style.setProperty("--score", `${score*3.6}deg`);
  document.querySelector("#model-note").textContent = score >= 70 ? "Strong combined access—but distribution and affordability still matter." : score >= 45 ? "Moderate access. A weakness in one system can constrain the others." : "Low combined access. Place-based interventions may be needed across systems.";
}
inputs.forEach(input => input.addEventListener("input", updateModel));
updateModel();
