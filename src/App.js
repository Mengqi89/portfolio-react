import React from 'react'
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
      <div className="App">
        {this.state.title}
      </div>
    )
  }
  
}

export default App
