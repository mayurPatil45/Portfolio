import React from "react";
import { useState, useContext, useEffect } from 'react';
import '../styles/NavBar.css';
import { ThemeContext } from '../App';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [hamburgeropen, setHamburgerOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((th) => (th === "light" ? "dark" : "light"));
    }

    const updateActiveLink = () => {
        const sections = ['home', 'about', 'education', 'projects', 'tech', 'contact'];

        for (const section of sections) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveLink(section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();

        return () => {
            window.removeEventListener('scroll', updateActiveLink);
        };
    }, []);


    return (
        <div className="navbar-wrapper">
            {/* the left portion  */}
            <div className="left">
                <div className="logo-container">
                    <h1><a href="/">&lt;MP/&gt;</a></h1>
                </div>
                <div className="toggle-btn" >
                    <i onClick={toggleTheme} className={theme === "dark" ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"}></i>
                </div>
            </div>

            {/* the right portion */}
            <div className={hamburgeropen ? 'right open' : 'right'}>
                <a
                    href="#home"
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('home')}>
                    Home
                </a>

                <a
                    href="#about"
                    className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('about')}>
                    About
                </a>

                <a
                    href="#education"
                    className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('education')}>
                    Education
                </a>

                <a
                    href="#projects"
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('projects')}>
                    Projects
                </a>

                <a
                    href="#tech"
                    className={activeLink === 'tech' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('tech')}>
                    Tech
                </a>

                <a
                    href="#contact"
                    className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('contact')}>
                    Contact
                </a>


                {/* social callouts  */}
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/mayurpatil27" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/mayurPatil45" target="_blank" rel="noreferrer"><i className="fa-brands fa-github-alt"></i></a>
                    <a href="https://x.com/themayur27" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.stopstalk.com/user/profile/mayurPatil45" target="_blank" rel="noreferrer"><i className="fa-brands fa-solid fa-user"></i></a>
                </div>
            </div>
            <button
                onClick={() => setHamburgerOpen(!hamburgeropen)}
                className="hamburger-icon">
                <i className={hamburgeropen ? "fa-solid fa-xmark" : " fa-solid fa-bars"}></i>
            </button>

        </div>
    );
}
export default NavBar;
