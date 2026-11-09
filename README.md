# PressPoint · GitHub Page Content Guide

This file lists **everything the PressPoint GitHub page needs to say and show**, section by section, in the order it should appear. Each section gives:

- **Purpose**: what the section is for.
- **Content**: the final copy, taken from the capstone manuscript (*EW03 Manuscript*, October 2026). Use it as written or shorten it, but don't change facts or figures.
- **Assets**: images or files the section needs, with the manuscript figure they come from.

The source of truth is the manuscript. If the page and the manuscript ever disagree, the manuscript wins.

---

## Page map

| # | Section | Anchor | Source in manuscript |
|---|---|---|---|
| 0 | Navigation bar | — | — |
| 1 | Hero | `#top` | Title page, Abstract |
| 2 | About the project | `#about` | Abstract, Ch. I §1.1 |
| 3 | Research team | `#team` | Title page, Approval sheet, Acknowledgements |
| 4 | The problem | `#problem` | Ch. I §1.1, Ch. II §2.2.4, §2.3.2 |
| 5 | Objectives | `#objectives` | Ch. I §1.2 |
| 6 | Scope and limitations | `#scope` | Ch. I §1.5 |
| 7 | Methodology | `#methodology` | Ch. III |
| 8 | The system | `#system` | Ch. III §3.10, Ch. IV §4.2 |
| 9 | Results | `#results` | Ch. IV §4.3, §4.4 |
| 10 | Conclusion and recommendations | `#conclusion` | Ch. V |
| 11 | Links | `#links` | — |
| 12 | Footer | — | Title page |

---

## 0 · Navigation bar

**Purpose:** Let visitors jump to any section.

**Content:**
- Brand: **PressPoint** (links to top)
- Items: About · Team · Problem · Objectives · Methodology · System · Results · Links
- A visually hidden "Skip to content" link as the first focusable item.

---

## 1 · Hero

**Purpose:** Say in one screen what PressPoint is, who made it, and where to try it.

**Content:**

- **Eyebrow label:** Capstone Project · BS Information Technology, Major in Web and Mobile Application Development · College of Computer Studies · Laguna State Polytechnic University – Sta. Cruz Campus
- **Title:** PressPoint
- **Full title (subtitle):** A Cloud-Based Interactive Kiosk System with Real-Time Editorial Content Management for The Gears Publication, the Official Student Publication of LSPU – Sta. Cruz Campus
- **One-line summary:** A touchscreen kiosk and editorial dashboard that replaces flash-drive updates with real-time publishing, and adds campus navigation, searchable archives and a 360° virtual tour.
- **Buttons:**
  - Primary: **Open the live system** → `https://presspoint-gears.me`
  - Secondary: **Watch the demo** → demo video link
  - Tertiary: **Read the manuscript** → manuscript link

**Key figures strip** (four to five large numbers with labels):

| Figure | Label |
|---|---|
| **98.21%** | Black-box test passing rate (275 of 280 test instances) |
| **290** | Respondents in the user evaluation |
| **4.83–5.00** | Overall mean across all six acceptance criteria, *Highly Acceptable* |
| **6** | Kiosk modules on the main menu |
| **12** | Editor's Dashboard modules |

**Assets:** One hero image: the kiosk main menu (Figure 4.3, Kiosk User Page), or a photo of the actual kiosk terminal on campus.

---

## 2 · About the project

**Purpose:** Explain the project in plain language before any research detail.

**Content:**

> *The Gears* is the campus publication of LSPU – Sta. Cruz Campus, responsible for campus news, journalism and literary works. Until now, content reached the campus kiosk the manual way: files were carried from the publication office to the terminal on flash drives.
>
> PressPoint replaces that with one cloud-based platform. Editors and the publication's administrator manage news, events and archives from a web dashboard, and every approved update reaches the kiosk in real time with no trip to the terminal. On the kiosk, students, faculty and visitors can read the latest issue, browse digitized publications, find campus offices on a 2.5D interactive map, take a 360° virtual tour, and view the university's organizational chart, all from a security-locked touchscreen with no sign-in.

