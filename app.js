/*
 * EDITABLE PROJECT ATLAS DATA
 * Project text and real geographic coordinates live here. City-center coordinates
 * are intentionally labeled approximate where no precise project site is known.
 * Keep every TODO until Morenike supplies verified Inclusivity WDSM information.
 */
const ATLAS_LOCATIONS = {
  omaha: { city: "Omaha", state: "Nebraska", coordinates: [-95.9345, 41.2565], zoom: 11.2, bearing: -8, pitch: 34 },
  ames: { city: "Ames", state: "Iowa", coordinates: [-93.6319, 42.0308], zoom: 12, bearing: 7, pitch: 38 }
};

const projects = [
  {
    id:"omaha", number:"01", title:"We Make Omaha", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Comprehensive planning",
    short:"Turning community knowledge into a citywide planning framework.",
    summary:"Work involving community engagement analysis, scenario planning, spatial research, and implementation-focused reporting.",
    role:"Planning practice", methods:["Qualitative coding","Survey analysis","Spatial synthesis"],
    findings:[], deliverables:[], skills:[], images:[], stat:"50K+", statLabel:"resident comments analyzed",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[-34,-17]
  },
  {
    id:"tracker", number:"02", title:"Implementation Tracker", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Civic technology and public accountability",
    short:"Making adopted commitments visible, measurable, and accountable.",
    summary:"A public-facing framework connecting plan commitments to actions, indicators, annual reporting, and place-based projects.",
    role:"Public accountability", methods:["Information design","Data governance","Public accountability"],
    findings:[], deliverables:[], skills:[], images:[], stat:"32", statLabel:"implementation indicators",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[0,-30]
  },
  {
    id:"plans", number:"03", title:"Plan Quality and Implementation Research", city:"Regional case study", state:"United States",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Applied research",
    short:"Following the path from public vision to administrative action.",
    summary:"A comparative evaluation of comprehensive plans in Marshalltown, Iowa; Walla Walla, Washington; and Ottumwa, Iowa, including equity, implementation responsibility, and monitoring.",
    role:"Applied research", methods:["Comparative research","Content analysis","Plan evaluation"],
    findings:[], deliverables:[], skills:[], images:[], stat:"10", statLabel:"plan-quality criteria",
    location:"Regional research · Marshalltown, Ottumwa, and Walla Walla", destination:"omaha", markerOffset:[34,-17]
  },
  {
    id:"access", number:"04", title:"Employment Access and Housing", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Current research",
    short:"Testing how affordable housing connects residents to opportunity.",
    summary:"Research examining how affordable housing locations connect residents with employment opportunities. Spatial mismatch is one explanation being tested, not a predetermined conclusion.",
    role:"Current research", methods:["GIS","Accessibility analysis","Equity research"],
    findings:[], deliverables:[], skills:[], images:[], stat:"1", statLabel:"explanation among several",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[0,9]
  },
  {
    id:"ames", number:"05", title:"Inclusivity WDSM Project", city:"Ames", state:"Iowa",
    coordinates:[-93.6319,42.0308], approximate:true, category:"Academic research",
    short:"An Iowa State University research project based in Ames, Iowa.",
    summary:"TODO: Morenike to provide project summary.", role:"TODO: Morenike to provide",
    methods:["TODO: Morenike to provide methods"], findings:["TODO: Morenike to provide"],
    deliverables:["TODO: Morenike to provide"], skills:["TODO: Morenike to provide"], images:["TODO: Morenike to provide"],
    stat:"ISU", statLabel:"Iowa State University", location:"Ames Research Station · approximate city-center location",
    destination:"ames", markerOffset:[0,0],
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
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const site = document.querySelector(".atlas-site");
const mapState = document.querySelector("#map-state");
const mapStateText = document.querySelector("#map-state-text");
const travelStatus = document.querySelector("#travel-status");
const returnOrigin = document.querySelector("#return-origin");
const drawer = document.querySelector("#drawer");
const drawerPanel = drawer.querySelector(".project-drawer");
let map = null;
let mapReady = false;
let currentDestination = "omaha";
let projectTrigger = null;
let scrollPosition = 0;
let journeyTimer = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

function renderProjectLists() {
  const hotspotField = document.querySelector("#hotspot-field");
  const projectStack = document.querySelector("#project-stack");
  projects.forEach((project, index) => {
    hotspotField.insertAdjacentHTML("beforeend", `<button class="map-hotspot hotspot-${index+1} destination-${project.destination}" type="button" data-project="${project.id}" aria-label="Open ${escapeHTML(project.title)}"><span class="hotspot-pulse"></span><span class="hotspot-card"><small>${escapeHTML(project.location)} · ${project.number}</small><strong>${escapeHTML(project.title)}</strong><em>${escapeHTML(project.category)}</em></span></button>`);
    projectStack.insertAdjacentHTML("beforeend", `<button class="project-tile" type="button" data-project="${project.id}" aria-label="Open ${escapeHTML(project.title)} project details"><span class="tile-number">${project.number}</span><span class="tile-copy"><small>${escapeHTML(project.category)}</small><strong>${escapeHTML(project.title)}</strong><em>${escapeHTML(project.short)}</em></span><span class="tile-stat"><strong>${escapeHTML(project.stat)}</strong><small>${escapeHTML(project.statLabel)}</small></span><span class="tile-arrow" aria-hidden="true">↗</span></button>`);
  });
}

function formatCoordinate(value, positive, negative) {
  return `${Math.abs(value).toFixed(4)}° ${value >= 0 ? positive : negative}`;
}

function setCoordinates(coordinates) {
  document.querySelector("#latitude").textContent = formatCoordinate(coordinates[1], "N", "S");
  document.querySelector("#longitude").textContent = formatCoordinate(coordinates[0], "E", "W");
}

function showMapError() {
  mapState.classList.add("map-error");
  mapStateText.textContent = "Geographic atlas unavailable · project list remains active";
}

function addRouteLayers() {
  if (!map || map.getSource("omaha-ames-route")) return;
  map.addSource("omaha-ames-route", {
    type:"geojson",
    data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[ATLAS_LOCATIONS.omaha.coordinates,ATLAS_LOCATIONS.ames.coordinates]}}
  });
  map.addLayer({id:"regional-route",type:"line",source:"omaha-ames-route",layout:{"line-cap":"round"},paint:{"line-color":"#23c1c6","line-width":1.25,"line-opacity":0.18,"line-dasharray":[3,5]}});
  map.addLayer({id:"active-route",type:"line",source:"omaha-ames-route",layout:{"line-cap":"round"},paint:{"line-color":"#f3aa55","line-width":2.5,"line-opacity":0,"line-blur":1.2}});
}

