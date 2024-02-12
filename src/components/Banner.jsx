import React from "react";
// import mypic from '../assets/myphoto.png';
import heroImg from '../assets/hero.png';
import '../styles/Banner.css';


const Banner = () => {
    return (
        <>
            <div className="banner-wrapper" id="home">

                <section className="banner-slogan-container">
                    <p className="bn-small-text">
                        Hi there,
                    </p>
                    <h1>I'm <span>Mayur Patil <span className="Emoji">👋</span></span>, <br /> Welcome to my Portfolio website</h1>
                    <p>
                        <i className="fa-solid fa-laptop-code"></i> {"  "}
                        A passionate self-taught full stack developer
                    </p>
                    <div className="banner-buttons-container">
                        <button><a href="#contact">Let's talk ✉</a></button>
                        <button id="resume-btn"> <a href="https://drive.google.com/file/d/1ByufOLF0OfP5wSiyNy_pMXyLAzmg86Kl/view?usp=sharing" target="_blank" rel="noreferrer">Resume ↗</a></button>
                    </div>
                </section>

                <section className="banner-image-container">
                    <div className="banner-sticker">
                        <p>Open for freelance work</p>
                        <p>Competitive Programmer</p>
                    </div>

                    <img src={heroImg} alt="" />
                    <div className="cover">
                        <p>Web Dev</p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Banner;