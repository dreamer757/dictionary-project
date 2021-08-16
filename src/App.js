import logo from "./CJlogo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="word" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Courtney Jones and open sourced on{" "}
            <a href="https://github.com/dreamer757/dictionary-project">
              Github
            </a>
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}
