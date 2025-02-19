import { useEffect, useState } from 'react'
import "./App.css"
import throwImage from "./assets/kast.png"

function App() {
  const [scrollY, setScrollY] = useState(0)

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

  return (
    <div className="App">
      <main className="wrapper" style={{ backgroundColor: `rgba(36, 36, 36, ${getOpacity()})` }}>
        <header className="hero region flow"
        >
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
          <p>Vad är en <a href="https://sv.wikipedia.org/wiki/Blida">trebuchet?</a> En trebuchet är en medeltida slunga för att kasta tunga saker på borgar och stadsmurar.</p>
          <p>I modern tid är det nog mest en skapelse för nördar och folk som gillar att slunga Pumpr.</p>
          <h2><span className="primary">Hur</span>?</h2>
          <p>En trebuchet får sin kraft från en motvikt som släpps för att skapa energi, som i sin tur överförs till en kastarm. Kastarmen slungar sedan iväg den tunga saken mot målet.</p>
          <p>Det här är ett fantastiskt exempel på hur fysikens lagar kan användas för att slunga iväg en tung projektil.</p>
          <h2>Varför?</h2>
          <p>Det här är ett exempel på hur vi kan tillämpa matematik i fysik. Vi kan sedan i sin tur arbeta med webbdesign och programmering för att skapa en presentation av något komplext.</p>

          <p>Vi kan beräkna resultatet av den här kaströrelsen genom att tillämpa matematik i fysiken. Den formel som används ser ut såhär.</p>
          <p>Något som ni inter förväntas kunna eller förstå, men det är något som ni kommer att få lära er om ni läser teknikprogrammet.</p>

          <p>Men teknik kan också handla om att tillgängligöra något för alla. Vi kan i den meningen förvandla något komplext till en applikation som alla kan använda, för att försöka räkna ut hur långt en trebuchet kan slunga något.</p>
          <img src={throwImage} alt="Bild av beräkning" />

        </section>
      </main>
    </div>
  )
}

export default App