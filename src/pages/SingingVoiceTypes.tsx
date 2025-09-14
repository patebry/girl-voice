import { Link } from 'react-router-dom'
import './page-common.css'

function SingingVoiceTypes() {
  return (
    <div className="page-container">
      <h1>Female Singing Voice Types: Complete Classification Guide</h1>
      <p className="intro-text">
        Understand soprano, mezzo-soprano, and alto voice types with ranges, characteristics, and repertoire
      </p>

      <section className="voice-classification-intro">
        <h2>Understanding Female Voice Classification</h2>
        <p>
          Female singing voices are traditionally classified into three main categories based on vocal range,
          timbre, and tessitura (the most comfortable singing range). This classification system helps singers
          choose appropriate repertoire and develop their voices effectively.
        </p>

        <div className="classification-factors">
          <h3>Classification Factors</h3>
          <ul>
            <li><strong>Vocal Range:</strong> The span from lowest to highest singable notes</li>
            <li><strong>Tessitura:</strong> The most comfortable and resonant singing range</li>
            <li><strong>Timbre:</strong> The unique tone color and quality of the voice</li>
            <li><strong>Vocal Weight:</strong> The thickness or lightness of vocal sound</li>
            <li><strong>Passaggio:</strong> The transition points between vocal registers</li>
          </ul>
        </div>
      </section>

      <section className="soprano-section">
        <h2>Soprano: The Highest Female Voice</h2>
        <div className="voice-details">
          <div className="range-info">
            <h3>Vocal Range</h3>
            <p><strong>Standard Range:</strong> C4 - C6 (Middle C to High C)</p>
            <p><strong>Frequency Range:</strong> 261 - 1047 Hz</p>
            <p><strong>Tessitura:</strong> G4 - G5 (most comfortable range)</p>
          </div>

          <div className="characteristics">
            <h3>Soprano Characteristics</h3>
            <ul>
              <li>Bright, clear tone quality</li>
              <li>Agile and flexible voice</li>
              <li>Strong head voice and upper register</li>
              <li>Light to medium vocal weight</li>
              <li>Excellent for coloratura passages</li>
            </ul>
          </div>

          <div className="soprano-subtypes">
            <h3>Soprano Subtypes</h3>

            <div className="subtype">
              <h4>Coloratura Soprano</h4>
              <p><strong>Range:</strong> C4 - F6 or higher</p>
              <p><strong>Characteristics:</strong> Extremely agile, capable of elaborate ornamentation, very light voice</p>
              <p><strong>Famous Examples:</strong> Joan Sutherland, Natalie Dessay</p>
            </div>

            <div className="subtype">
              <h4>Lyric Soprano</h4>
              <p><strong>Range:</strong> C4 - C6</p>
              <p><strong>Characteristics:</strong> Warm, expressive tone, moderate agility, beautiful legato line</p>
              <p><strong>Famous Examples:</strong> Renée Fleming, Anna Netrebko</p>
            </div>

            <div className="subtype">
              <h4>Spinto Soprano</h4>
              <p><strong>Range:</strong> B3 - C6</p>
              <p><strong>Characteristics:</strong> Powerful voice with dramatic capabilities, fuller tone</p>
              <p><strong>Famous Examples:</strong> Leontyne Price, Eva Marton</p>
            </div>

            <div className="subtype">
              <h4>Dramatic Soprano</h4>
              <p><strong>Range:</strong> A3 - C6</p>
              <p><strong>Characteristics:</strong> Large, powerful voice, rich lower register, operatic strength</p>
              <p><strong>Famous Examples:</strong> Birgit Nilsson, Jessye Norman</p>
            </div>
          </div>

          <div className="repertoire">
            <h3>Soprano Repertoire Highlights</h3>
            <ul>
              <li><strong>Opera:</strong> Mozart's Queen of the Night, Puccini's Mimi, Verdi's Violetta</li>
              <li><strong>Art Songs:</strong> Strauss Lieder, French mélodie</li>
              <li><strong>Oratorio:</strong> Handel's Messiah soprano solos</li>
              <li><strong>Musical Theatre:</strong> Christine (Phantom), Eliza (My Fair Lady)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mezzo-soprano-section">
        <h2>Mezzo-Soprano: The Middle Female Voice</h2>
        <div className="voice-details">
          <div className="range-info">
            <h3>Vocal Range</h3>
            <p><strong>Standard Range:</strong> A3 - A5</p>
            <p><strong>Frequency Range:</strong> 220 - 880 Hz</p>
            <p><strong>Tessitura:</strong> D4 - F5 (most comfortable range)</p>
          </div>

          <div className="characteristics">
            <h3>Mezzo-Soprano Characteristics</h3>
            <ul>
              <li>Rich, warm middle register</li>
              <li>Strong lower notes with good projection</li>
              <li>Darker, more mature timbre than soprano</li>
              <li>Excellent for dramatic expression</li>
              <li>Versatile across multiple genres</li>
            </ul>
          </div>

          <div className="mezzo-subtypes">
            <h3>Mezzo-Soprano Subtypes</h3>

            <div className="subtype">
              <h4>Lyric Mezzo-Soprano</h4>
              <p><strong>Range:</strong> A3 - A5</p>
              <p><strong>Characteristics:</strong> Warm, expressive, lighter than dramatic mezzo</p>
              <p><strong>Famous Examples:</strong> Frederica von Stade, Anne Sofie von Otter</p>
            </div>

            <div className="subtype">
              <h4>Dramatic Mezzo-Soprano</h4>
              <p><strong>Range:</strong> G3 - A5</p>
              <p><strong>Characteristics:</strong> Powerful, dark tone, strong lower register</p>
              <p><strong>Famous Examples:</strong> Marilyn Horne, Dolora Zajick</p>
            </div>

            <div className="subtype">
              <h4>Coloratura Mezzo-Soprano</h4>
              <p><strong>Range:</strong> A3 - B♭5</p>
              <p><strong>Characteristics:</strong> Agile with coloratura capabilities, bright for a mezzo</p>
              <p><strong>Famous Examples:</strong> Cecilia Bartoli, Joyce DiDonato</p>
            </div>
          </div>

          <div className="repertoire">
            <h3>Mezzo-Soprano Repertoire Highlights</h3>
            <ul>
              <li><strong>Opera:</strong> Bizet's Carmen, Mozart's Cherubino, Verdi's Azucena</li>
              <li><strong>Art Songs:</strong> Brahms Lieder, Russian song cycles</li>
              <li><strong>Oratorio:</strong> Bach's St. Matthew Passion alto solos</li>
              <li><strong>Musical Theatre:</strong> Elphaba (Wicked), Mrs. Lovett (Sweeney Todd)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="alto-section">
        <h2>Alto/Contralto: The Lowest Female Voice</h2>
        <div className="voice-details">
          <div className="range-info">
            <h3>Vocal Range</h3>
            <p><strong>Standard Range:</strong> F3 - F5 (Alto) / E3 - E5 (Contralto)</p>
            <p><strong>Frequency Range:</strong> 175 - 698 Hz</p>
            <p><strong>Tessitura:</strong> A3 - D5 (most comfortable range)</p>
          </div>

          <div className="characteristics">
            <h3>Alto/Contralto Characteristics</h3>
            <ul>
              <li>Rich, deep lower register</li>
              <li>Dark, mature timbre</li>
              <li>Powerful chest voice</li>
              <li>Excellent for sacred and choral music</li>
              <li>Rare voice type (especially true contralto)</li>
            </ul>
          </div>

          <div className="alto-distinction">
            <h3>Alto vs. Contralto Distinction</h3>

            <div className="distinction-item">
              <h4>Alto</h4>
              <p>More common designation, often used in choral settings. Many singers labeled as "alto" are actually low mezzo-sopranos.</p>
            </div>

            <div className="distinction-item">
              <h4>Contralto</h4>
              <p>True contralto is very rare, with genuinely deep, rich low notes and a darker overall timbre throughout the range.</p>
              <p><strong>Famous Examples:</strong> Marian Anderson, Kathleen Ferrier</p>
            </div>
          </div>

          <div className="repertoire">
            <h3>Alto/Contralto Repertoire Highlights</h3>
            <ul>
              <li><strong>Opera:</strong> Verdi's Ulrica, Rossini's Isabella</li>
              <li><strong>Art Songs:</strong> Mahler's "Kindertotenlieder"</li>
              <li><strong>Oratorio:</strong> Handel's "He was despised" from Messiah</li>
              <li><strong>Choral:</strong> Bach cantata alto solos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="voice-development">
        <h2>Developing Your Voice Type</h2>

        <div className="development-tips">
          <div className="tip-category">
            <h3>For Young Singers</h3>
            <ul>
              <li>Voice classification may change as you mature</li>
              <li>Focus on healthy technique over voice type</li>
              <li>Explore different repertoire safely</li>
              <li>Work with qualified voice teachers</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>Training Considerations</h3>
            <ul>
              <li>Build from your strongest register</li>
              <li>Develop smooth register transitions</li>
              <li>Choose appropriate repertoire for your level</li>
              <li>Maintain vocal health throughout training</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>Finding Your Type</h3>
            <ul>
              <li>Work with experienced voice teachers</li>
              <li>Consider tessitura over extreme range</li>
              <li>Listen to your natural timbre</li>
              <li>Be patient - classification takes time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="voice-care-specific">
        <h2>Voice Care for Each Type</h2>

        <div className="care-by-type">
          <div className="care-category">
            <h3>Soprano Care</h3>
            <ul>
              <li>Protect high notes with proper breath support</li>
              <li>Maintain flexibility with agility exercises</li>
              <li>Avoid pushing for extreme high notes</li>
            </ul>
          </div>

          <div className="care-category">
            <h3>Mezzo-Soprano Care</h3>
            <ul>
              <li>Balance middle voice development</li>
              <li>Strengthen both ends of range gradually</li>
              <li>Maintain warmth without sacrificing clarity</li>
            </ul>
          </div>

          <div className="care-category">
            <h3>Alto/Contralto Care</h3>
            <ul>
              <li>Develop upper register without losing low notes</li>
              <li>Maintain chest voice strength</li>
              <li>Balance richness with vocal flexibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Related Resources</h2>
        <div className="resource-links">
          <Link to="/daily-exercises" className="resource-link">
            Daily Vocal Exercises →
          </Link>
          <Link to="/vocal-health" className="resource-link">
            Vocal Health & Safety →
          </Link>
          <Link to="/voice-descriptions" className="resource-link">
            Voice Qualities & Descriptions →
          </Link>
          <Link to="/voice-acting" className="resource-link">
            Voice Acting Applications →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SingingVoiceTypes