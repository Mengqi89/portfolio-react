import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'

function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-4">
                    <Col className="p-0" md={3} sm={12}>
                        Mengqi Wang</Col>
                    <Col className="p-0 d-flex justify-content-end">Copyright @ 2020 - Mengqi Wang. All Rights Reserved. Icons by&nbsp;<a href="https://www.flaticon.com/authors/freepik">Freepik</a></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer