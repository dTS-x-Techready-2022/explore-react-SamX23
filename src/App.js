import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Counter } from "./features/Counter";
import iauction from "iauction";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    iauction({
      countdownInMin: 1,
      startDate: "2022/04/26 17:33:00",
      endDate: "2022/04/26 17:33:00",
      callback: (time) => console.log(time),
      // time ~ { start: [bool], time: [string], reps: [integer] }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Hello World</Button>;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
