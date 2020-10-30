import React from 'react'
import everest from '../assets/images/everest.jpeg'
import garden from '../assets/images/open-garden.jpeg'
import drizzle from '../assets/images/for-drizzle.jpeg'
import map from '../assets/images/worldmap-hand.jpeg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import Card from '../components/Card'
class Carousel extends React.Component {
    state = {
        items: [
            {
                id: 0,
                title: 'Everest International Education',
                subTitle: 'Everest enables teachers to apply for jobs China.',
                imgSrc: everest,
                link:'https://everest.wmq516.now.sh/',
                selected: false
            },
            {
                id: 1,
                title: 'Open Garden',
                subTitle: 'List homegrown produce for exchange.',
                imgSrc: garden,
                link: 'https://opengarden.wmq516.now.sh/',
                selected: false
            },
            {
                id: 2,
                title: 'ForDrizzle',
                subTitle: 'Know when to water your garden',
                imgSrc: drizzle,
                link: 'https://mengqi89.github.io/for-drizzle/',
                selected: false
            },
            {
                id: 3,
                title: 'Country Capital Quiz',
                subTitle: 'Test your geography.',
                imgSrc: map,
                link: 'https://kylerrenneker.github.io/quizApp/',
                selected: false
            }
        ]
    }

    handleMouseOver = (id) => {

        let items = [...this.state.items]
        
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) { 
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => { 
            return <Card item={item} mouse={(e => this.handleMouseOver(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel