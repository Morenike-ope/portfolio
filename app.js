/*
 * EDITABLE PROJECT ATLAS DATA
 * Project text and real geographic coordinates live here. City-center coordinates
 * are intentionally labeled approximate where no precise project site is known.
 * Keep every TODO until Morenike supplies verified Inclusivity WDSM information.
 */
const ATLAS_LOCATIONS = {
  omaha: { city: "Omaha", state: "Nebraska", coordinates: [-95.9345, 41.2565], zoom: 11.2, bearing: -8, pitch: 34, markerClass:"omaha" },
  westDesMoines: { city: "West Des Moines", state: "Iowa", coordinates: [-93.7113, 41.5772], zoom: 11.8, bearing: 6, pitch: 36, markerClass:"west-des-moines" },
  marshalltown: { city: "Marshalltown", state: "Iowa", coordinates: [-92.9123, 42.0489], zoom: 11.7, bearing: -4, pitch: 32, markerClass:"marshalltown" },
  ottumwa: { city: "Ottumwa", state: "Iowa", coordinates: [-92.4083, 41.0160], zoom: 11.7, bearing: 4, pitch: 32, markerClass:"ottumwa" },
  wallaWalla: { city: "Walla Walla", state: "Washington", coordinates: [-118.3430, 46.0646], zoom: 11.5, bearing: -5, pitch: 34, markerClass:"walla-walla" }
};

