import React, { useState } from "react";

function App() {
 
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const onA = (event) => {
    setA(event.target.value);
    setError("");
    setResult("");
  };
  const onB = (event) => {
    setB(event.target.value);
    setError("");
    setResult("");
  };

  const handleCompute = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setError("A and B shall be numbery");
      setResult("");
    } else {
      setError("");
      setResult(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" onKeyUp={onA} />

      <label>B =</label>
      <input type="text" onKeyUp={onB} />

      <label>A + B =</label>
      <input
        type="text"
        value={error ? error : result}
        disabled
        style={{ color: error ? "red" : "black" }}
      />

      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
