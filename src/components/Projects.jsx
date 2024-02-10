import React from "react";
import { useInView } from "react-intersection-observer";
import projects from "../data/projects";
import '../styles/Projects.css';
import Project from "./Project";

const Projects = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <>
            <main className="project-wrapper" id="projects">
                <header className="title-container" id="education">
                    <h1 ref={myTitleRef} className="show"> <i class="fas fa-cog"></i> <span className="track">Projects</span><span className="heading-highlight"></span></h1>
                    <div className="underline"></div>
                </header>
                <section
                    ref={myCardRef}
                    className="project-container">
                    {
                        projects.length > 0 ? (
                            projects.map((projectItem, index) => (
                                <Project
                                    key={projectItem.id}
                                    cardVisible={cardVisible}
                                    projectItem={projectItem}
                                />
                            ))
                        ) : (
                            <p>No projects available</p>
                        )
                    }
                </section>
            </main>
        </>
    );
}

export default Projects;