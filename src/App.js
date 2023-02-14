
import './App.css';
import Home from './components/Home';
import { useState } from "react"
import NavBar from './components/NavBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);



  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Home />

    </div>
  );
}

export default App;
