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
  return (
    <>
      <header className="site-header">
        <div className="shell header-content">
          <Brand />
          <nav aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#process">Process</a>
            <a href="#accuracy">Accuracy</a>
            <a href="#about">About</a>
          </nav>
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
            <h2>How it works</h2>
          </div>
        </section>

        <section className="page-section" id="accuracy">
          <div className="shell">
            <h2>Accuracy</h2>
          </div>
        </section>

        <section className="page-section" id="about">
          <div className="shell">
            <h2>About the project</h2>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell">
          <Brand />
        </div>
      </footer>
    </>
  );
}

export default App;
