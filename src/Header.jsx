import reactLogo from "./assets/react.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <header className={`header ${props.darkMode ? "dark": ""}`}>
      <div className="header__logo">
        <img className="header__img-logo" src={reactLogo} alt="Logo-React" />
        <h3 className="header__logo-title">ReactFacts</h3>
      </div>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </header>
  );
}
