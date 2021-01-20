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
                <Col className="text-center col-internship" xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 0 }}><img className="internship-pic" src={frame} alt="frame logo"></img></Col>
                <Col className="text-left col-internship" xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 0 }}>
                    <p><h3>Frame</h3></p>
                    <p>I have joined Frame, a solar proposal start-up, as an intern, since September 2020. I have built front-end components and created unit tests for front-end components and data models.</p>
                    <p>Despite being completely new to the tech stack, I have been able to meet weekly deliverable goals and build new features from the beginning.</p>
                    <p className="font-weight-bold">Tech Stack: Vue.js, Node.js, Firebase, BootstrapVue, Sass</p>
                </Col>
            </Row>
            <Row className="justify-content-around py-5">
                <Col className="text-left col-internship" xs={{ span: 12, offset: 0, order: 12 }} md={{ span: 6, offset: 0, order: 1 }}>
                    <p><h3>Just Utah Coders</h3></p>
                    <p>
                        From March to August 2020, I joined <a href="https://github.com/JustUtahCoders/" target="_blank" rel="noopenner noreferrer">Just Utah Coders</a> as an intern to help build <a href="https://utahexpungements.org" target="_blank" rel="noopenner noreferrer">utahexpungements.org</a>. I jumped on board with minimal supervision and worked with Salt Lake County Expungement Coordinator to improve the form tools. I have addressed more than 70% of the two issue collections compiled by the Coordinator (<a href="https://github.com/JustUtahCoders/utahexpungements.org/issues/202" target="_blank" rel="noopenner noreferrer">here</a> and <a href="https://github.com/JustUtahCoders/utahexpungements.org/issues/183" target="_blank" rel="noopenner noreferrer">here</a>).
                    </p>
                    <p className="font-weight-bold">Tech Stack: React, Node Express.js, Firebase</p>
                </Col>
                <Col className="text-center col-internship" xs={{ span: 12, offset: 0, order: 1 }} md={{ span: 6, offset: 0, order: 12 }}><img className="internship-pic" src={juc} alt="just utah coders website screenshot"></img></Col>
            </Row>
        </Container>
    )
}

export default Tech