function addMapMarkers() {
  projects.forEach(project => {
    const markerButton = document.createElement("button");
    markerButton.type = "button";
    markerButton.className = `geographic-marker marker-${project.destination} marker-${project.id}`;
    markerButton.dataset.mapProject = project.id;
    markerButton.setAttribute("aria-label", `${project.title}, ${project.city}, ${project.state}${project.approximate ? ", approximate project location" : ""}`);
    markerButton.innerHTML = `<span aria-hidden="true"></span><small>${escapeHTML(project.title)}</small>`;
    markerButton.addEventListener("click", () => openProject(project.id, markerButton));
    new maplibregl.Marker({element:markerButton,anchor:"center",offset:project.markerOffset})
      .setLngLat(project.coordinates)
      .addTo(map);
  });
}

function initializeMap() {
  if (!window.maplibregl) {
    showMapError();
    return;
  }
  try {
    const origin = ATLAS_LOCATIONS.omaha;
    map = new maplibregl.Map({
      container:"atlas-map",
      style:"https://tiles.openfreemap.org/styles/dark",
      center:origin.coordinates,
      zoom:origin.zoom,
      bearing:origin.bearing,
      pitch:origin.pitch,
      attributionControl:false,
      cooperativeGestures:true,
      dragRotate:false,
      maxPitch:55,
      minZoom:3
    });
    map.on("styleimagemissing", event => {
      if (!map.hasImage(event.id)) {
        map.addImage(event.id,{width:1,height:1,data:new Uint8Array([0,0,0,0])});
      }
    });
    map.addControl(new maplibregl.NavigationControl({showCompass:false,visualizePitch:false}), "bottom-right");
    map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:"OpenFreeMap"}), "bottom-right");
    map.keyboard.enable();
    map.once("load", () => {
      mapReady = true;
      addRouteLayers();
      addMapMarkers();
      mapState.classList.add("map-loaded");
      mapStateText.textContent = "Geographic atlas ready";
      window.setTimeout(() => { mapState.hidden = true; }, 700);
    });
    map.on("move", () => {
      if (!mapReady || site.classList.contains("journey-active")) return;
      const center = map.getCenter();
      setCoordinates([center.lng,center.lat]);
    });
    map.on("error", event => {
      if (!mapReady || !event.error?.message?.includes("404")) showMapError();
    });
  } catch (error) {
    console.error("The geographic atlas could not initialize.", error);
    showMapError();
  }
}

function setRouteVisible(visible) {
  if (mapReady && map.getLayer("active-route")) map.setPaintProperty("active-route","line-opacity",visible ? 0.9 : 0);
}

function closeProject({restoreFocus=true}={}) {
  if (drawer.hidden) return;
  drawer.hidden = true;
  document.body.classList.remove("drawer-open");
  document.body.style.top = "";
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, scrollPosition);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  if (restoreFocus && projectTrigger instanceof HTMLElement && projectTrigger.isConnected) projectTrigger.focus();
  projectTrigger = null;
  if (map) map.keyboard.enable();
}

