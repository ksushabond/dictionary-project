import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">📖 Make your words meaningful</header>
        <main>
          <Dictionary defaultKeyword="spring" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/ksushabond/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Oxana Bond
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
