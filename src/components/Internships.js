import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Tech(props) {
    return (
        <Container fluid={false}>
            <h3 className="display-5 font-weight-light text-center">Internships</h3>
            <Row className="justify-content-around py-5">
                <Col className="text-center">Picture</Col>
                <Col className="text-center">Utahexpungements</Col>
            </Row>
            <Row className="justify-content-around py-5">
                <Col className="text-center">Picture</Col>
                <Col className="text-center">Utahexpungements</Col>
            </Row>
        </Container>
    )
}

export default Tech