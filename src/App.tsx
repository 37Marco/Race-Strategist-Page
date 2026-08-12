function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Race Strategist home">
      <span className="brand-mark" aria-hidden="true">
        RS
      </span>
      <span className="brand-name">
        <small>Race</small>
        Strategist
      </span>
    </a>
  );
}

function ProductPreview() {
  return (
    <figure className="product-preview">
      <div className="preview-header">
        <div>
          <small>Pit outcome</small>
          <strong>Circuit des 24 Heures du Mans</strong>
        </div>
        <span>Live</span>
      </div>

      <div className="preview-summary">
        <small>Current projected outcome</small>
        <strong>Pit now</strong>
        <span>Projected P7 with immediate traffic</span>
      </div>

      <div className="preview-panel">
        <div className="preview-panel-heading">
          <div>
            <small>Scenario</small>
            <strong>Pit now</strong>
          </div>
          <span>Medium traffic</span>
        </div>

        <dl className="preview-metrics">
          <div>
            <dt>Projected rejoin</dt>
            <dd>P7</dd>
          </div>
          <div>
            <dt>Total pit loss</dt>
            <dd>30.0 s</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>4.9 s</dd>
          </div>
        </dl>

        <div className="preview-driver">
          <span>Ahead</span>
          <strong>#21 Rodriguez</strong>
          <span>−8.2 s</span>
          <span>−0.3 s/lap</span>
        </div>
        <div className="preview-driver">
          <span>Behind</span>
          <strong>#19 Dubreucq</strong>
          <span>+3.0 s</span>
          <span>+0.4 s/lap</span>
        </div>
      </div>

      <figcaption>Product preview · footage coming soon</figcaption>
    </figure>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("race-strategist-theme", theme);

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    themeColor?.setAttribute(
      "content",
      theme === "dark" ? "#07100f" : "#f3f7f5",
    );
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="shell header-content">
          <Brand />
          <div className="header-tools">
            <nav aria-label="Primary navigation">
              <a href="#product">Product</a>
              <a href="#process">Process</a>
              <a href="#accuracy">Accuracy</a>
              <a href="#about">About</a>
            </nav>
            <button
              className="theme-toggle"
              type="button"
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === "dark" ? "light" : "dark",
                )
              }
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.2 15.4A8 8 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="page-section hero-section">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p>Local. Live. Explainable.</p>
              <h1>See the pit exit before you commit.</h1>
              <div className="hero-description">
                Race Strategist turns live iRacing telemetry and selected pit
                services into a clear, real-time pit outcome.
              </div>
              <div className="hero-actions">
                <button type="button" disabled>
                  Download coming soon
                </button>
                <a href="#product">Explore the product</a>
              </div>
              <ul className="hero-facts" aria-label="Product facts">
                <li>Windows</li>
                <li>Local processing</li>
                <li>Built for iRacing</li>
              </ul>
            </div>
            <ProductPreview />
          </div>
        </section>

        <aside className="mvp-status" aria-label="Product status">
          <div className="shell">
            <strong>MVP in development</strong>
            <span>Focused on one question: what happens if I pit now?</span>
          </div>
        </aside>

        <section className="page-section" id="product">
          <div className="shell">
            <header className="section-heading">
              <span>01</span>
              <div>
                <p>What it does</p>
                <h2>One decision. The useful details.</h2>
              </div>
            </header>

            <div className="capability-grid">
              <article>
                <span aria-hidden="true">P</span>
                <h3>Projected rejoin</h3>
                <ul>
                  <li>Estimated position after pit exit</li>
                  <li>Nearest car ahead and behind</li>
                  <li>Signed gaps and recent pace delta</li>
                </ul>
              </article>

              <article>
                <span aria-hidden="true">Δ</span>
                <h3>Explainable pit loss</h3>
                <ul>
                  <li>Selected fuel and tyres</li>
                  <li>Service and pit-road time</li>
                  <li>Track-and-car-specific observations</li>
                </ul>
              </article>

              <article>
                <span aria-hidden="true">!</span>
                <h3>Traffic and confidence</h3>
                <ul>
                  <li>Immediate traffic risk</li>
                  <li>Clear confidence level</li>
                  <li>Warnings when inputs are missing</li>
                </ul>
              </article>
            </div>

            <div className="product-boundary">
              <strong>A focused outcome simulator</strong>
              <ul>
                <li>No automatic pit decisions</li>
                <li>No fuel recommendation</li>
                <li>No full-race strategy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-section" id="process">
          <div className="shell">
            <header className="section-heading">
              <span>02</span>
              <div>
                <p>How it works</p>
                <h2>From telemetry to a usable answer.</h2>
              </div>
            </header>

            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Read</h3>
                  <p>
                    Local iRacing SDK telemetry and the currently selected pit
                    services.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Model</h3>
                  <p>
                    Estimated service time and calibrated non-service pit loss.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Project</h3>
                  <p>
                    Rejoin position, surrounding cars, gaps and immediate
                    traffic.
                  </p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <h3>Explain</h3>
                  <p>
                    Data sources, confidence and material uncertainty in one
                    overlay.
                  </p>
                </div>
              </li>
            </ol>

            <div className="driver-control">
              <strong>The driver stays in control.</strong>
              <ul>
                <li>No automatic pit commands</li>
                <li>No fuel recommendation</li>
                <li>No claim that opponents will stay out</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-section" id="accuracy">
          <div className="shell">
            <header className="section-heading">
              <span>03</span>
              <div>
                <p>Accuracy by design</p>
                <h2>Measured locally. Honest when uncertain.</h2>
              </div>
            </header>

            <div className="accuracy-layout">
              <div className="accuracy-points">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Learns from valid stops</h3>
                    <p>
                      Uses the median of recent observations for the exact track
                      and car combination.
                    </p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Rejects misleading data</h3>
                    <p>
                      Tow, telemetry gaps, penalties and incomplete traversals
                      do not enter calibration.
                    </p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Never invents a value</h3>
                    <p>
                      Missing evidence stays unavailable and lowers confidence
                      instead of becoming a hidden assumption.
                    </p>
                  </div>
                </article>
              </div>

              <aside className="local-first">
                <p>Local first</p>
                <h3>Your race data stays on your PC.</h3>
                <div>
                  Race telemetry, calibration and predictions are processed on
                  the same Windows PC that runs the app.
                </div>
                <ul>
                  <li>No account</li>
                  <li>No cloud telemetry</li>
                  <li>No internet required during a race</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="page-section" id="about">
          <div className="shell">
            <header className="section-heading">
              <span>04</span>
              <div>
                <p>Behind the project</p>
                <h2>Built from a real racing problem.</h2>
              </div>
            </header>

            <div className="about-layout">
              <article className="project-story">
                <p>
                  Race Strategist started with a practical question during
                  endurance racing: where will the car actually rejoin after a
                  stop?
                </p>
                <p>
                  The project turns raw live telemetry into a focused,
                  explainable answer while keeping all race data on the local
                  computer.
                </p>
                <a
                  href="https://github.com/37Marco"
                  target="_blank"
                  rel="noreferrer"
                >
                  Built by Marco · View GitHub profile
                </a>
              </article>

              <div className="engineering-focus">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Telemetry engineering</h3>
                    <p>
                      Normalised live iRacing data, historical race state and
                      reproducible JSONL playback.
                    </p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Deterministic modelling</h3>
                    <p>
                      Explainable service, pit-loss and rejoin calculations with
                      explicit uncertainty.
                    </p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Local product delivery</h3>
                    <p>
                      A Python engine and a responsive React, TypeScript and
                      Electron overlay for Windows.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <ul className="technology-list" aria-label="Technology stack">
              <li>Python</li>
              <li>iRacing SDK</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Electron</li>
              <li>WebSocket</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-content">
          <Brand />
          <p>Independent project. Not affiliated with iRacing.com.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  const documentTheme = document.documentElement.dataset.theme;
  if (documentTheme === "dark" || documentTheme === "light") {
    return documentTheme;
  }

  const savedTheme = window.localStorage.getItem("race-strategist-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}