**Scope note** (small callout box):

> PressPoint was deliberately designed **without gamification or AI chatbot features**, to keep the platform focused on accurate news and reliable campus services.

**Keywords** (displayed as tags): Interactive Kiosk · Cloud-Based System · Editorial Content Management · Student Publication · Campus Information Services

---

## 3 · Research team

**Purpose:** Credit the people behind the study.

**Content:**

**Proponents**

| Name | Role |
|---|---|
| John Paul B. Bajao | Researcher |
| Justine Rheign D. Rebong | Researcher |
| Lance Aeriel T. Sisante | Researcher |

**Thesis Adviser**
- Gener F. Mosico, MSIT

**Committee on Oral Examination**
- Reynalen C. Justo, LPT, DIT
- Rachiel R. Rivano, PhD, Member
- Ma. Cezanne D. Dimaculangan, Member
- Edward S. Flores, MSIT, Member

**Research Coordinator:** Mark P. Bernardino, MSCS
**Associate Dean, CCS:** Mia V. Villarica, D.I.T.
**Chairperson, Research and Development:** Rosario G. Catapang, PhD, Ffp

**Partner organization:** *The Gears* Publication, LSPU – Sta. Cruz Campus. Publication adviser: Dr. Maida O. Sarmiento.

**Acknowledgements** (short paragraph):

> The proponents thank God Almighty; their thesis adviser, Gener F. Mosico, for his guidance from conceptualization to completion; the Oral Examination Committee for their insights; *The Gears* Publication for allowing the study and providing the necessary data and resources; and their families, friends and classmates for their support.

**Assets:** Optional headshot for each proponent and the adviser (square, same size). If there are no photos, use initials.

> ⚠️ Confirm with the panel before publishing committee names publicly. Some schools only list the adviser on public pages.

---

## 4 · The problem

**Purpose:** Show why the system was needed.

**Content:**

> *The Gears* Publication still relies on manual methods to disseminate campus news and manage student publications. Updates are carried to the kiosk on flash drives, which causes **delayed updates**, a **heavier administrative workload**, and **limited access to on-the-spot information**. There is no centralized, cloud-integrated system, no real-time synchronization, and no automated inquiry or navigation tool, which hurts most for **new enrollees and visitors** who need immediate guidance around campus. Leaving a kiosk in a public space also raises concerns about **security and proper use**.

**Problems identified** (shown as a list or cards):

1. No centralized digital infrastructure for publication content.
2. No real-time synchronization between the publication office and the kiosk.
3. Staff have to travel back and forth between the office and the kiosk terminal.
4. No automated inquiry or campus navigation tool for students and visitors.
5. Security concerns about an interactive kiosk in a public space.

**The technology gap** (from the literature review):

> Related systems offer digital signage, wayfinding or content delivery, but **usually only one of them**. Conventional signage is passive, standalone navigation apps need to be installed on a personal device and have no central administration, and student publication kiosks lack cloud synchronization. The gap is the **integration** of real-time editorial management, geospatial campus navigation and searchable publication archives in **one secure kiosk interface**.

Three gaps the study addresses:

| Gap | Description |
|---|---|
| **Integration gap** | Single-function systems don't combine editorial management, archives and navigation. |
| **Technology gap** | Campus publications still update kiosks by hand with flash drives. |
| **Evaluation gap** | Little formal assessment of kiosks built for student publications. |

**Assets (optional):** The flowchart of the current manual process (Ch. III), shown beside the proposed cloud workflow.

---

## 5 · Objectives

**Purpose:** State what the study set out to do. Everything in Results maps back to these.

**Content:**

**General objective**

> To design, test and evaluate the acceptance of PressPoint, a cloud-based interactive kiosk system with real-time editorial content management for *The Gears* Publication of Laguna State Polytechnic University – Sta. Cruz Campus.

**Specific objectives**

1. **Design and develop** a cloud-based interactive kiosk system with real-time editorial content management for *The Gears* Publication.
2. **Test** the system's major features using **Black-Box Testing**:
   1. **Content Management**: adding, editing, deleting, searching and publishing editorial content through the control panel.
   2. **Cloud Synchronization**: real-time syncing from the control panel to the kiosk terminal, with consistent data.
   3. **Geospatial Navigation and Interactive Campus Mapping**: showing the campus map, locating university offices and visualizing routes.
   4. **News Archive Management**: storing, retrieving, searching and displaying previously published content.
   5. **Security-Locked Kiosk Interface**: blocking unauthorized access and keeping the kiosk in a controlled mode.
   6. **Virtual Campus Tour**: 360° panoramic views of campus with interactive navigation and location information.
3. **Evaluate acceptability** on six criteria: Quality Factors · Perceived Ease of Use · Perceived Usefulness · Attitude Toward Using · Behavioral Intention to Use · User Experience.

**Who benefits** (compact list): *The Gears* Publication · Students · University Administration · Visitors and New Students · System Administrators · Researchers · Future Researchers

---

## 6 · Scope and limitations

**Purpose:** Be honest about the boundaries of the study. Panelists look for this.

**Content:**

**Scope**
- Remote synchronization of news, literary content and campus announcements through a cloud-based link.
- All major university offices are routable destinations on the interactive map.
- Academic rooms are view-only on the map, with no automated routing.
- The system is controlled from the publication office workstation to the kiosk terminal.
- A security-locked kiosk mode prevents unauthorized system access.
- Evaluation uses quantitative methods.
- The study area is LSPU – Sta. Cruz Campus.

**Limitations**
- Updates can't sync during a total internet outage, because the system relies on cloud synchronization.
- No turn-by-turn navigation to individual classrooms or laboratories.
- Virtual tour coverage is limited to 360° footage captured from **May 2026 to November 2026**.

---

## 7 · Methodology

**Purpose:** Show how the study was carried out and how the system was built.

### 7.1 Research design

> The study used a **descriptive-developmental** and **quantitative** research design. The descriptive phase gathered data on *The Gears*' current workflow and challenges through interviews, observation and consultation. The developmental phase guided the design, development, testing and evaluation of the system. The quantitative phase measured acceptability through survey questionnaires.

- **Locale:** *The Gears* Publication Office, LSPU – Sta. Cruz Campus
- **Data gathering:** an interview with *The Gears* adviser, Dr. Maida O. Sarmiento; direct observation of the flash-drive workflow; brainstorming sessions; internet research; a survey questionnaire.

### 7.2 Conceptual framework

> **Initialization**: problems in the current kiosk and dissemination process identified through observation, interviews and problem-solving sessions → **Methodology**: the system designed and developed with the Agile model → **Evaluation**: Black-Box Testing and user acceptance testing.

**Assets:** Figure 1.1, Conceptual Framework.

### 7.3 Development model: Agile SDLC

Show as a numbered cycle:

1. **Planning and requirement analysis**: interview with *The Gears* adviser, online research, technology gap analysis, brainstorming.
2. **System design and sprint planning**: interface layouts and design, with work split into sprints around cloud updates, interactive interfaces and geospatial navigation.
3. **Development and iterative testing**: features built sprint by sprint, each tested with publication staff and students.
4. **System evaluation and usability testing**: task-based scenarios such as locating campus rooms and accessing announcements.
5. **Deployment and continuous improvement**: deployed at LSPU – Sta. Cruz Campus with every revision from testing.
6. **Maintenance, optimization and future enhancement**: a maintenance plan and a **turnover agreement** in which the administrator and editorial board are trained, and they in turn train the next batch before they leave.

