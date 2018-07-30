import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {appearHome, property} = this.state;
    return (
      <div className="App">
        <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>

        <Home property={property} />
      </div>
    );
  }
}

export default App;
