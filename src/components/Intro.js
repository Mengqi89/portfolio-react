import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Intro() {
    return (
        <div>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        <h3 className="display-4 font-weight-light">I'm Mengqi <span className="pronunciation">[mung-chee]</span>, a web developer based in Salt Lake City.</h3>
                        <h3 className="lead font-weight-light">Check out my projects below</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro