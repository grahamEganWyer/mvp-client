
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import { AllStars } from './components/AllStars'
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

  // handleSearch = () => {
  //   axios
  //     .get('/api/warcraftlogs-client', { 
  //       params: {  
  //         name: this.state.name, 
  //         serverSlug: this.state.serverSlug, 
  //         serverRegion: this.state.serverRegion
  //        } 
  //       })
  //     .then(res => this.setState({characterPerformance: res.data}))
  // }



  millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {

    return <AppContainer />

  }
}


export default App;