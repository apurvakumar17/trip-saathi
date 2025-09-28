import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text" style={{ color: 'white' }}>TripSaathi</span>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <a href="#product" className="nav-link">Product</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#resources" className="nav-link">Resources</a>
          </nav>

          {/* Header Buttons */}
          <div className="header-buttons">
            <Link to="/login" className="btn-outline">
              Log In
            </Link>
            <Link to="/login" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            {/* Badge */}
            <div className="badge">
              Your Smart Travel Companion
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Effortless Trip Tracking,<br />
              Smarter Transport Planning.
            </h1>

            {/* Description */}
            <p className="hero-description">
              TripSaathi automatically captures your journeys, providing valuable data for modern transport planning with a clean, friendly, and trustworthy interface.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/login" className="btn-cta-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="btn-icon">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Start Your Journey
              </Link>
              <button className="btn-cta-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="btn-icon">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="phone-mockup">
            <div className="phone">
              <div className="phone-screen">
                <div className="mockup-content">
                  <div className="mockup-text">MOCKUP</div>
                  <div className="mockup-line"></div>
                  <div className="mockup-text">TRIP SAATHI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="copyright">© 2025 TripSaathi. All rights reserved.</span>
          </div>
          <div className="footer-right">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
