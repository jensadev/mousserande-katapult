import { useState } from 'react';

function Form() {
  const [counterWeight, setCounterWeight] = useState('0');
  // const [ballWeight, setBallWeight] = useState('0.017');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculateDistance = () => {
    const g = 9.82; // Gravitation
    const h1 = 0.08; // Height of counterweight drop
    const h2 = 0.42; // Height of projectile release

    const lk = 0.3; // Length of counterweight arm
    const lv = 0.04; // Length of projectile arm
    const M = lk / lv; // Mass ratio

    const CW = parseFloat(counterWeight);
    const BW = 0.017;

    if (isNaN(CW) || isNaN(BW) || CW <= 0 || BW <= 0) {
      setError('Felaktig inmatning, mata in ett positivt tal.');
      setResult('');
      return;
    }

    setError('');

    const vv = Math.sqrt((CW * g * h1 - BW * g * h2) * 2 / (CW + BW * M * M));

    const vk = vv * M;
    const a = 0.7853981633974;
    const h = 0.43;

    const t = vk * Math.sin(a) / g + Math.sqrt((vk * Math.sin(a) / g) ** 2 + 2 * h / g);

    const s = vk * t * Math.cos(a);
    setResult(`Kastavståndet är ${s.toFixed(2)} meter.`);
  };

  return (
    <section className="region flow">
      <h3>Beräkna kastavstånd</h3>
      <form id="trebuchetForm" className="throw-form flow">
        <div className="input-group">
          <label htmlFor="counterWeight">Motvikt (kg):</label>
          <input
            type="number"
            id="counterWeight"
            name="counterWeight"
            value={counterWeight}
            onChange={(e) => setCounterWeight(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="ballWeight">Projektilens vikt (kg):</label>
          <input
            type="number"
            id="ballWeight"
            name="ballWeight"
            value="0.017"
            readOnly
          />
        </div>
        <button type="button" onClick={calculateDistance} className="button">
          Beräkna
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p id="result">{result}</p>
    </section>
  );
}

export default Form;
