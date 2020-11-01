import React from 'react'
import Hero from '../components/Hero'
// import Content from '../components/Content'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import email from '../assets/icons/email.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'


function ContactPage(props) {
    return (
        <div className="page">
            <Hero title={props.title} />
            <Container>
                <Row className="justify-content-center flex-nowrap">
                    <Col md={{ span: 2, offset: 0 }}>
                        <a href="mailto:wmq516@gmail.com" target="_blank" rel="noopenner noreferrer"><img className="icon" src={email} alt="email icon" ></img></a>
                    </Col>
                    <Col md={{ span: 2, offset: 0 }}>
                        <a href="https://www.linkedin.com/in/mengqiwang/" target="_blank" rel="noopenner noreferrer"><img className="icon" src={linkedin} alt="linkedin icon"></img></a>
                    </Col>
                    <Col md={{ span: 2, offset: 0 }}>
                        <a href="https://github.com/Mengqi89" target="_blank" rel="noopenner noreferrer"><img className="icon" src={github} alt="github icon"></img></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPage