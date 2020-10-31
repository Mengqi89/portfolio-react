import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import juc from '../assets/internships/juc.png'
import frame from '../assets/internships/frame.png'

function Tech(props) {
    return (
        <Container fluid={false}>
            <h3 className="display-5 font-weight-light text-center">Internships</h3>
            <Row className="justify-content-around py-5">
                <Col className="text-center col-internship"><img className="internship-pic" src={frame} alt="frame logo"></img></Col>
                <Col className="text-left col-internship">
                    <p>I have joined Frame, a solar proposal start-up, last September 2020, as an intern. I have worked on customer profile and messaging functions.</p>
                    <p>Despite being completely new to the tech stack, I have been able to meet weekly deliverable goals and build new features from the beginning.</p>
                    <p className="font-weight-bold">Tech Stack: Vue.js, Node.js, Firebase, BootstrapVue, Sass</p>
                </Col>
            </Row>
            <Row className="justify-content-around py-5">
                <Col className="text-left col-internship">
                    <p>
                        From March to August 2020, I joined <a href="https://github.com/JustUtahCoders/" target="_blank" rel="noopenner noreferrer">Just Utah Coders</a> as an intern to help build <a href="https://utahexpungements.org" target="_blank" rel="noopenner noreferrer">utahexpungements.org</a>. I jumped on board with minimal supervision and worked with Salt Lake County Expungement Coordinator to improve the forms tool. I was also able to identify and fix inconsistent datakeys to improve cross-form data population.
                    </p>
                    <p>
                        <a href="https://github.com/JustUtahCoders/utahexpungements.org/issues/202" target="_blank" rel="noopenner noreferrer">Here</a> and <a href="https://github.com/JustUtahCoders/utahexpungements.org/issues/183" target="_blank" rel="noopenner noreferrer">here</a> are the two clusters of issues I mainly contributed to.
                    </p>
                    <p className="font-weight-bold">Tech Stack: React, Node Express.js, Firebase</p>
                </Col>
                <Col className="text-center col-internship"><img className="internship-pic" src={juc} alt="just utah coders website screenshot"></img></Col>
            </Row>
        </Container>
    )
}

export default Tech