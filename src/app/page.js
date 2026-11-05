import Link from "next/link";

export default function Home() {
  return (
    <main className="launch-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="The Salk, accueil">
          THE <span>SALK</span>
        </Link>
        <p className="header-note">Un nouveau chapitre commence</p>
        <span className="availability">
          <span className="availability-dot" aria-hidden="true" />
          Bientôt en ligne
        </span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Quelque chose se prépare
          </p>
          <h1 id="hero-title">
            On se retrouve
            <br />
            <span>bientôt.</span>
          </h1>
          <p className="hero-description">
            The Salk prend forme. Un nouvel univers, une nouvelle histoire —
            encore un peu de patience, on arrive.
          </p>
          <div className="launch-note">
            <span className="launch-note-icon" aria-hidden="true">
              ✳
            </span>
            <p>Le site est en préparation</p>
          </div>
        </div>

        <div className="artwork" aria-hidden="true">
          <div className="artwork-grain" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="sun" />
          <div className="horizon horizon-back" />
          <div className="horizon horizon-front" />
          <span className="artwork-caption">THE SALK · EST. SOON</span>
          <span className="artwork-number">01 — ∞</span>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-line" />
          <span>01</span>
        </div>
      </section>

      <footer className="site-footer">
        <p>Une belle chose prend le temps qu’il faut.</p>
        <p className="footer-mark">THE SALK <span>© 2026</span></p>
      </footer>
    </main>
  );
}
