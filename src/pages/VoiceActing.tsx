import { Link } from 'react-router-dom'
import './page-common.css'

function VoiceActing() {
  return (
    <div className="page-container">
      <h1>Girl Voice in Media & Acting: Character Portrayal and Performance</h1>
      <p className="intro-text">
        Master feminine character voices for animation, video games, audiobooks, and theatrical performance
      </p>

      <section className="voice-acting-intro">
        <h2>The Art of Feminine Character Voice</h2>
        <p>
          Voice acting requires the ability to create believable, engaging feminine characters across various
          media formats. Whether for animation, video games, audiobooks, or live performance, mastering
          feminine character voices involves understanding vocal technique, character development, and
          industry-specific requirements.
        </p>

        <div className="industry-overview">
          <h3>Voice Acting Industries</h3>
          <ul>
            <li><strong>Animation:</strong> TV shows, movies, web series</li>
            <li><strong>Video Games:</strong> Character voices, dialogue, narration</li>
            <li><strong>Audiobooks:</strong> Narration and character differentiation</li>
            <li><strong>Commercials:</strong> Brand voices and product promotion</li>
            <li><strong>Podcasts:</strong> Hosting and character work</li>
            <li><strong>Dubbing:</strong> Foreign language content adaptation</li>
            <li><strong>Interactive Media:</strong> Virtual assistants, apps, AR/VR</li>
          </ul>
        </div>
      </section>

      <section className="character-development">
        <h2>Developing Feminine Character Voices</h2>

        <div className="character-analysis">
          <h3>Character Analysis Framework</h3>
          <p>
            Before developing a voice, analyze the character thoroughly to make informed vocal choices
            that serve the story and connect with audiences.
          </p>

          <div className="analysis-elements">
            <h4>Key Character Elements:</h4>
            <ul>
              <li><strong>Age:</strong> Child, teen, young adult, middle-aged, elderly</li>
              <li><strong>Background:</strong> Social class, education, regional origin</li>
              <li><strong>Personality:</strong> Confident, shy, aggressive, nurturing, etc.</li>
              <li><strong>Physical Traits:</strong> Size, health, energy level</li>
              <li><strong>Emotional State:</strong> Current circumstances and mental health</li>
              <li><strong>Relationships:</strong> How they interact with other characters</li>
              <li><strong>Arc:</strong> How the character changes throughout the story</li>
            </ul>
          </div>
        </div>

        <div className="vocal-choices">
          <h3>Making Vocal Choices</h3>

          <div className="choice-categories">
            <div className="choice-category">
              <h4>Pitch and Range</h4>
              <ul>
                <li><strong>Higher pitch:</strong> Youthful, energetic, innocent characters</li>
                <li><strong>Moderate pitch:</strong> Approachable, relatable characters</li>
                <li><strong>Lower pitch:</strong> Mature, authoritative, mysterious characters</li>
                <li><strong>Variable pitch:</strong> Emotional, expressive, animated characters</li>
              </ul>
            </div>

            <div className="choice-category">
              <h4>Pace and Rhythm</h4>
              <ul>
                <li><strong>Fast pace:</strong> Energetic, nervous, or excited characters</li>
                <li><strong>Slow pace:</strong> Thoughtful, seductive, or tired characters</li>
                <li><strong>Variable pace:</strong> Complex, emotional characters</li>
                <li><strong>Specific rhythms:</strong> Regional accents or speech patterns</li>
              </ul>
            </div>

            <div className="choice-category">
              <h4>Quality and Texture</h4>
              <ul>
                <li><strong>Breathy:</strong> Sensual, weak, or intimate characters</li>
                <li><strong>Clear:</strong> Confident, professional characters</li>
                <li><strong>Raspy:</strong> Tough, experienced, or damaged characters</li>
                <li><strong>Smooth:</strong> Sophisticated, calming characters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="character-archetypes">
        <h2>Common Feminine Character Archetypes</h2>

        <div className="archetype-list">
          <div className="archetype">
            <h3>The Ingénue</h3>
            <div className="archetype-details">
              <p><strong>Characteristics:</strong> Innocent, pure, often naive young woman</p>
              <p><strong>Vocal Qualities:</strong></p>
              <ul>
                <li>Higher pitch with youthful quality</li>
                <li>Clear, bright resonance</li>
                <li>Gentle, soft consonants</li>
                <li>Sometimes breathy or hesitant</li>
                <li>Upward inflection patterns</li>
              </ul>
              <p><strong>Examples:</strong> Disney princesses, romantic comedy leads, coming-of-age protagonists</p>
            </div>
          </div>

          <div className="archetype">
            <h3>The Femme Fatale</h3>
            <div className="archetype-details">
              <p><strong>Characteristics:</strong> Seductive, dangerous, mysterious woman</p>
              <p><strong>Vocal Qualities:</strong></p>
              <ul>
                <li>Lower, sultry pitch</li>
                <li>Breathy, intimate quality</li>
                <li>Controlled, deliberate pacing</li>
                <li>Smooth, flowing articulation</li>
                <li>Confident, commanding presence</li>
              </ul>
              <p><strong>Examples:</strong> Film noir characters, seductive villains, mysterious love interests</p>
            </div>
          </div>

          <div className="archetype">
            <h3>The Girl Next Door</h3>
            <div className="archetype-details">
              <p><strong>Characteristics:</strong> Approachable, friendly, relatable woman</p>
              <p><strong>Vocal Qualities:</strong></p>
              <ul>
                <li>Moderate pitch range</li>
                <li>Warm, inviting tone</li>
                <li>Natural, conversational delivery</li>
                <li>Clear articulation</li>
                <li>Genuine, authentic expression</li>
              </ul>
              <p><strong>Examples:</strong> Sitcom characters, romantic leads, best friend roles</p>
            </div>
          </div>

          <div className="archetype">
            <h3>The Wise Woman</h3>
            <div className="archetype-details">
              <p><strong>Characteristics:</strong> Mature, experienced, often maternal figure</p>
              <p><strong>Vocal Qualities:</strong></p>
              <ul>
                <li>Lower, richer pitch</li>
                <li>Controlled, measured pace</li>
                <li>Strong, clear resonance</li>
                <li>Authoritative but warm</li>
                <li>Confident articulation</li>
              </ul>
              <p><strong>Examples:</strong> Mentors, mothers, authority figures, wise queens</p>
            </div>
          </div>

          <div className="archetype">
            <h3>The Spunky Heroine</h3>
            <div className="archetype-details">
              <p><strong>Characteristics:</strong> Energetic, brave, determined young woman</p>
              <p><strong>Vocal Qualities:</strong></p>
              <ul>
                <li>Bright, energetic quality</li>
                <li>Variable pitch for expression</li>
                <li>Quick, animated delivery</li>
                <li>Strong projection</li>
                <li>Confident, decisive tone</li>
              </ul>
              <p><strong>Examples:</strong> Action heroines, adventure protagonists, feisty sidekicks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-skills">
        <h2>Technical Voice Acting Skills</h2>

        <div className="technical-skill">
          <h3>Microphone Technique</h3>
          <div className="skill-details">
            <h4>Distance and Positioning:</h4>
            <ul>
              <li>Maintain consistent distance (6-12 inches typical)</li>
              <li>Adjust for different character volumes</li>
              <li>Use proximity effect for intimate scenes</li>
              <li>Avoid plosives with proper positioning</li>
            </ul>

            <h4>Breath Control:</h4>
            <ul>
              <li>Silent breathing between lines</li>
              <li>Manage breath support for long passages</li>
              <li>Use breath as character element when appropriate</li>
              <li>Prevent mouth noise and clicks</li>
            </ul>
          </div>
        </div>

        <div className="technical-skill">
          <h3>Character Consistency</h3>
          <div className="skill-details">
            <h4>Vocal Memory:</h4>
            <ul>
              <li>Maintain consistent pitch and quality</li>
              <li>Remember character-specific speech patterns</li>
              <li>Keep physical posture consistent for each character</li>
              <li>Use reference recordings for long projects</li>
            </ul>

            <h4>Emotional Continuity:</h4>
            <ul>
              <li>Track character's emotional journey</li>
              <li>Adjust voice for character development</li>
              <li>Maintain believable emotional transitions</li>
              <li>Consider scene context and relationships</li>
            </ul>
          </div>
        </div>

        <div className="technical-skill">
          <h3>Script Analysis</h3>
          <div className="skill-details">
            <h4>Preparation Techniques:</h4>
            <ul>
              <li>Mark emotional beats and transitions</li>
              <li>Identify key words for emphasis</li>
              <li>Plan breathing and pacing</li>
              <li>Research unfamiliar terms or concepts</li>
              <li>Understand character relationships and history</li>
            </ul>

            <h4>Cold Reading Skills:</h4>
            <ul>
              <li>Quick character assessment</li>
              <li>Immediate vocal choices</li>
              <li>Confident delivery of new material</li>
              <li>Adaptability to direction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="industry-specific">
        <h2>Industry-Specific Requirements</h2>

        <div className="industry-section">
          <h3>Animation Voice Acting</h3>
          <div className="industry-details">
            <p><strong>Key Requirements:</strong></p>
            <ul>
              <li>Exaggerated expressions for visual medium</li>
              <li>Ability to match lip sync and timing</li>
              <li>Consistent energy throughout long sessions</li>
              <li>Quick character switching abilities</li>
              <li>Understanding of animation production process</li>
            </ul>

            <p><strong>Common Challenges:</strong></p>
            <ul>
              <li>Maintaining voice health during intense sessions</li>
              <li>Creating believable child characters as adults</li>
              <li>Matching previously established character voices</li>
              <li>Working with limited visual references</li>
            </ul>
          </div>
        </div>

        <div className="industry-section">
          <h3>Video Game Voice Acting</h3>
          <div className="industry-details">
            <p><strong>Unique Aspects:</strong></p>
            <ul>
              <li>Multiple takes for different player choices</li>
              <li>Emotional range from calm to intense combat</li>
              <li>Non-linear recording order</li>
              <li>Technical terminology and fantasy names</li>
              <li>Interactive dialogue systems</li>
            </ul>

            <p><strong>Technical Considerations:</strong></p>
            <ul>
              <li>Consistent character across multiple sessions</li>
              <li>Various emotional states for same lines</li>
              <li>Clear articulation for international audiences</li>
              <li>Stamina for long recording days</li>
            </ul>
          </div>
        </div>

        <div className="industry-section">
          <h3>Audiobook Narration</h3>
          <div className="industry-details">
            <p><strong>Narration Skills:</strong></p>
            <ul>
              <li>Clear, engaging narrative voice</li>
              <li>Distinct character differentiation</li>
              <li>Consistent pacing and energy</li>
              <li>Pronunciation accuracy</li>
              <li>Emotional storytelling ability</li>
            </ul>

            <p><strong>Endurance Requirements:</strong></p>
            <ul>
              <li>6-8 hour recording sessions</li>
              <li>Vocal stamina for entire books</li>
              <li>Consistent quality throughout</li>
              <li>Multiple character voices in single sessions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="training-exercises">
        <h2>Voice Acting Training Exercises</h2>

        <div className="exercise-category">
          <h3>Character Development Exercises</h3>

          <div className="exercise">
            <h4>Character Biography Creation</h4>
            <ol>
              <li>Create detailed backstory for your character</li>
              <li>Determine their vocal qualities based on background</li>
              <li>Practice speaking as the character in different scenarios</li>
              <li>Record character interactions and monologues</li>
            </ol>
          </div>

          <div className="exercise">
            <h4>Emotional Range Work</h4>
            <ol>
              <li>Say the same line with different emotions</li>
              <li>Practice transitioning between emotional states</li>
              <li>Work on subtle emotional variations</li>
              <li>Maintain character consistency across emotions</li>
            </ol>
          </div>
        </div>

        <div className="exercise-category">
          <h3>Technical Skill Building</h3>

          <div className="exercise">
            <h4>Microphone Technique Practice</h4>
            <ol>
              <li>Practice consistent distance maintenance</li>
              <li>Work on eliminating mouth sounds</li>
              <li>Practice different volume levels</li>
              <li>Record and analyze your microphone technique</li>
            </ol>
          </div>

          <div className="exercise">
            <h4>Cold Reading Drills</h4>
            <ol>
              <li>Practice sight-reading various scripts</li>
              <li>Make quick character choices</li>
              <li>Work on immediate emotional connection</li>
              <li>Practice adjusting to direction quickly</li>
            </ol>
          </div>
        </div>

        <div className="exercise-category">
          <h3>Character Consistency Training</h3>

          <div className="exercise">
            <h4>Character Switching</h4>
            <ol>
              <li>Develop 3-5 distinct female character voices</li>
              <li>Practice rapid switching between characters</li>
              <li>Maintain distinct qualities for each</li>
              <li>Record conversations between characters</li>
            </ol>
          </div>

          <div className="exercise">
            <h4>Long-Form Consistency</h4>
            <ol>
              <li>Record 10-minute character monologues</li>
              <li>Check for voice consistency throughout</li>
              <li>Practice maintaining energy and quality</li>
              <li>Work on natural breathing and pacing</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="career-development">
        <h2>Building a Voice Acting Career</h2>

        <div className="career-aspect">
          <h3>Demo Reel Development</h3>
          <div className="demo-guidelines">
            <h4>Character Demo Requirements:</h4>
            <ul>
              <li>3-5 distinct feminine character voices</li>
              <li>30-60 seconds total length</li>
              <li>Professional audio quality</li>
              <li>Variety in age, personality, and energy</li>
              <li>Clear character differentiation</li>
            </ul>

            <h4>Demo Structure:</h4>
            <ol>
              <li>Start with strongest, most commercial voice</li>
              <li>Showcase range but maintain quality</li>
              <li>Include brief character interactions</li>
              <li>End with memorable, distinctive voice</li>
            </ol>
          </div>
        </div>

        <div className="career-aspect">
          <h3>Networking and Marketing</h3>
          <ul>
            <li>Join voice acting communities and forums</li>
            <li>Attend industry conventions and workshops</li>
            <li>Develop relationships with agents and casting directors</li>
            <li>Maintain active social media presence</li>
            <li>Collaborate with other voice actors</li>
            <li>Seek feedback from industry professionals</li>
          </ul>
        </div>

        <div className="career-aspect">
          <h3>Continuous Learning</h3>
          <ul>
            <li>Take classes with established voice coaches</li>
            <li>Study performances in your target genres</li>
            <li>Stay current with industry trends</li>
            <li>Expand into new character types regularly</li>
            <li>Develop technical skills (editing, audio processing)</li>
            <li>Learn about different cultural expressions of femininity</li>
          </ul>
        </div>
      </section>

      <section className="resources-section">
        <h2>Related Resources</h2>
        <div className="resource-links">
          <Link to="/voice-descriptions" className="resource-link">
            Voice Quality Descriptions →
          </Link>
          <Link to="/voice-feminization" className="resource-link">
            Feminine Voice Techniques →
          </Link>
          <Link to="/daily-exercises" className="resource-link">
            Practice Routines →
          </Link>
          <Link to="/vocal-health" className="resource-link">
            Vocal Health for Actors →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VoiceActing