import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div className="page">
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Mengqi Wang (he/him).</p>
                <p>I enjoy coding because it's both a creative and a problem-solving process. I also get to learn content knowledge about a particular field associated with a project.</p>
                <p>I was once a teacher, and I am currently a K-12 Outreach Coordinator at the Confucius Institute, University of Utah, where I both manage and create projects to enhance Chinese language pedagogy and cultural exchange. Thanks to my past experience, I have learned to work well with people, and see most things as learning opportunities. As much as I love my current position, I have decided to start a new adventure in web development.</p>
            </Content>
        </div>
    )
}

export default AboutPage