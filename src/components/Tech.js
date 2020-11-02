import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Tech(props) {
    const makeTechs = (techs) => {
        return techs.map((t, index) => {
            return <Col xs={{ span: 3, offset: 0 }} key={index}><img className="icon" src={t.icon} alt={t.name}></img></Col>
        })
    } 
    return (
        <Container className="tech-container">
            <h3 className="display-5 font-weight-light">I have worked with these technologies</h3>
            <div className="tech-list">
                <Row className="justify-content-center py-5">
                    {makeTechs(props.techs)}
                </Row>
            </div>

        </Container>
    )
}

export default Tech