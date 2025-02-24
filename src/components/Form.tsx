import {useState} from 'react'

function Form() {
  const [counterWeight, setCounterWeight] = useState('0.3')
  const [ballWeight, setBallWeight] = useState('0.015')
  const [result, setResult] = useState('')

  const calculateDistance = () => {
    const g = 9.82 // Gravitation
    const h1 = 0.08 // Height of counterweight drop
    const h2 = 0.42 // Height of projectile release
    
    const lk = 0.3 // Length of counterweight arm
    const lv = 0.04 // Length of projectile arm
    const M = lk / lv // Mass ratio
    
    const CW = parseFloat(counterWeight)
    const BW = parseFloat(ballWeight)

    const vv = Math.sqrt((CW * g * h1 - BW * g * h2) * 2 / (CW + BW * M * M))

    const vk = vv * M
    const a = 0.7853981633974 
    const h = 0.43

    const t = vk * Math.sin(a) / g + Math.sqrt((vk * Math.sin(a) / g) ** 2 + 2 * h / g)

    const s = vk * t * Math.cos(a)
    setResult(`Kastavståndet är ${s.toFixed(2)} meter.`);
  };

  return (
    <section className="region flow">

      <h3>Beräkna kastavstånd</h3>
      <form id="trebuchetForm" className="throw-form flow">
        <div className="input-group">
          <label htmlFor="weight">Motvikt (kg):</label>
          <input type="number" id="weight" name="weight" value={counterWeight} onChange={(e) => setCounterWeight(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="weight">Projektilens vikt (kg):</label>
          <input type="number" id="weight" name="weight" value={ballWeight} onChange={(e) => setBallWeight(e.target.value)} required />
        </div>
        <button type="button" onClick={calculateDistance} className='button'>Beräkna</button>
      </form>
      <p id="result">{result}</p>
    </section>
  )
}

export default Form
