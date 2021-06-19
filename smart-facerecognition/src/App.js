import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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
      box: {},
      route: 'signin',
      isSignedin: false,
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedin:false})
    }else if(route === 'home'){
      this.setState({isSignedin:true})
    }
    this.setState({route:route})
  }

  render(){
    
  return (
    <div className="App">
      <Particles  className='particles'
      params = {particleOptions} />
      <Navigation onRouteChange={this.onRouteChange} isSignedin = {this.state.isSignedin}/>
      {this.state.route ==='home'?
      <div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box= {this.state.box} imageUrl={this.state.imageUrl} />
      </div>
      :
      (
        this.state.route === 'signin' ?
        <Signin onRouteChange={this.onRouteChange}/>:
        <Register onRouteChange={this.onRouteChange} />
      )
  }
  </div>
)
}
}
export default App;
