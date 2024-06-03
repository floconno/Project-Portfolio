import React from 'react';
import { Card, Button } from 'react-bootstrap';


const ProjectCard = ({ title, text, imageSrc, link1, link2, button1Text, button2Text }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageSrc} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary" href={link1} style={{ marginRight: '5px' }}>{button1Text}</Button>
                <Button variant="secondary" href={link2}>{button2Text}</Button>
            </Card.Body>
        </Card>
    );
};


export default ProjectCard;
