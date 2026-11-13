/* eslint-disable @next/next/no-img-element -- the kit's frames size and crop plain <img> elements */

/*
  type: service (a person who is hired)
  deal: hero split, nav nav-centre, close close-type, footer footer-columns, rhythm surface-pairs,
        buttons arrow, mark ring, palette graphite-safety-orange, pairing schibsted
  moments: word-highlight in #about
*/

const EMAIL = "mailto:hirtic2004@gmail.com";
const RESUME = "https://drive.google.com/file/d/1G1wTw3AlolQoNWvG2wbgmdSQIbRSGrLB/view?usp=sharing";
const GITHUB = "https://github.com/hirtic-s";
const LINKEDIN = "https://www.linkedin.com/in/hirtic-s";

type Tool = { icon: string; name: string; ink?: boolean };

const tools: Record<string, Tool> = {
  java: { icon: "java", name: "Java" },
  spring: { icon: "spring", name: "Spring Boot" },
  postgres: { icon: "postgres", name: "PostgreSQL" },
  angular: { icon: "angular", name: "Angular" },
  docker: { icon: "docker", name: "Docker" },
  react: { icon: "react", name: "React" },
  aws: { icon: "aws", name: "AWS S3" },
  gemini: { icon: "gemini", name: "Gemini" },
};

function Chips({ ids }: { ids: string[] }) {
  return (
    <ul className="ic-chip-row" aria-label="Built with">
      {ids.map((id) => {
        const t = tools[id];
        return (
          <li key={id} className="ic-chip">
            <img className="ic" data-icon={t.icon} src={`/assets/icons/${t.icon}.svg`} alt="" width={18} height={18} loading="lazy" />
            {t.name}
          </li>
        );
      })}
    </ul>
  );
}

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

// AvailAPI's dashboard, set in HTML from the live app's own data so it stays sharp at any width
const checks = [
  ["UP", "hirtic", "99 ms", "06:04:30"],
  ["UP", "linkedin", "103 ms", "06:04:15"],
  ["UP", "youtube", "12 ms", "06:04:15"],
  ["UP", "hirtic", "94 ms", "06:04:00"],
  ["UP", "youtube", "88 ms", "06:03:45"],
  ["UP", "linkedin", "8 ms", "06:03:45"],
  ["UP", "youtube", "1,393 ms", "06:02:17"],
  ["TIMEOUT", "hirtic", "98 ms", "06:01:05"],
  ["UP", "hirtic", "7 ms", "06:00:30"],
];

