import { Link } from 'react-router-dom'
import './page-common.css'

function VocalHealth() {
  return (
    <div className="page-container">
      <h1>Vocal Health & Safety: Protect Your Voice While Training</h1>
      <p className="intro-text">
        Essential guidelines for maintaining vocal health during voice feminization and training exercises
      </p>

      <section className="vocal-health-intro">
        <h2>Why Vocal Health Matters</h2>
        <p>
          Your voice is a delicate instrument that requires proper care and maintenance. Whether you're working
          on voice feminization, singing, or general vocal improvement, protecting your vocal health should
          always be your top priority. Vocal injuries can take months to heal and may require professional
          medical intervention.
        </p>

        <div className="health-principles">
          <h3>Core Principles of Vocal Health</h3>
          <ul>
            <li>Prevention is always better than treatment</li>
            <li>Gradual progress prevents injury</li>
            <li>Rest is as important as practice</li>
            <li>Hydration is essential for vocal function</li>
            <li>Professional guidance ensures safe technique</li>
            <li>Listen to your body's warning signs</li>
          </ul>
        </div>
      </section>

      <section className="anatomy-basics">
        <h2>Understanding Your Vocal Anatomy</h2>

        <div className="anatomy-section">
          <h3>Vocal Cord Structure</h3>
          <p>
            The vocal cords (technically called vocal folds) are two bands of muscle tissue that vibrate
            to produce sound. They're covered by a delicate mucous membrane that can be easily injured
            by strain, dehydration, or improper technique.
          </p>

          <div className="anatomy-details">
            <h4>Key Components:</h4>
            <ul>
              <li><strong>Vocal Folds:</strong> The vibrating tissue that creates sound</li>
              <li><strong>Larynx:</strong> The voice box containing the vocal folds</li>
              <li><strong>Epiglottis:</strong> Protects the airway during swallowing</li>
              <li><strong>Thyroid Cartilage:</strong> The largest cartilage (Adam's apple)</li>
              <li><strong>Cricoid Cartilage:</strong> Ring-shaped cartilage below thyroid</li>
            </ul>
          </div>
        </div>

        <div className="anatomy-section">
          <h3>Supporting Structures</h3>
          <p>
            Healthy voice production involves much more than just the vocal cords. The entire respiratory
            system, resonance cavities, and articulatory structures work together.
          </p>

          <div className="supporting-structures">
            <ul>
              <li><strong>Diaphragm:</strong> Primary breathing muscle for voice support</li>
              <li><strong>Ribcage:</strong> Provides framework for breath support</li>
              <li><strong>Pharynx:</strong> Throat cavity for resonance</li>
              <li><strong>Oral cavity:</strong> Mouth space for articulation and resonance</li>
              <li><strong>Nasal cavity:</strong> Additional resonance space</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hydration-nutrition">
        <h2>Hydration and Nutrition</h2>

        <div className="hydration-guidelines">
          <h3>Optimal Hydration</h3>
          <p>
            Proper hydration is crucial for vocal health. The vocal cords need to stay moist to
            vibrate efficiently and avoid injury.
          </p>

          <div className="hydration-tips">
            <h4>Daily Hydration Goals:</h4>
            <ul>
              <li>8-10 glasses of water daily (64-80 oz)</li>
              <li>Increase intake during dry weather or air conditioning</li>
              <li>Drink room temperature water for optimal absorption</li>
              <li>Start hydrating well before voice use</li>
              <li>Continue hydration throughout the day</li>
            </ul>

            <h4>Hydrating vs. Dehydrating Substances:</h4>
            <div className="substance-lists">
              <div className="helpful-substances">
                <h5>Helpful for Hydration:</h5>
                <ul>
                  <li>Plain water</li>
                  <li>Herbal teas (caffeine-free)</li>
                  <li>Water with lemon</li>
                  <li>Coconut water</li>
                  <li>Warm water with honey</li>
                </ul>
              </div>

              <div className="harmful-substances">
                <h5>Dehydrating Substances:</h5>
                <ul>
                  <li>Alcohol</li>
                  <li>Caffeine (coffee, tea, soda)</li>
                  <li>Medications (antihistamines, diuretics)</li>
                  <li>Dry, processed foods</li>
                  <li>Excessive salt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="nutrition-guidelines">
          <h3>Vocal-Friendly Nutrition</h3>

          <div className="beneficial-foods">
            <h4>Foods That Support Vocal Health:</h4>
            <ul>
              <li><strong>Fruits:</strong> Apples, grapes, melons (high water content)</li>
              <li><strong>Vegetables:</strong> Cucumber, celery, leafy greens</li>
              <li><strong>Healthy fats:</strong> Olive oil, avocados, nuts</li>
              <li><strong>Lean proteins:</strong> Fish, chicken, legumes</li>
              <li><strong>Whole grains:</strong> Oats, quinoa, brown rice</li>
            </ul>
          </div>

          <div className="foods-to-avoid">
            <h4>Foods to Limit or Avoid:</h4>
            <ul>
              <li><strong>Dairy before voice use:</strong> Can increase mucus production</li>
              <li><strong>Spicy foods:</strong> May cause acid reflux</li>
              <li><strong>Citrus fruits:</strong> Acidic, may irritate sensitive throats</li>
              <li><strong>Chocolate:</strong> Contains caffeine and may cause reflux</li>
              <li><strong>Fried, fatty foods:</strong> Can slow digestion and cause reflux</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="warm-up-cooldown">
        <h2>Warm-Up and Cool-Down Protocols</h2>

        <div className="warm-up-section">
          <h3>Pre-Practice Warm-Up (5-10 minutes)</h3>
          <p>
            Always warm up your voice before intensive practice or training. Cold muscles
            are more prone to injury.
          </p>

          <div className="warm-up-routine">
            <h4>Step-by-Step Warm-Up:</h4>
            <ol>
              <li><strong>Body Relaxation (2 minutes):</strong>
                <ul>
                  <li>Gentle neck rolls and shoulder shrugs</li>
                  <li>Jaw massage and gentle opening/closing</li>
                  <li>Face and scalp massage</li>
                </ul>
              </li>
              <li><strong>Breathing Exercises (2 minutes):</strong>
                <ul>
                  <li>Deep diaphragmatic breathing</li>
                  <li>Breath awareness and control</li>
                  <li>Gentle breath support engagement</li>
                </ul>
              </li>
              <li><strong>Gentle Vocal Sounds (3-6 minutes):</strong>
                <ul>
                  <li>Humming at comfortable pitch</li>
                  <li>Lip trills (motorboat sounds)</li>
                  <li>Gentle "mah" or "nay" sounds</li>
                  <li>Easy vocal slides within comfortable range</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="cool-down-section">
          <h3>Post-Practice Cool-Down (3-5 minutes)</h3>
          <p>
            Cool down after intensive voice work to help your voice recover and prevent stiffness.
          </p>

          <div className="cool-down-routine">
            <h4>Cool-Down Steps:</h4>
            <ol>
              <li><strong>Gentle Descending Sounds:</strong> Easy "ah" sounds moving down in pitch</li>
              <li><strong>Humming:</strong> Comfortable, relaxed humming</li>
              <li><strong>Breathing:</strong> Return to natural, relaxed breathing</li>
              <li><strong>Hydration:</strong> Sip room temperature water</li>
              <li><strong>Rest:</strong> Allow voice complete rest for 10-15 minutes</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="injury-prevention">
        <h2>Injury Prevention Strategies</h2>

        <div className="prevention-guidelines">
          <h3>Safe Practice Techniques</h3>

          <div className="technique-guidelines">
            <h4>Gradual Progression:</h4>
            <ul>
              <li>Increase practice time gradually (5 minutes weekly)</li>
              <li>Work on one technique element at a time</li>
              <li>Allow adaptation time between intensity increases</li>
              <li>Never rush progress for quick results</li>
            </ul>

            <h4>Proper Technique Focus:</h4>
            <ul>
              <li>Prioritize breath support over forcing sounds</li>
              <li>Avoid excessive tension in neck, jaw, or throat</li>
              <li>Use adequate volume without shouting</li>
              <li>Maintain good posture during practice</li>
            </ul>

            <h4>Rest and Recovery:</h4>
            <ul>
              <li>Take breaks every 15-20 minutes during practice</li>
              <li>Allow complete voice rest between intensive sessions</li>
              <li>Get adequate sleep for tissue repair</li>
              <li>Plan rest days in your practice schedule</li>
            </ul>
          </div>
        </div>

        <div className="environmental-factors">
          <h3>Environmental Considerations</h3>

          <div className="environment-tips">
            <h4>Optimal Practice Environment:</h4>
            <ul>
              <li>Humidity level between 40-60%</li>
              <li>Clean air free from pollutants and allergens</li>
              <li>Comfortable temperature (68-72°F)</li>
              <li>Good ventilation without direct drafts</li>
              <li>Minimal background noise for clear self-monitoring</li>
            </ul>

            <h4>Environmental Hazards to Avoid:</h4>
            <ul>
              <li>Dry, heated air without humidification</li>
              <li>Cigarette smoke and other irritants</li>
              <li>Excessive air conditioning or heating</li>
              <li>Dusty or allergenic environments</li>
              <li>Loud environments requiring vocal strain</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="warning-signs">
        <h2>Warning Signs and When to Stop</h2>

        <div className="immediate-stop-signs">
          <h3>Stop Immediately If You Experience:</h3>
          <div className="warning-list">
            <ul>
              <li><strong>Pain or discomfort</strong> in throat, neck, or chest</li>
              <li><strong>Voice cracking</strong> or sudden voice breaks</li>
              <li><strong>Hoarseness</strong> that persists after rest</li>
              <li><strong>Complete voice loss</strong> or significant reduction</li>
              <li><strong>Breathing difficulty</strong> during vocalization</li>
              <li><strong>Persistent coughing</strong> during or after practice</li>
              <li><strong>Throat dryness</strong> that doesn't improve with water</li>
              <li><strong>Unusual fatigue</strong> after normal practice duration</li>
            </ul>
          </div>
        </div>

        <div className="concerning-symptoms">
          <h3>Symptoms Requiring Medical Attention:</h3>
          <div className="medical-attention-list">
            <ul>
              <li>Hoarseness lasting more than 2 weeks</li>
              <li>Complete voice loss lasting more than 3 days</li>
              <li>Pain when swallowing or speaking</li>
              <li>Blood in saliva or when coughing</li>
              <li>Persistent throat clearing or coughing</li>
              <li>Feeling of something stuck in the throat</li>
              <li>Sudden change in voice quality</li>
              <li>Difficulty breathing while speaking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="recovery-protocols">
        <h2>Recovery and Healing Protocols</h2>

        <div className="minor-irritation">
          <h3>Managing Minor Vocal Irritation</h3>

          <div className="recovery-steps">
            <h4>Immediate Care:</h4>
            <ul>
              <li>Complete vocal rest for 24-48 hours</li>
              <li>Increase hydration significantly</li>
              <li>Use a humidifier in sleeping/living areas</li>
              <li>Gentle throat massage externally</li>
              <li>Warm (not hot) herbal teas with honey</li>
            </ul>

            <h4>Gradual Return to Voice Use:</h4>
            <ol>
              <li>Start with gentle humming after rest period</li>
              <li>Progress to easy, comfortable speaking</li>
              <li>Gradually return to normal voice use</li>
              <li>Resume training only when completely comfortable</li>
              <li>Reduce intensity and duration initially</li>
            </ol>
          </div>
        </div>

        <div className="professional-help">
          <h3>When to Seek Professional Help</h3>

          <div className="professional-types">
            <h4>Healthcare Professionals for Vocal Issues:</h4>
            <ul>
              <li><strong>Otolaryngologist (ENT):</strong> Medical doctor specializing in throat conditions</li>
              <li><strong>Speech-Language Pathologist:</strong> Specialist in voice therapy and rehabilitation</li>
              <li><strong>Voice Teacher/Coach:</strong> Professional trained in safe vocal technique</li>
              <li><strong>Laryngologist:</strong> ENT subspecialist focusing specifically on voice</li>
            </ul>

            <h4>What to Expect:</h4>
            <ul>
              <li>Laryngoscopy to visualize vocal cords</li>
              <li>Voice quality assessment</li>
              <li>Breathing and posture evaluation</li>
              <li>Personalized recovery plan</li>
              <li>Technique modification recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lifestyle-factors">
        <h2>Lifestyle Factors Affecting Vocal Health</h2>

        <div className="lifestyle-category">
          <h3>Sleep and Rest</h3>
          <ul>
            <li>7-9 hours of quality sleep for tissue repair</li>
            <li>Elevate head slightly to reduce acid reflux</li>
            <li>Use humidifier in bedroom during dry weather</li>
            <li>Avoid late-night voice use before sleep</li>
          </ul>
        </div>

        <div className="lifestyle-category">
          <h3>Exercise and Physical Health</h3>
          <ul>
            <li>Regular cardiovascular exercise improves breath support</li>
            <li>Yoga and stretching maintain good posture</li>
            <li>Core strengthening supports diaphragmatic breathing</li>
            <li>Avoid excessive throat clearing during exercise</li>
          </ul>
        </div>

        <div className="lifestyle-category">
          <h3>Stress Management</h3>
          <ul>
            <li>High stress can cause vocal tension</li>
            <li>Practice relaxation techniques regularly</li>
            <li>Address anxiety about voice change process</li>
            <li>Maintain realistic expectations and patience</li>
          </ul>
        </div>

        <div className="lifestyle-category">
          <h3>Medication Considerations</h3>
          <ul>
            <li>Some medications can dry vocal cords</li>
            <li>Antihistamines reduce natural lubrication</li>
            <li>Blood pressure medications may affect voice</li>
            <li>Consult healthcare providers about vocal side effects</li>
          </ul>
        </div>
      </section>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resource-links">
          <Link to="/voice-feminization" className="resource-link">
            Safe Feminization Techniques →
          </Link>
          <Link to="/daily-exercises" className="resource-link">
            Healthy Practice Routines →
          </Link>
          <Link to="/tools-apps" className="resource-link">
            Voice Monitoring Tools →
          </Link>
          <Link to="/faqs" className="resource-link">
            Health-Related FAQs →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VocalHealth