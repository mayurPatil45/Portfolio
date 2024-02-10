import html from '../assets/html5-svgrepo-com.svg'
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb-logo-svgrepo-com.svg';
import git from '../assets/git.png';
import github from '../assets/github.png';
import '../styles/Tech.css';
import { useInView } from 'react-intersection-observer';

const Tech = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();

    return (
        <div className="stack-container" id="tech">
            <header className="title-container" id="education">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}> <i class="fa-solid fa-graduation-cap"></i> Tech <span className="track">Stack</span><span className="heading-highlight"></span></h2>
            <div className="underline" ></div>
            </header>
            <div className="big-flex-box">
                <div className="left-side">
                    {/* contains the techs */}
                    <div>
                        <img src={html} alt="html" />
                        <h4>HTML</h4>
                    </div>
                    <div>
                        <img src={css} alt="css" />
                        <h4>CSS</h4>
                    </div>
                    <div>
                        <img src={js} alt="js" />
                        <h4>JS</h4>
                    </div>
                    <div>
                        <img src={react} alt="react" />
                        <h4>React</h4>
                    </div>
                    <div>
                        <img src={nodejs} alt="node" />
                        <h4>NodeJS</h4>
                    </div>
                    <div>
                        <img src={express} alt="express" />
                        <h4>ExpressJS</h4>
                    </div>
                    <div>
                        <img src={mongodb} alt="mongo" />
                        <h4>MongoDB</h4>
                    </div>
                    <div>
                        <img src={sass} alt="sass" />
                        <h4>SCSS</h4>
                    </div>
                    <div>
                        <img src={git} alt="git" />
                        <h4>Git</h4>
                    </div>
                    <div>
                        <img src={github} alt="github" />
                        <h4>GitHub</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tech;
