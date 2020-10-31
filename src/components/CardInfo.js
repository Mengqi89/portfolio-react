import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import link from '../assets/icons/link.svg'
import github from '../assets/icons/github.svg'

import { useSpring, animated } from 'react-spring' 

function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    const makeTechs = (techs) => {
        return techs.map((tech, index) => {
            return <Col className="font-weight-bold" key={index}>{tech}</Col>
        })
    }
    
    return (
        <animated.div className="w-card-info" style={style}>
            <p className="w-card-title">{props.title}</p>
            <p className="w-card-sub-title font-italic">{props.subTitle}</p>
            <Container className="p-0"><Row>{makeTechs(props.techs)}</Row></Container>
            <div>
                <a href={props.link} target="_blank" rel="noopenner noreferrer"><img className="icon" src={github} alt="github icon"></img></a>
                <a href={props.github} target="_blank" rel="noopenner noreferrer"><img className="icon" src={link} alt="link icon"></img></a>
            </div>
        </animated.div>
    )
}

export default CardInfo