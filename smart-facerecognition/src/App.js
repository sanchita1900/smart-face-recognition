import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import React from 'react';


const app = new Clarifai.App({
  apiKey: '76e5aeebb63644b19bb8275ac9591e16',
});

const particleOptions = {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:1000
      }
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
      function(response){
        console.log(response);
      },
      function(err){}
    )
  }
  render(){

  return (
    <div className="App">
      <Particles  className='particles'
      params = {particleOptions} />
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
