import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import VoiceFeminization from './pages/VoiceFeminization'
import SingingVoiceTypes from './pages/SingingVoiceTypes'
import DailyExercises from './pages/DailyExercises'
import VoiceDescriptions from './pages/VoiceDescriptions'
import VocalHealth from './pages/VocalHealth'
import VoiceActing from './pages/VoiceActing'
import ToolsApps from './pages/ToolsApps'
import FAQs from './pages/FAQs'
import CaseStudies from './pages/CaseStudies'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/voice-feminization" element={<VoiceFeminization />} />
            <Route path="/singing-voice-types" element={<SingingVoiceTypes />} />
            <Route path="/daily-exercises" element={<DailyExercises />} />
            <Route path="/voice-descriptions" element={<VoiceDescriptions />} />
            <Route path="/vocal-health" element={<VocalHealth />} />
            <Route path="/voice-acting" element={<VoiceActing />} />
            <Route path="/tools-apps" element={<ToolsApps />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
