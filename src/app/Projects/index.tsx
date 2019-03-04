import React from 'react';

// Components
import ProjectCard from './components/ProjectCard';

// Assets
import DummyPicture from '../Home/assets/images/dummy.png';

const Projects = () => (
    <>
        <ProjectCard
        projectBackgroundColor={"#7089DB"}
        projectDescriptionBackgroundColor={"#9BAFAF"}
        projectTextColor={"#2E3228"}
        projectName={"Bearbot"}
        projectDescription={"An open-source Discord bot made with JavaScript and Discord.js."}
        projectImage={DummyPicture}
        githubUrl={"https://github.com/Bearbot/Bearbot"}
        />
    </>
);

export default Projects;