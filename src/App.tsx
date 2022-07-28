import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React = Lo Mejor</h1>
      <div className="card">
        Un contador random
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          Tocame: {count}
        </button>
      </div>

      <p>Click en el boton para acceder a la camara del dispositivo</p>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        capture="environment"
      />

      <p className="read-the-docs">
        Testeando el acceso a la camara
      </p>
    </div>
  );
}

export default App;
