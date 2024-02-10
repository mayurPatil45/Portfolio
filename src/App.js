import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Scroller from './components/Scroller';

export const ThemeContext = createContext(null);

function App() {

  const getTheme = () => {
    return localStorage.getItem('theme') || 'light'; // default is light
  }

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <BRouter>
          <Routes>
            <Route path="/" element={
              <>
                <NavBar />
                <Banner />
                <About />
                <Education />
                <Projects />
                <Tech />
                <Contact />
                <Footer />
                <Scroller />
              </>
            }>
            </Route>
          </Routes>
        </BRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