function openDrawer(project, trigger) {
  projectTrigger = trigger || document.activeElement;
  document.querySelector("#drawer-number").textContent = `Field note ${project.number}`;
  document.querySelector("#drawer-location").textContent = `${project.location} / ${project.category}`;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#drawer-description").textContent = project.summary;
  document.querySelector("#drawer-stat").textContent = project.stat;
  document.querySelector("#drawer-stat-label").textContent = project.statLabel;
  const details = document.querySelector("#field-note-details");
  details.hidden = !project.details;
  details.innerHTML = project.details ? project.details.map(([label,value]) => `<section><h3>${escapeHTML(label)}</h3><p>${escapeHTML(value)}</p></section>`).join("") : "";
  document.querySelector("#drawer-methods").innerHTML = `<small>Methods and lenses</small>${project.methods.map(method => `<span>${escapeHTML(method)}</span>`).join("")}`;
  scrollPosition = window.scrollY;
  drawer.hidden = false;
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${scrollPosition}px`;
  if (map) map.keyboard.disable();
  drawer.querySelector(".drawer-close").focus();
}

function flyToLocation(destination, onArrival) {
  const target = ATLAS_LOCATIONS[destination];
  currentDestination = destination;
  setCoordinates(target.coordinates);
  if (!mapReady) {
    onArrival?.();
    return;
  }
  map.once("moveend", () => onArrival?.());
  const camera = {center:target.coordinates,zoom:target.zoom,bearing:target.bearing,pitch:target.pitch};
  if (reduceMotion.matches) map.jumpTo(camera);
  else map.flyTo({...camera,duration:2200,essential:false,curve:1.25});
}

function travelToAmes(project, trigger) {
  window.clearTimeout(journeyTimer);
  closeProject({restoreFocus:false});
  site.classList.add("journey-active","traveling","location-ames");
  travelStatus.textContent = "Traveling northeast · Omaha → Ames";
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  setRouteVisible(true);
  flyToLocation("ames", () => {
    site.classList.remove("journey-active","traveling");
    site.classList.add("location-ames");
    travelStatus.textContent = "Arrived · Ames Research Station";
    returnOrigin.hidden = false;
    document.querySelectorAll(".marker-ames").forEach(marker => marker.classList.add("active"));
    openDrawer(project, trigger);
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1400);
  });
}

function returnToOmaha() {
  window.clearTimeout(journeyTimer);
  closeProject({restoreFocus:false});
  site.classList.add("journey-active","returning");
  site.classList.remove("location-ames","traveling");
  document.querySelectorAll(".marker-ames").forEach(marker => marker.classList.remove("active"));
  travelStatus.textContent = "Returning southwest · Ames → Omaha";
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  flyToLocation("omaha", () => {
    site.classList.remove("journey-active","returning");
    setRouteVisible(false);
    travelStatus.textContent = "Returned · Omaha";
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1200);
  });
}

function openProject(id, trigger=document.activeElement) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  if (project.destination === "ames" && currentDestination !== "ames") {
    travelToAmes(project,trigger);
    return;
  }
  openDrawer(project,trigger);
}

function getDrawerControls() {
  return [...drawer.querySelectorAll("button:not([disabled]),[href],input:not([disabled]),[tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function goTo(id) { document.getElementById(id)?.scrollIntoView({behavior:reduceMotion.matches ? "auto" : "smooth"}); }

renderProjectLists();
initializeMap();
returnOrigin.addEventListener("click",returnToOmaha);
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click",() => goTo(button.dataset.go)));
document.addEventListener("click",event => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project,projectButton);
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click",() => closeProject()));
document.addEventListener("keydown",event => {
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
  const [first] = controls;
  const last = controls[controls.length-1];
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
    const active = button.dataset.go === visible.target.id;
    button.classList.toggle("active",active);
    button.toggleAttribute("aria-current",active);
  });
},{threshold:[.35,.6]});
chapters.forEach(chapter => observer.observe(document.getElementById(chapter.id)));

const inputs = ["housing","transit","jobs"].map(id => document.getElementById(id));
function updateModel() {
  inputs.forEach(input => document.getElementById(`${input.id}-output`).textContent = input.value);
  const score = Math.round(Number(inputs[0].value)*.3+Number(inputs[1].value)*.35+Number(inputs[2].value)*.35);
  document.querySelector("#access-score").textContent = score;
  document.querySelector("#score-orbit").style.setProperty("--score",`${score*3.6}deg`);
  document.querySelector("#model-note").textContent = score >= 70 ? "Strong combined access—but distribution and affordability still matter." : score >= 45 ? "Moderate access. A weakness in one system can constrain the others." : "Low combined access. Place-based interventions may be needed across systems.";
}
inputs.forEach(input => input.addEventListener("input",updateModel));
updateModel();
