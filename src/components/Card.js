import React from 'react'
import CardInfo from '../components/CardInfo'

function Card (props) {
    return (
        <div className="d-inline-block w-card" onMouseEnter={(e) => props.mouse(props.item.id, e)}>
            <img className="w-card-image hover-zoom" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} techs={props.item.techs} github={props.item.github}/> }
        </div>
    )
}

export default Card