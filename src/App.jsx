import React from "react";
import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";

export default function App() {
const [isDark, setIsDark] = React.useState(true);
console.log(isDark)

function handleClick() {
    // console.log('click')
   return  setIsDark(prevIsDark=> !prevIsDark)
}

  return (
    <div>
      <Header toggleDarkMode={handleClick} darkMode={isDark}/>
      <MainComponent darkMode={isDark}/>
    </div>
  );
}
