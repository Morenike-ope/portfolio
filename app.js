/*
 * EDITABLE PROJECT ATLAS DATA
 * Project text and location metadata live here. City-center coordinates are
 * retained as project facts where no precise project site is known.
 * Keep every TODO until Morenike supplies verified Inclusivity WDSM information.
 */
const PROJECT_LOCATIONS = {
  omaha: { city: "Omaha", state: "Nebraska", coordinates: [-95.9345, 41.2565] },
  westDesMoines: { city: "West Des Moines", state: "Iowa", coordinates: [-93.7113, 41.5772] },
  marshalltown: { city: "Marshalltown", state: "Iowa", coordinates: [-92.9123, 42.0489] },
  ottumwa: { city: "Ottumwa", state: "Iowa", coordinates: [-92.4083, 41.0160] },
  wallaWalla: { city: "Walla Walla", state: "Washington", coordinates: [-118.3430, 46.0646] }
};

/*
 * FEATURED PROJECT EDITING
 * - `featured:false` removes a project from the homepage without affecting its
 *   Project List card or case study.
 * - `featuredOrder` changes homepage order and desktop placement.
 * - `featuredLabel` and `featuredStat` override homepage presentation only.
 * - `featuredAccent` supports "teal" or "amber".
 * - `animationDelay` and `animationDuration` stagger the restrained signal.
 *   Set `featuredAnimated:false` to keep an individual feature static.
 * Add a new project by copying a complete project record and assigning a unique
 * id, number, verified content, and featured presentation fields.
 */
