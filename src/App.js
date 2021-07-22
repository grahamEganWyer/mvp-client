
import './App.css';
import React, { Component } from 'react'
import { AppContainer } from './components/AppContainer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      characterPerformance: {},
      name: "beastheart", 
      serverSlug: "yojamba", 
      serverRegion: "us" 
    }
  };

  handleChange= (e) => {
    var key = e.target.id
    var value = e.target.value
    console.log(key);
    console.log(value);
    this.setState({ [key]: value })
  }

  render() {
    return <AppContainer />
  }
}


export default App;