//import img from '../reg.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './About.css'
import card1 from '../Card1.jpg'
import card2 from '../Card2.jpg'
import card4 from '../Card4.jpg'
import { useState, useEffect } from 'react';
import Header from './Header';
import FooterPage from './FooterPage';

const About = () => {

    useEffect(()=>{
        document.title="About"
    }, []);
    return (
        <div>
            <Header/>
        <br></br>
            <h2 className="text-center">About Page</h2><br/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card style={{ width: '18rem'}} className="card-size card">
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Creative Solutions</Card.Title>
                                <Card.Text>
                                    We are here to provide the best solution for your business problems
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }} className="card-size card">
                            <Card.Img variant="top" src={card4} />
                            <Card.Body>
                                <Card.Title>Services</Card.Title>
                                <Card.Text>
                                    We peovide solutions for technologies like Java, Python, React, Spring etc.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }} className="card-size card">
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Assistence</Card.Title>
                                <Card.Text>
                                    We are avilable 24/7 to provide you business solutions
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <FooterPage/>
        </div>
    );
}
export default About