function AvailWindow() {
  return (
    <div className="aw" data-ui="" role="img" aria-label="AvailAPI dashboard: three endpoints checked every 30 seconds, 99.1% uptime over 24 hours, one timeout in the recent errors">
      <div className="aw__bar">
        <span className="aw__brand">AvailAPI</span>
        <span className="aw__nav">Status page</span>
      </div>
      <div className="aw__body">
        <aside className="aw__side">
          <p className="aw__label">Endpoints</p>
          {["hirtic", "youtube", "linkedin"].map((e) => (
            <div key={e} className="aw__ep">
              <span className="aw__dot" />
              <span>
                {e}
                <small>every 30 s</small>
              </span>
            </div>
          ))}
        </aside>
        <div className="aw__main">
          <p className="aw__label">Recent health checks</p>
          <table className="aw__table">
            <thead>
              <tr><th>Status</th><th>Endpoint</th><th>Latency</th><th>Time</th></tr>
            </thead>
            <tbody>
              {checks.map(([s, e, l, t], i) => (
                <tr key={i}>
                  <td><span className={s === "UP" ? "aw__up" : "aw__warn"}>{s}</span></td>
                  <td>{e}</td>
                  <td className="aw__mono">{l}</td>
                  <td className="aw__mono aw__time">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="aw__over">
          <p className="aw__label">System overview</p>
          <div className="aw__stat"><span>Uptime, 24 h</span><b>99.1%</b></div>
          <div className="aw__stat"><span>Active endpoints</span><b>3</b></div>
          <p className="aw__label">Recent errors</p>
          <div className="aw__err"><span className="aw__warn">TIMEOUT</span> hirtic</div>
        </aside>
      </div>
    </div>
  );
}

// the one still diagram (service page): a Spring Boot service and the tools around it
const hub = {
  layout: "hub",
  alt: "A Spring Boot service with PostgreSQL for data, Docker for packaging, AWS for hosting, Postman for API tests, GitHub for code and React for the client.",
  ground: "none",
  motion: { pulse: "none" },
  center: { label: "Spring Boot", icon: "spring" },
  spokes: [
    { label: "PostgreSQL", icon: "postgres" },
    { label: "Docker", icon: "docker" },
    { label: "AWS", icon: "aws" },
    { label: "Postman", icon: "postman" },
    { label: "GitHub", icon: "github" },
    { label: "React", icon: "react" },
  ],
};

const stack: { group: string; items: Tool[] }[] = [
  {
    group: "Backend",
    items: [
      { icon: "java", name: "Java" },
      { icon: "spring", name: "Spring Boot" },
      { icon: "postgres", name: "PostgreSQL" },
      { icon: "nodejs", name: "Node.js" },
      { icon: "flask", name: "Flask" },
    ],
  },
  {
    group: "Cloud and delivery",
    items: [
      { icon: "docker", name: "Docker" },
      { icon: "aws", name: "AWS" },
      { icon: "azure", name: "Azure" },
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { icon: "react", name: "React" },
      { icon: "angular", name: "Angular" },
      { icon: "nextjs", name: "Next.js" },
    ],
  },
  {
    group: "Testing and data",
    items: [
      { icon: "postman", name: "Postman" },
      { icon: "python", name: "Python" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Skip to content</a>
          <a className="nav__logo" href="#top">
            <span className="mark" data-mark="ring" aria-hidden="true"></span>Hirtic Selvavinayagam
          </a>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item">
              <a className="nav__link" href="#projects">
                Projects{" "}
                <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="nav__menu">
                <div className="wrap grid">
                  <div className="menu-col span-4">
                    <p className="t-label">Projects</p>
                    <a href="#projects">AvailAPI<span>Uptime checks for REST endpoints</span></a>
                    <a href="#more">Vanish Vault<span>Files that delete themselves</span></a>
                    <a href="#more">GooDeals<span>Price comparison with Gemini</span></a>
                  </div>
                  <div className="menu-col span-4 start-7">
                    <p className="t-label">Code</p>
                    <a href={GITHUB}>GitHub<span>Every repository, public</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav__item"><a className="nav__link" href="#experience">Experience</a></div>
            <div className="nav__item"><a className="nav__link" href="#stack">Stack</a></div>
            <div className="nav__item"><a className="nav__link" href="#about">About</a></div>
          </nav>
          <div className="nav__actions">
            <a className="nav__link" href={RESUME}>Resume</a>
            <a className="btn btn--primary" href={EMAIL}>Email me</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker"><span className="dot" aria-hidden="true"></span>Hirtic Selvavinayagam, VIT class of 2026</p>
                <h1 id="hero-h">Java and Spring Boot backend engineer</h1>
                <p className="hero__lead">
                  I build REST APIs with Spring Boot, keep the data in PostgreSQL and ship it in Docker.
                  Three projects with public code, open to new-grad backend roles.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href={EMAIL}>Email me<Arrow /></a>
                  <a className="btn btn--secondary" href={RESUME}>Read my resume</a>
                </div>
                <dl className="hero__facts hero__facts--col">
                  <div><dt>Degree</dt><dd>B.Tech Computer Science, VIT</dd></div>
                  <div><dt>Internship</dt><dd>Yokogawa UAE, 2025</dd></div>
                  <div><dt>Certified</dt><dd>AWS and Microsoft Azure</dd></div>
                </dl>
              </div>
              <div className="hero__media span-6 start-7">
                <img
                  src="/hirtic.jpg"
                  width={874}
                  height={808}
                  alt="Hirtic Selvavinayagam in a navy suit on a terrace at night"
                  style={{ ["--ly-pos" as string]: "50% 30%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="portrait"
                />
                <div className="ly-float">
                  <div className="ly-float__row"><span className="ly-live">AvailAPI</span><span>Spring Boot</span></div>
                  <div className="ly-float__title">Flags a failing endpoint in under 60 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-h">
          <div className="wrap">
            <div className="grid proj-head">
              <div className="span-6">
                <h2 id="projects-h">AvailAPI, uptime checks for REST endpoints</h2>
              </div>
              <div className="span-6 start-7 stack-4">
                <p>
                  Add an endpoint and AvailAPI calls it every 30 seconds, records status and latency,
                  and flags a failure in under 60 seconds.
                </p>
                <Chips ids={["java", "spring", "postgres", "angular", "docker"]} />
                <p className="proj-links">
                  <a className="link" href="https://avail-api.vercel.app">Open the live demo</a>
                  <a className="link" href="https://github.com/hirtic-s/AvailAPI">Read the code</a>
                </p>
              </div>
            </div>
            <div className="aw-frame" data-visual="">
              <AvailWindow />
            </div>
          </div>
        </section>

        <section className="section" id="more" aria-labelledby="more-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="more-h">Two more Spring Boot projects</h2>
            </div>
            <div className="grid">
              <article className="card card--row card--open m-nolift span-6">
                <h3>Vanish Vault, files that delete themselves</h3>
                <p>
                  Vanish Vault puts a file on AWS S3 behind a password. The link dies after a set time or a set number of downloads.
                </p>
                <Chips ids={["java", "spring", "aws", "react", "docker"]} />
                <p className="proj-links">
                  <a className="link" href="https://vanishvault.vercel.app">Open the live demo</a>
                  <a className="link" href="https://github.com/hirtic-s/vanishvault">Read the code</a>
                </p>
                <div className="panel panel--inset">
                  <img className="frame__img" src="/projects/vanishvault.png" width={1024} height={511} alt="Vanish Vault upload form with a password, a 5-minute expiry and a one-download limit" loading="lazy" data-source="client" data-subject="vanish vault screen" />
                </div>
              </article>
              <article className="card card--row card--open m-nolift span-6">
                <h3>GooDeals, one price search for five stores</h3>
                <p>
                  GooDeals pulls live deals from Amazon, Flipkart and three more sites, with a Gemini assistant. It cut user spend by 10%.
                </p>
                <Chips ids={["java", "spring", "postgres", "react", "gemini"]} />
                <p className="proj-links">
                  <a className="link" href="https://github.com/hirtic-s/GooDeals">Read the code</a>
                </p>
                <div className="panel panel--inset">
                  <img className="frame__img" src="/projects/goodeals.png" width={1024} height={514} alt="GooDeals search results for iPhone 17 Pro with store filters and a price of ₹1,34,900" loading="lazy" data-source="client" data-subject="goodeals screen" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section statement" id="about" data-moment="word-highlight" aria-label="About">
          <div className="wrap">
            <p className="t-label">About</p>
            <p className="mo-wh__text">
              I like the part of a system <strong>nobody sees</strong>: the check that runs every 30 seconds,
              the file link that dies on time, the price feed that reads five stores at once.
            </p>
            <dl className="stats about-stats">
              <div><dt>CGPA, B.Tech Computer Science</dt><dd className="t-stat">8.09</dd></div>
              <div><dt>Vellore Institute of Technology</dt><dd className="t-stat">2022 to 2026</dd></div>
              <div><dt>Grade 12, CBSE science</dt><dd className="t-stat">86.0%</dd></div>
              <div><dt>Grade 10, CBSE</dt><dd className="t-stat">90.8%</dd></div>
            </dl>
          </div>
        </section>

        <section className="section ground-surface" id="experience" aria-labelledby="exp-h">
          <div className="wrap">
            <div className="grid exp">
              <div className="span-5 stack-6">
                <h2 id="exp-h">
                  Intern at Yokogawa UAE. <span className="muted">Software engineering, May to June 2025.</span>
                </h2>
                {/* stand-in: a process control room until a photograph from the internship replaces it */}
                <div className="frame frame--photo exp__photo" data-visual="">
                  <img
                    className="frame__img"
                    src="/assets/img/photo-f186110784-960.jpg"
                    srcSet="/assets/img/photo-f186110784-500.jpg 500w, /assets/img/photo-f186110784-960.jpg 960w"
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    width={960}
                    height={539}
                    alt="An engineer at a desk of process screens in a plant control room"
                    loading="lazy"
                    decoding="async"
                    data-source="stand-in"
                    data-subject="control room"
                  />
                </div>
              </div>
              <ul className="rows span-6 start-7">
                <li>
                  <span className="rows__name">Forecasting models</span>
                  <span className="rows__value">18% more accurate</span>
                  <p>Built LSTM and XGBoost models on plant sensor data and raised forecast accuracy by 18%.</p>
                </li>
                <li>
                  <span className="rows__name">Simulation deployments</span>
                  <span className="rows__value">40% fewer manual cycles</span>
                  <p>Automated remote simulation runs through cloud integration, cutting manual deployment cycles by 40%.</p>
                </li>
                <li>
                  <span className="rows__name">Operator training interface</span>
                  <span className="rows__value">Python</span>
                  <p>Designed a modular GUI for Operator Training Simulators in Python and CustomTkinter.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="stack-h">Java, Spring Boot and the rest of my stack</h2>
            </div>
            <div className="grid stack-grid">
              <div className="span-6 stack-groups">
              {stack.map((g) => (
                <div key={g.group}>
                  <p className="t-label muted">{g.group}</p>
                  <ul className="stack-list">
                    {g.items.map((t) => (
                      <li key={t.icon}>
                        <img className={`ic${t.ink ? " ic-ink" : ""}`} data-icon={t.icon} src={`/assets/icons/${t.icon}.svg`} alt="" width={22} height={22} loading="lazy" />
                        {t.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
              <div className="panel stack-panel span-6 start-7" data-visual="">
                <div className="dg" data-diagram={JSON.stringify(hub)}></div>
              </div>
            </div>
            <div className="grid certs">
              <a className="card cert span-6" href="https://www.credly.com/badges/60dba673-b120-4d91-8fd5-bf8fc8f592a0">
                <img className="ic" data-icon="aws" src="/assets/icons/aws.svg" alt="" width={48} height={48} loading="lazy" />
                <span>
                  <span className="cert__name">AWS Certified Cloud Practitioner</span>
                  <span className="cert__link">Verify on Credly</span>
                </span>
              </a>
              <a className="card cert span-6" href="https://www.credly.com/badges/b4581db1-e0dd-44e0-9960-1d0a96c8c54f">
                <img className="ic" data-icon="microsoft-icon" src="/assets/icons/microsoft-icon.svg" alt="" width={48} height={48} loading="lazy" />
                <span>
                  <span className="cert__name">Microsoft Certified: Azure AI Fundamentals</span>
                  <span className="cert__link">Verify on Credly</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Email me about a backend role</h2>
              <p>New-grad roles on Java and Spring Boot teams. The resume has every project above.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href={EMAIL}>Email me<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top">
                  <span className="mark" data-mark="ring" aria-hidden="true"></span>Hirtic Selvavinayagam
                </a>
                <p className="footer__lede">Java and Spring Boot backend engineer, VIT class of 2026.</p>
              </div>
              <div className="span-2 footer__col">
                <h3>Projects</h3>
                <ul>
                  <li><a href="#projects">AvailAPI</a></li>
                  <li><a href="#more">Vanish Vault</a></li>
                  <li><a href="#more">GooDeals</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Profile</h3>
                <ul>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#stack">Stack</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Code</h3>
                <ul>
                  <li><a href="https://github.com/hirtic-s/AvailAPI">AvailAPI repo</a></li>
                  <li><a href="https://github.com/hirtic-s/vanishvault">Vanish Vault repo</a></li>
                  <li><a href="https://github.com/hirtic-s/GooDeals">GooDeals repo</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Elsewhere</h3>
                <ul>
                  <li><a href={GITHUB}>GitHub</a></li>
                  <li><a href={LINKEDIN}>LinkedIn</a></li>
                  <li><a href={RESUME}>Resume</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Hirtic Selvavinayagam. Product names and logos are trademarks of their owners.</span>
              <a href="https://commons.wikimedia.org/wiki/File:Engine_Control_Room_Harmony_of_the_Seas_2026.jpg">Control room photograph by Larry D. Moore, CC BY 4.0</a>
            </div>
          </div>
        </div>
      </footer>

      <nav className="actionbar" aria-label="Quick actions">
        <a className="btn btn--primary" href={EMAIL}>Email me</a>
      </nav>
    </>
  );
}
