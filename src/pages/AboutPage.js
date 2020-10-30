import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Mengqi Wang.</p>
                <p>I am a graduate of Thinkful. I enjoy coding because it's both a creative and a problem-solving process. I have experience in React, Node, Express and PostgreSQL.</p>
                <p>My background in education and project coordination also equips me with a growth mindset, solid communciation skills and the ability to manage complex needs.</p>
            </Content>
        </div>
    )
}

export default AboutPage