const projects = [
  {
    id:"omaha", number:"01", title:"We Make Omaha", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Comprehensive planning",
    short:"Turning community knowledge into a citywide planning framework.",
    summary:"Work involving community engagement analysis, scenario planning, spatial research, and implementation-focused reporting.",
    role:"Planning practice", methods:["Qualitative coding","Survey analysis","Spatial synthesis"],
    findings:[], deliverables:[], skills:[], images:[], stat:"50K+", statLabel:"resident comments analyzed",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[-42,-20]
  },
  {
    id:"future-lab", number:"02", title:"Future Lab — Scenario Choosing Workshop", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Scenario planning, community engagement, and data analysis",
    program:"We Make Omaha", organization:"City of Omaha", date:"2026",
    short:"Comparing growth scenarios and translating public choices into planning findings.",
    summary:"Future Lab was a scenario-choosing phase of the We Make Omaha comprehensive planning process. It invited participants to compare alternative growth scenarios and identify where Omaha should grow, how development should occur, which community values should guide decisions, and which actions should receive priority.",
    role:"Supported the analysis and communication of participant responses, including overall scenario preferences, demographic and geographic comparisons, and patterns across priorities, values, and proposed actions.",
    methods:["Survey-response analysis","Scenario comparison","Demographic subgroup analysis","ZIP-code analysis","Spatial analysis and mapping","Data visualization","Community-engagement reporting"],
    findings:["700 total responses","Neighborhood Hubs: 328 responses, approximately 47%","Connected Corridors: 191 responses, approximately 27%","Urban Anchors: 163 responses, approximately 23%","Business as Usual: 9 responses, approximately 1.3%"],
    deliverables:["Translation of public input into planning findings","TODO: Morenike to provide images, charts, maps, workshop materials, and reports"],
    skills:["Survey-response analysis","Scenario comparison","Spatial analysis and mapping","Data visualization","Community-engagement reporting"],
    images:["TODO: Morenike to provide"],
    stat:"700", statLabel:"total responses", location:"Omaha · approximate city-center location",
    destination:"omaha", markerOffset:[0,-40], markerSymbol:"⌁",
    details:[
      ["Project overview","A 2026 scenario-choosing workshop within the We Make Omaha comprehensive planning process."],
      ["Relationship to We Make Omaha","Future Lab was a distinct scenario-choosing phase of the broader We Make Omaha program for the City of Omaha."],
      ["My contribution","Supported the analysis and communication of participant responses, including overall scenario preferences, demographic and geographic comparisons, and patterns across priorities, values, and proposed actions."],
      ["Scenario results","Neighborhood Hubs: 328 responses (approximately 47%); Connected Corridors: 191 (approximately 27%); Urban Anchors: 163 (approximately 23%); Business as Usual: 9 (approximately 1.3%)."],
      ["Participant profile","Participants ages 25–44: approximately 59%. Participants with household incomes from $50,000 to $100,000: approximately 44%. Frequently represented ZIP codes included 68106, 68104, and 68132."],
      ["Geographic priorities","Transit Station Areas: 367 selections; Downtown and Urban Core: 353; North and South Omaha: 346."],
      ["Development approach","Infill and redevelopment"],
      ["Leading community value","Walkability"],
      ["Leading action","Better bus and transit service"],
      ["Methods","Survey-response analysis; scenario comparison; demographic subgroup analysis; ZIP-code analysis; spatial analysis and mapping; data visualization; community-engagement reporting."],
      ["Skills demonstrated","Translation of public input into planning findings; analytical communication; geographic comparison; data visualization."],
      ["Images, charts, maps, workshop materials, and reports","TODO: Morenike to provide"]
    ]
  },
  {
    id:"tracker", number:"03", title:"Implementation Tracker", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Civic technology and public accountability",
    short:"Making adopted commitments visible, measurable, and accountable.",
    summary:"A public-facing framework connecting plan commitments to actions, indicators, annual reporting, and place-based projects.",
    role:"Public accountability", methods:["Information design","Data governance","Public accountability"],
    findings:[], deliverables:[], skills:[], images:[], stat:"32", statLabel:"implementation indicators",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[42,-20]
  },
  {
    id:"plans", number:"04", title:"Plan Quality and Implementation Research", city:"Marshalltown", state:"Iowa",
    coordinates:[-92.9123,42.0489], approximate:true, category:"Applied research",
    short:"Following the path from public vision to administrative action.",
    summary:"A comparative evaluation of comprehensive plans in Marshalltown, Iowa; Walla Walla, Washington; and Ottumwa, Iowa, including equity, implementation responsibility, and monitoring.",
    role:"Applied research", methods:["Comparative research","Content analysis","Plan evaluation"],
    findings:[], deliverables:[], skills:[], images:[], stat:"10", statLabel:"plan-quality criteria",
    location:"Regional research · Marshalltown, Ottumwa, and Walla Walla", destination:"plan-research", markerOffset:[0,0],
    locationKeys:["marshalltown","ottumwa","wallaWalla"]
  },
  {
    id:"access", number:"05", title:"Employment Access and Housing", city:"Omaha", state:"Nebraska",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Current research",
    short:"Testing how affordable housing connects residents to opportunity.",
    summary:"Research examining how affordable housing locations connect residents with employment opportunities. Spatial mismatch is one explanation being tested, not a predetermined conclusion.",
    role:"Current research", methods:["GIS","Accessibility analysis","Equity research"],
    findings:[], deliverables:[], skills:[], images:[], stat:"1", statLabel:"explanation among several",
    location:"Omaha · approximate city-center location", destination:"omaha", markerOffset:[-27,20]
  },
  {
    id:"wdsm", number:"06", title:"Inclusivity WDSM Project", city:"West Des Moines", state:"Iowa",
    coordinates:[-93.7113,41.5772], approximate:true, category:"Academic research",
    institution:"Iowa State University",
    short:"An Iowa State University project located in West Des Moines, Iowa.",
    summary:"TODO: Morenike to provide project summary.", role:"TODO: Morenike to provide",
    methods:["TODO: Morenike to provide methods"], findings:["TODO: Morenike to provide"],
    deliverables:["TODO: Morenike to provide"], skills:["TODO: Morenike to provide"], images:["TODO: Morenike to provide"],
    stat:"ISU", statLabel:"Iowa State University", location:"West Des Moines Project Site · approximate city-level location",
    destination:"west-des-moines", markerOffset:[0,0],
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

/*
 * EDITABLE CITY ARRIVAL CONTENT
 * - Change `introduction` to revise the welcome message.
 * - Replace `image` and update `imageAlt` / `imageCredit` when a verified local city image is available.
 * - Edit `highlights` to change the small facts shown in the portal.
 * - Reorder `projectIds` to change the city project-story order.
 * - Copy an entry to add another city, then add its camera settings to ATLAS_LOCATIONS.
 * - Change `primaryActionLabel` or `secondaryActionLabel` to rename portal buttons.
 * The current visual uses a second, non-interactive real map because a correctly licensed
 * West Des Moines photograph has not yet been verified.
 */
const cityArrivals = {
  omaha: {
    id:"omaha", city:"Omaha", state:"Nebraska", coordinates:[-95.9345,41.2565],
    approximateLocation:"Omaha city center", eyebrow:"City chapter 01 · Nebraska",
    title:"Welcome to Omaha",
    introduction:"A city shaped by neighborhoods, public voices, and decisions about how—and for whom—it grows.",
    supportingLine:"Explore how community input, spatial evidence, and implementation are informing Omaha’s future.",
    image:null, imageAlt:"Abstract geographic view centered on Omaha, Nebraska",
    imageCredit:"Geographic treatment · OpenFreeMap / OpenStreetMap",
    projectIds:["omaha","future-lab","tracker","access"],
    highlights:[{value:"700",label:"Future Lab responses"},{value:"32",label:"implementation indicators"},{value:"4",label:"featured projects"}],
    primaryActionLabel:"Enter Omaha’s project stories →", secondaryActionLabel:"Explore the Omaha map",
    journeyLabel:"City pulse detected · Omaha"
  },
  "west-des-moines": {
    id:"west-des-moines", city:"West Des Moines", state:"Iowa", coordinates:[-93.7113,41.5772],
    approximateLocation:"Approximate city-level project location", eyebrow:"City chapter 02 · Iowa",
    title:"Welcome to West Des Moines",
    introduction:"A growing Iowa community where questions of belonging and inclusion became the focus of an applied research project.",
    supportingLine:"", image:null,
    imageAlt:"Abstract geographic view centered on West Des Moines, Iowa",
    imageCredit:"Geographic treatment · OpenFreeMap / OpenStreetMap",
    affiliation:"Inclusivity WDSM Project · Iowa State University",
    projectIds:["wdsm"], highlights:[{value:"ISU",label:"institutional affiliation"},{value:"1",label:"project story"},{value:"≈",label:"city-level location"}],
    primaryActionLabel:"Enter the project story →", secondaryActionLabel:"Explore West Des Moines",
    journeyLabel:"City pulse detected · Omaha → West Des Moines"
  }
};

const chapters = [{id:"home",label:"Home"},{id:"atlas",label:"Atlas"},{id:"work",label:"Work"},{id:"lab",label:"Methods"},{id:"about",label:"About"}];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const site = document.querySelector(".atlas-site");
const mapState = document.querySelector("#map-state");
const mapStateText = document.querySelector("#map-state-text");
const travelStatus = document.querySelector("#travel-status");
const returnOrigin = document.querySelector("#return-origin");
const drawer = document.querySelector("#drawer");
const drawerPanel = drawer.querySelector(".project-drawer");
const cityPortal = document.querySelector("#city-portal");
const cityPortalCard = cityPortal.querySelector(".city-portal-card");
let map = null;
let portalMap = null;
let mapReady = false;
let currentDestination = "omaha";
let projectTrigger = null;
let portalTrigger = null;
let activeCityArrival = null;
let scrollPosition = 0;
let portalScrollPosition = 0;
let journeyTimer = 0;
let journeySequence = 0;
let activeProjectId = "omaha";
let activeLocationKey = "omaha";
const projectLocationMemory = new Map();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

function getProjectLocationKeys(project) {
  if (project.locationKeys?.length) return project.locationKeys;
  return [project.destination === "west-des-moines" ? "westDesMoines" : "omaha"];
}

function getProjectListButton(projectId) {
  return document.querySelector(`#project-stack [data-project="${projectId}"]`)
    || document.querySelector(`#hotspot-field [data-project="${projectId}"]`);
}

function setSelectedProject(projectId, locationKey) {
  activeProjectId = projectId;
  activeLocationKey = locationKey;
  projectLocationMemory.set(projectId,locationKey);
  document.querySelectorAll("[data-map-project]").forEach(marker => {
    marker.classList.toggle("active", marker.dataset.mapProject === projectId && marker.dataset.locationKey === locationKey);
  });
  document.querySelectorAll("[data-project]").forEach(button => {
    if (button.dataset.project === projectId) button.setAttribute("aria-current","true");
    else button.removeAttribute("aria-current");
  });
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

function setCurrentLocationDisplay(locationKey) {
  const location = ATLAS_LOCATIONS[locationKey];
  if (!location) return;
  document.querySelector("#atlas-map").setAttribute(
    "aria-label",
    `Interactive project atlas centered on ${location.city}, ${location.state}. Use arrow keys to pan and plus or minus to zoom.`
  );
  mapStateText.textContent = `Viewing ${location.city}, ${location.state}`;
}

function showMapError() {
  mapState.classList.add("map-error");
  mapStateText.textContent = "Geographic atlas unavailable · project list remains active";
}

function addRouteLayers() {
  if (!map || map.getSource("omaha-wdsm-route")) return;
  map.addSource("omaha-wdsm-route", {
    type:"geojson",
    data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[ATLAS_LOCATIONS.omaha.coordinates,ATLAS_LOCATIONS.westDesMoines.coordinates]}}
  });
  map.addLayer({id:"regional-route",type:"line",source:"omaha-wdsm-route",layout:{"line-cap":"round"},paint:{"line-color":"#23c1c6","line-width":1.25,"line-opacity":0.18,"line-dasharray":[3,5]}});
  map.addLayer({id:"active-route",type:"line",source:"omaha-wdsm-route",layout:{"line-cap":"round"},paint:{"line-color":"#f3aa55","line-width":2.5,"line-opacity":0,"line-blur":1.2}});
}

function addMapMarkers() {
  projects.forEach(project => {
    getProjectLocationKeys(project).forEach(locationKey => {
      const location = ATLAS_LOCATIONS[locationKey];
      const markerButton = document.createElement("button");
      markerButton.type = "button";
      markerButton.className = `geographic-marker marker-${location.markerClass} marker-${project.id}`;
      markerButton.dataset.mapProject = project.id;
      markerButton.dataset.locationKey = locationKey;
      markerButton.setAttribute("aria-label", `${project.title}, ${location.city}, ${location.state}, approximate project location`);
      markerButton.innerHTML = `<span aria-hidden="true">${project.markerSymbol ? escapeHTML(project.markerSymbol) : ""}</span><small>${escapeHTML(project.title)}${project.locationKeys ? ` · ${escapeHTML(location.city)}` : ""}</small>`;
      markerButton.addEventListener("click", () => openProject(project.id, markerButton, locationKey));
      new maplibregl.Marker({element:markerButton,anchor:"center",offset:project.locationKeys ? [0,0] : project.markerOffset})
        .setLngLat(location.coordinates)
        .addTo(map);
    });
  });
  setSelectedProject(activeProjectId,activeLocationKey);
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

function setMapInteraction(enabled) {
  if (!map) return;
  ["boxZoom","scrollZoom","dragPan","dragRotate","keyboard","doubleClickZoom","touchZoomRotate"].forEach(control => {
    if (map[control]?.[enabled ? "enable" : "disable"]) map[control][enabled ? "enable" : "disable"]();
  });
}

function setPortalBackgroundInert(inert) {
  document.querySelectorAll(".world,.topbar,.chapter-rail,.scene,.dock,.return-origin").forEach(element => {
    element.inert = inert;
  });
}

function initializePortalMap(city) {
  if (!window.maplibregl) return;
  if (!portalMap) {
    portalMap = new maplibregl.Map({
      container:"portal-map",
      style:"https://tiles.openfreemap.org/styles/dark",
      center:city.coordinates,
      zoom:12.1,
      bearing:-8,
      pitch:42,
      interactive:false,
      attributionControl:false,
      fadeDuration:reduceMotion.matches ? 0 : 300
    });
    portalMap.on("styleimagemissing", event => {
      if (!portalMap.hasImage(event.id)) portalMap.addImage(event.id,{width:1,height:1,data:new Uint8Array([0,0,0,0])});
    });
    portalMap.once("load", () => cityPortal.classList.add("portal-map-ready"));
  } else {
    portalMap.resize();
    portalMap.jumpTo({center:city.coordinates,zoom:12.1,bearing:-8,pitch:42});
  }
}

function renderPortalProjects(city) {
  const list = document.querySelector("#portal-project-list");
  cityPortalCard.classList.remove("showing-projects");
  list.hidden = true;
  list.innerHTML = city.projectIds.map(id => {
    const project = projects.find(item => item.id === id);
    return project ? `<button type="button" data-portal-project="${escapeHTML(project.id)}"><small>${escapeHTML(project.category)}</small><strong>${escapeHTML(project.title)}</strong><span>Open field note →</span></button>` : "";
  }).join("");
}

function getPortalControls() {
  return [...cityPortal.querySelectorAll("button:not([disabled]):not([tabindex='-1']),[href]:not([tabindex='-1']),[tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function openCityPortal(cityId, trigger=document.activeElement) {
  const city = cityArrivals[cityId];
  if (!city) return;
  closeProject({restoreFocus:false});
  if (!cityPortal.hidden) closeCityPortal({restoreFocus:false});
  activeCityArrival = city;
  portalTrigger = trigger instanceof HTMLElement ? trigger : document.activeElement;
  document.querySelector("#portal-eyebrow").textContent = city.eyebrow;
  document.querySelector("#portal-title").textContent = city.title;
  document.querySelector("#portal-introduction").textContent = city.introduction;
  const affiliation = document.querySelector("#portal-affiliation");
  affiliation.hidden = !city.affiliation;
  affiliation.textContent = city.affiliation || "";
  document.querySelector("#portal-highlights").innerHTML = city.highlights.map(item => `<div><strong>${escapeHTML(item.value)}</strong><span>${escapeHTML(item.label)}</span></div>`).join("");
  document.querySelector("#portal-primary").textContent = city.primaryActionLabel;
  document.querySelector("#portal-secondary").textContent = city.secondaryActionLabel;
  document.querySelector("#portal-journey").textContent = city.journeyLabel;
  document.querySelector("#portal-credit").textContent = city.imageCredit;
  document.querySelector(".portal-visual").setAttribute("aria-label",city.imageAlt);
  renderPortalProjects(city);
  portalScrollPosition = window.scrollY;
  cityPortal.hidden = false;
  document.body.classList.add("portal-open");
  document.body.style.top = `-${portalScrollPosition}px`;
  setMapInteraction(false);
  setPortalBackgroundInert(true);
  initializePortalMap(city);
  window.requestAnimationFrame(() => cityPortal.classList.add("is-visible"));
  cityPortal.querySelector(".city-portal-close").focus();
}

function closeCityPortal({restoreFocus=true}={}) {
  if (cityPortal.hidden) return;
  cityPortal.classList.remove("is-visible");
  cityPortal.hidden = true;
  document.body.classList.remove("portal-open");
  document.body.style.top = "";
  setPortalBackgroundInert(false);
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0,portalScrollPosition);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  setMapInteraction(true);
  if (restoreFocus && portalTrigger instanceof HTMLElement && portalTrigger.isConnected) portalTrigger.focus();
  portalTrigger = null;
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

function renderDrawerNavigation(project, locationKey) {
  const index = projects.findIndex(item => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const previousButton = document.querySelector("#previous-project");
  const nextButton = document.querySelector("#next-project");
  previousButton.dataset.targetProject = previous.id;
  previousButton.setAttribute("aria-label", `Previous project: ${previous.title}`);
  nextButton.dataset.targetProject = next.id;
  nextButton.setAttribute("aria-label", `Next project: ${next.title}`);
  document.querySelector("#drawer-return-omaha").hidden = locationKey === "omaha";

  const choices = document.querySelector("#drawer-location-choices");
  choices.hidden = !project.locationKeys;
  choices.innerHTML = project.locationKeys ? project.locationKeys.map(key => {
    const location = ATLAS_LOCATIONS[key];
    return `<button type="button" data-project-location="${escapeHTML(key)}" aria-current="${key === locationKey}">${escapeHTML(location.city)}, ${escapeHTML(location.state)}</button>`;
  }).join("") : "";
}

function openDrawer(project, trigger, locationKey=getProjectLocationKeys(project)[0]) {
  closeCityPortal({restoreFocus:false});
  setSelectedProject(project.id,locationKey);
  projectTrigger = trigger || document.activeElement;
  const location = ATLAS_LOCATIONS[locationKey];
  document.querySelector("#drawer-number").textContent = `Field note ${project.number}`;
  document.querySelector("#drawer-location").textContent = project.locationKeys
    ? `${location.city}, ${location.state} · approximate city-level location / ${project.category}`
    : `${project.location} / ${project.category}`;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#drawer-description").textContent = project.summary;
  document.querySelector("#drawer-stat").textContent = project.stat;
  document.querySelector("#drawer-stat-label").textContent = project.statLabel;
  const details = document.querySelector("#field-note-details");
  details.hidden = !project.details;
  details.innerHTML = project.details ? project.details.map(([label,value]) => `<section><h3>${escapeHTML(label)}</h3><p>${escapeHTML(value)}</p></section>`).join("") : "";
  document.querySelector("#drawer-methods").innerHTML = `<small>Methods and lenses</small>${project.methods.map(method => `<span>${escapeHTML(method)}</span>`).join("")}`;
  renderDrawerNavigation(project,locationKey);
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
  setCurrentLocationDisplay(destination);
  if (!mapReady) {
    onArrival?.();
    return;
  }
  map.once("moveend", () => onArrival?.());
  const camera = {center:target.coordinates,zoom:target.zoom,bearing:target.bearing,pitch:target.pitch};
  if (reduceMotion.matches) map.jumpTo(camera);
  else map.flyTo({...camera,duration:1550,essential:false,curve:1.25});
}

function getLocationLabel(locationKey) {
  const location = ATLAS_LOCATIONS[locationKey];
  return location ? location.city : "Project location";
}

function openArrivalContent(project, trigger, locationKey, showPortal) {
  if (showPortal && locationKey === "westDesMoines") {
    openCityPortal("west-des-moines",trigger);
    return;
  }
  if (showPortal && locationKey === "omaha") {
    openCityPortal("omaha",trigger);
    return;
  }
  openDrawer(project,getProjectListButton(project.id) || trigger,locationKey);
}

function navigateToProject(project, trigger, locationKey, {showPortal=false}={}) {
  const trip = ++journeySequence;
  const previousLocationKey = currentDestination;
  const locationChanged = previousLocationKey !== locationKey;
  window.clearTimeout(journeyTimer);
  map?.stop();
  closeProject({restoreFocus:false});
  closeCityPortal({restoreFocus:false});
  setSelectedProject(project.id,locationKey);

  if (!locationChanged) {
    setCoordinates(ATLAS_LOCATIONS[locationKey].coordinates);
    returnOrigin.hidden = locationKey === "omaha";
    openArrivalContent(project,trigger,locationKey,showPortal);
    return;
  }

  site.classList.add("journey-active","traveling");
  site.classList.toggle("location-west-des-moines",locationKey === "westDesMoines");
  travelStatus.textContent = `Traveling · ${getLocationLabel(previousLocationKey)} → ${getLocationLabel(locationKey)}`;
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  const regionalRoute = (previousLocationKey === "omaha" && locationKey === "westDesMoines")
    || (previousLocationKey === "westDesMoines" && locationKey === "omaha");
  setRouteVisible(regionalRoute);
  flyToLocation(locationKey, () => {
    if (trip !== journeySequence) return;
    site.classList.remove("journey-active","traveling");
    setCoordinates(ATLAS_LOCATIONS[locationKey].coordinates);
    window.requestAnimationFrame(() => setCoordinates(ATLAS_LOCATIONS[locationKey].coordinates));
    if (!regionalRoute || locationKey === "omaha") setRouteVisible(false);
    travelStatus.textContent = `Arrived · ${getLocationLabel(locationKey)}`;
    returnOrigin.hidden = locationKey === "omaha";
    setSelectedProject(project.id,locationKey);
    openArrivalContent(project,trigger,locationKey,showPortal);
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1200);
  });
}

function returnToOmaha() {
  const trip = ++journeySequence;
  const previousLocationKey = currentDestination;
  window.clearTimeout(journeyTimer);
  map?.stop();
  closeProject({restoreFocus:false});
  closeCityPortal({restoreFocus:false});
  site.classList.add("journey-active","returning");
  site.classList.remove("location-west-des-moines","traveling");
  setSelectedProject("omaha","omaha");
  travelStatus.textContent = `Returning · ${getLocationLabel(previousLocationKey)} → Omaha`;
  travelStatus.hidden = false;
  returnOrigin.hidden = true;
  setRouteVisible(previousLocationKey === "westDesMoines");
  flyToLocation("omaha", () => {
    if (trip !== journeySequence) return;
    site.classList.remove("journey-active","returning");
    setCoordinates(ATLAS_LOCATIONS.omaha.coordinates);
    window.requestAnimationFrame(() => setCoordinates(ATLAS_LOCATIONS.omaha.coordinates));
    setRouteVisible(false);
    travelStatus.textContent = "Returned · Omaha";
    setSelectedProject("omaha","omaha");
    openCityPortal("omaha",document.querySelector('.dock [data-go="atlas"]'));
    journeyTimer = window.setTimeout(() => { travelStatus.hidden = true; }, 1200);
  });
}

function openProject(id, trigger=document.activeElement, requestedLocationKey=null) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const locationKey = requestedLocationKey || projectLocationMemory.get(project.id) || getProjectLocationKeys(project)[0];
  const cityBeaconSelected = Boolean(trigger?.dataset?.mapProject || trigger?.classList?.contains("map-hotspot"));
  const showPortal = cityBeaconSelected && (
    locationKey === "westDesMoines"
    || (locationKey === "omaha" && currentDestination !== "omaha")
  );
  navigateToProject(project,trigger,locationKey,{showPortal});
}

function getDrawerControls() {
  return [...drawer.querySelectorAll("button:not([disabled]):not([tabindex='-1']),[href]:not([tabindex='-1']),input:not([disabled]):not([tabindex='-1']),[tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function goTo(id) { document.getElementById(id)?.scrollIntoView({behavior:reduceMotion.matches ? "auto" : "smooth"}); }

function backToProjectList() {
  const target = getProjectListButton(activeProjectId);
  closeProject({restoreFocus:false});
  closeCityPortal({restoreFocus:false});
  document.querySelector("#work").scrollIntoView({behavior:reduceMotion.matches ? "auto" : "smooth",block:"start"});
  window.setTimeout(() => target?.focus(), reduceMotion.matches ? 0 : 450);
}

renderProjectLists();
initializeMap();
returnOrigin.addEventListener("click",returnToOmaha);
document.querySelectorAll("[data-portal-close]").forEach(button => button.addEventListener("click",() => closeCityPortal()));
document.querySelector("#portal-primary").addEventListener("click",() => {
  if (!activeCityArrival) return;
  if (activeCityArrival.projectIds.length === 1) {
    const returnTarget = portalTrigger;
    const projectId = activeCityArrival.projectIds[0];
    openProject(projectId,getProjectListButton(projectId) || returnTarget);
    return;
  }
  const list = document.querySelector("#portal-project-list");
  list.hidden = false;
  cityPortalCard.classList.add("showing-projects");
  const firstProject = list.querySelector("button");
  firstProject?.focus();
});
document.querySelector("#portal-secondary").addEventListener("click",() => closeCityPortal());
document.querySelector("#portal-project-list").addEventListener("click",event => {
  const button = event.target.closest("[data-portal-project]");
  if (!button) return;
  const returnTarget = portalTrigger;
  openProject(button.dataset.portalProject,getProjectListButton(button.dataset.portalProject) || returnTarget);
});
document.querySelector("#previous-project").addEventListener("click",event => {
  const projectId = event.currentTarget.dataset.targetProject;
  openProject(projectId,getProjectListButton(projectId));
});
document.querySelector("#next-project").addEventListener("click",event => {
  const projectId = event.currentTarget.dataset.targetProject;
  openProject(projectId,getProjectListButton(projectId));
});
document.querySelector("#back-to-project-list").addEventListener("click",backToProjectList);
document.querySelector("#drawer-return-omaha").addEventListener("click",returnToOmaha);
document.querySelector("#drawer-location-choices").addEventListener("click",event => {
  const button = event.target.closest("[data-project-location]");
  if (!button) return;
  const project = projects.find(item => item.id === activeProjectId);
  if (project) navigateToProject(project,getProjectListButton(project.id),button.dataset.projectLocation);
});
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click",() => goTo(button.dataset.go)));
document.addEventListener("click",event => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project,projectButton);
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click",() => closeProject()));
document.addEventListener("keydown",event => {
  const keyboardProject = event.target.closest?.("[data-project]");
  if (drawer.hidden && cityPortal.hidden && keyboardProject && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProject(keyboardProject.dataset.project,keyboardProject);
    return;
  }
  if (!cityPortal.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeCityPortal();
      return;
    }
    if (event.key !== "Tab") return;
    const controls = getPortalControls();
    if (!controls.length) {
      event.preventDefault();
      cityPortalCard.focus();
      return;
    }
    const first = controls[0];
    const last = controls[controls.length-1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
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
