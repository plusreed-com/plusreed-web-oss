import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface IProps {
    projectBackgroundColor: string,
    projectDescriptionBackgroundColor: string,
    projectTextColor: string,
    projectName: string,
    projectImage: any,
    projectImageBackground?: any,
    projectDescription: string,
    githubUrl: string
}

const ProjectCard: React.FunctionComponent<IProps> = (props) => (
    <>
        <div css={css`
            background: ${props.projectBackgroundColor};
            color: ${props.projectTextColor};
        `}>
            <img 
                src={props.projectImage}
                css={css`
                    background: ${props.projectImageBackground || 'transparent'};
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-left: 20px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    display: inline-block;
                `}
            />
            <span css={css`
                    font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 36px;
                    color: ${props.projectTextColor};
                    display: inline-block;
                    vertical-align: middle;
            `}>
                {props.projectName}
            </span>
        </div>
        <div css={css`
            background: ${props.projectDescriptionBackgroundColor};
            color: ${props.projectTextColor};
            display: inline-block;
            text-align: center;
            width: 100%;
            position: relative;
        `}>
            <span css={css`
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
                line-height: normal;
                font-size: 18px;
                margin-top: 11px;
                margin-left: 5px;
                margin-right: 5px;
                margin-bottom: 7px;
                vertical-align: middle;
            `}>
                {props.projectDescription}
            </span>
            <br />
            <a
                href={props.githubUrl}
                css={css`
                    color: ${props.projectTextColor};
                    font-size: 24px;
                    margin-left: 5px;
                `}
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </>
);

export default ProjectCard;