import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import './App.css'

import html from './assets/icons/html.svg'
import css from './assets/icons/css.svg'
import javascript from './assets/icons/javascript.svg'
import react from './assets/icons/react.svg'
import nodejs from './assets/icons/nodejs.svg'
import postgresql from './assets/icons/postgresql.svg'
import vue from './assets/icons/vue.svg'
import firebase from './assets/icons/firebase.svg'
import sass from './assets/icons/sass.svg'
import bootstrap from './assets/icons/bootstrap.svg'
import jQuery from './assets/icons/jquery.jpg'

class App extends React.Component {
  state = {
    title: 'Mengqi Wang',
    techs: [
      { name: 'html', icon: html },
      { name: 'css', icon: css },
      { name: 'javascript', icon: javascript },
      { name: 'react', icon: react },
      { name: 'nodejs', icon: nodejs },
      { name: 'postgresql', icon: postgresql },
      { name: 'jQuery', icon: jQuery},
      { name: 'vue', icon: vue },
      { name: 'firebase', icon: firebase },
      { name: 'sass', icon: sass },
      { name: 'bootstrap', icon: bootstrap }
    ],
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
      { title: 'Resume', path: '/resume' }
    ],
    home: {
      title: 'Welcome!',
      subTitle: 'I\'m Mengqi, a web developer in Salt Lake City.',
      text: ''
    },
    about: {
      title: 'About me'
    },
    contact: {
      title: 'Let\'s talk'
    }
  }

  render() {
    return (
        <Router>
        <NavBar />
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} techs={this.state.techs} />}></Route>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />}></Route>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />}></Route>
          <Route path="resume" ></Route>
          <Footer />
        </Router>
    )
  }
  
}

export default App
