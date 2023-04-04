import "./MainComponent.css";

export default function MainComponent(props) {
  return (
    <main className={`${props.darkMode ? 'dark': ''} main`}>
      <h1 className="main__title">Fun facts about React</h1>
      <ul className="main__list">
        <li className="main__item">Was first released in 2013</li>
        <li className="main__item">Was originally created by Jordan Walke</li>
        <li className="main__item">Has well over 100K stars on GitHub</li>
        <li className="main__item">Is maintained by Facebook</li>
        <li className="main__item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
