
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from '../image3.jpg'
import image2 from '../image6.jpg'
import image3 from '../image7.jpg'
import { useState, useEffect } from 'react';
const HomePage = () => {
    useEffect(()=>{
        document.title="Home"
    }, []);
    return (

        <div className="color text-center">
            <h1>WELCOME TO EBUG TRACKER</h1><br />
            <Container>
                <Row>
                    <Col sm={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                               
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Second slide"
                                />

                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />

                                
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={6}>
                        <p className="text-center mt-5 mb-2">
                        A bug tracking system can prioritize bugs and assign issues.This helps to spot repetitive problems and concentrate on important issues.This improves team's productivity and reduces cost of development.

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}
export default HomePage