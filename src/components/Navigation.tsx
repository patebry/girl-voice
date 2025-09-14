import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">Girl Voice Guide</NavLink>
        <ul className="nav-menu">
          <li><NavLink to="/" end>Complete Guide</NavLink></li>
          <li><NavLink to="/voice-feminization">Feminization</NavLink></li>
          <li><NavLink to="/singing-voice-types">Voice Types</NavLink></li>
          <li><NavLink to="/daily-exercises">Exercises</NavLink></li>
          <li><NavLink to="/voice-descriptions">Descriptions</NavLink></li>
          <li><NavLink to="/vocal-health">Health</NavLink></li>
          <li><NavLink to="/voice-acting">Media & Acting</NavLink></li>
          <li><NavLink to="/tools-apps">Tools & Apps</NavLink></li>
          <li><NavLink to="/faqs">FAQs</NavLink></li>
          <li><NavLink to="/case-studies">Case Studies</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation