import React,{useState, useRef} from "react";
import { useInView } from "react-intersection-observer";
import '../styles/About.css';

const About =()=>{

    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    
    return( 
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}><i class="fa-solid fa-user"></i> About <span className="track">Me</span></h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hi Pals, Namaste 🙏.</p>
                    <p>I'm a Pre-Final Year Undergraduate student at VIT Pune, on a journey to pursue a Bachelor of Technology in Artificial Intelligence and Data Science. My passion lies in Competitive Programming, mastering Data Structures and Algorithms, and crafting engaging web experiences.</p>
                    <p>I like to explore different technologies and practice brainstorming coding problems on different coding platforms such as Codechef, Codeforces, Leetcode, and GFG. I am also a Full Stack Developer and have done some projects on that.</p>
                    <p>I'm fluent in Java, JavaScript, React, Python, C++, and MySQL, both with my fingers and my passion for coding. When it comes to communication, I'm comfortable in English, Hindi, and Marathi.</p>
                    <p>When I'm not immersed in the world of tech, I indulge in some downtime. I'm a huge fan of "Haikyu!!" (and you should be too if you haven't watched it yet). On weekends, I fire up my mobile for some BGMI action. And, when I'm craving some outdoor fun, I enjoy playing Cricket, Badminton, and Chess.</p>
                    <p>Let's connect and explore the exciting possibilities that the world of technology has to offer. Together, we can create, innovate, and inspire. 🚀🌟</p>
                </div>
            </main>
        </>
    );
}

export default About;