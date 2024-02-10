import React from "react";
import '../styles/Education.css'
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="education">
                <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}> <i class="fa-solid fa-graduation-cap"></i> My <span className="track">Education</span><span className="heading-highlight"></span></h2>
                <div className="underline" ></div>
            </header>
            <div ref={myCardRef} className="cards-container" >
                <div className={cardVisible ? "Card one show" : "Card one"} >
                    <div className="Card-inner">
                        <h3>Bachelor Of Technology In Artificial Intelligence and Data Science</h3>
                        <p>Vishwakarma Institute Of Technology</p>
                        <h3 className="heading-highlight">2021-2025</h3>
                    </div>
                </div>

                <div className={cardVisible ? "Card two show" : "Card two"}>
                    <div className="Card-inner" >
                        <h3>Higher Secondary | Physics-Chemistry-Mathematics</h3>
                        <p>Arts, Science and Commerce College, Chopda</p>
                        <h3 className="heading-highlight">2019-2021</h3>
                    </div>
                </div>

                <div className={cardVisible ? "Card three show" : "Card three"}>
                    <div className="Card-inner" >
                        <h3>Secondary | Maharashtra State Board</h3>
                        <p>Vivekanand Vidyalaya (sec.) Chopda   </p>
                        <h3 className="heading-highlight">2009-2019</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;