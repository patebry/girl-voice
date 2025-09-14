import { Link } from 'react-router-dom'
import './page-common.css'

function DailyExercises() {
  return (
    <div className="page-container">
      <h1>Daily Voice Exercises: 15-Minute Routines for Consistent Progress</h1>
      <p className="intro-text">
        Structured daily exercises to improve feminine voice qualities, vocal health, and speech confidence
      </p>

      <section className="routine-overview">
        <h2>Why Daily Practice Matters</h2>
        <p>
          Consistent daily practice is essential for voice development and maintenance. Just 15 minutes of focused
          exercises can lead to significant improvements in vocal control, endurance, and quality. Regular practice
          helps build muscle memory and prevents vocal strain.
        </p>

        <div className="practice-benefits">
          <h3>Benefits of Daily Practice</h3>
          <ul>
            <li>Improved vocal consistency and control</li>
            <li>Enhanced breath support and endurance</li>
            <li>Better pitch accuracy and range</li>
            <li>Stronger articulation and clarity</li>
            <li>Reduced vocal fatigue and strain</li>
            <li>Increased confidence in voice use</li>
          </ul>
        </div>
      </section>

      <section className="warm-up-routine">
        <h2>Daily Warm-Up Routine (5 minutes)</h2>
        <p>Always begin your practice with these gentle warm-up exercises to prepare your voice safely.</p>

        <div className="exercise-group">
          <div className="exercise">
            <h3>1. Breathing Foundation (1 minute)</h3>
            <div className="exercise-steps">
              <ol>
                <li>Stand or sit with good posture</li>
                <li>Place one hand on chest, one on stomach</li>
                <li>Breathe deeply so stomach hand moves out</li>
                <li>Exhale slowly and controlled</li>
                <li>Repeat 8-10 times, focusing on diaphragmatic breathing</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>2. Lip Trills (1 minute)</h3>
            <div className="exercise-steps">
              <ol>
                <li>Gently blow air through relaxed lips</li>
                <li>Create a "motorboat" sound</li>
                <li>Slide pitch up and down your range</li>
                <li>Keep sound gentle and relaxed</li>
                <li>If lips won't trill, try "B" sounds instead</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>3. Humming Scales (1.5 minutes)</h3>
            <div className="exercise-steps">
              <ol>
                <li>Hum with mouth closed, relaxed jaw</li>
                <li>Start in comfortable middle range</li>
                <li>Hum 5-note scales: Do-Re-Mi-Fa-Sol-Fa-Mi-Re-Do</li>
                <li>Move up and down by half-steps</li>
                <li>Feel gentle vibrations in face/head</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>4. Gentle Sirens (1.5 minutes)</h3>
            <div className="exercise-steps">
              <ol>
                <li>Make smooth "oo" sounds</li>
                <li>Glide from low to high pitch and back</li>
                <li>Keep transitions smooth like a siren</li>
                <li>Don't force high or low extremes</li>
                <li>Focus on smooth, connected sound</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="core-exercises">
        <h2>Core Development Exercises (8 minutes)</h2>
        <p>These exercises target specific aspects of feminine voice development.</p>

        <div className="exercise-group">
          <div className="exercise">
            <h3>1. Pitch Elevation Training (2 minutes)</h3>
            <div className="exercise-steps">
              <h4>Larynx Positioning</h4>
              <ol>
                <li>Place fingers lightly on Adam's apple</li>
                <li>Swallow to feel larynx rise</li>
                <li>Hold elevated position and say "Hello"</li>
                <li>Practice maintaining position through phrases</li>
                <li>Gradually increase phrase length</li>
              </ol>

              <h4>Pitch Anchoring</h4>
              <ol>
                <li>Find your target feminine speaking pitch</li>
                <li>Say "One, two, three" at this pitch</li>
                <li>Extend to "One, two, three, four, five"</li>
                <li>Practice days of week at consistent pitch</li>
                <li>Record to check consistency</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>2. Resonance Modification (2 minutes)</h3>
            <div className="exercise-steps">
              <h4>Forward Placement</h4>
              <ol>
                <li>Place hand on chest, feel vibrations while humming</li>
                <li>Move hum to face/mask area</li>
                <li>Practice "ng" sound with forward buzz</li>
                <li>Add vowels: "ng-ah", "ng-ee", "ng-oh"</li>
                <li>Maintain forward placement in words</li>
              </ol>

              <h4>Bright Resonance</h4>
              <ol>
                <li>Practice with "ee" vowel for brightness</li>
                <li>Say "bee, see, dee, fee, gee"</li>
                <li>Maintain bright quality with other vowels</li>
                <li>Practice "beet, bat, boot, boat, but"</li>
                <li>Focus on consistent brightness</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>3. Intonation Patterns (2 minutes)</h3>
            <div className="exercise-steps">
              <h4>Melodic Speech</h4>
              <ol>
                <li>Practice with exaggerated pitch variation</li>
                <li>Say "How are you today?" with rising intonation</li>
                <li>Try different emotional expressions</li>
                <li>Practice uptalk on statements: "I went to the store?"</li>
                <li>Record and analyze your patterns</li>
              </ol>

              <h4>Smooth Transitions</h4>
              <ol>
                <li>Practice pitch glides between words</li>
                <li>Connect phrases with smooth pitch changes</li>
                <li>Read sentences with flowing intonation</li>
                <li>Focus on musicality in speech</li>
                <li>Avoid abrupt pitch breaks</li>
              </ol>
            </div>
          </div>

          <div className="exercise">
            <h3>4. Articulation Refinement (2 minutes)</h3>
            <div className="exercise-steps">
              <h4>Soft Consonants</h4>
              <ol>
                <li>Practice "p, t, k" sounds gently</li>
                <li>Say "paper, table, cake" with soft contacts</li>
                <li>Avoid harsh or explosive sounds</li>
                <li>Maintain precision without force</li>
                <li>Focus on smooth airflow</li>
              </ol>

              <h4>Vowel Clarity</h4>
              <ol>
                <li>Practice pure vowel sounds: "ah, eh, ee, oh, oo"</li>
                <li>Ensure clear differentiation</li>
                <li>Practice in words: "bat, bet, beat, boat, boot"</li>
                <li>Maintain vowel quality through phrases</li>
                <li>Focus on consistent mouth positioning</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="application-practice">
        <h2>Application & Integration (2 minutes)</h2>
        <p>Practice using your new voice qualities in realistic speaking situations.</p>

        <div className="application-exercises">
          <div className="application-exercise">
            <h3>Conversational Practice</h3>
            <ul>
              <li>Read aloud from news articles or books</li>
              <li>Practice introducing yourself</li>
              <li>Record common phrases you use daily</li>
              <li>Practice phone conversation scenarios</li>
              <li>Work on maintaining consistency</li>
            </ul>
          </div>

          <div className="application-exercise">
            <h3>Emotional Expression</h3>
            <ul>
              <li>Practice expressing different emotions</li>
              <li>Say "I'm so excited" with genuine enthusiasm</li>
              <li>Express concern: "Are you okay?"</li>
              <li>Practice empathy: "I understand how you feel"</li>
              <li>Maintain voice qualities across emotions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="weekly-progressions">
        <h2>Weekly Progression Plans</h2>

        <div className="week-plans">
          <div className="week-plan">
            <h3>Week 1-2: Foundation</h3>
            <ul>
              <li>Focus on breath support and basic pitch work</li>
              <li>Master warm-up routine</li>
              <li>Practice larynx positioning</li>
              <li>Record baseline voice samples</li>
            </ul>
          </div>

          <div className="week-plan">
            <h3>Week 3-4: Integration</h3>
            <ul>
              <li>Combine pitch and resonance work</li>
              <li>Add intonation pattern practice</li>
              <li>Increase phrase length gradually</li>
              <li>Begin conversation practice</li>
            </ul>
          </div>

          <div className="week-plan">
            <h3>Week 5-6: Refinement</h3>
            <ul>
              <li>Focus on articulation clarity</li>
              <li>Practice emotional expression</li>
              <li>Work on consistency</li>
              <li>Add challenging tongue twisters</li>
            </ul>
          </div>

          <div className="week-plan">
            <h3>Week 7-8: Application</h3>
            <ul>
              <li>Practice in real-world scenarios</li>
              <li>Work on maintaining voice under stress</li>
              <li>Refine personal speaking style</li>
              <li>Record progress comparisons</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="troubleshooting">
        <h2>Common Issues and Solutions</h2>

        <div className="issue-solutions">
          <div className="issue">
            <h3>Voice Fatigue After Practice</h3>
            <p><strong>Solution:</strong> Reduce intensity, focus on breath support, ensure proper hydration, and include more rest breaks.</p>
          </div>

          <div className="issue">
            <h3>Inconsistent Pitch</h3>
            <p><strong>Solution:</strong> Use pitch monitoring apps, practice with piano or tuning app, record and analyze your speech.</p>
          </div>

          <div className="issue">
            <h3>Throat Tension</h3>
            <p><strong>Solution:</strong> Add neck and jaw stretches, focus on breath-driven phonation, reduce practice intensity.</p>
          </div>

          <div className="issue">
            <h3>Difficulty with Resonance</h3>
            <p><strong>Solution:</strong> Use physical feedback (hand on chest/face), practice with "ng" sounds, work with voice teacher.</p>
          </div>
        </div>
      </section>

      <section className="tracking-progress">
        <h2>Tracking Your Progress</h2>

        <div className="tracking-methods">
          <div className="tracking-method">
            <h3>Daily Recording</h3>
            <ul>
              <li>Record the same phrase daily</li>
              <li>Compare weekly recordings</li>
              <li>Note improvements and challenges</li>
              <li>Track consistency over time</li>
            </ul>
          </div>

          <div className="tracking-method">
            <h3>Practice Journal</h3>
            <ul>
              <li>Log daily practice time</li>
              <li>Note exercises that work best</li>
              <li>Record any vocal issues</li>
              <li>Track overall comfort and confidence</li>
            </ul>
          </div>

          <div className="tracking-method">
            <h3>Self-Assessment Checklist</h3>
            <ul>
              <li>Pitch consistency: ☐ Needs work ☐ Improving ☐ Good</li>
              <li>Resonance placement: ☐ Needs work ☐ Improving ☐ Good</li>
              <li>Breath support: ☐ Needs work ☐ Improving ☐ Good</li>
              <li>Articulation clarity: ☐ Needs work ☐ Improving ☐ Good</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Supporting Resources</h2>
        <div className="resource-links">
          <Link to="/voice-feminization" className="resource-link">
            Complete Feminization Guide →
          </Link>
          <Link to="/vocal-health" className="resource-link">
            Vocal Health & Safety →
          </Link>
          <Link to="/tools-apps" className="resource-link">
            Practice Tools & Apps →
          </Link>
          <Link to="/faqs" className="resource-link">
            Common Questions →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DailyExercises