**Assets:** Figure 3.2, Agile Software Development Cycle Model.

### 7.4 Respondents and sampling

| Group | Population | Sample | Sampling |
|---|---|---|---|
| Administrator | 1 | 1 | Census (purposive) |
| Editors (editorial board) | 10 | 10 | Purposive (all members) |
| Students, all 9 colleges | 9,096 | 279 | Proportional stratified random sampling |
| **Total** | | **290** | |

Students by college: CAS 38 · CBAA 59 · CCS 22 · CCJE 11 · COE 54 · CIT 47 · CIHMT 14 · CONAH 10 · CTE 24

**System testers:** 10 IT professionals (BSIT graduates working as IT staff of the Municipality of Santa Cruz and in private companies, with 1 to 10 years of experience).

### 7.5 Instruments and evaluation

- **Functional testing:** Black-Box Testing on a pass/fail scale, carried out by the 10 IT experts.
- **User acceptance:** a survey questionnaire based on the **Technology Acceptance Model (TAM)** and **ISO/IEC 25010**, validated by the thesis adviser during the system demonstration and administered face-to-face.
- **Scale:** a 5-point Likert scale, with results summarized by weighted mean and standard deviation.

| Scale | Mean range | Description | Interpretation |
|---|---|---|---|
| 5 | 4.50–5.00 | Strongly Agree | Excellent |
| 4 | 3.50–4.49 | Agree | Very Satisfactory |
| 3 | 2.50–3.49 | Undecided | Satisfactory |
| 2 | 1.50–2.49 | Disagree | Fair |
| 1 | 1.00–1.49 | Strongly Disagree | Poor |

---

## 8 · The system

**Purpose:** Show what was actually built. This is the most visual section.

### 8.1 Architecture

> Users (students, faculty, staff and visitors) use the **kiosk interface**, which reads from the **central MySQL database**. Administrators and editors update that database through the **admin dashboard**. When an editor updates an article or event, the application stores it and pushes it to the kiosk right away, with no flash drive involved.

Flow: **Users → Kiosk Interface ⇄ Database ⇄ Admin Module**

**Assets:** Figure 4.1, System Architecture.

### 8.2 User roles

| Role | What they do |
|---|---|
| **Students, faculty and visitors** | Use the public kiosk with no sign-in |
| **Editors** | Manage and submit content through the Editor's Dashboard |
| **Administrator** | Reviews, approves or sends back newsletters; creates editor accounts |
| **Super Administrator** | Oversees all content and manages administrator accounts |

Access is enforced with role-based access control (RBAC).

### 8.3 Kiosk User Page

The touchscreen main menu has **six modules**:

| Module | What it does |
|---|---|
| **Latest News** | The current newsletter, with news, announcements and events |
| **Campus Map** | A 2.5D interactive map with automated routing to university offices; a QR code hands the route to your phone |
| **Gears Archives** | Searchable digitized Folios, Tabloids, Magazines and Newsletters |
| **Virtual Tour** | A 360° panoramic campus tour with interactive hotspots |
| **About LSPU** | The institutional profile |
| **LSPU Org Chart** | Organizational boards of colleges and organizations |

How users interact: tap to navigate, swipe to read full newsletters, use an on-screen keyboard to search offices, drag to pan the 360° tour and tap hotspots to move between scenes, and scan QR codes to continue on a phone. The kiosk runs in a **security-locked mode**, so users can't reach the terminal's operating system.

**Assets:** Figure 4.3, Kiosk User Page, plus one screenshot per module if possible.

### 8.4 Editor's Dashboard

Twelve modules: **Dashboard Overview · Events · News · Archives · Locations · Org Board · Tour Mapping · About LSPU · Kiosk Videos · Screen Control · Branding · Profile**

