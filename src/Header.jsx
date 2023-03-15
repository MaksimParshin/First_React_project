import reactLogo from "./assets/react.svg";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img-logo" src={reactLogo} alt="Logo-React" />
        <h3 className="header__logo-title">ReactFacts</h3>
      </div>
      <h4 className="header__description">React Course - Project 1</h4>
    </header>
  );
}
