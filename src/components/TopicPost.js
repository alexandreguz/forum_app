import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



const TopicPost = () => {
    return (
        <>

            <Card>
                <Card.Header as="h5"><Image src="holder.js/171x180" roundedCircle /> Name of the person</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        This is the content of the post of this specific forum Subject
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default TopicPost