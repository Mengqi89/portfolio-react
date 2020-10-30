import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import './App.css'


class App extends React.Component {
  state = {
    title: 'Mengqi Wang',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Be Relentless',
      subTitle: 'Projects that make a difference',
      text: 'Checkout my projects below'
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
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}></Route>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />}></Route>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> }></Route>
          <Footer />
        </Router>
    )
  }
  
}

export default App
