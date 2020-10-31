import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Tech from '../components/Tech'
import Internships from '../components/Internships'

function HomePage(props) { 
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Tech techs={props.techs} />
            <Internships />
            <Carousel />
        </div>
    )
}

export default HomePage