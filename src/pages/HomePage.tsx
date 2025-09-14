import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Girl Voice: Complete Guide to Feminine Voice Qualities & Training</h1>
        <p className="hero-subtitle">
          Master feminine voice techniques, understand vocal qualities, and achieve your voice goals safely and effectively
        </p>
      </header>

      <section className="intro-section">
        <h2>Understanding Girl Voice</h2>
        <p>
          "Girl voice" encompasses the unique qualities of feminine speech patterns, singing voices, and character portrayal.
          Whether you're exploring voice feminization, studying vocal types, or developing your vocal abilities, this comprehensive
          guide provides evidence-based techniques and practical resources.
        </p>
      </section>

      <section className="voice-basics">
        <h2>Female Voice Characteristics</h2>
        <div className="basics-grid">
          <div className="basic-card">
            <h3>Average Pitch Range</h3>
            <p>Female speaking voices typically range from 165-255 Hz (E3-C4), with an average fundamental frequency around 210 Hz.</p>
          </div>
          <div className="basic-card">
            <h3>Resonance Patterns</h3>
            <p>Feminine voices often feature brighter resonance with more head voice engagement and forward placement.</p>
          </div>
          <div className="basic-card">
            <h3>Intonation & Cadence</h3>
            <p>Greater pitch variation, upward inflections, and melodic speaking patterns characterize feminine speech.</p>
          </div>
        </div>
      </section>

      <section className="singing-voices">
        <h2>Female Singing Voice Types</h2>
        <div className="voice-types">
          <div className="voice-type">
            <h3>Soprano</h3>
            <p>Highest female voice (C4-C6)</p>
            <span className="range">261-1047 Hz</span>
          </div>
          <div className="voice-type">
            <h3>Mezzo-Soprano</h3>
            <p>Middle female voice (A3-A5)</p>
            <span className="range">220-880 Hz</span>
          </div>
          <div className="voice-type">
            <h3>Alto/Contralto</h3>
            <p>Lowest female voice (F3-F5)</p>
            <span className="range">175-698 Hz</span>
          </div>
        </div>
      </section>

      <section className="techniques-overview">
        <h2>Voice Feminization Techniques</h2>
        <ul className="techniques-list">
          <li>Pitch elevation through laryngeal positioning</li>
          <li>Resonance modification for brighter tone</li>
          <li>Articulation refinement for clarity</li>
          <li>Breath support optimization</li>
          <li>Intonation pattern development</li>
        </ul>
        <Link to="/voice-feminization" className="cta-link">
          Explore Complete Feminization Guide →
        </Link>
      </section>

      <section className="safety-section">
        <h2>Voice Care & Safety</h2>
        <div className="safety-tips">
          <div className="tip">
            <h3>Hydration</h3>
            <p>Maintain vocal cord health with 8-10 glasses of water daily</p>
          </div>
          <div className="tip">
            <h3>Warm-ups</h3>
            <p>Always warm up before intensive voice practice</p>
          </div>
          <div className="tip">
            <h3>Rest</h3>
            <p>Allow recovery time between training sessions</p>
          </div>
          <div className="tip">
            <h3>Professional Guidance</h3>
            <p>Consider working with a speech-language pathologist</p>
          </div>
        </div>
      </section>

      <section className="explore-topics">
        <h2>Explore All Topics</h2>
        <div className="topics-grid">
          <Link to="/voice-feminization" className="topic-card">
            <h3>Voice Feminization Techniques</h3>
            <p>Step-by-step training methods and exercises</p>
          </Link>
          <Link to="/singing-voice-types" className="topic-card">
            <h3>Female Singing Voice Types</h3>
            <p>Soprano, mezzo-soprano, and alto ranges explained</p>
          </Link>
          <Link to="/daily-exercises" className="topic-card">
            <h3>Daily Voice Exercises</h3>
            <p>15-minute routines for consistent progress</p>
          </Link>
          <Link to="/voice-descriptions" className="topic-card">
            <h3>Voice Descriptions & Qualities</h3>
            <p>Understanding feminine voice characteristics</p>
          </Link>
          <Link to="/vocal-health" className="topic-card">
            <h3>Vocal Health & Safety</h3>
            <p>Protect your voice while training</p>
          </Link>
          <Link to="/voice-acting" className="topic-card">
            <h3>Girl Voice in Media</h3>
            <p>Voice acting and character portrayal</p>
          </Link>
          <Link to="/tools-apps" className="topic-card">
            <h3>Tools & Apps</h3>
            <p>Technology for voice training and analysis</p>
          </Link>
          <Link to="/faqs" className="topic-card">
            <h3>Frequently Asked Questions</h3>
            <p>Quick answers to common questions</p>
          </Link>
          <Link to="/case-studies" className="topic-card">
            <h3>Case Studies & Success Stories</h3>
            <p>Real journeys and transformations</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage