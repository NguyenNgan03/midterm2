import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState(true);

  function onSunClick() {
    setWeather(true);
  }

  function onRainClick() {
    setWeather(false);
  }

  function getTitle() {
    return weather ? "It's Sunny" : "It's Rainy";
  }

  function getBackgroundColor() {
    return weather ? "sunny" : "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