Highlights:
- **News composer:** arrange headlines and widgets on a drag-and-drop canvas.
- **Events:** title, description, date and location for campus events.
- **Archives:** upload and manage Folios, Tabloids, Magazines and Newsletters.
- **Locations and Tour Mapping:** set routable destinations and link buildings to 360° tour frames.
- **Kiosk Videos:** upload MP4s for immediate broadcast or idle animation.
- **Screen Control:** remotely freeze or resume the kiosk for maintenance or misuse.

**Assets:** Figure 4.4, Editor's Dashboard; Figure 4.5, Geospatial Navigation and Tour Mapping; Figure 4.6, Organizational Board.

### 8.5 Admin and Super Admin

- **Admin Dashboard:** review, approve or send back newsletters submitted by editors; manage editor accounts; generate passwords.
- **Super Admin Dashboard:** an overview of all published and uploaded content, plus administrator account management.

**Assets:** Figure 4.7, Admin Dashboard; Figures 4.8 and 4.9, Super Admin Dashboard and Overview.

### 8.6 Database

> A central MySQL database separates **System Users** (editor, admin and super admin accounts) from **Editorial Content** (news, events, archives, PDF records, institutional profiles) and **Campus Navigation** (routable locations and virtual-tour mapping).

**Assets:** Figure 4.2, Simplified Database Structure.

### 8.7 Technology stack

| Layer | Technology |
|---|---|
| Backend | Python, Masonite framework |
| Frontend | HTML, CSS, JavaScript |
| Database | MySQL |
| Cloud storage and sync | Nextcloud, Samba |
| Web infrastructure and security | Nginx, Gunicorn, Cloudflare |
| 360° tour | Marzipano |
| PDF rendering | pdf.js (pdfjs-dist) |
| Development | Visual Studio Code |

### 8.8 Requirements

| Resource | Requirement |
|---|---|
| Administrative device | Desktop or laptop (Intel Core i5, 8 GB RAM minimum, 512 GB SSD) |
| Kiosk terminal | Touchscreen monitor able to run a security-locked interface |
| Network | Active internet connection for real-time sync |
| Operating system | Windows 10 or Linux |

---

## 9 · Results

**Purpose:** Show the evidence that each objective was met.

### 9.1 Objective 1: system developed ✔

> The completed system brings together real-time editorial management, cloud synchronization, 2.5D geospatial navigation, news archives, a 360° virtual tour and a security-locked kiosk interface in one platform.

### 9.2 Objective 2: Black-Box Testing ✔

**Headline:** **98.21% overall passing rate**, with 275 of 280 test instances passing, run by 10 IT experts.

| Module | Functions tested | Passing rate | Notes |
|---|---|---|---|
| Kiosk User Page | 6 | **100%** | Latest News, Campus Map, Gears Archives, Virtual Tour, About LSPU, LSPU Org Chart |
| Editor's Dashboard | 12 | **99.17%** | 1 failure in Screen Control (90%) |
| Admin Dashboard | 4 | **100%** | Review newsletters, manage editors, generate passwords, update profile |
| Super Admin Account | 6 | **93.33%** | Edit Admin Account 70% (3 failures); Remove Editor Account 90% (1 failure) |
| **Overall** | **28** | **98.21%** | |

> The results apply to the prepared test cases and testing conditions; they don't prove errors can never happen under other conditions.

### 9.3 Objective 3: User acceptance ✔

**Headline:** overall means of **4.83 to 5.00** across all six criteria (SD 0.00–0.47), interpreted as **Highly Acceptable / Strongly Agree** by 290 respondents.

| Group | n | Result |
|---|---|---|
| Administrator | 1 | **5.00** on every criterion |
| Editorial Board | 10 | **5.00** on every criterion |
| Students | 279 | **4.94–4.98** across the six criteria |

Share of all 290 respondents who rated each criterion **5 – Highly Acceptable**:

| Criterion | Rated 5 |
|---|---|
| Quality Factors | 96.6% |
| Perceived Ease of Use | 96.5% |
| Attitude Toward Using | 97.6% |
| Behavioral Intention to Use | 97.6% |
| User Experience | 95.3% (1.3% Undecided) |

