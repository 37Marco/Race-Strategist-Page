function App() {
  return (
    <>
      <header className="site-header">
        <div className="shell header-content">
          <a href="#top">Race Strategist</a>
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
          <div className="shell">
            <p>Product website</p>
            <h1>Race Strategist</h1>
          </div>
        </section>

        <section className="page-section" id="product">
          <div className="shell">
            <h2>Product</h2>
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
        <div className="shell">Race Strategist</div>
      </footer>
    </>
  );
}

export default App;
