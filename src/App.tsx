import { useEffect, useState } from 'react'
import "./App.css"
import throwImage from "./assets/kast.png"

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [weight, setWeight] = useState('');
  const [vx, setVx] = useState('');
  const [vy, setVy] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getOpacity = () => {
    const maxScroll = 300; // Adjust this value as needed
    return Math.min(scrollY / maxScroll, 1);
  };

  const calculateDistance = () => {
    const g = 9.8; // Gravitationsaccelerationen

    // Beräkna tiden i luften
    const t = (2 * parseFloat(vy)) / g;

    // Beräkna kastavståndet
    const distance = parseFloat(vx) * t;

    // Visa resultatet
    setResult(`Kastavståndet är ${distance.toFixed(2)} meter.`);
  };

  return (
    <div className="App">
      <main className="wrapper" style={{ backgroundColor: `rgba(36, 36, 36, ${getOpacity()})` }}>
        <header className="hero region flow">
          <video autoPlay loop muted className="bgvideo">
            <source src="/FullSizeRender.MP4" type='video/mp4' />
          </video>
          <div className="center bounce region">
            <span className="material-symbols-outlined dark">
              arrow_downward
            </span>
          </div>
          <h1>En <span className="secondary">trebuchet</span> och kaströrelsen</h1>
          <p>Hur vi kan använda teknik för att göra det komplexa tillgängligt för alla!</p>
        </header>
        <section className="region flow">
          <h2><span className="primary">Vad</span>?</h2>
          <p>Vad är en <a href="https://sv.wikipedia.org/wiki/Blida">trebuchet?</a> En trebuchet är en medeltida kastmaskin som användes för att slunga tunga föremål mot borgar och stadsmurar. I modern tid används trebucheter mest av entusiaster som gillar att slunga pumpor och andra föremål.</p>
          <h2><span className="tertiary">Hur</span>?</h2>
          <p>En trebuchet får sin kraft från en motvikt som släpps för att skapa energi. Denna energi överförs till en kastarm, som sedan slungar iväg föremålet mot målet.</p>
          <h2><span className="secondary">Varför</span>?</h2>
          <p>Det här är ett exempel på hur vi kan tillämpa matematik inom fysiken. Genom att använda matematiska formler kan vi beräkna resultatet av kaströrelsen. Här är en förenklad version av formeln som används:</p>
          <p><strong>x = v<sub>x</sub> &middot; (2 &middot; v<sub>y</sub> / g)</strong></p>
          <ul>
            <li><strong>x</strong> är kastavståndet.</li>
            <li><strong>v<sub>x</sub></strong> är den initiala horisontella hastigheten.</li>
            <li><strong>v<sub>y</sub></strong> är den initiala vertikala hastigheten.</li>
            <li><strong>g</strong> är gravitationsaccelerationen (ca 9,8 m/s²).</li>
          </ul>
          <p>Var inte orolig om du inte förstår formeln nu, du har inte börjat på teknikprogrammet ännu.</p>

          <img src={throwImage} alt="Bild av beräkning" />

          <h2>Teknik för <span className='tertiary'>alla</span></h2>
          <p>För att visa och göra det tillgängligt, kommer vi att testa med en modell av en trebuchet som är 3D-printad från vårt makerspace. Detta är ett exempel på hur vi kan presentera något mekaniskt komplext. Genom att använda modern teknik som 3D-printning kan vi skapa exakta modeller som hjälper oss att förstå och experimentera med fysikens principer på ett praktiskt sätt.</p>
          <p>Men tekniken låter oss även förenkla komplex matematik så att vi alla kan använda den, med formuläret nedan så kan du beräkna hur långt trebuchet-modellen förväntas kasta en kula.</p>
        </section>
        <section className="region flow">
          <h1>Beräkna kastavstånd</h1>
          <form id="trebuchetForm">
            <label htmlFor="weight">Motvikt (kg):</label>
            <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />

            <label htmlFor="vx">Horisontell hastighet (m/s):</label>
            <input type="number" id="vx" name="vx" value={vx} onChange={(e) => setVx(e.target.value)} required />

            <label htmlFor="vy">Vertikal hastighet (m/s):</label>
            <input type="number" id="vy" name="vy" value={vy} onChange={(e) => setVy(e.target.value)} required />

            <button type="button" onClick={calculateDistance}>Beräkna</button>
          </form>
          <p id="result">{result}</p>
        </section>
      </main>
    </div>
  )
}

export default App