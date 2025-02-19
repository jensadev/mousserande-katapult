import { useEffect, useState, useRef } from 'react'

function App() {

  return (
    <div className="App">
      <main className="wrapper">
        <header className="hero region flow">
          <div className="intro">
            Hejsan
          </div>
          <h1>En <span className="secondary">trebuchet</span> och kaströrelsen</h1>
          <p>Hur vi kan använda teknik för att göra det komplexa tillgängligt för alla!</p>
        </header>
        <section className="region flow">
          <h2>Sak <span className="primary">mer</span> sak</h2>
          <p>Stuff</p>
        </section>
      </main>
    </div>
  )
}

export default App