**Respondent profile:** 93.1% aged 18–21; 55% female, 45% male.

**Assets:** Figure 4.10, a photo of the face-to-face evaluation (this makes the section feel real); optionally one chart from Figures 4.13–4.18.

---

## 10 · Conclusion and recommendations

**Purpose:** Close the research story and point to what comes next.

**Conclusion:**

> All three research objectives were achieved. PressPoint gives *The Gears* Publication and the LSPU – Sta. Cruz community one platform for real-time news, digital archiving and campus navigation. It replaces manual flash-drive updates and closes the integration, technology and evaluation gaps identified in the literature.

**Recommendations:**

1. Keep the 3D-modeled **Citizen's Charter** in the virtual tour in sync with the official PDF, so visitors always see current procedures.
2. Turn the newsletter composer into a **free-form canvas** with drag-and-drop elements, for more flexible layouts.
3. Add an **automated image-processing tool** to the dashboard, so staff can upload equirectangular photos that become tour frames without touching backend code.
4. **Update the 2.5D map and navigation data regularly** to match campus development, recalibrating with real coordinates for new or moved facilities.

---

## 11 · Links

| Resource | Link |
|---|---|
| 🌐 Live system | https://presspoint-gears.me |
| 🎬 Demo video | *add link* |
| 📄 Capstone manuscript (PDF) | *add link* |
| 🗂️ Poster / presentation deck | *add link (optional)* |
| 💻 Source repository | *add link, only if public* |

---

## 12 · Footer

**Content:**

> College of Computer Studies · Laguna State Polytechnic University – Sta. Cruz Campus, Santa Cruz, Laguna, Philippines
> Built for *The Gears*, the official student publication of LSPU – Sta. Cruz Campus.
> © 2026 Bajao, Rebong, Sisante

---

## Assets checklist

Put image files in `images/` and export them from the manuscript figures or fresh screenshots.

| File | Section | Source |
|---|---|---|
| `images/hero-kiosk.png` | Hero | Figure 4.3, or a photo of the kiosk |
| `images/conceptual-framework.png` | Methodology | Figure 1.1 |
| `images/agile-cycle.png` | Methodology | Figure 3.2 |
| `images/architecture.png` | System | Figure 4.1 |
| `images/database.png` | System | Figure 4.2 |
| `images/kiosk-user-page.png` | System | Figure 4.3 |
| `images/editor-dashboard.png` | System | Figure 4.4 |
| `images/geospatial-navigation.png` | System | Figure 4.5 |
| `images/org-board.png` | System | Figure 4.6 |
| `images/admin-dashboard.png` | System | Figure 4.7 |
| `images/super-admin.png` | System | Figures 4.8–4.9 |
| `images/evaluation-photo.jpg` | Results | Figure 4.10 |
| `images/team-*.jpg` | Team | Headshots (optional) |
| `files/presspoint-manuscript.pdf` | Links | Final manuscript (if publishing it) |

Every image needs alt text that describes what it shows, for example "Kiosk main menu showing six modules", not "screenshot".

---

## Design direction

The page should **not** follow the plain academic style of the reference page. It should look like *The Gears* and like PressPoint itself:

- **Editorial / newspaper feel**: a masthead-style hero, ruled section dividers, and big numbers set like headline figures.
- **Brand palette**: maroon `#6b2516`, gold `#f4be27`, cream `#e9dac4` on a cream page.
- **Typography**: a strong display face for headings, a clean sans-serif for body text, and a monospace face for labels and numbers (PressPoint uses Moderniz, Gilroy and JetBrains Mono).
- **Flat colour only, no gradients**, matching the system's own design rule.
- **Screenshots carry the System section**: the page should show the kiosk, not just describe it.
- Readable on a phone, with good contrast and descriptive alt text.
