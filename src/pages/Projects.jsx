import React from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCards';
import { Container, Row, Col } from 'react-bootstrap';


const Projects = () => {
    const projectData = [
        {
            title: 'Rx Reflection',
            text: 'Medication Tacker',
            imageSrc: '',
            link1: 'https://rx-reflection-9623b73a46aa.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Rx-Reflection',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Block Buddies',
            text: 'Lego build tracker',
            imageSrc: '',
            link1: 'https://block-buddies-e3447dd8369c.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Block-Buddies',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Coding Quiz',
            text: 'A quiz to test your coding knowledge',
            imageSrc: '',
            link1: 'https://floconno.github.io/code-quiz/',
            link2: 'https://github.com/floconno/code-quiz',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Work Day Scheduler',
            text: 'Help you schedule your work day',
            imageSrc: '',
            link1: 'https://floconno.github.io/work-day-scheduler/',
            link2: 'https://github.com/floconno/work-day-scheduler',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'ReadMe Generator',
            text: 'Generates custom readme.md files',
            imageSrc: '',
            link1: 'https://drive.google.com/file/d/10oOKUiUt2ncyMLvhP8bOP54KWraqlOqp/view',
            link2: 'https://github.com/floconno/readme-generator',
            button1Text: 'Check out the demo!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'SVG Logo Generator',
            text: 'Generates a custom SVG logo',
            imageSrc: '',
            link1: 'https://drive.google.com/file/d/1mnwiQxU97kmKI34pwmJcC6lcDyLFV6ka/view',
            link2: 'https://github.com/floconno/svg-logo-maker',
            button1Text: 'Check out the demo!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'E-commerce Back End',
            text: 'ORM for the backend of an e-commerce site',
            imageSrc: '',
            link1: 'https://drive.google.com/file/d/1_p2i2beqb1lHknH8tVfJSaiF6BJoLFo6/view',
            link2: 'https://github.com/floconno/ecom-backend',
            button1Text: 'Check out the demo!',
            button2Text: 'GitHub Repo'
        }
    ];

    return (
        <Container style={{ marginTop: '5rem'}}>
            <Row>
                {projectData.map((project, index) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <ProjectCard
                            title={project.title}
                            text={project.text}
                            imageSrc={project.imageSrc}
                            link1={project.link1}
                            link2={project.link2}
                            button1Text={project.button1Text}
                            button2Text={project.button2Text}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;