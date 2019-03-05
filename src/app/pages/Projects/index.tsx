import React from 'react';

// Styling
import { Heading, Subtitle } from './styles';

// Components
import ProjectCard from './components/ProjectCard';

// Assets
import Bearbot from './assets/images/bearbot.png';

const Projects: React.FunctionComponent<{}> = () => (
    <>
        <h1 css={Heading}>Projects</h1>
        <p css={Subtitle}>These are some projects I've worked on.</p>
        <ProjectCard
            projectBackgroundColor={"#7089DB"}
            projectDescriptionBackgroundColor={"#9BAFAF"}
            projectTextColor={"#2E3228"}
            projectName={"Bearbot"}
            projectDescription={"An open-source Discord bot made with JavaScript and Discord.js."}
            projectImage={Bearbot}
            projectImageBackgroundColor={"#36393E"}
            githubUrl={"https://github.com/Bearbot/Bearbot"}
        />
    </>
);

export default Projects;