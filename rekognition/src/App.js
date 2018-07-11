import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'bb7d20b56e764451914105df6c224add'
});

const particlesOptions = {
  particles: {
    number: {
      value: 60,
        density: {
          enable: true,
          value_area: 500
        
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
          />
        <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
         <FaceRecognition />
       
       </div>
    );
  }
}

export default App;