const projects = [
  {
    id:"omaha", number:"01", title:"We Make Omaha", city:"Omaha", state:"Nebraska",
    featured:true, featuredOrder:1, featuredLabel:"Comprehensive planning", featuredStat:"50K+ responses", featuredAccent:"teal", animationDelay:"0s", animationDuration:"5.8s",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Comprehensive planning",
    short:"Turning community knowledge into a citywide planning framework.",
    summary:"Work involving community engagement analysis, scenario planning, spatial research, and implementation-focused reporting.",
    role:"Planning practice", methods:["Qualitative coding","Survey analysis","Spatial synthesis"],
    findings:[], deliverables:[], skills:[], images:[], stat:"50K+", statLabel:"resident comments analyzed",
    location:"Omaha · approximate city-center location", locationKey:"omaha"
  },
  {
    id:"future-lab", number:"02", title:"Future Lab — Scenario Choosing Workshop", city:"Omaha", state:"Nebraska",
    featured:true, featuredOrder:2, featuredLabel:"Scenario choosing", featuredStat:"700 responses", featuredAccent:"amber", animationDelay:".7s", animationDuration:"6.4s",
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
    locationKey:"omaha",
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
    featured:true, featuredOrder:3, featuredLabel:"Public accountability", featuredStat:"32 indicators", featuredAccent:"teal", animationDelay:"1.4s", animationDuration:"7.1s",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Civic technology and public accountability",
    short:"Making adopted commitments visible, measurable, and accountable.",
    summary:"A public-facing framework connecting plan commitments to actions, indicators, annual reporting, and place-based projects.",
    role:"Public accountability", methods:["Information design","Data governance","Public accountability"],
    findings:[], deliverables:[], skills:[], images:[], stat:"32", statLabel:"implementation indicators",
    location:"Omaha · approximate city-center location", locationKey:"omaha"
  },
  {
    id:"plans", number:"04", title:"Plan Quality and Implementation Research", city:"Marshalltown", state:"Iowa",
    featured:true, featuredOrder:4, featuredLabel:"Comparative research", featuredStat:"3 cities · 10 criteria", featuredAccent:"amber", animationDelay:"2.1s", animationDuration:"6.8s",
    coordinates:[-92.9123,42.0489], approximate:true, category:"Applied research",
    short:"Following the path from public vision to administrative action.",
    summary:"A comparative evaluation of comprehensive plans in Marshalltown, Iowa; Walla Walla, Washington; and Ottumwa, Iowa, including equity, implementation responsibility, and monitoring.",
    role:"Applied research", methods:["Comparative research","Content analysis","Plan evaluation"],
    findings:[], deliverables:[], skills:[], images:[], stat:"10", statLabel:"plan-quality criteria",
    location:"Regional research · Marshalltown, Ottumwa, and Walla Walla",
    locationKeys:["marshalltown","ottumwa","wallaWalla"]
  },
  {
    id:"access", number:"05", title:"Employment Access and Housing", city:"Omaha", state:"Nebraska",
    featured:true, featuredOrder:5, featuredLabel:"Current research", featuredStat:"Research in progress", featuredAccent:"teal", animationDelay:"2.8s", animationDuration:"7.6s",
    coordinates:[-95.9345,41.2565], approximate:true, category:"Current research",
    short:"Testing how affordable housing connects residents to opportunity.",
    summary:"Research examining how affordable housing locations connect residents with employment opportunities. Spatial mismatch is one explanation being tested, not a predetermined conclusion.",
    role:"Current research", methods:["GIS","Accessibility analysis","Equity research"],
    findings:[], deliverables:[], skills:[], images:[], stat:"1", statLabel:"explanation among several",
    location:"Omaha · approximate city-center location", locationKey:"omaha"
  },
  {
    id:"wdsm", number:"06", title:"Inclusivity WDSM Project", city:"West Des Moines", state:"Iowa",
    featured:true, featuredOrder:6, featuredLabel:"Academic research", featuredStat:"Iowa State · 2024", featuredAccent:"amber", animationDelay:"3.5s", animationDuration:"6.1s",
    coordinates:[-93.7113,41.5772], approximate:true, category:"Academic research",
    institution:"Iowa State University",
    short:"An Iowa State University project located in West Des Moines, Iowa.",
    summary:"TODO: Morenike to provide project summary.", role:"TODO: Morenike to provide",
    methods:["TODO: Morenike to provide methods"], findings:["TODO: Morenike to provide"],
    deliverables:["TODO: Morenike to provide"], skills:["TODO: Morenike to provide"], images:["TODO: Morenike to provide"],
    stat:"ISU", statLabel:"Iowa State University", location:"West Des Moines Project Site · approximate city-level location",
    locationKey:"westDesMoines",
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
 * CASE-STUDY CONTENT
 * These additions enrich the same project records used by the map and project
 * list. Values beginning with `TODO: Morenike to provide` are intentionally
 * filtered by the renderer and never appear on the public site.
 */
const PROJECT_CASE_STUDIES = {
  omaha: {
    role:"Planning, engagement analysis, and implementation practice",
    methods:["Qualitative coding","Survey analysis","Scenario planning"],
    evidence:"50K+ qualitative responses across the broader engagement process",
    caseStudy:[
      {title:"Project context", body:"We Make Omaha is the City of Omaha’s comprehensive planning process, bringing public knowledge, technical analysis, and implementation planning together to guide long-term decisions."},
      {title:"The analytical questions", items:["Which priorities appeared consistently across engagement methods?","How did preferences differ among demographic and geographic groups?","Which concerns were citywide and which were place-specific?","How could qualitative feedback become implementable policies and indicators?"]},
      {title:"My contribution", body:"My work included qualitative coding and synthesis, survey and focus-group analysis, scenario planning, demographic and geographic comparison, public reporting, implementation planning, and coordination across departments."},
      {title:"Engagement evidence", items:["More than 50,000 qualitative resident responses analyzed across the broader engagement process","3,083 responses to the opening survey","Approximately 300 participants in the Values and Visioning Workshop","Seven district listening sessions and multiple focus-group cohorts"]},
      {title:"How the work was used", body:"Coding frameworks and data trackers helped translate recurring themes, subgroup differences, and place-specific concerns into planning findings and implementation priorities."},
      {title:"Skills and tools", body:"Qualitative analysis, survey analysis, demographic comparison, geographic comparison, scenario planning, public reporting, implementation planning, and cross-departmental coordination."}
    ]
  },
  "future-lab": {
    evidence:"700 total responses",
    caseStudy:[
      {title:"Project context", body:"Future Lab was a distinct scenario-choosing phase within We Make Omaha. Participants compared alternative growth scenarios and identified preferred places, values, and actions for Omaha’s future."},
      {title:"My contribution", body:"I supported analysis and communication of participant responses, including scenario comparison, demographic and ZIP-code cross-tabulation, geographic priorities, values, and preferred actions."},
      {title:"Participant and geographic patterns", items:["Ages 25–44 represented approximately 59% of participants","Household incomes of $50,000–$100,000 represented approximately 44%","Frequently represented ZIP codes included 68106, 68104, and 68132","Leading geographic priorities included transit station areas, downtown and the urban core, and North and South Omaha"]},
      {title:"Interpretation", body:"Walkability and better transit were prominent values and actions. The analysis translated community preferences into planning direction while keeping scenario, demographic, and geographic differences visible."},
      {title:"Scenario results", visualization:"futureLabScenarios"},
      {title:"Methods", body:"Survey-response analysis, scenario comparison, cross-tabulation, demographic analysis, ZIP-code analysis, spatial analysis, data visualization, and community-engagement reporting."}
    ]
  },
  tracker: {
    role:"Data governance, information design, and public accountability",
    methods:["Performance measurement","Data governance","Information design"],
    evidence:"32 implementation indicators",
    caseStudy:[
      {title:"Project context", body:"The Implementation Tracker is a public-communication and accountability framework connecting plan commitments with indicators, projects, policies, and annual reporting."},
      {title:"Governance questions", items:["What should be measured?","How should progress be communicated?","Who is responsible for updating information?","How can residents see whether commitments are being implemented?","How should indicators connect to policies and projects?"]},
      {title:"Contribution and structure", body:"The work organizes 32 implementation indicators alongside status and trend tracking, project mapping, policy relationships, and annual reporting."},
      {title:"Public use", body:"Accessibility, responsive design, and plain-language progress communication help residents follow how plan commitments move toward implementation."},
      {title:"Deliverables", body:"Public-facing progress communication, indicator and trend structure, mapped projects, policy relationships, and an annual reporting framework."}
    ]
  },
  plans: {
    role:"Comparative plan evaluation and policy research",
    methods:["Content analysis","0–2 criteria coding","Comparative research"],
    evidence:"10 plan-quality criteria across 3 cities",
    caseStudy:[
      {title:"Research context", body:"A comparative evaluation of written comprehensive plans in Marshalltown, Iowa; Ottumwa, Iowa; and Walla Walla, Washington."},
      {title:"Evaluation framework", items:["Vision","Factual analysis","Consideration of alternatives","Goals","Substantive scope","Equity","Public participation","Organization","Implementation","Monitoring"]},
      {title:"Method", body:"Each plan is reviewed with a clarified 0–2 coding framework, allowing consistent comparison across ten criteria and three city cases."},
      {title:"Interpretive limit", body:"The study assesses the quality of written plans. It does not establish whether plan commitments were implemented or prove real-world outcomes."},
      {title:"Research locations", body:"Use the location controls above to move among Marshalltown, Ottumwa, and Walla Walla."}
    ]
  },
  access: {
    role:"Ongoing spatial and accessibility research",
    methods:["GIS","Accessibility measures","Equity analysis"],
    evidence:"Research in progress",
    caseStudy:[
      {title:"Research objective", body:"This ongoing research investigates relationships among employment location, housing affordability, transportation access, and unequal access to opportunity in Omaha."},
      {title:"Analytical approach", body:"The study examines employment accessibility, housing affordability, transportation access, the spatial distribution of jobs and workers, and demographic and socioeconomic differences."},
      {title:"Framework under study", body:"Spatial mismatch is treated as one possible explanatory framework to test—not as a predetermined conclusion."},
      {title:"Status", body:"Research in progress. Findings will be added only after the analysis is complete and verified."}
    ]
  },
  wdsm: {
    short:"An Iowa State University survey research project focused on inclusion in West Des Moines.",
    summary:"A collaborative Iowa State University research project examining inclusion in West Des Moines through survey development, data collection, analysis, interpretation, and reporting.",
    role:"Survey Team Lead",
    methods:["Survey development","Data analysis","Research reporting"],
    evidence:"Iowa State University · 2024",
    stat:"2024", statLabel:"Iowa State University research",
    caseStudy:[
      {title:"Project context", body:"The West Des Moines Inclusivity Index: Survey Report was completed as a collaborative research project at Iowa State University."},
      {title:"My role", body:"As Survey Team Lead, I led the survey component, including survey development, data collection, analysis, interpretation, and the final report."},
      {title:"Institution and date", body:"Iowa State University · 2024"},
      {title:"Research objective", body:"TODO: Morenike to provide"},
      {title:"Key findings", body:"TODO: Morenike to provide"},
      {title:"Related report", links:[{label:"West Des Moines Inclusivity Index: Survey Report",url:"https://doi.org/10.31274/usp-20241220-2"}]}
    ]
  }
};

projects.forEach(project => Object.assign(project, PROJECT_CASE_STUDIES[project.id] || {}));

const ANALYTICAL_WORKFLOW = [
  ["Question","Public priorities and implementation needs shape the inquiry."],
  ["Data preparation","Comments, surveys, locations, policies, and indicators become analyzable records."],
  ["Analysis","Coding, comparison, cross-tabulation, GIS, and measurement reveal patterns."],
  ["Interpretation","Context and community knowledge test what the patterns mean."],
  ["Communication","Maps, charts, reports, and trackers make evidence understandable."],
  ["Implementation","Useful measures connect findings to responsibility and action."]
];

const DATA_PRACTICE = [
  {title:"Qualitative analysis",projectId:"omaha",question:"Which priorities recur—and where do experiences differ?",data:"Resident comments, focus groups, interviews, and open-ended survey responses.",method:"Coding frameworks, synthesis, and comparison across engagement methods.",example:"More than 50,000 qualitative responses across the broader We Make Omaha process.",why:"Recurring and place-specific concerns could be translated into planning priorities."},
  {title:"Survey analysis",projectId:"future-lab",question:"How do priorities vary across participants and places?",data:"Scenario choices, age, income, ZIP code, values, geography, and preferred actions.",method:"Cross-tabulation, subgroup comparison, and careful interpretation.",example:"700 Future Lab responses analyzed across scenarios and participant characteristics.",why:"Differences remained visible instead of being collapsed into one headline result."},
  {title:"Spatial analysis",projectId:"access",question:"How do housing, jobs, transportation, and opportunity relate across space?",data:"Geographic, housing, employment, transportation, and demographic records.",method:"GIS, accessibility measures, and equity-oriented spatial comparison.",example:"Ongoing Employment Access and Housing research in Omaha.",why:"Geography helps test—not assume—possible barriers to opportunity."},
  {title:"Scenario analysis",projectId:"future-lab",question:"What do preferences across alternative growth futures reveal?",data:"Four scenario choices and related priorities, values, and actions.",method:"Scenario comparison with demographic and geographic cross-tabs.",example:"Neighborhood Hubs received 328 reported selections, approximately 47%.",why:"Scenario preferences could inform planning direction without erasing subgroup patterns."},
  {title:"Data visualization",projectId:"future-lab",question:"How can complex findings become legible without losing context?",data:"Survey results, categories, locations, and comparison groups.",method:"Accessible charts, maps, tables, dashboards, and explanatory captions.",example:"A labeled scenario-results chart with an accessible data table.",why:"Decision-makers and residents can see both the pattern and the evidence behind it."},
  {title:"Performance measurement",projectId:"tracker",question:"How can residents see whether adopted commitments are advancing?",data:"Indicators, status, trends, mapped projects, policies, and annual updates.",method:"Indicator design, reporting structure, and public information design.",example:"32 implementation indicators connected to public-facing progress communication.",why:"Accountability becomes observable rather than buried in internal systems."},
  {title:"Data governance",projectId:"tracker",question:"Who maintains public data, and how does it remain reliable over time?",data:"Indicator definitions, documentation, update responsibilities, and reporting cycles.",method:"Standards, ownership, continuity, access, and institutional coordination.",example:"An annual reporting framework linking indicators, policies, and projects.",why:"A useful tracker depends on maintainable data—not only a polished interface."}
];

/*
 * EDITABLE BEYOND THE MAP DATA
 * Update this small object whenever Morenike's listening or reading changes.
 * Keep `song` and `album` blank until a verified title is supplied; blank fields
 * are intentionally hidden by the renderer. Artwork and destination links below
 * were verified against the matching official Apple pages on July 24, 2026.
 *
 * HOW TO UPDATE
 * - Change the artist: edit `listening.artist`, `artwork`, and `artworkAlt`.
 * - Add a song or album: enter a verified title in `listening.song` or `.album`.
 * - Replace the Apple Music destination: edit `listening.url`.
 * - Change the current book: edit every field inside `reading.current`.
 * - Move a book to recently finished: copy its fields into `reading.recent`, then
 *   replace `reading.current` with the new current book.
 * - Add another book: add another reading record and render it using the same
 *   accessible book-card pattern in `renderBeyondTheMap`.
 * - Replace covers or Apple Books links: update that book's `cover`, `coverAlt`,
 *   and `url` together after verifying the title and author on Apple Books.
 */
const BEYOND_THE_MAP = {
  listening: {
    artist:"Imagine Dragons",
    status:"Currently in rotation",
    service:"Apple Music",
    song:"",
    album:"",
    url:"https://music.apple.com/us/artist/imagine-dragons/358714030",
    artwork:"https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/42/bf/95/42bf95fe-ba4d-2f0e-0697-2c488741bfa5/Job0c1ca847-69bf-490b-98c3-0806790836d2-166868814-PreviewImage_preview_image_nonvideo_sdr-Time1713981230503.png/1200x675mv.webp",
    artworkAlt:"Imagine Dragons artist artwork from Apple Music"
  },
  reading: {
    current: {
      title:"The Girls in the Snow",
      author:"Stacy Green",
      status:"Currently reading",
      service:"Apple Books",
      url:"https://books.apple.com/us/book/the-girls-in-the-snow/id1524446911",
      cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication124/v4/f3/01/d5/f301d5d3-8d83-2447-5ce6-04c5ce43a9e4/The-Girls-in-the-Snow-Apple.jpg/536x0w.webp",
      coverAlt:"Book cover of The Girls in the Snow by Stacy Green"
    },
    recent: {
      title:"Murder at the Mayfair Hotel",
      author:"C.J. Archer",
      status:"Recently finished",
      service:"Apple Books",
      url:"https://books.apple.com/us/book/murder-at-the-mayfair-hotel/id1522811768",
      cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication114/v4/ab/02/5d/ab025d4d-2cac-95f3-75af-aecf393f074b/MatMH_ebook_Final.jpg/536x0w.webp",
      coverAlt:"Book cover of Murder at the Mayfair Hotel by C.J. Archer"
    }
  }
};

const chapters = [{id:"home",label:"Home"},{id:"projects",label:"Projects"},{id:"data-practice",label:"Data Practice"},{id:"about",label:"About"},{id:"contact",label:"Contact"}];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const site = document.querySelector(".atlas-site");
const drawer = document.querySelector("#drawer");
const drawerPanel = drawer.querySelector(".project-drawer");
let projectTrigger = null;
let scrollPosition = 0;
let activeProjectId = "omaha";
let activeLocationKey = "omaha";
const projectLocationMemory = new Map();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

function isPublicValue(value) {
  return value != null && !String(value).startsWith("TODO: Morenike to provide");
}

function getProjectLocationKeys(project) {
  if (project.locationKeys?.length) return project.locationKeys;
  return [project.locationKey || "omaha"];
}

function getProjectListButton(projectId) {
  return document.querySelector(`#project-stack [data-project="${projectId}"]`);
}

function setSelectedProject(projectId, locationKey) {
  activeProjectId = projectId;
  activeLocationKey = locationKey;
  projectLocationMemory.set(projectId,locationKey);
  document.querySelectorAll("[data-project]").forEach(button => {
    if (button.dataset.project === projectId) button.setAttribute("aria-current","true");
    else button.removeAttribute("aria-current");
  });
}

function renderProjectLists() {
  const projectStack = document.querySelector("#project-stack");
  projects.forEach(project => {
    projectStack.insertAdjacentHTML("beforeend", `<button class="project-tile" type="button" data-project="${project.id}" aria-label="View ${escapeHTML(project.title)} case study">
      <span class="tile-number">${project.number}</span>
      <span class="tile-copy"><small>${escapeHTML(project.category)} · ${escapeHTML(project.city)}, ${escapeHTML(project.state)}</small><strong>${escapeHTML(project.title)}</strong><em>${escapeHTML(project.short)}</em>
      <span class="tile-role">My role · ${escapeHTML(project.role)}</span><span class="tile-methods">${project.methods.slice(0,3).map(method => `<i>${escapeHTML(method)}</i>`).join("")}</span>
      <span class="tile-action">View case study ↗</span></span>
      <span class="tile-stat"><strong>${escapeHTML(project.stat)}</strong><small>${escapeHTML(project.evidence || project.statLabel)}</small></span>
    </button>`);
  });
}

function renderFeaturedProjects() {
  const field = document.querySelector("#featured-projects");
  const featuredProjects = projects
    .filter(project => project.featured !== false)
    .sort((a,b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
  field.innerHTML = featuredProjects.map((project,index) => {
    const animated = project.featuredAnimated !== false;
    const accent = project.featuredAccent === "amber" ? "amber" : "teal";
    const location = `${project.city}, ${project.state}`;
    const evidence = project.featuredStat || project.evidence || project.statLabel;
    return `<button class="featured-project feature-${index+1} accent-${accent}${animated ? "" : " signal-static"}" type="button"
      data-project="${escapeHTML(project.id)}"
      style="--feature-delay:${escapeHTML(project.animationDelay || "0s")};--feature-duration:${escapeHTML(project.animationDuration || "6.5s")}"
      aria-label="Open case study: ${escapeHTML(project.title)}, ${escapeHTML(location)}">
      <span class="featured-signal" aria-hidden="true"><i></i></span>
      <span class="featured-copy">
        <small>${escapeHTML(project.featuredLabel || project.category)} · ${escapeHTML(location)}</small>
        <strong>${escapeHTML(project.title)}</strong>
        <em>${escapeHTML(project.short)}</em>
        <b>${escapeHTML(evidence)}</b>
      </span>
    </button>`;
  }).join("");
}

function renderDataPractice() {
  const workflow = document.querySelector("#analytical-workflow");
  workflow.innerHTML = `<ol>${ANALYTICAL_WORKFLOW.map(([stage,note],index) => `<li><span>${String(index+1).padStart(2,"0")}</span><strong>${escapeHTML(stage)}</strong><small>${escapeHTML(note)}</small></li>`).join("")}</ol>
    <p>Not always linear: community knowledge can reshape the question, while implementation needs determine which measures are useful.</p>`;
  document.querySelector("#data-practice-list").innerHTML = DATA_PRACTICE.map((area,index) => `
    <details class="practice-detail"${index === 0 ? " open" : ""}>
      <summary><span>${String(index+1).padStart(2,"0")}</span><strong>${escapeHTML(area.title)}</strong><em>Explore method</em></summary>
      <div class="practice-detail-body">
        <dl><div><dt>Question</dt><dd>${escapeHTML(area.question)}</dd></div><div><dt>Data</dt><dd>${escapeHTML(area.data)}</dd></div><div><dt>Method</dt><dd>${escapeHTML(area.method)}</dd></div><div><dt>Real example</dt><dd>${escapeHTML(area.example)}</dd></div><div><dt>Why it mattered</dt><dd>${escapeHTML(area.why)}</dd></div></dl>
        <button type="button" data-method-project="${escapeHTML(area.projectId)}">Open related case study ↗</button>
      </div>
    </details>`).join("");
}

function renderBeyondTheMap() {
  const container = document.querySelector("#beyond-map-grid");
  if (!container) return;
  const listening = BEYOND_THE_MAP.listening;
  const currentBook = BEYOND_THE_MAP.reading.current;
  const recentBook = BEYOND_THE_MAP.reading.recent;
  const listeningDetails = [listening.song, listening.album]
    .filter(Boolean)
    .map(detail => `<span>${escapeHTML(detail)}</span>`)
    .join("");

  container.innerHTML = `
    <article class="personal-panel listening-panel">
      <div class="personal-panel-heading">
        <span class="personal-icon" aria-hidden="true">♫</span>
        <div><small>Listening</small><h4>What I’m listening to</h4></div>
      </div>
      <div class="listening-artwork media-frame">
        <div class="media-fallback" aria-hidden="true"><span>♫</span></div>
        <img src="${escapeHTML(listening.artwork)}" alt="${escapeHTML(listening.artworkAlt)}" loading="lazy" decoding="async">
        <span class="soundwave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
      </div>
      <div class="listening-copy">
        <span class="personal-status">${escapeHTML(listening.status)}</span>
        <h5>${escapeHTML(listening.artist)}</h5>
        ${listeningDetails ? `<p class="listening-details">${listeningDetails}</p>` : ""}
        <span class="service-label">${escapeHTML(listening.service)}</span>
        <a class="personal-link" href="${escapeHTML(listening.url)}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${escapeHTML(listening.artist)} on Apple Music in a new tab">Listen on Apple Music <span aria-hidden="true">↗</span></a>
      </div>
    </article>
    <article class="personal-panel reading-panel">
      <div class="personal-panel-heading">
        <span class="personal-icon" aria-hidden="true">⌑</span>
        <div><small>Reading</small><h4>What I’m reading</h4></div>
      </div>
      <div class="current-book">
        <div class="book-cover media-frame">
          <div class="media-fallback book-fallback" aria-hidden="true"><span>Read</span></div>
          <img src="${escapeHTML(currentBook.cover)}" alt="${escapeHTML(currentBook.coverAlt)}" loading="lazy" decoding="async">
        </div>
        <div class="book-copy">
          <span class="personal-status">${escapeHTML(currentBook.status)}</span>
          <h5>${escapeHTML(currentBook.title)}</h5>
          <p>${escapeHTML(currentBook.author)}</p>
          <span class="service-label">${escapeHTML(currentBook.service)}</span>
          <a class="personal-link" href="${escapeHTML(currentBook.url)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(currentBook.title)} by ${escapeHTML(currentBook.author)} in Apple Books in a new tab">View in Apple Books <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="recent-book">
        <div class="recent-cover media-frame">
          <div class="media-fallback book-fallback" aria-hidden="true"><span>Read</span></div>
          <img src="${escapeHTML(recentBook.cover)}" alt="${escapeHTML(recentBook.coverAlt)}" loading="lazy" decoding="async">
        </div>
        <div class="recent-copy">
          <span class="personal-status muted">${escapeHTML(recentBook.status)}</span>
          <h5>${escapeHTML(recentBook.title)}</h5>
          <p>${escapeHTML(recentBook.author)} · ${escapeHTML(recentBook.service)}</p>
        </div>
        <a class="recent-link" href="${escapeHTML(recentBook.url)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(recentBook.title)} by ${escapeHTML(recentBook.author)} in Apple Books in a new tab">View in Apple Books <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;

  container.querySelectorAll(".media-frame img").forEach(image => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest(".media-frame")?.classList.add("media-unavailable");
    }, {once:true});
  });
}

function initializeBeyondMapReveal() {
  const section = document.querySelector("#beyond-map");
  const panels = [...document.querySelectorAll("#beyond-map .personal-panel")];
  if (!section || !panels.length || reduceMotion.matches || !("IntersectionObserver" in window)) {
    panels.forEach(panel => panel.classList.add("revealed"));
    return;
  }
  section.classList.add("reveal-ready");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  }, {threshold:0.16});
  panels.forEach(panel => observer.observe(panel));
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

  const choices = document.querySelector("#drawer-location-choices");
  choices.hidden = !project.locationKeys;
  choices.innerHTML = project.locationKeys ? project.locationKeys.map(key => {
    const location = PROJECT_LOCATIONS[key];
    return `<button type="button" data-project-location="${escapeHTML(key)}" aria-current="${key === locationKey}">${escapeHTML(location.city)}, ${escapeHTML(location.state)}</button>`;
  }).join("") : "";
}

function renderFutureLabScenarios() {
  const rows = [
    ["Neighborhood Hubs",328,"47%"],
    ["Connected Corridors",191,"27%"],
    ["Urban Anchors",163,"23%"],
    ["Business as Usual",9,"1.3%"]
  ];
  return `<figure class="scenario-figure" aria-labelledby="scenario-chart-title">
    <figcaption id="scenario-chart-title">Reported Future Lab scenario selections</figcaption>
    <div class="scenario-bars" aria-hidden="true">${rows.map(([label,count,percent]) => `<div><span>${escapeHTML(label)}</span><i style="--bar:${count / 3.28}%"></i><strong>${count} · ${percent}</strong></div>`).join("")}</div>
    <div class="table-wrap" role="region" aria-label="Future Lab scenario results table" tabindex="0"><table><thead><tr><th>Scenario</th><th>Responses</th><th>Approximate share</th></tr></thead><tbody>${rows.map(row => `<tr><th>${escapeHTML(row[0])}</th><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody></table></div>
    <p>The four reported scenario counts total 691; percentages are approximate. The project recorded 700 total responses.</p>
  </figure>`;
}

function renderCaseStudySection(section, index) {
  if (!isPublicValue(section.body) && !section.items?.some(isPublicValue) && !section.links?.some(link => isPublicValue(link.label) && isPublicValue(link.url)) && !section.visualization) return "";
  const body = isPublicValue(section.body) ? `<p>${escapeHTML(section.body)}</p>` : "";
  const items = section.items?.filter(isPublicValue);
  const list = items?.length ? `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : "";
  const links = section.links?.filter(link => isPublicValue(link.label) && isPublicValue(link.url));
  const linkMarkup = links?.length ? `<div class="case-links">${links.map(link => `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`).join("")}</div>` : "";
  const visualization = section.visualization === "futureLabScenarios" ? renderFutureLabScenarios() : "";
  return `<details class="case-study-section"${index === 0 ? " open" : ""}><summary><span>${String(index+1).padStart(2,"0")}</span><h3>${escapeHTML(section.title)}</h3></summary><div>${body}${list}${visualization}${linkMarkup}</div></details>`;
}

function openDrawer(project, trigger, locationKey=getProjectLocationKeys(project)[0]) {
  setSelectedProject(project.id,locationKey);
  projectTrigger = trigger || document.activeElement;
  const location = PROJECT_LOCATIONS[locationKey];
  document.querySelector("#drawer-number").textContent = `Field note ${project.number}`;
  document.querySelector("#drawer-location").textContent = project.locationKeys
    ? `${location.city}, ${location.state} · approximate city-level location / ${project.category}`
    : `${project.location} / ${project.category}`;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#drawer-description").textContent = project.summary;
  document.querySelector("#drawer-stat").textContent = project.stat;
  document.querySelector("#drawer-stat-label").textContent = project.statLabel;
  const details = document.querySelector("#field-note-details");
  const caseStudy = (project.caseStudy || []).map(renderCaseStudySection).join("");
  details.hidden = !caseStudy;
  details.innerHTML = caseStudy;
  document.querySelector("#drawer-methods").innerHTML = `<small>Methods and lenses</small>${project.methods.filter(isPublicValue).map(method => `<span>${escapeHTML(method)}</span>`).join("")}`;
  renderDrawerNavigation(project,locationKey);
  scrollPosition = window.scrollY;
  drawer.hidden = false;
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${scrollPosition}px`;
  drawer.querySelector(".drawer-close").focus();
}

function openProject(id, trigger=document.activeElement, requestedLocationKey=null) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const locationKey = requestedLocationKey || projectLocationMemory.get(project.id) || getProjectLocationKeys(project)[0];
  closeProject({restoreFocus:false});
  openDrawer(project,trigger,locationKey);
}

function getDrawerControls() {
  return [...drawer.querySelectorAll("button:not([disabled]):not([tabindex='-1']),[href]:not([tabindex='-1']),input:not([disabled]):not([tabindex='-1']),[tabindex]:not([tabindex='-1'])")]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function goTo(id) { document.getElementById(id)?.scrollIntoView({behavior:reduceMotion.matches ? "auto" : "smooth",block:"start"}); }

function backToProjectList() {
  closeProject({restoreFocus:false});
  document.querySelector("#projects").scrollIntoView({behavior:reduceMotion.matches ? "auto" : "smooth",block:"start"});
  window.setTimeout(() => getProjectListButton(activeProjectId)?.focus(), reduceMotion.matches ? 0 : 450);
}

renderProjectLists();
renderFeaturedProjects();
renderDataPractice();
renderBeyondTheMap();
initializeBeyondMapReveal();
document.addEventListener("visibilitychange",() => {
  document.body.classList.toggle("signals-paused",document.hidden);
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
document.querySelector("#drawer-location-choices").addEventListener("click",event => {
  const button = event.target.closest("[data-project-location]");
  if (!button) return;
  const project = projects.find(item => item.id === activeProjectId);
  if (project) openProject(project.id,getProjectListButton(project.id),button.dataset.projectLocation);
});
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click",() => goTo(button.dataset.go)));
document.addEventListener("click",event => {
  const methodProject = event.target.closest("[data-method-project]");
  if (methodProject) {
    openProject(methodProject.dataset.methodProject,methodProject);
    return;
  }
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project,projectButton);
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click",() => closeProject()));
document.addEventListener("keydown",event => {
  const keyboardProject = event.target.closest?.("[data-project]");
  if (drawer.hidden && keyboardProject && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProject(keyboardProject.dataset.project,keyboardProject);
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
